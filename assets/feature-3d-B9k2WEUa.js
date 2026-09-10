var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as reactExports, j as jsxRuntimeExports, c as createWithEqualityFn, R as React, T as Tb, s as schedulerExports } from "./vendor-react-BUL8WuXG.js";
import { f$ as WebGLRenderer, fb as Raycaster, aj as OrthographicCamera, ak as PerspectiveCamera, j as Scene, ax as PCFSoftShadowMap, az as VSMShadowMap, aw as PCFShadowMap, an as BasicShadowMap, aQ as LinearSRGBColorSpace$1, aZ as SRGBColorSpace$1, at as NoToneMapping, bb as ACESFilmicToneMapping, eu as Layers, C as Color, aR as RGBAFormat, bg as UnsignedByteType, a3 as Vector2, v as Vector3, dz as Clock, b as ColorManagement, g0 as THREE, a7 as REVISION, fJ as TrianglesDrawMode, fH as TriangleFanDrawMode, fI as TriangleStripDrawMode, i as Mesh, eb as IcosahedronGeometry, fe as ShaderMaterial, aK as DoubleSide, fn as Spherical, bn as Quaternion, eJ as MOUSE, fz as TOUCH, fa as Ray, aX as Plane, a8 as Loader, eE as LoaderUtils, a9 as FileLoader, Z as MeshPhysicalMaterial, q as SpotLight, b2 as PointLight, b3 as DirectionalLight, ar as Matrix4, eg as InstancedMesh, s as InstancedBufferAttribute, aV as Object3D, fB as TextureLoader, ec as ImageBitmapLoader, aD as BufferAttribute, aG as InterleavedBuffer, L as LinearMipmapLinearFilter, a2 as NearestMipmapLinearFilter, a1 as LinearMipmapNearestFilter, bu as NearestMipmapNearestFilter, k as LinearFilter, ay as NearestFilter, bt as RepeatWrapping, bs as MirroredRepeatWrapping, aC as ClampToEdgeWrapping, as as PointsMaterial, aa as Material, y as LineBasicMaterial, _ as MeshStandardMaterial, Q as MeshBasicMaterial, e_ as PropertyBinding, ai as BufferGeometry, fl as SkinnedMesh, eB as LineSegments, ew as Line, eA as LineLoop, eW as Points, G as Group, a0 as MathUtils, fj as Skeleton, d3 as AnimationClip, dk as Bone, em as InterpolateDiscrete, en as InterpolateLinear, I as InterleavedBufferAttribute, al as Texture, fP as VectorKeyframeTrack, eP as NumberKeyframeTrack, f2 as QuaternionKeyframeTrack, b0 as FrontSide, ek as Interpolant, dn as Box3, ah as Sphere, dT as DataTextureLoader, am as HalfFloatType, aP as FloatType, dU as DataUtils, c6 as RedFormat, eL as MeshDistanceMaterial, eK as MeshDepthMaterial, f4 as RGBADepthPacking, g1 as UniformsUtils, g2 as ShaderChunk, ef as InstancedBufferGeometry, M as Matrix3, bf as PlaneGeometry, V as Vector4, fU as WebGLRenderTarget, aY as UVMapping, aT as DataTexture, a4 as IntType, c2 as ShortType, c1 as ByteType, a5 as UnsignedIntType, eF as LoadingManager, aW as LinearMipMapLinearFilter, h as NoBlending, m as CubeReflectionMapping, e as EquirectangularReflectionMapping, dJ as CubeTextureLoader, g3 as WebGLCubeRenderTarget } from "./vendor-three-DqkPfKji.js";
const isPromise = (promise) => typeof promise === "object" && typeof promise.then === "function";
const globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a2, b2) => a2 === b2) {
  if (arrA === arrB) return true;
  if (!arrA || !arrB) return false;
  const len = arrA.length;
  if (arrB.length !== len) return false;
  for (let i = 0; i < len; i++) if (!equal(arrA[i], arrB[i])) return false;
  return true;
}
function query(fn, keys = null, preload2 = false, config = {}) {
  if (keys === null) keys = [fn];
  for (const entry2 of globalCache) {
    if (shallowEqualArrays(keys, entry2.keys, entry2.equal)) {
      if (preload2) return void 0;
      if (Object.prototype.hasOwnProperty.call(entry2, "error")) throw entry2.error;
      if (Object.prototype.hasOwnProperty.call(entry2, "response")) {
        if (config.lifespan && config.lifespan > 0) {
          if (entry2.timeout) clearTimeout(entry2.timeout);
          entry2.timeout = setTimeout(entry2.remove, config.lifespan);
        }
        return entry2.response;
      }
      if (!preload2) throw entry2.promise;
    }
  }
  const entry = {
    keys,
    equal: config.equal,
    remove: () => {
      const index = globalCache.indexOf(entry);
      if (index !== -1) globalCache.splice(index, 1);
    },
    promise: (
      // Execute the promise
      (isPromise(fn) ? fn : fn(...keys)).then((response) => {
        entry.response = response;
        if (config.lifespan && config.lifespan > 0) {
          entry.timeout = setTimeout(entry.remove, config.lifespan);
        }
      }).catch((error) => entry.error = error)
    )
  };
  globalCache.push(entry);
  if (!preload2) throw entry.promise;
  return void 0;
}
const suspend = (fn, keys, config) => query(fn, keys, false, config);
const preload = (fn, keys, config) => void query(fn, keys, true, config);
const clear = (keys) => {
  if (keys === void 0 || keys.length === 0) globalCache.splice(0, globalCache.length);
  else {
    const entry = globalCache.find((entry2) => shallowEqualArrays(keys, entry2.keys, entry2.equal));
    if (entry) entry.remove();
  }
};
function i$2(e2, t2, r2) {
  if (!e2) return;
  if (r2(e2) === true) return e2;
  let n = t2 ? e2.return : e2.child;
  for (; n; ) {
    const u = i$2(n, t2, r2);
    if (u) return u;
    n = t2 ? null : n.sibling;
  }
}
function l(e2) {
  try {
    return Object.defineProperties(e2, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch (t2) {
    return e2;
  }
}
const a = /* @__PURE__ */ l(/* @__PURE__ */ reactExports.createContext(null));
class m extends reactExports.Component {
  render() {
    return /* @__PURE__ */ reactExports.createElement(a.Provider, { value: this._reactInternals }, this.props.children);
  }
}
function c() {
  const e2 = reactExports.useContext(a);
  if (e2 === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const t2 = reactExports.useId();
  return reactExports.useMemo(() => {
    for (const n of [e2, e2 == null ? void 0 : e2.alternate]) {
      if (!n) continue;
      const u = i$2(n, false, (d) => {
        let s = d.memoizedState;
        for (; s; ) {
          if (s.memoizedState === t2) return true;
          s = s.next;
        }
      });
      if (u) return u;
    }
  }, [e2, t2]);
}
const p = Symbol.for("react.context"), b = (e2) => e2 !== null && typeof e2 == "object" && "$$typeof" in e2 && e2.$$typeof === p;
function h() {
  const e2 = c(), [t2] = reactExports.useState(() => /* @__PURE__ */ new Map());
  t2.clear();
  let r2 = e2;
  for (; r2; ) {
    const n = r2.type;
    b(n) && n !== a && !t2.has(n) && t2.set(n, reactExports.use(l(n))), r2 = r2.return;
  }
  return t2;
}
function x$1() {
  const e2 = h();
  return reactExports.useMemo(
    () => Array.from(e2.keys()).reduce(
      (t2, r2) => (n) => /* @__PURE__ */ reactExports.createElement(t2, null, /* @__PURE__ */ reactExports.createElement(r2.Provider, { ...n, value: e2.get(r2) })),
      (t2) => /* @__PURE__ */ reactExports.createElement(m, { ...t2 })
    ),
    [e2]
  );
}
function findInitialRoot(instance) {
  let root = instance.root;
  while (root.getState().previousRoot) root = root.getState().previousRoot;
  return root;
}
const isOrthographicCamera = (def) => def && def.isOrthographicCamera;
const isRef$1 = (obj) => obj && obj.hasOwnProperty("current");
const isColorRepresentation = (value) => value != null && (typeof value === "string" || typeof value === "number" || value.isColor);
const useIsomorphicLayoutEffect = /* @__PURE__ */ ((_window$document, _window$navigator) => typeof window !== "undefined" && (((_window$document = window.document) == null ? void 0 : _window$document.createElement) || ((_window$navigator = window.navigator) == null ? void 0 : _window$navigator.product) === "ReactNative"))() ? reactExports.useLayoutEffect : reactExports.useEffect;
function useMutableCallback(fn) {
  const ref = reactExports.useRef(fn);
  useIsomorphicLayoutEffect(() => void (ref.current = fn), [fn]);
  return ref;
}
function useBridge() {
  const fiber = c();
  const ContextBridge = x$1();
  return reactExports.useMemo(() => ({
    children
  }) => {
    const strict = !!i$2(fiber, true, (node) => node.type === reactExports.StrictMode);
    const Root = strict ? reactExports.StrictMode : reactExports.Fragment;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContextBridge, {
        children
      })
    });
  }, [fiber, ContextBridge]);
}
function Block({
  set
}) {
  useIsomorphicLayoutEffect(() => {
    set(new Promise(() => null));
    return () => set(false);
  }, [set]);
  return null;
}
const ErrorBoundary = /* @__PURE__ */ ((_ErrorBoundary) => (_ErrorBoundary = class ErrorBoundary extends reactExports.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      error: false
    };
  }
  componentDidCatch(err) {
    this.props.set(err);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
}, _ErrorBoundary.getDerivedStateFromError = () => ({
  error: true
}), _ErrorBoundary))();
function calculateDpr(dpr) {
  var _window$devicePixelRa;
  const target = typeof window !== "undefined" ? (_window$devicePixelRa = window.devicePixelRatio) != null ? _window$devicePixelRa : 2 : 1;
  return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], target), dpr[1]) : dpr;
}
function getRootState(obj) {
  var _r3f;
  return (_r3f = obj.__r3f) == null ? void 0 : _r3f.root.getState();
}
const is = {
  obj: (a2) => a2 === Object(a2) && !is.arr(a2) && typeof a2 !== "function",
  fun: (a2) => typeof a2 === "function",
  str: (a2) => typeof a2 === "string",
  num: (a2) => typeof a2 === "number",
  boo: (a2) => typeof a2 === "boolean",
  und: (a2) => a2 === void 0,
  nul: (a2) => a2 === null,
  arr: (a2) => Array.isArray(a2),
  equ(a2, b2, {
    arrays = "shallow",
    objects = "reference",
    strict = true
  } = {}) {
    if (typeof a2 !== typeof b2 || !!a2 !== !!b2) return false;
    if (is.str(a2) || is.num(a2) || is.boo(a2)) return a2 === b2;
    const isObj = is.obj(a2);
    if (isObj && objects === "reference") return a2 === b2;
    const isArr = is.arr(a2);
    if (isArr && arrays === "reference") return a2 === b2;
    if ((isArr || isObj) && a2 === b2) return true;
    let i2;
    for (i2 in a2) if (!(i2 in b2)) return false;
    if (isObj && arrays === "shallow" && objects === "shallow") {
      for (i2 in strict ? b2 : a2) if (!is.equ(a2[i2], b2[i2], {
        strict,
        objects: "reference"
      })) return false;
    } else {
      for (i2 in strict ? b2 : a2) if (a2[i2] !== b2[i2]) return false;
    }
    if (is.und(i2)) {
      if (isArr && a2.length === 0 && b2.length === 0) return true;
      if (isObj && Object.keys(a2).length === 0 && Object.keys(b2).length === 0) return true;
      if (a2 !== b2) return false;
    }
    return true;
  }
};
function buildGraph(object) {
  const data = {
    nodes: {},
    materials: {},
    meshes: {}
  };
  if (object) {
    object.traverse((obj) => {
      if (obj.name) data.nodes[obj.name] = obj;
      if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
      if (obj.isMesh && !data.meshes[obj.name]) data.meshes[obj.name] = obj;
    });
  }
  return data;
}
function dispose(obj) {
  if (obj.type !== "Scene") obj.dispose == null ? void 0 : obj.dispose();
  for (const p2 in obj) {
    const prop = obj[p2];
    if ((prop == null ? void 0 : prop.type) !== "Scene") prop == null ? void 0 : prop.dispose == null ? void 0 : prop.dispose();
  }
}
const REACT_INTERNAL_PROPS = ["children", "key", "ref"];
function getInstanceProps(pendingProps) {
  const props = {};
  for (const key in pendingProps) {
    if (!REACT_INTERNAL_PROPS.includes(key)) props[key] = pendingProps[key];
  }
  return props;
}
function prepare(target, root, type, props) {
  const object = target;
  let instance = object == null ? void 0 : object.__r3f;
  if (!instance) {
    instance = {
      root,
      type,
      parent: null,
      children: [],
      props: getInstanceProps(props),
      object,
      eventCount: 0,
      handlers: {},
      isHidden: false
    };
    if (object) object.__r3f = instance;
  }
  return instance;
}
function resolve(root, key) {
  if (!key.includes("-")) return {
    root,
    key,
    target: root[key]
  };
  if (key in root) {
    return {
      root,
      key,
      target: root[key]
    };
  }
  let target = root;
  const parts = key.split("-");
  for (const part of parts) {
    if (typeof target !== "object" || target === null) {
      if (target !== void 0) {
        const remaining = parts.slice(parts.indexOf(part)).join("-");
        return {
          root: target,
          key: remaining,
          target: void 0
        };
      }
      return {
        root,
        key,
        target: void 0
      };
    }
    key = part;
    root = target;
    target = target[key];
  }
  return {
    root,
    key,
    target
  };
}
const INDEX_REGEX = /-\d+$/;
function attach(parent, child) {
  if (is.str(child.props.attach)) {
    if (INDEX_REGEX.test(child.props.attach)) {
      const index = child.props.attach.replace(INDEX_REGEX, "");
      const {
        root: root2,
        key: key2
      } = resolve(parent.object, index);
      if (!Array.isArray(root2[key2])) root2[key2] = [];
    }
    const {
      root,
      key
    } = resolve(parent.object, child.props.attach);
    child.previousAttach = root[key];
    root[key] = child.object;
  } else if (is.fun(child.props.attach)) {
    child.previousAttach = child.props.attach(parent.object, child.object);
  }
}
function detach(parent, child) {
  if (is.str(child.props.attach)) {
    const {
      root,
      key
    } = resolve(parent.object, child.props.attach);
    const previous = child.previousAttach;
    if (previous === void 0) delete root[key];
    else root[key] = previous;
  } else {
    child.previousAttach == null ? void 0 : child.previousAttach(parent.object, child.object);
  }
  delete child.previousAttach;
}
const RESERVED_PROPS = [
  ...REACT_INTERNAL_PROPS,
  // Instance props
  "args",
  "dispose",
  "attach",
  "object",
  "onUpdate",
  // Behavior flags
  "dispose"
];
const MEMOIZED_PROTOTYPES = /* @__PURE__ */ new Map();
function getMemoizedPrototype(root) {
  let ctor = MEMOIZED_PROTOTYPES.get(root.constructor);
  try {
    if (!ctor) {
      ctor = new root.constructor();
      MEMOIZED_PROTOTYPES.set(root.constructor, ctor);
    }
  } catch (e2) {
  }
  return ctor;
}
function diffProps(instance, newProps) {
  const changedProps = {};
  for (const prop in newProps) {
    if (RESERVED_PROPS.includes(prop)) continue;
    if (is.equ(newProps[prop], instance.props[prop])) continue;
    changedProps[prop] = newProps[prop];
    for (const other in newProps) {
      if (other.startsWith(`${prop}-`)) changedProps[other] = newProps[other];
    }
  }
  for (const prop in instance.props) {
    if (RESERVED_PROPS.includes(prop) || newProps.hasOwnProperty(prop)) continue;
    const {
      root,
      key
    } = resolve(instance.object, prop);
    if (root.constructor && root.constructor.length === 0) {
      const ctor = getMemoizedPrototype(root);
      if (!is.und(ctor)) changedProps[key] = ctor[key];
    } else {
      changedProps[key] = 0;
    }
  }
  return changedProps;
}
const colorMaps = ["map", "emissiveMap", "sheenColorMap", "specularColorMap", "envMap"];
const EVENT_REGEX = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function applyProps(object, props) {
  var _instance$object;
  const instance = object.__r3f;
  const rootState = instance && findInitialRoot(instance).getState();
  const prevHandlers = instance == null ? void 0 : instance.eventCount;
  for (const prop in props) {
    let value = props[prop];
    if (RESERVED_PROPS.includes(prop)) continue;
    if (instance && EVENT_REGEX.test(prop)) {
      if (typeof value === "function") instance.handlers[prop] = value;
      else delete instance.handlers[prop];
      instance.eventCount = Object.keys(instance.handlers).length;
      continue;
    }
    if (value === void 0) continue;
    let {
      root,
      key,
      target
    } = resolve(object, prop);
    if (target === void 0 && (typeof root !== "object" || root === null)) {
      throw Error(`R3F: Cannot set "${prop}". Ensure it is an object before setting "${key}".`);
    }
    if (target instanceof Layers && value instanceof Layers) {
      target.mask = value.mask;
    } else if (target instanceof Color && isColorRepresentation(value)) {
      target.set(value);
    } else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof target.copy === "function" && value != null && value.constructor && target.constructor === value.constructor) {
      target.copy(value);
    } else if (target !== null && typeof target === "object" && typeof target.set === "function" && Array.isArray(value)) {
      if (typeof target.fromArray === "function") target.fromArray(value);
      else target.set(...value);
    } else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof value === "number") {
      if (typeof target.setScalar === "function") target.setScalar(value);
      else target.set(value);
    } else {
      var _root$key;
      root[key] = value;
      if (rootState && !rootState.linear && colorMaps.includes(key) && (_root$key = root[key]) != null && _root$key.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
      root[key].format === RGBAFormat && root[key].type === UnsignedByteType) {
        root[key].colorSpace = SRGBColorSpace$1;
      }
    }
  }
  if (instance != null && instance.parent && rootState != null && rootState.internal && (_instance$object = instance.object) != null && _instance$object.isObject3D && prevHandlers !== instance.eventCount) {
    const object2 = instance.object;
    const index = rootState.internal.interaction.indexOf(object2);
    if (index > -1) rootState.internal.interaction.splice(index, 1);
    if (instance.eventCount && object2.raycast !== null) {
      rootState.internal.interaction.push(object2);
    }
  }
  if (instance && instance.props.attach === void 0) {
    if (instance.object.isBufferGeometry) instance.props.attach = "geometry";
    else if (instance.object.isMaterial) instance.props.attach = "material";
  }
  if (instance) invalidateInstance(instance);
  return object;
}
function invalidateInstance(instance) {
  var _instance$root;
  if (!instance.parent) return;
  instance.props.onUpdate == null ? void 0 : instance.props.onUpdate(instance.object);
  const state2 = (_instance$root = instance.root) == null ? void 0 : _instance$root.getState == null ? void 0 : _instance$root.getState();
  if (state2 && state2.internal.frames === 0) state2.invalidate();
}
function updateCamera(camera, size) {
  if (camera.manual) return;
  if (isOrthographicCamera(camera)) {
    camera.left = size.width / -2;
    camera.right = size.width / 2;
    camera.top = size.height / 2;
    camera.bottom = size.height / -2;
  } else {
    camera.aspect = size.width / size.height;
  }
  camera.updateProjectionMatrix();
}
const isObject3D = (object) => object == null ? void 0 : object.isObject3D;
function makeId(event) {
  return (event.eventObject || event.object).uuid + "/" + event.index + event.instanceId;
}
function releaseInternalPointerCapture(capturedMap, obj, captures, pointerId) {
  const captureData = captures.get(obj);
  if (captureData) {
    captures.delete(obj);
    if (captures.size === 0) {
      capturedMap.delete(pointerId);
      captureData.target.releasePointerCapture(pointerId);
    }
  }
}
function removeInteractivity(store, object) {
  const {
    internal
  } = store.getState();
  internal.interaction = internal.interaction.filter((o2) => o2 !== object);
  internal.initialHits = internal.initialHits.filter((o2) => o2 !== object);
  internal.hovered.forEach((value, key) => {
    if (value.eventObject === object || value.object === object) {
      internal.hovered.delete(key);
    }
  });
  internal.capturedMap.forEach((captures, pointerId) => {
    releaseInternalPointerCapture(internal.capturedMap, object, captures, pointerId);
  });
}
function createEvents(store) {
  function calculateDistance(event) {
    const {
      internal
    } = store.getState();
    const dx = event.offsetX - internal.initialClick[0];
    const dy = event.offsetY - internal.initialClick[1];
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  }
  function filterPointerEvents(objects) {
    return objects.filter((obj) => ["Move", "Over", "Enter", "Out", "Leave"].some((name) => {
      var _r3f;
      return (_r3f = obj.__r3f) == null ? void 0 : _r3f.handlers["onPointer" + name];
    }));
  }
  function intersect(event, filter) {
    const state2 = store.getState();
    const duplicates = /* @__PURE__ */ new Set();
    const intersections = [];
    const eventsObjects = filter ? filter(state2.internal.interaction) : state2.internal.interaction;
    for (let i2 = 0; i2 < eventsObjects.length; i2++) {
      const state3 = getRootState(eventsObjects[i2]);
      if (state3) {
        state3.raycaster.camera = void 0;
      }
    }
    if (!state2.previousRoot) {
      state2.events.compute == null ? void 0 : state2.events.compute(event, state2);
    }
    function handleRaycast(obj) {
      const state3 = getRootState(obj);
      if (!state3 || !state3.events.enabled || state3.raycaster.camera === null) return [];
      if (state3.raycaster.camera === void 0) {
        var _state$previousRoot;
        state3.events.compute == null ? void 0 : state3.events.compute(event, state3, (_state$previousRoot = state3.previousRoot) == null ? void 0 : _state$previousRoot.getState());
        if (state3.raycaster.camera === void 0) state3.raycaster.camera = null;
      }
      return state3.raycaster.camera ? state3.raycaster.intersectObject(obj, true) : [];
    }
    let hits = eventsObjects.flatMap(handleRaycast).sort((a2, b2) => {
      const aState = getRootState(a2.object);
      const bState = getRootState(b2.object);
      if (!aState || !bState) return a2.distance - b2.distance;
      return bState.events.priority - aState.events.priority || a2.distance - b2.distance;
    }).filter((item) => {
      const id = makeId(item);
      if (duplicates.has(id)) return false;
      duplicates.add(id);
      return true;
    });
    if (state2.events.filter) hits = state2.events.filter(hits, state2);
    for (const hit of hits) {
      let eventObject = hit.object;
      while (eventObject) {
        var _r3f2;
        if ((_r3f2 = eventObject.__r3f) != null && _r3f2.eventCount) intersections.push({
          ...hit,
          eventObject
        });
        eventObject = eventObject.parent;
      }
    }
    if ("pointerId" in event && state2.internal.capturedMap.has(event.pointerId)) {
      for (let captureData of state2.internal.capturedMap.get(event.pointerId).values()) {
        if (!duplicates.has(makeId(captureData.intersection))) intersections.push(captureData.intersection);
      }
    }
    return intersections;
  }
  function handleIntersects(intersections, event, delta, callback) {
    if (intersections.length) {
      const localState = {
        stopped: false
      };
      for (const hit of intersections) {
        let state2 = getRootState(hit.object);
        if (!state2) {
          hit.object.traverseAncestors((obj) => {
            const parentState = getRootState(obj);
            if (parentState) {
              state2 = parentState;
              return false;
            }
          });
        }
        if (state2) {
          const {
            raycaster,
            pointer,
            camera,
            internal
          } = state2;
          const unprojectedPoint = new Vector3(pointer.x, pointer.y, 0).unproject(camera);
          const hasPointerCapture = (id) => {
            var _internal$capturedMap, _internal$capturedMap2;
            return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
          };
          const setPointerCapture = (id) => {
            const captureData = {
              intersection: hit,
              target: event.target
            };
            if (internal.capturedMap.has(id)) {
              internal.capturedMap.get(id).set(hit.eventObject, captureData);
            } else {
              internal.capturedMap.set(id, /* @__PURE__ */ new Map([[hit.eventObject, captureData]]));
            }
            event.target.setPointerCapture(id);
          };
          const releasePointerCapture = (id) => {
            const captures = internal.capturedMap.get(id);
            if (captures) {
              releaseInternalPointerCapture(internal.capturedMap, hit.eventObject, captures, id);
            }
          };
          let extractEventProps = {};
          for (let prop in event) {
            let property = event[prop];
            if (typeof property !== "function") extractEventProps[prop] = property;
          }
          let raycastEvent = {
            ...hit,
            ...extractEventProps,
            pointer,
            intersections,
            stopped: localState.stopped,
            delta,
            unprojectedPoint,
            ray: raycaster.ray,
            camera,
            // Hijack stopPropagation, which just sets a flag
            stopPropagation() {
              const capturesForPointer = "pointerId" in event && internal.capturedMap.get(event.pointerId);
              if (
                // ...if this pointer hasn't been captured
                !capturesForPointer || // ... or if the hit object is capturing the pointer
                capturesForPointer.has(hit.eventObject)
              ) {
                raycastEvent.stopped = localState.stopped = true;
                if (internal.hovered.size && Array.from(internal.hovered.values()).find((i2) => i2.eventObject === hit.eventObject)) {
                  const higher = intersections.slice(0, intersections.indexOf(hit));
                  cancelPointer([...higher, hit]);
                }
              }
            },
            // there should be a distinction between target and currentTarget
            target: {
              hasPointerCapture,
              setPointerCapture,
              releasePointerCapture
            },
            currentTarget: {
              hasPointerCapture,
              setPointerCapture,
              releasePointerCapture
            },
            nativeEvent: event
          };
          callback(raycastEvent);
          if (localState.stopped === true) break;
        }
      }
    }
    return intersections;
  }
  function cancelPointer(intersections) {
    const {
      internal
    } = store.getState();
    for (const hoveredObj of internal.hovered.values()) {
      if (!intersections.length || !intersections.find((hit) => hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId)) {
        const eventObject = hoveredObj.eventObject;
        const instance = eventObject.__r3f;
        internal.hovered.delete(makeId(hoveredObj));
        if (instance != null && instance.eventCount) {
          const handlers = instance.handlers;
          const data = {
            ...hoveredObj,
            intersections
          };
          handlers.onPointerOut == null ? void 0 : handlers.onPointerOut(data);
          handlers.onPointerLeave == null ? void 0 : handlers.onPointerLeave(data);
        }
      }
    }
  }
  function pointerMissed(event, objects) {
    for (let i2 = 0; i2 < objects.length; i2++) {
      const instance = objects[i2].__r3f;
      instance == null ? void 0 : instance.handlers.onPointerMissed == null ? void 0 : instance.handlers.onPointerMissed(event);
    }
  }
  function handlePointer(name) {
    switch (name) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => cancelPointer([]);
      case "onLostPointerCapture":
        return (event) => {
          const {
            internal
          } = store.getState();
          if ("pointerId" in event && internal.capturedMap.has(event.pointerId)) {
            requestAnimationFrame(() => {
              if (internal.capturedMap.has(event.pointerId)) {
                internal.capturedMap.delete(event.pointerId);
                cancelPointer([]);
              }
            });
          }
        };
    }
    return function handleEvent(event) {
      const {
        onPointerMissed,
        internal
      } = store.getState();
      internal.lastEvent.current = event;
      const isPointerMove = name === "onPointerMove";
      const isClickEvent = name === "onClick" || name === "onContextMenu" || name === "onDoubleClick";
      const filter = isPointerMove ? filterPointerEvents : void 0;
      const hits = intersect(event, filter);
      const delta = isClickEvent ? calculateDistance(event) : 0;
      if (name === "onPointerDown") {
        internal.initialClick = [event.offsetX, event.offsetY];
        internal.initialHits = hits.map((hit) => hit.eventObject);
      }
      if (isClickEvent && !hits.length) {
        if (delta <= 2) {
          pointerMissed(event, internal.interaction);
          if (onPointerMissed) onPointerMissed(event);
        }
      }
      if (isPointerMove) cancelPointer(hits);
      function onIntersect(data) {
        const eventObject = data.eventObject;
        const instance = eventObject.__r3f;
        if (!(instance != null && instance.eventCount)) return;
        const handlers = instance.handlers;
        if (isPointerMove) {
          if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
            const id = makeId(data);
            const hoveredItem = internal.hovered.get(id);
            if (!hoveredItem) {
              internal.hovered.set(id, data);
              handlers.onPointerOver == null ? void 0 : handlers.onPointerOver(data);
              handlers.onPointerEnter == null ? void 0 : handlers.onPointerEnter(data);
            } else if (hoveredItem.stopped) {
              data.stopPropagation();
            }
          }
          handlers.onPointerMove == null ? void 0 : handlers.onPointerMove(data);
        } else {
          const handler = handlers[name];
          if (handler) {
            if (!isClickEvent || internal.initialHits.includes(eventObject)) {
              pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
              handler(data);
            }
          } else {
            if (isClickEvent && internal.initialHits.includes(eventObject)) {
              pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
            }
          }
        }
      }
      handleIntersects(hits, event, delta, onIntersect);
    };
  }
  return {
    handlePointer
  };
}
const isRenderer = (def) => !!(def != null && def.render);
const context = /* @__PURE__ */ reactExports.createContext(null);
const createStore = (invalidate2, advance2) => {
  const rootStore = createWithEqualityFn((set, get) => {
    const position = new Vector3();
    const defaultTarget = new Vector3();
    const tempTarget = new Vector3();
    function getCurrentViewport(camera = get().camera, target = defaultTarget, size = get().size) {
      const {
        width,
        height,
        top,
        left
      } = size;
      const aspect = width / height;
      if (target.isVector3) tempTarget.copy(target);
      else tempTarget.set(...target);
      const distance = camera.getWorldPosition(position).distanceTo(tempTarget);
      if (isOrthographicCamera(camera)) {
        return {
          width: width / camera.zoom,
          height: height / camera.zoom,
          top,
          left,
          factor: 1,
          distance,
          aspect
        };
      } else {
        const fov = camera.fov * Math.PI / 180;
        const h2 = 2 * Math.tan(fov / 2) * distance;
        const w = h2 * (width / height);
        return {
          width: w,
          height: h2,
          top,
          left,
          factor: width / w,
          distance,
          aspect
        };
      }
    }
    let performanceTimeout = void 0;
    const setPerformanceCurrent = (current) => set((state3) => ({
      performance: {
        ...state3.performance,
        current
      }
    }));
    const pointer = new Vector2();
    const rootState = {
      set,
      get,
      // Mock objects that have to be configured
      gl: null,
      camera: null,
      raycaster: null,
      events: {
        priority: 1,
        enabled: true,
        connected: false
      },
      scene: null,
      xr: null,
      invalidate: (frames = 1) => invalidate2(get(), frames),
      advance: (timestamp, runGlobalEffects) => advance2(timestamp, runGlobalEffects, get()),
      legacy: false,
      linear: false,
      flat: false,
      controls: null,
      clock: new Clock(),
      pointer,
      mouse: pointer,
      frameloop: "always",
      onPointerMissed: void 0,
      performance: {
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200,
        regress: () => {
          const state3 = get();
          if (performanceTimeout) clearTimeout(performanceTimeout);
          if (state3.performance.current !== state3.performance.min) setPerformanceCurrent(state3.performance.min);
          performanceTimeout = setTimeout(() => setPerformanceCurrent(get().performance.max), state3.performance.debounce);
        }
      },
      size: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      },
      viewport: {
        initialDpr: 0,
        dpr: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport
      },
      setEvents: (events) => set((state3) => ({
        ...state3,
        events: {
          ...state3.events,
          ...events
        }
      })),
      setSize: (width, height, top = 0, left = 0) => {
        const camera = get().camera;
        const size = {
          width,
          height,
          top,
          left
        };
        set((state3) => ({
          size,
          viewport: {
            ...state3.viewport,
            ...getCurrentViewport(camera, defaultTarget, size)
          }
        }));
      },
      setDpr: (dpr) => set((state3) => {
        const resolved = calculateDpr(dpr);
        return {
          viewport: {
            ...state3.viewport,
            dpr: resolved,
            initialDpr: state3.viewport.initialDpr || resolved
          }
        };
      }),
      setFrameloop: (frameloop = "always") => {
        const clock = get().clock;
        clock.stop();
        clock.elapsedTime = 0;
        if (frameloop !== "never") {
          clock.start();
          clock.elapsedTime = 0;
        }
        set(() => ({
          frameloop
        }));
      },
      previousRoot: void 0,
      internal: {
        // Events
        interaction: [],
        hovered: /* @__PURE__ */ new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: /* @__PURE__ */ new Map(),
        lastEvent: /* @__PURE__ */ reactExports.createRef(),
        // Updates
        active: false,
        frames: 0,
        priority: 0,
        subscribe: (ref, priority, store) => {
          const internal = get().internal;
          internal.priority = internal.priority + (priority > 0 ? 1 : 0);
          internal.subscribers.push({
            ref,
            priority,
            store
          });
          internal.subscribers = internal.subscribers.sort((a2, b2) => a2.priority - b2.priority);
          return () => {
            const internal2 = get().internal;
            if (internal2 != null && internal2.subscribers) {
              internal2.priority = internal2.priority - (priority > 0 ? 1 : 0);
              internal2.subscribers = internal2.subscribers.filter((s) => s.ref !== ref);
            }
          };
        }
      }
    };
    return rootState;
  });
  const state2 = rootStore.getState();
  let oldSize = state2.size;
  let oldDpr = state2.viewport.dpr;
  let oldCamera = state2.camera;
  rootStore.subscribe(() => {
    const {
      camera,
      size,
      viewport,
      gl,
      set
    } = rootStore.getState();
    if (size.width !== oldSize.width || size.height !== oldSize.height || viewport.dpr !== oldDpr) {
      oldSize = size;
      oldDpr = viewport.dpr;
      updateCamera(camera, size);
      if (viewport.dpr > 0) gl.setPixelRatio(viewport.dpr);
      const updateStyle = typeof HTMLCanvasElement !== "undefined" && gl.domElement instanceof HTMLCanvasElement;
      gl.setSize(size.width, size.height, updateStyle);
    }
    if (camera !== oldCamera) {
      oldCamera = camera;
      set((state3) => ({
        viewport: {
          ...state3.viewport,
          ...state3.viewport.getCurrentViewport(camera)
        }
      }));
    }
  });
  rootStore.subscribe((state3) => invalidate2(state3));
  return rootStore;
};
function useStore() {
  const store = reactExports.useContext(context);
  if (!store) throw new Error("R3F: Hooks can only be used within the Canvas component!");
  return store;
}
function useThree(selector = (state2) => state2, equalityFn) {
  return useStore()(selector, equalityFn);
}
function useFrame(callback, renderPriority = 0) {
  const store = useStore();
  const subscribe = store.getState().internal.subscribe;
  const ref = useMutableCallback(callback);
  useIsomorphicLayoutEffect(() => subscribe(ref, renderPriority, store), [renderPriority, subscribe, store]);
  return null;
}
const memoizedLoaders = /* @__PURE__ */ new WeakMap();
const isConstructor$1 = (value) => {
  var _value$prototype;
  return typeof value === "function" && (value == null ? void 0 : (_value$prototype = value.prototype) == null ? void 0 : _value$prototype.constructor) === value;
};
function loadingFn(extensions2, onProgress) {
  return function(Proto, ...input) {
    let loader;
    if (isConstructor$1(Proto)) {
      loader = memoizedLoaders.get(Proto);
      if (!loader) {
        loader = new Proto();
        memoizedLoaders.set(Proto, loader);
      }
    } else {
      loader = Proto;
    }
    if (extensions2) extensions2(loader);
    return Promise.all(input.map((input2) => new Promise((res, reject) => loader.load(input2, (data) => {
      if (isObject3D(data == null ? void 0 : data.scene)) Object.assign(data, buildGraph(data.scene));
      res(data);
    }, onProgress, (error) => reject(new Error(`Could not load ${input2}: ${error == null ? void 0 : error.message}`))))));
  };
}
function useLoader(loader, input, extensions2, onProgress) {
  const keys = Array.isArray(input) ? input : [input];
  const results = suspend(loadingFn(extensions2, onProgress), [loader, ...keys], {
    equal: is.equ
  });
  return Array.isArray(input) ? results : results[0];
}
useLoader.preload = function(loader, input, extensions2) {
  const keys = Array.isArray(input) ? input : [input];
  return preload(loadingFn(extensions2), [loader, ...keys]);
};
useLoader.clear = function(loader, input) {
  const keys = Array.isArray(input) ? input : [input];
  return clear([loader, ...keys]);
};
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const t = 1, o = 8, r = 32, e = 2;
var packageData = {
  version: "9.5.0"
};
function Xb(Tt) {
  return Tt && Tt.__esModule && Object.prototype.hasOwnProperty.call(Tt, "default") ? Tt.default : Tt;
}
var Rm = {
  exports: {}
}, Og = {
  exports: {}
};
var _b$1;
function Kb() {
  return _b$1 || (_b$1 = 1, (function(Tt) {
    Tt.exports = function(m2) {
      function Yn(t2, r2, a2, l2) {
        return new uc(t2, r2, a2, l2);
      }
      function _d() {
      }
      function F(t2) {
        var r2 = "https://react.dev/errors/" + t2;
        if (1 < arguments.length) {
          r2 += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var a2 = 2; a2 < arguments.length; a2++) r2 += "&args[]=" + encodeURIComponent(arguments[a2]);
        }
        return "Minified React error #" + t2 + "; visit " + r2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function Rd(t2) {
        var r2 = t2, a2 = t2;
        if (t2.alternate) for (; r2.return; ) r2 = r2.return;
        else {
          t2 = r2;
          do
            r2 = t2, (r2.flags & 4098) !== 0 && (a2 = r2.return), t2 = r2.return;
          while (t2);
        }
        return r2.tag === 3 ? a2 : null;
      }
      function du(t2) {
        if (Rd(t2) !== t2) throw Error(F(188));
      }
      function fu(t2) {
        var r2 = t2.alternate;
        if (!r2) {
          if (r2 = Rd(t2), r2 === null) throw Error(F(188));
          return r2 !== t2 ? null : t2;
        }
        for (var a2 = t2, l2 = r2; ; ) {
          var c2 = a2.return;
          if (c2 === null) break;
          var d = c2.alternate;
          if (d === null) {
            if (l2 = c2.return, l2 !== null) {
              a2 = l2;
              continue;
            }
            break;
          }
          if (c2.child === d.child) {
            for (d = c2.child; d; ) {
              if (d === a2) return du(c2), t2;
              if (d === l2) return du(c2), r2;
              d = d.sibling;
            }
            throw Error(F(188));
          }
          if (a2.return !== l2.return) a2 = c2, l2 = d;
          else {
            for (var h2 = false, y = c2.child; y; ) {
              if (y === a2) {
                h2 = true, a2 = c2, l2 = d;
                break;
              }
              if (y === l2) {
                h2 = true, l2 = c2, a2 = d;
                break;
              }
              y = y.sibling;
            }
            if (!h2) {
              for (y = d.child; y; ) {
                if (y === a2) {
                  h2 = true, a2 = d, l2 = c2;
                  break;
                }
                if (y === l2) {
                  h2 = true, l2 = d, a2 = c2;
                  break;
                }
                y = y.sibling;
              }
              if (!h2) throw Error(F(189));
            }
          }
          if (a2.alternate !== l2) throw Error(F(190));
        }
        if (a2.tag !== 3) throw Error(F(188));
        return a2.stateNode.current === a2 ? t2 : r2;
      }
      function pu(t2) {
        var r2 = t2.tag;
        if (r2 === 5 || r2 === 26 || r2 === 27 || r2 === 6) return t2;
        for (t2 = t2.child; t2 !== null; ) {
          if (r2 = pu(t2), r2 !== null) return r2;
          t2 = t2.sibling;
        }
        return null;
      }
      function lt(t2) {
        var r2 = t2.tag;
        if (r2 === 5 || r2 === 26 || r2 === 27 || r2 === 6) return t2;
        for (t2 = t2.child; t2 !== null; ) {
          if (t2.tag !== 4 && (r2 = lt(t2), r2 !== null)) return r2;
          t2 = t2.sibling;
        }
        return null;
      }
      function Fl(t2) {
        return t2 === null || typeof t2 != "object" ? null : (t2 = Pf && t2[Pf] || t2["@@iterator"], typeof t2 == "function" ? t2 : null);
      }
      function hu(t2) {
        if (t2 == null) return null;
        if (typeof t2 == "function") return t2.$$typeof === xf ? null : t2.displayName || t2.name || null;
        if (typeof t2 == "string") return t2;
        switch (t2) {
          case $a:
            return "Fragment";
          case Cs:
            return "Profiler";
          case kf:
            return "StrictMode";
          case Va:
            return "Suspense";
          case Te:
            return "SuspenseList";
          case gc:
            return "Activity";
        }
        if (typeof t2 == "object") switch (t2.$$typeof) {
          case sa:
            return "Portal";
          case Io:
            return t2.displayName || "Context";
          case mc:
            return (t2._context.displayName || "Context") + ".Consumer";
          case Zi:
            var r2 = t2.render;
            return t2 = t2.displayName, t2 || (t2 = r2.displayName || r2.name || "", t2 = t2 !== "" ? "ForwardRef(" + t2 + ")" : "ForwardRef"), t2;
          case wf:
            return r2 = t2.displayName || null, r2 !== null ? r2 : hu(t2.type) || "Memo";
          case ua:
            r2 = t2._payload, t2 = t2._init;
            try {
              return hu(t2(r2));
            } catch (e2) {
            }
        }
        return null;
      }
      function Ir(t2) {
        return {
          current: t2
        };
      }
      function D2(t2) {
        0 > tl || (t2.current = Hs[tl], Hs[tl] = null, tl--);
      }
      function Ce(t2, r2) {
        tl++, Hs[tl] = t2.current, t2.current = r2;
      }
      function Em(t2) {
        return t2 >>>= 0, t2 === 0 ? 32 : 31 - (Dh(t2) / Wh | 0) | 0;
      }
      function Zo(t2) {
        var r2 = t2 & 42;
        if (r2 !== 0) return r2;
        switch (t2 & -t2) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
            return 128;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
            return t2 & 261888;
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t2 & 3932160;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return t2 & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return t2;
        }
      }
      function Lr(t2, r2, a2) {
        var l2 = t2.pendingLanes;
        if (l2 === 0) return 0;
        var c2 = 0, d = t2.suspendedLanes, h2 = t2.pingedLanes;
        t2 = t2.warmLanes;
        var y = l2 & 134217727;
        return y !== 0 ? (l2 = y & ~d, l2 !== 0 ? c2 = Zo(l2) : (h2 &= y, h2 !== 0 ? c2 = Zo(h2) : a2 || (a2 = y & ~t2, a2 !== 0 && (c2 = Zo(a2))))) : (y = l2 & ~d, y !== 0 ? c2 = Zo(y) : h2 !== 0 ? c2 = Zo(h2) : a2 || (a2 = l2 & ~t2, a2 !== 0 && (c2 = Zo(a2)))), c2 === 0 ? 0 : r2 !== 0 && r2 !== c2 && (r2 & d) === 0 && (d = c2 & -c2, a2 = r2 & -r2, d >= a2 || d === 32 && (a2 & 4194048) !== 0) ? r2 : c2;
      }
      function Pi(t2, r2) {
        return (t2.pendingLanes & ~(t2.suspendedLanes & ~t2.pingedLanes) & r2) === 0;
      }
      function Tp(t2, r2) {
        switch (t2) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return r2 + 250;
          case 16:
          case 32:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return r2 + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function Ed() {
        var t2 = rl;
        return rl <<= 1, (rl & 62914560) === 0 && (rl = 4194304), t2;
      }
      function mu(t2) {
        for (var r2 = [], a2 = 0; 31 > a2; a2++) r2.push(t2);
        return r2;
      }
      function xi(t2, r2) {
        t2.pendingLanes |= r2, r2 !== 268435456 && (t2.suspendedLanes = 0, t2.pingedLanes = 0, t2.warmLanes = 0);
      }
      function _p(t2, r2, a2, l2, c2, d) {
        var h2 = t2.pendingLanes;
        t2.pendingLanes = a2, t2.suspendedLanes = 0, t2.pingedLanes = 0, t2.warmLanes = 0, t2.expiredLanes &= a2, t2.entangledLanes &= a2, t2.errorRecoveryDisabledLanes &= a2, t2.shellSuspendCounter = 0;
        var y = t2.entanglements, R = t2.expirationTimes, L = t2.hiddenUpdates;
        for (a2 = h2 & ~a2; 0 < a2; ) {
          var j2 = 31 - vt(a2), A = 1 << j2;
          y[j2] = 0, R[j2] = -1;
          var W2 = L[j2];
          if (W2 !== null) for (L[j2] = null, j2 = 0; j2 < W2.length; j2++) {
            var V = W2[j2];
            V !== null && (V.lane &= -536870913);
          }
          a2 &= ~A;
        }
        l2 !== 0 && Yo(t2, l2, 0), d !== 0 && c2 === 0 && t2.tag !== 0 && (t2.suspendedLanes |= d & ~(h2 & ~r2));
      }
      function Yo(t2, r2, a2) {
        t2.pendingLanes |= r2, t2.suspendedLanes &= ~r2;
        var l2 = 31 - vt(r2);
        t2.entangledLanes |= r2, t2.entanglements[l2] = t2.entanglements[l2] | 1073741824 | a2 & 261930;
      }
      function $e(t2, r2) {
        var a2 = t2.entangledLanes |= r2;
        for (t2 = t2.entanglements; a2; ) {
          var l2 = 31 - vt(a2), c2 = 1 << l2;
          c2 & r2 | t2[l2] & r2 && (t2[l2] |= r2), a2 &= ~c2;
        }
      }
      function G(t2, r2) {
        var a2 = r2 & -r2;
        return a2 = (a2 & 42) !== 0 ? 1 : st(a2), (a2 & (t2.suspendedLanes | r2)) !== 0 ? 0 : a2;
      }
      function st(t2) {
        switch (t2) {
          case 2:
            t2 = 1;
            break;
          case 8:
            t2 = 4;
            break;
          case 32:
            t2 = 16;
            break;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            t2 = 128;
            break;
          case 268435456:
            t2 = 134217728;
            break;
          default:
            t2 = 0;
        }
        return t2;
      }
      function Ze(t2) {
        return t2 &= -t2, 2 < t2 ? 8 < t2 ? (t2 & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function pe(t2) {
        if (typeof Lc == "function" && Uf(t2), on && typeof on.setStrictMode == "function") try {
          on.setStrictMode(ei, t2);
        } catch (e2) {
        }
      }
      function Im(t2, r2) {
        return t2 === r2 && (t2 !== 0 || 1 / t2 === 1 / r2) || t2 !== t2 && r2 !== r2;
      }
      function _t(t2) {
        if (al === void 0) try {
          throw Error();
        } catch (a2) {
          var r2 = a2.stack.trim().match(/\n( *(at )?)/);
          al = r2 && r2[1] || "", kt = -1 < a2.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a2.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return `
` + al + t2 + kt;
      }
      function zi(t2, r2) {
        if (!t2 || Ds) return "";
        Ds = true;
        var a2 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var l2 = {
            DetermineComponentFrameRoot: function() {
              try {
                if (r2) {
                  var A = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(A.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(A, []);
                    } catch (V) {
                      var W2 = V;
                    }
                    Reflect.construct(t2, [], A);
                  } else {
                    try {
                      A.call();
                    } catch (V) {
                      W2 = V;
                    }
                    t2.call(A.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (V) {
                    W2 = V;
                  }
                  (A = t2()) && typeof A.catch == "function" && A.catch(function() {
                  });
                }
              } catch (V) {
                if (V && W2 && typeof V.stack == "string") return [V.stack, W2.stack];
              }
              return [null, null];
            }
          };
          l2.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var c2 = Object.getOwnPropertyDescriptor(l2.DetermineComponentFrameRoot, "name");
          c2 && c2.configurable && Object.defineProperty(l2.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot"
          });
          var d = l2.DetermineComponentFrameRoot(), h2 = d[0], y = d[1];
          if (h2 && y) {
            var R = h2.split(`
`), L = y.split(`
`);
            for (c2 = l2 = 0; l2 < R.length && !R[l2].includes("DetermineComponentFrameRoot"); ) l2++;
            for (; c2 < L.length && !L[c2].includes("DetermineComponentFrameRoot"); ) c2++;
            if (l2 === R.length || c2 === L.length) for (l2 = R.length - 1, c2 = L.length - 1; 1 <= l2 && 0 <= c2 && R[l2] !== L[c2]; ) c2--;
            for (; 1 <= l2 && 0 <= c2; l2--, c2--) if (R[l2] !== L[c2]) {
              if (l2 !== 1 || c2 !== 1) do
                if (l2--, c2--, 0 > c2 || R[l2] !== L[c2]) {
                  var j2 = `
` + R[l2].replace(" at new ", " at ");
                  return t2.displayName && j2.includes("<anonymous>") && (j2 = j2.replace("<anonymous>", t2.displayName)), j2;
                }
              while (1 <= l2 && 0 <= c2);
              break;
            }
          }
        } finally {
          Ds = false, Error.prepareStackTrace = a2;
        }
        return (a2 = t2 ? t2.displayName || t2.name : "") ? _t(a2) : "";
      }
      function Hl(t2, r2) {
        switch (t2.tag) {
          case 26:
          case 27:
          case 5:
            return _t(t2.type);
          case 16:
            return _t("Lazy");
          case 13:
            return t2.child !== r2 && r2 !== null ? _t("Suspense Fallback") : _t("Suspense");
          case 19:
            return _t("SuspenseList");
          case 0:
          case 15:
            return zi(t2.type, false);
          case 11:
            return zi(t2.type.render, false);
          case 1:
            return zi(t2.type, true);
          case 31:
            return _t("Activity");
          default:
            return "";
        }
      }
      function Rp(t2) {
        try {
          var r2 = "", a2 = null;
          do
            r2 += Hl(t2, a2), a2 = t2, t2 = t2.return;
          while (t2);
          return r2;
        } catch (l2) {
          return `
Error generating stack: ` + l2.message + `
` + l2.stack;
        }
      }
      function ut(t2, r2) {
        if (typeof t2 == "object" && t2 !== null) {
          var a2 = Bh.get(t2);
          return a2 !== void 0 ? a2 : (r2 = {
            value: t2,
            source: r2,
            stack: Rp(r2)
          }, Bh.set(t2, r2), r2);
        }
        return {
          value: t2,
          source: r2,
          stack: Rp(r2)
        };
      }
      function or(t2, r2) {
        ni[il++] = x, ni[il++] = fn, fn = t2, x = r2;
      }
      function Ci(t2, r2, a2) {
        Jt[Zt++] = ot, Jt[Zt++] = Zr, Jt[Zt++] = jo, jo = t2;
        var l2 = ot;
        t2 = Zr;
        var c2 = 32 - vt(l2) - 1;
        l2 &= ~(1 << c2), a2 += 1;
        var d = 32 - vt(r2) + c2;
        if (30 < d) {
          var h2 = c2 - c2 % 5;
          d = (l2 & (1 << h2) - 1).toString(32), l2 >>= h2, c2 -= h2, ot = 1 << 32 - vt(r2) + c2 | a2 << c2 | l2, Zr = d + t2;
        } else ot = 1 << d | a2 << c2 | l2, Zr = t2;
      }
      function Id(t2) {
        t2.return !== null && (or(t2, 1), Ci(t2, 1, 0));
      }
      function gu(t2) {
        for (; t2 === fn; ) fn = ni[--il], ni[il] = null, x = ni[--il], ni[il] = null;
        for (; t2 === jo; ) jo = Jt[--Zt], Jt[Zt] = null, Zr = Jt[--Zt], Jt[Zt] = null, ot = Jt[--Zt], Jt[Zt] = null;
      }
      function Ld(t2, r2) {
        Jt[Zt++] = ot, Jt[Zt++] = Zr, Jt[Zt++] = jo, ot = r2.id, Zr = r2.overflow, jo = t2;
      }
      function Al(t2, r2) {
        Ce(pa, r2), Ce(Ws, t2), Ce(Dn, null), t2 = Hm(r2), D2(Dn), Ce(Dn, t2);
      }
      function Xo() {
        D2(Dn), D2(Ws), D2(pa);
      }
      function yu(t2) {
        t2.memoizedState !== null && Ce(Fc, t2);
        var r2 = Dn.current, a2 = Xp(r2, t2.type);
        r2 !== a2 && (Ce(Ws, t2), Ce(Dn, a2));
      }
      function jl(t2) {
        Ws.current === t2 && (D2(Dn), D2(Ws)), Fc.current === t2 && (D2(Fc), qt ? da._currentValue = rt : da._currentValue2 = rt);
      }
      function ar(t2) {
        var r2 = Error(F(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw ct(ut(r2, t2)), Of;
      }
      function Ep(t2, r2) {
        if (!Hn) throw Error(F(175));
        Ki(t2.stateNode, t2.type, t2.memoizedProps, r2, t2) || ar(t2, true);
      }
      function De(t2) {
        for (bn = t2.return; bn; ) switch (bn.tag) {
          case 5:
          case 31:
          case 13:
            Yt = false;
            return;
          case 27:
          case 3:
            Yt = true;
            return;
          default:
            bn = bn.return;
        }
      }
      function Ti(t2) {
        if (!Hn || t2 !== bn) return false;
        if (!ue) return De(t2), ue = true, false;
        var r2 = t2.tag;
        if (dn ? r2 !== 3 && r2 !== 27 && (r2 !== 5 || Nh(t2.type) && !Rs(t2.type, t2.memoizedProps)) && Ue && ar(t2) : r2 !== 3 && (r2 !== 5 || Nh(t2.type) && !Rs(t2.type, t2.memoizedProps)) && Ue && ar(t2), De(t2), r2 === 13) {
          if (!Hn) throw Error(F(316));
          if (t2 = t2.memoizedState, t2 = t2 !== null ? t2.dehydrated : null, !t2) throw Error(F(317));
          Ue = Th(t2);
        } else if (r2 === 31) {
          if (t2 = t2.memoizedState, t2 = t2 !== null ? t2.dehydrated : null, !t2) throw Error(F(317));
          Ue = Ch(t2);
        } else Ue = dn && r2 === 27 ? kh(t2.type, Ue) : bn ? Nf(t2.stateNode) : null;
        return true;
      }
      function _a2() {
        Hn && (Ue = bn = null, ue = false);
      }
      function Dl() {
        var t2 = Do;
        return t2 !== null && (xt === null ? xt = t2 : xt.push.apply(xt, t2), Do = null), t2;
      }
      function ct(t2) {
        Do === null ? Do = [t2] : Do.push(t2);
      }
      function fo(t2, r2, a2) {
        qt ? (Ce(Yr, r2._currentValue), r2._currentValue = a2) : (Ce(Yr, r2._currentValue2), r2._currentValue2 = a2);
      }
      function En(t2) {
        var r2 = Yr.current;
        qt ? t2._currentValue = r2 : t2._currentValue2 = r2, D2(Yr);
      }
      function Ot(t2, r2, a2) {
        for (; t2 !== null; ) {
          var l2 = t2.alternate;
          if ((t2.childLanes & r2) !== r2 ? (t2.childLanes |= r2, l2 !== null && (l2.childLanes |= r2)) : l2 !== null && (l2.childLanes & r2) !== r2 && (l2.childLanes |= r2), t2 === a2) break;
          t2 = t2.return;
        }
      }
      function _i(t2, r2, a2, l2) {
        var c2 = t2.child;
        for (c2 !== null && (c2.return = t2); c2 !== null; ) {
          var d = c2.dependencies;
          if (d !== null) {
            var h2 = c2.child;
            d = d.firstContext;
            e: for (; d !== null; ) {
              var y = d;
              d = c2;
              for (var R = 0; R < r2.length; R++) if (y.context === r2[R]) {
                d.lanes |= a2, y = d.alternate, y !== null && (y.lanes |= a2), Ot(d.return, a2, t2), l2 || (h2 = null);
                break e;
              }
              d = y.next;
            }
          } else if (c2.tag === 18) {
            if (h2 = c2.return, h2 === null) throw Error(F(341));
            h2.lanes |= a2, d = h2.alternate, d !== null && (d.lanes |= a2), Ot(h2, a2, t2), h2 = null;
          } else h2 = c2.child;
          if (h2 !== null) h2.return = c2;
          else for (h2 = c2; h2 !== null; ) {
            if (h2 === t2) {
              h2 = null;
              break;
            }
            if (c2 = h2.sibling, c2 !== null) {
              c2.return = h2.return, h2 = c2;
              break;
            }
            h2 = h2.return;
          }
          c2 = h2;
        }
      }
      function po(t2, r2, a2, l2) {
        t2 = null;
        for (var c2 = r2, d = false; c2 !== null; ) {
          if (!d) {
            if ((c2.flags & 524288) !== 0) d = true;
            else if ((c2.flags & 262144) !== 0) break;
          }
          if (c2.tag === 10) {
            var h2 = c2.alternate;
            if (h2 === null) throw Error(F(387));
            if (h2 = h2.memoizedProps, h2 !== null) {
              var y = c2.type;
              jn(c2.pendingProps.value, h2.value) || (t2 !== null ? t2.push(y) : t2 = [y]);
            }
          } else if (c2 === Fc.current) {
            if (h2 = c2.alternate, h2 === null) throw Error(F(387));
            h2.memoizedState.memoizedState !== c2.memoizedState.memoizedState && (t2 !== null ? t2.push(da) : t2 = [da]);
          }
          c2 = c2.return;
        }
        t2 !== null && _i(r2, t2, a2, l2), r2.flags |= 262144;
      }
      function Ri(t2) {
        for (t2 = t2.firstContext; t2 !== null; ) {
          var r2 = t2.context;
          if (!jn(qt ? r2._currentValue : r2._currentValue2, t2.memoizedValue)) return true;
          t2 = t2.next;
        }
        return false;
      }
      function Un(t2) {
        at = t2, Be = null, t2 = t2.dependencies, t2 !== null && (t2.firstContext = null);
      }
      function In(t2) {
        return Nd(at, t2);
      }
      function Wl(t2, r2) {
        return at === null && Un(t2), Nd(t2, r2);
      }
      function Nd(t2, r2) {
        var a2 = qt ? r2._currentValue : r2._currentValue2;
        if (r2 = {
          context: r2,
          memoizedValue: a2,
          next: null
        }, Be === null) {
          if (t2 === null) throw Error(F(308));
          Be = r2, t2.dependencies = {
            lanes: 0,
            firstContext: r2
          }, t2.flags |= 524288;
        } else Be = Be.next = r2;
        return a2;
      }
      function Fd() {
        return {
          controller: new Xr(),
          data: /* @__PURE__ */ new Map(),
          refCount: 0
        };
      }
      function Ra(t2) {
        t2.refCount--, t2.refCount === 0 && qn(Gm, function() {
          t2.controller.abort();
        });
      }
      function bu() {
      }
      function ir(t2) {
        t2 !== wt && t2.next === null && (wt === null ? an = wt = t2 : wt = wt.next = t2), ll = true, Mf || (Mf = true, Lm());
      }
      function Ea(t2, r2) {
        if (!ti && ll) {
          ti = true;
          do
            for (var a2 = false, l2 = an; l2 !== null; ) {
              if (t2 !== 0) {
                var c2 = l2.pendingLanes;
                if (c2 === 0) var d = 0;
                else {
                  var h2 = l2.suspendedLanes, y = l2.pingedLanes;
                  d = (1 << 31 - vt(42 | t2) + 1) - 1, d &= c2 & ~(h2 & ~y), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
                }
                d !== 0 && (a2 = true, Su(l2, d));
              } else d = he, d = Lr(l2, l2 === Ne ? d : 0, l2.cancelPendingCommit !== null || l2.timeoutHandle !== Lo), (d & 3) === 0 || Pi(l2, d) || (a2 = true, Su(l2, d));
              l2 = l2.next;
            }
          while (a2);
          ti = false;
        }
      }
      function Ip() {
        Lp();
      }
      function Lp() {
        ll = Mf = false;
        var t2 = 0;
        Pr !== 0 && _f() && (t2 = Pr);
        for (var r2 = ze(), a2 = null, l2 = an; l2 !== null; ) {
          var c2 = l2.next, d = vu(l2, r2);
          d === 0 ? (l2.next = null, a2 === null ? an = c2 : a2.next = c2, c2 === null && (wt = a2)) : (a2 = l2, (t2 !== 0 || (d & 3) !== 0) && (ll = true)), l2 = c2;
        }
        Re !== 0 && Re !== 5 || Ea(t2), Pr !== 0 && (Pr = 0);
      }
      function vu(t2, r2) {
        for (var a2 = t2.suspendedLanes, l2 = t2.pingedLanes, c2 = t2.expirationTimes, d = t2.pendingLanes & -62914561; 0 < d; ) {
          var h2 = 31 - vt(d), y = 1 << h2, R = c2[h2];
          R === -1 ? ((y & a2) === 0 || (y & l2) !== 0) && (c2[h2] = Tp(y, r2)) : R <= r2 && (t2.expiredLanes |= y), d &= ~y;
        }
        if (r2 = Ne, a2 = he, a2 = Lr(t2, t2 === r2 ? a2 : 0, t2.cancelPendingCommit !== null || t2.timeoutHandle !== Lo), l2 = t2.callbackNode, a2 === 0 || t2 === r2 && (_e === 2 || _e === 9) || t2.cancelPendingCommit !== null) return l2 !== null && l2 !== null && le(l2), t2.callbackNode = null, t2.callbackPriority = 0;
        if ((a2 & 3) === 0 || Pi(t2, a2)) {
          if (r2 = a2 & -a2, r2 === t2.callbackPriority) return r2;
          switch (l2 !== null && le(l2), Ze(a2)) {
            case 2:
            case 8:
              a2 = Ho;
              break;
            case 32:
              a2 = Ao;
              break;
            case 268435456:
              a2 = ol;
              break;
            default:
              a2 = Ao;
          }
          return l2 = dt.bind(null, t2), a2 = Ic(a2, l2), t2.callbackPriority = r2, t2.callbackNode = a2, r2;
        }
        return l2 !== null && l2 !== null && le(l2), t2.callbackPriority = 2, t2.callbackNode = null, 2;
      }
      function dt(t2, r2) {
        if (Re !== 0 && Re !== 5) return t2.callbackNode = null, t2.callbackPriority = 0, null;
        var a2 = t2.callbackNode;
        if (rn() && t2.callbackNode !== a2) return null;
        var l2 = he;
        return l2 = Lr(t2, t2 === Ne ? l2 : 0, t2.cancelPendingCommit !== null || t2.timeoutHandle !== Lo), l2 === 0 ? null : (uf(t2, l2, r2), vu(t2, ze()), t2.callbackNode != null && t2.callbackNode === a2 ? dt.bind(null, t2) : null);
      }
      function Su(t2, r2) {
        if (rn()) return null;
        uf(t2, r2, true);
      }
      function Lm() {
        ih ? Gr(function() {
          (ce & 6) !== 0 ? Ic(Uh, Ip) : Lp();
        }) : Ic(Uh, Ip);
      }
      function ku() {
        if (Pr === 0) {
          var t2 = sl;
          t2 === 0 && (t2 = As, As <<= 1, (As & 261888) === 0 && (As = 256)), Pr = t2;
        }
        return Pr;
      }
      function Np(t2, r2) {
        if (Us === null) {
          var a2 = Us = [];
          Qf = 0, sl = ku(), ul = {
            status: "pending",
            value: void 0,
            then: function(l2) {
              a2.push(l2);
            }
          };
        }
        return Qf++, r2.then(ft, ft), r2;
      }
      function ft() {
        if (--Qf === 0 && Us !== null) {
          ul !== null && (ul.status = "fulfilled");
          var t2 = Us;
          Us = null, sl = 0, ul = null;
          for (var r2 = 0; r2 < t2.length; r2++) (0, t2[r2])();
        }
      }
      function ho(t2, r2) {
        var a2 = [], l2 = {
          status: "pending",
          value: null,
          reason: null,
          then: function(c2) {
            a2.push(c2);
          }
        };
        return t2.then(function() {
          l2.status = "fulfilled", l2.value = r2;
          for (var c2 = 0; c2 < a2.length; c2++) (0, a2[c2])(r2);
        }, function(c2) {
          for (l2.status = "rejected", l2.reason = c2, c2 = 0; c2 < a2.length; c2++) (0, a2[c2])(void 0);
        }), l2;
      }
      function wu() {
        var t2 = ha.current;
        return t2 !== null ? t2 : Ne.pooledCache;
      }
      function Ei(t2, r2) {
        r2 === null ? Ce(ha, ha.current) : Ce(ha, r2.pool);
      }
      function Pu() {
        var t2 = wu();
        return t2 === null ? null : {
          parent: qt ? qe._currentValue : qe._currentValue2,
          pool: t2
        };
      }
      function Ul(t2, r2) {
        if (jn(t2, r2)) return true;
        if (typeof t2 != "object" || t2 === null || typeof r2 != "object" || r2 === null) return false;
        var a2 = Object.keys(t2), l2 = Object.keys(r2);
        if (a2.length !== l2.length) return false;
        for (l2 = 0; l2 < a2.length; l2++) {
          var c2 = a2[l2];
          if (!Bf.call(r2, c2) || !jn(t2[c2], r2[c2])) return false;
        }
        return true;
      }
      function Hd(t2) {
        return t2 = t2.status, t2 === "fulfilled" || t2 === "rejected";
      }
      function mo(t2, r2, a2) {
        switch (a2 = t2[a2], a2 === void 0 ? t2.push(r2) : a2 !== r2 && (r2.then(bu, bu), r2 = a2), r2.status) {
          case "fulfilled":
            return r2.value;
          case "rejected":
            throw t2 = r2.reason, Ia(t2), t2;
          default:
            if (typeof r2.status == "string") r2.then(bu, bu);
            else {
              if (t2 = Ne, t2 !== null && 100 < t2.shellSuspendCounter) throw Error(F(482));
              t2 = r2, t2.status = "pending", t2.then(function(l2) {
                if (r2.status === "pending") {
                  var c2 = r2;
                  c2.status = "fulfilled", c2.value = l2;
                }
              }, function(l2) {
                if (r2.status === "pending") {
                  var c2 = r2;
                  c2.status = "rejected", c2.reason = l2;
                }
              });
            }
            switch (r2.status) {
              case "fulfilled":
                return r2.value;
              case "rejected":
                throw t2 = r2.reason, Ia(t2), t2;
            }
            throw Xt = r2, cl;
        }
      }
      function pt(t2) {
        try {
          var r2 = t2._init;
          return r2(t2._payload);
        } catch (a2) {
          throw a2 !== null && typeof a2 == "object" && typeof a2.then == "function" ? (Xt = a2, cl) : a2;
        }
      }
      function Bl() {
        if (Xt === null) throw Error(F(459));
        var t2 = Xt;
        return Xt = null, t2;
      }
      function Ia(t2) {
        if (t2 === cl || t2 === jc) throw Error(F(483));
      }
      function Rt(t2) {
        var r2 = Bs;
        return Bs += 1, Kt === null && (Kt = []), mo(Kt, t2, r2);
      }
      function La(t2, r2) {
        r2 = r2.props.ref, t2.ref = r2 !== void 0 ? r2 : null;
      }
      function Na(t2, r2) {
        throw r2.$$typeof === hc ? Error(F(525)) : (t2 = Object.prototype.toString.call(r2), Error(F(31, t2 === "[object Object]" ? "object with keys {" + Object.keys(r2).join(", ") + "}" : t2)));
      }
      function Ad(t2) {
        function r2(P, w) {
          if (t2) {
            var C = P.deletions;
            C === null ? (P.deletions = [w], P.flags |= 16) : C.push(w);
          }
        }
        function a2(P, w) {
          if (!t2) return null;
          for (; w !== null; ) r2(P, w), w = w.sibling;
          return null;
        }
        function l2(P) {
          for (var w = /* @__PURE__ */ new Map(); P !== null; ) P.key !== null ? w.set(P.key, P) : w.set(P.index, P), P = P.sibling;
          return w;
        }
        function c2(P, w) {
          return P = Qr(P, w), P.index = 0, P.sibling = null, P;
        }
        function d(P, w, C) {
          return P.index = C, t2 ? (C = P.alternate, C !== null ? (C = C.index, C < w ? (P.flags |= 67108866, w) : C) : (P.flags |= 67108866, w)) : (P.flags |= 1048576, w);
        }
        function h2(P) {
          return t2 && P.alternate === null && (P.flags |= 67108866), P;
        }
        function y(P, w, C, H) {
          return w === null || w.tag !== 6 ? (w = Ps(C, P.mode, H), w.return = P, w) : (w = c2(w, C), w.return = P, w);
        }
        function R(P, w, C, H) {
          var Q = C.type;
          return Q === $a ? j2(P, w, C.props.children, H, C.key) : w !== null && (w.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ua && pt(Q) === w.type) ? (w = c2(w, C.props), La(w, C), w.return = P, w) : (w = ws(C.type, C.key, C.props, null, P.mode, H), La(w, C), w.return = P, w);
        }
        function L(P, w, C, H) {
          return w === null || w.tag !== 4 || w.stateNode.containerInfo !== C.containerInfo || w.stateNode.implementation !== C.implementation ? (w = dc(C, P.mode, H), w.return = P, w) : (w = c2(w, C.children || []), w.return = P, w);
        }
        function j2(P, w, C, H, Q) {
          return w === null || w.tag !== 7 ? (w = Eo(C, P.mode, H, Q), w.return = P, w) : (w = c2(w, C), w.return = P, w);
        }
        function A(P, w, C) {
          if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return w = Ps("" + w, P.mode, C), w.return = P, w;
          if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
              case zs:
                return C = ws(w.type, w.key, w.props, null, P.mode, C), La(C, w), C.return = P, C;
              case sa:
                return w = dc(w, P.mode, C), w.return = P, w;
              case ua:
                return w = pt(w), A(P, w, C);
            }
            if (ca(w) || Fl(w)) return w = Eo(w, P.mode, C, null), w.return = P, w;
            if (typeof w.then == "function") return A(P, Rt(w), C);
            if (w.$$typeof === Io) return A(P, Wl(P, w), C);
            Na(P, w);
          }
          return null;
        }
        function W2(P, w, C, H) {
          var Q = w !== null ? w.key : null;
          if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return Q !== null ? null : y(P, w, "" + C, H);
          if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
              case zs:
                return C.key === Q ? R(P, w, C, H) : null;
              case sa:
                return C.key === Q ? L(P, w, C, H) : null;
              case ua:
                return C = pt(C), W2(P, w, C, H);
            }
            if (ca(C) || Fl(C)) return Q !== null ? null : j2(P, w, C, H, null);
            if (typeof C.then == "function") return W2(P, w, Rt(C), H);
            if (C.$$typeof === Io) return W2(P, w, Wl(P, C), H);
            Na(P, C);
          }
          return null;
        }
        function V(P, w, C, H, Q) {
          if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint") return P = P.get(C) || null, y(w, P, "" + H, Q);
          if (typeof H == "object" && H !== null) {
            switch (H.$$typeof) {
              case zs:
                return P = P.get(H.key === null ? C : H.key) || null, R(w, P, H, Q);
              case sa:
                return P = P.get(H.key === null ? C : H.key) || null, L(w, P, H, Q);
              case ua:
                return H = pt(H), V(P, w, C, H, Q);
            }
            if (ca(H) || Fl(H)) return P = P.get(C) || null, j2(w, P, H, Q, null);
            if (typeof H.then == "function") return V(P, w, C, Rt(H), Q);
            if (H.$$typeof === Io) return V(P, w, C, Wl(w, H), Q);
            Na(w, H);
          }
          return null;
        }
        function Oe(P, w, C, H) {
          for (var Q = null, Ge = null, J = w, Pe = w = 0, me = null; J !== null && Pe < C.length; Pe++) {
            J.index > Pe ? (me = J, J = null) : me = J.sibling;
            var be = W2(P, J, C[Pe], H);
            if (be === null) {
              J === null && (J = me);
              break;
            }
            t2 && J && be.alternate === null && r2(P, J), w = d(be, w, Pe), Ge === null ? Q = be : Ge.sibling = be, Ge = be, J = me;
          }
          if (Pe === C.length) return a2(P, J), ue && or(P, Pe), Q;
          if (J === null) {
            for (; Pe < C.length; Pe++) J = A(P, C[Pe], H), J !== null && (w = d(J, w, Pe), Ge === null ? Q = J : Ge.sibling = J, Ge = J);
            return ue && or(P, Pe), Q;
          }
          for (J = l2(J); Pe < C.length; Pe++) me = V(J, P, Pe, C[Pe], H), me !== null && (t2 && me.alternate !== null && J.delete(me.key === null ? Pe : me.key), w = d(me, w, Pe), Ge === null ? Q = me : Ge.sibling = me, Ge = me);
          return t2 && J.forEach(function(Oo) {
            return r2(P, Oo);
          }), ue && or(P, Pe), Q;
        }
        function vn(P, w, C, H) {
          if (C == null) throw Error(F(151));
          for (var Q = null, Ge = null, J = w, Pe = w = 0, me = null, be = C.next(); J !== null && !be.done; Pe++, be = C.next()) {
            J.index > Pe ? (me = J, J = null) : me = J.sibling;
            var Oo = W2(P, J, be.value, H);
            if (Oo === null) {
              J === null && (J = me);
              break;
            }
            t2 && J && Oo.alternate === null && r2(P, J), w = d(Oo, w, Pe), Ge === null ? Q = Oo : Ge.sibling = Oo, Ge = Oo, J = me;
          }
          if (be.done) return a2(P, J), ue && or(P, Pe), Q;
          if (J === null) {
            for (; !be.done; Pe++, be = C.next()) be = A(P, be.value, H), be !== null && (w = d(be, w, Pe), Ge === null ? Q = be : Ge.sibling = be, Ge = be);
            return ue && or(P, Pe), Q;
          }
          for (J = l2(J); !be.done; Pe++, be = C.next()) be = V(J, P, Pe, be.value, H), be !== null && (t2 && be.alternate !== null && J.delete(be.key === null ? Pe : be.key), w = d(be, w, Pe), Ge === null ? Q = be : Ge.sibling = be, Ge = be);
          return t2 && J.forEach(function(qs) {
            return r2(P, qs);
          }), ue && or(P, Pe), Q;
        }
        function li(P, w, C, H) {
          if (typeof C == "object" && C !== null && C.type === $a && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
              case zs:
                e: {
                  for (var Q = C.key; w !== null; ) {
                    if (w.key === Q) {
                      if (Q = C.type, Q === $a) {
                        if (w.tag === 7) {
                          a2(P, w.sibling), H = c2(w, C.props.children), H.return = P, P = H;
                          break e;
                        }
                      } else if (w.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === ua && pt(Q) === w.type) {
                        a2(P, w.sibling), H = c2(w, C.props), La(H, C), H.return = P, P = H;
                        break e;
                      }
                      a2(P, w);
                      break;
                    } else r2(P, w);
                    w = w.sibling;
                  }
                  C.type === $a ? (H = Eo(C.props.children, P.mode, H, C.key), H.return = P, P = H) : (H = ws(C.type, C.key, C.props, null, P.mode, H), La(H, C), H.return = P, P = H);
                }
                return h2(P);
              case sa:
                e: {
                  for (Q = C.key; w !== null; ) {
                    if (w.key === Q) {
                      if (w.tag === 4 && w.stateNode.containerInfo === C.containerInfo && w.stateNode.implementation === C.implementation) {
                        a2(P, w.sibling), H = c2(w, C.children || []), H.return = P, P = H;
                        break e;
                      } else {
                        a2(P, w);
                        break;
                      }
                    } else r2(P, w);
                    w = w.sibling;
                  }
                  H = dc(C, P.mode, H), H.return = P, P = H;
                }
                return h2(P);
              case ua:
                return C = pt(C), li(P, w, C, H);
            }
            if (ca(C)) return Oe(P, w, C, H);
            if (Fl(C)) {
              if (Q = Fl(C), typeof Q != "function") throw Error(F(150));
              return C = Q.call(C), vn(P, w, C, H);
            }
            if (typeof C.then == "function") return li(P, w, Rt(C), H);
            if (C.$$typeof === Io) return li(P, w, Wl(P, C), H);
            Na(P, C);
          }
          return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, w !== null && w.tag === 6 ? (a2(P, w.sibling), H = c2(w, C), H.return = P, P = H) : (a2(P, w), H = Ps(C, P.mode, H), H.return = P, P = H), h2(P)) : a2(P, w);
        }
        return function(P, w, C, H) {
          try {
            Bs = 0;
            var Q = li(P, w, C, H);
            return Kt = null, Q;
          } catch (J) {
            if (J === cl || J === jc) throw J;
            var Ge = Yn(29, J, null, P.mode);
            return Ge.lanes = H, Ge.return = P, Ge;
          } finally {
          }
        };
      }
      function Bn() {
        for (var t2 = xr, r2 = $f = xr = 0; r2 < t2; ) {
          var a2 = er[r2];
          er[r2++] = null;
          var l2 = er[r2];
          er[r2++] = null;
          var c2 = er[r2];
          er[r2++] = null;
          var d = er[r2];
          if (er[r2++] = null, l2 !== null && c2 !== null) {
            var h2 = l2.pending;
            h2 === null ? c2.next = c2 : (c2.next = h2.next, h2.next = c2), l2.pending = c2;
          }
          d !== 0 && Ii(a2, c2, d);
        }
      }
      function go(t2, r2, a2, l2) {
        er[xr++] = t2, er[xr++] = r2, er[xr++] = a2, er[xr++] = l2, $f |= l2, t2.lanes |= l2, t2 = t2.alternate, t2 !== null && (t2.lanes |= l2);
      }
      function yo(t2, r2, a2, l2) {
        return go(t2, r2, a2, l2), Fa(t2);
      }
      function Ko(t2, r2) {
        return go(t2, null, null, r2), Fa(t2);
      }
      function Ii(t2, r2, a2) {
        t2.lanes |= a2;
        var l2 = t2.alternate;
        l2 !== null && (l2.lanes |= a2);
        for (var c2 = false, d = t2.return; d !== null; ) d.childLanes |= a2, l2 = d.alternate, l2 !== null && (l2.childLanes |= a2), d.tag === 22 && (t2 = d.stateNode, t2 === null || t2._visibility & 1 || (c2 = true)), t2 = d, d = d.return;
        return t2.tag === 3 ? (d = t2.stateNode, c2 && r2 !== null && (c2 = 31 - vt(a2), t2 = d.hiddenUpdates, l2 = t2[c2], l2 === null ? t2[c2] = [r2] : l2.push(r2), r2.lane = a2 | 536870912), d) : null;
      }
      function Fa(t2) {
        if (50 < gl) throw gl = 0, nd = null, Error(F(185));
        for (var r2 = t2.return; r2 !== null; ) t2 = r2, r2 = t2.return;
        return t2.tag === 3 ? t2.stateNode : null;
      }
      function Ol(t2) {
        t2.updateQueue = {
          baseState: t2.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            lanes: 0,
            hiddenCallbacks: null
          },
          callbacks: null
        };
      }
      function Ha(t2, r2) {
        t2 = t2.updateQueue, r2.updateQueue === t2 && (r2.updateQueue = {
          baseState: t2.baseState,
          firstBaseUpdate: t2.firstBaseUpdate,
          lastBaseUpdate: t2.lastBaseUpdate,
          shared: t2.shared,
          callbacks: null
        });
      }
      function Et(t2) {
        return {
          lane: t2,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Nr(t2, r2, a2) {
        var l2 = t2.updateQueue;
        if (l2 === null) return null;
        if (l2 = l2.shared, (ce & 2) !== 0) {
          var c2 = l2.pending;
          return c2 === null ? r2.next = r2 : (r2.next = c2.next, c2.next = r2), l2.pending = r2, r2 = Fa(t2), Ii(t2, null, a2), r2;
        }
        return go(t2, l2, r2, a2), Fa(t2);
      }
      function Ml(t2, r2, a2) {
        if (r2 = r2.updateQueue, r2 !== null && (r2 = r2.shared, (a2 & 4194048) !== 0)) {
          var l2 = r2.lanes;
          l2 &= t2.pendingLanes, a2 |= l2, r2.lanes = a2, $e(t2, a2);
        }
      }
      function jd(t2, r2) {
        var a2 = t2.updateQueue, l2 = t2.alternate;
        if (l2 !== null && (l2 = l2.updateQueue, a2 === l2)) {
          var c2 = null, d = null;
          if (a2 = a2.firstBaseUpdate, a2 !== null) {
            do {
              var h2 = {
                lane: a2.lane,
                tag: a2.tag,
                payload: a2.payload,
                callback: null,
                next: null
              };
              d === null ? c2 = d = h2 : d = d.next = h2, a2 = a2.next;
            } while (a2 !== null);
            d === null ? c2 = d = r2 : d = d.next = r2;
          } else c2 = d = r2;
          a2 = {
            baseState: l2.baseState,
            firstBaseUpdate: c2,
            lastBaseUpdate: d,
            shared: l2.shared,
            callbacks: l2.callbacks
          }, t2.updateQueue = a2;
          return;
        }
        t2 = a2.lastBaseUpdate, t2 === null ? a2.firstBaseUpdate = r2 : t2.next = r2, a2.lastBaseUpdate = r2;
      }
      function Li() {
        if (Vf) {
          var t2 = ul;
          if (t2 !== null) throw t2;
        }
      }
      function Aa(t2, r2, a2, l2) {
        Vf = false;
        var c2 = t2.updateQueue;
        ma = false;
        var d = c2.firstBaseUpdate, h2 = c2.lastBaseUpdate, y = c2.shared.pending;
        if (y !== null) {
          c2.shared.pending = null;
          var R = y, L = R.next;
          R.next = null, h2 === null ? d = L : h2.next = L, h2 = R;
          var j2 = t2.alternate;
          j2 !== null && (j2 = j2.updateQueue, y = j2.lastBaseUpdate, y !== h2 && (y === null ? j2.firstBaseUpdate = L : y.next = L, j2.lastBaseUpdate = R));
        }
        if (d !== null) {
          var A = c2.baseState;
          h2 = 0, j2 = L = R = null, y = d;
          do {
            var W2 = y.lane & -536870913, V = W2 !== y.lane;
            if (V ? (he & W2) === W2 : (l2 & W2) === W2) {
              W2 !== 0 && W2 === sl && (Vf = true), j2 !== null && (j2 = j2.next = {
                lane: 0,
                tag: y.tag,
                payload: y.payload,
                callback: null,
                next: null
              });
              e: {
                var Oe = t2, vn = y;
                W2 = r2;
                var li = a2;
                switch (vn.tag) {
                  case 1:
                    if (Oe = vn.payload, typeof Oe == "function") {
                      A = Oe.call(li, A, W2);
                      break e;
                    }
                    A = Oe;
                    break e;
                  case 3:
                    Oe.flags = Oe.flags & -65537 | 128;
                  case 0:
                    if (Oe = vn.payload, W2 = typeof Oe == "function" ? Oe.call(li, A, W2) : Oe, W2 == null) break e;
                    A = Lt({}, A, W2);
                    break e;
                  case 2:
                    ma = true;
                }
              }
              W2 = y.callback, W2 !== null && (t2.flags |= 64, V && (t2.flags |= 8192), V = c2.callbacks, V === null ? c2.callbacks = [W2] : V.push(W2));
            } else V = {
              lane: W2,
              tag: y.tag,
              payload: y.payload,
              callback: y.callback,
              next: null
            }, j2 === null ? (L = j2 = V, R = A) : j2 = j2.next = V, h2 |= W2;
            if (y = y.next, y === null) {
              if (y = c2.shared.pending, y === null) break;
              V = y, y = V.next, V.next = null, c2.lastBaseUpdate = V, c2.shared.pending = null;
            }
          } while (true);
          j2 === null && (R = A), c2.baseState = R, c2.firstBaseUpdate = L, c2.lastBaseUpdate = j2, d === null && (c2.shared.lanes = 0), ba |= h2, t2.lanes = h2, t2.memoizedState = A;
        }
      }
      function Dd(t2, r2) {
        if (typeof t2 != "function") throw Error(F(191, t2));
        t2.call(r2);
      }
      function Fp(t2, r2) {
        var a2 = t2.callbacks;
        if (a2 !== null) for (t2.callbacks = null, t2 = 0; t2 < a2.length; t2++) Dd(a2[t2], r2);
      }
      function B(t2, r2) {
        t2 = Uo, Ce(Wc, t2), Ce(Kr, r2), Uo = t2 | r2.baseLanes;
      }
      function Ql() {
        Ce(Wc, Uo), Ce(Kr, Kr.current);
      }
      function bo() {
        Uo = Wc.current, D2(Kr), D2(Wc);
      }
      function vo(t2) {
        var r2 = t2.alternate;
        Ce(ln, ln.current & 1), Ce(Ft, t2), zr === null && (r2 === null || Kr.current !== null || r2.memoizedState !== null) && (zr = t2);
      }
      function Ni(t2) {
        Ce(ln, ln.current), Ce(Ft, t2), zr === null && (zr = t2);
      }
      function Fr(t2) {
        t2.tag === 22 ? (Ce(ln, ln.current), Ce(Ft, t2), zr === null && (zr = t2)) : So();
      }
      function So() {
        Ce(ln, ln.current), Ce(Ft, Ft.current);
      }
      function ht(t2) {
        D2(Ft), zr === t2 && (zr = null), D2(ln);
      }
      function ko(t2) {
        for (var r2 = t2; r2 !== null; ) {
          if (r2.tag === 13) {
            var a2 = r2.memoizedState;
            if (a2 !== null && (a2 = a2.dehydrated, a2 === null || Ns(a2) || Fs(a2))) return r2;
          } else if (r2.tag === 19 && (r2.memoizedProps.revealOrder === "forwards" || r2.memoizedProps.revealOrder === "backwards" || r2.memoizedProps.revealOrder === "unstable_legacy-backwards" || r2.memoizedProps.revealOrder === "together")) {
            if ((r2.flags & 128) !== 0) return r2;
          } else if (r2.child !== null) {
            r2.child.return = r2, r2 = r2.child;
            continue;
          }
          if (r2 === t2) break;
          for (; r2.sibling === null; ) {
            if (r2.return === null || r2.return === t2) return null;
            r2 = r2.return;
          }
          r2.sibling.return = r2.return, r2 = r2.sibling;
        }
        return null;
      }
      function Ve() {
        throw Error(F(321));
      }
      function wo(t2, r2) {
        if (r2 === null) return false;
        for (var a2 = 0; a2 < r2.length && a2 < t2.length; a2++) if (!jn(t2[a2], r2[a2])) return false;
        return true;
      }
      function $l(t2, r2, a2, l2, c2, d) {
        return Wo = d, ne = r2, r2.memoizedState = null, r2.updateQueue = null, r2.lanes = 0, M.H = t2 === null || t2.memoizedState === null ? Mh : qf, oi = false, d = a2(l2, c2), oi = false, dl && (d = xu(r2, a2, l2, c2)), Fi(t2), d;
      }
      function Fi(t2) {
        M.H = Os;
        var r2 = Ie !== null && Ie.next !== null;
        if (Wo = 0, pn = Ie = ne = null, Uc = false, fl2 = 0, pl = null, r2) throw Error(F(300));
        t2 === null || hn || (t2 = t2.dependencies, t2 !== null && Ri(t2) && (hn = true));
      }
      function xu(t2, r2, a2, l2) {
        ne = t2;
        var c2 = 0;
        do {
          if (dl && (pl = null), fl2 = 0, dl = false, 25 <= c2) throw Error(F(301));
          if (c2 += 1, pn = Ie = null, t2.updateQueue != null) {
            var d = t2.updateQueue;
            d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
          }
          M.H = Qh, d = r2(a2, l2);
        } while (dl);
        return d;
      }
      function zu() {
        var t2 = M.H, r2 = t2.useState()[0];
        return r2 = typeof r2.then == "function" ? sr(r2) : r2, t2 = t2.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== t2 && (ne.flags |= 1024), r2;
      }
      function Hr() {
        var t2 = Bc !== 0;
        return Bc = 0, t2;
      }
      function lr(t2, r2, a2) {
        r2.updateQueue = t2.updateQueue, r2.flags &= -2053, t2.lanes &= ~a2;
      }
      function Vl(t2) {
        if (Uc) {
          for (t2 = t2.memoizedState; t2 !== null; ) {
            var r2 = t2.queue;
            r2 !== null && (r2.pending = null), t2 = t2.next;
          }
          Uc = false;
        }
        Wo = 0, pn = Ie = ne = null, dl = false, fl2 = Bc = 0, pl = null;
      }
      function Ln() {
        var t2 = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return pn === null ? ne.memoizedState = pn = t2 : pn = pn.next = t2, pn;
      }
      function He() {
        if (Ie === null) {
          var t2 = ne.alternate;
          t2 = t2 !== null ? t2.memoizedState : null;
        } else t2 = Ie.next;
        var r2 = pn === null ? ne.memoizedState : pn.next;
        if (r2 !== null) pn = r2, Ie = t2;
        else {
          if (t2 === null) throw ne.alternate === null ? Error(F(467)) : Error(F(310));
          Ie = t2, t2 = {
            memoizedState: Ie.memoizedState,
            baseState: Ie.baseState,
            baseQueue: Ie.baseQueue,
            queue: Ie.queue,
            next: null
          }, pn === null ? ne.memoizedState = pn = t2 : pn = pn.next = t2;
        }
        return pn;
      }
      function ja() {
        return {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null
        };
      }
      function sr(t2) {
        var r2 = fl2;
        return fl2 += 1, pl === null && (pl = []), t2 = mo(pl, t2, r2), r2 = ne, (pn === null ? r2.memoizedState : pn.next) === null && (r2 = r2.alternate, M.H = r2 === null || r2.memoizedState === null ? Mh : qf), t2;
      }
      function Ee(t2) {
        if (t2 !== null && typeof t2 == "object") {
          if (typeof t2.then == "function") return sr(t2);
          if (t2.$$typeof === Io) return In(t2);
        }
        throw Error(F(438, String(t2)));
      }
      function Hi(t2) {
        var r2 = null, a2 = ne.updateQueue;
        if (a2 !== null && (r2 = a2.memoCache), r2 == null) {
          var l2 = ne.alternate;
          l2 !== null && (l2 = l2.updateQueue, l2 !== null && (l2 = l2.memoCache, l2 != null && (r2 = {
            data: l2.data.map(function(c2) {
              return c2.slice();
            }),
            index: 0
          })));
        }
        if (r2 == null && (r2 = {
          data: [],
          index: 0
        }), a2 === null && (a2 = ja(), ne.updateQueue = a2), a2.memoCache = r2, a2 = r2.data[r2.index], a2 === void 0) for (a2 = r2.data[r2.index] = Array(t2), l2 = 0; l2 < t2; l2++) a2[l2] = $r;
        return r2.index++, a2;
      }
      function Ar(t2, r2) {
        return typeof r2 == "function" ? r2(t2) : r2;
      }
      function Ai(t2) {
        var r2 = He();
        return Po(r2, Ie, t2);
      }
      function Po(t2, r2, a2) {
        var l2 = t2.queue;
        if (l2 === null) throw Error(F(311));
        l2.lastRenderedReducer = a2;
        var c2 = t2.baseQueue, d = l2.pending;
        if (d !== null) {
          if (c2 !== null) {
            var h2 = c2.next;
            c2.next = d.next, d.next = h2;
          }
          r2.baseQueue = c2 = d, l2.pending = null;
        }
        if (d = t2.baseState, c2 === null) t2.memoizedState = d;
        else {
          r2 = c2.next;
          var y = h2 = null, R = null, L = r2, j2 = false;
          do {
            var A = L.lane & -536870913;
            if (A !== L.lane ? (he & A) === A : (Wo & A) === A) {
              var W2 = L.revertLane;
              if (W2 === 0) R !== null && (R = R.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null
              }), A === sl && (j2 = true);
              else if ((Wo & W2) === W2) {
                L = L.next, W2 === sl && (j2 = true);
                continue;
              } else A = {
                lane: 0,
                revertLane: L.revertLane,
                gesture: null,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null
              }, R === null ? (y = R = A, h2 = d) : R = R.next = A, ne.lanes |= W2, ba |= W2;
              A = L.action, oi && a2(d, A), d = L.hasEagerState ? L.eagerState : a2(d, A);
            } else W2 = {
              lane: A,
              revertLane: L.revertLane,
              gesture: L.gesture,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            }, R === null ? (y = R = W2, h2 = d) : R = R.next = W2, ne.lanes |= A, ba |= A;
            L = L.next;
          } while (L !== null && L !== r2);
          if (R === null ? h2 = d : R.next = y, !jn(d, t2.memoizedState) && (hn = true, j2 && (a2 = ul, a2 !== null))) throw a2;
          t2.memoizedState = d, t2.baseState = h2, t2.baseQueue = R, l2.lastRenderedState = d;
        }
        return c2 === null && (l2.lanes = 0), [t2.memoizedState, l2.dispatch];
      }
      function Da(t2) {
        var r2 = He(), a2 = r2.queue;
        if (a2 === null) throw Error(F(311));
        a2.lastRenderedReducer = t2;
        var l2 = a2.dispatch, c2 = a2.pending, d = r2.memoizedState;
        if (c2 !== null) {
          a2.pending = null;
          var h2 = c2 = c2.next;
          do
            d = t2(d, h2.action), h2 = h2.next;
          while (h2 !== c2);
          jn(d, r2.memoizedState) || (hn = true), r2.memoizedState = d, r2.baseQueue === null && (r2.baseState = d), a2.lastRenderedState = d;
        }
        return [d, l2];
      }
      function ur(t2, r2, a2) {
        var l2 = ne, c2 = He(), d = ue;
        if (d) {
          if (a2 === void 0) throw Error(F(407));
          a2 = a2();
        } else a2 = r2();
        var h2 = !jn((Ie || c2).memoizedState, a2);
        if (h2 && (c2.memoizedState = a2, hn = true), c2 = c2.queue, Tu(ql.bind(null, l2, c2, t2), [t2]), c2.getSnapshot !== r2 || h2 || pn !== null && pn.memoizedState.tag & 1) {
          if (l2.flags |= 2048, Kn(9, {
            destroy: void 0
          }, jr.bind(null, l2, c2, a2, r2), null), Ne === null) throw Error(F(349));
          d || (Wo & 127) !== 0 || Hp(l2, r2, a2);
        }
        return a2;
      }
      function Hp(t2, r2, a2) {
        t2.flags |= 16384, t2 = {
          getSnapshot: r2,
          value: a2
        }, r2 = ne.updateQueue, r2 === null ? (r2 = ja(), ne.updateQueue = r2, r2.stores = [t2]) : (a2 = r2.stores, a2 === null ? r2.stores = [t2] : a2.push(t2));
      }
      function jr(t2, r2, a2, l2) {
        r2.value = a2, r2.getSnapshot = l2, ji(r2) && Gl(t2);
      }
      function ql(t2, r2, a2) {
        return a2(function() {
          ji(r2) && Gl(t2);
        });
      }
      function ji(t2) {
        var r2 = t2.getSnapshot;
        t2 = t2.value;
        try {
          var a2 = r2();
          return !jn(t2, a2);
        } catch (e2) {
          return true;
        }
      }
      function Gl(t2) {
        var r2 = Ko(t2, 2);
        r2 !== null && nt(r2, t2, 2);
      }
      function Xn(t2) {
        var r2 = Ln();
        if (typeof t2 == "function") {
          var a2 = t2;
          if (t2 = a2(), oi) {
            pe(true);
            try {
              a2();
            } finally {
              pe(false);
            }
          }
        }
        return r2.memoizedState = r2.baseState = t2, r2.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ar,
          lastRenderedState: t2
        }, r2;
      }
      function mt(t2, r2, a2, l2) {
        return t2.baseState = a2, Po(t2, Ie, typeof l2 == "function" ? l2 : Ar);
      }
      function Dr(t2, r2, a2, l2, c2) {
        if (na(t2)) throw Error(F(485));
        if (t2 = r2.action, t2 !== null) {
          var d = {
            payload: c2,
            action: t2,
            next: null,
            isTransition: true,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(h2) {
              d.listeners.push(h2);
            }
          };
          M.T !== null ? a2(true) : d.isTransition = false, l2(d), a2 = r2.pending, a2 === null ? (d.next = r2.pending = d, cr(r2, d)) : (d.next = a2.next, r2.pending = a2.next = d);
        }
      }
      function cr(t2, r2) {
        var a2 = r2.action, l2 = r2.payload, c2 = t2.state;
        if (r2.isTransition) {
          var d = M.T, h2 = {};
          M.T = h2;
          try {
            var y = a2(c2, l2), R = M.S;
            R !== null && R(h2, y), dr(t2, r2, y);
          } catch (L) {
            Jl(t2, r2, L);
          } finally {
            d !== null && h2.types !== null && (d.types = h2.types), M.T = d;
          }
        } else try {
          d = a2(c2, l2), dr(t2, r2, d);
        } catch (L) {
          Jl(t2, r2, L);
        }
      }
      function dr(t2, r2, a2) {
        a2 !== null && typeof a2 == "object" && typeof a2.then == "function" ? a2.then(function(l2) {
          fr(t2, r2, l2);
        }, function(l2) {
          return Jl(t2, r2, l2);
        }) : fr(t2, r2, a2);
      }
      function fr(t2, r2, a2) {
        r2.status = "fulfilled", r2.value = a2, Cu(r2), t2.state = a2, r2 = t2.pending, r2 !== null && (a2 = r2.next, a2 === r2 ? t2.pending = null : (a2 = a2.next, r2.next = a2, cr(t2, a2)));
      }
      function Jl(t2, r2, a2) {
        var l2 = t2.pending;
        if (t2.pending = null, l2 !== null) {
          l2 = l2.next;
          do
            r2.status = "rejected", r2.reason = a2, Cu(r2), r2 = r2.next;
          while (r2 !== l2);
        }
        t2.action = null;
      }
      function Cu(t2) {
        t2 = t2.listeners;
        for (var r2 = 0; r2 < t2.length; r2++) (0, t2[r2])();
      }
      function Wd(t2, r2) {
        return r2;
      }
      function pr(t2, r2) {
        if (ue) {
          var a2 = Ne.formState;
          if (a2 !== null) {
            e: {
              var l2 = ne;
              if (ue) {
                if (Ue) {
                  var c2 = vh(Ue, Yt);
                  if (c2) {
                    Ue = Nf(c2), l2 = Sh(c2);
                    break e;
                  }
                }
                ar(l2);
              }
              l2 = false;
            }
            l2 && (r2 = a2[0]);
          }
        }
        a2 = Ln(), a2.memoizedState = a2.baseState = r2, l2 = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wd,
          lastRenderedState: r2
        }, a2.queue = l2, a2 = Nu.bind(null, ne, l2), l2.dispatch = a2, l2 = Xn(false);
        var d = Wi.bind(null, ne, false, l2.queue);
        return l2 = Ln(), c2 = {
          state: r2,
          dispatch: null,
          action: t2,
          pending: null
        }, l2.queue = c2, a2 = Dr.bind(null, ne, c2, d, a2), c2.dispatch = a2, l2.memoizedState = t2, [r2, a2, false];
      }
      function Ud(t2) {
        var r2 = He();
        return hr(r2, Ie, t2);
      }
      function hr(t2, r2, a2) {
        if (r2 = Po(t2, r2, Wd)[0], t2 = Ai(Ar)[0], typeof r2 == "object" && r2 !== null && typeof r2.then == "function") try {
          var l2 = sr(r2);
        } catch (h2) {
          throw h2 === cl ? jc : h2;
        }
        else l2 = r2;
        r2 = He();
        var c2 = r2.queue, d = c2.dispatch;
        return a2 !== r2.memoizedState && (ne.flags |= 2048, Kn(9, {
          destroy: void 0
        }, Zl.bind(null, c2, a2), null)), [l2, d, t2];
      }
      function Zl(t2, r2) {
        t2.action = r2;
      }
      function Yl(t2) {
        var r2 = He(), a2 = Ie;
        if (a2 !== null) return hr(r2, a2, t2);
        He(), r2 = r2.memoizedState, a2 = He();
        var l2 = a2.queue.dispatch;
        return a2.memoizedState = t2, [r2, l2, false];
      }
      function Kn(t2, r2, a2, l2) {
        return t2 = {
          tag: t2,
          create: a2,
          deps: l2,
          inst: r2,
          next: null
        }, r2 = ne.updateQueue, r2 === null && (r2 = ja(), ne.updateQueue = r2), a2 = r2.lastEffect, a2 === null ? r2.lastEffect = t2.next = t2 : (l2 = a2.next, a2.next = t2, t2.next = l2, r2.lastEffect = t2), t2;
      }
      function Wa() {
        return He().memoizedState;
      }
      function Xl(t2, r2, a2, l2) {
        var c2 = Ln();
        ne.flags |= t2, c2.memoizedState = Kn(1 | r2, {
          destroy: void 0
        }, a2, l2 === void 0 ? null : l2);
      }
      function Di(t2, r2, a2, l2) {
        var c2 = He();
        l2 = l2 === void 0 ? null : l2;
        var d = c2.memoizedState.inst;
        Ie !== null && l2 !== null && wo(l2, Ie.memoizedState.deps) ? c2.memoizedState = Kn(r2, d, a2, l2) : (ne.flags |= t2, c2.memoizedState = Kn(1 | r2, d, a2, l2));
      }
      function Bd(t2, r2) {
        Xl(8390656, 8, t2, r2);
      }
      function Tu(t2, r2) {
        Di(2048, 8, t2, r2);
      }
      function Ap(t2) {
        ne.flags |= 4;
        var r2 = ne.updateQueue;
        if (r2 === null) r2 = ja(), ne.updateQueue = r2, r2.events = [t2];
        else {
          var a2 = r2.events;
          a2 === null ? r2.events = [t2] : a2.push(t2);
        }
      }
      function _u(t2) {
        var r2 = He().memoizedState;
        return Ap({
          ref: r2,
          nextImpl: t2
        }), function() {
          if ((ce & 2) !== 0) throw Error(F(440));
          return r2.impl.apply(void 0, arguments);
        };
      }
      function Od(t2, r2) {
        return Di(4, 2, t2, r2);
      }
      function Ru(t2, r2) {
        return Di(4, 4, t2, r2);
      }
      function jp(t2, r2) {
        if (typeof r2 == "function") {
          t2 = t2();
          var a2 = r2(t2);
          return function() {
            typeof a2 == "function" ? a2() : r2(null);
          };
        }
        if (r2 != null) return t2 = t2(), r2.current = t2, function() {
          r2.current = null;
        };
      }
      function Md(t2, r2, a2) {
        a2 = a2 != null ? a2.concat([t2]) : null, Di(4, 4, jp.bind(null, r2, t2), a2);
      }
      function Qd() {
      }
      function Eu(t2, r2) {
        var a2 = He();
        r2 = r2 === void 0 ? null : r2;
        var l2 = a2.memoizedState;
        return r2 !== null && wo(r2, l2[1]) ? l2[0] : (a2.memoizedState = [t2, r2], t2);
      }
      function Kl(t2, r2) {
        var a2 = He();
        r2 = r2 === void 0 ? null : r2;
        var l2 = a2.memoizedState;
        if (r2 !== null && wo(r2, l2[1])) return l2[0];
        if (l2 = t2(), oi) {
          pe(true);
          try {
            t2();
          } finally {
            pe(false);
          }
        }
        return a2.memoizedState = [l2, r2], l2;
      }
      function Iu(t2, r2, a2) {
        return a2 === void 0 || (Wo & 1073741824) !== 0 && (he & 261930) === 0 ? t2.memoizedState = r2 : (t2.memoizedState = a2, t2 = ys(), ne.lanes |= t2, ba |= t2, a2);
      }
      function es(t2, r2, a2, l2) {
        return jn(a2, r2) ? a2 : Kr.current !== null ? (t2 = Iu(t2, a2, l2), jn(t2, r2) || (hn = true), t2) : (Wo & 42) === 0 || (Wo & 1073741824) !== 0 && (he & 261930) === 0 ? (hn = true, t2.memoizedState = a2) : (t2 = ys(), ne.lanes |= t2, ba |= t2, r2);
      }
      function $d(t2, r2, a2, l2, c2) {
        var d = qr();
        yn(d !== 0 && 8 > d ? d : 8);
        var h2 = M.T, y = {};
        M.T = y, Wi(t2, false, r2, a2);
        try {
          var R = c2(), L = M.S;
          if (L !== null && L(y, R), R !== null && typeof R == "object" && typeof R.then == "function") {
            var j2 = ho(R, l2);
            ea(t2, r2, j2, bt(t2));
          } else ea(t2, r2, l2, bt(t2));
        } catch (A) {
          ea(t2, r2, {
            then: function() {
            },
            status: "rejected",
            reason: A
          }, bt());
        } finally {
          yn(d), h2 !== null && y.types !== null && (h2.types = y.types), M.T = h2;
        }
      }
      function Vd(t2) {
        var r2 = t2.memoizedState;
        if (r2 !== null) return r2;
        r2 = {
          memoizedState: rt,
          baseState: rt,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ar,
            lastRenderedState: rt
          },
          next: null
        };
        var a2 = {};
        return r2.next = {
          memoizedState: a2,
          baseState: a2,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ar,
            lastRenderedState: a2
          },
          next: null
        }, t2.memoizedState = r2, t2 = t2.alternate, t2 !== null && (t2.memoizedState = r2), r2;
      }
      function Lu() {
        return In(da);
      }
      function xo() {
        return He().memoizedState;
      }
      function qd() {
        return He().memoizedState;
      }
      function Dp(t2) {
        for (var r2 = t2.return; r2 !== null; ) {
          switch (r2.tag) {
            case 24:
            case 3:
              var a2 = bt();
              t2 = Et(a2);
              var l2 = Nr(r2, t2, a2);
              l2 !== null && (nt(l2, r2, a2), Ml(l2, r2, a2)), r2 = {
                cache: Fd()
              }, t2.payload = r2;
              return;
          }
          r2 = r2.return;
        }
      }
      function Nn(t2, r2, a2) {
        var l2 = bt();
        a2 = {
          lane: l2,
          revertLane: 0,
          gesture: null,
          action: a2,
          hasEagerState: false,
          eagerState: null,
          next: null
        }, na(t2) ? Gd(r2, a2) : (a2 = yo(t2, r2, a2, l2), a2 !== null && (nt(a2, t2, l2), ns(a2, r2, l2)));
      }
      function Nu(t2, r2, a2) {
        var l2 = bt();
        ea(t2, r2, a2, l2);
      }
      function ea(t2, r2, a2, l2) {
        var c2 = {
          lane: l2,
          revertLane: 0,
          gesture: null,
          action: a2,
          hasEagerState: false,
          eagerState: null,
          next: null
        };
        if (na(t2)) Gd(r2, c2);
        else {
          var d = t2.alternate;
          if (t2.lanes === 0 && (d === null || d.lanes === 0) && (d = r2.lastRenderedReducer, d !== null)) try {
            var h2 = r2.lastRenderedState, y = d(h2, a2);
            if (c2.hasEagerState = true, c2.eagerState = y, jn(y, h2)) return go(t2, r2, c2, 0), Ne === null && Bn(), false;
          } catch (e2) {
          } finally {
          }
          if (a2 = yo(t2, r2, c2, l2), a2 !== null) return nt(a2, t2, l2), ns(a2, r2, l2), true;
        }
        return false;
      }
      function Wi(t2, r2, a2, l2) {
        if (l2 = {
          lane: 2,
          revertLane: ku(),
          gesture: null,
          action: l2,
          hasEagerState: false,
          eagerState: null,
          next: null
        }, na(t2)) {
          if (r2) throw Error(F(479));
        } else r2 = yo(t2, a2, l2, 2), r2 !== null && nt(r2, t2, 2);
      }
      function na(t2) {
        var r2 = t2.alternate;
        return t2 === ne || r2 !== null && r2 === ne;
      }
      function Gd(t2, r2) {
        dl = Uc = true;
        var a2 = t2.pending;
        a2 === null ? r2.next = r2 : (r2.next = a2.next, a2.next = r2), t2.pending = r2;
      }
      function ns(t2, r2, a2) {
        if ((a2 & 4194048) !== 0) {
          var l2 = r2.lanes;
          l2 &= t2.pendingLanes, a2 |= l2, r2.lanes = a2, $e(t2, a2);
        }
      }
      function Fu(t2, r2, a2, l2) {
        r2 = t2.memoizedState, a2 = a2(l2, r2), a2 = a2 == null ? r2 : Lt({}, r2, a2), t2.memoizedState = a2, t2.lanes === 0 && (t2.updateQueue.baseState = a2);
      }
      function ts(t2, r2, a2, l2, c2, d, h2) {
        return t2 = t2.stateNode, typeof t2.shouldComponentUpdate == "function" ? t2.shouldComponentUpdate(l2, d, h2) : r2.prototype && r2.prototype.isPureReactComponent ? !Ul(a2, l2) || !Ul(c2, d) : true;
      }
      function Jd(t2, r2, a2, l2) {
        t2 = r2.state, typeof r2.componentWillReceiveProps == "function" && r2.componentWillReceiveProps(a2, l2), typeof r2.UNSAFE_componentWillReceiveProps == "function" && r2.UNSAFE_componentWillReceiveProps(a2, l2), r2.state !== t2 && Oc.enqueueReplaceState(r2, r2.state, null);
      }
      function Wr(t2, r2) {
        var a2 = r2;
        if ("ref" in r2) {
          a2 = {};
          for (var l2 in r2) l2 !== "ref" && (a2[l2] = r2[l2]);
        }
        if (t2 = t2.defaultProps) {
          a2 === r2 && (a2 = Lt({}, a2));
          for (var c2 in t2) a2[c2] === void 0 && (a2[c2] = t2[c2]);
        }
        return a2;
      }
      function rs(t2, r2) {
        try {
          var a2 = t2.onUncaughtError;
          a2(r2.value, {
            componentStack: r2.stack
          });
        } catch (l2) {
          setTimeout(function() {
            throw l2;
          });
        }
      }
      function Zd(t2, r2, a2) {
        try {
          var l2 = t2.onCaughtError;
          l2(a2.value, {
            componentStack: a2.stack,
            errorBoundary: r2.tag === 1 ? r2.stateNode : null
          });
        } catch (c2) {
          setTimeout(function() {
            throw c2;
          });
        }
      }
      function Ui(t2, r2, a2) {
        return a2 = Et(a2), a2.tag = 3, a2.payload = {
          element: null
        }, a2.callback = function() {
          rs(t2, r2);
        }, a2;
      }
      function os(t2) {
        return t2 = Et(t2), t2.tag = 3, t2;
      }
      function Hu(t2, r2, a2, l2) {
        var c2 = a2.type.getDerivedStateFromError;
        if (typeof c2 == "function") {
          var d = l2.value;
          t2.payload = function() {
            return c2(d);
          }, t2.callback = function() {
            Zd(r2, a2, l2);
          };
        }
        var h2 = a2.stateNode;
        h2 !== null && typeof h2.componentDidCatch == "function" && (t2.callback = function() {
          Zd(r2, a2, l2), typeof c2 != "function" && (va === null ? va = /* @__PURE__ */ new Set([this]) : va.add(this));
          var y = l2.stack;
          this.componentDidCatch(l2.value, {
            componentStack: y !== null ? y : ""
          });
        });
      }
      function On(t2, r2, a2, l2, c2) {
        if (a2.flags |= 32768, l2 !== null && typeof l2 == "object" && typeof l2.then == "function") {
          if (r2 = a2.alternate, r2 !== null && po(r2, a2, c2, true), a2 = Ft.current, a2 !== null) {
            switch (a2.tag) {
              case 31:
              case 13:
                return zr === null ? Gi() : a2.alternate === null && Xe === 0 && (Xe = 3), a2.flags &= -257, a2.flags |= 65536, a2.lanes = c2, l2 === Dc ? a2.flags |= 16384 : (r2 = a2.updateQueue, r2 === null ? a2.updateQueue = /* @__PURE__ */ new Set([l2]) : r2.add(l2), lc(t2, l2, c2)), false;
              case 22:
                return a2.flags |= 65536, l2 === Dc ? a2.flags |= 16384 : (r2 = a2.updateQueue, r2 === null ? (r2 = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: /* @__PURE__ */ new Set([l2])
                }, a2.updateQueue = r2) : (a2 = r2.retryQueue, a2 === null ? r2.retryQueue = /* @__PURE__ */ new Set([l2]) : a2.add(l2)), lc(t2, l2, c2)), false;
            }
            throw Error(F(435, a2.tag));
          }
          return lc(t2, l2, c2), Gi(), false;
        }
        if (ue) return r2 = Ft.current, r2 !== null ? ((r2.flags & 65536) === 0 && (r2.flags |= 256), r2.flags |= 65536, r2.lanes = c2, l2 !== Of && (t2 = Error(F(422), {
          cause: l2
        }), ct(ut(t2, a2)))) : (l2 !== Of && (r2 = Error(F(423), {
          cause: l2
        }), ct(ut(r2, a2))), t2 = t2.current.alternate, t2.flags |= 65536, c2 &= -c2, t2.lanes |= c2, l2 = ut(l2, a2), c2 = Ui(t2.stateNode, l2, c2), jd(t2, c2), Xe !== 4 && (Xe = 2)), false;
        var d = Error(F(520), {
          cause: l2
        });
        if (d = ut(d, a2), $s === null ? $s = [d] : $s.push(d), Xe !== 4 && (Xe = 2), r2 === null) return true;
        l2 = ut(l2, a2), a2 = r2;
        do {
          switch (a2.tag) {
            case 3:
              return a2.flags |= 65536, t2 = c2 & -c2, a2.lanes |= t2, t2 = Ui(a2.stateNode, l2, t2), jd(a2, t2), false;
            case 1:
              if (r2 = a2.type, d = a2.stateNode, (a2.flags & 128) === 0 && (typeof r2.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (va === null || !va.has(d)))) return a2.flags |= 65536, c2 &= -c2, a2.lanes |= c2, c2 = os(c2), Hu(c2, t2, a2, l2), jd(a2, c2), false;
          }
          a2 = a2.return;
        } while (a2 !== null);
        return false;
      }
      function wn(t2, r2, a2, l2) {
        r2.child = t2 === null ? Oh(r2, null, a2, l2) : ri(r2, t2.child, a2, l2);
      }
      function as(t2, r2, a2, l2, c2) {
        a2 = a2.render;
        var d = r2.ref;
        if ("ref" in l2) {
          var h2 = {};
          for (var y in l2) y !== "ref" && (h2[y] = l2[y]);
        } else h2 = l2;
        return Un(r2), l2 = $l(t2, r2, a2, h2, d, c2), y = Hr(), t2 !== null && !hn ? (lr(t2, r2, c2), gt(t2, r2, c2)) : (ue && y && Id(r2), r2.flags |= 1, wn(t2, r2, l2, c2), r2.child);
      }
      function Au(t2, r2, a2, l2, c2) {
        if (t2 === null) {
          var d = a2.type;
          return typeof d == "function" && !ks(d) && d.defaultProps === void 0 && a2.compare === null ? (r2.tag = 15, r2.type = d, ju(t2, r2, d, l2, c2)) : (t2 = ws(a2.type, null, l2, r2, r2.mode, c2), t2.ref = r2.ref, t2.return = r2, r2.child = t2);
        }
        if (d = t2.child, !Mi(t2, c2)) {
          var h2 = d.memoizedProps;
          if (a2 = a2.compare, a2 = a2 !== null ? a2 : Ul, a2(h2, l2) && t2.ref === r2.ref) return gt(t2, r2, c2);
        }
        return r2.flags |= 1, t2 = Qr(d, l2), t2.ref = r2.ref, t2.return = r2, r2.child = t2;
      }
      function ju(t2, r2, a2, l2, c2) {
        if (t2 !== null) {
          var d = t2.memoizedProps;
          if (Ul(d, l2) && t2.ref === r2.ref) if (hn = false, r2.pendingProps = l2 = d, Mi(t2, c2)) (t2.flags & 131072) !== 0 && (hn = true);
          else return r2.lanes = t2.lanes, gt(t2, r2, c2);
        }
        return Yd(t2, r2, a2, l2, c2);
      }
      function zo(t2, r2, a2, l2) {
        var c2 = l2.children, d = t2 !== null ? t2.memoizedState : null;
        if (t2 === null && r2.stateNode === null && (r2.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }), l2.mode === "hidden") {
          if ((r2.flags & 128) !== 0) {
            if (d = d !== null ? d.baseLanes | a2 : a2, t2 !== null) {
              for (l2 = r2.child = t2.child, c2 = 0; l2 !== null; ) c2 = c2 | l2.lanes | l2.childLanes, l2 = l2.sibling;
              l2 = c2 & ~d;
            } else l2 = 0, r2.child = null;
            return Bi(t2, r2, d, a2, l2);
          }
          if ((a2 & 536870912) !== 0) r2.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, t2 !== null && Ei(r2, d !== null ? d.cachePool : null), d !== null ? B(r2, d) : Ql(), Fr(r2);
          else return l2 = r2.lanes = 536870912, Bi(t2, r2, d !== null ? d.baseLanes | a2 : a2, a2, l2);
        } else d !== null ? (Ei(r2, d.cachePool), B(r2, d), So(), r2.memoizedState = null) : (t2 !== null && Ei(r2, null), Ql(), So());
        return wn(t2, r2, c2, a2), r2.child;
      }
      function Mt(t2, r2) {
        return t2 !== null && t2.tag === 22 || r2.stateNode !== null || (r2.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }), r2.sibling;
      }
      function Bi(t2, r2, a2, l2, c2) {
        var d = wu();
        return d = d === null ? null : {
          parent: qt ? qe._currentValue : qe._currentValue2,
          pool: d
        }, r2.memoizedState = {
          baseLanes: a2,
          cachePool: d
        }, t2 !== null && Ei(r2, null), Ql(), Fr(r2), t2 !== null && po(t2, r2, l2, true), r2.childLanes = c2, null;
      }
      function Ua(t2, r2) {
        return r2 = mr({
          mode: r2.mode,
          children: r2.children
        }, t2.mode), r2.ref = t2.ref, t2.child = r2, r2.return = t2, r2;
      }
      function Oi(t2, r2, a2) {
        return ri(r2, t2.child, null, a2), t2 = Ua(r2, r2.pendingProps), t2.flags |= 2, ht(r2), r2.memoizedState = null, t2;
      }
      function is2(t2, r2, a2) {
        var l2 = r2.pendingProps, c2 = (r2.flags & 128) !== 0;
        if (r2.flags &= -129, t2 === null) {
          if (ue) {
            if (l2.mode === "hidden") return t2 = Ua(r2, l2), r2.lanes = 536870912, Mt(null, t2);
            if (Ni(r2), (t2 = Ue) ? (t2 = xh(t2, Yt), t2 !== null && (r2.memoizedState = {
              dehydrated: t2,
              treeContext: jo !== null ? {
                id: ot,
                overflow: Zr
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, a2 = cc(t2), a2.return = r2, r2.child = a2, bn = r2, Ue = null)) : t2 = null, t2 === null) throw ar(r2);
            return r2.lanes = 536870912, null;
          }
          return Ua(r2, l2);
        }
        var d = t2.memoizedState;
        if (d !== null) {
          var h2 = d.dehydrated;
          if (Ni(r2), c2) {
            if (r2.flags & 256) r2.flags &= -257, r2 = Oi(t2, r2, a2);
            else if (r2.memoizedState !== null) r2.child = t2.child, r2.flags |= 128, r2 = null;
            else throw Error(F(558));
          } else if (hn || po(t2, r2, a2, false), c2 = (a2 & t2.childLanes) !== 0, hn || c2) {
            if (l2 = Ne, l2 !== null && (h2 = G(l2, a2), h2 !== 0 && h2 !== d.retryLane)) throw d.retryLane = h2, Ko(t2, h2), nt(l2, t2, h2), Mc;
            Gi(), r2 = Oi(t2, r2, a2);
          } else t2 = d.treeContext, Hn && (Ue = Ff(h2), bn = r2, ue = true, Do = null, Yt = false, t2 !== null && Ld(r2, t2)), r2 = Ua(r2, l2), r2.flags |= 4096;
          return r2;
        }
        return t2 = Qr(t2.child, {
          mode: l2.mode,
          children: l2.children
        }), t2.ref = r2.ref, r2.child = t2, t2.return = r2, t2;
      }
      function ls(t2, r2) {
        var a2 = r2.ref;
        if (a2 === null) t2 !== null && t2.ref !== null && (r2.flags |= 4194816);
        else {
          if (typeof a2 != "function" && typeof a2 != "object") throw Error(F(284));
          (t2 === null || t2.ref !== a2) && (r2.flags |= 4194816);
        }
      }
      function Yd(t2, r2, a2, l2, c2) {
        return Un(r2), a2 = $l(t2, r2, a2, l2, void 0, c2), l2 = Hr(), t2 !== null && !hn ? (lr(t2, r2, c2), gt(t2, r2, c2)) : (ue && l2 && Id(r2), r2.flags |= 1, wn(t2, r2, a2, c2), r2.child);
      }
      function Xd(t2, r2, a2, l2, c2, d) {
        return Un(r2), r2.updateQueue = null, a2 = xu(r2, l2, a2, c2), Fi(t2), l2 = Hr(), t2 !== null && !hn ? (lr(t2, r2, d), gt(t2, r2, d)) : (ue && l2 && Id(r2), r2.flags |= 1, wn(t2, r2, a2, d), r2.child);
      }
      function Kd(t2, r2, a2, l2, c2) {
        if (Un(r2), r2.stateNode === null) {
          var d = Ka, h2 = a2.contextType;
          typeof h2 == "object" && h2 !== null && (d = In(h2)), d = new a2(l2, d), r2.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Oc, r2.stateNode = d, d._reactInternals = r2, d = r2.stateNode, d.props = l2, d.state = r2.memoizedState, d.refs = {}, Ol(r2), h2 = a2.contextType, d.context = typeof h2 == "object" && h2 !== null ? In(h2) : Ka, d.state = r2.memoizedState, h2 = a2.getDerivedStateFromProps, typeof h2 == "function" && (Fu(r2, a2, h2, l2), d.state = r2.memoizedState), typeof a2.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (h2 = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), h2 !== d.state && Oc.enqueueReplaceState(d, d.state, null), Aa(r2, l2, d, c2), Li(), d.state = r2.memoizedState), typeof d.componentDidMount == "function" && (r2.flags |= 4194308), l2 = true;
        } else if (t2 === null) {
          d = r2.stateNode;
          var y = r2.memoizedProps, R = Wr(a2, y);
          d.props = R;
          var L = d.context, j2 = a2.contextType;
          h2 = Ka, typeof j2 == "object" && j2 !== null && (h2 = In(j2));
          var A = a2.getDerivedStateFromProps;
          j2 = typeof A == "function" || typeof d.getSnapshotBeforeUpdate == "function", y = r2.pendingProps !== y, j2 || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y || L !== h2) && Jd(r2, d, l2, h2), ma = false;
          var W2 = r2.memoizedState;
          d.state = W2, Aa(r2, l2, d, c2), Li(), L = r2.memoizedState, y || W2 !== L || ma ? (typeof A == "function" && (Fu(r2, a2, A, l2), L = r2.memoizedState), (R = ma || ts(r2, a2, R, l2, W2, L, h2)) ? (j2 || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (r2.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (r2.flags |= 4194308), r2.memoizedProps = l2, r2.memoizedState = L), d.props = l2, d.state = L, d.context = h2, l2 = R) : (typeof d.componentDidMount == "function" && (r2.flags |= 4194308), l2 = false);
        } else {
          d = r2.stateNode, Ha(t2, r2), h2 = r2.memoizedProps, j2 = Wr(a2, h2), d.props = j2, A = r2.pendingProps, W2 = d.context, L = a2.contextType, R = Ka, typeof L == "object" && L !== null && (R = In(L)), y = a2.getDerivedStateFromProps, (L = typeof y == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (h2 !== A || W2 !== R) && Jd(r2, d, l2, R), ma = false, W2 = r2.memoizedState, d.state = W2, Aa(r2, l2, d, c2), Li();
          var V = r2.memoizedState;
          h2 !== A || W2 !== V || ma || t2 !== null && t2.dependencies !== null && Ri(t2.dependencies) ? (typeof y == "function" && (Fu(r2, a2, y, l2), V = r2.memoizedState), (j2 = ma || ts(r2, a2, j2, l2, W2, V, R) || t2 !== null && t2.dependencies !== null && Ri(t2.dependencies)) ? (L || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l2, V, R), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l2, V, R)), typeof d.componentDidUpdate == "function" && (r2.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (r2.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || h2 === t2.memoizedProps && W2 === t2.memoizedState || (r2.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h2 === t2.memoizedProps && W2 === t2.memoizedState || (r2.flags |= 1024), r2.memoizedProps = l2, r2.memoizedState = V), d.props = l2, d.state = V, d.context = R, l2 = j2) : (typeof d.componentDidUpdate != "function" || h2 === t2.memoizedProps && W2 === t2.memoizedState || (r2.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h2 === t2.memoizedProps && W2 === t2.memoizedState || (r2.flags |= 1024), l2 = false);
        }
        return d = l2, ls(t2, r2), l2 = (r2.flags & 128) !== 0, d || l2 ? (d = r2.stateNode, a2 = l2 && typeof a2.getDerivedStateFromError != "function" ? null : d.render(), r2.flags |= 1, t2 !== null && l2 ? (r2.child = ri(r2, t2.child, null, c2), r2.child = ri(r2, null, a2, c2)) : wn(t2, r2, a2, c2), r2.memoizedState = d.state, t2 = r2.child) : t2 = gt(t2, r2, c2), t2;
      }
      function Du(t2, r2, a2, l2) {
        return _a2(), r2.flags |= 256, wn(t2, r2, a2, l2), r2.child;
      }
      function ss(t2) {
        return {
          baseLanes: t2,
          cachePool: Pu()
        };
      }
      function Ur(t2, r2, a2) {
        return t2 = t2 !== null ? t2.childLanes & ~a2 : 0, r2 && (t2 |= At), t2;
      }
      function Wu(t2, r2, a2) {
        var l2 = r2.pendingProps, c2 = false, d = (r2.flags & 128) !== 0, h2;
        if ((h2 = d) || (h2 = t2 !== null && t2.memoizedState === null ? false : (ln.current & 2) !== 0), h2 && (c2 = true, r2.flags &= -129), h2 = (r2.flags & 32) !== 0, r2.flags &= -33, t2 === null) {
          if (ue) {
            if (c2 ? vo(r2) : So(), (t2 = Ue) ? (t2 = Om(t2, Yt), t2 !== null && (r2.memoizedState = {
              dehydrated: t2,
              treeContext: jo !== null ? {
                id: ot,
                overflow: Zr
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, a2 = cc(t2), a2.return = r2, r2.child = a2, bn = r2, Ue = null)) : t2 = null, t2 === null) throw ar(r2);
            return Fs(t2) ? r2.lanes = 32 : r2.lanes = 536870912, null;
          }
          var y = l2.children;
          return l2 = l2.fallback, c2 ? (So(), c2 = r2.mode, y = mr({
            mode: "hidden",
            children: y
          }, c2), l2 = Eo(l2, c2, a2, null), y.return = r2, l2.return = r2, y.sibling = l2, r2.child = y, l2 = r2.child, l2.memoizedState = ss(a2), l2.childLanes = Ur(t2, h2, a2), r2.memoizedState = Qc, Mt(null, l2)) : (vo(r2), Uu(r2, y));
        }
        var R = t2.memoizedState;
        if (R !== null && (y = R.dehydrated, y !== null)) {
          if (d) r2.flags & 256 ? (vo(r2), r2.flags &= -257, r2 = et2(t2, r2, a2)) : r2.memoizedState !== null ? (So(), r2.child = t2.child, r2.flags |= 128, r2 = null) : (So(), y = l2.fallback, c2 = r2.mode, l2 = mr({
            mode: "visible",
            children: l2.children
          }, c2), y = Eo(y, c2, a2, null), y.flags |= 2, l2.return = r2, y.return = r2, l2.sibling = y, r2.child = l2, ri(r2, t2.child, null, a2), l2 = r2.child, l2.memoizedState = ss(a2), l2.childLanes = Ur(t2, h2, a2), r2.memoizedState = Qc, r2 = Mt(null, l2));
          else if (vo(r2), Fs(y)) h2 = Za(y).digest, l2 = Error(F(419)), l2.stack = "", l2.digest = h2, ct({
            value: l2,
            source: null,
            stack: null
          }), r2 = et2(t2, r2, a2);
          else if (hn || po(t2, r2, a2, false), h2 = (a2 & t2.childLanes) !== 0, hn || h2) {
            if (h2 = Ne, h2 !== null && (l2 = G(h2, a2), l2 !== 0 && l2 !== R.retryLane)) throw R.retryLane = l2, Ko(t2, l2), nt(h2, t2, l2), Mc;
            Ns(y) || Gi(), r2 = et2(t2, r2, a2);
          } else Ns(y) ? (r2.flags |= 192, r2.child = t2.child, r2 = null) : (t2 = R.treeContext, Hn && (Ue = wh(y), bn = r2, ue = true, Do = null, Yt = false, t2 !== null && Ld(r2, t2)), r2 = Uu(r2, l2.children), r2.flags |= 4096);
          return r2;
        }
        return c2 ? (So(), y = l2.fallback, c2 = r2.mode, R = t2.child, d = R.sibling, l2 = Qr(R, {
          mode: "hidden",
          children: l2.children
        }), l2.subtreeFlags = R.subtreeFlags & 65011712, d !== null ? y = Qr(d, y) : (y = Eo(y, c2, a2, null), y.flags |= 2), y.return = r2, l2.return = r2, l2.sibling = y, r2.child = l2, Mt(null, l2), l2 = r2.child, y = t2.child.memoizedState, y === null ? y = ss(a2) : (c2 = y.cachePool, c2 !== null ? (R = qt ? qe._currentValue : qe._currentValue2, c2 = c2.parent !== R ? {
          parent: R,
          pool: R
        } : c2) : c2 = Pu(), y = {
          baseLanes: y.baseLanes | a2,
          cachePool: c2
        }), l2.memoizedState = y, l2.childLanes = Ur(t2, h2, a2), r2.memoizedState = Qc, Mt(t2.child, l2)) : (vo(r2), a2 = t2.child, t2 = a2.sibling, a2 = Qr(a2, {
          mode: "visible",
          children: l2.children
        }), a2.return = r2, a2.sibling = null, t2 !== null && (h2 = r2.deletions, h2 === null ? (r2.deletions = [t2], r2.flags |= 16) : h2.push(t2)), r2.child = a2, r2.memoizedState = null, a2);
      }
      function Uu(t2, r2) {
        return r2 = mr({
          mode: "visible",
          children: r2
        }, t2.mode), r2.return = t2, t2.child = r2;
      }
      function mr(t2, r2) {
        return t2 = Yn(22, t2, null, r2), t2.lanes = 0, t2;
      }
      function et2(t2, r2, a2) {
        return ri(r2, t2.child, null, a2), t2 = Uu(r2, r2.pendingProps.children), t2.flags |= 2, r2.memoizedState = null, t2;
      }
      function us(t2, r2, a2) {
        t2.lanes |= r2;
        var l2 = t2.alternate;
        l2 !== null && (l2.lanes |= r2), Ot(t2.return, r2, a2);
      }
      function ee(t2, r2, a2, l2, c2, d) {
        var h2 = t2.memoizedState;
        h2 === null ? t2.memoizedState = {
          isBackwards: r2,
          rendering: null,
          renderingStartTime: 0,
          last: l2,
          tail: a2,
          tailMode: c2,
          treeForkCount: d
        } : (h2.isBackwards = r2, h2.rendering = null, h2.renderingStartTime = 0, h2.last = l2, h2.tail = a2, h2.tailMode = c2, h2.treeForkCount = d);
      }
      function N(t2, r2, a2) {
        var l2 = r2.pendingProps, c2 = l2.revealOrder, d = l2.tail;
        l2 = l2.children;
        var h2 = ln.current, y = (h2 & 2) !== 0;
        if (y ? (h2 = h2 & 1 | 2, r2.flags |= 128) : h2 &= 1, Ce(ln, h2), wn(t2, r2, l2, a2), l2 = ue ? x : 0, !y && t2 !== null && (t2.flags & 128) !== 0) e: for (t2 = r2.child; t2 !== null; ) {
          if (t2.tag === 13) t2.memoizedState !== null && us(t2, a2, r2);
          else if (t2.tag === 19) us(t2, a2, r2);
          else if (t2.child !== null) {
            t2.child.return = t2, t2 = t2.child;
            continue;
          }
          if (t2 === r2) break e;
          for (; t2.sibling === null; ) {
            if (t2.return === null || t2.return === r2) break e;
            t2 = t2.return;
          }
          t2.sibling.return = t2.return, t2 = t2.sibling;
        }
        switch (c2) {
          case "forwards":
            for (a2 = r2.child, c2 = null; a2 !== null; ) t2 = a2.alternate, t2 !== null && ko(t2) === null && (c2 = a2), a2 = a2.sibling;
            a2 = c2, a2 === null ? (c2 = r2.child, r2.child = null) : (c2 = a2.sibling, a2.sibling = null), ee(r2, false, c2, a2, d, l2);
            break;
          case "backwards":
          case "unstable_legacy-backwards":
            for (a2 = null, c2 = r2.child, r2.child = null; c2 !== null; ) {
              if (t2 = c2.alternate, t2 !== null && ko(t2) === null) {
                r2.child = c2;
                break;
              }
              t2 = c2.sibling, c2.sibling = a2, a2 = c2, c2 = t2;
            }
            ee(r2, true, a2, null, d, l2);
            break;
          case "together":
            ee(r2, false, null, null, void 0, l2);
            break;
          default:
            r2.memoizedState = null;
        }
        return r2.child;
      }
      function gt(t2, r2, a2) {
        if (t2 !== null && (r2.dependencies = t2.dependencies), ba |= r2.lanes, (a2 & r2.childLanes) === 0) if (t2 !== null) {
          if (po(t2, r2, a2, false), (a2 & r2.childLanes) === 0) return null;
        } else return null;
        if (t2 !== null && r2.child !== t2.child) throw Error(F(153));
        if (r2.child !== null) {
          for (t2 = r2.child, a2 = Qr(t2, t2.pendingProps), r2.child = a2, a2.return = r2; t2.sibling !== null; ) t2 = t2.sibling, a2 = a2.sibling = Qr(t2, t2.pendingProps), a2.return = r2;
          a2.sibling = null;
        }
        return r2.child;
      }
      function Mi(t2, r2) {
        return (t2.lanes & r2) !== 0 ? true : (t2 = t2.dependencies, !!(t2 !== null && Ri(t2)));
      }
      function Ye(t2, r2, a2) {
        switch (r2.tag) {
          case 3:
            Al(r2, r2.stateNode.containerInfo), fo(r2, qe, t2.memoizedState.cache), _a2();
            break;
          case 27:
          case 5:
            yu(r2);
            break;
          case 4:
            Al(r2, r2.stateNode.containerInfo);
            break;
          case 10:
            fo(r2, r2.type, r2.memoizedProps.value);
            break;
          case 31:
            if (r2.memoizedState !== null) return r2.flags |= 128, Ni(r2), null;
            break;
          case 13:
            var l2 = r2.memoizedState;
            if (l2 !== null) return l2.dehydrated !== null ? (vo(r2), r2.flags |= 128, null) : (a2 & r2.child.childLanes) !== 0 ? Wu(t2, r2, a2) : (vo(r2), t2 = gt(t2, r2, a2), t2 !== null ? t2.sibling : null);
            vo(r2);
            break;
          case 19:
            var c2 = (t2.flags & 128) !== 0;
            if (l2 = (a2 & r2.childLanes) !== 0, l2 || (po(t2, r2, a2, false), l2 = (a2 & r2.childLanes) !== 0), c2) {
              if (l2) return N(t2, r2, a2);
              r2.flags |= 128;
            }
            if (c2 = r2.memoizedState, c2 !== null && (c2.rendering = null, c2.tail = null, c2.lastEffect = null), Ce(ln, ln.current), l2) break;
            return null;
          case 22:
            return r2.lanes = 0, zo(t2, r2, a2, r2.pendingProps);
          case 24:
            fo(r2, qe, t2.memoizedState.cache);
        }
        return gt(t2, r2, a2);
      }
      function Bu(t2, r2, a2) {
        if (t2 !== null) {
          if (t2.memoizedProps !== r2.pendingProps) hn = true;
          else {
            if (!Mi(t2, a2) && (r2.flags & 128) === 0) return hn = false, Ye(t2, r2, a2);
            hn = (t2.flags & 131072) !== 0;
          }
        } else hn = false, ue && (r2.flags & 1048576) !== 0 && Ci(r2, x, r2.index);
        switch (r2.lanes = 0, r2.tag) {
          case 16:
            e: {
              var l2 = r2.pendingProps;
              if (t2 = pt(r2.elementType), r2.type = t2, typeof t2 == "function") ks(t2) ? (l2 = Wr(t2, l2), r2.tag = 1, r2 = Kd(null, r2, t2, l2, a2)) : (r2.tag = 0, r2 = Yd(null, r2, t2, l2, a2));
              else {
                if (t2 != null) {
                  var c2 = t2.$$typeof;
                  if (c2 === Zi) {
                    r2.tag = 11, r2 = as(null, r2, t2, l2, a2);
                    break e;
                  } else if (c2 === wf) {
                    r2.tag = 14, r2 = Au(null, r2, t2, l2, a2);
                    break e;
                  }
                }
                throw r2 = hu(t2) || t2, Error(F(306, r2, ""));
              }
            }
            return r2;
          case 0:
            return Yd(t2, r2, r2.type, r2.pendingProps, a2);
          case 1:
            return l2 = r2.type, c2 = Wr(l2, r2.pendingProps), Kd(t2, r2, l2, c2, a2);
          case 3:
            e: {
              if (Al(r2, r2.stateNode.containerInfo), t2 === null) throw Error(F(387));
              var d = r2.pendingProps;
              c2 = r2.memoizedState, l2 = c2.element, Ha(t2, r2), Aa(r2, d, null, a2);
              var h2 = r2.memoizedState;
              if (d = h2.cache, fo(r2, qe, d), d !== c2.cache && _i(r2, [qe], a2, true), Li(), d = h2.element, Hn && c2.isDehydrated) {
                if (c2 = {
                  element: d,
                  isDehydrated: false,
                  cache: h2.cache
                }, r2.updateQueue.baseState = c2, r2.memoizedState = c2, r2.flags & 256) {
                  r2 = Du(t2, r2, d, a2);
                  break e;
                } else if (d !== l2) {
                  l2 = ut(Error(F(424)), r2), ct(l2), r2 = Du(t2, r2, d, a2);
                  break e;
                } else for (Hn && (Ue = Pc(r2.stateNode.containerInfo), bn = r2, ue = true, Do = null, Yt = true), a2 = Oh(r2, null, d, a2), r2.child = a2; a2; ) a2.flags = a2.flags & -3 | 4096, a2 = a2.sibling;
              } else {
                if (_a2(), d === l2) {
                  r2 = gt(t2, r2, a2);
                  break e;
                }
                wn(t2, r2, d, a2);
              }
              r2 = r2.child;
            }
            return r2;
          case 26:
            if (Gt) return ls(t2, r2), t2 === null ? (a2 = nl(r2.type, null, r2.pendingProps, null)) ? r2.memoizedState = a2 : ue || (r2.stateNode = Ah(r2.type, r2.pendingProps, pa.current, r2)) : r2.memoizedState = nl(r2.type, t2.memoizedProps, r2.pendingProps, t2.memoizedState), null;
          case 27:
            if (dn) return yu(r2), t2 === null && dn && ue && (l2 = r2.stateNode = _c(r2.type, r2.pendingProps, pa.current, Dn.current, false), bn = r2, Yt = true, Ue = Um(r2.type, l2, Ue)), wn(t2, r2, r2.pendingProps.children, a2), ls(t2, r2), t2 === null && (r2.flags |= 4194304), r2.child;
          case 5:
            return t2 === null && ue && ($m(r2.type, r2.pendingProps, Dn.current), (c2 = l2 = Ue) && (l2 = Bm(l2, r2.type, r2.pendingProps, Yt), l2 !== null ? (r2.stateNode = l2, bn = r2, Ue = wc(l2), Yt = false, c2 = true) : c2 = false), c2 || ar(r2)), yu(r2), c2 = r2.type, d = r2.pendingProps, h2 = t2 !== null ? t2.memoizedProps : null, l2 = d.children, Rs(c2, d) ? l2 = null : h2 !== null && Rs(c2, h2) && (r2.flags |= 32), r2.memoizedState !== null && (c2 = $l(t2, r2, zu, null, null, a2), qt ? da._currentValue = c2 : da._currentValue2 = c2), ls(t2, r2), wn(t2, r2, l2, a2), r2.child;
          case 6:
            return t2 === null && ue && (jf(r2.pendingProps, Dn.current), (t2 = a2 = Ue) && (a2 = Ph(a2, r2.pendingProps, Yt), a2 !== null ? (r2.stateNode = a2, bn = r2, Ue = null, t2 = true) : t2 = false), t2 || ar(r2)), null;
          case 13:
            return Wu(t2, r2, a2);
          case 4:
            return Al(r2, r2.stateNode.containerInfo), l2 = r2.pendingProps, t2 === null ? r2.child = ri(r2, null, l2, a2) : wn(t2, r2, l2, a2), r2.child;
          case 11:
            return as(t2, r2, r2.type, r2.pendingProps, a2);
          case 7:
            return wn(t2, r2, r2.pendingProps, a2), r2.child;
          case 8:
            return wn(t2, r2, r2.pendingProps.children, a2), r2.child;
          case 12:
            return wn(t2, r2, r2.pendingProps.children, a2), r2.child;
          case 10:
            return l2 = r2.pendingProps, fo(r2, r2.type, l2.value), wn(t2, r2, l2.children, a2), r2.child;
          case 9:
            return c2 = r2.type._context, l2 = r2.pendingProps.children, Un(r2), c2 = In(c2), l2 = l2(c2), r2.flags |= 1, wn(t2, r2, l2, a2), r2.child;
          case 14:
            return Au(t2, r2, r2.type, r2.pendingProps, a2);
          case 15:
            return ju(t2, r2, r2.type, r2.pendingProps, a2);
          case 19:
            return N(t2, r2, a2);
          case 31:
            return is2(t2, r2, a2);
          case 22:
            return zo(t2, r2, a2, r2.pendingProps);
          case 24:
            return Un(r2), l2 = In(qe), t2 === null ? (c2 = wu(), c2 === null && (c2 = Ne, d = Fd(), c2.pooledCache = d, d.refCount++, d !== null && (c2.pooledCacheLanes |= a2), c2 = d), r2.memoizedState = {
              parent: l2,
              cache: c2
            }, Ol(r2), fo(r2, qe, c2)) : ((t2.lanes & a2) !== 0 && (Ha(t2, r2), Aa(r2, null, null, a2), Li()), c2 = t2.memoizedState, d = r2.memoizedState, c2.parent !== l2 ? (c2 = {
              parent: l2,
              cache: l2
            }, r2.memoizedState = c2, r2.lanes === 0 && (r2.memoizedState = r2.updateQueue.baseState = c2), fo(r2, qe, l2)) : (l2 = d.cache, fo(r2, qe, l2), l2 !== c2.cache && _i(r2, [qe], a2, true))), wn(t2, r2, r2.pendingProps.children, a2), r2.child;
          case 29:
            throw r2.pendingProps;
        }
        throw Error(F(156, r2.tag));
      }
      function It(t2) {
        t2.flags |= 4;
      }
      function cs(t2) {
        Sr && (t2.flags |= 8);
      }
      function Ou(t2, r2) {
        if (t2 !== null && t2.child === r2.child) return false;
        if ((r2.flags & 16) !== 0) return true;
        for (t2 = r2.child; t2 !== null; ) {
          if ((t2.flags & 8218) !== 0 || (t2.subtreeFlags & 8218) !== 0) return true;
          t2 = t2.sibling;
        }
        return false;
      }
      function ef(t2, r2, a2, l2) {
        if ($n) for (a2 = r2.child; a2 !== null; ) {
          if (a2.tag === 5 || a2.tag === 6) yc(t2, a2.stateNode);
          else if (!(a2.tag === 4 || dn && a2.tag === 27) && a2.child !== null) {
            a2.child.return = a2, a2 = a2.child;
            continue;
          }
          if (a2 === r2) break;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === r2) return;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return, a2 = a2.sibling;
        }
        else if (Sr) for (var c2 = r2.child; c2 !== null; ) {
          if (c2.tag === 5) {
            var d = c2.stateNode;
            a2 && l2 && (d = No(d, c2.type, c2.memoizedProps)), yc(t2, d);
          } else if (c2.tag === 6) d = c2.stateNode, a2 && l2 && (d = Ls(d, c2.memoizedProps)), yc(t2, d);
          else if (c2.tag !== 4) {
            if (c2.tag === 22 && c2.memoizedState !== null) d = c2.child, d !== null && (d.return = c2), ef(t2, c2, true, true);
            else if (c2.child !== null) {
              c2.child.return = c2, c2 = c2.child;
              continue;
            }
          }
          if (c2 === r2) break;
          for (; c2.sibling === null; ) {
            if (c2.return === null || c2.return === r2) return;
            c2 = c2.return;
          }
          c2.sibling.return = c2.return, c2 = c2.sibling;
        }
      }
      function Mu(t2, r2, a2, l2) {
        var c2 = false;
        if (Sr) for (var d = r2.child; d !== null; ) {
          if (d.tag === 5) {
            var h2 = d.stateNode;
            a2 && l2 && (h2 = No(h2, d.type, d.memoizedProps)), Lf(t2, h2);
          } else if (d.tag === 6) h2 = d.stateNode, a2 && l2 && (h2 = Ls(h2, d.memoizedProps)), Lf(t2, h2);
          else if (d.tag !== 4) {
            if (d.tag === 22 && d.memoizedState !== null) c2 = d.child, c2 !== null && (c2.return = d), Mu(t2, d, true, true), c2 = true;
            else if (d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
          }
          if (d === r2) break;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === r2) return c2;
            d = d.return;
          }
          d.sibling.return = d.return, d = d.sibling;
        }
        return c2;
      }
      function Qu(t2, r2) {
        if (Sr && Ou(t2, r2)) {
          t2 = r2.stateNode;
          var a2 = t2.containerInfo, l2 = We();
          Mu(l2, r2, false, false), t2.pendingChildren = l2, It(r2), yh(a2, l2);
        }
      }
      function ds(t2, r2, a2, l2) {
        if ($n) t2.memoizedProps !== l2 && It(r2);
        else if (Sr) {
          var c2 = t2.stateNode, d = t2.memoizedProps;
          if ((t2 = Ou(t2, r2)) || d !== l2) {
            var h2 = Dn.current;
            d = gh(c2, a2, d, l2, !t2, null), d === c2 ? r2.stateNode = c2 : (cs(r2), Kp(d, a2, l2, h2) && It(r2), r2.stateNode = d, t2 && ef(d, r2, false, false));
          } else r2.stateNode = c2;
        }
      }
      function Fn(t2, r2, a2, l2, c2) {
        if ((t2.mode & 32) !== 0 && (a2 === null ? rh(r2, l2) : Dm(r2, a2, l2))) {
          if (t2.flags |= 16777216, (c2 & 335544128) === c2 || Yi(r2, l2)) if (An(t2.stateNode, r2, l2)) t2.flags |= 8192;
          else if (Vp()) t2.flags |= 8192;
          else throw Xt = Dc, Ac;
        } else t2.flags &= -16777217;
      }
      function xe(t2, r2) {
        if (Vm(r2)) {
          if (t2.flags |= 16777216, !Tc(r2)) if (Vp()) t2.flags |= 8192;
          else throw Xt = Dc, Ac;
        } else t2.flags &= -16777217;
      }
      function Ba(t2, r2) {
        r2 !== null && (t2.flags |= 4), t2.flags & 16384 && (r2 = t2.tag !== 22 ? Ed() : 536870912, t2.lanes |= r2, hl |= r2);
      }
      function Co(t2, r2) {
        if (!ue) switch (t2.tailMode) {
          case "hidden":
            r2 = t2.tail;
            for (var a2 = null; r2 !== null; ) r2.alternate !== null && (a2 = r2), r2 = r2.sibling;
            a2 === null ? t2.tail = null : a2.sibling = null;
            break;
          case "collapsed":
            a2 = t2.tail;
            for (var l2 = null; a2 !== null; ) a2.alternate !== null && (l2 = a2), a2 = a2.sibling;
            l2 === null ? r2 || t2.tail === null ? t2.tail = null : t2.tail.sibling = null : l2.sibling = null;
        }
      }
      function we(t2) {
        var r2 = t2.alternate !== null && t2.alternate.child === t2.child, a2 = 0, l2 = 0;
        if (r2) for (var c2 = t2.child; c2 !== null; ) a2 |= c2.lanes | c2.childLanes, l2 |= c2.subtreeFlags & 65011712, l2 |= c2.flags & 65011712, c2.return = t2, c2 = c2.sibling;
        else for (c2 = t2.child; c2 !== null; ) a2 |= c2.lanes | c2.childLanes, l2 |= c2.subtreeFlags, l2 |= c2.flags, c2.return = t2, c2 = c2.sibling;
        return t2.subtreeFlags |= l2, t2.childLanes = a2, r2;
      }
      function Oa(t2, r2, a2) {
        var l2 = r2.pendingProps;
        switch (gu(r2), r2.tag) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return we(r2), null;
          case 1:
            return we(r2), null;
          case 3:
            return a2 = r2.stateNode, l2 = null, t2 !== null && (l2 = t2.memoizedState.cache), r2.memoizedState.cache !== l2 && (r2.flags |= 2048), En(qe), Xo(), a2.pendingContext && (a2.context = a2.pendingContext, a2.pendingContext = null), (t2 === null || t2.child === null) && (Ti(r2) ? It(r2) : t2 === null || t2.memoizedState.isDehydrated && (r2.flags & 256) === 0 || (r2.flags |= 1024, Dl())), Qu(t2, r2), we(r2), null;
          case 26:
            if (Gt) {
              var c2 = r2.type, d = r2.memoizedState;
              return t2 === null ? (It(r2), d !== null ? (we(r2), xe(r2, d)) : (we(r2), Fn(r2, c2, null, l2, a2))) : d ? d !== t2.memoizedState ? (It(r2), we(r2), xe(r2, d)) : (we(r2), r2.flags &= -16777217) : (d = t2.memoizedProps, $n ? d !== l2 && It(r2) : ds(t2, r2, c2, l2), we(r2), Fn(r2, c2, d, l2, a2)), null;
            }
          case 27:
            if (dn) {
              if (jl(r2), a2 = pa.current, c2 = r2.type, t2 !== null && r2.stateNode != null) $n ? t2.memoizedProps !== l2 && It(r2) : ds(t2, r2, c2, l2);
              else {
                if (!l2) {
                  if (r2.stateNode === null) throw Error(F(166));
                  return we(r2), null;
                }
                t2 = Dn.current, Ti(r2) ? Ep(r2, t2) : (t2 = _c(c2, l2, a2, t2, true), r2.stateNode = t2, It(r2));
              }
              return we(r2), null;
            }
          case 5:
            if (jl(r2), c2 = r2.type, t2 !== null && r2.stateNode != null) ds(t2, r2, c2, l2);
            else {
              if (!l2) {
                if (r2.stateNode === null) throw Error(F(166));
                return we(r2), null;
              }
              if (d = Dn.current, Ti(r2)) Ep(r2, d), Eh(r2.stateNode, c2, l2, d) && (r2.flags |= 64);
              else {
                var h2 = Vr(c2, l2, pa.current, d, r2);
                cs(r2), ef(h2, r2, false, false), r2.stateNode = h2, Kp(h2, c2, l2, d) && It(r2);
              }
            }
            return we(r2), Fn(r2, r2.type, t2 === null ? null : t2.memoizedProps, r2.pendingProps, a2), null;
          case 6:
            if (t2 && r2.stateNode != null) a2 = t2.memoizedProps, $n ? a2 !== l2 && It(r2) : Sr && (a2 !== l2 ? (t2 = pa.current, a2 = Dn.current, cs(r2), r2.stateNode = bc(l2, t2, a2, r2)) : r2.stateNode = t2.stateNode);
            else {
              if (typeof l2 != "string" && r2.stateNode === null) throw Error(F(166));
              if (t2 = pa.current, a2 = Dn.current, Ti(r2)) {
                if (!Hn) throw Error(F(176));
                if (t2 = r2.stateNode, a2 = r2.memoizedProps, l2 = null, c2 = bn, c2 !== null) switch (c2.tag) {
                  case 27:
                  case 5:
                    l2 = c2.memoizedProps;
                }
                xc(t2, a2, r2, l2) || ar(r2, true);
              } else cs(r2), r2.stateNode = bc(l2, t2, a2, r2);
            }
            return we(r2), null;
          case 31:
            if (a2 = r2.memoizedState, t2 === null || t2.memoizedState !== null) {
              if (l2 = Ti(r2), a2 !== null) {
                if (t2 === null) {
                  if (!l2) throw Error(F(318));
                  if (!Hn) throw Error(F(556));
                  if (t2 = r2.memoizedState, t2 = t2 !== null ? t2.dehydrated : null, !t2) throw Error(F(557));
                  zh(t2, r2);
                } else _a2(), (r2.flags & 128) === 0 && (r2.memoizedState = null), r2.flags |= 4;
                we(r2), t2 = false;
              } else a2 = Dl(), t2 !== null && t2.memoizedState !== null && (t2.memoizedState.hydrationErrors = a2), t2 = true;
              if (!t2) return r2.flags & 256 ? (ht(r2), r2) : (ht(r2), null);
              if ((r2.flags & 128) !== 0) throw Error(F(558));
            }
            return we(r2), null;
          case 13:
            if (l2 = r2.memoizedState, t2 === null || t2.memoizedState !== null && t2.memoizedState.dehydrated !== null) {
              if (c2 = Ti(r2), l2 !== null && l2.dehydrated !== null) {
                if (t2 === null) {
                  if (!c2) throw Error(F(318));
                  if (!Hn) throw Error(F(344));
                  if (c2 = r2.memoizedState, c2 = c2 !== null ? c2.dehydrated : null, !c2) throw Error(F(317));
                  Hf(c2, r2);
                } else _a2(), (r2.flags & 128) === 0 && (r2.memoizedState = null), r2.flags |= 4;
                we(r2), c2 = false;
              } else c2 = Dl(), t2 !== null && t2.memoizedState !== null && (t2.memoizedState.hydrationErrors = c2), c2 = true;
              if (!c2) return r2.flags & 256 ? (ht(r2), r2) : (ht(r2), null);
            }
            return ht(r2), (r2.flags & 128) !== 0 ? (r2.lanes = a2, r2) : (a2 = l2 !== null, t2 = t2 !== null && t2.memoizedState !== null, a2 && (l2 = r2.child, c2 = null, l2.alternate !== null && l2.alternate.memoizedState !== null && l2.alternate.memoizedState.cachePool !== null && (c2 = l2.alternate.memoizedState.cachePool.pool), d = null, l2.memoizedState !== null && l2.memoizedState.cachePool !== null && (d = l2.memoizedState.cachePool.pool), d !== c2 && (l2.flags |= 2048)), a2 !== t2 && a2 && (r2.child.flags |= 8192), Ba(r2, r2.updateQueue), we(r2), null);
          case 4:
            return Xo(), Qu(t2, r2), t2 === null && jm(r2.stateNode.containerInfo), we(r2), null;
          case 10:
            return En(r2.type), we(r2), null;
          case 19:
            if (D2(ln), l2 = r2.memoizedState, l2 === null) return we(r2), null;
            if (c2 = (r2.flags & 128) !== 0, d = l2.rendering, d === null) {
              if (c2) Co(l2, false);
              else {
                if (Xe !== 0 || t2 !== null && (t2.flags & 128) !== 0) for (t2 = r2.child; t2 !== null; ) {
                  if (d = ko(t2), d !== null) {
                    for (r2.flags |= 128, Co(l2, false), t2 = d.updateQueue, r2.updateQueue = t2, Ba(r2, t2), r2.subtreeFlags = 0, t2 = a2, a2 = r2.child; a2 !== null; ) yf(a2, t2), a2 = a2.sibling;
                    return Ce(ln, ln.current & 1 | 2), ue && or(r2, l2.treeForkCount), r2.child;
                  }
                  t2 = t2.sibling;
                }
                l2.tail !== null && ze() > ml && (r2.flags |= 128, c2 = true, Co(l2, false), r2.lanes = 4194304);
              }
            } else {
              if (!c2) if (t2 = ko(d), t2 !== null) {
                if (r2.flags |= 128, c2 = true, t2 = t2.updateQueue, r2.updateQueue = t2, Ba(r2, t2), Co(l2, true), l2.tail === null && l2.tailMode === "hidden" && !d.alternate && !ue) return we(r2), null;
              } else 2 * ze() - l2.renderingStartTime > ml && a2 !== 536870912 && (r2.flags |= 128, c2 = true, Co(l2, false), r2.lanes = 4194304);
              l2.isBackwards ? (d.sibling = r2.child, r2.child = d) : (t2 = l2.last, t2 !== null ? t2.sibling = d : r2.child = d, l2.last = d);
            }
            return l2.tail !== null ? (t2 = l2.tail, l2.rendering = t2, l2.tail = t2.sibling, l2.renderingStartTime = ze(), t2.sibling = null, a2 = ln.current, Ce(ln, c2 ? a2 & 1 | 2 : a2 & 1), ue && or(r2, l2.treeForkCount), t2) : (we(r2), null);
          case 22:
          case 23:
            return ht(r2), bo(), l2 = r2.memoizedState !== null, t2 !== null ? t2.memoizedState !== null !== l2 && (r2.flags |= 8192) : l2 && (r2.flags |= 8192), l2 ? (a2 & 536870912) !== 0 && (r2.flags & 128) === 0 && (we(r2), r2.subtreeFlags & 6 && (r2.flags |= 8192)) : we(r2), a2 = r2.updateQueue, a2 !== null && Ba(r2, a2.retryQueue), a2 = null, t2 !== null && t2.memoizedState !== null && t2.memoizedState.cachePool !== null && (a2 = t2.memoizedState.cachePool.pool), l2 = null, r2.memoizedState !== null && r2.memoizedState.cachePool !== null && (l2 = r2.memoizedState.cachePool.pool), l2 !== a2 && (r2.flags |= 2048), t2 !== null && D2(ha), null;
          case 24:
            return a2 = null, t2 !== null && (a2 = t2.memoizedState.cache), r2.memoizedState.cache !== a2 && (r2.flags |= 2048), En(qe), we(r2), null;
          case 25:
            return null;
          case 30:
            return null;
        }
        throw Error(F(156, r2.tag));
      }
      function gr(t2, r2) {
        switch (gu(r2), r2.tag) {
          case 1:
            return t2 = r2.flags, t2 & 65536 ? (r2.flags = t2 & -65537 | 128, r2) : null;
          case 3:
            return En(qe), Xo(), t2 = r2.flags, (t2 & 65536) !== 0 && (t2 & 128) === 0 ? (r2.flags = t2 & -65537 | 128, r2) : null;
          case 26:
          case 27:
          case 5:
            return jl(r2), null;
          case 31:
            if (r2.memoizedState !== null) {
              if (ht(r2), r2.alternate === null) throw Error(F(340));
              _a2();
            }
            return t2 = r2.flags, t2 & 65536 ? (r2.flags = t2 & -65537 | 128, r2) : null;
          case 13:
            if (ht(r2), t2 = r2.memoizedState, t2 !== null && t2.dehydrated !== null) {
              if (r2.alternate === null) throw Error(F(340));
              _a2();
            }
            return t2 = r2.flags, t2 & 65536 ? (r2.flags = t2 & -65537 | 128, r2) : null;
          case 19:
            return D2(ln), null;
          case 4:
            return Xo(), null;
          case 10:
            return En(r2.type), null;
          case 22:
          case 23:
            return ht(r2), bo(), t2 !== null && D2(ha), t2 = r2.flags, t2 & 65536 ? (r2.flags = t2 & -65537 | 128, r2) : null;
          case 24:
            return En(qe), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function $u(t2, r2) {
        switch (gu(r2), r2.tag) {
          case 3:
            En(qe), Xo();
            break;
          case 26:
          case 27:
          case 5:
            jl(r2);
            break;
          case 4:
            Xo();
            break;
          case 31:
            r2.memoizedState !== null && ht(r2);
            break;
          case 13:
            ht(r2);
            break;
          case 19:
            D2(ln);
            break;
          case 10:
            En(r2.type);
            break;
          case 22:
          case 23:
            ht(r2), bo(), t2 !== null && D2(ha);
            break;
          case 24:
            En(qe);
        }
      }
      function Br(t2, r2) {
        try {
          var a2 = r2.updateQueue, l2 = a2 !== null ? a2.lastEffect : null;
          if (l2 !== null) {
            var c2 = l2.next;
            a2 = c2;
            do {
              if ((a2.tag & t2) === t2) {
                l2 = void 0;
                var d = a2.create, h2 = a2.inst;
                l2 = d(), h2.destroy = l2;
              }
              a2 = a2.next;
            } while (a2 !== c2);
          }
        } catch (y) {
          ve(r2, r2.return, y);
        }
      }
      function Or(t2, r2, a2) {
        try {
          var l2 = r2.updateQueue, c2 = l2 !== null ? l2.lastEffect : null;
          if (c2 !== null) {
            var d = c2.next;
            l2 = d;
            do {
              if ((l2.tag & t2) === t2) {
                var h2 = l2.inst, y = h2.destroy;
                if (y !== void 0) {
                  h2.destroy = void 0, c2 = r2;
                  var R = a2, L = y;
                  try {
                    L();
                  } catch (j2) {
                    ve(c2, R, j2);
                  }
                }
              }
              l2 = l2.next;
            } while (l2 !== d);
          }
        } catch (j2) {
          ve(r2, r2.return, j2);
        }
      }
      function Qi(t2) {
        var r2 = t2.updateQueue;
        if (r2 !== null) {
          var a2 = t2.stateNode;
          try {
            Fp(r2, a2);
          } catch (l2) {
            ve(t2, t2.return, l2);
          }
        }
      }
      function Vu(t2, r2, a2) {
        a2.props = Wr(t2.type, t2.memoizedProps), a2.state = t2.memoizedState;
        try {
          a2.componentWillUnmount();
        } catch (l2) {
          ve(t2, r2, l2);
        }
      }
      function ta(t2, r2) {
        try {
          var a2 = t2.ref;
          if (a2 !== null) {
            switch (t2.tag) {
              case 26:
              case 27:
              case 5:
                var l2 = Ts(t2.stateNode);
                break;
              case 30:
                l2 = t2.stateNode;
                break;
              default:
                l2 = t2.stateNode;
            }
            typeof a2 == "function" ? t2.refCleanup = a2(l2) : a2.current = l2;
          }
        } catch (c2) {
          ve(t2, r2, c2);
        }
      }
      function yr(t2, r2) {
        var a2 = t2.ref, l2 = t2.refCleanup;
        if (a2 !== null) if (typeof l2 == "function") try {
          l2();
        } catch (c2) {
          ve(t2, r2, c2);
        } finally {
          t2.refCleanup = null, t2 = t2.alternate, t2 != null && (t2.refCleanup = null);
        }
        else if (typeof a2 == "function") try {
          a2(null);
        } catch (c2) {
          ve(t2, r2, c2);
        }
        else a2.current = null;
      }
      function nf(t2) {
        var r2 = t2.type, a2 = t2.memoizedProps, l2 = t2.stateNode;
        try {
          dh(l2, r2, a2, t2);
        } catch (c2) {
          ve(t2, t2.return, c2);
        }
      }
      function qu(t2, r2, a2) {
        try {
          vc(t2.stateNode, t2.type, a2, r2, t2);
        } catch (l2) {
          ve(t2, t2.return, l2);
        }
      }
      function tf(t2) {
        return t2.tag === 5 || t2.tag === 3 || (Gt ? t2.tag === 26 : false) || (dn ? t2.tag === 27 && Xa(t2.type) : false) || t2.tag === 4;
      }
      function Gu(t2) {
        e: for (; ; ) {
          for (; t2.sibling === null; ) {
            if (t2.return === null || tf(t2.return)) return null;
            t2 = t2.return;
          }
          for (t2.sibling.return = t2.return, t2 = t2.sibling; t2.tag !== 5 && t2.tag !== 6 && t2.tag !== 18; ) {
            if (dn && t2.tag === 27 && Xa(t2.type) || t2.flags & 2 || t2.child === null || t2.tag === 4) continue e;
            t2.child.return = t2, t2 = t2.child;
          }
          if (!(t2.flags & 2)) return t2.stateNode;
        }
      }
      function fs(t2, r2, a2) {
        var l2 = t2.tag;
        if (l2 === 5 || l2 === 6) t2 = t2.stateNode, r2 ? ph(a2, t2, r2) : ch(a2, t2);
        else if (l2 !== 4 && (dn && l2 === 27 && Xa(t2.type) && (a2 = t2.stateNode, r2 = null), t2 = t2.child, t2 !== null)) for (fs(t2, r2, a2), t2 = t2.sibling; t2 !== null; ) fs(t2, r2, a2), t2 = t2.sibling;
      }
      function $i(t2, r2, a2) {
        var l2 = t2.tag;
        if (l2 === 5 || l2 === 6) t2 = t2.stateNode, r2 ? fh(a2, t2, r2) : uh(a2, t2);
        else if (l2 !== 4 && (dn && l2 === 27 && Xa(t2.type) && (a2 = t2.stateNode), t2 = t2.child, t2 !== null)) for ($i(t2, r2, a2), t2 = t2.sibling; t2 !== null; ) $i(t2, r2, a2), t2 = t2.sibling;
      }
      function Ju(t2, r2, a2) {
        t2 = t2.containerInfo;
        try {
          bh(t2, a2);
        } catch (l2) {
          ve(r2, r2.return, l2);
        }
      }
      function rf(t2) {
        var r2 = t2.stateNode, a2 = t2.memoizedProps;
        try {
          Rc(t2.type, a2, r2, t2);
        } catch (l2) {
          ve(t2, t2.return, l2);
        }
      }
      function Wp(t2, r2) {
        for (Am(t2.containerInfo), Pn = r2; Pn !== null; ) if (t2 = Pn, r2 = t2.child, (t2.subtreeFlags & 1028) !== 0 && r2 !== null) r2.return = t2, Pn = r2;
        else for (; Pn !== null; ) {
          t2 = Pn;
          var a2 = t2.alternate;
          switch (r2 = t2.flags, t2.tag) {
            case 0:
              if ((r2 & 4) !== 0 && (r2 = t2.updateQueue, r2 = r2 !== null ? r2.events : null, r2 !== null)) for (var l2 = 0; l2 < r2.length; l2++) {
                var c2 = r2[l2];
                c2.ref.impl = c2.nextImpl;
              }
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((r2 & 1024) !== 0 && a2 !== null) {
                r2 = void 0, l2 = t2, c2 = a2.memoizedProps, a2 = a2.memoizedState;
                var d = l2.stateNode;
                try {
                  var h2 = Wr(l2.type, c2);
                  r2 = d.getSnapshotBeforeUpdate(h2, a2), d.__reactInternalSnapshotBeforeUpdate = r2;
                } catch (y) {
                  ve(l2, l2.return, y);
                }
              }
              break;
            case 3:
              (r2 & 1024) !== 0 && $n && Nt(t2.stateNode.containerInfo);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((r2 & 1024) !== 0) throw Error(F(163));
          }
          if (r2 = t2.sibling, r2 !== null) {
            r2.return = t2.return, Pn = r2;
            break;
          }
          Pn = t2.return;
        }
      }
      function of(t2, r2, a2) {
        var l2 = a2.flags;
        switch (a2.tag) {
          case 0:
          case 11:
          case 15:
            $t(t2, a2), l2 & 4 && Br(5, a2);
            break;
          case 1:
            if ($t(t2, a2), l2 & 4) if (t2 = a2.stateNode, r2 === null) try {
              t2.componentDidMount();
            } catch (h2) {
              ve(a2, a2.return, h2);
            }
            else {
              var c2 = Wr(a2.type, r2.memoizedProps);
              r2 = r2.memoizedState;
              try {
                t2.componentDidUpdate(c2, r2, t2.__reactInternalSnapshotBeforeUpdate);
              } catch (h2) {
                ve(a2, a2.return, h2);
              }
            }
            l2 & 64 && Qi(a2), l2 & 512 && ta(a2, a2.return);
            break;
          case 3:
            if ($t(t2, a2), l2 & 64 && (l2 = a2.updateQueue, l2 !== null)) {
              if (t2 = null, a2.child !== null) switch (a2.child.tag) {
                case 27:
                case 5:
                  t2 = Ts(a2.child.stateNode);
                  break;
                case 1:
                  t2 = a2.child.stateNode;
              }
              try {
                Fp(l2, t2);
              } catch (h2) {
                ve(a2, a2.return, h2);
              }
            }
            break;
          case 27:
            dn && r2 === null && l2 & 4 && rf(a2);
          case 26:
          case 5:
            if ($t(t2, a2), r2 === null) {
              if (l2 & 4) nf(a2);
              else if (l2 & 64) {
                t2 = a2.type, r2 = a2.memoizedProps, c2 = a2.stateNode;
                try {
                  _h(c2, t2, r2, a2);
                } catch (h2) {
                  ve(a2, a2.return, h2);
                }
              }
            }
            l2 & 512 && ta(a2, a2.return);
            break;
          case 12:
            $t(t2, a2);
            break;
          case 31:
            $t(t2, a2), l2 & 4 && af(t2, a2);
            break;
          case 13:
            $t(t2, a2), l2 & 4 && Yu(t2, a2), l2 & 64 && (l2 = a2.memoizedState, l2 !== null && (l2 = l2.dehydrated, l2 !== null && (a2 = sc.bind(null, a2), Xi(l2, a2))));
            break;
          case 22:
            if (l2 = a2.memoizedState !== null || eo, !l2) {
              r2 = r2 !== null && r2.memoizedState !== null || sn, c2 = eo;
              var d = sn;
              eo = l2, (sn = r2) && !d ? br(t2, a2, (a2.subtreeFlags & 8772) !== 0) : $t(t2, a2), eo = c2, sn = d;
            }
            break;
          case 30:
            break;
          default:
            $t(t2, a2);
        }
      }
      function Up(t2) {
        var r2 = t2.alternate;
        r2 !== null && (t2.alternate = null, Up(r2)), t2.child = null, t2.deletions = null, t2.sibling = null, t2.tag === 5 && (r2 = t2.stateNode, r2 !== null && th(r2)), t2.stateNode = null, t2.return = null, t2.dependencies = null, t2.memoizedProps = null, t2.memoizedState = null, t2.pendingProps = null, t2.stateNode = null, t2.updateQueue = null;
      }
      function Qt(t2, r2, a2) {
        for (a2 = a2.child; a2 !== null; ) Zu(t2, r2, a2), a2 = a2.sibling;
      }
      function Zu(t2, r2, a2) {
        if (on && typeof on.onCommitFiberUnmount == "function") try {
          on.onCommitFiberUnmount(ei, a2);
        } catch (e2) {
        }
        switch (a2.tag) {
          case 26:
            if (Gt) {
              sn || yr(a2, r2), Qt(t2, r2, a2), a2.memoizedState ? Hh(a2.memoizedState) : a2.stateNode && Wf(a2.stateNode);
              break;
            }
          case 27:
            if (dn) {
              sn || yr(a2, r2);
              var l2 = mn, c2 = Pt;
              Xa(a2.type) && (mn = a2.stateNode, Pt = false), Qt(t2, r2, a2), fa(a2.stateNode), mn = l2, Pt = c2;
              break;
            }
          case 5:
            sn || yr(a2, r2);
          case 6:
            if ($n) {
              if (l2 = mn, c2 = Pt, mn = null, Qt(t2, r2, a2), mn = l2, Pt = c2, mn !== null) if (Pt) try {
                If(mn, a2.stateNode);
              } catch (d) {
                ve(a2, r2, d);
              }
              else try {
                Ef(mn, a2.stateNode);
              } catch (d) {
                ve(a2, r2, d);
              }
            } else Qt(t2, r2, a2);
            break;
          case 18:
            $n && mn !== null && (Pt ? Af(mn, a2.stateNode) : Se(mn, a2.stateNode));
            break;
          case 4:
            $n ? (l2 = mn, c2 = Pt, mn = a2.stateNode.containerInfo, Pt = true, Qt(t2, r2, a2), mn = l2, Pt = c2) : (Sr && Ju(a2.stateNode, a2, We()), Qt(t2, r2, a2));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Or(2, a2, r2), sn || Or(4, a2, r2), Qt(t2, r2, a2);
            break;
          case 1:
            sn || (yr(a2, r2), l2 = a2.stateNode, typeof l2.componentWillUnmount == "function" && Vu(a2, r2, l2)), Qt(t2, r2, a2);
            break;
          case 21:
            Qt(t2, r2, a2);
            break;
          case 22:
            sn = (l2 = sn) || a2.memoizedState !== null, Qt(t2, r2, a2), sn = l2;
            break;
          default:
            Qt(t2, r2, a2);
        }
      }
      function af(t2, r2) {
        if (Hn && r2.memoizedState === null && (t2 = r2.alternate, t2 !== null && (t2 = t2.memoizedState, t2 !== null))) {
          t2 = t2.dehydrated;
          try {
            Rh(t2);
          } catch (a2) {
            ve(r2, r2.return, a2);
          }
        }
      }
      function Yu(t2, r2) {
        if (Hn && r2.memoizedState === null && (t2 = r2.alternate, t2 !== null && (t2 = t2.memoizedState, t2 !== null && (t2 = t2.dehydrated, t2 !== null)))) try {
          el(t2);
        } catch (a2) {
          ve(r2, r2.return, a2);
        }
      }
      function Bp(t2) {
        switch (t2.tag) {
          case 31:
          case 13:
          case 19:
            var r2 = t2.stateNode;
            return r2 === null && (r2 = t2.stateNode = new $c()), r2;
          case 22:
            return t2 = t2.stateNode, r2 = t2._retryCache, r2 === null && (r2 = t2._retryCache = new $c()), r2;
          default:
            throw Error(F(435, t2.tag));
        }
      }
      function ps(t2, r2) {
        var a2 = Bp(t2);
        r2.forEach(function(l2) {
          if (!a2.has(l2)) {
            a2.add(l2);
            var c2 = Zp.bind(null, t2, l2);
            l2.then(c2, c2);
          }
        });
      }
      function tn(t2, r2) {
        var a2 = r2.deletions;
        if (a2 !== null) for (var l2 = 0; l2 < a2.length; l2++) {
          var c2 = a2[l2], d = t2, h2 = r2;
          if ($n) {
            var y = h2;
            e: for (; y !== null; ) {
              switch (y.tag) {
                case 27:
                  if (dn) {
                    if (Xa(y.type)) {
                      mn = y.stateNode, Pt = false;
                      break e;
                    }
                    break;
                  }
                case 5:
                  mn = y.stateNode, Pt = false;
                  break e;
                case 3:
                case 4:
                  mn = y.stateNode.containerInfo, Pt = true;
                  break e;
              }
              y = y.return;
            }
            if (mn === null) throw Error(F(160));
            Zu(d, h2, c2), mn = null, Pt = false;
          } else Zu(d, h2, c2);
          d = c2.alternate, d !== null && (d.return = null), c2.return = null;
        }
        if (r2.subtreeFlags & 13886) for (r2 = r2.child; r2 !== null; ) hs(r2, t2), r2 = r2.sibling;
      }
      function hs(t2, r2) {
        var a2 = t2.alternate, l2 = t2.flags;
        switch (t2.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            tn(r2, t2), Mn(t2), l2 & 4 && (Or(3, t2, t2.return), Br(3, t2), Or(5, t2, t2.return));
            break;
          case 1:
            tn(r2, t2), Mn(t2), l2 & 512 && (sn || a2 === null || yr(a2, a2.return)), l2 & 64 && eo && (t2 = t2.updateQueue, t2 !== null && (l2 = t2.callbacks, l2 !== null && (a2 = t2.shared.hiddenCallbacks, t2.shared.hiddenCallbacks = a2 === null ? l2 : a2.concat(l2))));
            break;
          case 26:
            if (Gt) {
              var c2 = Cr;
              if (tn(r2, t2), Mn(t2), l2 & 512 && (sn || a2 === null || yr(a2, a2.return)), l2 & 4) {
                l2 = a2 !== null ? a2.memoizedState : null;
                var d = t2.memoizedState;
                a2 === null ? d === null ? t2.stateNode === null ? t2.stateNode = Ya(c2, t2.type, t2.memoizedProps, t2) : Cc(c2, t2.type, t2.stateNode) : t2.stateNode = Fh(c2, d, t2.memoizedProps) : l2 !== d ? (l2 === null ? a2.stateNode !== null && Wf(a2.stateNode) : Hh(l2), d === null ? Cc(c2, t2.type, t2.stateNode) : Fh(c2, d, t2.memoizedProps)) : d === null && t2.stateNode !== null && qu(t2, t2.memoizedProps, a2.memoizedProps);
              }
              break;
            }
          case 27:
            if (dn) {
              tn(r2, t2), Mn(t2), l2 & 512 && (sn || a2 === null || yr(a2, a2.return)), a2 !== null && l2 & 4 && qu(t2, t2.memoizedProps, a2.memoizedProps);
              break;
            }
          case 5:
            if (tn(r2, t2), Mn(t2), l2 & 512 && (sn || a2 === null || yr(a2, a2.return)), $n) {
              if (t2.flags & 32) {
                c2 = t2.stateNode;
                try {
                  Sc(c2);
                } catch (A) {
                  ve(t2, t2.return, A);
                }
              }
              l2 & 4 && t2.stateNode != null && (c2 = t2.memoizedProps, qu(t2, c2, a2 !== null ? a2.memoizedProps : c2)), l2 & 1024 && (Ms = true);
            } else Sr && t2.alternate !== null && (t2.alternate.stateNode = t2.stateNode);
            break;
          case 6:
            if (tn(r2, t2), Mn(t2), l2 & 4 && $n) {
              if (t2.stateNode === null) throw Error(F(162));
              l2 = t2.memoizedProps, a2 = a2 !== null ? a2.memoizedProps : l2, c2 = t2.stateNode;
              try {
                Is(c2, a2, l2);
              } catch (A) {
                ve(t2, t2.return, A);
              }
            }
            break;
          case 3:
            if (Gt ? (jh(), c2 = Cr, Cr = zc(r2.containerInfo), tn(r2, t2), Cr = c2) : tn(r2, t2), Mn(t2), l2 & 4) {
              if ($n && Hn && a2 !== null && a2.memoizedState.isDehydrated) try {
                Mm(r2.containerInfo);
              } catch (A) {
                ve(t2, t2.return, A);
              }
              if (Sr) {
                l2 = r2.containerInfo, a2 = r2.pendingChildren;
                try {
                  bh(l2, a2);
                } catch (A) {
                  ve(t2, t2.return, A);
                }
              }
            }
            Ms && (Ms = false, Op(t2));
            break;
          case 4:
            Gt ? (a2 = Cr, Cr = zc(t2.stateNode.containerInfo), tn(r2, t2), Mn(t2), Cr = a2) : (tn(r2, t2), Mn(t2)), l2 & 4 && Sr && Ju(t2.stateNode, t2, t2.stateNode.pendingChildren);
            break;
          case 12:
            tn(r2, t2), Mn(t2);
            break;
          case 31:
            tn(r2, t2), Mn(t2), l2 & 4 && (l2 = t2.updateQueue, l2 !== null && (t2.updateQueue = null, ps(t2, l2)));
            break;
          case 13:
            tn(r2, t2), Mn(t2), t2.child.flags & 8192 && t2.memoizedState !== null != (a2 !== null && a2.memoizedState !== null) && (Vs = ze()), l2 & 4 && (l2 = t2.updateQueue, l2 !== null && (t2.updateQueue = null, ps(t2, l2)));
            break;
          case 22:
            c2 = t2.memoizedState !== null;
            var h2 = a2 !== null && a2.memoizedState !== null, y = eo, R = sn;
            if (eo = y || c2, sn = R || h2, tn(r2, t2), sn = R, eo = y, Mn(t2), l2 & 8192 && (r2 = t2.stateNode, r2._visibility = c2 ? r2._visibility & -2 : r2._visibility | 1, c2 && (a2 === null || h2 || eo || sn || Vt(t2)), $n)) {
              e: if (a2 = null, $n) for (r2 = t2; ; ) {
                if (r2.tag === 5 || Gt && r2.tag === 26) {
                  if (a2 === null) {
                    h2 = a2 = r2;
                    try {
                      d = h2.stateNode, c2 ? hh(d) : Wm(h2.stateNode, h2.memoizedProps);
                    } catch (A) {
                      ve(h2, h2.return, A);
                    }
                  }
                } else if (r2.tag === 6) {
                  if (a2 === null) {
                    h2 = r2;
                    try {
                      var L = h2.stateNode;
                      c2 ? kc(L) : mh(L, h2.memoizedProps);
                    } catch (A) {
                      ve(h2, h2.return, A);
                    }
                  }
                } else if (r2.tag === 18) {
                  if (a2 === null) {
                    h2 = r2;
                    try {
                      var j2 = h2.stateNode;
                      c2 ? Qm(j2) : Lh(h2.stateNode);
                    } catch (A) {
                      ve(h2, h2.return, A);
                    }
                  }
                } else if ((r2.tag !== 22 && r2.tag !== 23 || r2.memoizedState === null || r2 === t2) && r2.child !== null) {
                  r2.child.return = r2, r2 = r2.child;
                  continue;
                }
                if (r2 === t2) break e;
                for (; r2.sibling === null; ) {
                  if (r2.return === null || r2.return === t2) break e;
                  a2 === r2 && (a2 = null), r2 = r2.return;
                }
                a2 === r2 && (a2 = null), r2.sibling.return = r2.return, r2 = r2.sibling;
              }
            }
            l2 & 4 && (l2 = t2.updateQueue, l2 !== null && (a2 = l2.retryQueue, a2 !== null && (l2.retryQueue = null, ps(t2, a2))));
            break;
          case 19:
            tn(r2, t2), Mn(t2), l2 & 4 && (l2 = t2.updateQueue, l2 !== null && (t2.updateQueue = null, ps(t2, l2)));
            break;
          case 30:
            break;
          case 21:
            break;
          default:
            tn(r2, t2), Mn(t2);
        }
      }
      function Mn(t2) {
        var r2 = t2.flags;
        if (r2 & 2) {
          try {
            for (var a2, l2 = t2.return; l2 !== null; ) {
              if (tf(l2)) {
                a2 = l2;
                break;
              }
              l2 = l2.return;
            }
            if ($n) {
              if (a2 == null) throw Error(F(160));
              switch (a2.tag) {
                case 27:
                  if (dn) {
                    var c2 = a2.stateNode, d = Gu(t2);
                    $i(t2, d, c2);
                    break;
                  }
                case 5:
                  var h2 = a2.stateNode;
                  a2.flags & 32 && (Sc(h2), a2.flags &= -33);
                  var y = Gu(t2);
                  $i(t2, y, h2);
                  break;
                case 3:
                case 4:
                  var R = a2.stateNode.containerInfo, L = Gu(t2);
                  fs(t2, L, R);
                  break;
                default:
                  throw Error(F(161));
              }
            }
          } catch (j2) {
            ve(t2, t2.return, j2);
          }
          t2.flags &= -3;
        }
        r2 & 4096 && (t2.flags &= -4097);
      }
      function Op(t2) {
        if (t2.subtreeFlags & 1024) for (t2 = t2.child; t2 !== null; ) {
          var r2 = t2;
          Op(r2), r2.tag === 5 && r2.flags & 1024 && qa(r2.stateNode), t2 = t2.sibling;
        }
      }
      function $t(t2, r2) {
        if (r2.subtreeFlags & 8772) for (r2 = r2.child; r2 !== null; ) of(t2, r2.alternate, r2), r2 = r2.sibling;
      }
      function Vt(t2) {
        for (t2 = t2.child; t2 !== null; ) {
          var r2 = t2;
          switch (r2.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Or(4, r2, r2.return), Vt(r2);
              break;
            case 1:
              yr(r2, r2.return);
              var a2 = r2.stateNode;
              typeof a2.componentWillUnmount == "function" && Vu(r2, r2.return, a2), Vt(r2);
              break;
            case 27:
              dn && fa(r2.stateNode);
            case 26:
            case 5:
              yr(r2, r2.return), Vt(r2);
              break;
            case 22:
              r2.memoizedState === null && Vt(r2);
              break;
            case 30:
              Vt(r2);
              break;
            default:
              Vt(r2);
          }
          t2 = t2.sibling;
        }
      }
      function br(t2, r2, a2) {
        for (a2 = a2 && (r2.subtreeFlags & 8772) !== 0, r2 = r2.child; r2 !== null; ) {
          var l2 = r2.alternate, c2 = t2, d = r2, h2 = d.flags;
          switch (d.tag) {
            case 0:
            case 11:
            case 15:
              br(c2, d, a2), Br(4, d);
              break;
            case 1:
              if (br(c2, d, a2), l2 = d, c2 = l2.stateNode, typeof c2.componentDidMount == "function") try {
                c2.componentDidMount();
              } catch (L) {
                ve(l2, l2.return, L);
              }
              if (l2 = d, c2 = l2.updateQueue, c2 !== null) {
                var y = l2.stateNode;
                try {
                  var R = c2.shared.hiddenCallbacks;
                  if (R !== null) for (c2.shared.hiddenCallbacks = null, c2 = 0; c2 < R.length; c2++) Dd(R[c2], y);
                } catch (L) {
                  ve(l2, l2.return, L);
                }
              }
              a2 && h2 & 64 && Qi(d), ta(d, d.return);
              break;
            case 27:
              dn && rf(d);
            case 26:
            case 5:
              br(c2, d, a2), a2 && l2 === null && h2 & 4 && nf(d), ta(d, d.return);
              break;
            case 12:
              br(c2, d, a2);
              break;
            case 31:
              br(c2, d, a2), a2 && h2 & 4 && af(c2, d);
              break;
            case 13:
              br(c2, d, a2), a2 && h2 & 4 && Yu(c2, d);
              break;
            case 22:
              d.memoizedState === null && br(c2, d, a2), ta(d, d.return);
              break;
            case 30:
              break;
            default:
              br(c2, d, a2);
          }
          r2 = r2.sibling;
        }
      }
      function To(t2, r2) {
        var a2 = null;
        t2 !== null && t2.memoizedState !== null && t2.memoizedState.cachePool !== null && (a2 = t2.memoizedState.cachePool.pool), t2 = null, r2.memoizedState !== null && r2.memoizedState.cachePool !== null && (t2 = r2.memoizedState.cachePool.pool), t2 !== a2 && (t2 != null && t2.refCount++, a2 != null && Ra(a2));
      }
      function Qn(t2, r2) {
        t2 = null, r2.alternate !== null && (t2 = r2.alternate.memoizedState.cache), r2 = r2.memoizedState.cache, r2 !== t2 && (r2.refCount++, t2 != null && Ra(t2));
      }
      function yt(t2, r2, a2, l2) {
        if (r2.subtreeFlags & 10256) for (r2 = r2.child; r2 !== null; ) Mp(t2, r2, a2, l2), r2 = r2.sibling;
      }
      function Mp(t2, r2, a2, l2) {
        var c2 = r2.flags;
        switch (r2.tag) {
          case 0:
          case 11:
          case 15:
            yt(t2, r2, a2, l2), c2 & 2048 && Br(9, r2);
            break;
          case 1:
            yt(t2, r2, a2, l2);
            break;
          case 3:
            yt(t2, r2, a2, l2), c2 & 2048 && (t2 = null, r2.alternate !== null && (t2 = r2.alternate.memoizedState.cache), r2 = r2.memoizedState.cache, r2 !== t2 && (r2.refCount++, t2 != null && Ra(t2)));
            break;
          case 12:
            if (c2 & 2048) {
              yt(t2, r2, a2, l2), t2 = r2.stateNode;
              try {
                var d = r2.memoizedProps, h2 = d.id, y = d.onPostCommit;
                typeof y == "function" && y(h2, r2.alternate === null ? "mount" : "update", t2.passiveEffectDuration, -0);
              } catch (R) {
                ve(r2, r2.return, R);
              }
            } else yt(t2, r2, a2, l2);
            break;
          case 31:
            yt(t2, r2, a2, l2);
            break;
          case 13:
            yt(t2, r2, a2, l2);
            break;
          case 23:
            break;
          case 22:
            d = r2.stateNode, h2 = r2.alternate, r2.memoizedState !== null ? d._visibility & 2 ? yt(t2, r2, a2, l2) : oa(t2, r2) : d._visibility & 2 ? yt(t2, r2, a2, l2) : (d._visibility |= 2, ra(t2, r2, a2, l2, (r2.subtreeFlags & 10256) !== 0 || false)), c2 & 2048 && To(h2, r2);
            break;
          case 24:
            yt(t2, r2, a2, l2), c2 & 2048 && Qn(r2.alternate, r2);
            break;
          default:
            yt(t2, r2, a2, l2);
        }
      }
      function ra(t2, r2, a2, l2, c2) {
        for (c2 = c2 && ((r2.subtreeFlags & 10256) !== 0 || false), r2 = r2.child; r2 !== null; ) {
          var d = t2, h2 = r2, y = a2, R = l2, L = h2.flags;
          switch (h2.tag) {
            case 0:
            case 11:
            case 15:
              ra(d, h2, y, R, c2), Br(8, h2);
              break;
            case 23:
              break;
            case 22:
              var j2 = h2.stateNode;
              h2.memoizedState !== null ? j2._visibility & 2 ? ra(d, h2, y, R, c2) : oa(d, h2) : (j2._visibility |= 2, ra(d, h2, y, R, c2)), c2 && L & 2048 && To(h2.alternate, h2);
              break;
            case 24:
              ra(d, h2, y, R, c2), c2 && L & 2048 && Qn(h2.alternate, h2);
              break;
            default:
              ra(d, h2, y, R, c2);
          }
          r2 = r2.sibling;
        }
      }
      function oa(t2, r2) {
        if (r2.subtreeFlags & 10256) for (r2 = r2.child; r2 !== null; ) {
          var a2 = t2, l2 = r2, c2 = l2.flags;
          switch (l2.tag) {
            case 22:
              oa(a2, l2), c2 & 2048 && To(l2.alternate, l2);
              break;
            case 24:
              oa(a2, l2), c2 & 2048 && Qn(l2.alternate, l2);
              break;
            default:
              oa(a2, l2);
          }
          r2 = r2.sibling;
        }
      }
      function _o(t2, r2, a2) {
        if (t2.subtreeFlags & ga) for (t2 = t2.child; t2 !== null; ) lf(t2, r2, a2), t2 = t2.sibling;
      }
      function lf(t2, r2, a2) {
        switch (t2.tag) {
          case 26:
            if (_o(t2, r2, a2), t2.flags & ga) if (t2.memoizedState !== null) Fo(a2, Cr, t2.memoizedState, t2.memoizedProps);
            else {
              var l2 = t2.stateNode, c2 = t2.type;
              t2 = t2.memoizedProps, ((r2 & 335544128) === r2 || Yi(c2, t2)) && Vn(a2, l2, c2, t2);
            }
            break;
          case 5:
            _o(t2, r2, a2), t2.flags & ga && (l2 = t2.stateNode, c2 = t2.type, t2 = t2.memoizedProps, ((r2 & 335544128) === r2 || Yi(c2, t2)) && Vn(a2, l2, c2, t2));
            break;
          case 3:
          case 4:
            Gt ? (l2 = Cr, Cr = zc(t2.stateNode.containerInfo), _o(t2, r2, a2), Cr = l2) : _o(t2, r2, a2);
            break;
          case 22:
            t2.memoizedState === null && (l2 = t2.alternate, l2 !== null && l2.memoizedState !== null ? (l2 = ga, ga = 16777216, _o(t2, r2, a2), ga = l2) : _o(t2, r2, a2));
            break;
          default:
            _o(t2, r2, a2);
        }
      }
      function Xu(t2) {
        var r2 = t2.alternate;
        if (r2 !== null && (t2 = r2.child, t2 !== null)) {
          r2.child = null;
          do
            r2 = t2.sibling, t2.sibling = null, t2 = r2;
          while (t2 !== null);
        }
      }
      function aa(t2) {
        var r2 = t2.deletions;
        if ((t2.flags & 16) !== 0) {
          if (r2 !== null) for (var a2 = 0; a2 < r2.length; a2++) {
            var l2 = r2[a2];
            Pn = l2, ec(l2, t2);
          }
          Xu(t2);
        }
        if (t2.subtreeFlags & 10256) for (t2 = t2.child; t2 !== null; ) Ku(t2), t2 = t2.sibling;
      }
      function Ku(t2) {
        switch (t2.tag) {
          case 0:
          case 11:
          case 15:
            aa(t2), t2.flags & 2048 && Or(9, t2, t2.return);
            break;
          case 3:
            aa(t2);
            break;
          case 12:
            aa(t2);
            break;
          case 22:
            var r2 = t2.stateNode;
            t2.memoizedState !== null && r2._visibility & 2 && (t2.return === null || t2.return.tag !== 13) ? (r2._visibility &= -3, Ma(t2)) : aa(t2);
            break;
          default:
            aa(t2);
        }
      }
      function Ma(t2) {
        var r2 = t2.deletions;
        if ((t2.flags & 16) !== 0) {
          if (r2 !== null) for (var a2 = 0; a2 < r2.length; a2++) {
            var l2 = r2[a2];
            Pn = l2, ec(l2, t2);
          }
          Xu(t2);
        }
        for (t2 = t2.child; t2 !== null; ) {
          switch (r2 = t2, r2.tag) {
            case 0:
            case 11:
            case 15:
              Or(8, r2, r2.return), Ma(r2);
              break;
            case 22:
              a2 = r2.stateNode, a2._visibility & 2 && (a2._visibility &= -3, Ma(r2));
              break;
            default:
              Ma(r2);
          }
          t2 = t2.sibling;
        }
      }
      function ec(t2, r2) {
        for (; Pn !== null; ) {
          var a2 = Pn;
          switch (a2.tag) {
            case 0:
            case 11:
            case 15:
              Or(8, a2, r2);
              break;
            case 23:
            case 22:
              if (a2.memoizedState !== null && a2.memoizedState.cachePool !== null) {
                var l2 = a2.memoizedState.cachePool.pool;
                l2 != null && l2.refCount++;
              }
              break;
            case 24:
              Ra(a2.memoizedState.cache);
          }
          if (l2 = a2.child, l2 !== null) l2.return = a2, Pn = l2;
          else e: for (a2 = t2; Pn !== null; ) {
            l2 = Pn;
            var c2 = l2.sibling, d = l2.return;
            if (Up(l2), l2 === a2) {
              Pn = null;
              break e;
            }
            if (c2 !== null) {
              c2.return = d, Pn = c2;
              break e;
            }
            Pn = d;
          }
        }
      }
      function Vi(t2) {
        var r2 = nh(t2);
        if (r2 != null) {
          if (typeof r2.memoizedProps["data-testname"] != "string") throw Error(F(364));
          return r2;
        }
        if (t2 = Rf(t2), t2 === null) throw Error(F(362));
        return t2.stateNode.current;
      }
      function ms(t2, r2) {
        var a2 = t2.tag;
        switch (r2.$$typeof) {
          case Vc:
            if (t2.type === r2.value) return true;
            break;
          case qc:
            e: {
              for (r2 = r2.value, t2 = [t2, 0], a2 = 0; a2 < t2.length; ) {
                var l2 = t2[a2++], c2 = l2.tag, d = t2[a2++], h2 = r2[d];
                if (c2 !== 5 && c2 !== 26 && c2 !== 27 || !Jr(l2)) {
                  for (; h2 != null && ms(l2, h2); ) d++, h2 = r2[d];
                  if (d === r2.length) {
                    r2 = true;
                    break e;
                  } else for (l2 = l2.child; l2 !== null; ) t2.push(l2, d), l2 = l2.sibling;
                }
              }
              r2 = false;
            }
            return r2;
          case Gc:
            if ((a2 === 5 || a2 === 26 || a2 === 27) && sh(t2.stateNode, r2.value)) return true;
            break;
          case Zc:
            if ((a2 === 5 || a2 === 6 || a2 === 26 || a2 === 27) && (t2 = lh(t2), t2 !== null && 0 <= t2.indexOf(r2.value))) return true;
            break;
          case Jc:
            if ((a2 === 5 || a2 === 26 || a2 === 27) && (t2 = t2.memoizedProps["data-testname"], typeof t2 == "string" && t2.toLowerCase() === r2.value.toLowerCase())) return true;
            break;
          default:
            throw Error(F(365));
        }
        return false;
      }
      function nc(t2) {
        switch (t2.$$typeof) {
          case Vc:
            return "<" + (hu(t2.value) || "Unknown") + ">";
          case qc:
            return ":has(" + (nc(t2) || "") + ")";
          case Gc:
            return '[role="' + t2.value + '"]';
          case Zc:
            return '"' + t2.value + '"';
          case Jc:
            return '[data-testname="' + t2.value + '"]';
          default:
            throw Error(F(365));
        }
      }
      function sf(t2, r2) {
        var a2 = [];
        t2 = [t2, 0];
        for (var l2 = 0; l2 < t2.length; ) {
          var c2 = t2[l2++], d = c2.tag, h2 = t2[l2++], y = r2[h2];
          if (d !== 5 && d !== 26 && d !== 27 || !Jr(c2)) {
            for (; y != null && ms(c2, y); ) h2++, y = r2[h2];
            if (h2 === r2.length) a2.push(c2);
            else for (c2 = c2.child; c2 !== null; ) t2.push(c2, h2), c2 = c2.sibling;
          }
        }
        return a2;
      }
      function gs(t2, r2) {
        if (!Ga) throw Error(F(363));
        t2 = Vi(t2), t2 = sf(t2, r2), r2 = [], t2 = Array.from(t2);
        for (var a2 = 0; a2 < t2.length; ) {
          var l2 = t2[a2++], c2 = l2.tag;
          if (c2 === 5 || c2 === 26 || c2 === 27) Jr(l2) || r2.push(l2.stateNode);
          else for (l2 = l2.child; l2 !== null; ) t2.push(l2), l2 = l2.sibling;
        }
        return r2;
      }
      function bt() {
        return (ce & 2) !== 0 && he !== 0 ? he & -he : M.T !== null ? ku() : kr();
      }
      function ys() {
        if (At === 0) if ((he & 536870912) === 0 || ue) {
          var t2 = js;
          js <<= 1, (js & 3932160) === 0 && (js = 262144), At = t2;
        } else At = 536870912;
        return t2 = Ft.current, t2 !== null && (t2.flags |= 32), At;
      }
      function nt(t2, r2, a2) {
        (t2 === Ne && (_e === 2 || _e === 9) || t2.cancelPendingCommit !== null) && (la(t2, 0), Ro(t2, he, At, false)), xi(t2, a2), ((ce & 2) === 0 || t2 !== Ne) && (t2 === Ne && ((ce & 2) === 0 && (ii |= a2), Xe === 4 && Ro(t2, he, At, false)), ir(t2));
      }
      function uf(t2, r2, a2) {
        if ((ce & 6) !== 0) throw Error(F(327));
        var l2 = !a2 && (r2 & 127) === 0 && (r2 & t2.expiredLanes) === 0 || Pi(t2, r2), c2 = l2 ? Gp(t2, r2) : Ji(t2, r2, true), d = l2;
        do {
          if (c2 === 0) {
            ai && !l2 && Ro(t2, r2, 0, false);
            break;
          } else {
            if (a2 = t2.current.alternate, d && !Qp(a2)) {
              c2 = Ji(t2, r2, false), d = false;
              continue;
            }
            if (c2 === 2) {
              if (d = r2, t2.errorRecoveryDisabledLanes & d) var h2 = 0;
              else h2 = t2.pendingLanes & -536870913, h2 = h2 !== 0 ? h2 : h2 & 536870912 ? 536870912 : 0;
              if (h2 !== 0) {
                r2 = h2;
                e: {
                  var y = t2;
                  c2 = $s;
                  var R = Hn && y.current.memoizedState.isDehydrated;
                  if (R && (la(y, h2).flags |= 256), h2 = Ji(y, h2, false), h2 !== 2) {
                    if (Gf && !R) {
                      y.errorRecoveryDisabledLanes |= d, ii |= d, c2 = 4;
                      break e;
                    }
                    d = xt, xt = c2, d !== null && (xt === null ? xt = d : xt.push.apply(xt, d));
                  }
                  c2 = h2;
                }
                if (d = false, c2 !== 2) continue;
              }
            }
            if (c2 === 1) {
              la(t2, 0), Ro(t2, r2, 0, true);
              break;
            }
            e: {
              switch (l2 = t2, d = c2, d) {
                case 0:
                case 1:
                  throw Error(F(345));
                case 4:
                  if ((r2 & 4194048) !== r2) break;
                case 6:
                  Ro(l2, r2, At, !ya);
                  break e;
                case 2:
                  xt = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(F(329));
              }
              if ((r2 & 62914560) === r2 && (c2 = Vs + 300 - ze(), 10 < c2)) {
                if (Ro(l2, r2, At, !ya), Lr(l2, 0, true) !== 0) break e;
                no = r2, l2.timeoutHandle = eh(tc.bind(null, l2, a2, xt, Xc, Yc, r2, At, ii, hl, ya, d, "Throttled", -0, 0), c2);
                break e;
              }
              tc(l2, a2, xt, Xc, Yc, r2, At, ii, hl, ya, d, null, -0, 0);
            }
          }
          break;
        } while (true);
        ir(t2);
      }
      function tc(t2, r2, a2, l2, c2, d, h2, y, R, L, j2, A, W2, V) {
        if (t2.timeoutHandle = Lo, A = r2.subtreeFlags, A & 8192 || (A & 16785408) === 16785408) {
          A = oh(), lf(r2, d, A);
          var Oe = (d & 62914560) === d ? Vs - ze() : (d & 4194048) === d ? Zf - ze() : 0;
          if (Oe = ah(A, Oe), Oe !== null) {
            no = d, t2.cancelPendingCommit = Oe(pf.bind(null, t2, r2, d, a2, l2, c2, h2, y, R, j2, A, null, W2, V)), Ro(t2, d, h2, !L);
            return;
          }
        }
        pf(t2, r2, d, a2, l2, c2, h2, y, R);
      }
      function Qp(t2) {
        for (var r2 = t2; ; ) {
          var a2 = r2.tag;
          if ((a2 === 0 || a2 === 11 || a2 === 15) && r2.flags & 16384 && (a2 = r2.updateQueue, a2 !== null && (a2 = a2.stores, a2 !== null))) for (var l2 = 0; l2 < a2.length; l2++) {
            var c2 = a2[l2], d = c2.getSnapshot;
            c2 = c2.value;
            try {
              if (!jn(d(), c2)) return false;
            } catch (e2) {
              return false;
            }
          }
          if (a2 = r2.child, r2.subtreeFlags & 16384 && a2 !== null) a2.return = r2, r2 = a2;
          else {
            if (r2 === t2) break;
            for (; r2.sibling === null; ) {
              if (r2.return === null || r2.return === t2) return true;
              r2 = r2.return;
            }
            r2.sibling.return = r2.return, r2 = r2.sibling;
          }
        }
        return true;
      }
      function Ro(t2, r2, a2, l2) {
        r2 &= ~Jf, r2 &= ~ii, t2.suspendedLanes |= r2, t2.pingedLanes &= ~r2, l2 && (t2.warmLanes |= r2), l2 = t2.expirationTimes;
        for (var c2 = r2; 0 < c2; ) {
          var d = 31 - vt(c2), h2 = 1 << d;
          l2[d] = -1, c2 &= ~h2;
        }
        a2 !== 0 && Yo(t2, a2, r2);
      }
      function ia() {
        return (ce & 6) === 0 ? (Ea(0), false) : true;
      }
      function bs() {
        if (de !== null) {
          if (_e === 0) var t2 = de.return;
          else t2 = de, Be = at = null, Vl(t2), Kt = null, Bs = 0, t2 = de;
          for (; t2 !== null; ) $u(t2.alternate, t2), t2 = t2.return;
          de = null;
        }
      }
      function la(t2, r2) {
        var a2 = t2.timeoutHandle;
        a2 !== Lo && (t2.timeoutHandle = Lo, Tf(a2)), a2 = t2.cancelPendingCommit, a2 !== null && (t2.cancelPendingCommit = null, a2()), no = 0, bs(), Ne = t2, de = a2 = Qr(t2.current, null), he = r2, _e = 0, Ht = null, ya = false, ai = Pi(t2, r2), Gf = false, hl = At = Jf = ii = ba = Xe = 0, xt = $s = null, Yc = false, (r2 & 8) !== 0 && (r2 |= r2 & 32);
        var l2 = t2.entangledLanes;
        if (l2 !== 0) for (t2 = t2.entanglements, l2 &= r2; 0 < l2; ) {
          var c2 = 31 - vt(l2), d = 1 << c2;
          r2 |= t2[c2], l2 &= ~d;
        }
        return Uo = r2, Bn(), a2;
      }
      function $p(t2, r2) {
        ne = null, M.H = Os, r2 === cl || r2 === jc ? (r2 = Bl(), _e = 3) : r2 === Ac ? (r2 = Bl(), _e = 4) : _e = r2 === Mc ? 8 : r2 !== null && typeof r2 == "object" && typeof r2.then == "function" ? 6 : 1, Ht = r2, de === null && (Xe = 1, rs(t2, ut(r2, t2.current)));
      }
      function Vp() {
        var t2 = Ft.current;
        return t2 === null ? true : (he & 4194048) === he ? zr === null : (he & 62914560) === he || (he & 536870912) !== 0 ? t2 === zr : false;
      }
      function cf() {
        var t2 = M.H;
        return M.H = Os, t2 === null ? Os : t2;
      }
      function qi() {
        var t2 = M.A;
        return M.A = Zm, t2;
      }
      function Gi() {
        Xe = 4, ya || (he & 4194048) !== he && Ft.current !== null || (ai = true), (ba & 134217727) === 0 && (ii & 134217727) === 0 || Ne === null || Ro(Ne, he, At, false);
      }
      function Ji(t2, r2, a2) {
        var l2 = ce;
        ce |= 2;
        var c2 = cf(), d = qi();
        (Ne !== t2 || he !== r2) && (Xc = null, la(t2, r2)), r2 = false;
        var h2 = Xe;
        e: do
          try {
            if (_e !== 0 && de !== null) {
              var y = de, R = Ht;
              switch (_e) {
                case 8:
                  bs(), h2 = 6;
                  break e;
                case 3:
                case 2:
                case 9:
                case 6:
                  Ft.current === null && (r2 = true);
                  var L = _e;
                  if (_e = 0, Ht = null, Qa(t2, y, R, L), a2 && ai) {
                    h2 = 0;
                    break e;
                  }
                  break;
                default:
                  L = _e, _e = 0, Ht = null, Qa(t2, y, R, L);
              }
            }
            qp(), h2 = Xe;
            break;
          } catch (j2) {
            $p(t2, j2);
          }
        while (true);
        return r2 && t2.shellSuspendCounter++, Be = at = null, ce = l2, M.H = c2, M.A = d, de === null && (Ne = null, he = 0, Bn()), h2;
      }
      function qp() {
        for (; de !== null; ) rc(de);
      }
      function Gp(t2, r2) {
        var a2 = ce;
        ce |= 2;
        var l2 = cf(), c2 = qi();
        Ne !== t2 || he !== r2 ? (Xc = null, ml = ze() + 500, la(t2, r2)) : ai = Pi(t2, r2);
        e: do
          try {
            if (_e !== 0 && de !== null) {
              r2 = de;
              var d = Ht;
              n: switch (_e) {
                case 1:
                  _e = 0, Ht = null, Qa(t2, r2, d, 1);
                  break;
                case 2:
                case 9:
                  if (Hd(d)) {
                    _e = 0, Ht = null, ff(r2);
                    break;
                  }
                  r2 = function() {
                    _e !== 2 && _e !== 9 || Ne !== t2 || (_e = 7), ir(t2);
                  }, d.then(r2, r2);
                  break e;
                case 3:
                  _e = 7;
                  break e;
                case 4:
                  _e = 5;
                  break e;
                case 7:
                  Hd(d) ? (_e = 0, Ht = null, ff(r2)) : (_e = 0, Ht = null, Qa(t2, r2, d, 7));
                  break;
                case 5:
                  var h2 = null;
                  switch (de.tag) {
                    case 26:
                      h2 = de.memoizedState;
                    case 5:
                    case 27:
                      var y = de, R = y.type, L = y.pendingProps;
                      if (h2 ? Tc(h2) : An(y.stateNode, R, L)) {
                        _e = 0, Ht = null;
                        var j2 = y.sibling;
                        if (j2 !== null) de = j2;
                        else {
                          var A = y.return;
                          A !== null ? (de = A, Mr(A)) : de = null;
                        }
                        break n;
                      }
                  }
                  _e = 0, Ht = null, Qa(t2, r2, d, 5);
                  break;
                case 6:
                  _e = 0, Ht = null, Qa(t2, r2, d, 6);
                  break;
                case 8:
                  bs(), Xe = 6;
                  break e;
                default:
                  throw Error(F(462));
              }
            }
            df();
            break;
          } catch (W2) {
            $p(t2, W2);
          }
        while (true);
        return Be = at = null, M.H = l2, M.A = c2, ce = a2, de !== null ? 0 : (Ne = null, he = 0, Bn(), Xe);
      }
      function df() {
        for (; de !== null && !qm(); ) rc(de);
      }
      function rc(t2) {
        var r2 = Bu(t2.alternate, t2, Uo);
        t2.memoizedProps = t2.pendingProps, r2 === null ? Mr(t2) : de = r2;
      }
      function ff(t2) {
        var r2 = t2, a2 = r2.alternate;
        switch (r2.tag) {
          case 15:
          case 0:
            r2 = Xd(a2, r2, r2.pendingProps, r2.type, void 0, he);
            break;
          case 11:
            r2 = Xd(a2, r2, r2.pendingProps, r2.type.render, r2.ref, he);
            break;
          case 5:
            Vl(r2);
          default:
            $u(a2, r2), r2 = de = yf(r2, Uo), r2 = Bu(a2, r2, Uo);
        }
        t2.memoizedProps = t2.pendingProps, r2 === null ? Mr(t2) : de = r2;
      }
      function Qa(t2, r2, a2, l2) {
        Be = at = null, Vl(r2), Kt = null, Bs = 0;
        var c2 = r2.return;
        try {
          if (On(t2, c2, r2, a2, he)) {
            Xe = 1, rs(t2, ut(a2, t2.current)), de = null;
            return;
          }
        } catch (d) {
          if (c2 !== null) throw de = c2, d;
          Xe = 1, rs(t2, ut(a2, t2.current)), de = null;
          return;
        }
        r2.flags & 32768 ? (ue || l2 === 1 ? t2 = true : ai || (he & 536870912) !== 0 ? t2 = false : (ya = t2 = true, (l2 === 2 || l2 === 9 || l2 === 3 || l2 === 6) && (l2 = Ft.current, l2 !== null && l2.tag === 13 && (l2.flags |= 16384))), vs(r2, t2)) : Mr(r2);
      }
      function Mr(t2) {
        var r2 = t2;
        do {
          if ((r2.flags & 32768) !== 0) {
            vs(r2, ya);
            return;
          }
          t2 = r2.return;
          var a2 = Oa(r2.alternate, r2, Uo);
          if (a2 !== null) {
            de = a2;
            return;
          }
          if (r2 = r2.sibling, r2 !== null) {
            de = r2;
            return;
          }
          de = r2 = t2;
        } while (r2 !== null);
        Xe === 0 && (Xe = 5);
      }
      function vs(t2, r2) {
        do {
          var a2 = gr(t2.alternate, t2);
          if (a2 !== null) {
            a2.flags &= 32767, de = a2;
            return;
          }
          if (a2 = t2.return, a2 !== null && (a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null), !r2 && (t2 = t2.sibling, t2 !== null)) {
            de = t2;
            return;
          }
          de = t2 = a2;
        } while (t2 !== null);
        Xe = 6, de = null;
      }
      function pf(t2, r2, a2, l2, c2, d, h2, y, R) {
        t2.cancelPendingCommit = null;
        do
          rn();
        while (Re !== 0);
        if ((ce & 6) !== 0) throw Error(F(327));
        if (r2 !== null) {
          if (r2 === t2.current) throw Error(F(177));
          if (d = r2.lanes | r2.childLanes, d |= $f, _p(t2, a2, d, h2, y, R), t2 === Ne && (de = Ne = null, he = 0), Sa = r2, Bo = t2, no = a2, Kc = d, ed = c2, $h = l2, (r2.subtreeFlags & 10256) !== 0 || (r2.flags & 10256) !== 0 ? (t2.callbackNode = null, t2.callbackPriority = 0, Nm(Ao, function() {
            return hf(), null;
          })) : (t2.callbackNode = null, t2.callbackPriority = 0), l2 = (r2.flags & 13878) !== 0, (r2.subtreeFlags & 13878) !== 0 || l2) {
            l2 = M.T, M.T = null, c2 = qr(), yn(2), h2 = ce, ce |= 4;
            try {
              Wp(t2, r2, a2);
            } finally {
              ce = h2, yn(c2), M.T = l2;
            }
          }
          Re = 1, oc(), ac(), ic();
        }
      }
      function oc() {
        if (Re === 1) {
          Re = 0;
          var t2 = Bo, r2 = Sa, a2 = (r2.flags & 13878) !== 0;
          if ((r2.subtreeFlags & 13878) !== 0 || a2) {
            a2 = M.T, M.T = null;
            var l2 = qr();
            yn(2);
            var c2 = ce;
            ce |= 4;
            try {
              hs(r2, t2), _s(t2.containerInfo);
            } finally {
              ce = c2, yn(l2), M.T = a2;
            }
          }
          t2.current = r2, Re = 2;
        }
      }
      function ac() {
        if (Re === 2) {
          Re = 0;
          var t2 = Bo, r2 = Sa, a2 = (r2.flags & 8772) !== 0;
          if ((r2.subtreeFlags & 8772) !== 0 || a2) {
            a2 = M.T, M.T = null;
            var l2 = qr();
            yn(2);
            var c2 = ce;
            ce |= 4;
            try {
              of(t2, r2.alternate, r2);
            } finally {
              ce = c2, yn(l2), M.T = a2;
            }
          }
          Re = 3;
        }
      }
      function ic() {
        if (Re === 4 || Re === 3) {
          Re = 0, St();
          var t2 = Bo, r2 = Sa, a2 = no, l2 = $h;
          (r2.subtreeFlags & 10256) !== 0 || (r2.flags & 10256) !== 0 ? Re = 5 : (Re = 0, Sa = Bo = null, Jp(t2, t2.pendingLanes));
          var c2 = t2.pendingLanes;
          if (c2 === 0 && (va = null), Ze(a2), r2 = r2.stateNode, on && typeof on.onCommitFiberRoot == "function") try {
            on.onCommitFiberRoot(ei, r2, void 0, (r2.current.flags & 128) === 128);
          } catch (e2) {
          }
          if (l2 !== null) {
            r2 = M.T, c2 = qr(), yn(2), M.T = null;
            try {
              for (var d = t2.onRecoverableError, h2 = 0; h2 < l2.length; h2++) {
                var y = l2[h2];
                d(y.value, {
                  componentStack: y.stack
                });
              }
            } finally {
              M.T = r2, yn(c2);
            }
          }
          (no & 3) !== 0 && rn(), ir(t2), c2 = t2.pendingLanes, (a2 & 261930) !== 0 && (c2 & 42) !== 0 ? t2 === nd ? gl++ : (gl = 0, nd = t2) : gl = 0, Hn && Ih(), Ea(0);
        }
      }
      function Jp(t2, r2) {
        (t2.pooledCacheLanes &= r2) === 0 && (r2 = t2.pooledCache, r2 != null && (t2.pooledCache = null, Ra(r2)));
      }
      function rn() {
        return oc(), ac(), ic(), hf();
      }
      function hf() {
        if (Re !== 5) return false;
        var t2 = Bo, r2 = Kc;
        Kc = 0;
        var a2 = Ze(no), l2 = 32 > a2 ? 32 : a2;
        a2 = M.T;
        var c2 = qr();
        try {
          yn(l2), M.T = null, l2 = ed, ed = null;
          var d = Bo, h2 = no;
          if (Re = 0, Sa = Bo = null, no = 0, (ce & 6) !== 0) throw Error(F(331));
          var y = ce;
          if (ce |= 4, Ku(d.current), Mp(d, d.current, h2, l2), ce = y, Ea(0, false), on && typeof on.onPostCommitFiberRoot == "function") try {
            on.onPostCommitFiberRoot(ei, d);
          } catch (e2) {
          }
          return true;
        } finally {
          yn(c2), M.T = a2, Jp(t2, r2);
        }
      }
      function mf(t2, r2, a2) {
        r2 = ut(a2, r2), r2 = Ui(t2.stateNode, r2, 2), t2 = Nr(t2, r2, 2), t2 !== null && (xi(t2, 2), ir(t2));
      }
      function ve(t2, r2, a2) {
        if (t2.tag === 3) mf(t2, t2, a2);
        else for (; r2 !== null; ) {
          if (r2.tag === 3) {
            mf(r2, t2, a2);
            break;
          } else if (r2.tag === 1) {
            var l2 = r2.stateNode;
            if (typeof r2.type.getDerivedStateFromError == "function" || typeof l2.componentDidCatch == "function" && (va === null || !va.has(l2))) {
              t2 = ut(a2, t2), a2 = os(2), l2 = Nr(r2, a2, 2), l2 !== null && (Hu(a2, l2, r2, t2), xi(l2, 2), ir(l2));
              break;
            }
          }
          r2 = r2.return;
        }
      }
      function lc(t2, r2, a2) {
        var l2 = t2.pingCache;
        if (l2 === null) {
          l2 = t2.pingCache = new Ym();
          var c2 = /* @__PURE__ */ new Set();
          l2.set(r2, c2);
        } else c2 = l2.get(r2), c2 === void 0 && (c2 = /* @__PURE__ */ new Set(), l2.set(r2, c2));
        c2.has(a2) || (Gf = true, c2.add(a2), t2 = Ss.bind(null, t2, r2, a2), r2.then(t2, t2));
      }
      function Ss(t2, r2, a2) {
        var l2 = t2.pingCache;
        l2 !== null && l2.delete(r2), t2.pingedLanes |= t2.suspendedLanes & a2, t2.warmLanes &= ~a2, Ne === t2 && (he & a2) === a2 && (Xe === 4 || Xe === 3 && (he & 62914560) === he && 300 > ze() - Vs ? (ce & 2) === 0 && la(t2, 0) : Jf |= a2, hl === he && (hl = 0)), ir(t2);
      }
      function gf(t2, r2) {
        r2 === 0 && (r2 = Ed()), t2 = Ko(t2, r2), t2 !== null && (xi(t2, r2), ir(t2));
      }
      function sc(t2) {
        var r2 = t2.memoizedState, a2 = 0;
        r2 !== null && (a2 = r2.retryLane), gf(t2, a2);
      }
      function Zp(t2, r2) {
        var a2 = 0;
        switch (t2.tag) {
          case 31:
          case 13:
            var l2 = t2.stateNode, c2 = t2.memoizedState;
            c2 !== null && (a2 = c2.retryLane);
            break;
          case 19:
            l2 = t2.stateNode;
            break;
          case 22:
            l2 = t2.stateNode._retryCache;
            break;
          default:
            throw Error(F(314));
        }
        l2 !== null && l2.delete(r2), gf(t2, a2);
      }
      function Nm(t2, r2) {
        return Ic(t2, r2);
      }
      function uc(t2, r2, a2, l2) {
        this.tag = t2, this.key = a2, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = r2, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l2, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function ks(t2) {
        return t2 = t2.prototype, !(!t2 || !t2.isReactComponent);
      }
      function Qr(t2, r2) {
        var a2 = t2.alternate;
        return a2 === null ? (a2 = Yn(t2.tag, r2, t2.key, t2.mode), a2.elementType = t2.elementType, a2.type = t2.type, a2.stateNode = t2.stateNode, a2.alternate = t2, t2.alternate = a2) : (a2.pendingProps = r2, a2.type = t2.type, a2.flags = 0, a2.subtreeFlags = 0, a2.deletions = null), a2.flags = t2.flags & 65011712, a2.childLanes = t2.childLanes, a2.lanes = t2.lanes, a2.child = t2.child, a2.memoizedProps = t2.memoizedProps, a2.memoizedState = t2.memoizedState, a2.updateQueue = t2.updateQueue, r2 = t2.dependencies, a2.dependencies = r2 === null ? null : {
          lanes: r2.lanes,
          firstContext: r2.firstContext
        }, a2.sibling = t2.sibling, a2.index = t2.index, a2.ref = t2.ref, a2.refCleanup = t2.refCleanup, a2;
      }
      function yf(t2, r2) {
        t2.flags &= 65011714;
        var a2 = t2.alternate;
        return a2 === null ? (t2.childLanes = 0, t2.lanes = r2, t2.child = null, t2.subtreeFlags = 0, t2.memoizedProps = null, t2.memoizedState = null, t2.updateQueue = null, t2.dependencies = null, t2.stateNode = null) : (t2.childLanes = a2.childLanes, t2.lanes = a2.lanes, t2.child = a2.child, t2.subtreeFlags = 0, t2.deletions = null, t2.memoizedProps = a2.memoizedProps, t2.memoizedState = a2.memoizedState, t2.updateQueue = a2.updateQueue, t2.type = a2.type, r2 = a2.dependencies, t2.dependencies = r2 === null ? null : {
          lanes: r2.lanes,
          firstContext: r2.firstContext
        }), t2;
      }
      function ws(t2, r2, a2, l2, c2, d) {
        var h2 = 0;
        if (l2 = t2, typeof t2 == "function") ks(t2) && (h2 = 1);
        else if (typeof t2 == "string") h2 = Gt && dn ? Df(t2, a2, Dn.current) ? 26 : Ec(t2) ? 27 : 5 : Gt ? Df(t2, a2, Dn.current) ? 26 : 5 : dn && Ec(t2) ? 27 : 5;
        else e: switch (t2) {
          case gc:
            return t2 = Yn(31, a2, r2, c2), t2.elementType = gc, t2.lanes = d, t2;
          case $a:
            return Eo(a2.children, c2, d, r2);
          case kf:
            h2 = 8, c2 |= 24;
            break;
          case Cs:
            return t2 = Yn(12, a2, r2, c2 | 2), t2.elementType = Cs, t2.lanes = d, t2;
          case Va:
            return t2 = Yn(13, a2, r2, c2), t2.elementType = Va, t2.lanes = d, t2;
          case Te:
            return t2 = Yn(19, a2, r2, c2), t2.elementType = Te, t2.lanes = d, t2;
          default:
            if (typeof t2 == "object" && t2 !== null) switch (t2.$$typeof) {
              case Io:
                h2 = 10;
                break e;
              case mc:
                h2 = 9;
                break e;
              case Zi:
                h2 = 11;
                break e;
              case wf:
                h2 = 14;
                break e;
              case ua:
                h2 = 16, l2 = null;
                break e;
            }
            h2 = 29, a2 = Error(F(130, t2 === null ? "null" : typeof t2, "")), l2 = null;
        }
        return r2 = Yn(h2, a2, r2, c2), r2.elementType = t2, r2.type = l2, r2.lanes = d, r2;
      }
      function Eo(t2, r2, a2, l2) {
        return t2 = Yn(7, t2, l2, r2), t2.lanes = a2, t2;
      }
      function Ps(t2, r2, a2) {
        return t2 = Yn(6, t2, null, r2), t2.lanes = a2, t2;
      }
      function cc(t2) {
        var r2 = Yn(18, null, null, 0);
        return r2.stateNode = t2, r2;
      }
      function dc(t2, r2, a2) {
        return r2 = Yn(4, t2.children !== null ? t2.children : [], t2.key, r2), r2.lanes = a2, r2.stateNode = {
          containerInfo: t2.containerInfo,
          pendingChildren: null,
          implementation: t2.implementation
        }, r2;
      }
      function bf(t2, r2, a2, l2, c2, d, h2, y, R) {
        this.tag = 1, this.containerInfo = t2, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Lo, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mu(0), this.hiddenUpdates = mu(null), this.identifierPrefix = l2, this.onUncaughtError = c2, this.onCaughtError = d, this.onRecoverableError = h2, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = R, this.incompleteTransitions = /* @__PURE__ */ new Map();
      }
      function xs(t2, r2, a2, l2, c2, d, h2, y, R, L, j2, A) {
        return t2 = new bf(t2, r2, a2, h2, R, L, j2, A, y), r2 = 1, d === true && (r2 |= 24), d = Yn(3, null, null, r2), t2.current = d, d.stateNode = t2, r2 = Fd(), r2.refCount++, t2.pooledCache = r2, r2.refCount++, d.memoizedState = {
          element: l2,
          isDehydrated: a2,
          cache: r2
        }, Ol(d), t2;
      }
      function fc(t2) {
        return t2 ? (t2 = Ka, t2) : Ka;
      }
      function vf(t2) {
        var r2 = t2._reactInternals;
        if (r2 === void 0) throw typeof t2.render == "function" ? Error(F(188)) : (t2 = Object.keys(t2).join(","), Error(F(268, t2)));
        return t2 = fu(r2), t2 = t2 !== null ? pu(t2) : null, t2 === null ? null : Ts(t2.stateNode);
      }
      function pc(t2, r2, a2, l2, c2, d) {
        c2 = fc(c2), l2.context === null ? l2.context = c2 : l2.pendingContext = c2, l2 = Et(r2), l2.payload = {
          element: a2
        }, d = d === void 0 ? null : d, d !== null && (l2.callback = d), a2 = Nr(t2, l2, r2), a2 !== null && (nt(a2, t2, r2), Ml(a2, t2, r2));
      }
      function Sf(t2, r2) {
        if (t2 = t2.memoizedState, t2 !== null && t2.dehydrated !== null) {
          var a2 = t2.retryLane;
          t2.retryLane = a2 !== 0 && a2 < r2 ? a2 : r2;
        }
      }
      function vr(t2, r2) {
        Sf(t2, r2), (t2 = t2.alternate) && Sf(t2, r2);
      }
      var ie = {}, Fm = React, tt = Tb, Lt = Object.assign, hc = Symbol.for("react.element"), zs = Symbol.for("react.transitional.element"), sa = Symbol.for("react.portal"), $a = Symbol.for("react.fragment"), kf = Symbol.for("react.strict_mode"), Cs = Symbol.for("react.profiler"), mc = Symbol.for("react.consumer"), Io = Symbol.for("react.context"), Zi = Symbol.for("react.forward_ref"), Va = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), wf = Symbol.for("react.memo"), ua = Symbol.for("react.lazy");
      var gc = Symbol.for("react.activity");
      var $r = Symbol.for("react.memo_cache_sentinel");
      var Pf = Symbol.iterator, xf = Symbol.for("react.client.reference"), ca = Array.isArray, M = Fm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Yp = m2.rendererVersion, zf = m2.rendererPackageName, Cf = m2.extraDevToolsConfig, Ts = m2.getPublicInstance, Hm = m2.getRootHostContext, Xp = m2.getChildHostContext, Am = m2.prepareForCommit, _s = m2.resetAfterCommit, Vr = m2.createInstance;
      m2.cloneMutableInstance;
      var yc = m2.appendInitialChild, Kp = m2.finalizeInitialChildren, Rs = m2.shouldSetTextContent, bc = m2.createTextInstance;
      m2.cloneMutableTextInstance;
      var eh = m2.scheduleTimeout, Tf = m2.cancelTimeout, Lo = m2.noTimeout, qt = m2.isPrimaryRenderer;
      m2.warnsIfNotActing;
      var $n = m2.supportsMutation, Sr = m2.supportsPersistence, Hn = m2.supportsHydration, nh = m2.getInstanceFromNode;
      m2.beforeActiveInstanceBlur;
      var jm = m2.preparePortalMount;
      m2.prepareScopeUpdate, m2.getInstanceFromScope;
      var yn = m2.setCurrentUpdatePriority, qr = m2.getCurrentUpdatePriority, kr = m2.resolveUpdatePriority;
      m2.trackSchedulerEvent, m2.resolveEventType, m2.resolveEventTimeStamp;
      var _f = m2.shouldAttemptEagerTransition, th = m2.detachDeletedInstance;
      m2.requestPostPaintCallback;
      var rh = m2.maySuspendCommit, Dm = m2.maySuspendCommitOnUpdate, Yi = m2.maySuspendCommitInSyncRender, An = m2.preloadInstance, oh = m2.startSuspendingCommit, Vn = m2.suspendInstance;
      m2.suspendOnActiveViewTransition;
      var ah = m2.waitForCommitToBeReady;
      m2.getSuspendedCommitReason;
      var rt = m2.NotPendingTransition, da = m2.HostTransitionContext, qa = m2.resetFormInstance;
      m2.bindToConsole;
      var ih = m2.supportsMicrotasks, Gr = m2.scheduleMicrotask, Ga = m2.supportsTestSelectors, Rf = m2.findFiberRoot, wr = m2.getBoundingRect, lh = m2.getTextContent, Jr = m2.isHiddenSubtree, sh = m2.matchAccessibilityRole, Es = m2.setFocusIfFocusable, Ja = m2.setupIntersectionObserver, uh = m2.appendChild, ch = m2.appendChildToContainer, Is = m2.commitTextUpdate, dh = m2.commitMount, vc = m2.commitUpdate, fh = m2.insertBefore, ph = m2.insertInContainerBefore, Ef = m2.removeChild, If = m2.removeChildFromContainer, Sc = m2.resetTextContent, hh = m2.hideInstance, kc = m2.hideTextInstance, Wm = m2.unhideInstance, mh = m2.unhideTextInstance;
      m2.cancelViewTransitionName, m2.cancelRootViewTransitionName, m2.restoreRootViewTransitionName, m2.cloneRootViewTransitionContainer, m2.removeRootViewTransitionClone, m2.measureClonedInstance, m2.hasInstanceChanged, m2.hasInstanceAffectedParent, m2.startViewTransition, m2.startGestureTransition, m2.stopViewTransition, m2.getCurrentGestureOffset, m2.createViewTransitionInstance;
      var Nt = m2.clearContainer;
      m2.createFragmentInstance, m2.updateFragmentInstanceFiber, m2.commitNewChildToFragmentInstance, m2.deleteChildFromFragmentInstance;
      var gh = m2.cloneInstance, We = m2.createContainerChildSet, Lf = m2.appendChildToContainerChildSet, yh = m2.finalizeContainerChildren, bh = m2.replaceContainerChildren, No = m2.cloneHiddenInstance, Ls = m2.cloneHiddenTextInstance, Ns = m2.isSuspenseInstancePending, Fs = m2.isSuspenseInstanceFallback, Za = m2.getSuspenseInstanceFallbackErrorDetails, Xi = m2.registerSuspenseInstanceRetry, vh = m2.canHydrateFormStateMarker, Sh = m2.isFormStateMarkerMatching, Nf = m2.getNextHydratableSibling, kh = m2.getNextHydratableSiblingAfterSingleton, wc = m2.getFirstHydratableChild, Pc = m2.getFirstHydratableChildWithinContainer, Ff = m2.getFirstHydratableChildWithinActivityInstance, wh = m2.getFirstHydratableChildWithinSuspenseInstance, Um = m2.getFirstHydratableChildWithinSingleton, Bm = m2.canHydrateInstance, Ph = m2.canHydrateTextInstance, xh = m2.canHydrateActivityInstance, Om = m2.canHydrateSuspenseInstance, Ki = m2.hydrateInstance, xc = m2.hydrateTextInstance, zh = m2.hydrateActivityInstance, Hf = m2.hydrateSuspenseInstance, Ch = m2.getNextHydratableInstanceAfterActivityInstance, Th = m2.getNextHydratableInstanceAfterSuspenseInstance, _h = m2.commitHydratedInstance, Mm = m2.commitHydratedContainer, Rh = m2.commitHydratedActivityInstance, el = m2.commitHydratedSuspenseInstance, Eh = m2.finalizeHydratedChildren, Ih = m2.flushHydrationEvents;
      m2.clearActivityBoundary;
      var Se = m2.clearSuspenseBoundary;
      m2.clearActivityBoundaryFromContainer;
      var Af = m2.clearSuspenseBoundaryFromContainer, Qm = m2.hideDehydratedBoundary, Lh = m2.unhideDehydratedBoundary, Nh = m2.shouldDeleteUnhydratedTailInstances;
      m2.diffHydratedPropsForDevWarnings, m2.diffHydratedTextForDevWarnings, m2.describeHydratableInstanceForDevWarnings;
      var $m = m2.validateHydratableInstance, jf = m2.validateHydratableTextInstance, Gt = m2.supportsResources, Df = m2.isHostHoistableType, zc = m2.getHoistableRoot, nl = m2.getResource, Fh = m2.acquireResource, Hh = m2.releaseResource, Ya = m2.hydrateHoistable, Cc = m2.mountHoistable, Wf = m2.unmountHoistable, Ah = m2.createHoistableInstance, jh = m2.prepareToCommitHoistables, Vm = m2.mayResourceSuspendCommit, Tc = m2.preloadResource, Fo = m2.suspendResource, dn = m2.supportsSingletons, _c = m2.resolveSingletonInstance, Rc = m2.acquireSingletonInstance, fa = m2.releaseSingletonInstance, Ec = m2.isHostSingletonType, Xa = m2.isSingletonScope, Hs = [], tl = -1, Ka = {}, vt = Math.clz32 ? Math.clz32 : Em, Dh = Math.log, Wh = Math.LN2, As = 256, js = 262144, rl = 4194304, Ic = tt.unstable_scheduleCallback, le = tt.unstable_cancelCallback, qm = tt.unstable_shouldYield, St = tt.unstable_requestPaint, ze = tt.unstable_now, Uh = tt.unstable_ImmediatePriority, Ho = tt.unstable_UserBlockingPriority, Ao = tt.unstable_NormalPriority, ol = tt.unstable_IdlePriority, Lc = tt.log, Uf = tt.unstable_setDisableYieldValue, ei = null, on = null, jn = typeof Object.is == "function" ? Object.is : Im, Nc = typeof reportError == "function" ? reportError : function(t2) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r2 = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: typeof t2 == "object" && t2 !== null && typeof t2.message == "string" ? String(t2.message) : String(t2),
            error: t2
          });
          if (!window.dispatchEvent(r2)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", t2);
          return;
        }
        console.error(t2);
      }, Bf = Object.prototype.hasOwnProperty, al, kt, Ds = false, Bh = /* @__PURE__ */ new WeakMap(), ni = [], il = 0, fn = null, x = 0, Jt = [], Zt = 0, jo = null, ot = 1, Zr = "", Dn = Ir(null), Ws = Ir(null), pa = Ir(null), Fc = Ir(null), bn = null, Ue = null, ue = false, Do = null, Yt = false, Of = Error(F(519)), Yr = Ir(null), at = null, Be = null, Xr = typeof AbortController < "u" ? AbortController : function() {
        var t2 = [], r2 = this.signal = {
          aborted: false,
          addEventListener: function(a2, l2) {
            t2.push(l2);
          }
        };
        this.abort = function() {
          r2.aborted = true, t2.forEach(function(a2) {
            return a2();
          });
        };
      }, qn = tt.unstable_scheduleCallback, Gm = tt.unstable_NormalPriority, qe = {
        $$typeof: Io,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      }, an = null, wt = null, Mf = false, ll = false, ti = false, Pr = 0, Us = null, Qf = 0, sl = 0, ul = null, Hc = M.S;
      M.S = function(t2, r2) {
        Zf = ze(), typeof r2 == "object" && r2 !== null && typeof r2.then == "function" && Np(t2, r2), Hc !== null && Hc(t2, r2);
      };
      var ha = Ir(null), cl = Error(F(460)), Ac = Error(F(474)), jc = Error(F(542)), Dc = {
        then: function() {
        }
      }, Xt = null, Kt = null, Bs = 0, ri = Ad(true), Oh = Ad(false), er = [], xr = 0, $f = 0, ma = false, Vf = false, Kr = Ir(null), Wc = Ir(0), Ft = Ir(null), zr = null, ln = Ir(0), Wo = 0, ne = null, Ie = null, pn = null, Uc = false, dl = false, oi = false, Bc = 0, fl2 = 0, pl = null, Jm = 0, Os = {
        readContext: In,
        use: Ee,
        useCallback: Ve,
        useContext: Ve,
        useEffect: Ve,
        useImperativeHandle: Ve,
        useLayoutEffect: Ve,
        useInsertionEffect: Ve,
        useMemo: Ve,
        useReducer: Ve,
        useRef: Ve,
        useState: Ve,
        useDebugValue: Ve,
        useDeferredValue: Ve,
        useTransition: Ve,
        useSyncExternalStore: Ve,
        useId: Ve,
        useHostTransitionStatus: Ve,
        useFormState: Ve,
        useActionState: Ve,
        useOptimistic: Ve,
        useMemoCache: Ve,
        useCacheRefresh: Ve
      };
      Os.useEffectEvent = Ve;
      var Mh = {
        readContext: In,
        use: Ee,
        useCallback: function(t2, r2) {
          return Ln().memoizedState = [t2, r2 === void 0 ? null : r2], t2;
        },
        useContext: In,
        useEffect: Bd,
        useImperativeHandle: function(t2, r2, a2) {
          a2 = a2 != null ? a2.concat([t2]) : null, Xl(4194308, 4, jp.bind(null, r2, t2), a2);
        },
        useLayoutEffect: function(t2, r2) {
          return Xl(4194308, 4, t2, r2);
        },
        useInsertionEffect: function(t2, r2) {
          Xl(4, 2, t2, r2);
        },
        useMemo: function(t2, r2) {
          var a2 = Ln();
          r2 = r2 === void 0 ? null : r2;
          var l2 = t2();
          if (oi) {
            pe(true);
            try {
              t2();
            } finally {
              pe(false);
            }
          }
          return a2.memoizedState = [l2, r2], l2;
        },
        useReducer: function(t2, r2, a2) {
          var l2 = Ln();
          if (a2 !== void 0) {
            var c2 = a2(r2);
            if (oi) {
              pe(true);
              try {
                a2(r2);
              } finally {
                pe(false);
              }
            }
          } else c2 = r2;
          return l2.memoizedState = l2.baseState = c2, t2 = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t2,
            lastRenderedState: c2
          }, l2.queue = t2, t2 = t2.dispatch = Nn.bind(null, ne, t2), [l2.memoizedState, t2];
        },
        useRef: function(t2) {
          var r2 = Ln();
          return t2 = {
            current: t2
          }, r2.memoizedState = t2;
        },
        useState: function(t2) {
          t2 = Xn(t2);
          var r2 = t2.queue, a2 = Nu.bind(null, ne, r2);
          return r2.dispatch = a2, [t2.memoizedState, a2];
        },
        useDebugValue: Qd,
        useDeferredValue: function(t2, r2) {
          var a2 = Ln();
          return Iu(a2, t2, r2);
        },
        useTransition: function() {
          var t2 = Xn(false);
          return t2 = $d.bind(null, ne, t2.queue, true, false), Ln().memoizedState = t2, [false, t2];
        },
        useSyncExternalStore: function(t2, r2, a2) {
          var l2 = ne, c2 = Ln();
          if (ue) {
            if (a2 === void 0) throw Error(F(407));
            a2 = a2();
          } else {
            if (a2 = r2(), Ne === null) throw Error(F(349));
            (he & 127) !== 0 || Hp(l2, r2, a2);
          }
          c2.memoizedState = a2;
          var d = {
            value: a2,
            getSnapshot: r2
          };
          return c2.queue = d, Bd(ql.bind(null, l2, d, t2), [t2]), l2.flags |= 2048, Kn(9, {
            destroy: void 0
          }, jr.bind(null, l2, d, a2, r2), null), a2;
        },
        useId: function() {
          var t2 = Ln(), r2 = Ne.identifierPrefix;
          if (ue) {
            var a2 = Zr, l2 = ot;
            a2 = (l2 & ~(1 << 32 - vt(l2) - 1)).toString(32) + a2, r2 = "_" + r2 + "R_" + a2, a2 = Bc++, 0 < a2 && (r2 += "H" + a2.toString(32)), r2 += "_";
          } else a2 = Jm++, r2 = "_" + r2 + "r_" + a2.toString(32) + "_";
          return t2.memoizedState = r2;
        },
        useHostTransitionStatus: Lu,
        useFormState: pr,
        useActionState: pr,
        useOptimistic: function(t2) {
          var r2 = Ln();
          r2.memoizedState = r2.baseState = t2;
          var a2 = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
          };
          return r2.queue = a2, r2 = Wi.bind(null, ne, true, a2), a2.dispatch = r2, [t2, r2];
        },
        useMemoCache: Hi,
        useCacheRefresh: function() {
          return Ln().memoizedState = Dp.bind(null, ne);
        },
        useEffectEvent: function(t2) {
          var r2 = Ln(), a2 = {
            impl: t2
          };
          return r2.memoizedState = a2, function() {
            if ((ce & 2) !== 0) throw Error(F(440));
            return a2.impl.apply(void 0, arguments);
          };
        }
      }, qf = {
        readContext: In,
        use: Ee,
        useCallback: Eu,
        useContext: In,
        useEffect: Tu,
        useImperativeHandle: Md,
        useInsertionEffect: Od,
        useLayoutEffect: Ru,
        useMemo: Kl,
        useReducer: Ai,
        useRef: Wa,
        useState: function() {
          return Ai(Ar);
        },
        useDebugValue: Qd,
        useDeferredValue: function(t2, r2) {
          var a2 = He();
          return es(a2, Ie.memoizedState, t2, r2);
        },
        useTransition: function() {
          var t2 = Ai(Ar)[0], r2 = He().memoizedState;
          return [typeof t2 == "boolean" ? t2 : sr(t2), r2];
        },
        useSyncExternalStore: ur,
        useId: xo,
        useHostTransitionStatus: Lu,
        useFormState: Ud,
        useActionState: Ud,
        useOptimistic: function(t2, r2) {
          var a2 = He();
          return mt(a2, Ie, t2, r2);
        },
        useMemoCache: Hi,
        useCacheRefresh: qd
      };
      qf.useEffectEvent = _u;
      var Qh = {
        readContext: In,
        use: Ee,
        useCallback: Eu,
        useContext: In,
        useEffect: Tu,
        useImperativeHandle: Md,
        useInsertionEffect: Od,
        useLayoutEffect: Ru,
        useMemo: Kl,
        useReducer: Da,
        useRef: Wa,
        useState: function() {
          return Da(Ar);
        },
        useDebugValue: Qd,
        useDeferredValue: function(t2, r2) {
          var a2 = He();
          return Ie === null ? Iu(a2, t2, r2) : es(a2, Ie.memoizedState, t2, r2);
        },
        useTransition: function() {
          var t2 = Da(Ar)[0], r2 = He().memoizedState;
          return [typeof t2 == "boolean" ? t2 : sr(t2), r2];
        },
        useSyncExternalStore: ur,
        useId: xo,
        useHostTransitionStatus: Lu,
        useFormState: Yl,
        useActionState: Yl,
        useOptimistic: function(t2, r2) {
          var a2 = He();
          return Ie !== null ? mt(a2, Ie, t2, r2) : (a2.baseState = t2, [t2, a2.queue.dispatch]);
        },
        useMemoCache: Hi,
        useCacheRefresh: qd
      };
      Qh.useEffectEvent = _u;
      var Oc = {
        enqueueSetState: function(t2, r2, a2) {
          t2 = t2._reactInternals;
          var l2 = bt(), c2 = Et(l2);
          c2.payload = r2, a2 != null && (c2.callback = a2), r2 = Nr(t2, c2, l2), r2 !== null && (nt(r2, t2, l2), Ml(r2, t2, l2));
        },
        enqueueReplaceState: function(t2, r2, a2) {
          t2 = t2._reactInternals;
          var l2 = bt(), c2 = Et(l2);
          c2.tag = 1, c2.payload = r2, a2 != null && (c2.callback = a2), r2 = Nr(t2, c2, l2), r2 !== null && (nt(r2, t2, l2), Ml(r2, t2, l2));
        },
        enqueueForceUpdate: function(t2, r2) {
          t2 = t2._reactInternals;
          var a2 = bt(), l2 = Et(a2);
          l2.tag = 2, r2 != null && (l2.callback = r2), r2 = Nr(t2, l2, a2), r2 !== null && (nt(r2, t2, a2), Ml(r2, t2, a2));
        }
      }, Mc = Error(F(461)), hn = false, Qc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
      }, eo = false, sn = false, Ms = false, $c = typeof WeakSet == "function" ? WeakSet : Set, Pn = null, mn = null, Pt = false, Cr = null, ga = 8192, Zm = {
        getCacheForType: function(t2) {
          var r2 = In(qe), a2 = r2.data.get(t2);
          return a2 === void 0 && (a2 = t2(), r2.data.set(t2, a2)), a2;
        },
        cacheSignal: function() {
          return In(qe).controller.signal;
        }
      }, Vc = 0, qc = 1, Gc = 2, Jc = 3, Zc = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Qs = Symbol.for;
        Vc = Qs("selector.component"), qc = Qs("selector.has_pseudo_class"), Gc = Qs("selector.role"), Jc = Qs("selector.test_id"), Zc = Qs("selector.text");
      }
      var Ym = typeof WeakMap == "function" ? WeakMap : Map, ce = 0, Ne = null, de = null, he = 0, _e = 0, Ht = null, ya = false, ai = false, Gf = false, Uo = 0, Xe = 0, ba = 0, ii = 0, Jf = 0, At = 0, hl = 0, $s = null, xt = null, Yc = false, Vs = 0, Zf = 0, ml = 1 / 0, Xc = null, va = null, Re = 0, Bo = null, Sa = null, no = 0, Kc = 0, ed = null, $h = null, gl = 0, nd = null;
      return ie.attemptContinuousHydration = function(t2) {
        if (t2.tag === 13 || t2.tag === 31) {
          var r2 = Ko(t2, 67108864);
          r2 !== null && nt(r2, t2, 67108864), vr(t2, 67108864);
        }
      }, ie.attemptHydrationAtCurrentPriority = function(t2) {
        if (t2.tag === 13 || t2.tag === 31) {
          var r2 = bt();
          r2 = st(r2);
          var a2 = Ko(t2, r2);
          a2 !== null && nt(a2, t2, r2), vr(t2, r2);
        }
      }, ie.attemptSynchronousHydration = function(t2) {
        switch (t2.tag) {
          case 3:
            if (t2 = t2.stateNode, t2.current.memoizedState.isDehydrated) {
              var r2 = Zo(t2.pendingLanes);
              if (r2 !== 0) {
                for (t2.pendingLanes |= 2, t2.entangledLanes |= 2; r2; ) {
                  var a2 = 1 << 31 - vt(r2);
                  t2.entanglements[1] |= a2, r2 &= ~a2;
                }
                ir(t2), (ce & 6) === 0 && (ml = ze() + 500, Ea(0));
              }
            }
            break;
          case 31:
          case 13:
            r2 = Ko(t2, 2), r2 !== null && nt(r2, t2, 2), ia(), vr(t2, 2);
        }
      }, ie.batchedUpdates = function(t2, r2) {
        return t2(r2);
      }, ie.createComponentSelector = function(t2) {
        return {
          $$typeof: Vc,
          value: t2
        };
      }, ie.createContainer = function(t2, r2, a2, l2, c2, d, h2, y, R, L) {
        return xs(t2, r2, false, null, a2, l2, d, null, h2, y, R, L);
      }, ie.createHasPseudoClassSelector = function(t2) {
        return {
          $$typeof: qc,
          value: t2
        };
      }, ie.createHydrationContainer = function(t2, r2, a2, l2, c2, d, h2, y, R, L, j2, A, W2, V) {
        var _r2;
        return t2 = xs(a2, l2, true, t2, c2, d, y, V, R, L, j2, A), t2.context = fc(null), a2 = t2.current, l2 = bt(), l2 = st(l2), c2 = Et(l2), c2.callback = (_r2 = r2) != null ? _r2 : null, Nr(a2, c2, l2), r2 = l2, t2.current.lanes = r2, xi(t2, r2), ir(t2), t2;
      }, ie.createPortal = function(t2, r2, a2) {
        var l2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: sa,
          key: l2 == null ? null : "" + l2,
          children: t2,
          containerInfo: r2,
          implementation: a2
        };
      }, ie.createRoleSelector = function(t2) {
        return {
          $$typeof: Gc,
          value: t2
        };
      }, ie.createTestNameSelector = function(t2) {
        return {
          $$typeof: Jc,
          value: t2
        };
      }, ie.createTextSelector = function(t2) {
        return {
          $$typeof: Zc,
          value: t2
        };
      }, ie.defaultOnCaughtError = function(t2) {
        console.error(t2);
      }, ie.defaultOnRecoverableError = function(t2) {
        Nc(t2);
      }, ie.defaultOnUncaughtError = function(t2) {
        Nc(t2);
      }, ie.deferredUpdates = function(t2) {
        var r2 = M.T, a2 = qr();
        try {
          return yn(32), M.T = null, t2();
        } finally {
          yn(a2), M.T = r2;
        }
      }, ie.discreteUpdates = function(t2, r2, a2, l2, c2) {
        var d = M.T, h2 = qr();
        try {
          return yn(2), M.T = null, t2(r2, a2, l2, c2);
        } finally {
          yn(h2), M.T = d, ce === 0 && (ml = ze() + 500);
        }
      }, ie.findAllNodes = gs, ie.findBoundingRects = function(t2, r2) {
        if (!Ga) throw Error(F(363));
        r2 = gs(t2, r2), t2 = [];
        for (var a2 = 0; a2 < r2.length; a2++) t2.push(wr(r2[a2]));
        for (r2 = t2.length - 1; 0 < r2; r2--) {
          a2 = t2[r2];
          for (var l2 = a2.x, c2 = l2 + a2.width, d = a2.y, h2 = d + a2.height, y = r2 - 1; 0 <= y; y--) if (r2 !== y) {
            var R = t2[y], L = R.x, j2 = L + R.width, A = R.y, W2 = A + R.height;
            if (l2 >= L && d >= A && c2 <= j2 && h2 <= W2) {
              t2.splice(r2, 1);
              break;
            } else if (l2 !== L || a2.width !== R.width || W2 < d || A > h2) {
              if (!(d !== A || a2.height !== R.height || j2 < l2 || L > c2)) {
                L > l2 && (R.width += L - l2, R.x = l2), j2 < c2 && (R.width = c2 - L), t2.splice(r2, 1);
                break;
              }
            } else {
              A > d && (R.height += A - d, R.y = d), W2 < h2 && (R.height = h2 - A), t2.splice(r2, 1);
              break;
            }
          }
        }
        return t2;
      }, ie.findHostInstance = vf, ie.findHostInstanceWithNoPortals = function(t2) {
        return t2 = fu(t2), t2 = t2 !== null ? lt(t2) : null, t2 === null ? null : Ts(t2.stateNode);
      }, ie.findHostInstanceWithWarning = function(t2) {
        return vf(t2);
      }, ie.flushPassiveEffects = rn, ie.flushSyncFromReconciler = function(t2) {
        var r2 = ce;
        ce |= 1;
        var a2 = M.T, l2 = qr();
        try {
          if (yn(2), M.T = null, t2) return t2();
        } finally {
          yn(l2), M.T = a2, ce = r2, (ce & 6) === 0 && Ea(0);
        }
      }, ie.flushSyncWork = ia, ie.focusWithin = function(t2, r2) {
        if (!Ga) throw Error(F(363));
        for (t2 = Vi(t2), r2 = sf(t2, r2), r2 = Array.from(r2), t2 = 0; t2 < r2.length; ) {
          var a2 = r2[t2++], l2 = a2.tag;
          if (!Jr(a2)) {
            if ((l2 === 5 || l2 === 26 || l2 === 27) && Es(a2.stateNode)) return true;
            for (a2 = a2.child; a2 !== null; ) r2.push(a2), a2 = a2.sibling;
          }
        }
        return false;
      }, ie.getFindAllNodesFailureDescription = function(t2, r2) {
        if (!Ga) throw Error(F(363));
        var a2 = 0, l2 = [];
        t2 = [Vi(t2), 0];
        for (var c2 = 0; c2 < t2.length; ) {
          var d = t2[c2++], h2 = d.tag, y = t2[c2++], R = r2[y];
          if ((h2 !== 5 && h2 !== 26 && h2 !== 27 || !Jr(d)) && (ms(d, R) && (l2.push(nc(R)), y++, y > a2 && (a2 = y)), y < r2.length)) for (d = d.child; d !== null; ) t2.push(d, y), d = d.sibling;
        }
        if (a2 < r2.length) {
          for (t2 = []; a2 < r2.length; a2++) t2.push(nc(r2[a2]));
          return `findAllNodes was able to match part of the selector:
  ` + (l2.join(" > ") + `

No matching component was found for:
  `) + t2.join(" > ");
        }
        return null;
      }, ie.getPublicRootInstance = function(t2) {
        if (t2 = t2.current, !t2.child) return null;
        switch (t2.child.tag) {
          case 27:
          case 5:
            return Ts(t2.child.stateNode);
          default:
            return t2.child.stateNode;
        }
      }, ie.injectIntoDevTools = function() {
        var t2 = {
          bundleType: 0,
          version: Yp,
          rendererPackageName: zf,
          currentDispatcherRef: M,
          reconcilerVersion: "19.2.0"
        };
        if (Cf !== null && (t2.rendererConfig = Cf), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") t2 = false;
        else {
          var r2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (r2.isDisabled || !r2.supportsFiber) t2 = true;
          else {
            try {
              ei = r2.inject(t2), on = r2;
            } catch (e2) {
            }
            t2 = !!r2.checkDCE;
          }
        }
        return t2;
      }, ie.isAlreadyRendering = function() {
        return (ce & 6) !== 0;
      }, ie.observeVisibleRects = function(t2, r2, a2, l2) {
        if (!Ga) throw Error(F(363));
        t2 = gs(t2, r2);
        var c2 = Ja(t2, a2, l2).disconnect;
        return {
          disconnect: function() {
            c2();
          }
        };
      }, ie.shouldError = function() {
        return null;
      }, ie.shouldSuspend = function() {
        return false;
      }, ie.startHostTransition = function(t2, r2, a2, l2) {
        if (t2.tag !== 5) throw Error(F(476));
        var c2 = Vd(t2).queue;
        $d(t2, c2, r2, rt, a2 === null ? _d : function() {
          var d = Vd(t2);
          return d.next === null && (d = t2.alternate.memoizedState), ea(t2, d.next.queue, {}, bt()), a2(l2);
        });
      }, ie.updateContainer = function(t2, r2, a2, l2) {
        var c2 = r2.current, d = bt();
        return pc(c2, d, t2, r2, a2, l2), d;
      }, ie.updateContainerSync = function(t2, r2, a2, l2) {
        return pc(r2.current, 2, t2, r2, a2, l2), 2;
      }, ie;
    }, Tt.exports.default = Tt.exports, Object.defineProperty(Tt.exports, "__esModule", {
      value: true
    });
  })(Og)), Og.exports;
}
var Eb;
function n0() {
  return Eb || (Eb = 1, Rm.exports = Kb()), Rm.exports;
}
var t0 = n0();
const r0 = Xb(t0);
function createReconciler(config) {
  const reconciler2 = r0(config);
  reconciler2.injectIntoDevTools();
  return reconciler2;
}
const NoEventPriority = 0;
const catalogue = {};
const PREFIX_REGEX = /^three(?=[A-Z])/;
const toPascalCase = (type) => `${type[0].toUpperCase()}${type.slice(1)}`;
let i$1 = 0;
const isConstructor = (object) => typeof object === "function";
function extend(objects) {
  if (isConstructor(objects)) {
    const Component = `${i$1++}`;
    catalogue[Component] = objects;
    return Component;
  } else {
    Object.assign(catalogue, objects);
  }
}
function validateInstance(type, props) {
  const name = toPascalCase(type);
  const target = catalogue[name];
  if (type !== "primitive" && !target) throw new Error(`R3F: ${name} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
  if (type === "primitive" && !props.object) throw new Error(`R3F: Primitives without 'object' are invalid!`);
  if (props.args !== void 0 && !Array.isArray(props.args)) throw new Error("R3F: The args prop must be an array!");
}
function createInstance(type, props, root) {
  var _props$object;
  type = toPascalCase(type) in catalogue ? type : type.replace(PREFIX_REGEX, "");
  validateInstance(type, props);
  if (type === "primitive" && (_props$object = props.object) != null && _props$object.__r3f) delete props.object.__r3f;
  return prepare(props.object, root, type, props);
}
function hideInstance(instance) {
  if (!instance.isHidden) {
    var _instance$parent;
    if (instance.props.attach && (_instance$parent = instance.parent) != null && _instance$parent.object) {
      detach(instance.parent, instance);
    } else if (isObject3D(instance.object)) {
      instance.object.visible = false;
    }
    instance.isHidden = true;
    invalidateInstance(instance);
  }
}
function unhideInstance(instance) {
  if (instance.isHidden) {
    var _instance$parent2;
    if (instance.props.attach && (_instance$parent2 = instance.parent) != null && _instance$parent2.object) {
      attach(instance.parent, instance);
    } else if (isObject3D(instance.object) && instance.props.visible !== false) {
      instance.object.visible = true;
    }
    instance.isHidden = false;
    invalidateInstance(instance);
  }
}
function handleContainerEffects(parent, child, beforeChild) {
  const state2 = child.root.getState();
  if (!parent.parent && parent.object !== state2.scene) return;
  if (!child.object) {
    var _child$props$object, _child$props$args;
    const target = catalogue[toPascalCase(child.type)];
    child.object = (_child$props$object = child.props.object) != null ? _child$props$object : new target(...(_child$props$args = child.props.args) != null ? _child$props$args : []);
    child.object.__r3f = child;
  }
  applyProps(child.object, child.props);
  if (child.props.attach) {
    attach(parent, child);
  } else if (isObject3D(child.object) && isObject3D(parent.object)) {
    const childIndex = parent.object.children.indexOf(beforeChild == null ? void 0 : beforeChild.object);
    if (beforeChild && childIndex !== -1) {
      const existingIndex = parent.object.children.indexOf(child.object);
      if (existingIndex !== -1) {
        parent.object.children.splice(existingIndex, 1);
        const adjustedIndex = existingIndex < childIndex ? childIndex - 1 : childIndex;
        parent.object.children.splice(adjustedIndex, 0, child.object);
      } else {
        child.object.parent = parent.object;
        parent.object.children.splice(childIndex, 0, child.object);
        child.object.dispatchEvent({
          type: "added"
        });
        parent.object.dispatchEvent({
          type: "childadded",
          child: child.object
        });
      }
    } else {
      parent.object.add(child.object);
    }
  }
  for (const childInstance of child.children) handleContainerEffects(child, childInstance);
  invalidateInstance(child);
}
function appendChild(parent, child) {
  if (!child) return;
  child.parent = parent;
  parent.children.push(child);
  handleContainerEffects(parent, child);
}
function insertBefore(parent, child, beforeChild) {
  if (!child || !beforeChild) return;
  child.parent = parent;
  const childIndex = parent.children.indexOf(beforeChild);
  if (childIndex !== -1) parent.children.splice(childIndex, 0, child);
  else parent.children.push(child);
  handleContainerEffects(parent, child, beforeChild);
}
function disposeOnIdle(object) {
  if (typeof object.dispose === "function") {
    const handleDispose = () => {
      try {
        object.dispose();
      } catch (e2) {
      }
    };
    if (typeof IS_REACT_ACT_ENVIRONMENT !== "undefined") handleDispose();
    else schedulerExports.unstable_scheduleCallback(schedulerExports.unstable_IdlePriority, handleDispose);
  }
}
function removeChild(parent, child, dispose2) {
  if (!child) return;
  child.parent = null;
  const childIndex = parent.children.indexOf(child);
  if (childIndex !== -1) parent.children.splice(childIndex, 1);
  if (child.props.attach) {
    detach(parent, child);
  } else if (isObject3D(child.object) && isObject3D(parent.object)) {
    parent.object.remove(child.object);
    removeInteractivity(findInitialRoot(child), child.object);
  }
  const shouldDispose = child.props.dispose !== null && dispose2 !== false;
  for (let i2 = child.children.length - 1; i2 >= 0; i2--) {
    const node = child.children[i2];
    removeChild(child, node, shouldDispose);
  }
  child.children.length = 0;
  delete child.object.__r3f;
  if (shouldDispose && child.type !== "primitive" && child.object.type !== "Scene") {
    disposeOnIdle(child.object);
  }
  if (dispose2 === void 0) invalidateInstance(child);
}
function setFiberRef(fiber, publicInstance) {
  for (const _fiber of [fiber, fiber.alternate]) {
    if (_fiber !== null) {
      if (typeof _fiber.ref === "function") {
        _fiber.refCleanup == null ? void 0 : _fiber.refCleanup();
        const cleanup = _fiber.ref(publicInstance);
        if (typeof cleanup === "function") _fiber.refCleanup = cleanup;
      } else if (_fiber.ref) {
        _fiber.ref.current = publicInstance;
      }
    }
  }
}
const reconstructed = [];
function swapInstances() {
  for (const [instance] of reconstructed) {
    const parent = instance.parent;
    if (parent) {
      if (instance.props.attach) {
        detach(parent, instance);
      } else if (isObject3D(instance.object) && isObject3D(parent.object)) {
        parent.object.remove(instance.object);
      }
      for (const child of instance.children) {
        if (child.props.attach) {
          detach(instance, child);
        } else if (isObject3D(child.object) && isObject3D(instance.object)) {
          instance.object.remove(child.object);
        }
      }
    }
    if (instance.isHidden) unhideInstance(instance);
    if (instance.object.__r3f) delete instance.object.__r3f;
    if (instance.type !== "primitive") disposeOnIdle(instance.object);
  }
  for (const [instance, props, fiber] of reconstructed) {
    instance.props = props;
    const parent = instance.parent;
    if (parent) {
      var _instance$props$objec, _instance$props$args;
      const target = catalogue[toPascalCase(instance.type)];
      instance.object = (_instance$props$objec = instance.props.object) != null ? _instance$props$objec : new target(...(_instance$props$args = instance.props.args) != null ? _instance$props$args : []);
      instance.object.__r3f = instance;
      setFiberRef(fiber, instance.object);
      applyProps(instance.object, instance.props);
      if (instance.props.attach) {
        attach(parent, instance);
      } else if (isObject3D(instance.object) && isObject3D(parent.object)) {
        parent.object.add(instance.object);
      }
      for (const child of instance.children) {
        if (child.props.attach) {
          attach(instance, child);
        } else if (isObject3D(child.object) && isObject3D(instance.object)) {
          instance.object.add(child.object);
        }
      }
      invalidateInstance(instance);
    }
  }
  reconstructed.length = 0;
}
const handleTextInstance = () => {
};
const NO_CONTEXT = {};
let currentUpdatePriority = NoEventPriority;
const NoFlags = 0;
const Update = 4;
const reconciler = /* @__PURE__ */ createReconciler({
  isPrimaryRenderer: false,
  warnsIfNotActing: false,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  createInstance,
  removeChild,
  appendChild,
  appendInitialChild: appendChild,
  insertBefore,
  appendChildToContainer(container, child) {
    const scene = container.getState().scene.__r3f;
    if (!child || !scene) return;
    appendChild(scene, child);
  },
  removeChildFromContainer(container, child) {
    const scene = container.getState().scene.__r3f;
    if (!child || !scene) return;
    removeChild(scene, child);
  },
  insertInContainerBefore(container, child, beforeChild) {
    const scene = container.getState().scene.__r3f;
    if (!child || !beforeChild || !scene) return;
    insertBefore(scene, child, beforeChild);
  },
  getRootHostContext: () => NO_CONTEXT,
  getChildHostContext: () => NO_CONTEXT,
  commitUpdate(instance, type, oldProps, newProps, fiber) {
    var _newProps$args, _oldProps$args, _newProps$args2;
    validateInstance(type, newProps);
    let reconstruct = false;
    if (instance.type === "primitive" && oldProps.object !== newProps.object) reconstruct = true;
    else if (((_newProps$args = newProps.args) == null ? void 0 : _newProps$args.length) !== ((_oldProps$args = oldProps.args) == null ? void 0 : _oldProps$args.length)) reconstruct = true;
    else if ((_newProps$args2 = newProps.args) != null && _newProps$args2.some((value, index) => {
      var _oldProps$args2;
      return value !== ((_oldProps$args2 = oldProps.args) == null ? void 0 : _oldProps$args2[index]);
    })) reconstruct = true;
    if (reconstruct) {
      reconstructed.push([instance, {
        ...newProps
      }, fiber]);
    } else {
      const changedProps = diffProps(instance, newProps);
      if (Object.keys(changedProps).length) {
        Object.assign(instance.props, changedProps);
        applyProps(instance.object, changedProps);
      }
    }
    const isTailSibling = fiber.sibling === null || (fiber.flags & Update) === NoFlags;
    if (isTailSibling) swapInstances();
  },
  finalizeInitialChildren: () => false,
  commitMount() {
  },
  getPublicInstance: (instance) => instance == null ? void 0 : instance.object,
  prepareForCommit: () => null,
  preparePortalMount: (container) => prepare(container.getState().scene, container, "", {}),
  resetAfterCommit: () => {
  },
  shouldSetTextContent: () => false,
  clearContainer: () => false,
  hideInstance,
  unhideInstance,
  createTextInstance: handleTextInstance,
  hideTextInstance: handleTextInstance,
  unhideTextInstance: handleTextInstance,
  scheduleTimeout: typeof setTimeout === "function" ? setTimeout : void 0,
  cancelTimeout: typeof clearTimeout === "function" ? clearTimeout : void 0,
  noTimeout: -1,
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur() {
  },
  afterActiveInstanceBlur() {
  },
  detachDeletedInstance() {
  },
  prepareScopeUpdate() {
  },
  getInstanceFromScope: () => null,
  shouldAttemptEagerTransition: () => false,
  trackSchedulerEvent: () => {
  },
  resolveEventType: () => null,
  resolveEventTimeStamp: () => -1.1,
  requestPostPaintCallback() {
  },
  maySuspendCommit: () => false,
  preloadInstance: () => true,
  // true indicates already loaded
  suspendInstance() {
  },
  waitForCommitToBeReady: () => null,
  NotPendingTransition: null,
  // The reconciler types use the internal ReactContext with all the hidden properties
  // so we have to cast from the public React.Context type
  HostTransitionContext: /* @__PURE__ */ reactExports.createContext(null),
  setCurrentUpdatePriority(newPriority) {
    currentUpdatePriority = newPriority;
  },
  getCurrentUpdatePriority() {
    return currentUpdatePriority;
  },
  resolveUpdatePriority() {
    var _window$event;
    if (currentUpdatePriority !== NoEventPriority) return currentUpdatePriority;
    switch (typeof window !== "undefined" && ((_window$event = window.event) == null ? void 0 : _window$event.type)) {
      case "click":
      case "contextmenu":
      case "dblclick":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
        return e;
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerenter":
      case "pointerleave":
      case "wheel":
        return o;
      default:
        return r;
    }
  },
  resetFormInstance() {
  },
  // @ts-ignore DefinitelyTyped is not up to date
  rendererPackageName: "@react-three/fiber",
  rendererVersion: packageData.version,
  // https://github.com/facebook/react/pull/31975
  // https://github.com/facebook/react/pull/31999
  applyViewTransitionName(_instance, _name, _className) {
  },
  restoreViewTransitionName(_instance, _props) {
  },
  cancelViewTransitionName(_instance, _name, _props) {
  },
  cancelRootViewTransitionName(_rootContainer) {
  },
  restoreRootViewTransitionName(_rootContainer) {
  },
  InstanceMeasurement: null,
  measureInstance: (_instance) => null,
  wasInstanceInViewport: (_measurement) => true,
  hasInstanceChanged: (_oldMeasurement, _newMeasurement) => false,
  hasInstanceAffectedParent: (_oldMeasurement, _newMeasurement) => false,
  // https://github.com/facebook/react/pull/32002
  // https://github.com/facebook/react/pull/34486
  suspendOnActiveViewTransition(_state, _container) {
  },
  // https://github.com/facebook/react/pull/32451
  // https://github.com/facebook/react/pull/32760
  startGestureTransition: () => null,
  startViewTransition: () => null,
  stopViewTransition(_transition) {
  },
  // https://github.com/facebook/react/pull/32038
  createViewTransitionInstance: (_name) => null,
  // https://github.com/facebook/react/pull/32379
  // https://github.com/facebook/react/pull/32786
  getCurrentGestureOffset(_provider) {
    throw new Error("startGestureTransition is not yet supported in react-three-fiber.");
  },
  // https://github.com/facebook/react/pull/32500
  cloneMutableInstance(instance, _keepChildren) {
    return instance;
  },
  cloneMutableTextInstance(textInstance) {
    return textInstance;
  },
  cloneRootViewTransitionContainer(_rootContainer) {
    throw new Error("Not implemented.");
  },
  removeRootViewTransitionClone(_rootContainer, _clone) {
    throw new Error("Not implemented.");
  },
  // https://github.com/facebook/react/pull/32465
  createFragmentInstance: (_fiber) => null,
  updateFragmentInstanceFiber(_fiber, _instance) {
  },
  commitNewChildToFragmentInstance(_child, _fragmentInstance) {
  },
  deleteChildFromFragmentInstance(_child, _fragmentInstance) {
  },
  // https://github.com/facebook/react/pull/32653
  measureClonedInstance: (_instance) => null,
  // https://github.com/facebook/react/pull/32819
  maySuspendCommitOnUpdate: (_type, _oldProps, _newProps) => false,
  maySuspendCommitInSyncRender: (_type, _props) => false,
  // https://github.com/facebook/react/pull/34486
  startSuspendingCommit: () => null,
  // https://github.com/facebook/react/pull/34522
  getSuspendedCommitReason: (_state, _rootContainer) => null
});
const _roots = /* @__PURE__ */ new Map();
const shallowLoose = {
  objects: "shallow",
  strict: false
};
function computeInitialSize(canvas, size) {
  if (!size && typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement && canvas.parentElement) {
    const {
      width,
      height,
      top,
      left
    } = canvas.parentElement.getBoundingClientRect();
    return {
      width,
      height,
      top,
      left
    };
  } else if (!size && typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) {
    return {
      width: canvas.width,
      height: canvas.height,
      top: 0,
      left: 0
    };
  }
  return {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    ...size
  };
}
function createRoot(canvas) {
  const prevRoot = _roots.get(canvas);
  const prevFiber = prevRoot == null ? void 0 : prevRoot.fiber;
  const prevStore = prevRoot == null ? void 0 : prevRoot.store;
  if (prevRoot) console.warn("R3F.createRoot should only be called once!");
  const logRecoverableError = typeof reportError === "function" ? (
    // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError
  ) : (
    // In older browsers and test environments, fallback to console.error.
    console.error
  );
  const store = prevStore || createStore(invalidate, advance);
  const fiber = prevFiber || reconciler.createContainer(
    store,
    // container
    t,
    // tag
    null,
    // hydration callbacks
    false,
    // isStrictMode
    null,
    // concurrentUpdatesByDefaultOverride
    "",
    // identifierPrefix
    logRecoverableError,
    // onUncaughtError
    logRecoverableError,
    // onCaughtError
    logRecoverableError,
    // onRecoverableError
    null
    // transitionCallbacks
  );
  if (!prevRoot) _roots.set(canvas, {
    fiber,
    store
  });
  let onCreated;
  let lastCamera;
  let configured = false;
  let pending = null;
  return {
    async configure(props = {}) {
      let resolve2;
      pending = new Promise((_resolve) => resolve2 = _resolve);
      let {
        gl: glConfig,
        size: propsSize,
        scene: sceneOptions,
        events,
        onCreated: onCreatedCallback,
        shadows = false,
        linear = false,
        flat = false,
        legacy = false,
        orthographic = false,
        frameloop = "always",
        dpr = [1, 2],
        performance: performance2,
        raycaster: raycastOptions,
        camera: cameraOptions,
        onPointerMissed
      } = props;
      let state2 = store.getState();
      let gl = state2.gl;
      if (!state2.gl) {
        const defaultProps = {
          canvas,
          powerPreference: "high-performance",
          antialias: true,
          alpha: true
        };
        const customRenderer = typeof glConfig === "function" ? await glConfig(defaultProps) : glConfig;
        if (isRenderer(customRenderer)) {
          gl = customRenderer;
        } else {
          gl = new WebGLRenderer({
            ...defaultProps,
            ...glConfig
          });
        }
        state2.set({
          gl
        });
      }
      let raycaster = state2.raycaster;
      if (!raycaster) state2.set({
        raycaster: raycaster = new Raycaster()
      });
      const {
        params,
        ...options
      } = raycastOptions || {};
      if (!is.equ(options, raycaster, shallowLoose)) applyProps(raycaster, {
        ...options
      });
      if (!is.equ(params, raycaster.params, shallowLoose)) applyProps(raycaster, {
        params: {
          ...raycaster.params,
          ...params
        }
      });
      if (!state2.camera || state2.camera === lastCamera && !is.equ(lastCamera, cameraOptions, shallowLoose)) {
        lastCamera = cameraOptions;
        const isCamera = cameraOptions == null ? void 0 : cameraOptions.isCamera;
        const camera = isCamera ? cameraOptions : orthographic ? new OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new PerspectiveCamera(75, 0, 0.1, 1e3);
        if (!isCamera) {
          camera.position.z = 5;
          if (cameraOptions) {
            applyProps(camera, cameraOptions);
            if (!camera.manual) {
              if ("aspect" in cameraOptions || "left" in cameraOptions || "right" in cameraOptions || "bottom" in cameraOptions || "top" in cameraOptions) {
                camera.manual = true;
                camera.updateProjectionMatrix();
              }
            }
          }
          if (!state2.camera && !(cameraOptions != null && cameraOptions.rotation)) camera.lookAt(0, 0, 0);
        }
        state2.set({
          camera
        });
        raycaster.camera = camera;
      }
      if (!state2.scene) {
        let scene;
        if (sceneOptions != null && sceneOptions.isScene) {
          scene = sceneOptions;
          prepare(scene, store, "", {});
        } else {
          scene = new Scene();
          prepare(scene, store, "", {});
          if (sceneOptions) applyProps(scene, sceneOptions);
        }
        state2.set({
          scene
        });
      }
      if (events && !state2.events.handlers) state2.set({
        events: events(store)
      });
      const size = computeInitialSize(canvas, propsSize);
      if (!is.equ(size, state2.size, shallowLoose)) {
        state2.setSize(size.width, size.height, size.top, size.left);
      }
      if (dpr && state2.viewport.dpr !== calculateDpr(dpr)) state2.setDpr(dpr);
      if (state2.frameloop !== frameloop) state2.setFrameloop(frameloop);
      if (!state2.onPointerMissed) state2.set({
        onPointerMissed
      });
      if (performance2 && !is.equ(performance2, state2.performance, shallowLoose)) state2.set((state3) => ({
        performance: {
          ...state3.performance,
          ...performance2
        }
      }));
      if (!state2.xr) {
        var _gl$xr;
        const handleXRFrame = (timestamp, frame2) => {
          const state3 = store.getState();
          if (state3.frameloop === "never") return;
          advance(timestamp, true, state3, frame2);
        };
        const handleSessionChange = () => {
          const state3 = store.getState();
          state3.gl.xr.enabled = state3.gl.xr.isPresenting;
          state3.gl.xr.setAnimationLoop(state3.gl.xr.isPresenting ? handleXRFrame : null);
          if (!state3.gl.xr.isPresenting) invalidate(state3);
        };
        const xr = {
          connect() {
            const gl2 = store.getState().gl;
            gl2.xr.addEventListener("sessionstart", handleSessionChange);
            gl2.xr.addEventListener("sessionend", handleSessionChange);
          },
          disconnect() {
            const gl2 = store.getState().gl;
            gl2.xr.removeEventListener("sessionstart", handleSessionChange);
            gl2.xr.removeEventListener("sessionend", handleSessionChange);
          }
        };
        if (typeof ((_gl$xr = gl.xr) == null ? void 0 : _gl$xr.addEventListener) === "function") xr.connect();
        state2.set({
          xr
        });
      }
      if (gl.shadowMap) {
        const oldEnabled = gl.shadowMap.enabled;
        const oldType = gl.shadowMap.type;
        gl.shadowMap.enabled = !!shadows;
        if (is.boo(shadows)) {
          gl.shadowMap.type = PCFSoftShadowMap;
        } else if (is.str(shadows)) {
          var _types$shadows;
          const types = {
            basic: BasicShadowMap,
            percentage: PCFShadowMap,
            soft: PCFSoftShadowMap,
            variance: VSMShadowMap
          };
          gl.shadowMap.type = (_types$shadows = types[shadows]) != null ? _types$shadows : PCFSoftShadowMap;
        } else if (is.obj(shadows)) {
          Object.assign(gl.shadowMap, shadows);
        }
        if (oldEnabled !== gl.shadowMap.enabled || oldType !== gl.shadowMap.type) gl.shadowMap.needsUpdate = true;
      }
      ColorManagement.enabled = !legacy;
      if (!configured) {
        gl.outputColorSpace = linear ? LinearSRGBColorSpace$1 : SRGBColorSpace$1;
        gl.toneMapping = flat ? NoToneMapping : ACESFilmicToneMapping;
      }
      if (state2.legacy !== legacy) state2.set(() => ({
        legacy
      }));
      if (state2.linear !== linear) state2.set(() => ({
        linear
      }));
      if (state2.flat !== flat) state2.set(() => ({
        flat
      }));
      if (glConfig && !is.fun(glConfig) && !isRenderer(glConfig) && !is.equ(glConfig, gl, shallowLoose)) applyProps(gl, glConfig);
      onCreated = onCreatedCallback;
      configured = true;
      resolve2();
      return this;
    },
    render(children) {
      if (!configured && !pending) this.configure();
      pending.then(() => {
        reconciler.updateContainer(/* @__PURE__ */ jsxRuntimeExports.jsx(Provider, {
          store,
          children,
          onCreated,
          rootElement: canvas
        }), fiber, null, () => void 0);
      });
      return store;
    },
    unmount() {
      unmountComponentAtNode(canvas);
    }
  };
}
function Provider({
  store,
  children,
  onCreated,
  rootElement
}) {
  useIsomorphicLayoutEffect(() => {
    const state2 = store.getState();
    state2.set((state3) => ({
      internal: {
        ...state3.internal,
        active: true
      }
    }));
    if (onCreated) onCreated(state2);
    if (!store.getState().events.connected) state2.events.connect == null ? void 0 : state2.events.connect(rootElement);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(context.Provider, {
    value: store,
    children
  });
}
function unmountComponentAtNode(canvas, callback) {
  const root = _roots.get(canvas);
  const fiber = root == null ? void 0 : root.fiber;
  if (fiber) {
    const state2 = root == null ? void 0 : root.store.getState();
    if (state2) state2.internal.active = false;
    reconciler.updateContainer(null, fiber, null, () => {
      if (state2) {
        setTimeout(() => {
          try {
            var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
            state2.events.disconnect == null ? void 0 : state2.events.disconnect();
            (_state$gl = state2.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
            (_state$gl2 = state2.gl) == null ? void 0 : _state$gl2.forceContextLoss == null ? void 0 : _state$gl2.forceContextLoss();
            if ((_state$gl3 = state2.gl) != null && _state$gl3.xr) state2.xr.disconnect();
            dispose(state2.scene);
            _roots.delete(canvas);
            if (callback) ;
          } catch (e2) {
          }
        }, 500);
      }
    });
  }
}
function createPortal(children, container, state2) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, {
    children,
    container,
    state: state2
  });
}
function Portal({
  state: state2 = {},
  children,
  container
}) {
  const {
    events,
    size,
    ...rest
  } = state2;
  const previousRoot = useStore();
  const [raycaster] = reactExports.useState(() => new Raycaster());
  const [pointer] = reactExports.useState(() => new Vector2());
  const inject = useMutableCallback((rootState, injectState) => {
    let viewport = void 0;
    if (injectState.camera && size) {
      const camera = injectState.camera;
      viewport = rootState.viewport.getCurrentViewport(camera, new Vector3(), size);
      if (camera !== rootState.camera) updateCamera(camera, size);
    }
    return {
      // The intersect consists of the previous root state
      ...rootState,
      ...injectState,
      // Portals have their own scene, which forms the root, a raycaster and a pointer
      scene: container,
      raycaster,
      pointer,
      mouse: pointer,
      // Their previous root is the layer before it
      previousRoot,
      // Events, size and viewport can be overridden by the inject layer
      events: {
        ...rootState.events,
        ...injectState.events,
        ...events
      },
      size: {
        ...rootState.size,
        ...size
      },
      viewport: {
        ...rootState.viewport,
        ...viewport
      },
      // Layers are allowed to override events
      setEvents: (events2) => injectState.set((state3) => ({
        ...state3,
        events: {
          ...state3.events,
          ...events2
        }
      }))
    };
  });
  const usePortalStore = reactExports.useMemo(() => {
    const store = createWithEqualityFn((set, get) => ({
      ...rest,
      set,
      get
    }));
    const onMutate = (prev) => store.setState((state3) => inject.current(prev, state3));
    onMutate(previousRoot.getState());
    previousRoot.subscribe(onMutate);
    return store;
  }, [previousRoot, container]);
  return (
    // @ts-ignore, reconciler types are not maintained
    /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: reconciler.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(context.Provider, {
        value: usePortalStore,
        children
      }), usePortalStore, null)
    })
  );
}
const globalEffects = /* @__PURE__ */ new Set();
const globalAfterEffects = /* @__PURE__ */ new Set();
const globalTailEffects = /* @__PURE__ */ new Set();
function run(effects, timestamp) {
  if (!effects.size) return;
  for (const {
    callback
  } of effects.values()) {
    callback(timestamp);
  }
}
function flushGlobalEffects(type, timestamp) {
  switch (type) {
    case "before":
      return run(globalEffects, timestamp);
    case "after":
      return run(globalAfterEffects, timestamp);
    case "tail":
      return run(globalTailEffects, timestamp);
  }
}
let subscribers;
let subscription;
function update(timestamp, state2, frame2) {
  let delta = state2.clock.getDelta();
  if (state2.frameloop === "never" && typeof timestamp === "number") {
    delta = timestamp - state2.clock.elapsedTime;
    state2.clock.oldTime = state2.clock.elapsedTime;
    state2.clock.elapsedTime = timestamp;
  }
  subscribers = state2.internal.subscribers;
  for (let i2 = 0; i2 < subscribers.length; i2++) {
    subscription = subscribers[i2];
    subscription.ref.current(subscription.store.getState(), delta, frame2);
  }
  if (!state2.internal.priority && state2.gl.render) state2.gl.render(state2.scene, state2.camera);
  state2.internal.frames = Math.max(0, state2.internal.frames - 1);
  return state2.frameloop === "always" ? 1 : state2.internal.frames;
}
let running = false;
let useFrameInProgress = false;
let repeat;
let frame;
let state;
function loop(timestamp) {
  frame = requestAnimationFrame(loop);
  running = true;
  repeat = 0;
  flushGlobalEffects("before", timestamp);
  useFrameInProgress = true;
  for (const root of _roots.values()) {
    var _state$gl$xr;
    state = root.store.getState();
    if (state.internal.active && (state.frameloop === "always" || state.internal.frames > 0) && !((_state$gl$xr = state.gl.xr) != null && _state$gl$xr.isPresenting)) {
      repeat += update(timestamp, state);
    }
  }
  useFrameInProgress = false;
  flushGlobalEffects("after", timestamp);
  if (repeat === 0) {
    flushGlobalEffects("tail", timestamp);
    running = false;
    return cancelAnimationFrame(frame);
  }
}
function invalidate(state2, frames = 1) {
  var _state$gl$xr2;
  if (!state2) return _roots.forEach((root) => invalidate(root.store.getState(), frames));
  if ((_state$gl$xr2 = state2.gl.xr) != null && _state$gl$xr2.isPresenting || !state2.internal.active || state2.frameloop === "never") return;
  if (frames > 1) {
    state2.internal.frames = Math.min(60, state2.internal.frames + frames);
  } else {
    if (useFrameInProgress) {
      state2.internal.frames = 2;
    } else {
      state2.internal.frames = 1;
    }
  }
  if (!running) {
    running = true;
    requestAnimationFrame(loop);
  }
}
function advance(timestamp, runGlobalEffects = true, state2, frame2) {
  if (runGlobalEffects) flushGlobalEffects("before", timestamp);
  if (!state2) for (const root of _roots.values()) update(timestamp, root.store.getState());
  else update(timestamp, state2, frame2);
  if (runGlobalEffects) flushGlobalEffects("after", timestamp);
}
const DOM_EVENTS = {
  onClick: ["click", false],
  onContextMenu: ["contextmenu", false],
  onDoubleClick: ["dblclick", false],
  onWheel: ["wheel", true],
  onPointerDown: ["pointerdown", true],
  onPointerUp: ["pointerup", true],
  onPointerLeave: ["pointerleave", true],
  onPointerMove: ["pointermove", true],
  onPointerCancel: ["pointercancel", true],
  onLostPointerCapture: ["lostpointercapture", true]
};
function createPointerEvents(store) {
  const {
    handlePointer
  } = createEvents(store);
  return {
    priority: 1,
    enabled: true,
    compute(event, state2, previous) {
      state2.pointer.set(event.offsetX / state2.size.width * 2 - 1, -(event.offsetY / state2.size.height) * 2 + 1);
      state2.raycaster.setFromCamera(state2.pointer, state2.camera);
    },
    connected: void 0,
    handlers: Object.keys(DOM_EVENTS).reduce((acc, key) => ({
      ...acc,
      [key]: handlePointer(key)
    }), {}),
    update: () => {
      var _internal$lastEvent;
      const {
        events,
        internal
      } = store.getState();
      if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
    },
    connect: (target) => {
      const {
        set,
        events
      } = store.getState();
      events.disconnect == null ? void 0 : events.disconnect();
      set((state2) => ({
        events: {
          ...state2.events,
          connected: target
        }
      }));
      if (events.handlers) {
        for (const name in events.handlers) {
          const event = events.handlers[name];
          const [eventName, passive] = DOM_EVENTS[name];
          target.addEventListener(eventName, event, {
            passive
          });
        }
      }
    },
    disconnect: () => {
      const {
        set,
        events
      } = store.getState();
      if (events.connected) {
        if (events.handlers) {
          for (const name in events.handlers) {
            const event = events.handlers[name];
            const [eventName] = DOM_EVENTS[name];
            events.connected.removeEventListener(eventName, event);
          }
        }
        set((state2) => ({
          events: {
            ...state2.events,
            connected: void 0
          }
        }));
      }
    }
  };
}
function g(n, t2) {
  let o2;
  return (...i) => {
    window.clearTimeout(o2), o2 = window.setTimeout(() => n(...i), t2);
  };
}
function j({ debounce: n, scroll: t2, polyfill: o2, offsetSize: i } = { debounce: 0, scroll: false, offsetSize: false }) {
  const a2 = o2 || (typeof window == "undefined" ? class {
  } : window.ResizeObserver);
  if (!a2) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [c2, h2] = reactExports.useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), e2 = reactExports.useRef({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: c2, orientationHandler: null }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = reactExports.useRef(false);
  reactExports.useEffect(() => (w.current = true, () => void (w.current = false)));
  const [z, m2, s] = reactExports.useMemo(() => {
    const r2 = () => {
      if (!e2.current.element) return;
      const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e2.current.element.getBoundingClientRect(), l2 = { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R };
      e2.current.element instanceof HTMLElement && i && (l2.height = e2.current.element.offsetHeight, l2.width = e2.current.element.offsetWidth), Object.freeze(l2), w.current && !D(e2.current.lastBounds, l2) && h2(e2.current.lastBounds = l2);
    };
    return [r2, f ? g(r2, f) : r2, d ? g(r2, d) : r2];
  }, [h2, i, d, f]);
  function v() {
    e2.current.scrollContainers && (e2.current.scrollContainers.forEach((r2) => r2.removeEventListener("scroll", s, true)), e2.current.scrollContainers = null), e2.current.resizeObserver && (e2.current.resizeObserver.disconnect(), e2.current.resizeObserver = null), e2.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e2.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e2.current.orientationHandler));
  }
  function b2() {
    e2.current.element && (e2.current.resizeObserver = new a2(s), e2.current.resizeObserver.observe(e2.current.element), t2 && e2.current.scrollContainers && e2.current.scrollContainers.forEach((r2) => r2.addEventListener("scroll", s, { capture: true, passive: true })), e2.current.orientationHandler = () => {
      s();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e2.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e2.current.orientationHandler));
  }
  const L = (r2) => {
    !r2 || r2 === e2.current.element || (v(), e2.current.element = r2, e2.current.scrollContainers = E(r2), b2());
  };
  return X(s, !!t2), W(m2), reactExports.useEffect(() => {
    v(), b2();
  }, [t2, s, m2]), reactExports.useEffect(() => v, []), [L, c2, z];
}
function W(n) {
  reactExports.useEffect(() => {
    const t2 = n;
    return window.addEventListener("resize", t2), () => void window.removeEventListener("resize", t2);
  }, [n]);
}
function X(n, t2) {
  reactExports.useEffect(() => {
    if (t2) {
      const o2 = n;
      return window.addEventListener("scroll", o2, { capture: true, passive: true }), () => void window.removeEventListener("scroll", o2, true);
    }
  }, [n, t2]);
}
function E(n) {
  const t2 = [];
  if (!n || n === document.body) return t2;
  const { overflow: o2, overflowX: i, overflowY: a2 } = window.getComputedStyle(n);
  return [o2, i, a2].some((c2) => c2 === "auto" || c2 === "scroll") && t2.push(n), [...t2, ...E(n.parentElement)];
}
const k = ["x", "y", "top", "bottom", "left", "right", "width", "height"], D = (n, t2) => k.every((o2) => n[o2] === t2[o2]);
function CanvasImpl({
  ref,
  children,
  fallback,
  resize,
  style,
  gl,
  events = createPointerEvents,
  eventSource,
  eventPrefix,
  shadows,
  linear,
  flat,
  legacy,
  orthographic,
  frameloop,
  dpr,
  performance,
  raycaster,
  camera,
  scene,
  onPointerMissed,
  onCreated,
  ...props
}) {
  reactExports.useMemo(() => extend(THREE), []);
  const Bridge = useBridge();
  const [containerRef, containerRect] = j({
    scroll: true,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...resize
  });
  const canvasRef = reactExports.useRef(null);
  const divRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => canvasRef.current);
  const handlePointerMissed = useMutableCallback(onPointerMissed);
  const [block, setBlock] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  if (block) throw block;
  if (error) throw error;
  const root = reactExports.useRef(null);
  useIsomorphicLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
      if (!root.current) root.current = createRoot(canvas);
      async function run2() {
        await root.current.configure({
          gl,
          scene,
          events,
          shadows,
          linear,
          flat,
          legacy,
          orthographic,
          frameloop,
          dpr,
          performance,
          raycaster,
          camera,
          size: containerRect,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...args) => handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
          onCreated: (state2) => {
            state2.events.connect == null ? void 0 : state2.events.connect(eventSource ? isRef$1(eventSource) ? eventSource.current : eventSource : divRef.current);
            if (eventPrefix) {
              state2.setEvents({
                compute: (event, state3) => {
                  const x = event[eventPrefix + "X"];
                  const y = event[eventPrefix + "Y"];
                  state3.pointer.set(x / state3.size.width * 2 - 1, -(y / state3.size.height) * 2 + 1);
                  state3.raycaster.setFromCamera(state3.pointer, state3.camera);
                }
              });
            }
            onCreated == null ? void 0 : onCreated(state2);
          }
        });
        root.current.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Bridge, {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {
            set: setError,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
              fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Block, {
                set: setBlock
              }),
              children: children != null ? children : null
            })
          })
        }));
      }
      run2();
    }
  });
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) return () => unmountComponentAtNode(canvas);
  }, []);
  const pointerEvents = eventSource ? "none" : "auto";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref: divRef,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents,
      ...style
    },
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref: containerRef,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", {
        ref: canvasRef,
        style: {
          display: "block"
        },
        children: fallback
      })
    })
  });
}
function Canvas(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(m, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CanvasImpl, {
      ...props
    })
  });
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n[r2] = t2[r2]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
const version = /* @__PURE__ */ (() => parseInt(REVISION.replace(/\D+/g, "")))();
function toTrianglesDrawMode(geometry, drawMode) {
  if (drawMode === TrianglesDrawMode) {
    console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.");
    return geometry;
  }
  if (drawMode === TriangleFanDrawMode || drawMode === TriangleStripDrawMode) {
    let index = geometry.getIndex();
    if (index === null) {
      const indices = [];
      const position = geometry.getAttribute("position");
      if (position !== void 0) {
        for (let i = 0; i < position.count; i++) {
          indices.push(i);
        }
        geometry.setIndex(indices);
        index = geometry.getIndex();
      } else {
        console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        );
        return geometry;
      }
    }
    const numberOfTriangles = index.count - 2;
    const newIndices = [];
    if (index) {
      if (drawMode === TriangleFanDrawMode) {
        for (let i = 1; i <= numberOfTriangles; i++) {
          newIndices.push(index.getX(0));
          newIndices.push(index.getX(i));
          newIndices.push(index.getX(i + 1));
        }
      } else {
        for (let i = 0; i < numberOfTriangles; i++) {
          if (i % 2 === 0) {
            newIndices.push(index.getX(i));
            newIndices.push(index.getX(i + 1));
            newIndices.push(index.getX(i + 2));
          } else {
            newIndices.push(index.getX(i + 2));
            newIndices.push(index.getX(i + 1));
            newIndices.push(index.getX(i));
          }
        }
      }
    }
    if (newIndices.length / 3 !== numberOfTriangles) {
      console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    }
    const newGeometry = geometry.clone();
    newGeometry.setIndex(newIndices);
    newGeometry.clearGroups();
    return newGeometry;
  } else {
    console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", drawMode);
    return geometry;
  }
}
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b2[i] = start += 1 << eb[i - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j2 = b2[i]; j2 < b2[i + 1]; ++j2) {
      r2[j2] = j2 - b2[i] << 5 | i;
    }
  }
  return [b2, r2];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0];
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
  var x = (i & 43690) >>> 1 | (i & 21845) << 1;
  x = (x & 52428) >>> 2 | (x & 13107) << 2;
  x = (x & 61680) >>> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var hMap = (function(cd, mb, r2) {
  var s = cd.length;
  var i = 0;
  var l2 = new u16(mb);
  for (; i < s; ++i)
    ++l2[cd[i] - 1];
  var le = new u16(mb);
  for (i = 0; i < mb; ++i) {
    le[i] = le[i - 1] + l2[i - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m2 = v | (1 << r_1) - 1; v <= m2; ++v) {
          co[rev[v] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
      }
    }
  }
  return co;
});
var flt = new u8(288);
for (var i = 0; i < 144; ++i)
  flt[i] = 8;
for (var i = 144; i < 256; ++i)
  flt[i] = 9;
for (var i = 256; i < 280; ++i)
  flt[i] = 7;
for (var i = 280; i < 288; ++i)
  flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
  fdt[i] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i = 1; i < a2.length; ++i) {
    if (a2[i] > m2)
      m2 = a2[i];
  }
  return m2;
};
var bits = function(d, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d[o2] | d[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d, p2) {
  var o2 = p2 / 8 | 0;
  return (d[o2] | d[o2 + 1] << 8 | d[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 / 8 | 0) + (p2 & 7 && 1);
};
var slc = function(v, s, e2) {
  if (e2 == null || e2 > v.length)
    e2 = v.length;
  var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e2 - s);
  n.set(v.subarray(s, e2));
  return n;
};
var inflt = function(dat, buf, st) {
  var sl = dat.length;
  if (!sl || st && !st.l && sl < 5)
    return buf || new u8(0);
  var noBuf = !buf || st;
  var noSt = !st || st.i;
  if (!st)
    st = {};
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      st.f = final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l2 = dat[s - 4] | dat[s - 3] << 8, t2 = s + l2;
        if (t2 > sl) {
          if (noSt)
            throw "unexpected EOF";
          break;
        }
        if (noBuf)
          cbuf(bt + l2);
        buf.set(dat.subarray(s, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s = r2 >>> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c2 = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        throw "invalid block type";
      if (pos > tbts) {
        if (noSt)
          throw "unexpected EOF";
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >>> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          throw "unexpected EOF";
        break;
      }
      if (!c2)
        throw "invalid length/literal";
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b2 = fleb[i];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i];
          pos += b2;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
        if (!d)
          throw "invalid distance";
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            throw "unexpected EOF";
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var zlv = function(d) {
  if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    throw "invalid zlib data";
  if (d[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
const isCubeTexture = (def) => def && def.isCubeTexture;
class GroundProjectedEnv extends Mesh {
  constructor(texture, options) {
    var _a2, _b2;
    const isCubeMap = isCubeTexture(texture);
    const w = (_b2 = isCubeMap ? (_a2 = texture.image[0]) == null ? void 0 : _a2.width : texture.image.width) != null ? _b2 : 1024;
    const cubeSize = w / 4;
    const _lodMax = Math.floor(Math.log2(cubeSize));
    const _cubeSize = Math.pow(2, _lodMax);
    const width = 3 * Math.max(_cubeSize, 16 * 7);
    const height = 4 * _cubeSize;
    const defines = [
      isCubeMap ? "#define ENVMAP_TYPE_CUBE" : "",
      `#define CUBEUV_TEXEL_WIDTH ${1 / width}`,
      `#define CUBEUV_TEXEL_HEIGHT ${1 / height}`,
      `#define CUBEUV_MAX_MIP ${_lodMax}.0`
    ];
    const vertexShader2 = (
      /* glsl */
      `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `
    );
    const fragmentShader2 = defines.join("\n") + /* glsl */
    `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `;
    const uniforms = {
      map: { value: texture },
      height: { value: (options == null ? void 0 : options.height) || 15 },
      radius: { value: (options == null ? void 0 : options.radius) || 100 }
    };
    const geometry = new IcosahedronGeometry(1, 16);
    const material = new ShaderMaterial({
      uniforms,
      fragmentShader: fragmentShader2,
      vertexShader: vertexShader2,
      side: DoubleSide
    });
    super(geometry, material);
  }
  set radius(radius) {
    this.material.uniforms.radius.value = radius;
  }
  get radius() {
    return this.material.uniforms.radius.value;
  }
  set height(height) {
    this.material.uniforms.height.value = height;
  }
  get height() {
    return this.material.uniforms.height.value;
  }
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, key + "", value);
  return value;
};
class EventDispatcher {
  constructor() {
    __publicField$1(this, "_listeners");
  }
  /**
   * Adds a listener to an event type.
   * @param type The type of event to listen to.
   * @param listener The function that gets called when the event is fired.
   */
  addEventListener(type, listener) {
    if (this._listeners === void 0)
      this._listeners = {};
    const listeners = this._listeners;
    if (listeners[type] === void 0) {
      listeners[type] = [];
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  }
  /**
      * Checks if listener is added to an event type.
      * @param type The type of event to listen to.
      * @param listener The function that gets called when the event is fired.
      */
  hasEventListener(type, listener) {
    if (this._listeners === void 0)
      return false;
    const listeners = this._listeners;
    return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
  }
  /**
      * Removes a listener from an event type.
      * @param type The type of the listener that gets removed.
      * @param listener The listener function that gets removed.
      */
  removeEventListener(type, listener) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  }
  /**
      * Fire an event type.
      * @param event The event that gets fired.
      */
  dispatchEvent(event) {
    if (this._listeners === void 0)
      return;
    const listeners = this._listeners;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i = 0, l2 = array.length; i < l2; i++) {
        array[i].call(this, event);
      }
      event.target = null;
    }
  }
}
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _ray = /* @__PURE__ */ new Ray();
const _plane = /* @__PURE__ */ new Plane();
const TILT_LIMIT = Math.cos(70 * (Math.PI / 180));
const moduloWrapAround = (offset, capacity) => (offset % capacity + capacity) % capacity;
let OrbitControls$1 = class OrbitControls extends EventDispatcher {
  constructor(object, domElement) {
    super();
    __publicField2(this, "object");
    __publicField2(this, "domElement");
    __publicField2(this, "enabled", true);
    __publicField2(this, "target", new Vector3());
    __publicField2(this, "minDistance", 0);
    __publicField2(this, "maxDistance", Infinity);
    __publicField2(this, "minZoom", 0);
    __publicField2(this, "maxZoom", Infinity);
    __publicField2(this, "minPolarAngle", 0);
    __publicField2(this, "maxPolarAngle", Math.PI);
    __publicField2(this, "minAzimuthAngle", -Infinity);
    __publicField2(this, "maxAzimuthAngle", Infinity);
    __publicField2(this, "enableDamping", false);
    __publicField2(this, "dampingFactor", 0.05);
    __publicField2(this, "enableZoom", true);
    __publicField2(this, "zoomSpeed", 1);
    __publicField2(this, "enableRotate", true);
    __publicField2(this, "rotateSpeed", 1);
    __publicField2(this, "enablePan", true);
    __publicField2(this, "panSpeed", 1);
    __publicField2(this, "screenSpacePanning", true);
    __publicField2(this, "keyPanSpeed", 7);
    __publicField2(this, "zoomToCursor", false);
    __publicField2(this, "autoRotate", false);
    __publicField2(this, "autoRotateSpeed", 2);
    __publicField2(this, "reverseOrbit", false);
    __publicField2(this, "reverseHorizontalOrbit", false);
    __publicField2(this, "reverseVerticalOrbit", false);
    __publicField2(this, "keys", { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" });
    __publicField2(this, "mouseButtons", {
      LEFT: MOUSE.ROTATE,
      MIDDLE: MOUSE.DOLLY,
      RIGHT: MOUSE.PAN
    });
    __publicField2(this, "touches", { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN });
    __publicField2(this, "target0");
    __publicField2(this, "position0");
    __publicField2(this, "zoom0");
    __publicField2(this, "_domElementKeyEvents", null);
    __publicField2(this, "getPolarAngle");
    __publicField2(this, "getAzimuthalAngle");
    __publicField2(this, "setPolarAngle");
    __publicField2(this, "setAzimuthalAngle");
    __publicField2(this, "getDistance");
    __publicField2(this, "getZoomScale");
    __publicField2(this, "listenToKeyEvents");
    __publicField2(this, "stopListenToKeyEvents");
    __publicField2(this, "saveState");
    __publicField2(this, "reset");
    __publicField2(this, "update");
    __publicField2(this, "connect");
    __publicField2(this, "dispose");
    __publicField2(this, "dollyIn");
    __publicField2(this, "dollyOut");
    __publicField2(this, "getScale");
    __publicField2(this, "setScale");
    this.object = object;
    this.domElement = domElement;
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;
    this.getPolarAngle = () => spherical.phi;
    this.getAzimuthalAngle = () => spherical.theta;
    this.setPolarAngle = (value) => {
      let phi = moduloWrapAround(value, 2 * Math.PI);
      let currentPhi = spherical.phi;
      if (currentPhi < 0)
        currentPhi += 2 * Math.PI;
      if (phi < 0)
        phi += 2 * Math.PI;
      let phiDist = Math.abs(phi - currentPhi);
      if (2 * Math.PI - phiDist < phiDist) {
        if (phi < currentPhi) {
          phi += 2 * Math.PI;
        } else {
          currentPhi += 2 * Math.PI;
        }
      }
      sphericalDelta.phi = phi - currentPhi;
      scope.update();
    };
    this.setAzimuthalAngle = (value) => {
      let theta = moduloWrapAround(value, 2 * Math.PI);
      let currentTheta = spherical.theta;
      if (currentTheta < 0)
        currentTheta += 2 * Math.PI;
      if (theta < 0)
        theta += 2 * Math.PI;
      let thetaDist = Math.abs(theta - currentTheta);
      if (2 * Math.PI - thetaDist < thetaDist) {
        if (theta < currentTheta) {
          theta += 2 * Math.PI;
        } else {
          currentTheta += 2 * Math.PI;
        }
      }
      sphericalDelta.theta = theta - currentTheta;
      scope.update();
    };
    this.getDistance = () => scope.object.position.distanceTo(scope.target);
    this.listenToKeyEvents = (domElement2) => {
      domElement2.addEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = domElement2;
    };
    this.stopListenToKeyEvents = () => {
      this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = null;
    };
    this.saveState = () => {
      scope.target0.copy(scope.target);
      scope.position0.copy(scope.object.position);
      scope.zoom0 = scope.object.zoom;
    };
    this.reset = () => {
      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);
      scope.object.zoom = scope.zoom0;
      scope.object.updateProjectionMatrix();
      scope.dispatchEvent(changeEvent);
      scope.update();
      state2 = STATE.NONE;
    };
    this.update = (() => {
      const offset = new Vector3();
      const up = new Vector3(0, 1, 0);
      const quat = new Quaternion().setFromUnitVectors(object.up, up);
      const quatInverse = quat.clone().invert();
      const lastPosition = new Vector3();
      const lastQuaternion = new Quaternion();
      const twoPI = 2 * Math.PI;
      return function update2() {
        const position = scope.object.position;
        quat.setFromUnitVectors(object.up, up);
        quatInverse.copy(quat).invert();
        offset.copy(position).sub(scope.target);
        offset.applyQuaternion(quat);
        spherical.setFromVector3(offset);
        if (scope.autoRotate && state2 === STATE.NONE) {
          rotateLeft(getAutoRotationAngle());
        }
        if (scope.enableDamping) {
          spherical.theta += sphericalDelta.theta * scope.dampingFactor;
          spherical.phi += sphericalDelta.phi * scope.dampingFactor;
        } else {
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
        }
        let min = scope.minAzimuthAngle;
        let max2 = scope.maxAzimuthAngle;
        if (isFinite(min) && isFinite(max2)) {
          if (min < -Math.PI)
            min += twoPI;
          else if (min > Math.PI)
            min -= twoPI;
          if (max2 < -Math.PI)
            max2 += twoPI;
          else if (max2 > Math.PI)
            max2 -= twoPI;
          if (min <= max2) {
            spherical.theta = Math.max(min, Math.min(max2, spherical.theta));
          } else {
            spherical.theta = spherical.theta > (min + max2) / 2 ? Math.max(min, spherical.theta) : Math.min(max2, spherical.theta);
          }
        }
        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
        spherical.makeSafe();
        if (scope.enableDamping === true) {
          scope.target.addScaledVector(panOffset, scope.dampingFactor);
        } else {
          scope.target.add(panOffset);
        }
        if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) {
          spherical.radius = clampDistance(spherical.radius);
        } else {
          spherical.radius = clampDistance(spherical.radius * scale);
        }
        offset.setFromSpherical(spherical);
        offset.applyQuaternion(quatInverse);
        position.copy(scope.target).add(offset);
        if (!scope.object.matrixAutoUpdate)
          scope.object.updateMatrix();
        scope.object.lookAt(scope.target);
        if (scope.enableDamping === true) {
          sphericalDelta.theta *= 1 - scope.dampingFactor;
          sphericalDelta.phi *= 1 - scope.dampingFactor;
          panOffset.multiplyScalar(1 - scope.dampingFactor);
        } else {
          sphericalDelta.set(0, 0, 0);
          panOffset.set(0, 0, 0);
        }
        let zoomChanged = false;
        if (scope.zoomToCursor && performCursorZoom) {
          let newRadius = null;
          if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
            const prevRadius = offset.length();
            newRadius = clampDistance(prevRadius * scale);
            const radiusDelta = prevRadius - newRadius;
            scope.object.position.addScaledVector(dollyDirection, radiusDelta);
            scope.object.updateMatrixWorld();
          } else if (scope.object.isOrthographicCamera) {
            const mouseBefore = new Vector3(mouse.x, mouse.y, 0);
            mouseBefore.unproject(scope.object);
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
            scope.object.updateProjectionMatrix();
            zoomChanged = true;
            const mouseAfter = new Vector3(mouse.x, mouse.y, 0);
            mouseAfter.unproject(scope.object);
            scope.object.position.sub(mouseAfter).add(mouseBefore);
            scope.object.updateMatrixWorld();
            newRadius = offset.length();
          } else {
            console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
            scope.zoomToCursor = false;
          }
          if (newRadius !== null) {
            if (scope.screenSpacePanning) {
              scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
            } else {
              _ray.origin.copy(scope.object.position);
              _ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
              if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) {
                object.lookAt(scope.target);
              } else {
                _plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
                _ray.intersectPlane(_plane, scope.target);
              }
            }
          }
        } else if (scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
          zoomChanged = scale !== 1;
          if (zoomChanged) {
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
            scope.object.updateProjectionMatrix();
          }
        }
        scale = 1;
        performCursorZoom = false;
        if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
          scope.dispatchEvent(changeEvent);
          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          zoomChanged = false;
          return true;
        }
        return false;
      };
    })();
    this.connect = (domElement2) => {
      scope.domElement = domElement2;
      scope.domElement.style.touchAction = "none";
      scope.domElement.addEventListener("contextmenu", onContextMenu);
      scope.domElement.addEventListener("pointerdown", onPointerDown);
      scope.domElement.addEventListener("pointercancel", onPointerUp);
      scope.domElement.addEventListener("wheel", onMouseWheel);
    };
    this.dispose = () => {
      var _a2, _b2, _c, _d, _e, _f;
      if (scope.domElement) {
        scope.domElement.style.touchAction = "auto";
      }
      (_a2 = scope.domElement) == null ? void 0 : _a2.removeEventListener("contextmenu", onContextMenu);
      (_b2 = scope.domElement) == null ? void 0 : _b2.removeEventListener("pointerdown", onPointerDown);
      (_c = scope.domElement) == null ? void 0 : _c.removeEventListener("pointercancel", onPointerUp);
      (_d = scope.domElement) == null ? void 0 : _d.removeEventListener("wheel", onMouseWheel);
      (_e = scope.domElement) == null ? void 0 : _e.ownerDocument.removeEventListener("pointermove", onPointerMove);
      (_f = scope.domElement) == null ? void 0 : _f.ownerDocument.removeEventListener("pointerup", onPointerUp);
      if (scope._domElementKeyEvents !== null) {
        scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
      }
    };
    const scope = this;
    const changeEvent = { type: "change" };
    const startEvent = { type: "start" };
    const endEvent = { type: "end" };
    const STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let state2 = STATE.NONE;
    const EPS = 1e-6;
    const spherical = new Spherical();
    const sphericalDelta = new Spherical();
    let scale = 1;
    const panOffset = new Vector3();
    const rotateStart = new Vector2();
    const rotateEnd = new Vector2();
    const rotateDelta = new Vector2();
    const panStart = new Vector2();
    const panEnd = new Vector2();
    const panDelta = new Vector2();
    const dollyStart = new Vector2();
    const dollyEnd = new Vector2();
    const dollyDelta = new Vector2();
    const dollyDirection = new Vector3();
    const mouse = new Vector2();
    let performCursorZoom = false;
    const pointers = [];
    const pointerPositions = {};
    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }
    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }
    function rotateLeft(angle) {
      if (scope.reverseOrbit || scope.reverseHorizontalOrbit) {
        sphericalDelta.theta += angle;
      } else {
        sphericalDelta.theta -= angle;
      }
    }
    function rotateUp(angle) {
      if (scope.reverseOrbit || scope.reverseVerticalOrbit) {
        sphericalDelta.phi += angle;
      } else {
        sphericalDelta.phi -= angle;
      }
    }
    const panLeft = (() => {
      const v = new Vector3();
      return function panLeft2(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0);
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    })();
    const panUp = (() => {
      const v = new Vector3();
      return function panUp2(distance, objectMatrix) {
        if (scope.screenSpacePanning === true) {
          v.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.crossVectors(scope.object.up, v);
        }
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    })();
    const pan = (() => {
      const offset = new Vector3();
      return function pan2(deltaX, deltaY) {
        const element = scope.domElement;
        if (element && scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
          const position = scope.object.position;
          offset.copy(position).sub(scope.target);
          let targetDistance = offset.length();
          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
          panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        } else if (element && scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
          panLeft(
            deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth,
            scope.object.matrix
          );
          panUp(
            deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight,
            scope.object.matrix
          );
        } else {
          console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
          scope.enablePan = false;
        }
      };
    })();
    function setScale(newScale) {
      if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera || scope.object instanceof OrthographicCamera && scope.object.isOrthographicCamera) {
        scale = newScale;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        scope.enableZoom = false;
      }
    }
    function dollyOut(dollyScale) {
      setScale(scale / dollyScale);
    }
    function dollyIn(dollyScale) {
      setScale(scale * dollyScale);
    }
    function updateMouseParameters(event) {
      if (!scope.zoomToCursor || !scope.domElement) {
        return;
      }
      performCursorZoom = true;
      const rect = scope.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const w = rect.width;
      const h2 = rect.height;
      mouse.x = x / w * 2 - 1;
      mouse.y = -(y / h2) * 2 + 1;
      dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
    }
    function clampDistance(dist) {
      return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
    }
    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownDolly(event) {
      updateMouseParameters(event);
      dollyStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }
    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }
      rotateStart.copy(rotateEnd);
      scope.update();
    }
    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY);
      dollyDelta.subVectors(dollyEnd, dollyStart);
      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale());
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale());
      }
      dollyStart.copy(dollyEnd);
      scope.update();
    }
    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
      scope.update();
    }
    function handleMouseWheel(event) {
      updateMouseParameters(event);
      if (event.deltaY < 0) {
        dollyIn(getZoomScale());
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale());
      }
      scope.update();
    }
    function handleKeyDown(event) {
      let needsUpdate = false;
      switch (event.code) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
      }
      if (needsUpdate) {
        event.preventDefault();
        scope.update();
      }
    }
    function handleTouchStartRotate() {
      if (pointers.length == 1) {
        rotateStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        rotateStart.set(x, y);
      }
    }
    function handleTouchStartPan() {
      if (pointers.length == 1) {
        panStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        panStart.set(x, y);
      }
    }
    function handleTouchStartDolly() {
      const dx = pointers[0].pageX - pointers[1].pageX;
      const dy = pointers[0].pageY - pointers[1].pageY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }
    function handleTouchStartDollyPan() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enablePan)
        handleTouchStartPan();
    }
    function handleTouchStartDollyRotate() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enableRotate)
        handleTouchStartRotate();
    }
    function handleTouchMoveRotate(event) {
      if (pointers.length == 1) {
        rotateEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        rotateEnd.set(x, y);
      }
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }
      rotateStart.copy(rotateEnd);
    }
    function handleTouchMovePan(event) {
      if (pointers.length == 1) {
        panEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x = 0.5 * (event.pageX + position.x);
        const y = 0.5 * (event.pageY + position.y);
        panEnd.set(x, y);
      }
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }
    function handleTouchMoveDolly(event) {
      const position = getSecondPointerPosition(event);
      const dx = event.pageX - position.x;
      const dy = event.pageY - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyOut(dollyDelta.y);
      dollyStart.copy(dollyEnd);
    }
    function handleTouchMoveDollyPan(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enablePan)
        handleTouchMovePan(event);
    }
    function handleTouchMoveDollyRotate(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enableRotate)
        handleTouchMoveRotate(event);
    }
    function onPointerDown(event) {
      var _a2, _b2;
      if (scope.enabled === false)
        return;
      if (pointers.length === 0) {
        (_a2 = scope.domElement) == null ? void 0 : _a2.ownerDocument.addEventListener("pointermove", onPointerMove);
        (_b2 = scope.domElement) == null ? void 0 : _b2.ownerDocument.addEventListener("pointerup", onPointerUp);
      }
      addPointer(event);
      if (event.pointerType === "touch") {
        onTouchStart(event);
      } else {
        onMouseDown(event);
      }
    }
    function onPointerMove(event) {
      if (scope.enabled === false)
        return;
      if (event.pointerType === "touch") {
        onTouchMove(event);
      } else {
        onMouseMove(event);
      }
    }
    function onPointerUp(event) {
      var _a2, _b2, _c;
      removePointer(event);
      if (pointers.length === 0) {
        (_a2 = scope.domElement) == null ? void 0 : _a2.releasePointerCapture(event.pointerId);
        (_b2 = scope.domElement) == null ? void 0 : _b2.ownerDocument.removeEventListener("pointermove", onPointerMove);
        (_c = scope.domElement) == null ? void 0 : _c.ownerDocument.removeEventListener("pointerup", onPointerUp);
      }
      scope.dispatchEvent(endEvent);
      state2 = STATE.NONE;
    }
    function onMouseDown(event) {
      let mouseAction;
      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;
        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;
        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;
        default:
          mouseAction = -1;
      }
      switch (mouseAction) {
        case MOUSE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseDownDolly(event);
          state2 = STATE.DOLLY;
          break;
        case MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state2 = STATE.PAN;
          } else {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state2 = STATE.ROTATE;
          }
          break;
        case MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state2 = STATE.ROTATE;
          } else {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state2 = STATE.PAN;
          }
          break;
        default:
          state2 = STATE.NONE;
      }
      if (state2 !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }
    function onMouseMove(event) {
      if (scope.enabled === false)
        return;
      switch (state2) {
        case STATE.ROTATE:
          if (scope.enableRotate === false)
            return;
          handleMouseMoveRotate(event);
          break;
        case STATE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseMoveDolly(event);
          break;
        case STATE.PAN:
          if (scope.enablePan === false)
            return;
          handleMouseMovePan(event);
          break;
      }
    }
    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state2 !== STATE.NONE && state2 !== STATE.ROTATE) {
        return;
      }
      event.preventDefault();
      scope.dispatchEvent(startEvent);
      handleMouseWheel(event);
      scope.dispatchEvent(endEvent);
    }
    function onKeyDown(event) {
      if (scope.enabled === false || scope.enablePan === false)
        return;
      handleKeyDown(event);
    }
    function onTouchStart(event) {
      trackPointer(event);
      switch (pointers.length) {
        case 1:
          switch (scope.touches.ONE) {
            case TOUCH.ROTATE:
              if (scope.enableRotate === false)
                return;
              handleTouchStartRotate();
              state2 = STATE.TOUCH_ROTATE;
              break;
            case TOUCH.PAN:
              if (scope.enablePan === false)
                return;
              handleTouchStartPan();
              state2 = STATE.TOUCH_PAN;
              break;
            default:
              state2 = STATE.NONE;
          }
          break;
        case 2:
          switch (scope.touches.TWO) {
            case TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false)
                return;
              handleTouchStartDollyPan();
              state2 = STATE.TOUCH_DOLLY_PAN;
              break;
            case TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false)
                return;
              handleTouchStartDollyRotate();
              state2 = STATE.TOUCH_DOLLY_ROTATE;
              break;
            default:
              state2 = STATE.NONE;
          }
          break;
        default:
          state2 = STATE.NONE;
      }
      if (state2 !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }
    function onTouchMove(event) {
      trackPointer(event);
      switch (state2) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === false)
            return;
          handleTouchMoveRotate(event);
          scope.update();
          break;
        case STATE.TOUCH_PAN:
          if (scope.enablePan === false)
            return;
          handleTouchMovePan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === false && scope.enablePan === false)
            return;
          handleTouchMoveDollyPan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === false && scope.enableRotate === false)
            return;
          handleTouchMoveDollyRotate(event);
          scope.update();
          break;
        default:
          state2 = STATE.NONE;
      }
    }
    function onContextMenu(event) {
      if (scope.enabled === false)
        return;
      event.preventDefault();
    }
    function addPointer(event) {
      pointers.push(event);
    }
    function removePointer(event) {
      delete pointerPositions[event.pointerId];
      for (let i = 0; i < pointers.length; i++) {
        if (pointers[i].pointerId == event.pointerId) {
          pointers.splice(i, 1);
          return;
        }
      }
    }
    function trackPointer(event) {
      let position = pointerPositions[event.pointerId];
      if (position === void 0) {
        position = new Vector2();
        pointerPositions[event.pointerId] = position;
      }
      position.set(event.pageX, event.pageY);
    }
    function getSecondPointerPosition(event) {
      const pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
      return pointerPositions[pointer.pointerId];
    }
    this.dollyIn = (dollyScale = getZoomScale()) => {
      dollyIn(dollyScale);
      scope.update();
    };
    this.dollyOut = (dollyScale = getZoomScale()) => {
      dollyOut(dollyScale);
      scope.update();
    };
    this.getScale = () => {
      return scale;
    };
    this.setScale = (newScale) => {
      setScale(newScale);
      scope.update();
    };
    this.getZoomScale = () => {
      return getZoomScale();
    };
    if (domElement !== void 0)
      this.connect(domElement);
    this.update();
  }
};
function decodeText(array) {
  if (typeof TextDecoder !== "undefined") {
    return new TextDecoder().decode(array);
  }
  let s = "";
  for (let i = 0, il = array.length; i < il; i++) {
    s += String.fromCharCode(array[i]);
  }
  try {
    return decodeURIComponent(escape(s));
  } catch (e2) {
    return s;
  }
}
const SRGBColorSpace = "srgb";
const LinearSRGBColorSpace = "srgb-linear";
const sRGBEncoding = 3001;
const LinearEncoding = 3e3;
class GLTFLoader extends Loader {
  constructor(manager) {
    super(manager);
    this.dracoLoader = null;
    this.ktx2Loader = null;
    this.meshoptDecoder = null;
    this.pluginCallbacks = [];
    this.register(function(parser) {
      return new GLTFMaterialsClearcoatExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsDispersionExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFTextureBasisUExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFTextureWebPExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFTextureAVIFExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsSheenExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsTransmissionExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsVolumeExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsIorExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsEmissiveStrengthExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsSpecularExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsIridescenceExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsAnisotropyExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsBumpExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFLightsExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMeshoptCompression(parser);
    });
    this.register(function(parser) {
      return new GLTFMeshGpuInstancing(parser);
    });
  }
  load(url, onLoad, onProgress, onError) {
    const scope = this;
    let resourcePath;
    if (this.resourcePath !== "") {
      resourcePath = this.resourcePath;
    } else if (this.path !== "") {
      const relativeUrl = LoaderUtils.extractUrlBase(url);
      resourcePath = LoaderUtils.resolveURL(relativeUrl, this.path);
    } else {
      resourcePath = LoaderUtils.extractUrlBase(url);
    }
    this.manager.itemStart(url);
    const _onError = function(e2) {
      if (onError) {
        onError(e2);
      } else {
        console.error(e2);
      }
      scope.manager.itemError(url);
      scope.manager.itemEnd(url);
    };
    const loader = new FileLoader(this.manager);
    loader.setPath(this.path);
    loader.setResponseType("arraybuffer");
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(this.withCredentials);
    loader.load(
      url,
      function(data) {
        try {
          scope.parse(
            data,
            resourcePath,
            function(gltf) {
              onLoad(gltf);
              scope.manager.itemEnd(url);
            },
            _onError
          );
        } catch (e2) {
          _onError(e2);
        }
      },
      onProgress,
      _onError
    );
  }
  setDRACOLoader(dracoLoader2) {
    this.dracoLoader = dracoLoader2;
    return this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(ktx2Loader) {
    this.ktx2Loader = ktx2Loader;
    return this;
  }
  setMeshoptDecoder(meshoptDecoder) {
    this.meshoptDecoder = meshoptDecoder;
    return this;
  }
  register(callback) {
    if (this.pluginCallbacks.indexOf(callback) === -1) {
      this.pluginCallbacks.push(callback);
    }
    return this;
  }
  unregister(callback) {
    if (this.pluginCallbacks.indexOf(callback) !== -1) {
      this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
    }
    return this;
  }
  parse(data, path, onLoad, onError) {
    let json;
    const extensions2 = {};
    const plugins = {};
    if (typeof data === "string") {
      json = JSON.parse(data);
    } else if (data instanceof ArrayBuffer) {
      const magic = decodeText(new Uint8Array(data.slice(0, 4)));
      if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
        try {
          extensions2[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
        } catch (error) {
          if (onError)
            onError(error);
          return;
        }
        json = JSON.parse(extensions2[EXTENSIONS.KHR_BINARY_GLTF].content);
      } else {
        json = JSON.parse(decodeText(new Uint8Array(data)));
      }
    } else {
      json = data;
    }
    if (json.asset === void 0 || json.asset.version[0] < 2) {
      if (onError)
        onError(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const parser = new GLTFParser(json, {
      path: path || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    parser.fileLoader.setRequestHeader(this.requestHeader);
    for (let i = 0; i < this.pluginCallbacks.length; i++) {
      const plugin = this.pluginCallbacks[i](parser);
      if (!plugin.name)
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name");
      plugins[plugin.name] = plugin;
      extensions2[plugin.name] = true;
    }
    if (json.extensionsUsed) {
      for (let i = 0; i < json.extensionsUsed.length; ++i) {
        const extensionName = json.extensionsUsed[i];
        const extensionsRequired = json.extensionsRequired || [];
        switch (extensionName) {
          case EXTENSIONS.KHR_MATERIALS_UNLIT:
            extensions2[extensionName] = new GLTFMaterialsUnlitExtension();
            break;
          case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
            extensions2[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
            break;
          case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
            extensions2[extensionName] = new GLTFTextureTransformExtension();
            break;
          case EXTENSIONS.KHR_MESH_QUANTIZATION:
            extensions2[extensionName] = new GLTFMeshQuantizationExtension();
            break;
          default:
            if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === void 0) {
              console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
            }
        }
      }
    }
    parser.setExtensions(extensions2);
    parser.setPlugins(plugins);
    parser.parse(onLoad, onError);
  }
  parseAsync(data, path) {
    const scope = this;
    return new Promise(function(resolve2, reject) {
      scope.parse(data, path, resolve2, reject);
    });
  }
}
function GLTFRegistry() {
  let objects = {};
  return {
    get: function(key) {
      return objects[key];
    },
    add: function(key, object) {
      objects[key] = object;
    },
    remove: function(key) {
      delete objects[key];
    },
    removeAll: function() {
      objects = {};
    }
  };
}
const EXTENSIONS = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class GLTFLightsExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
    this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const parser = this.parser;
    const nodeDefs = this.parser.json.nodes || [];
    for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      const nodeDef = nodeDefs[nodeIndex];
      if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== void 0) {
        parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
      }
    }
  }
  _loadLight(lightIndex) {
    const parser = this.parser;
    const cacheKey = "light:" + lightIndex;
    let dependency = parser.cache.get(cacheKey);
    if (dependency)
      return dependency;
    const json = parser.json;
    const extensions2 = json.extensions && json.extensions[this.name] || {};
    const lightDefs = extensions2.lights || [];
    const lightDef = lightDefs[lightIndex];
    let lightNode;
    const color = new Color(16777215);
    if (lightDef.color !== void 0)
      color.setRGB(lightDef.color[0], lightDef.color[1], lightDef.color[2], LinearSRGBColorSpace);
    const range = lightDef.range !== void 0 ? lightDef.range : 0;
    switch (lightDef.type) {
      case "directional":
        lightNode = new DirectionalLight(color);
        lightNode.target.position.set(0, 0, -1);
        lightNode.add(lightNode.target);
        break;
      case "point":
        lightNode = new PointLight(color);
        lightNode.distance = range;
        break;
      case "spot":
        lightNode = new SpotLight(color);
        lightNode.distance = range;
        lightDef.spot = lightDef.spot || {};
        lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== void 0 ? lightDef.spot.innerConeAngle : 0;
        lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== void 0 ? lightDef.spot.outerConeAngle : Math.PI / 4;
        lightNode.angle = lightDef.spot.outerConeAngle;
        lightNode.penumbra = 1 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
        lightNode.target.position.set(0, 0, -1);
        lightNode.add(lightNode.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + lightDef.type);
    }
    lightNode.position.set(0, 0, 0);
    lightNode.decay = 2;
    assignExtrasToUserData(lightNode, lightDef);
    if (lightDef.intensity !== void 0)
      lightNode.intensity = lightDef.intensity;
    lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex);
    dependency = Promise.resolve(lightNode);
    parser.cache.add(cacheKey, dependency);
    return dependency;
  }
  getDependency(type, index) {
    if (type !== "light")
      return;
    return this._loadLight(index);
  }
  createNodeAttachment(nodeIndex) {
    const self2 = this;
    const parser = this.parser;
    const json = parser.json;
    const nodeDef = json.nodes[nodeIndex];
    const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
    const lightIndex = lightDef.light;
    if (lightIndex === void 0)
      return null;
    return this._loadLight(lightIndex).then(function(light) {
      return parser._getNodeRef(self2.cache, lightIndex, light);
    });
  }
}
class GLTFMaterialsUnlitExtension {
  constructor() {
    this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return MeshBasicMaterial;
  }
  extendParams(materialParams, materialDef, parser) {
    const pending = [];
    materialParams.color = new Color(1, 1, 1);
    materialParams.opacity = 1;
    const metallicRoughness = materialDef.pbrMetallicRoughness;
    if (metallicRoughness) {
      if (Array.isArray(metallicRoughness.baseColorFactor)) {
        const array = metallicRoughness.baseColorFactor;
        materialParams.color.setRGB(array[0], array[1], array[2], LinearSRGBColorSpace);
        materialParams.opacity = array[3];
      }
      if (metallicRoughness.baseColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, SRGBColorSpace));
      }
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsEmissiveStrengthExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
    if (emissiveStrength !== void 0) {
      materialParams.emissiveIntensity = emissiveStrength;
    }
    return Promise.resolve();
  }
}
class GLTFMaterialsClearcoatExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.clearcoatFactor !== void 0) {
      materialParams.clearcoat = extension.clearcoatFactor;
    }
    if (extension.clearcoatTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture));
    }
    if (extension.clearcoatRoughnessFactor !== void 0) {
      materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
    }
    if (extension.clearcoatRoughnessTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture));
    }
    if (extension.clearcoatNormalTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture));
      if (extension.clearcoatNormalTexture.scale !== void 0) {
        const scale = extension.clearcoatNormalTexture.scale;
        materialParams.clearcoatNormalScale = new Vector2(scale, scale);
      }
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsDispersionExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const extension = materialDef.extensions[this.name];
    materialParams.dispersion = extension.dispersion !== void 0 ? extension.dispersion : 0;
    return Promise.resolve();
  }
}
class GLTFMaterialsIridescenceExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.iridescenceFactor !== void 0) {
      materialParams.iridescence = extension.iridescenceFactor;
    }
    if (extension.iridescenceTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture));
    }
    if (extension.iridescenceIor !== void 0) {
      materialParams.iridescenceIOR = extension.iridescenceIor;
    }
    if (materialParams.iridescenceThicknessRange === void 0) {
      materialParams.iridescenceThicknessRange = [100, 400];
    }
    if (extension.iridescenceThicknessMinimum !== void 0) {
      materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
    }
    if (extension.iridescenceThicknessMaximum !== void 0) {
      materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
    }
    if (extension.iridescenceThicknessTexture !== void 0) {
      pending.push(
        parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture)
      );
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsSheenExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    materialParams.sheenColor = new Color(0, 0, 0);
    materialParams.sheenRoughness = 0;
    materialParams.sheen = 1;
    const extension = materialDef.extensions[this.name];
    if (extension.sheenColorFactor !== void 0) {
      const colorFactor = extension.sheenColorFactor;
      materialParams.sheenColor.setRGB(colorFactor[0], colorFactor[1], colorFactor[2], LinearSRGBColorSpace);
    }
    if (extension.sheenRoughnessFactor !== void 0) {
      materialParams.sheenRoughness = extension.sheenRoughnessFactor;
    }
    if (extension.sheenColorTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, SRGBColorSpace));
    }
    if (extension.sheenRoughnessTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture));
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsTransmissionExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.transmissionFactor !== void 0) {
      materialParams.transmission = extension.transmissionFactor;
    }
    if (extension.transmissionTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture));
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsVolumeExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    materialParams.thickness = extension.thicknessFactor !== void 0 ? extension.thicknessFactor : 0;
    if (extension.thicknessTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture));
    }
    materialParams.attenuationDistance = extension.attenuationDistance || Infinity;
    const colorArray = extension.attenuationColor || [1, 1, 1];
    materialParams.attenuationColor = new Color().setRGB(
      colorArray[0],
      colorArray[1],
      colorArray[2],
      LinearSRGBColorSpace
    );
    return Promise.all(pending);
  }
}
class GLTFMaterialsIorExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_IOR;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const extension = materialDef.extensions[this.name];
    materialParams.ior = extension.ior !== void 0 ? extension.ior : 1.5;
    return Promise.resolve();
  }
}
class GLTFMaterialsSpecularExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    materialParams.specularIntensity = extension.specularFactor !== void 0 ? extension.specularFactor : 1;
    if (extension.specularTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
    }
    const colorArray = extension.specularColorFactor || [1, 1, 1];
    materialParams.specularColor = new Color().setRGB(colorArray[0], colorArray[1], colorArray[2], LinearSRGBColorSpace);
    if (extension.specularColorTexture !== void 0) {
      pending.push(
        parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, SRGBColorSpace)
      );
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsBumpExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.EXT_MATERIALS_BUMP;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    materialParams.bumpScale = extension.bumpFactor !== void 0 ? extension.bumpFactor : 1;
    if (extension.bumpTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "bumpMap", extension.bumpTexture));
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsAnisotropyExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.anisotropyStrength !== void 0) {
      materialParams.anisotropy = extension.anisotropyStrength;
    }
    if (extension.anisotropyRotation !== void 0) {
      materialParams.anisotropyRotation = extension.anisotropyRotation;
    }
    if (extension.anisotropyTexture !== void 0) {
      pending.push(parser.assignTexture(materialParams, "anisotropyMap", extension.anisotropyTexture));
    }
    return Promise.all(pending);
  }
}
class GLTFTextureBasisUExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
  }
  loadTexture(textureIndex) {
    const parser = this.parser;
    const json = parser.json;
    const textureDef = json.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[this.name]) {
      return null;
    }
    const extension = textureDef.extensions[this.name];
    const loader = parser.options.ktx2Loader;
    if (!loader) {
      if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      } else {
        return null;
      }
    }
    return parser.loadTextureImage(textureIndex, extension.source, loader);
  }
}
class GLTFTextureWebPExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
    this.isSupported = null;
  }
  loadTexture(textureIndex) {
    const name = this.name;
    const parser = this.parser;
    const json = parser.json;
    const textureDef = json.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[name]) {
      return null;
    }
    const extension = textureDef.extensions[name];
    const source = json.images[extension.source];
    let loader = parser.textureLoader;
    if (source.uri) {
      const handler = parser.options.manager.getHandler(source.uri);
      if (handler !== null)
        loader = handler;
    }
    return this.detectSupport().then(function(isSupported) {
      if (isSupported)
        return parser.loadTextureImage(textureIndex, extension.source, loader);
      if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      }
      return parser.loadTexture(textureIndex);
    });
  }
  detectSupport() {
    if (!this.isSupported) {
      this.isSupported = new Promise(function(resolve2) {
        const image = new Image();
        image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
        image.onload = image.onerror = function() {
          resolve2(image.height === 1);
        };
      });
    }
    return this.isSupported;
  }
}
class GLTFTextureAVIFExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
    this.isSupported = null;
  }
  loadTexture(textureIndex) {
    const name = this.name;
    const parser = this.parser;
    const json = parser.json;
    const textureDef = json.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[name]) {
      return null;
    }
    const extension = textureDef.extensions[name];
    const source = json.images[extension.source];
    let loader = parser.textureLoader;
    if (source.uri) {
      const handler = parser.options.manager.getHandler(source.uri);
      if (handler !== null)
        loader = handler;
    }
    return this.detectSupport().then(function(isSupported) {
      if (isSupported)
        return parser.loadTextureImage(textureIndex, extension.source, loader);
      if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      }
      return parser.loadTexture(textureIndex);
    });
  }
  detectSupport() {
    if (!this.isSupported) {
      this.isSupported = new Promise(function(resolve2) {
        const image = new Image();
        image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=";
        image.onload = image.onerror = function() {
          resolve2(image.height === 1);
        };
      });
    }
    return this.isSupported;
  }
}
class GLTFMeshoptCompression {
  constructor(parser) {
    this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
    this.parser = parser;
  }
  loadBufferView(index) {
    const json = this.parser.json;
    const bufferView = json.bufferViews[index];
    if (bufferView.extensions && bufferView.extensions[this.name]) {
      const extensionDef = bufferView.extensions[this.name];
      const buffer = this.parser.getDependency("buffer", extensionDef.buffer);
      const decoder = this.parser.options.meshoptDecoder;
      if (!decoder || !decoder.supported) {
        if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        } else {
          return null;
        }
      }
      return buffer.then(function(res) {
        const byteOffset = extensionDef.byteOffset || 0;
        const byteLength = extensionDef.byteLength || 0;
        const count = extensionDef.count;
        const stride = extensionDef.byteStride;
        const source = new Uint8Array(res, byteOffset, byteLength);
        if (decoder.decodeGltfBufferAsync) {
          return decoder.decodeGltfBufferAsync(count, stride, source, extensionDef.mode, extensionDef.filter).then(function(res2) {
            return res2.buffer;
          });
        } else {
          return decoder.ready.then(function() {
            const result = new ArrayBuffer(count * stride);
            decoder.decodeGltfBuffer(
              new Uint8Array(result),
              count,
              stride,
              source,
              extensionDef.mode,
              extensionDef.filter
            );
            return result;
          });
        }
      });
    } else {
      return null;
    }
  }
}
class GLTFMeshGpuInstancing {
  constructor(parser) {
    this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
    this.parser = parser;
  }
  createNodeMesh(nodeIndex) {
    const json = this.parser.json;
    const nodeDef = json.nodes[nodeIndex];
    if (!nodeDef.extensions || !nodeDef.extensions[this.name] || nodeDef.mesh === void 0) {
      return null;
    }
    const meshDef = json.meshes[nodeDef.mesh];
    for (const primitive of meshDef.primitives) {
      if (primitive.mode !== WEBGL_CONSTANTS.TRIANGLES && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN && primitive.mode !== void 0) {
        return null;
      }
    }
    const extensionDef = nodeDef.extensions[this.name];
    const attributesDef = extensionDef.attributes;
    const pending = [];
    const attributes = {};
    for (const key in attributesDef) {
      pending.push(
        this.parser.getDependency("accessor", attributesDef[key]).then((accessor) => {
          attributes[key] = accessor;
          return attributes[key];
        })
      );
    }
    if (pending.length < 1) {
      return null;
    }
    pending.push(this.parser.createNodeMesh(nodeIndex));
    return Promise.all(pending).then((results) => {
      const nodeObject = results.pop();
      const meshes = nodeObject.isGroup ? nodeObject.children : [nodeObject];
      const count = results[0].count;
      const instancedMeshes = [];
      for (const mesh of meshes) {
        const m2 = new Matrix4();
        const p2 = new Vector3();
        const q = new Quaternion();
        const s = new Vector3(1, 1, 1);
        const instancedMesh = new InstancedMesh(mesh.geometry, mesh.material, count);
        for (let i = 0; i < count; i++) {
          if (attributes.TRANSLATION) {
            p2.fromBufferAttribute(attributes.TRANSLATION, i);
          }
          if (attributes.ROTATION) {
            q.fromBufferAttribute(attributes.ROTATION, i);
          }
          if (attributes.SCALE) {
            s.fromBufferAttribute(attributes.SCALE, i);
          }
          instancedMesh.setMatrixAt(i, m2.compose(p2, q, s));
        }
        for (const attributeName in attributes) {
          if (attributeName === "_COLOR_0") {
            const attr = attributes[attributeName];
            instancedMesh.instanceColor = new InstancedBufferAttribute(attr.array, attr.itemSize, attr.normalized);
          } else if (attributeName !== "TRANSLATION" && attributeName !== "ROTATION" && attributeName !== "SCALE") {
            mesh.geometry.setAttribute(attributeName, attributes[attributeName]);
          }
        }
        Object3D.prototype.copy.call(instancedMesh, mesh);
        this.parser.assignFinalMaterial(instancedMesh);
        instancedMeshes.push(instancedMesh);
      }
      if (nodeObject.isGroup) {
        nodeObject.clear();
        nodeObject.add(...instancedMeshes);
        return nodeObject;
      }
      return instancedMeshes[0];
    });
  }
}
const BINARY_EXTENSION_HEADER_MAGIC = "glTF";
const BINARY_EXTENSION_HEADER_LENGTH = 12;
const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 1313821514, BIN: 5130562 };
class GLTFBinaryExtension {
  constructor(data) {
    this.name = EXTENSIONS.KHR_BINARY_GLTF;
    this.content = null;
    this.body = null;
    const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
    this.header = {
      magic: decodeText(new Uint8Array(data.slice(0, 4))),
      version: headerView.getUint32(4, true),
      length: headerView.getUint32(8, true)
    };
    if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) {
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    } else if (this.header.version < 2) {
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    }
    const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
    const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
    let chunkIndex = 0;
    while (chunkIndex < chunkContentsLength) {
      const chunkLength = chunkView.getUint32(chunkIndex, true);
      chunkIndex += 4;
      const chunkType = chunkView.getUint32(chunkIndex, true);
      chunkIndex += 4;
      if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
        const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
        this.content = decodeText(contentArray);
      } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
        const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
        this.body = data.slice(byteOffset, byteOffset + chunkLength);
      }
      chunkIndex += chunkLength;
    }
    if (this.content === null) {
      throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
}
class GLTFDracoMeshCompressionExtension {
  constructor(json, dracoLoader2) {
    if (!dracoLoader2) {
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    }
    this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
    this.json = json;
    this.dracoLoader = dracoLoader2;
    this.dracoLoader.preload();
  }
  decodePrimitive(primitive, parser) {
    const json = this.json;
    const dracoLoader2 = this.dracoLoader;
    const bufferViewIndex = primitive.extensions[this.name].bufferView;
    const gltfAttributeMap = primitive.extensions[this.name].attributes;
    const threeAttributeMap = {};
    const attributeNormalizedMap = {};
    const attributeTypeMap = {};
    for (const attributeName in gltfAttributeMap) {
      const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
      threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
    }
    for (const attributeName in primitive.attributes) {
      const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
      if (gltfAttributeMap[attributeName] !== void 0) {
        const accessorDef = json.accessors[primitive.attributes[attributeName]];
        const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        attributeTypeMap[threeAttributeName] = componentType.name;
        attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
      }
    }
    return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
      return new Promise(function(resolve2, reject) {
        dracoLoader2.decodeDracoFile(
          bufferView,
          function(geometry) {
            for (const attributeName in geometry.attributes) {
              const attribute = geometry.attributes[attributeName];
              const normalized = attributeNormalizedMap[attributeName];
              if (normalized !== void 0)
                attribute.normalized = normalized;
            }
            resolve2(geometry);
          },
          threeAttributeMap,
          attributeTypeMap,
          LinearSRGBColorSpace,
          reject
        );
      });
    });
  }
}
class GLTFTextureTransformExtension {
  constructor() {
    this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(texture, transform) {
    if ((transform.texCoord === void 0 || transform.texCoord === texture.channel) && transform.offset === void 0 && transform.rotation === void 0 && transform.scale === void 0) {
      return texture;
    }
    texture = texture.clone();
    if (transform.texCoord !== void 0) {
      texture.channel = transform.texCoord;
    }
    if (transform.offset !== void 0) {
      texture.offset.fromArray(transform.offset);
    }
    if (transform.rotation !== void 0) {
      texture.rotation = transform.rotation;
    }
    if (transform.scale !== void 0) {
      texture.repeat.fromArray(transform.scale);
    }
    texture.needsUpdate = true;
    return texture;
  }
}
class GLTFMeshQuantizationExtension {
  constructor() {
    this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
  }
}
class GLTFCubicSplineInterpolant extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  copySampleValue_(index) {
    const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
    for (let i = 0; i !== valueSize; i++) {
      result[i] = values[offset + i];
    }
    return result;
  }
  interpolate_(i1, t02, t2, t1) {
    const result = this.resultBuffer;
    const values = this.sampleValues;
    const stride = this.valueSize;
    const stride2 = stride * 2;
    const stride3 = stride * 3;
    const td2 = t1 - t02;
    const p2 = (t2 - t02) / td2;
    const pp = p2 * p2;
    const ppp = pp * p2;
    const offset1 = i1 * stride3;
    const offset0 = offset1 - stride3;
    const s2 = -2 * ppp + 3 * pp;
    const s3 = ppp - pp;
    const s0 = 1 - s2;
    const s1 = s3 - pp + p2;
    for (let i = 0; i !== stride; i++) {
      const p0 = values[offset0 + i + stride];
      const m0 = values[offset0 + i + stride2] * td2;
      const p1 = values[offset1 + i + stride];
      const m1 = values[offset1 + i] * td2;
      result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
    }
    return result;
  }
}
const _q = /* @__PURE__ */ new Quaternion();
class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
  interpolate_(i1, t02, t2, t1) {
    const result = super.interpolate_(i1, t02, t2, t1);
    _q.fromArray(result).normalize().toArray(result);
    return result;
  }
}
const WEBGL_CONSTANTS = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
};
const WEBGL_COMPONENT_TYPES = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
const WEBGL_FILTERS = {
  9728: NearestFilter,
  9729: LinearFilter,
  9984: NearestMipmapNearestFilter,
  9985: LinearMipmapNearestFilter,
  9986: NearestMipmapLinearFilter,
  9987: LinearMipmapLinearFilter
};
const WEBGL_WRAPPINGS = {
  33071: ClampToEdgeWrapping,
  33648: MirroredRepeatWrapping,
  10497: RepeatWrapping
};
const WEBGL_TYPE_SIZES = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
const ATTRIBUTES = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...version >= 152 ? {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3"
  } : {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2"
  },
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
};
const PATH_PROPERTIES = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
};
const INTERPOLATION = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: InterpolateLinear,
  STEP: InterpolateDiscrete
};
const ALPHA_MODES = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function createDefaultMaterial(cache) {
  if (cache["DefaultMaterial"] === void 0) {
    cache["DefaultMaterial"] = new MeshStandardMaterial({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: FrontSide
    });
  }
  return cache["DefaultMaterial"];
}
function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
  for (const name in objectDef.extensions) {
    if (knownExtensions[name] === void 0) {
      object.userData.gltfExtensions = object.userData.gltfExtensions || {};
      object.userData.gltfExtensions[name] = objectDef.extensions[name];
    }
  }
}
function assignExtrasToUserData(object, gltfDef) {
  if (gltfDef.extras !== void 0) {
    if (typeof gltfDef.extras === "object") {
      Object.assign(object.userData, gltfDef.extras);
    } else {
      console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras);
    }
  }
}
function addMorphTargets(geometry, targets, parser) {
  let hasMorphPosition = false;
  let hasMorphNormal = false;
  let hasMorphColor = false;
  for (let i = 0, il = targets.length; i < il; i++) {
    const target = targets[i];
    if (target.POSITION !== void 0)
      hasMorphPosition = true;
    if (target.NORMAL !== void 0)
      hasMorphNormal = true;
    if (target.COLOR_0 !== void 0)
      hasMorphColor = true;
    if (hasMorphPosition && hasMorphNormal && hasMorphColor)
      break;
  }
  if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor)
    return Promise.resolve(geometry);
  const pendingPositionAccessors = [];
  const pendingNormalAccessors = [];
  const pendingColorAccessors = [];
  for (let i = 0, il = targets.length; i < il; i++) {
    const target = targets[i];
    if (hasMorphPosition) {
      const pendingAccessor = target.POSITION !== void 0 ? parser.getDependency("accessor", target.POSITION) : geometry.attributes.position;
      pendingPositionAccessors.push(pendingAccessor);
    }
    if (hasMorphNormal) {
      const pendingAccessor = target.NORMAL !== void 0 ? parser.getDependency("accessor", target.NORMAL) : geometry.attributes.normal;
      pendingNormalAccessors.push(pendingAccessor);
    }
    if (hasMorphColor) {
      const pendingAccessor = target.COLOR_0 !== void 0 ? parser.getDependency("accessor", target.COLOR_0) : geometry.attributes.color;
      pendingColorAccessors.push(pendingAccessor);
    }
  }
  return Promise.all([
    Promise.all(pendingPositionAccessors),
    Promise.all(pendingNormalAccessors),
    Promise.all(pendingColorAccessors)
  ]).then(function(accessors) {
    const morphPositions = accessors[0];
    const morphNormals = accessors[1];
    const morphColors = accessors[2];
    if (hasMorphPosition)
      geometry.morphAttributes.position = morphPositions;
    if (hasMorphNormal)
      geometry.morphAttributes.normal = morphNormals;
    if (hasMorphColor)
      geometry.morphAttributes.color = morphColors;
    geometry.morphTargetsRelative = true;
    return geometry;
  });
}
function updateMorphTargets(mesh, meshDef) {
  mesh.updateMorphTargets();
  if (meshDef.weights !== void 0) {
    for (let i = 0, il = meshDef.weights.length; i < il; i++) {
      mesh.morphTargetInfluences[i] = meshDef.weights[i];
    }
  }
  if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
    const targetNames = meshDef.extras.targetNames;
    if (mesh.morphTargetInfluences.length === targetNames.length) {
      mesh.morphTargetDictionary = {};
      for (let i = 0, il = targetNames.length; i < il; i++) {
        mesh.morphTargetDictionary[targetNames[i]] = i;
      }
    } else {
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
}
function createPrimitiveKey(primitiveDef) {
  let geometryKey;
  const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
  if (dracoExtension) {
    geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
  } else {
    geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
  }
  if (primitiveDef.targets !== void 0) {
    for (let i = 0, il = primitiveDef.targets.length; i < il; i++) {
      geometryKey += ":" + createAttributesKey(primitiveDef.targets[i]);
    }
  }
  return geometryKey;
}
function createAttributesKey(attributes) {
  let attributesKey = "";
  const keys = Object.keys(attributes).sort();
  for (let i = 0, il = keys.length; i < il; i++) {
    attributesKey += keys[i] + ":" + attributes[keys[i]] + ";";
  }
  return attributesKey;
}
function getNormalizedComponentScale(constructor) {
  switch (constructor) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function getImageURIMimeType(uri) {
  if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0)
    return "image/jpeg";
  if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0)
    return "image/webp";
  return "image/png";
}
const _identityMatrix = /* @__PURE__ */ new Matrix4();
class GLTFParser {
  constructor(json = {}, options = {}) {
    this.json = json;
    this.extensions = {};
    this.plugins = {};
    this.options = options;
    this.cache = new GLTFRegistry();
    this.associations = /* @__PURE__ */ new Map();
    this.primitiveCache = {};
    this.nodeCache = {};
    this.meshCache = { refs: {}, uses: {} };
    this.cameraCache = { refs: {}, uses: {} };
    this.lightCache = { refs: {}, uses: {} };
    this.sourceCache = {};
    this.textureCache = {};
    this.nodeNamesUsed = {};
    let isSafari = false;
    let isFirefox = false;
    let firefoxVersion = -1;
    if (typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined") {
      isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true;
      isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
      firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    if (typeof createImageBitmap === "undefined" || isSafari || isFirefox && firefoxVersion < 98) {
      this.textureLoader = new TextureLoader(this.options.manager);
    } else {
      this.textureLoader = new ImageBitmapLoader(this.options.manager);
    }
    this.textureLoader.setCrossOrigin(this.options.crossOrigin);
    this.textureLoader.setRequestHeader(this.options.requestHeader);
    this.fileLoader = new FileLoader(this.options.manager);
    this.fileLoader.setResponseType("arraybuffer");
    if (this.options.crossOrigin === "use-credentials") {
      this.fileLoader.setWithCredentials(true);
    }
  }
  setExtensions(extensions2) {
    this.extensions = extensions2;
  }
  setPlugins(plugins) {
    this.plugins = plugins;
  }
  parse(onLoad, onError) {
    const parser = this;
    const json = this.json;
    const extensions2 = this.extensions;
    this.cache.removeAll();
    this.nodeCache = {};
    this._invokeAll(function(ext) {
      return ext._markDefs && ext._markDefs();
    });
    Promise.all(
      this._invokeAll(function(ext) {
        return ext.beforeRoot && ext.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        parser.getDependencies("scene"),
        parser.getDependencies("animation"),
        parser.getDependencies("camera")
      ]);
    }).then(function(dependencies) {
      const result = {
        scene: dependencies[0][json.scene || 0],
        scenes: dependencies[0],
        animations: dependencies[1],
        cameras: dependencies[2],
        asset: json.asset,
        parser,
        userData: {}
      };
      addUnknownExtensionsToUserData(extensions2, result, json);
      assignExtrasToUserData(result, json);
      return Promise.all(
        parser._invokeAll(function(ext) {
          return ext.afterRoot && ext.afterRoot(result);
        })
      ).then(function() {
        for (const scene of result.scenes) {
          scene.updateMatrixWorld();
        }
        onLoad(result);
      });
    }).catch(onError);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const nodeDefs = this.json.nodes || [];
    const skinDefs = this.json.skins || [];
    const meshDefs = this.json.meshes || [];
    for (let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {
      const joints = skinDefs[skinIndex].joints;
      for (let i = 0, il = joints.length; i < il; i++) {
        nodeDefs[joints[i]].isBone = true;
      }
    }
    for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      const nodeDef = nodeDefs[nodeIndex];
      if (nodeDef.mesh !== void 0) {
        this._addNodeRef(this.meshCache, nodeDef.mesh);
        if (nodeDef.skin !== void 0) {
          meshDefs[nodeDef.mesh].isSkinnedMesh = true;
        }
      }
      if (nodeDef.camera !== void 0) {
        this._addNodeRef(this.cameraCache, nodeDef.camera);
      }
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(cache, index) {
    if (index === void 0)
      return;
    if (cache.refs[index] === void 0) {
      cache.refs[index] = cache.uses[index] = 0;
    }
    cache.refs[index]++;
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(cache, index, object) {
    if (cache.refs[index] <= 1)
      return object;
    const ref = object.clone();
    const updateMappings = (original, clone) => {
      const mappings = this.associations.get(original);
      if (mappings != null) {
        this.associations.set(clone, mappings);
      }
      for (const [i, child] of original.children.entries()) {
        updateMappings(child, clone.children[i]);
      }
    };
    updateMappings(object, ref);
    ref.name += "_instance_" + cache.uses[index]++;
    return ref;
  }
  _invokeOne(func) {
    const extensions2 = Object.values(this.plugins);
    extensions2.push(this);
    for (let i = 0; i < extensions2.length; i++) {
      const result = func(extensions2[i]);
      if (result)
        return result;
    }
    return null;
  }
  _invokeAll(func) {
    const extensions2 = Object.values(this.plugins);
    extensions2.unshift(this);
    const pending = [];
    for (let i = 0; i < extensions2.length; i++) {
      const result = func(extensions2[i]);
      if (result)
        pending.push(result);
    }
    return pending;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(type, index) {
    const cacheKey = type + ":" + index;
    let dependency = this.cache.get(cacheKey);
    if (!dependency) {
      switch (type) {
        case "scene":
          dependency = this.loadScene(index);
          break;
        case "node":
          dependency = this._invokeOne(function(ext) {
            return ext.loadNode && ext.loadNode(index);
          });
          break;
        case "mesh":
          dependency = this._invokeOne(function(ext) {
            return ext.loadMesh && ext.loadMesh(index);
          });
          break;
        case "accessor":
          dependency = this.loadAccessor(index);
          break;
        case "bufferView":
          dependency = this._invokeOne(function(ext) {
            return ext.loadBufferView && ext.loadBufferView(index);
          });
          break;
        case "buffer":
          dependency = this.loadBuffer(index);
          break;
        case "material":
          dependency = this._invokeOne(function(ext) {
            return ext.loadMaterial && ext.loadMaterial(index);
          });
          break;
        case "texture":
          dependency = this._invokeOne(function(ext) {
            return ext.loadTexture && ext.loadTexture(index);
          });
          break;
        case "skin":
          dependency = this.loadSkin(index);
          break;
        case "animation":
          dependency = this._invokeOne(function(ext) {
            return ext.loadAnimation && ext.loadAnimation(index);
          });
          break;
        case "camera":
          dependency = this.loadCamera(index);
          break;
        default:
          dependency = this._invokeOne(function(ext) {
            return ext != this && ext.getDependency && ext.getDependency(type, index);
          });
          if (!dependency) {
            throw new Error("Unknown type: " + type);
          }
          break;
      }
      this.cache.add(cacheKey, dependency);
    }
    return dependency;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(type) {
    let dependencies = this.cache.get(type);
    if (!dependencies) {
      const parser = this;
      const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
      dependencies = Promise.all(
        defs.map(function(def, index) {
          return parser.getDependency(type, index);
        })
      );
      this.cache.add(type, dependencies);
    }
    return dependencies;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(bufferIndex) {
    const bufferDef = this.json.buffers[bufferIndex];
    const loader = this.fileLoader;
    if (bufferDef.type && bufferDef.type !== "arraybuffer") {
      throw new Error("THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported.");
    }
    if (bufferDef.uri === void 0 && bufferIndex === 0) {
      return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
    }
    const options = this.options;
    return new Promise(function(resolve2, reject) {
      loader.load(LoaderUtils.resolveURL(bufferDef.uri, options.path), resolve2, void 0, function() {
        reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(bufferViewIndex) {
    const bufferViewDef = this.json.bufferViews[bufferViewIndex];
    return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
      const byteLength = bufferViewDef.byteLength || 0;
      const byteOffset = bufferViewDef.byteOffset || 0;
      return buffer.slice(byteOffset, byteOffset + byteLength);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(accessorIndex) {
    const parser = this;
    const json = this.json;
    const accessorDef = this.json.accessors[accessorIndex];
    if (accessorDef.bufferView === void 0 && accessorDef.sparse === void 0) {
      const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
      const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
      const normalized = accessorDef.normalized === true;
      const array = new TypedArray(accessorDef.count * itemSize);
      return Promise.resolve(new BufferAttribute(array, itemSize, normalized));
    }
    const pendingBufferViews = [];
    if (accessorDef.bufferView !== void 0) {
      pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView));
    } else {
      pendingBufferViews.push(null);
    }
    if (accessorDef.sparse !== void 0) {
      pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView));
      pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView));
    }
    return Promise.all(pendingBufferViews).then(function(bufferViews) {
      const bufferView = bufferViews[0];
      const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
      const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
      const elementBytes = TypedArray.BYTES_PER_ELEMENT;
      const itemBytes = elementBytes * itemSize;
      const byteOffset = accessorDef.byteOffset || 0;
      const byteStride = accessorDef.bufferView !== void 0 ? json.bufferViews[accessorDef.bufferView].byteStride : void 0;
      const normalized = accessorDef.normalized === true;
      let array, bufferAttribute;
      if (byteStride && byteStride !== itemBytes) {
        const ibSlice = Math.floor(byteOffset / byteStride);
        const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
        let ib = parser.cache.get(ibCacheKey);
        if (!ib) {
          array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
          ib = new InterleavedBuffer(array, byteStride / elementBytes);
          parser.cache.add(ibCacheKey, ib);
        }
        bufferAttribute = new InterleavedBufferAttribute(
          ib,
          itemSize,
          byteOffset % byteStride / elementBytes,
          normalized
        );
      } else {
        if (bufferView === null) {
          array = new TypedArray(accessorDef.count * itemSize);
        } else {
          array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
        }
        bufferAttribute = new BufferAttribute(array, itemSize, normalized);
      }
      if (accessorDef.sparse !== void 0) {
        const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
        const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
        const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
        const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
        const sparseIndices = new TypedArrayIndices(
          bufferViews[1],
          byteOffsetIndices,
          accessorDef.sparse.count * itemSizeIndices
        );
        const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
        if (bufferView !== null) {
          bufferAttribute = new BufferAttribute(
            bufferAttribute.array.slice(),
            bufferAttribute.itemSize,
            bufferAttribute.normalized
          );
        }
        for (let i = 0, il = sparseIndices.length; i < il; i++) {
          const index = sparseIndices[i];
          bufferAttribute.setX(index, sparseValues[i * itemSize]);
          if (itemSize >= 2)
            bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
          if (itemSize >= 3)
            bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
          if (itemSize >= 4)
            bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
          if (itemSize >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return bufferAttribute;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(textureIndex) {
    const json = this.json;
    const options = this.options;
    const textureDef = json.textures[textureIndex];
    const sourceIndex = textureDef.source;
    const sourceDef = json.images[sourceIndex];
    let loader = this.textureLoader;
    if (sourceDef.uri) {
      const handler = options.manager.getHandler(sourceDef.uri);
      if (handler !== null)
        loader = handler;
    }
    return this.loadTextureImage(textureIndex, sourceIndex, loader);
  }
  loadTextureImage(textureIndex, sourceIndex, loader) {
    const parser = this;
    const json = this.json;
    const textureDef = json.textures[textureIndex];
    const sourceDef = json.images[sourceIndex];
    const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
    if (this.textureCache[cacheKey]) {
      return this.textureCache[cacheKey];
    }
    const promise = this.loadImageSource(sourceIndex, loader).then(function(texture) {
      texture.flipY = false;
      texture.name = textureDef.name || sourceDef.name || "";
      if (texture.name === "" && typeof sourceDef.uri === "string" && sourceDef.uri.startsWith("data:image/") === false) {
        texture.name = sourceDef.uri;
      }
      const samplers = json.samplers || {};
      const sampler = samplers[textureDef.sampler] || {};
      texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || LinearFilter;
      texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || LinearMipmapLinearFilter;
      texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || RepeatWrapping;
      texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || RepeatWrapping;
      parser.associations.set(texture, { textures: textureIndex });
      return texture;
    }).catch(function() {
      return null;
    });
    this.textureCache[cacheKey] = promise;
    return promise;
  }
  loadImageSource(sourceIndex, loader) {
    const parser = this;
    const json = this.json;
    const options = this.options;
    if (this.sourceCache[sourceIndex] !== void 0) {
      return this.sourceCache[sourceIndex].then((texture) => texture.clone());
    }
    const sourceDef = json.images[sourceIndex];
    const URL2 = self.URL || self.webkitURL;
    let sourceURI = sourceDef.uri || "";
    let isObjectURL = false;
    if (sourceDef.bufferView !== void 0) {
      sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
        isObjectURL = true;
        const blob = new Blob([bufferView], { type: sourceDef.mimeType });
        sourceURI = URL2.createObjectURL(blob);
        return sourceURI;
      });
    } else if (sourceDef.uri === void 0) {
      throw new Error("THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView");
    }
    const promise = Promise.resolve(sourceURI).then(function(sourceURI2) {
      return new Promise(function(resolve2, reject) {
        let onLoad = resolve2;
        if (loader.isImageBitmapLoader === true) {
          onLoad = function(imageBitmap) {
            const texture = new Texture(imageBitmap);
            texture.needsUpdate = true;
            resolve2(texture);
          };
        }
        loader.load(LoaderUtils.resolveURL(sourceURI2, options.path), onLoad, void 0, reject);
      });
    }).then(function(texture) {
      if (isObjectURL === true) {
        URL2.revokeObjectURL(sourceURI);
      }
      assignExtrasToUserData(texture, sourceDef);
      texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
      return texture;
    }).catch(function(error) {
      console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
      throw error;
    });
    this.sourceCache[sourceIndex] = promise;
    return promise;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(materialParams, mapName, mapDef, colorSpace) {
    const parser = this;
    return this.getDependency("texture", mapDef.index).then(function(texture) {
      if (!texture)
        return null;
      if (mapDef.texCoord !== void 0 && mapDef.texCoord > 0) {
        texture = texture.clone();
        texture.channel = mapDef.texCoord;
      }
      if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
        const transform = mapDef.extensions !== void 0 ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
        if (transform) {
          const gltfReference = parser.associations.get(texture);
          texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
          parser.associations.set(texture, gltfReference);
        }
      }
      if (colorSpace !== void 0) {
        if (typeof colorSpace === "number")
          colorSpace = colorSpace === sRGBEncoding ? SRGBColorSpace : LinearSRGBColorSpace;
        if ("colorSpace" in texture)
          texture.colorSpace = colorSpace;
        else
          texture.encoding = colorSpace === SRGBColorSpace ? sRGBEncoding : LinearEncoding;
      }
      materialParams[mapName] = texture;
      return texture;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(mesh) {
    const geometry = mesh.geometry;
    let material = mesh.material;
    const useDerivativeTangents = geometry.attributes.tangent === void 0;
    const useVertexColors = geometry.attributes.color !== void 0;
    const useFlatShading = geometry.attributes.normal === void 0;
    if (mesh.isPoints) {
      const cacheKey = "PointsMaterial:" + material.uuid;
      let pointsMaterial = this.cache.get(cacheKey);
      if (!pointsMaterial) {
        pointsMaterial = new PointsMaterial();
        Material.prototype.copy.call(pointsMaterial, material);
        pointsMaterial.color.copy(material.color);
        pointsMaterial.map = material.map;
        pointsMaterial.sizeAttenuation = false;
        this.cache.add(cacheKey, pointsMaterial);
      }
      material = pointsMaterial;
    } else if (mesh.isLine) {
      const cacheKey = "LineBasicMaterial:" + material.uuid;
      let lineMaterial = this.cache.get(cacheKey);
      if (!lineMaterial) {
        lineMaterial = new LineBasicMaterial();
        Material.prototype.copy.call(lineMaterial, material);
        lineMaterial.color.copy(material.color);
        lineMaterial.map = material.map;
        this.cache.add(cacheKey, lineMaterial);
      }
      material = lineMaterial;
    }
    if (useDerivativeTangents || useVertexColors || useFlatShading) {
      let cacheKey = "ClonedMaterial:" + material.uuid + ":";
      if (useDerivativeTangents)
        cacheKey += "derivative-tangents:";
      if (useVertexColors)
        cacheKey += "vertex-colors:";
      if (useFlatShading)
        cacheKey += "flat-shading:";
      let cachedMaterial = this.cache.get(cacheKey);
      if (!cachedMaterial) {
        cachedMaterial = material.clone();
        if (useVertexColors)
          cachedMaterial.vertexColors = true;
        if (useFlatShading)
          cachedMaterial.flatShading = true;
        if (useDerivativeTangents) {
          if (cachedMaterial.normalScale)
            cachedMaterial.normalScale.y *= -1;
          if (cachedMaterial.clearcoatNormalScale)
            cachedMaterial.clearcoatNormalScale.y *= -1;
        }
        this.cache.add(cacheKey, cachedMaterial);
        this.associations.set(cachedMaterial, this.associations.get(material));
      }
      material = cachedMaterial;
    }
    mesh.material = material;
  }
  getMaterialType() {
    return MeshStandardMaterial;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(materialIndex) {
    const parser = this;
    const json = this.json;
    const extensions2 = this.extensions;
    const materialDef = json.materials[materialIndex];
    let materialType;
    const materialParams = {};
    const materialExtensions = materialDef.extensions || {};
    const pending = [];
    if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
      const kmuExtension = extensions2[EXTENSIONS.KHR_MATERIALS_UNLIT];
      materialType = kmuExtension.getMaterialType();
      pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
    } else {
      const metallicRoughness = materialDef.pbrMetallicRoughness || {};
      materialParams.color = new Color(1, 1, 1);
      materialParams.opacity = 1;
      if (Array.isArray(metallicRoughness.baseColorFactor)) {
        const array = metallicRoughness.baseColorFactor;
        materialParams.color.setRGB(array[0], array[1], array[2], LinearSRGBColorSpace);
        materialParams.opacity = array[3];
      }
      if (metallicRoughness.baseColorTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, SRGBColorSpace));
      }
      materialParams.metalness = metallicRoughness.metallicFactor !== void 0 ? metallicRoughness.metallicFactor : 1;
      materialParams.roughness = metallicRoughness.roughnessFactor !== void 0 ? metallicRoughness.roughnessFactor : 1;
      if (metallicRoughness.metallicRoughnessTexture !== void 0) {
        pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture));
        pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture));
      }
      materialType = this._invokeOne(function(ext) {
        return ext.getMaterialType && ext.getMaterialType(materialIndex);
      });
      pending.push(
        Promise.all(
          this._invokeAll(function(ext) {
            return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
          })
        )
      );
    }
    if (materialDef.doubleSided === true) {
      materialParams.side = DoubleSide;
    }
    const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
    if (alphaMode === ALPHA_MODES.BLEND) {
      materialParams.transparent = true;
      materialParams.depthWrite = false;
    } else {
      materialParams.transparent = false;
      if (alphaMode === ALPHA_MODES.MASK) {
        materialParams.alphaTest = materialDef.alphaCutoff !== void 0 ? materialDef.alphaCutoff : 0.5;
      }
    }
    if (materialDef.normalTexture !== void 0 && materialType !== MeshBasicMaterial) {
      pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture));
      materialParams.normalScale = new Vector2(1, 1);
      if (materialDef.normalTexture.scale !== void 0) {
        const scale = materialDef.normalTexture.scale;
        materialParams.normalScale.set(scale, scale);
      }
    }
    if (materialDef.occlusionTexture !== void 0 && materialType !== MeshBasicMaterial) {
      pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture));
      if (materialDef.occlusionTexture.strength !== void 0) {
        materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
      }
    }
    if (materialDef.emissiveFactor !== void 0 && materialType !== MeshBasicMaterial) {
      const emissiveFactor = materialDef.emissiveFactor;
      materialParams.emissive = new Color().setRGB(
        emissiveFactor[0],
        emissiveFactor[1],
        emissiveFactor[2],
        LinearSRGBColorSpace
      );
    }
    if (materialDef.emissiveTexture !== void 0 && materialType !== MeshBasicMaterial) {
      pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, SRGBColorSpace));
    }
    return Promise.all(pending).then(function() {
      const material = new materialType(materialParams);
      if (materialDef.name)
        material.name = materialDef.name;
      assignExtrasToUserData(material, materialDef);
      parser.associations.set(material, { materials: materialIndex });
      if (materialDef.extensions)
        addUnknownExtensionsToUserData(extensions2, material, materialDef);
      return material;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(originalName) {
    const sanitizedName = PropertyBinding.sanitizeNodeName(originalName || "");
    if (sanitizedName in this.nodeNamesUsed) {
      return sanitizedName + "_" + ++this.nodeNamesUsed[sanitizedName];
    } else {
      this.nodeNamesUsed[sanitizedName] = 0;
      return sanitizedName;
    }
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(primitives) {
    const parser = this;
    const extensions2 = this.extensions;
    const cache = this.primitiveCache;
    function createDracoPrimitive(primitive) {
      return extensions2[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
        return addPrimitiveAttributes(geometry, primitive, parser);
      });
    }
    const pending = [];
    for (let i = 0, il = primitives.length; i < il; i++) {
      const primitive = primitives[i];
      const cacheKey = createPrimitiveKey(primitive);
      const cached = cache[cacheKey];
      if (cached) {
        pending.push(cached.promise);
      } else {
        let geometryPromise;
        if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {
          geometryPromise = createDracoPrimitive(primitive);
        } else {
          geometryPromise = addPrimitiveAttributes(new BufferGeometry(), primitive, parser);
        }
        cache[cacheKey] = { primitive, promise: geometryPromise };
        pending.push(geometryPromise);
      }
    }
    return Promise.all(pending);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(meshIndex) {
    const parser = this;
    const json = this.json;
    const extensions2 = this.extensions;
    const meshDef = json.meshes[meshIndex];
    const primitives = meshDef.primitives;
    const pending = [];
    for (let i = 0, il = primitives.length; i < il; i++) {
      const material = primitives[i].material === void 0 ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
      pending.push(material);
    }
    pending.push(parser.loadGeometries(primitives));
    return Promise.all(pending).then(function(results) {
      const materials = results.slice(0, results.length - 1);
      const geometries = results[results.length - 1];
      const meshes = [];
      for (let i = 0, il = geometries.length; i < il; i++) {
        const geometry = geometries[i];
        const primitive = primitives[i];
        let mesh;
        const material = materials[i];
        if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === void 0) {
          mesh = meshDef.isSkinnedMesh === true ? new SkinnedMesh(geometry, material) : new Mesh(geometry, material);
          if (mesh.isSkinnedMesh === true) {
            mesh.normalizeSkinWeights();
          }
          if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) {
            mesh.geometry = toTrianglesDrawMode(mesh.geometry, TriangleStripDrawMode);
          } else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) {
            mesh.geometry = toTrianglesDrawMode(mesh.geometry, TriangleFanDrawMode);
          }
        } else if (primitive.mode === WEBGL_CONSTANTS.LINES) {
          mesh = new LineSegments(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) {
          mesh = new Line(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) {
          mesh = new LineLoop(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS.POINTS) {
          mesh = new Points(geometry, material);
        } else {
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode);
        }
        if (Object.keys(mesh.geometry.morphAttributes).length > 0) {
          updateMorphTargets(mesh, meshDef);
        }
        mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex);
        assignExtrasToUserData(mesh, meshDef);
        if (primitive.extensions)
          addUnknownExtensionsToUserData(extensions2, mesh, primitive);
        parser.assignFinalMaterial(mesh);
        meshes.push(mesh);
      }
      for (let i = 0, il = meshes.length; i < il; i++) {
        parser.associations.set(meshes[i], {
          meshes: meshIndex,
          primitives: i
        });
      }
      if (meshes.length === 1) {
        if (meshDef.extensions)
          addUnknownExtensionsToUserData(extensions2, meshes[0], meshDef);
        return meshes[0];
      }
      const group = new Group();
      if (meshDef.extensions)
        addUnknownExtensionsToUserData(extensions2, group, meshDef);
      parser.associations.set(group, { meshes: meshIndex });
      for (let i = 0, il = meshes.length; i < il; i++) {
        group.add(meshes[i]);
      }
      return group;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(cameraIndex) {
    let camera;
    const cameraDef = this.json.cameras[cameraIndex];
    const params = cameraDef[cameraDef.type];
    if (!params) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    if (cameraDef.type === "perspective") {
      camera = new PerspectiveCamera(
        MathUtils.radToDeg(params.yfov),
        params.aspectRatio || 1,
        params.znear || 1,
        params.zfar || 2e6
      );
    } else if (cameraDef.type === "orthographic") {
      camera = new OrthographicCamera(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar);
    }
    if (cameraDef.name)
      camera.name = this.createUniqueName(cameraDef.name);
    assignExtrasToUserData(camera, cameraDef);
    return Promise.resolve(camera);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(skinIndex) {
    const skinDef = this.json.skins[skinIndex];
    const pending = [];
    for (let i = 0, il = skinDef.joints.length; i < il; i++) {
      pending.push(this._loadNodeShallow(skinDef.joints[i]));
    }
    if (skinDef.inverseBindMatrices !== void 0) {
      pending.push(this.getDependency("accessor", skinDef.inverseBindMatrices));
    } else {
      pending.push(null);
    }
    return Promise.all(pending).then(function(results) {
      const inverseBindMatrices = results.pop();
      const jointNodes = results;
      const bones = [];
      const boneInverses = [];
      for (let i = 0, il = jointNodes.length; i < il; i++) {
        const jointNode = jointNodes[i];
        if (jointNode) {
          bones.push(jointNode);
          const mat = new Matrix4();
          if (inverseBindMatrices !== null) {
            mat.fromArray(inverseBindMatrices.array, i * 16);
          }
          boneInverses.push(mat);
        } else {
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[i]);
        }
      }
      return new Skeleton(bones, boneInverses);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(animationIndex) {
    const json = this.json;
    const parser = this;
    const animationDef = json.animations[animationIndex];
    const animationName = animationDef.name ? animationDef.name : "animation_" + animationIndex;
    const pendingNodes = [];
    const pendingInputAccessors = [];
    const pendingOutputAccessors = [];
    const pendingSamplers = [];
    const pendingTargets = [];
    for (let i = 0, il = animationDef.channels.length; i < il; i++) {
      const channel = animationDef.channels[i];
      const sampler = animationDef.samplers[channel.sampler];
      const target = channel.target;
      const name = target.node;
      const input = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.input] : sampler.input;
      const output = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.output] : sampler.output;
      if (target.node === void 0)
        continue;
      pendingNodes.push(this.getDependency("node", name));
      pendingInputAccessors.push(this.getDependency("accessor", input));
      pendingOutputAccessors.push(this.getDependency("accessor", output));
      pendingSamplers.push(sampler);
      pendingTargets.push(target);
    }
    return Promise.all([
      Promise.all(pendingNodes),
      Promise.all(pendingInputAccessors),
      Promise.all(pendingOutputAccessors),
      Promise.all(pendingSamplers),
      Promise.all(pendingTargets)
    ]).then(function(dependencies) {
      const nodes = dependencies[0];
      const inputAccessors = dependencies[1];
      const outputAccessors = dependencies[2];
      const samplers = dependencies[3];
      const targets = dependencies[4];
      const tracks = [];
      for (let i = 0, il = nodes.length; i < il; i++) {
        const node = nodes[i];
        const inputAccessor = inputAccessors[i];
        const outputAccessor = outputAccessors[i];
        const sampler = samplers[i];
        const target = targets[i];
        if (node === void 0)
          continue;
        if (node.updateMatrix) {
          node.updateMatrix();
        }
        const createdTracks = parser._createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target);
        if (createdTracks) {
          for (let k2 = 0; k2 < createdTracks.length; k2++) {
            tracks.push(createdTracks[k2]);
          }
        }
      }
      return new AnimationClip(animationName, void 0, tracks);
    });
  }
  createNodeMesh(nodeIndex) {
    const json = this.json;
    const parser = this;
    const nodeDef = json.nodes[nodeIndex];
    if (nodeDef.mesh === void 0)
      return null;
    return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
      const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
      if (nodeDef.weights !== void 0) {
        node.traverse(function(o2) {
          if (!o2.isMesh)
            return;
          for (let i = 0, il = nodeDef.weights.length; i < il; i++) {
            o2.morphTargetInfluences[i] = nodeDef.weights[i];
          }
        });
      }
      return node;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(nodeIndex) {
    const json = this.json;
    const parser = this;
    const nodeDef = json.nodes[nodeIndex];
    const nodePending = parser._loadNodeShallow(nodeIndex);
    const childPending = [];
    const childrenDef = nodeDef.children || [];
    for (let i = 0, il = childrenDef.length; i < il; i++) {
      childPending.push(parser.getDependency("node", childrenDef[i]));
    }
    const skeletonPending = nodeDef.skin === void 0 ? Promise.resolve(null) : parser.getDependency("skin", nodeDef.skin);
    return Promise.all([nodePending, Promise.all(childPending), skeletonPending]).then(function(results) {
      const node = results[0];
      const children = results[1];
      const skeleton = results[2];
      if (skeleton !== null) {
        node.traverse(function(mesh) {
          if (!mesh.isSkinnedMesh)
            return;
          mesh.bind(skeleton, _identityMatrix);
        });
      }
      for (let i = 0, il = children.length; i < il; i++) {
        node.add(children[i]);
      }
      return node;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(nodeIndex) {
    const json = this.json;
    const extensions2 = this.extensions;
    const parser = this;
    if (this.nodeCache[nodeIndex] !== void 0) {
      return this.nodeCache[nodeIndex];
    }
    const nodeDef = json.nodes[nodeIndex];
    const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
    const pending = [];
    const meshPromise = parser._invokeOne(function(ext) {
      return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
    });
    if (meshPromise) {
      pending.push(meshPromise);
    }
    if (nodeDef.camera !== void 0) {
      pending.push(
        parser.getDependency("camera", nodeDef.camera).then(function(camera) {
          return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
        })
      );
    }
    parser._invokeAll(function(ext) {
      return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
    }).forEach(function(promise) {
      pending.push(promise);
    });
    this.nodeCache[nodeIndex] = Promise.all(pending).then(function(objects) {
      let node;
      if (nodeDef.isBone === true) {
        node = new Bone();
      } else if (objects.length > 1) {
        node = new Group();
      } else if (objects.length === 1) {
        node = objects[0];
      } else {
        node = new Object3D();
      }
      if (node !== objects[0]) {
        for (let i = 0, il = objects.length; i < il; i++) {
          node.add(objects[i]);
        }
      }
      if (nodeDef.name) {
        node.userData.name = nodeDef.name;
        node.name = nodeName;
      }
      assignExtrasToUserData(node, nodeDef);
      if (nodeDef.extensions)
        addUnknownExtensionsToUserData(extensions2, node, nodeDef);
      if (nodeDef.matrix !== void 0) {
        const matrix = new Matrix4();
        matrix.fromArray(nodeDef.matrix);
        node.applyMatrix4(matrix);
      } else {
        if (nodeDef.translation !== void 0) {
          node.position.fromArray(nodeDef.translation);
        }
        if (nodeDef.rotation !== void 0) {
          node.quaternion.fromArray(nodeDef.rotation);
        }
        if (nodeDef.scale !== void 0) {
          node.scale.fromArray(nodeDef.scale);
        }
      }
      if (!parser.associations.has(node)) {
        parser.associations.set(node, {});
      }
      parser.associations.get(node).nodes = nodeIndex;
      return node;
    });
    return this.nodeCache[nodeIndex];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(sceneIndex) {
    const extensions2 = this.extensions;
    const sceneDef = this.json.scenes[sceneIndex];
    const parser = this;
    const scene = new Group();
    if (sceneDef.name)
      scene.name = parser.createUniqueName(sceneDef.name);
    assignExtrasToUserData(scene, sceneDef);
    if (sceneDef.extensions)
      addUnknownExtensionsToUserData(extensions2, scene, sceneDef);
    const nodeIds = sceneDef.nodes || [];
    const pending = [];
    for (let i = 0, il = nodeIds.length; i < il; i++) {
      pending.push(parser.getDependency("node", nodeIds[i]));
    }
    return Promise.all(pending).then(function(nodes) {
      for (let i = 0, il = nodes.length; i < il; i++) {
        scene.add(nodes[i]);
      }
      const reduceAssociations = (node) => {
        const reducedAssociations = /* @__PURE__ */ new Map();
        for (const [key, value] of parser.associations) {
          if (key instanceof Material || key instanceof Texture) {
            reducedAssociations.set(key, value);
          }
        }
        node.traverse((node2) => {
          const mappings = parser.associations.get(node2);
          if (mappings != null) {
            reducedAssociations.set(node2, mappings);
          }
        });
        return reducedAssociations;
      };
      parser.associations = reduceAssociations(scene);
      return scene;
    });
  }
  _createAnimationTracks(node, inputAccessor, outputAccessor, sampler, target) {
    const tracks = [];
    const targetName = node.name ? node.name : node.uuid;
    const targetNames = [];
    if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) {
      node.traverse(function(object) {
        if (object.morphTargetInfluences) {
          targetNames.push(object.name ? object.name : object.uuid);
        }
      });
    } else {
      targetNames.push(targetName);
    }
    let TypedKeyframeTrack;
    switch (PATH_PROPERTIES[target.path]) {
      case PATH_PROPERTIES.weights:
        TypedKeyframeTrack = NumberKeyframeTrack;
        break;
      case PATH_PROPERTIES.rotation:
        TypedKeyframeTrack = QuaternionKeyframeTrack;
        break;
      case PATH_PROPERTIES.position:
      case PATH_PROPERTIES.scale:
        TypedKeyframeTrack = VectorKeyframeTrack;
        break;
      default:
        switch (outputAccessor.itemSize) {
          case 1:
            TypedKeyframeTrack = NumberKeyframeTrack;
            break;
          case 2:
          case 3:
          default:
            TypedKeyframeTrack = VectorKeyframeTrack;
            break;
        }
        break;
    }
    const interpolation = sampler.interpolation !== void 0 ? INTERPOLATION[sampler.interpolation] : InterpolateLinear;
    const outputArray = this._getArrayFromAccessor(outputAccessor);
    for (let j2 = 0, jl = targetNames.length; j2 < jl; j2++) {
      const track = new TypedKeyframeTrack(
        targetNames[j2] + "." + PATH_PROPERTIES[target.path],
        inputAccessor.array,
        outputArray,
        interpolation
      );
      if (sampler.interpolation === "CUBICSPLINE") {
        this._createCubicSplineTrackInterpolant(track);
      }
      tracks.push(track);
    }
    return tracks;
  }
  _getArrayFromAccessor(accessor) {
    let outputArray = accessor.array;
    if (accessor.normalized) {
      const scale = getNormalizedComponentScale(outputArray.constructor);
      const scaled = new Float32Array(outputArray.length);
      for (let j2 = 0, jl = outputArray.length; j2 < jl; j2++) {
        scaled[j2] = outputArray[j2] * scale;
      }
      outputArray = scaled;
    }
    return outputArray;
  }
  _createCubicSplineTrackInterpolant(track) {
    track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
      const interpolantType = this instanceof QuaternionKeyframeTrack ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
      return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
    };
    track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function computeBounds(geometry, primitiveDef, parser) {
  const attributes = primitiveDef.attributes;
  const box = new Box3();
  if (attributes.POSITION !== void 0) {
    const accessor = parser.json.accessors[attributes.POSITION];
    const min = accessor.min;
    const max2 = accessor.max;
    if (min !== void 0 && max2 !== void 0) {
      box.set(new Vector3(min[0], min[1], min[2]), new Vector3(max2[0], max2[1], max2[2]));
      if (accessor.normalized) {
        const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
        box.min.multiplyScalar(boxScale);
        box.max.multiplyScalar(boxScale);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else {
    return;
  }
  const targets = primitiveDef.targets;
  if (targets !== void 0) {
    const maxDisplacement = new Vector3();
    const vector = new Vector3();
    for (let i = 0, il = targets.length; i < il; i++) {
      const target = targets[i];
      if (target.POSITION !== void 0) {
        const accessor = parser.json.accessors[target.POSITION];
        const min = accessor.min;
        const max2 = accessor.max;
        if (min !== void 0 && max2 !== void 0) {
          vector.setX(Math.max(Math.abs(min[0]), Math.abs(max2[0])));
          vector.setY(Math.max(Math.abs(min[1]), Math.abs(max2[1])));
          vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max2[2])));
          if (accessor.normalized) {
            const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
            vector.multiplyScalar(boxScale);
          }
          maxDisplacement.max(vector);
        } else {
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        }
      }
    }
    box.expandByVector(maxDisplacement);
  }
  geometry.boundingBox = box;
  const sphere = new Sphere();
  box.getCenter(sphere.center);
  sphere.radius = box.min.distanceTo(box.max) / 2;
  geometry.boundingSphere = sphere;
}
function addPrimitiveAttributes(geometry, primitiveDef, parser) {
  const attributes = primitiveDef.attributes;
  const pending = [];
  function assignAttributeAccessor(accessorIndex, attributeName) {
    return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
      geometry.setAttribute(attributeName, accessor);
    });
  }
  for (const gltfAttributeName in attributes) {
    const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
    if (threeAttributeName in geometry.attributes)
      continue;
    pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
  }
  if (primitiveDef.indices !== void 0 && !geometry.index) {
    const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor2) {
      geometry.setIndex(accessor2);
    });
    pending.push(accessor);
  }
  assignExtrasToUserData(geometry, primitiveDef);
  computeBounds(geometry, primitiveDef, parser);
  return Promise.all(pending).then(function() {
    return primitiveDef.targets !== void 0 ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
  });
}
class RGBELoader extends DataTextureLoader {
  constructor(manager) {
    super(manager);
    this.type = HalfFloatType;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(buffer) {
    const rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function(rgbe_error_code, msg) {
      switch (rgbe_error_code) {
        case rgbe_read_error:
          throw new Error("THREE.RGBELoader: Read Error: " + (msg || ""));
        case rgbe_write_error:
          throw new Error("THREE.RGBELoader: Write Error: " + (msg || ""));
        case rgbe_format_error:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (msg || ""));
        default:
        case rgbe_memory_error:
          throw new Error("THREE.RGBELoader: Memory Error: " + (msg || ""));
      }
    }, RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = "\n", fgets = function(buffer2, lineLimit, consume) {
      const chunkSize = 128;
      lineLimit = !lineLimit ? 1024 : lineLimit;
      let p2 = buffer2.pos, i = -1, len = 0, s = "", chunk = String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p2, p2 + chunkSize)));
      while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p2 < buffer2.byteLength) {
        s += chunk;
        len += chunk.length;
        p2 += chunkSize;
        chunk += String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p2, p2 + chunkSize)));
      }
      if (-1 < i) {
        buffer2.pos += len + i + 1;
        return s + chunk.slice(0, i);
      }
      return false;
    }, RGBE_ReadHeader = function(buffer2) {
      const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, header = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let line, match;
      if (buffer2.pos >= buffer2.byteLength || !(line = fgets(buffer2))) {
        rgbe_error(rgbe_read_error, "no header found");
      }
      if (!(match = line.match(magic_token_re))) {
        rgbe_error(rgbe_format_error, "bad initial token");
      }
      header.valid |= RGBE_VALID_PROGRAMTYPE;
      header.programtype = match[1];
      header.string += line + "\n";
      while (true) {
        line = fgets(buffer2);
        if (false === line)
          break;
        header.string += line + "\n";
        if ("#" === line.charAt(0)) {
          header.comments += line + "\n";
          continue;
        }
        if (match = line.match(gamma_re)) {
          header.gamma = parseFloat(match[1]);
        }
        if (match = line.match(exposure_re)) {
          header.exposure = parseFloat(match[1]);
        }
        if (match = line.match(format_re)) {
          header.valid |= RGBE_VALID_FORMAT;
          header.format = match[1];
        }
        if (match = line.match(dimensions_re)) {
          header.valid |= RGBE_VALID_DIMENSIONS;
          header.height = parseInt(match[1], 10);
          header.width = parseInt(match[2], 10);
        }
        if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS)
          break;
      }
      if (!(header.valid & RGBE_VALID_FORMAT)) {
        rgbe_error(rgbe_format_error, "missing format specifier");
      }
      if (!(header.valid & RGBE_VALID_DIMENSIONS)) {
        rgbe_error(rgbe_format_error, "missing image size specifier");
      }
      return header;
    }, RGBE_ReadPixels_RLE = function(buffer2, w2, h22) {
      const scanline_width = w2;
      if (
        // run length encoding is not allowed so read flat
        scanline_width < 8 || scanline_width > 32767 || // this file is not run length encoded
        2 !== buffer2[0] || 2 !== buffer2[1] || buffer2[2] & 128
      ) {
        return new Uint8Array(buffer2);
      }
      if (scanline_width !== (buffer2[2] << 8 | buffer2[3])) {
        rgbe_error(rgbe_format_error, "wrong scanline width");
      }
      const data_rgba = new Uint8Array(4 * w2 * h22);
      if (!data_rgba.length) {
        rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
      }
      let offset = 0, pos = 0;
      const ptr_end = 4 * scanline_width;
      const rgbeStart = new Uint8Array(4);
      const scanline_buffer = new Uint8Array(ptr_end);
      let num_scanlines = h22;
      while (num_scanlines > 0 && pos < buffer2.byteLength) {
        if (pos + 4 > buffer2.byteLength) {
          rgbe_error(rgbe_read_error);
        }
        rgbeStart[0] = buffer2[pos++];
        rgbeStart[1] = buffer2[pos++];
        rgbeStart[2] = buffer2[pos++];
        rgbeStart[3] = buffer2[pos++];
        if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) {
          rgbe_error(rgbe_format_error, "bad rgbe scanline format");
        }
        let ptr = 0, count;
        while (ptr < ptr_end && pos < buffer2.byteLength) {
          count = buffer2[pos++];
          const isEncodedRun = count > 128;
          if (isEncodedRun)
            count -= 128;
          if (0 === count || ptr + count > ptr_end) {
            rgbe_error(rgbe_format_error, "bad scanline data");
          }
          if (isEncodedRun) {
            const byteValue = buffer2[pos++];
            for (let i = 0; i < count; i++) {
              scanline_buffer[ptr++] = byteValue;
            }
          } else {
            scanline_buffer.set(buffer2.subarray(pos, pos + count), ptr);
            ptr += count;
            pos += count;
          }
        }
        const l2 = scanline_width;
        for (let i = 0; i < l2; i++) {
          let off = 0;
          data_rgba[offset] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 1] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 2] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 3] = scanline_buffer[i + off];
          offset += 4;
        }
        num_scanlines--;
      }
      return data_rgba;
    };
    const RGBEByteToRGBFloat = function(sourceArray, sourceOffset, destArray, destOffset) {
      const e2 = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2, e2 - 128) / 255;
      destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
      destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
      destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
      destArray[destOffset + 3] = 1;
    };
    const RGBEByteToRGBHalf = function(sourceArray, sourceOffset, destArray, destOffset) {
      const e2 = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2, e2 - 128) / 255;
      destArray[destOffset + 0] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
      destArray[destOffset + 1] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
      destArray[destOffset + 2] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
      destArray[destOffset + 3] = DataUtils.toHalfFloat(1);
    };
    const byteArray = new Uint8Array(buffer);
    byteArray.pos = 0;
    const rgbe_header_info = RGBE_ReadHeader(byteArray);
    const w = rgbe_header_info.width, h2 = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h2);
    let data, type;
    let numElements;
    switch (this.type) {
      case FloatType:
        numElements = image_rgba_data.length / 4;
        const floatArray = new Float32Array(numElements * 4);
        for (let j2 = 0; j2 < numElements; j2++) {
          RGBEByteToRGBFloat(image_rgba_data, j2 * 4, floatArray, j2 * 4);
        }
        data = floatArray;
        type = FloatType;
        break;
      case HalfFloatType:
        numElements = image_rgba_data.length / 4;
        const halfArray = new Uint16Array(numElements * 4);
        for (let j2 = 0; j2 < numElements; j2++) {
          RGBEByteToRGBHalf(image_rgba_data, j2 * 4, halfArray, j2 * 4);
        }
        data = halfArray;
        type = HalfFloatType;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: w,
      height: h2,
      data,
      header: rgbe_header_info.string,
      gamma: rgbe_header_info.gamma,
      exposure: rgbe_header_info.exposure,
      type
    };
  }
  setDataType(value) {
    this.type = value;
    return this;
  }
  load(url, onLoad, onProgress, onError) {
    function onLoadCallback(texture, texData) {
      switch (texture.type) {
        case FloatType:
        case HalfFloatType:
          if ("colorSpace" in texture)
            texture.colorSpace = "srgb-linear";
          else
            texture.encoding = 3e3;
          texture.minFilter = LinearFilter;
          texture.magFilter = LinearFilter;
          texture.generateMipmaps = false;
          texture.flipY = true;
          break;
      }
      if (onLoad)
        onLoad(texture, texData);
    }
    return super.load(url, onLoadCallback, onProgress, onError);
  }
}
const hasColorSpace = version >= 152;
class EXRLoader extends DataTextureLoader {
  constructor(manager) {
    super(manager);
    this.type = HalfFloatType;
  }
  parse(buffer) {
    const USHORT_RANGE = 1 << 16;
    const BITMAP_SIZE = USHORT_RANGE >> 3;
    const HUF_ENCBITS = 16;
    const HUF_DECBITS = 14;
    const HUF_ENCSIZE = (1 << HUF_ENCBITS) + 1;
    const HUF_DECSIZE = 1 << HUF_DECBITS;
    const HUF_DECMASK = HUF_DECSIZE - 1;
    const NBITS = 16;
    const A_OFFSET = 1 << NBITS - 1;
    const MOD_MASK = (1 << NBITS) - 1;
    const SHORT_ZEROCODE_RUN = 59;
    const LONG_ZEROCODE_RUN = 63;
    const SHORTEST_LONG_RUN = 2 + LONG_ZEROCODE_RUN - SHORT_ZEROCODE_RUN;
    const ULONG_SIZE = 8;
    const FLOAT32_SIZE = 4;
    const INT32_SIZE = 4;
    const INT16_SIZE = 2;
    const INT8_SIZE = 1;
    const STATIC_HUFFMAN = 0;
    const DEFLATE = 1;
    const UNKNOWN = 0;
    const LOSSY_DCT = 1;
    const RLE = 2;
    const logBase = Math.pow(2.7182818, 2.2);
    function reverseLutFromBitmap(bitmap, lut) {
      var k2 = 0;
      for (var i = 0; i < USHORT_RANGE; ++i) {
        if (i == 0 || bitmap[i >> 3] & 1 << (i & 7)) {
          lut[k2++] = i;
        }
      }
      var n = k2 - 1;
      while (k2 < USHORT_RANGE)
        lut[k2++] = 0;
      return n;
    }
    function hufClearDecTable(hdec) {
      for (var i = 0; i < HUF_DECSIZE; i++) {
        hdec[i] = {};
        hdec[i].len = 0;
        hdec[i].lit = 0;
        hdec[i].p = null;
      }
    }
    const getBitsReturn = { l: 0, c: 0, lc: 0 };
    function getBits(nBits, c2, lc, uInt8Array2, inOffset) {
      while (lc < nBits) {
        c2 = c2 << 8 | parseUint8Array(uInt8Array2, inOffset);
        lc += 8;
      }
      lc -= nBits;
      getBitsReturn.l = c2 >> lc & (1 << nBits) - 1;
      getBitsReturn.c = c2;
      getBitsReturn.lc = lc;
    }
    const hufTableBuffer = new Array(59);
    function hufCanonicalCodeTable(hcode) {
      for (var i = 0; i <= 58; ++i)
        hufTableBuffer[i] = 0;
      for (var i = 0; i < HUF_ENCSIZE; ++i)
        hufTableBuffer[hcode[i]] += 1;
      var c2 = 0;
      for (var i = 58; i > 0; --i) {
        var nc = c2 + hufTableBuffer[i] >> 1;
        hufTableBuffer[i] = c2;
        c2 = nc;
      }
      for (var i = 0; i < HUF_ENCSIZE; ++i) {
        var l2 = hcode[i];
        if (l2 > 0)
          hcode[i] = l2 | hufTableBuffer[l2]++ << 6;
      }
    }
    function hufUnpackEncTable(uInt8Array2, inDataView, inOffset, ni, im, iM, hcode) {
      var p2 = inOffset;
      var c2 = 0;
      var lc = 0;
      for (; im <= iM; im++) {
        if (p2.value - inOffset.value > ni)
          return false;
        getBits(6, c2, lc, uInt8Array2, p2);
        var l2 = getBitsReturn.l;
        c2 = getBitsReturn.c;
        lc = getBitsReturn.lc;
        hcode[im] = l2;
        if (l2 == LONG_ZEROCODE_RUN) {
          if (p2.value - inOffset.value > ni) {
            throw "Something wrong with hufUnpackEncTable";
          }
          getBits(8, c2, lc, uInt8Array2, p2);
          var zerun = getBitsReturn.l + SHORTEST_LONG_RUN;
          c2 = getBitsReturn.c;
          lc = getBitsReturn.lc;
          if (im + zerun > iM + 1) {
            throw "Something wrong with hufUnpackEncTable";
          }
          while (zerun--)
            hcode[im++] = 0;
          im--;
        } else if (l2 >= SHORT_ZEROCODE_RUN) {
          var zerun = l2 - SHORT_ZEROCODE_RUN + 2;
          if (im + zerun > iM + 1) {
            throw "Something wrong with hufUnpackEncTable";
          }
          while (zerun--)
            hcode[im++] = 0;
          im--;
        }
      }
      hufCanonicalCodeTable(hcode);
    }
    function hufLength(code) {
      return code & 63;
    }
    function hufCode(code) {
      return code >> 6;
    }
    function hufBuildDecTable(hcode, im, iM, hdecod) {
      for (; im <= iM; im++) {
        var c2 = hufCode(hcode[im]);
        var l2 = hufLength(hcode[im]);
        if (c2 >> l2) {
          throw "Invalid table entry";
        }
        if (l2 > HUF_DECBITS) {
          var pl = hdecod[c2 >> l2 - HUF_DECBITS];
          if (pl.len) {
            throw "Invalid table entry";
          }
          pl.lit++;
          if (pl.p) {
            var p2 = pl.p;
            pl.p = new Array(pl.lit);
            for (var i = 0; i < pl.lit - 1; ++i) {
              pl.p[i] = p2[i];
            }
          } else {
            pl.p = new Array(1);
          }
          pl.p[pl.lit - 1] = im;
        } else if (l2) {
          var plOffset = 0;
          for (var i = 1 << HUF_DECBITS - l2; i > 0; i--) {
            var pl = hdecod[(c2 << HUF_DECBITS - l2) + plOffset];
            if (pl.len || pl.p) {
              throw "Invalid table entry";
            }
            pl.len = l2;
            pl.lit = im;
            plOffset++;
          }
        }
      }
      return true;
    }
    const getCharReturn = { c: 0, lc: 0 };
    function getChar(c2, lc, uInt8Array2, inOffset) {
      c2 = c2 << 8 | parseUint8Array(uInt8Array2, inOffset);
      lc += 8;
      getCharReturn.c = c2;
      getCharReturn.lc = lc;
    }
    const getCodeReturn = { c: 0, lc: 0 };
    function getCode(po, rlc, c2, lc, uInt8Array2, inDataView, inOffset, outBuffer, outBufferOffset, outBufferEndOffset) {
      if (po == rlc) {
        if (lc < 8) {
          getChar(c2, lc, uInt8Array2, inOffset);
          c2 = getCharReturn.c;
          lc = getCharReturn.lc;
        }
        lc -= 8;
        var cs = c2 >> lc;
        var cs = new Uint8Array([cs])[0];
        if (outBufferOffset.value + cs > outBufferEndOffset) {
          return false;
        }
        var s = outBuffer[outBufferOffset.value - 1];
        while (cs-- > 0) {
          outBuffer[outBufferOffset.value++] = s;
        }
      } else if (outBufferOffset.value < outBufferEndOffset) {
        outBuffer[outBufferOffset.value++] = po;
      } else {
        return false;
      }
      getCodeReturn.c = c2;
      getCodeReturn.lc = lc;
    }
    function UInt16(value) {
      return value & 65535;
    }
    function Int16(value) {
      var ref = UInt16(value);
      return ref > 32767 ? ref - 65536 : ref;
    }
    const wdec14Return = { a: 0, b: 0 };
    function wdec14(l2, h2) {
      var ls = Int16(l2);
      var hs = Int16(h2);
      var hi = hs;
      var ai = ls + (hi & 1) + (hi >> 1);
      var as = ai;
      var bs = ai - hi;
      wdec14Return.a = as;
      wdec14Return.b = bs;
    }
    function wdec16(l2, h2) {
      var m2 = UInt16(l2);
      var d = UInt16(h2);
      var bb = m2 - (d >> 1) & MOD_MASK;
      var aa = d + bb - A_OFFSET & MOD_MASK;
      wdec14Return.a = aa;
      wdec14Return.b = bb;
    }
    function wav2Decode(buffer2, j2, nx, ox, ny, oy, mx) {
      var w14 = mx < 1 << 14;
      var n = nx > ny ? ny : nx;
      var p2 = 1;
      var p22;
      while (p2 <= n)
        p2 <<= 1;
      p2 >>= 1;
      p22 = p2;
      p2 >>= 1;
      while (p2 >= 1) {
        var py = 0;
        var ey = py + oy * (ny - p22);
        var oy1 = oy * p2;
        var oy2 = oy * p22;
        var ox1 = ox * p2;
        var ox2 = ox * p22;
        var i00, i01, i10, i11;
        for (; py <= ey; py += oy2) {
          var px = py;
          var ex = py + ox * (nx - p22);
          for (; px <= ex; px += ox2) {
            var p01 = px + ox1;
            var p10 = px + oy1;
            var p11 = p10 + ox1;
            if (w14) {
              wdec14(buffer2[px + j2], buffer2[p10 + j2]);
              i00 = wdec14Return.a;
              i10 = wdec14Return.b;
              wdec14(buffer2[p01 + j2], buffer2[p11 + j2]);
              i01 = wdec14Return.a;
              i11 = wdec14Return.b;
              wdec14(i00, i01);
              buffer2[px + j2] = wdec14Return.a;
              buffer2[p01 + j2] = wdec14Return.b;
              wdec14(i10, i11);
              buffer2[p10 + j2] = wdec14Return.a;
              buffer2[p11 + j2] = wdec14Return.b;
            } else {
              wdec16(buffer2[px + j2], buffer2[p10 + j2]);
              i00 = wdec14Return.a;
              i10 = wdec14Return.b;
              wdec16(buffer2[p01 + j2], buffer2[p11 + j2]);
              i01 = wdec14Return.a;
              i11 = wdec14Return.b;
              wdec16(i00, i01);
              buffer2[px + j2] = wdec14Return.a;
              buffer2[p01 + j2] = wdec14Return.b;
              wdec16(i10, i11);
              buffer2[p10 + j2] = wdec14Return.a;
              buffer2[p11 + j2] = wdec14Return.b;
            }
          }
          if (nx & p2) {
            var p10 = px + oy1;
            if (w14)
              wdec14(buffer2[px + j2], buffer2[p10 + j2]);
            else
              wdec16(buffer2[px + j2], buffer2[p10 + j2]);
            i00 = wdec14Return.a;
            buffer2[p10 + j2] = wdec14Return.b;
            buffer2[px + j2] = i00;
          }
        }
        if (ny & p2) {
          var px = py;
          var ex = py + ox * (nx - p22);
          for (; px <= ex; px += ox2) {
            var p01 = px + ox1;
            if (w14)
              wdec14(buffer2[px + j2], buffer2[p01 + j2]);
            else
              wdec16(buffer2[px + j2], buffer2[p01 + j2]);
            i00 = wdec14Return.a;
            buffer2[p01 + j2] = wdec14Return.b;
            buffer2[px + j2] = i00;
          }
        }
        p22 = p2;
        p2 >>= 1;
      }
      return py;
    }
    function hufDecode(encodingTable, decodingTable, uInt8Array2, inDataView, inOffset, ni, rlc, no, outBuffer, outOffset) {
      var c2 = 0;
      var lc = 0;
      var outBufferEndOffset = no;
      var inOffsetEnd = Math.trunc(inOffset.value + (ni + 7) / 8);
      while (inOffset.value < inOffsetEnd) {
        getChar(c2, lc, uInt8Array2, inOffset);
        c2 = getCharReturn.c;
        lc = getCharReturn.lc;
        while (lc >= HUF_DECBITS) {
          var index = c2 >> lc - HUF_DECBITS & HUF_DECMASK;
          var pl = decodingTable[index];
          if (pl.len) {
            lc -= pl.len;
            getCode(pl.lit, rlc, c2, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
            c2 = getCodeReturn.c;
            lc = getCodeReturn.lc;
          } else {
            if (!pl.p) {
              throw "hufDecode issues";
            }
            var j2;
            for (j2 = 0; j2 < pl.lit; j2++) {
              var l2 = hufLength(encodingTable[pl.p[j2]]);
              while (lc < l2 && inOffset.value < inOffsetEnd) {
                getChar(c2, lc, uInt8Array2, inOffset);
                c2 = getCharReturn.c;
                lc = getCharReturn.lc;
              }
              if (lc >= l2) {
                if (hufCode(encodingTable[pl.p[j2]]) == (c2 >> lc - l2 & (1 << l2) - 1)) {
                  lc -= l2;
                  getCode(
                    pl.p[j2],
                    rlc,
                    c2,
                    lc,
                    uInt8Array2,
                    inDataView,
                    inOffset,
                    outBuffer,
                    outOffset,
                    outBufferEndOffset
                  );
                  c2 = getCodeReturn.c;
                  lc = getCodeReturn.lc;
                  break;
                }
              }
            }
            if (j2 == pl.lit) {
              throw "hufDecode issues";
            }
          }
        }
      }
      var i = 8 - ni & 7;
      c2 >>= i;
      lc -= i;
      while (lc > 0) {
        var pl = decodingTable[c2 << HUF_DECBITS - lc & HUF_DECMASK];
        if (pl.len) {
          lc -= pl.len;
          getCode(pl.lit, rlc, c2, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
          c2 = getCodeReturn.c;
          lc = getCodeReturn.lc;
        } else {
          throw "hufDecode issues";
        }
      }
      return true;
    }
    function hufUncompress(uInt8Array2, inDataView, inOffset, nCompressed, outBuffer, nRaw) {
      var outOffset = { value: 0 };
      var initialInOffset = inOffset.value;
      var im = parseUint32(inDataView, inOffset);
      var iM = parseUint32(inDataView, inOffset);
      inOffset.value += 4;
      var nBits = parseUint32(inDataView, inOffset);
      inOffset.value += 4;
      if (im < 0 || im >= HUF_ENCSIZE || iM < 0 || iM >= HUF_ENCSIZE) {
        throw "Something wrong with HUF_ENCSIZE";
      }
      var freq = new Array(HUF_ENCSIZE);
      var hdec = new Array(HUF_DECSIZE);
      hufClearDecTable(hdec);
      var ni = nCompressed - (inOffset.value - initialInOffset);
      hufUnpackEncTable(uInt8Array2, inDataView, inOffset, ni, im, iM, freq);
      if (nBits > 8 * (nCompressed - (inOffset.value - initialInOffset))) {
        throw "Something wrong with hufUncompress";
      }
      hufBuildDecTable(freq, im, iM, hdec);
      hufDecode(freq, hdec, uInt8Array2, inDataView, inOffset, nBits, iM, nRaw, outBuffer, outOffset);
    }
    function applyLut(lut, data, nData) {
      for (var i = 0; i < nData; ++i) {
        data[i] = lut[data[i]];
      }
    }
    function predictor(source) {
      for (var t2 = 1; t2 < source.length; t2++) {
        var d = source[t2 - 1] + source[t2] - 128;
        source[t2] = d;
      }
    }
    function interleaveScalar(source, out) {
      var t1 = 0;
      var t2 = Math.floor((source.length + 1) / 2);
      var s = 0;
      var stop = source.length - 1;
      while (true) {
        if (s > stop)
          break;
        out[s++] = source[t1++];
        if (s > stop)
          break;
        out[s++] = source[t2++];
      }
    }
    function decodeRunLength(source) {
      var size = source.byteLength;
      var out = new Array();
      var p2 = 0;
      var reader = new DataView(source);
      while (size > 0) {
        var l2 = reader.getInt8(p2++);
        if (l2 < 0) {
          var count = -l2;
          size -= count + 1;
          for (var i = 0; i < count; i++) {
            out.push(reader.getUint8(p2++));
          }
        } else {
          var count = l2;
          size -= 2;
          var value = reader.getUint8(p2++);
          for (var i = 0; i < count + 1; i++) {
            out.push(value);
          }
        }
      }
      return out;
    }
    function lossyDctDecode(cscSet, rowPtrs, channelData, acBuffer, dcBuffer, outBuffer) {
      var dataView = new DataView(outBuffer.buffer);
      var width = channelData[cscSet.idx[0]].width;
      var height = channelData[cscSet.idx[0]].height;
      var numComp = 3;
      var numFullBlocksX = Math.floor(width / 8);
      var numBlocksX = Math.ceil(width / 8);
      var numBlocksY = Math.ceil(height / 8);
      var leftoverX = width - (numBlocksX - 1) * 8;
      var leftoverY = height - (numBlocksY - 1) * 8;
      var currAcComp = { value: 0 };
      var currDcComp = new Array(numComp);
      var dctData = new Array(numComp);
      var halfZigBlock = new Array(numComp);
      var rowBlock = new Array(numComp);
      var rowOffsets = new Array(numComp);
      for (let comp2 = 0; comp2 < numComp; ++comp2) {
        rowOffsets[comp2] = rowPtrs[cscSet.idx[comp2]];
        currDcComp[comp2] = comp2 < 1 ? 0 : currDcComp[comp2 - 1] + numBlocksX * numBlocksY;
        dctData[comp2] = new Float32Array(64);
        halfZigBlock[comp2] = new Uint16Array(64);
        rowBlock[comp2] = new Uint16Array(numBlocksX * 64);
      }
      for (let blocky = 0; blocky < numBlocksY; ++blocky) {
        var maxY = 8;
        if (blocky == numBlocksY - 1)
          maxY = leftoverY;
        var maxX = 8;
        for (let blockx = 0; blockx < numBlocksX; ++blockx) {
          if (blockx == numBlocksX - 1)
            maxX = leftoverX;
          for (let comp2 = 0; comp2 < numComp; ++comp2) {
            halfZigBlock[comp2].fill(0);
            halfZigBlock[comp2][0] = dcBuffer[currDcComp[comp2]++];
            unRleAC(currAcComp, acBuffer, halfZigBlock[comp2]);
            unZigZag(halfZigBlock[comp2], dctData[comp2]);
            dctInverse(dctData[comp2]);
          }
          {
            csc709Inverse(dctData);
          }
          for (let comp2 = 0; comp2 < numComp; ++comp2) {
            convertToHalf(dctData[comp2], rowBlock[comp2], blockx * 64);
          }
        }
        let offset2 = 0;
        for (let comp2 = 0; comp2 < numComp; ++comp2) {
          const type2 = channelData[cscSet.idx[comp2]].type;
          for (let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2) {
            offset2 = rowOffsets[comp2][y2];
            for (let blockx = 0; blockx < numFullBlocksX; ++blockx) {
              const src = blockx * 64 + (y2 & 7) * 8;
              dataView.setUint16(offset2 + 0 * INT16_SIZE * type2, rowBlock[comp2][src + 0], true);
              dataView.setUint16(offset2 + 1 * INT16_SIZE * type2, rowBlock[comp2][src + 1], true);
              dataView.setUint16(offset2 + 2 * INT16_SIZE * type2, rowBlock[comp2][src + 2], true);
              dataView.setUint16(offset2 + 3 * INT16_SIZE * type2, rowBlock[comp2][src + 3], true);
              dataView.setUint16(offset2 + 4 * INT16_SIZE * type2, rowBlock[comp2][src + 4], true);
              dataView.setUint16(offset2 + 5 * INT16_SIZE * type2, rowBlock[comp2][src + 5], true);
              dataView.setUint16(offset2 + 6 * INT16_SIZE * type2, rowBlock[comp2][src + 6], true);
              dataView.setUint16(offset2 + 7 * INT16_SIZE * type2, rowBlock[comp2][src + 7], true);
              offset2 += 8 * INT16_SIZE * type2;
            }
          }
          if (numFullBlocksX != numBlocksX) {
            for (let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2) {
              const offset3 = rowOffsets[comp2][y2] + 8 * numFullBlocksX * INT16_SIZE * type2;
              const src = numFullBlocksX * 64 + (y2 & 7) * 8;
              for (let x2 = 0; x2 < maxX; ++x2) {
                dataView.setUint16(offset3 + x2 * INT16_SIZE * type2, rowBlock[comp2][src + x2], true);
              }
            }
          }
        }
      }
      var halfRow = new Uint16Array(width);
      var dataView = new DataView(outBuffer.buffer);
      for (var comp = 0; comp < numComp; ++comp) {
        channelData[cscSet.idx[comp]].decoded = true;
        var type = channelData[cscSet.idx[comp]].type;
        if (channelData[comp].type != 2)
          continue;
        for (var y = 0; y < height; ++y) {
          const offset2 = rowOffsets[comp][y];
          for (var x = 0; x < width; ++x) {
            halfRow[x] = dataView.getUint16(offset2 + x * INT16_SIZE * type, true);
          }
          for (var x = 0; x < width; ++x) {
            dataView.setFloat32(offset2 + x * INT16_SIZE * type, decodeFloat16(halfRow[x]), true);
          }
        }
      }
    }
    function unRleAC(currAcComp, acBuffer, halfZigBlock) {
      var acValue;
      var dctComp = 1;
      while (dctComp < 64) {
        acValue = acBuffer[currAcComp.value];
        if (acValue == 65280) {
          dctComp = 64;
        } else if (acValue >> 8 == 255) {
          dctComp += acValue & 255;
        } else {
          halfZigBlock[dctComp] = acValue;
          dctComp++;
        }
        currAcComp.value++;
      }
    }
    function unZigZag(src, dst) {
      dst[0] = decodeFloat16(src[0]);
      dst[1] = decodeFloat16(src[1]);
      dst[2] = decodeFloat16(src[5]);
      dst[3] = decodeFloat16(src[6]);
      dst[4] = decodeFloat16(src[14]);
      dst[5] = decodeFloat16(src[15]);
      dst[6] = decodeFloat16(src[27]);
      dst[7] = decodeFloat16(src[28]);
      dst[8] = decodeFloat16(src[2]);
      dst[9] = decodeFloat16(src[4]);
      dst[10] = decodeFloat16(src[7]);
      dst[11] = decodeFloat16(src[13]);
      dst[12] = decodeFloat16(src[16]);
      dst[13] = decodeFloat16(src[26]);
      dst[14] = decodeFloat16(src[29]);
      dst[15] = decodeFloat16(src[42]);
      dst[16] = decodeFloat16(src[3]);
      dst[17] = decodeFloat16(src[8]);
      dst[18] = decodeFloat16(src[12]);
      dst[19] = decodeFloat16(src[17]);
      dst[20] = decodeFloat16(src[25]);
      dst[21] = decodeFloat16(src[30]);
      dst[22] = decodeFloat16(src[41]);
      dst[23] = decodeFloat16(src[43]);
      dst[24] = decodeFloat16(src[9]);
      dst[25] = decodeFloat16(src[11]);
      dst[26] = decodeFloat16(src[18]);
      dst[27] = decodeFloat16(src[24]);
      dst[28] = decodeFloat16(src[31]);
      dst[29] = decodeFloat16(src[40]);
      dst[30] = decodeFloat16(src[44]);
      dst[31] = decodeFloat16(src[53]);
      dst[32] = decodeFloat16(src[10]);
      dst[33] = decodeFloat16(src[19]);
      dst[34] = decodeFloat16(src[23]);
      dst[35] = decodeFloat16(src[32]);
      dst[36] = decodeFloat16(src[39]);
      dst[37] = decodeFloat16(src[45]);
      dst[38] = decodeFloat16(src[52]);
      dst[39] = decodeFloat16(src[54]);
      dst[40] = decodeFloat16(src[20]);
      dst[41] = decodeFloat16(src[22]);
      dst[42] = decodeFloat16(src[33]);
      dst[43] = decodeFloat16(src[38]);
      dst[44] = decodeFloat16(src[46]);
      dst[45] = decodeFloat16(src[51]);
      dst[46] = decodeFloat16(src[55]);
      dst[47] = decodeFloat16(src[60]);
      dst[48] = decodeFloat16(src[21]);
      dst[49] = decodeFloat16(src[34]);
      dst[50] = decodeFloat16(src[37]);
      dst[51] = decodeFloat16(src[47]);
      dst[52] = decodeFloat16(src[50]);
      dst[53] = decodeFloat16(src[56]);
      dst[54] = decodeFloat16(src[59]);
      dst[55] = decodeFloat16(src[61]);
      dst[56] = decodeFloat16(src[35]);
      dst[57] = decodeFloat16(src[36]);
      dst[58] = decodeFloat16(src[48]);
      dst[59] = decodeFloat16(src[49]);
      dst[60] = decodeFloat16(src[57]);
      dst[61] = decodeFloat16(src[58]);
      dst[62] = decodeFloat16(src[62]);
      dst[63] = decodeFloat16(src[63]);
    }
    function dctInverse(data) {
      const a2 = 0.5 * Math.cos(3.14159 / 4);
      const b2 = 0.5 * Math.cos(3.14159 / 16);
      const c2 = 0.5 * Math.cos(3.14159 / 8);
      const d = 0.5 * Math.cos(3 * 3.14159 / 16);
      const e2 = 0.5 * Math.cos(5 * 3.14159 / 16);
      const f = 0.5 * Math.cos(3 * 3.14159 / 8);
      const g2 = 0.5 * Math.cos(7 * 3.14159 / 16);
      var alpha = new Array(4);
      var beta = new Array(4);
      var theta = new Array(4);
      var gamma = new Array(4);
      for (var row = 0; row < 8; ++row) {
        var rowPtr = row * 8;
        alpha[0] = c2 * data[rowPtr + 2];
        alpha[1] = f * data[rowPtr + 2];
        alpha[2] = c2 * data[rowPtr + 6];
        alpha[3] = f * data[rowPtr + 6];
        beta[0] = b2 * data[rowPtr + 1] + d * data[rowPtr + 3] + e2 * data[rowPtr + 5] + g2 * data[rowPtr + 7];
        beta[1] = d * data[rowPtr + 1] - g2 * data[rowPtr + 3] - b2 * data[rowPtr + 5] - e2 * data[rowPtr + 7];
        beta[2] = e2 * data[rowPtr + 1] - b2 * data[rowPtr + 3] + g2 * data[rowPtr + 5] + d * data[rowPtr + 7];
        beta[3] = g2 * data[rowPtr + 1] - e2 * data[rowPtr + 3] + d * data[rowPtr + 5] - b2 * data[rowPtr + 7];
        theta[0] = a2 * (data[rowPtr + 0] + data[rowPtr + 4]);
        theta[3] = a2 * (data[rowPtr + 0] - data[rowPtr + 4]);
        theta[1] = alpha[0] + alpha[3];
        theta[2] = alpha[1] - alpha[2];
        gamma[0] = theta[0] + theta[1];
        gamma[1] = theta[3] + theta[2];
        gamma[2] = theta[3] - theta[2];
        gamma[3] = theta[0] - theta[1];
        data[rowPtr + 0] = gamma[0] + beta[0];
        data[rowPtr + 1] = gamma[1] + beta[1];
        data[rowPtr + 2] = gamma[2] + beta[2];
        data[rowPtr + 3] = gamma[3] + beta[3];
        data[rowPtr + 4] = gamma[3] - beta[3];
        data[rowPtr + 5] = gamma[2] - beta[2];
        data[rowPtr + 6] = gamma[1] - beta[1];
        data[rowPtr + 7] = gamma[0] - beta[0];
      }
      for (var column = 0; column < 8; ++column) {
        alpha[0] = c2 * data[16 + column];
        alpha[1] = f * data[16 + column];
        alpha[2] = c2 * data[48 + column];
        alpha[3] = f * data[48 + column];
        beta[0] = b2 * data[8 + column] + d * data[24 + column] + e2 * data[40 + column] + g2 * data[56 + column];
        beta[1] = d * data[8 + column] - g2 * data[24 + column] - b2 * data[40 + column] - e2 * data[56 + column];
        beta[2] = e2 * data[8 + column] - b2 * data[24 + column] + g2 * data[40 + column] + d * data[56 + column];
        beta[3] = g2 * data[8 + column] - e2 * data[24 + column] + d * data[40 + column] - b2 * data[56 + column];
        theta[0] = a2 * (data[column] + data[32 + column]);
        theta[3] = a2 * (data[column] - data[32 + column]);
        theta[1] = alpha[0] + alpha[3];
        theta[2] = alpha[1] - alpha[2];
        gamma[0] = theta[0] + theta[1];
        gamma[1] = theta[3] + theta[2];
        gamma[2] = theta[3] - theta[2];
        gamma[3] = theta[0] - theta[1];
        data[0 + column] = gamma[0] + beta[0];
        data[8 + column] = gamma[1] + beta[1];
        data[16 + column] = gamma[2] + beta[2];
        data[24 + column] = gamma[3] + beta[3];
        data[32 + column] = gamma[3] - beta[3];
        data[40 + column] = gamma[2] - beta[2];
        data[48 + column] = gamma[1] - beta[1];
        data[56 + column] = gamma[0] - beta[0];
      }
    }
    function csc709Inverse(data) {
      for (var i = 0; i < 64; ++i) {
        var y = data[0][i];
        var cb = data[1][i];
        var cr = data[2][i];
        data[0][i] = y + 1.5747 * cr;
        data[1][i] = y - 0.1873 * cb - 0.4682 * cr;
        data[2][i] = y + 1.8556 * cb;
      }
    }
    function convertToHalf(src, dst, idx) {
      for (var i = 0; i < 64; ++i) {
        dst[idx + i] = DataUtils.toHalfFloat(toLinear(src[i]));
      }
    }
    function toLinear(float) {
      if (float <= 1) {
        return Math.sign(float) * Math.pow(Math.abs(float), 2.2);
      } else {
        return Math.sign(float) * Math.pow(logBase, Math.abs(float) - 1);
      }
    }
    function uncompressRAW(info) {
      return new DataView(info.array.buffer, info.offset.value, info.size);
    }
    function uncompressRLE(info) {
      var compressed = info.viewer.buffer.slice(info.offset.value, info.offset.value + info.size);
      var rawBuffer = new Uint8Array(decodeRunLength(compressed));
      var tmpBuffer = new Uint8Array(rawBuffer.length);
      predictor(rawBuffer);
      interleaveScalar(rawBuffer, tmpBuffer);
      return new DataView(tmpBuffer.buffer);
    }
    function uncompressZIP(info) {
      var compressed = info.array.slice(info.offset.value, info.offset.value + info.size);
      var rawBuffer = unzlibSync(compressed);
      var tmpBuffer = new Uint8Array(rawBuffer.length);
      predictor(rawBuffer);
      interleaveScalar(rawBuffer, tmpBuffer);
      return new DataView(tmpBuffer.buffer);
    }
    function uncompressPIZ(info) {
      var inDataView = info.viewer;
      var inOffset = { value: info.offset.value };
      var outBuffer = new Uint16Array(info.width * info.scanlineBlockSize * (info.channels * info.type));
      var bitmap = new Uint8Array(BITMAP_SIZE);
      var outBufferEnd = 0;
      var pizChannelData = new Array(info.channels);
      for (var i = 0; i < info.channels; i++) {
        pizChannelData[i] = {};
        pizChannelData[i]["start"] = outBufferEnd;
        pizChannelData[i]["end"] = pizChannelData[i]["start"];
        pizChannelData[i]["nx"] = info.width;
        pizChannelData[i]["ny"] = info.lines;
        pizChannelData[i]["size"] = info.type;
        outBufferEnd += pizChannelData[i].nx * pizChannelData[i].ny * pizChannelData[i].size;
      }
      var minNonZero = parseUint16(inDataView, inOffset);
      var maxNonZero = parseUint16(inDataView, inOffset);
      if (maxNonZero >= BITMAP_SIZE) {
        throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
      }
      if (minNonZero <= maxNonZero) {
        for (var i = 0; i < maxNonZero - minNonZero + 1; i++) {
          bitmap[i + minNonZero] = parseUint8(inDataView, inOffset);
        }
      }
      var lut = new Uint16Array(USHORT_RANGE);
      var maxValue = reverseLutFromBitmap(bitmap, lut);
      var length = parseUint32(inDataView, inOffset);
      hufUncompress(info.array, inDataView, inOffset, length, outBuffer, outBufferEnd);
      for (var i = 0; i < info.channels; ++i) {
        var cd = pizChannelData[i];
        for (var j2 = 0; j2 < pizChannelData[i].size; ++j2) {
          wav2Decode(outBuffer, cd.start + j2, cd.nx, cd.size, cd.ny, cd.nx * cd.size, maxValue);
        }
      }
      applyLut(lut, outBuffer, outBufferEnd);
      var tmpOffset2 = 0;
      var tmpBuffer = new Uint8Array(outBuffer.buffer.byteLength);
      for (var y = 0; y < info.lines; y++) {
        for (var c2 = 0; c2 < info.channels; c2++) {
          var cd = pizChannelData[c2];
          var n = cd.nx * cd.size;
          var cp = new Uint8Array(outBuffer.buffer, cd.end * INT16_SIZE, n * INT16_SIZE);
          tmpBuffer.set(cp, tmpOffset2);
          tmpOffset2 += n * INT16_SIZE;
          cd.end += n;
        }
      }
      return new DataView(tmpBuffer.buffer);
    }
    function uncompressPXR(info) {
      var compressed = info.array.slice(info.offset.value, info.offset.value + info.size);
      var rawBuffer = unzlibSync(compressed);
      const sz = info.lines * info.channels * info.width;
      const tmpBuffer = info.type == 1 ? new Uint16Array(sz) : new Uint32Array(sz);
      let tmpBufferEnd = 0;
      let writePtr = 0;
      const ptr = new Array(4);
      for (let y = 0; y < info.lines; y++) {
        for (let c2 = 0; c2 < info.channels; c2++) {
          let pixel = 0;
          switch (info.type) {
            case 1:
              ptr[0] = tmpBufferEnd;
              ptr[1] = ptr[0] + info.width;
              tmpBufferEnd = ptr[1] + info.width;
              for (let j2 = 0; j2 < info.width; ++j2) {
                const diff = rawBuffer[ptr[0]++] << 8 | rawBuffer[ptr[1]++];
                pixel += diff;
                tmpBuffer[writePtr] = pixel;
                writePtr++;
              }
              break;
            case 2:
              ptr[0] = tmpBufferEnd;
              ptr[1] = ptr[0] + info.width;
              ptr[2] = ptr[1] + info.width;
              tmpBufferEnd = ptr[2] + info.width;
              for (let j2 = 0; j2 < info.width; ++j2) {
                const diff = rawBuffer[ptr[0]++] << 24 | rawBuffer[ptr[1]++] << 16 | rawBuffer[ptr[2]++] << 8;
                pixel += diff;
                tmpBuffer[writePtr] = pixel;
                writePtr++;
              }
              break;
          }
        }
      }
      return new DataView(tmpBuffer.buffer);
    }
    function uncompressDWA(info) {
      var inDataView = info.viewer;
      var inOffset = { value: info.offset.value };
      var outBuffer = new Uint8Array(info.width * info.lines * (info.channels * info.type * INT16_SIZE));
      var dwaHeader = {
        version: parseInt64(inDataView, inOffset),
        unknownUncompressedSize: parseInt64(inDataView, inOffset),
        unknownCompressedSize: parseInt64(inDataView, inOffset),
        acCompressedSize: parseInt64(inDataView, inOffset),
        dcCompressedSize: parseInt64(inDataView, inOffset),
        rleCompressedSize: parseInt64(inDataView, inOffset),
        rleUncompressedSize: parseInt64(inDataView, inOffset),
        rleRawSize: parseInt64(inDataView, inOffset),
        totalAcUncompressedCount: parseInt64(inDataView, inOffset),
        totalDcUncompressedCount: parseInt64(inDataView, inOffset),
        acCompression: parseInt64(inDataView, inOffset)
      };
      if (dwaHeader.version < 2) {
        throw "EXRLoader.parse: " + EXRHeader.compression + " version " + dwaHeader.version + " is unsupported";
      }
      var channelRules = new Array();
      var ruleSize = parseUint16(inDataView, inOffset) - INT16_SIZE;
      while (ruleSize > 0) {
        var name = parseNullTerminatedString(inDataView.buffer, inOffset);
        var value = parseUint8(inDataView, inOffset);
        var compression = value >> 2 & 3;
        var csc = (value >> 4) - 1;
        var index = new Int8Array([csc])[0];
        var type = parseUint8(inDataView, inOffset);
        channelRules.push({
          name,
          index,
          type,
          compression
        });
        ruleSize -= name.length + 3;
      }
      var channels = EXRHeader.channels;
      var channelData = new Array(info.channels);
      for (var i = 0; i < info.channels; ++i) {
        var cd = channelData[i] = {};
        var channel = channels[i];
        cd.name = channel.name;
        cd.compression = UNKNOWN;
        cd.decoded = false;
        cd.type = channel.pixelType;
        cd.pLinear = channel.pLinear;
        cd.width = info.width;
        cd.height = info.lines;
      }
      var cscSet = {
        idx: new Array(3)
      };
      for (var offset2 = 0; offset2 < info.channels; ++offset2) {
        var cd = channelData[offset2];
        for (var i = 0; i < channelRules.length; ++i) {
          var rule = channelRules[i];
          if (cd.name == rule.name) {
            cd.compression = rule.compression;
            if (rule.index >= 0) {
              cscSet.idx[rule.index] = offset2;
            }
            cd.offset = offset2;
          }
        }
      }
      if (dwaHeader.acCompressedSize > 0) {
        switch (dwaHeader.acCompression) {
          case STATIC_HUFFMAN:
            var acBuffer = new Uint16Array(dwaHeader.totalAcUncompressedCount);
            hufUncompress(
              info.array,
              inDataView,
              inOffset,
              dwaHeader.acCompressedSize,
              acBuffer,
              dwaHeader.totalAcUncompressedCount
            );
            break;
          case DEFLATE:
            var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.totalAcUncompressedCount);
            var data = unzlibSync(compressed);
            var acBuffer = new Uint16Array(data.buffer);
            inOffset.value += dwaHeader.totalAcUncompressedCount;
            break;
        }
      }
      if (dwaHeader.dcCompressedSize > 0) {
        var zlibInfo = {
          array: info.array,
          offset: inOffset,
          size: dwaHeader.dcCompressedSize
        };
        var dcBuffer = new Uint16Array(uncompressZIP(zlibInfo).buffer);
        inOffset.value += dwaHeader.dcCompressedSize;
      }
      if (dwaHeader.rleRawSize > 0) {
        var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.rleCompressedSize);
        var data = unzlibSync(compressed);
        var rleBuffer = decodeRunLength(data.buffer);
        inOffset.value += dwaHeader.rleCompressedSize;
      }
      var outBufferEnd = 0;
      var rowOffsets = new Array(channelData.length);
      for (var i = 0; i < rowOffsets.length; ++i) {
        rowOffsets[i] = new Array();
      }
      for (var y = 0; y < info.lines; ++y) {
        for (var chan = 0; chan < channelData.length; ++chan) {
          rowOffsets[chan].push(outBufferEnd);
          outBufferEnd += channelData[chan].width * info.type * INT16_SIZE;
        }
      }
      lossyDctDecode(cscSet, rowOffsets, channelData, acBuffer, dcBuffer, outBuffer);
      for (var i = 0; i < channelData.length; ++i) {
        var cd = channelData[i];
        if (cd.decoded)
          continue;
        switch (cd.compression) {
          case RLE:
            var row = 0;
            var rleOffset = 0;
            for (var y = 0; y < info.lines; ++y) {
              var rowOffsetBytes = rowOffsets[i][row];
              for (var x = 0; x < cd.width; ++x) {
                for (var byte = 0; byte < INT16_SIZE * cd.type; ++byte) {
                  outBuffer[rowOffsetBytes++] = rleBuffer[rleOffset + byte * cd.width * cd.height];
                }
                rleOffset++;
              }
              row++;
            }
            break;
          case LOSSY_DCT:
          default:
            throw "EXRLoader.parse: unsupported channel compression";
        }
      }
      return new DataView(outBuffer.buffer);
    }
    function parseNullTerminatedString(buffer2, offset2) {
      var uintBuffer = new Uint8Array(buffer2);
      var endOffset = 0;
      while (uintBuffer[offset2.value + endOffset] != 0) {
        endOffset += 1;
      }
      var stringValue = new TextDecoder().decode(uintBuffer.slice(offset2.value, offset2.value + endOffset));
      offset2.value = offset2.value + endOffset + 1;
      return stringValue;
    }
    function parseFixedLengthString(buffer2, offset2, size) {
      var stringValue = new TextDecoder().decode(new Uint8Array(buffer2).slice(offset2.value, offset2.value + size));
      offset2.value = offset2.value + size;
      return stringValue;
    }
    function parseRational(dataView, offset2) {
      var x = parseInt32(dataView, offset2);
      var y = parseUint32(dataView, offset2);
      return [x, y];
    }
    function parseTimecode(dataView, offset2) {
      var x = parseUint32(dataView, offset2);
      var y = parseUint32(dataView, offset2);
      return [x, y];
    }
    function parseInt32(dataView, offset2) {
      var Int32 = dataView.getInt32(offset2.value, true);
      offset2.value = offset2.value + INT32_SIZE;
      return Int32;
    }
    function parseUint32(dataView, offset2) {
      var Uint32 = dataView.getUint32(offset2.value, true);
      offset2.value = offset2.value + INT32_SIZE;
      return Uint32;
    }
    function parseUint8Array(uInt8Array2, offset2) {
      var Uint8 = uInt8Array2[offset2.value];
      offset2.value = offset2.value + INT8_SIZE;
      return Uint8;
    }
    function parseUint8(dataView, offset2) {
      var Uint8 = dataView.getUint8(offset2.value);
      offset2.value = offset2.value + INT8_SIZE;
      return Uint8;
    }
    const parseInt64 = function(dataView, offset2) {
      let int;
      if ("getBigInt64" in DataView.prototype) {
        int = Number(dataView.getBigInt64(offset2.value, true));
      } else {
        int = dataView.getUint32(offset2.value + 4, true) + Number(dataView.getUint32(offset2.value, true) << 32);
      }
      offset2.value += ULONG_SIZE;
      return int;
    };
    function parseFloat32(dataView, offset2) {
      var float = dataView.getFloat32(offset2.value, true);
      offset2.value += FLOAT32_SIZE;
      return float;
    }
    function decodeFloat32(dataView, offset2) {
      return DataUtils.toHalfFloat(parseFloat32(dataView, offset2));
    }
    function decodeFloat16(binary) {
      var exponent = (binary & 31744) >> 10, fraction = binary & 1023;
      return (binary >> 15 ? -1 : 1) * (exponent ? exponent === 31 ? fraction ? NaN : Infinity : Math.pow(2, exponent - 15) * (1 + fraction / 1024) : 6103515625e-14 * (fraction / 1024));
    }
    function parseUint16(dataView, offset2) {
      var Uint16 = dataView.getUint16(offset2.value, true);
      offset2.value += INT16_SIZE;
      return Uint16;
    }
    function parseFloat16(buffer2, offset2) {
      return decodeFloat16(parseUint16(buffer2, offset2));
    }
    function parseChlist(dataView, buffer2, offset2, size) {
      var startOffset = offset2.value;
      var channels = [];
      while (offset2.value < startOffset + size - 1) {
        var name = parseNullTerminatedString(buffer2, offset2);
        var pixelType = parseInt32(dataView, offset2);
        var pLinear = parseUint8(dataView, offset2);
        offset2.value += 3;
        var xSampling = parseInt32(dataView, offset2);
        var ySampling = parseInt32(dataView, offset2);
        channels.push({
          name,
          pixelType,
          pLinear,
          xSampling,
          ySampling
        });
      }
      offset2.value += 1;
      return channels;
    }
    function parseChromaticities(dataView, offset2) {
      var redX = parseFloat32(dataView, offset2);
      var redY = parseFloat32(dataView, offset2);
      var greenX = parseFloat32(dataView, offset2);
      var greenY = parseFloat32(dataView, offset2);
      var blueX = parseFloat32(dataView, offset2);
      var blueY = parseFloat32(dataView, offset2);
      var whiteX = parseFloat32(dataView, offset2);
      var whiteY = parseFloat32(dataView, offset2);
      return {
        redX,
        redY,
        greenX,
        greenY,
        blueX,
        blueY,
        whiteX,
        whiteY
      };
    }
    function parseCompression(dataView, offset2) {
      var compressionCodes = [
        "NO_COMPRESSION",
        "RLE_COMPRESSION",
        "ZIPS_COMPRESSION",
        "ZIP_COMPRESSION",
        "PIZ_COMPRESSION",
        "PXR24_COMPRESSION",
        "B44_COMPRESSION",
        "B44A_COMPRESSION",
        "DWAA_COMPRESSION",
        "DWAB_COMPRESSION"
      ];
      var compression = parseUint8(dataView, offset2);
      return compressionCodes[compression];
    }
    function parseBox2i(dataView, offset2) {
      var xMin = parseUint32(dataView, offset2);
      var yMin = parseUint32(dataView, offset2);
      var xMax = parseUint32(dataView, offset2);
      var yMax = parseUint32(dataView, offset2);
      return { xMin, yMin, xMax, yMax };
    }
    function parseLineOrder(dataView, offset2) {
      var lineOrders = ["INCREASING_Y"];
      var lineOrder = parseUint8(dataView, offset2);
      return lineOrders[lineOrder];
    }
    function parseV2f(dataView, offset2) {
      var x = parseFloat32(dataView, offset2);
      var y = parseFloat32(dataView, offset2);
      return [x, y];
    }
    function parseV3f(dataView, offset2) {
      var x = parseFloat32(dataView, offset2);
      var y = parseFloat32(dataView, offset2);
      var z = parseFloat32(dataView, offset2);
      return [x, y, z];
    }
    function parseValue(dataView, buffer2, offset2, type, size) {
      if (type === "string" || type === "stringvector" || type === "iccProfile") {
        return parseFixedLengthString(buffer2, offset2, size);
      } else if (type === "chlist") {
        return parseChlist(dataView, buffer2, offset2, size);
      } else if (type === "chromaticities") {
        return parseChromaticities(dataView, offset2);
      } else if (type === "compression") {
        return parseCompression(dataView, offset2);
      } else if (type === "box2i") {
        return parseBox2i(dataView, offset2);
      } else if (type === "lineOrder") {
        return parseLineOrder(dataView, offset2);
      } else if (type === "float") {
        return parseFloat32(dataView, offset2);
      } else if (type === "v2f") {
        return parseV2f(dataView, offset2);
      } else if (type === "v3f") {
        return parseV3f(dataView, offset2);
      } else if (type === "int") {
        return parseInt32(dataView, offset2);
      } else if (type === "rational") {
        return parseRational(dataView, offset2);
      } else if (type === "timecode") {
        return parseTimecode(dataView, offset2);
      } else if (type === "preview") {
        offset2.value += size;
        return "skipped";
      } else {
        offset2.value += size;
        return void 0;
      }
    }
    function parseHeader(dataView, buffer2, offset2) {
      const EXRHeader2 = {};
      if (dataView.getUint32(0, true) != 20000630) {
        throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
      }
      EXRHeader2.version = dataView.getUint8(4);
      const spec = dataView.getUint8(5);
      EXRHeader2.spec = {
        singleTile: !!(spec & 2),
        longName: !!(spec & 4),
        deepFormat: !!(spec & 8),
        multiPart: !!(spec & 16)
      };
      offset2.value = 8;
      var keepReading = true;
      while (keepReading) {
        var attributeName = parseNullTerminatedString(buffer2, offset2);
        if (attributeName == 0) {
          keepReading = false;
        } else {
          var attributeType = parseNullTerminatedString(buffer2, offset2);
          var attributeSize = parseUint32(dataView, offset2);
          var attributeValue = parseValue(dataView, buffer2, offset2, attributeType, attributeSize);
          if (attributeValue === void 0) {
            console.warn(`EXRLoader.parse: skipped unknown header attribute type '${attributeType}'.`);
          } else {
            EXRHeader2[attributeName] = attributeValue;
          }
        }
      }
      if ((spec & -5) != 0) {
        console.error("EXRHeader:", EXRHeader2);
        throw "THREE.EXRLoader: provided file is currently unsupported.";
      }
      return EXRHeader2;
    }
    function setupDecoder(EXRHeader2, dataView, uInt8Array2, offset2, outputType) {
      const EXRDecoder2 = {
        size: 0,
        viewer: dataView,
        array: uInt8Array2,
        offset: offset2,
        width: EXRHeader2.dataWindow.xMax - EXRHeader2.dataWindow.xMin + 1,
        height: EXRHeader2.dataWindow.yMax - EXRHeader2.dataWindow.yMin + 1,
        channels: EXRHeader2.channels.length,
        bytesPerLine: null,
        lines: null,
        inputSize: null,
        type: EXRHeader2.channels[0].pixelType,
        uncompress: null,
        getter: null,
        format: null,
        [hasColorSpace ? "colorSpace" : "encoding"]: null
      };
      switch (EXRHeader2.compression) {
        case "NO_COMPRESSION":
          EXRDecoder2.lines = 1;
          EXRDecoder2.uncompress = uncompressRAW;
          break;
        case "RLE_COMPRESSION":
          EXRDecoder2.lines = 1;
          EXRDecoder2.uncompress = uncompressRLE;
          break;
        case "ZIPS_COMPRESSION":
          EXRDecoder2.lines = 1;
          EXRDecoder2.uncompress = uncompressZIP;
          break;
        case "ZIP_COMPRESSION":
          EXRDecoder2.lines = 16;
          EXRDecoder2.uncompress = uncompressZIP;
          break;
        case "PIZ_COMPRESSION":
          EXRDecoder2.lines = 32;
          EXRDecoder2.uncompress = uncompressPIZ;
          break;
        case "PXR24_COMPRESSION":
          EXRDecoder2.lines = 16;
          EXRDecoder2.uncompress = uncompressPXR;
          break;
        case "DWAA_COMPRESSION":
          EXRDecoder2.lines = 32;
          EXRDecoder2.uncompress = uncompressDWA;
          break;
        case "DWAB_COMPRESSION":
          EXRDecoder2.lines = 256;
          EXRDecoder2.uncompress = uncompressDWA;
          break;
        default:
          throw "EXRLoader.parse: " + EXRHeader2.compression + " is unsupported";
      }
      EXRDecoder2.scanlineBlockSize = EXRDecoder2.lines;
      if (EXRDecoder2.type == 1) {
        switch (outputType) {
          case FloatType:
            EXRDecoder2.getter = parseFloat16;
            EXRDecoder2.inputSize = INT16_SIZE;
            break;
          case HalfFloatType:
            EXRDecoder2.getter = parseUint16;
            EXRDecoder2.inputSize = INT16_SIZE;
            break;
        }
      } else if (EXRDecoder2.type == 2) {
        switch (outputType) {
          case FloatType:
            EXRDecoder2.getter = parseFloat32;
            EXRDecoder2.inputSize = FLOAT32_SIZE;
            break;
          case HalfFloatType:
            EXRDecoder2.getter = decodeFloat32;
            EXRDecoder2.inputSize = FLOAT32_SIZE;
        }
      } else {
        throw "EXRLoader.parse: unsupported pixelType " + EXRDecoder2.type + " for " + EXRHeader2.compression + ".";
      }
      EXRDecoder2.blockCount = (EXRHeader2.dataWindow.yMax + 1) / EXRDecoder2.scanlineBlockSize;
      for (var i = 0; i < EXRDecoder2.blockCount; i++)
        parseInt64(dataView, offset2);
      EXRDecoder2.outputChannels = EXRDecoder2.channels == 3 ? 4 : EXRDecoder2.channels;
      const size = EXRDecoder2.width * EXRDecoder2.height * EXRDecoder2.outputChannels;
      switch (outputType) {
        case FloatType:
          EXRDecoder2.byteArray = new Float32Array(size);
          if (EXRDecoder2.channels < EXRDecoder2.outputChannels)
            EXRDecoder2.byteArray.fill(1, 0, size);
          break;
        case HalfFloatType:
          EXRDecoder2.byteArray = new Uint16Array(size);
          if (EXRDecoder2.channels < EXRDecoder2.outputChannels)
            EXRDecoder2.byteArray.fill(15360, 0, size);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", outputType);
          break;
      }
      EXRDecoder2.bytesPerLine = EXRDecoder2.width * EXRDecoder2.inputSize * EXRDecoder2.channels;
      if (EXRDecoder2.outputChannels == 4)
        EXRDecoder2.format = RGBAFormat;
      else
        EXRDecoder2.format = RedFormat;
      if (hasColorSpace)
        EXRDecoder2.colorSpace = "srgb-linear";
      else
        EXRDecoder2.encoding = 3e3;
      return EXRDecoder2;
    }
    const bufferDataView = new DataView(buffer);
    const uInt8Array = new Uint8Array(buffer);
    const offset = { value: 0 };
    const EXRHeader = parseHeader(bufferDataView, buffer, offset);
    const EXRDecoder = setupDecoder(EXRHeader, bufferDataView, uInt8Array, offset, this.type);
    const tmpOffset = { value: 0 };
    const channelOffsets = { R: 0, G: 1, B: 2, A: 3, Y: 0 };
    for (let scanlineBlockIdx = 0; scanlineBlockIdx < EXRDecoder.height / EXRDecoder.scanlineBlockSize; scanlineBlockIdx++) {
      const line = parseUint32(bufferDataView, offset);
      EXRDecoder.size = parseUint32(bufferDataView, offset);
      EXRDecoder.lines = line + EXRDecoder.scanlineBlockSize > EXRDecoder.height ? EXRDecoder.height - line : EXRDecoder.scanlineBlockSize;
      const isCompressed = EXRDecoder.size < EXRDecoder.lines * EXRDecoder.bytesPerLine;
      const viewer = isCompressed ? EXRDecoder.uncompress(EXRDecoder) : uncompressRAW(EXRDecoder);
      offset.value += EXRDecoder.size;
      for (let line_y = 0; line_y < EXRDecoder.scanlineBlockSize; line_y++) {
        const true_y = line_y + scanlineBlockIdx * EXRDecoder.scanlineBlockSize;
        if (true_y >= EXRDecoder.height)
          break;
        for (let channelID = 0; channelID < EXRDecoder.channels; channelID++) {
          const cOff = channelOffsets[EXRHeader.channels[channelID].name];
          for (let x = 0; x < EXRDecoder.width; x++) {
            tmpOffset.value = (line_y * (EXRDecoder.channels * EXRDecoder.width) + channelID * EXRDecoder.width + x) * EXRDecoder.inputSize;
            const outIndex = (EXRDecoder.height - 1 - true_y) * (EXRDecoder.width * EXRDecoder.outputChannels) + x * EXRDecoder.outputChannels + cOff;
            EXRDecoder.byteArray[outIndex] = EXRDecoder.getter(viewer, tmpOffset);
          }
        }
      }
    }
    return {
      header: EXRHeader,
      width: EXRDecoder.width,
      height: EXRDecoder.height,
      data: EXRDecoder.byteArray,
      format: EXRDecoder.format,
      [hasColorSpace ? "colorSpace" : "encoding"]: EXRDecoder[hasColorSpace ? "colorSpace" : "encoding"],
      type: this.type
    };
  }
  setDataType(value) {
    this.type = value;
    return this;
  }
  load(url, onLoad, onProgress, onError) {
    function onLoadCallback(texture, texData) {
      if (hasColorSpace)
        texture.colorSpace = texData.colorSpace;
      else
        texture.encoding = texData.encoding;
      texture.minFilter = LinearFilter;
      texture.magFilter = LinearFilter;
      texture.generateMipmaps = false;
      texture.flipY = false;
      if (onLoad)
        onLoad(texture, texData);
    }
    return super.load(url, onLoadCallback, onProgress, onError);
  }
}
const _taskCache = /* @__PURE__ */ new WeakMap();
class DRACOLoader extends Loader {
  constructor(manager) {
    super(manager);
    this.decoderPath = "";
    this.decoderConfig = {};
    this.decoderBinary = null;
    this.decoderPending = null;
    this.workerLimit = 4;
    this.workerPool = [];
    this.workerNextTaskID = 1;
    this.workerSourceURL = "";
    this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    };
    this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(path) {
    this.decoderPath = path;
    return this;
  }
  setDecoderConfig(config) {
    this.decoderConfig = config;
    return this;
  }
  setWorkerLimit(workerLimit) {
    this.workerLimit = workerLimit;
    return this;
  }
  load(url, onLoad, onProgress, onError) {
    const loader = new FileLoader(this.manager);
    loader.setPath(this.path);
    loader.setResponseType("arraybuffer");
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(this.withCredentials);
    loader.load(
      url,
      (buffer) => {
        const taskConfig = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: false
        };
        this.decodeGeometry(buffer, taskConfig).then(onLoad).catch(onError);
      },
      onProgress,
      onError
    );
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(buffer, callback, attributeIDs, attributeTypes) {
    const taskConfig = {
      attributeIDs: attributeIDs || this.defaultAttributeIDs,
      attributeTypes: attributeTypes || this.defaultAttributeTypes,
      useUniqueIDs: !!attributeIDs
    };
    this.decodeGeometry(buffer, taskConfig).then(callback);
  }
  decodeGeometry(buffer, taskConfig) {
    for (const attribute in taskConfig.attributeTypes) {
      const type = taskConfig.attributeTypes[attribute];
      if (type.BYTES_PER_ELEMENT !== void 0) {
        taskConfig.attributeTypes[attribute] = type.name;
      }
    }
    const taskKey = JSON.stringify(taskConfig);
    if (_taskCache.has(buffer)) {
      const cachedTask = _taskCache.get(buffer);
      if (cachedTask.key === taskKey) {
        return cachedTask.promise;
      } else if (buffer.byteLength === 0) {
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
      }
    }
    let worker;
    const taskID = this.workerNextTaskID++;
    const taskCost = buffer.byteLength;
    const geometryPending = this._getWorker(taskID, taskCost).then((_worker) => {
      worker = _worker;
      return new Promise((resolve2, reject) => {
        worker._callbacks[taskID] = { resolve: resolve2, reject };
        worker.postMessage({ type: "decode", id: taskID, taskConfig, buffer }, [buffer]);
      });
    }).then((message) => this._createGeometry(message.geometry));
    geometryPending.catch(() => true).then(() => {
      if (worker && taskID) {
        this._releaseTask(worker, taskID);
      }
    });
    _taskCache.set(buffer, {
      key: taskKey,
      promise: geometryPending
    });
    return geometryPending;
  }
  _createGeometry(geometryData) {
    const geometry = new BufferGeometry();
    if (geometryData.index) {
      geometry.setIndex(new BufferAttribute(geometryData.index.array, 1));
    }
    for (let i = 0; i < geometryData.attributes.length; i++) {
      const attribute = geometryData.attributes[i];
      const name = attribute.name;
      const array = attribute.array;
      const itemSize = attribute.itemSize;
      geometry.setAttribute(name, new BufferAttribute(array, itemSize));
    }
    return geometry;
  }
  _loadLibrary(url, responseType) {
    const loader = new FileLoader(this.manager);
    loader.setPath(this.decoderPath);
    loader.setResponseType(responseType);
    loader.setWithCredentials(this.withCredentials);
    return new Promise((resolve2, reject) => {
      loader.load(url, resolve2, void 0, reject);
    });
  }
  preload() {
    this._initDecoder();
    return this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const useJS = typeof WebAssembly !== "object" || this.decoderConfig.type === "js";
    const librariesPending = [];
    if (useJS) {
      librariesPending.push(this._loadLibrary("draco_decoder.js", "text"));
    } else {
      librariesPending.push(this._loadLibrary("draco_wasm_wrapper.js", "text"));
      librariesPending.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"));
    }
    this.decoderPending = Promise.all(librariesPending).then((libraries) => {
      const jsContent = libraries[0];
      if (!useJS) {
        this.decoderConfig.wasmBinary = libraries[1];
      }
      const fn = DRACOWorker.toString();
      const body = [
        "/* draco decoder */",
        jsContent,
        "",
        "/* worker */",
        fn.substring(fn.indexOf("{") + 1, fn.lastIndexOf("}"))
      ].join("\n");
      this.workerSourceURL = URL.createObjectURL(new Blob([body]));
    });
    return this.decoderPending;
  }
  _getWorker(taskID, taskCost) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const worker2 = new Worker(this.workerSourceURL);
        worker2._callbacks = {};
        worker2._taskCosts = {};
        worker2._taskLoad = 0;
        worker2.postMessage({ type: "init", decoderConfig: this.decoderConfig });
        worker2.onmessage = function(e2) {
          const message = e2.data;
          switch (message.type) {
            case "decode":
              worker2._callbacks[message.id].resolve(message);
              break;
            case "error":
              worker2._callbacks[message.id].reject(message);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + message.type + '"');
          }
        };
        this.workerPool.push(worker2);
      } else {
        this.workerPool.sort(function(a2, b2) {
          return a2._taskLoad > b2._taskLoad ? -1 : 1;
        });
      }
      const worker = this.workerPool[this.workerPool.length - 1];
      worker._taskCosts[taskID] = taskCost;
      worker._taskLoad += taskCost;
      return worker;
    });
  }
  _releaseTask(worker, taskID) {
    worker._taskLoad -= worker._taskCosts[taskID];
    delete worker._callbacks[taskID];
    delete worker._taskCosts[taskID];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((worker) => worker._taskLoad)
    );
  }
  dispose() {
    for (let i = 0; i < this.workerPool.length; ++i) {
      this.workerPool[i].terminate();
    }
    this.workerPool.length = 0;
    return this;
  }
}
function DRACOWorker() {
  let decoderConfig;
  let decoderPending;
  onmessage = function(e2) {
    const message = e2.data;
    switch (message.type) {
      case "init":
        decoderConfig = message.decoderConfig;
        decoderPending = new Promise(function(resolve2) {
          decoderConfig.onModuleLoaded = function(draco) {
            resolve2({ draco });
          };
          DracoDecoderModule(decoderConfig);
        });
        break;
      case "decode":
        const buffer = message.buffer;
        const taskConfig = message.taskConfig;
        decoderPending.then((module) => {
          const draco = module.draco;
          const decoder = new draco.Decoder();
          const decoderBuffer = new draco.DecoderBuffer();
          decoderBuffer.Init(new Int8Array(buffer), buffer.byteLength);
          try {
            const geometry = decodeGeometry(draco, decoder, decoderBuffer, taskConfig);
            const buffers = geometry.attributes.map((attr) => attr.array.buffer);
            if (geometry.index)
              buffers.push(geometry.index.array.buffer);
            self.postMessage({ type: "decode", id: message.id, geometry }, buffers);
          } catch (error) {
            console.error(error);
            self.postMessage({ type: "error", id: message.id, error: error.message });
          } finally {
            draco.destroy(decoderBuffer);
            draco.destroy(decoder);
          }
        });
        break;
    }
  };
  function decodeGeometry(draco, decoder, decoderBuffer, taskConfig) {
    const attributeIDs = taskConfig.attributeIDs;
    const attributeTypes = taskConfig.attributeTypes;
    let dracoGeometry;
    let decodingStatus;
    const geometryType = decoder.GetEncodedGeometryType(decoderBuffer);
    if (geometryType === draco.TRIANGULAR_MESH) {
      dracoGeometry = new draco.Mesh();
      decodingStatus = decoder.DecodeBufferToMesh(decoderBuffer, dracoGeometry);
    } else if (geometryType === draco.POINT_CLOUD) {
      dracoGeometry = new draco.PointCloud();
      decodingStatus = decoder.DecodeBufferToPointCloud(decoderBuffer, dracoGeometry);
    } else {
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    }
    if (!decodingStatus.ok() || dracoGeometry.ptr === 0) {
      throw new Error("THREE.DRACOLoader: Decoding failed: " + decodingStatus.error_msg());
    }
    const geometry = { index: null, attributes: [] };
    for (const attributeName in attributeIDs) {
      const attributeType = self[attributeTypes[attributeName]];
      let attribute;
      let attributeID;
      if (taskConfig.useUniqueIDs) {
        attributeID = attributeIDs[attributeName];
        attribute = decoder.GetAttributeByUniqueId(dracoGeometry, attributeID);
      } else {
        attributeID = decoder.GetAttributeId(dracoGeometry, draco[attributeIDs[attributeName]]);
        if (attributeID === -1)
          continue;
        attribute = decoder.GetAttribute(dracoGeometry, attributeID);
      }
      geometry.attributes.push(decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute));
    }
    if (geometryType === draco.TRIANGULAR_MESH) {
      geometry.index = decodeIndex(draco, decoder, dracoGeometry);
    }
    draco.destroy(dracoGeometry);
    return geometry;
  }
  function decodeIndex(draco, decoder, dracoGeometry) {
    const numFaces = dracoGeometry.num_faces();
    const numIndices = numFaces * 3;
    const byteLength = numIndices * 4;
    const ptr = draco._malloc(byteLength);
    decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
    const index = new Uint32Array(draco.HEAPF32.buffer, ptr, numIndices).slice();
    draco._free(ptr);
    return { array: index, itemSize: 1 };
  }
  function decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute) {
    const numComponents = attribute.num_components();
    const numPoints = dracoGeometry.num_points();
    const numValues = numPoints * numComponents;
    const byteLength = numValues * attributeType.BYTES_PER_ELEMENT;
    const dataType = getDracoDataType(draco, attributeType);
    const ptr = draco._malloc(byteLength);
    decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute, dataType, byteLength, ptr);
    const array = new attributeType(draco.HEAPF32.buffer, ptr, numValues).slice();
    draco._free(ptr);
    return {
      name: attributeName,
      array,
      itemSize: numComponents
    };
  }
  function getDracoDataType(draco, attributeType) {
    switch (attributeType) {
      case Float32Array:
        return draco.DT_FLOAT32;
      case Int8Array:
        return draco.DT_INT8;
      case Int16Array:
        return draco.DT_INT16;
      case Int32Array:
        return draco.DT_INT32;
      case Uint8Array:
        return draco.DT_UINT8;
      case Uint16Array:
        return draco.DT_UINT16;
      case Uint32Array:
        return draco.DT_UINT32;
    }
  }
}
let generated;
const MeshoptDecoder = () => {
  if (generated)
    return generated;
  const wasm_base = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB";
  const wasm_simd = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB";
  const detector = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    3,
    2,
    0,
    0,
    5,
    3,
    1,
    0,
    1,
    12,
    1,
    0,
    10,
    22,
    2,
    12,
    0,
    65,
    0,
    65,
    0,
    65,
    0,
    252,
    10,
    0,
    0,
    11,
    7,
    0,
    65,
    0,
    253,
    15,
    26,
    11
  ]);
  const wasmpack = new Uint8Array([
    32,
    0,
    65,
    253,
    3,
    1,
    2,
    34,
    4,
    106,
    6,
    5,
    11,
    8,
    7,
    20,
    13,
    33,
    12,
    16,
    128,
    9,
    116,
    64,
    19,
    113,
    127,
    15,
    10,
    21,
    22,
    14,
    255,
    66,
    24,
    54,
    136,
    107,
    18,
    23,
    192,
    26,
    114,
    118,
    132,
    17,
    77,
    101,
    130,
    144,
    27,
    87,
    131,
    44,
    45,
    74,
    156,
    154,
    70,
    167
  ]);
  if (typeof WebAssembly !== "object") {
    return {
      supported: false
    };
  }
  let wasm = wasm_base;
  if (WebAssembly.validate(detector)) {
    wasm = wasm_simd;
  }
  let instance;
  const promise = WebAssembly.instantiate(unpack(wasm), {}).then((result) => {
    instance = result.instance;
    instance.exports.__wasm_call_ctors();
  });
  function unpack(data) {
    const result = new Uint8Array(data.length);
    for (let i = 0; i < data.length; ++i) {
      const ch = data.charCodeAt(i);
      result[i] = ch > 96 ? ch - 71 : ch > 64 ? ch - 65 : ch > 47 ? ch + 4 : ch > 46 ? 63 : 62;
    }
    let write = 0;
    for (let i = 0; i < data.length; ++i) {
      result[write++] = result[i] < 60 ? wasmpack[result[i]] : (result[i] - 60) * 64 + result[++i];
    }
    return result.buffer.slice(0, write);
  }
  function decode(fun, target, count, size, source, filter) {
    const sbrk = instance.exports.sbrk;
    const count4 = count + 3 & -4;
    const tp = sbrk(count4 * size);
    const sp = sbrk(source.length);
    const heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(source, sp);
    const res = fun(tp, count, size, sp, source.length);
    if (res === 0 && filter) {
      filter(tp, count4, size);
    }
    target.set(heap.subarray(tp, tp + count * size));
    sbrk(tp - sbrk(0));
    if (res !== 0) {
      throw new Error(`Malformed buffer data: ${res}`);
    }
  }
  const filters = {
    // legacy index-based enums for glTF
    0: "",
    1: "meshopt_decodeFilterOct",
    2: "meshopt_decodeFilterQuat",
    3: "meshopt_decodeFilterExp",
    // string-based enums for glTF
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  };
  const decoders = {
    // legacy index-based enums for glTF
    0: "meshopt_decodeVertexBuffer",
    1: "meshopt_decodeIndexBuffer",
    2: "meshopt_decodeIndexSequence",
    // string-based enums for glTF
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  };
  generated = {
    ready: promise,
    supported: true,
    decodeVertexBuffer(target, count, size, source, filter) {
      decode(
        instance.exports.meshopt_decodeVertexBuffer,
        target,
        count,
        size,
        source,
        instance.exports[filters[filter]]
      );
    },
    decodeIndexBuffer(target, count, size, source) {
      decode(instance.exports.meshopt_decodeIndexBuffer, target, count, size, source);
    },
    decodeIndexSequence(target, count, size, source) {
      decode(instance.exports.meshopt_decodeIndexSequence, target, count, size, source);
    },
    decodeGltfBuffer(target, count, size, source, mode, filter) {
      decode(
        instance.exports[decoders[mode]],
        target,
        count,
        size,
        source,
        instance.exports[filters[filter]]
      );
    }
  };
  return generated;
};
const Billboard = /* @__PURE__ */ reactExports.forwardRef(function Billboard2({
  children,
  follow = true,
  lockX = false,
  lockY = false,
  lockZ = false,
  ...props
}, fref) {
  const inner = reactExports.useRef(null);
  const localRef = reactExports.useRef(null);
  const q = new Quaternion();
  useFrame(({
    camera
  }) => {
    if (!follow || !localRef.current) return;
    const prevRotation = inner.current.rotation.clone();
    localRef.current.updateMatrix();
    localRef.current.updateWorldMatrix(false, false);
    localRef.current.getWorldQuaternion(q);
    camera.getWorldQuaternion(inner.current.quaternion).premultiply(q.invert());
    if (lockX) inner.current.rotation.x = prevRotation.x;
    if (lockY) inner.current.rotation.y = prevRotation.y;
    if (lockZ) inner.current.rotation.z = prevRotation.z;
  });
  reactExports.useImperativeHandle(fref, () => localRef.current, []);
  return /* @__PURE__ */ reactExports.createElement("group", _extends({
    ref: localRef
  }, props), /* @__PURE__ */ reactExports.createElement("group", {
    ref: inner
  }, children));
});
function workerBootstrap() {
  var modules = /* @__PURE__ */ Object.create(null);
  function registerModule(ref, callback) {
    var id = ref.id;
    var name = ref.name;
    var dependencies = ref.dependencies;
    if (dependencies === void 0) dependencies = [];
    var init = ref.init;
    if (init === void 0) init = function() {
    };
    var getTransferables = ref.getTransferables;
    if (getTransferables === void 0) getTransferables = null;
    if (modules[id]) {
      return;
    }
    try {
      dependencies = dependencies.map(function(dep) {
        if (dep && dep.isWorkerModule) {
          registerModule(dep, function(depResult) {
            if (depResult instanceof Error) {
              throw depResult;
            }
          });
          dep = modules[dep.id].value;
        }
        return dep;
      });
      init = rehydrate("<" + name + ">.init", init);
      if (getTransferables) {
        getTransferables = rehydrate("<" + name + ">.getTransferables", getTransferables);
      }
      var value = null;
      if (typeof init === "function") {
        value = init.apply(void 0, dependencies);
      } else {
        console.error("worker module init function failed to rehydrate");
      }
      modules[id] = {
        id,
        value,
        getTransferables
      };
      callback(value);
    } catch (err) {
      if (!(err && err.noLog)) {
        console.error(err);
      }
      callback(err);
    }
  }
  function callModule(ref, callback) {
    var ref$1;
    var id = ref.id;
    var args = ref.args;
    if (!modules[id] || typeof modules[id].value !== "function") {
      callback(new Error("Worker module " + id + ": not found or its 'init' did not return a function"));
    }
    try {
      var result = (ref$1 = modules[id]).value.apply(ref$1, args);
      if (result && typeof result.then === "function") {
        result.then(handleResult, function(rej) {
          return callback(rej instanceof Error ? rej : new Error("" + rej));
        });
      } else {
        handleResult(result);
      }
    } catch (err) {
      callback(err);
    }
    function handleResult(result2) {
      try {
        var tx = modules[id].getTransferables && modules[id].getTransferables(result2);
        if (!tx || !Array.isArray(tx) || !tx.length) {
          tx = void 0;
        }
        callback(result2, tx);
      } catch (err) {
        console.error(err);
        callback(err);
      }
    }
  }
  function rehydrate(name, str) {
    var result = void 0;
    self.troikaDefine = function(r2) {
      return result = r2;
    };
    var url = URL.createObjectURL(
      new Blob(
        ["/** " + name.replace(/\*/g, "") + " **/\n\ntroikaDefine(\n" + str + "\n)"],
        { type: "application/javascript" }
      )
    );
    try {
      importScripts(url);
    } catch (err) {
      console.error(err);
    }
    URL.revokeObjectURL(url);
    delete self.troikaDefine;
    return result;
  }
  self.addEventListener("message", function(e2) {
    var ref = e2.data;
    var messageId = ref.messageId;
    var action = ref.action;
    var data = ref.data;
    try {
      if (action === "registerModule") {
        registerModule(data, function(result) {
          if (result instanceof Error) {
            postMessage({
              messageId,
              success: false,
              error: result.message
            });
          } else {
            postMessage({
              messageId,
              success: true,
              result: { isCallable: typeof result === "function" }
            });
          }
        });
      }
      if (action === "callModule") {
        callModule(data, function(result, transferables) {
          if (result instanceof Error) {
            postMessage({
              messageId,
              success: false,
              error: result.message
            });
          } else {
            postMessage({
              messageId,
              success: true,
              result
            }, transferables || void 0);
          }
        });
      }
    } catch (err) {
      postMessage({
        messageId,
        success: false,
        error: err.stack
      });
    }
  });
}
function defineMainThreadModule(options) {
  var moduleFunc = function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    return moduleFunc._getInitResult().then(function(initResult) {
      if (typeof initResult === "function") {
        return initResult.apply(void 0, args);
      } else {
        throw new Error("Worker module function was called but `init` did not return a callable function");
      }
    });
  };
  moduleFunc._getInitResult = function() {
    var dependencies = options.dependencies;
    var init = options.init;
    dependencies = Array.isArray(dependencies) ? dependencies.map(function(dep) {
      if (dep) {
        dep = dep.onMainThread || dep;
        if (dep._getInitResult) {
          dep = dep._getInitResult();
        }
      }
      return dep;
    }) : [];
    var initPromise = Promise.all(dependencies).then(function(deps) {
      return init.apply(null, deps);
    });
    moduleFunc._getInitResult = function() {
      return initPromise;
    };
    return initPromise;
  };
  return moduleFunc;
}
var supportsWorkers = function() {
  var supported = false;
  if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    try {
      var worker = new Worker(
        URL.createObjectURL(new Blob([""], { type: "application/javascript" }))
      );
      worker.terminate();
      supported = true;
    } catch (err) {
      {
        console.log(
          "Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + err.message + "]"
        );
      }
    }
  }
  supportsWorkers = function() {
    return supported;
  };
  return supported;
};
var _workerModuleId = 0;
var _messageId = 0;
var _allowInitAsString = false;
var workers = /* @__PURE__ */ Object.create(null);
var registeredModules = /* @__PURE__ */ Object.create(null);
var openRequests = /* @__PURE__ */ Object.create(null);
function defineWorkerModule(options) {
  if ((!options || typeof options.init !== "function") && !_allowInitAsString) {
    throw new Error("requires `options.init` function");
  }
  var dependencies = options.dependencies;
  var init = options.init;
  var getTransferables = options.getTransferables;
  var workerId = options.workerId;
  var onMainThread = defineMainThreadModule(options);
  if (workerId == null) {
    workerId = "#default";
  }
  var id = "workerModule" + ++_workerModuleId;
  var name = options.name || id;
  var registrationPromise = null;
  dependencies = dependencies && dependencies.map(function(dep) {
    if (typeof dep === "function" && !dep.workerModuleData) {
      _allowInitAsString = true;
      dep = defineWorkerModule({
        workerId,
        name: "<" + name + "> function dependency: " + dep.name,
        init: "function(){return (\n" + stringifyFunction(dep) + "\n)}"
      });
      _allowInitAsString = false;
    }
    if (dep && dep.workerModuleData) {
      dep = dep.workerModuleData;
    }
    return dep;
  });
  function moduleFunc() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    if (!supportsWorkers()) {
      return onMainThread.apply(void 0, args);
    }
    if (!registrationPromise) {
      registrationPromise = callWorker(workerId, "registerModule", moduleFunc.workerModuleData);
      var unregister = function() {
        registrationPromise = null;
        registeredModules[workerId].delete(unregister);
      };
      (registeredModules[workerId] || (registeredModules[workerId] = /* @__PURE__ */ new Set())).add(unregister);
    }
    return registrationPromise.then(function(ref) {
      var isCallable = ref.isCallable;
      if (isCallable) {
        return callWorker(workerId, "callModule", { id, args });
      } else {
        throw new Error("Worker module function was called but `init` did not return a callable function");
      }
    });
  }
  moduleFunc.workerModuleData = {
    isWorkerModule: true,
    id,
    name,
    dependencies,
    init: stringifyFunction(init),
    getTransferables: getTransferables && stringifyFunction(getTransferables)
  };
  moduleFunc.onMainThread = onMainThread;
  return moduleFunc;
}
function terminateWorker(workerId) {
  if (registeredModules[workerId]) {
    registeredModules[workerId].forEach(function(unregister) {
      unregister();
    });
  }
  if (workers[workerId]) {
    workers[workerId].terminate();
    delete workers[workerId];
  }
}
function stringifyFunction(fn) {
  var str = fn.toString();
  if (!/^function/.test(str) && /^\w+\s*\(/.test(str)) {
    str = "function " + str;
  }
  return str;
}
function getWorker(workerId) {
  var worker = workers[workerId];
  if (!worker) {
    var bootstrap = stringifyFunction(workerBootstrap);
    worker = workers[workerId] = new Worker(
      URL.createObjectURL(
        new Blob(
          ["/** Worker Module Bootstrap: " + workerId.replace(/\*/g, "") + " **/\n\n;(" + bootstrap + ")()"],
          { type: "application/javascript" }
        )
      )
    );
    worker.onmessage = function(e2) {
      var response = e2.data;
      var msgId = response.messageId;
      var callback = openRequests[msgId];
      if (!callback) {
        throw new Error("WorkerModule response with empty or unknown messageId");
      }
      delete openRequests[msgId];
      callback(response);
    };
  }
  return worker;
}
function callWorker(workerId, action, data) {
  return new Promise(function(resolve2, reject) {
    var messageId = ++_messageId;
    openRequests[messageId] = function(response) {
      if (response.success) {
        resolve2(response.result);
      } else {
        reject(new Error("Error in worker " + action + " call: " + response.error));
      }
    };
    getWorker(workerId).postMessage({
      messageId,
      action,
      data
    });
  });
}
function SDFGenerator() {
  var exports$1 = (function(exports$12) {
    function pointOnQuadraticBezier(x0, y0, x1, y1, x2, y2, t2, pointOut) {
      var t22 = 1 - t2;
      pointOut.x = t22 * t22 * x0 + 2 * t22 * t2 * x1 + t2 * t2 * x2;
      pointOut.y = t22 * t22 * y0 + 2 * t22 * t2 * y1 + t2 * t2 * y2;
    }
    function pointOnCubicBezier(x0, y0, x1, y1, x2, y2, x3, y3, t2, pointOut) {
      var t22 = 1 - t2;
      pointOut.x = t22 * t22 * t22 * x0 + 3 * t22 * t22 * t2 * x1 + 3 * t22 * t2 * t2 * x2 + t2 * t2 * t2 * x3;
      pointOut.y = t22 * t22 * t22 * y0 + 3 * t22 * t22 * t2 * y1 + 3 * t22 * t2 * t2 * y2 + t2 * t2 * t2 * y3;
    }
    function forEachPathCommand(pathString, commandCallback) {
      var segmentRE = /([MLQCZ])([^MLQCZ]*)/g;
      var match, firstX, firstY, prevX, prevY;
      while (match = segmentRE.exec(pathString)) {
        var args = match[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(v) {
          return parseFloat(v);
        });
        switch (match[1]) {
          case "M":
            prevX = firstX = args[0];
            prevY = firstY = args[1];
            break;
          case "L":
            if (args[0] !== prevX || args[1] !== prevY) {
              commandCallback("L", prevX, prevY, prevX = args[0], prevY = args[1]);
            }
            break;
          case "Q": {
            commandCallback("Q", prevX, prevY, prevX = args[2], prevY = args[3], args[0], args[1]);
            break;
          }
          case "C": {
            commandCallback("C", prevX, prevY, prevX = args[4], prevY = args[5], args[0], args[1], args[2], args[3]);
            break;
          }
          case "Z":
            if (prevX !== firstX || prevY !== firstY) {
              commandCallback("L", prevX, prevY, firstX, firstY);
            }
            break;
        }
      }
    }
    function pathToLineSegments(pathString, segmentCallback, curvePoints) {
      if (curvePoints === void 0) curvePoints = 16;
      var tempPoint = { x: 0, y: 0 };
      forEachPathCommand(pathString, function(command, startX, startY, endX, endY, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y) {
        switch (command) {
          case "L":
            segmentCallback(startX, startY, endX, endY);
            break;
          case "Q": {
            var prevCurveX = startX;
            var prevCurveY = startY;
            for (var i = 1; i < curvePoints; i++) {
              pointOnQuadraticBezier(
                startX,
                startY,
                ctrl1X,
                ctrl1Y,
                endX,
                endY,
                i / (curvePoints - 1),
                tempPoint
              );
              segmentCallback(prevCurveX, prevCurveY, tempPoint.x, tempPoint.y);
              prevCurveX = tempPoint.x;
              prevCurveY = tempPoint.y;
            }
            break;
          }
          case "C": {
            var prevCurveX$1 = startX;
            var prevCurveY$1 = startY;
            for (var i$12 = 1; i$12 < curvePoints; i$12++) {
              pointOnCubicBezier(
                startX,
                startY,
                ctrl1X,
                ctrl1Y,
                ctrl2X,
                ctrl2Y,
                endX,
                endY,
                i$12 / (curvePoints - 1),
                tempPoint
              );
              segmentCallback(prevCurveX$1, prevCurveY$1, tempPoint.x, tempPoint.y);
              prevCurveX$1 = tempPoint.x;
              prevCurveY$1 = tempPoint.y;
            }
            break;
          }
        }
      });
    }
    var viewportQuadVertex = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
    var copyTexFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}";
    var cache = /* @__PURE__ */ new WeakMap();
    var glContextParams = {
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
      antialias: false,
      depth: false
    };
    function withWebGLContext(glOrCanvas, callback) {
      var gl = glOrCanvas.getContext ? glOrCanvas.getContext("webgl", glContextParams) : glOrCanvas;
      var wrapper = cache.get(gl);
      if (!wrapper) {
        let getExtension2 = function(name) {
          var ext = extensions2[name];
          if (!ext) {
            ext = extensions2[name] = gl.getExtension(name);
            if (!ext) {
              throw new Error(name + " not supported");
            }
          }
          return ext;
        }, compileShader = function(src, type) {
          var shader = gl.createShader(type);
          gl.shaderSource(shader, src);
          gl.compileShader(shader);
          return shader;
        }, withProgram = function(name, vert, frag, func) {
          if (!programs[name]) {
            var attributes = {};
            var uniforms = {};
            var program = gl.createProgram();
            gl.attachShader(program, compileShader(vert, gl.VERTEX_SHADER));
            gl.attachShader(program, compileShader(frag, gl.FRAGMENT_SHADER));
            gl.linkProgram(program);
            programs[name] = {
              program,
              transaction: function transaction(func2) {
                gl.useProgram(program);
                func2({
                  setUniform: function setUniform(type, name2) {
                    var values = [], len = arguments.length - 2;
                    while (len-- > 0) values[len] = arguments[len + 2];
                    var uniformLoc = uniforms[name2] || (uniforms[name2] = gl.getUniformLocation(program, name2));
                    gl["uniform" + type].apply(gl, [uniformLoc].concat(values));
                  },
                  setAttribute: function setAttribute(name2, size, usage, instancingDivisor, data) {
                    var attr = attributes[name2];
                    if (!attr) {
                      attr = attributes[name2] = {
                        buf: gl.createBuffer(),
                        // TODO should we destroy our buffers?
                        loc: gl.getAttribLocation(program, name2),
                        data: null
                      };
                    }
                    gl.bindBuffer(gl.ARRAY_BUFFER, attr.buf);
                    gl.vertexAttribPointer(attr.loc, size, gl.FLOAT, false, 0, 0);
                    gl.enableVertexAttribArray(attr.loc);
                    if (isWebGL2) {
                      gl.vertexAttribDivisor(attr.loc, instancingDivisor);
                    } else {
                      getExtension2("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(attr.loc, instancingDivisor);
                    }
                    if (data !== attr.data) {
                      gl.bufferData(gl.ARRAY_BUFFER, data, usage);
                      attr.data = data;
                    }
                  }
                });
              }
            };
          }
          programs[name].transaction(func);
        }, withTexture = function(name, func) {
          textureUnit++;
          try {
            gl.activeTexture(gl.TEXTURE0 + textureUnit);
            var texture = textures[name];
            if (!texture) {
              texture = textures[name] = gl.createTexture();
              gl.bindTexture(gl.TEXTURE_2D, texture);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            }
            gl.bindTexture(gl.TEXTURE_2D, texture);
            func(texture, textureUnit);
          } finally {
            textureUnit--;
          }
        }, withTextureFramebuffer = function(texture, textureUnit2, func) {
          var framebuffer = gl.createFramebuffer();
          framebufferStack.push(framebuffer);
          gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
          gl.activeTexture(gl.TEXTURE0 + textureUnit2);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
          try {
            func(framebuffer);
          } finally {
            gl.deleteFramebuffer(framebuffer);
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferStack[--framebufferStack.length - 1] || null);
          }
        }, handleContextLoss = function() {
          extensions2 = {};
          programs = {};
          textures = {};
          textureUnit = -1;
          framebufferStack.length = 0;
        };
        var isWebGL2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext;
        var extensions2 = {};
        var programs = {};
        var textures = {};
        var textureUnit = -1;
        var framebufferStack = [];
        gl.canvas.addEventListener("webglcontextlost", function(e2) {
          handleContextLoss();
          e2.preventDefault();
        }, false);
        cache.set(gl, wrapper = {
          gl,
          isWebGL2,
          getExtension: getExtension2,
          withProgram,
          withTexture,
          withTextureFramebuffer,
          handleContextLoss
        });
      }
      callback(wrapper);
    }
    function renderImageData(glOrCanvas, imageData, x, y, width, height, channels, framebuffer) {
      if (channels === void 0) channels = 15;
      if (framebuffer === void 0) framebuffer = null;
      withWebGLContext(glOrCanvas, function(ref) {
        var gl = ref.gl;
        var withProgram = ref.withProgram;
        var withTexture = ref.withTexture;
        withTexture("copy", function(tex, texUnit) {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
          withProgram("copy", viewportQuadVertex, copyTexFragment, function(ref2) {
            var setUniform = ref2.setUniform;
            var setAttribute = ref2.setAttribute;
            setAttribute("aUV", 2, gl.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2]));
            setUniform("1i", "image", texUnit);
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer || null);
            gl.disable(gl.BLEND);
            gl.colorMask(channels & 8, channels & 4, channels & 2, channels & 1);
            gl.viewport(x, y, width, height);
            gl.scissor(x, y, width, height);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
          });
        });
      });
    }
    function resizeWebGLCanvasWithoutClearing2(canvas, newWidth, newHeight) {
      var width = canvas.width;
      var height = canvas.height;
      withWebGLContext(canvas, function(ref) {
        var gl = ref.gl;
        var data = new Uint8Array(width * height * 4);
        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
        canvas.width = newWidth;
        canvas.height = newHeight;
        renderImageData(gl, data, 0, 0, width, height);
      });
    }
    var webglUtils = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      withWebGLContext,
      renderImageData,
      resizeWebGLCanvasWithoutClearing: resizeWebGLCanvasWithoutClearing2
    });
    function generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
      if (sdfExponent === void 0) sdfExponent = 1;
      var textureData = new Uint8Array(sdfWidth * sdfHeight);
      var viewBoxWidth = viewBox[2] - viewBox[0];
      var viewBoxHeight = viewBox[3] - viewBox[1];
      var segments = [];
      pathToLineSegments(path, function(x1, y1, x2, y2) {
        segments.push({
          x1,
          y1,
          x2,
          y2,
          minX: Math.min(x1, x2),
          minY: Math.min(y1, y2),
          maxX: Math.max(x1, x2),
          maxY: Math.max(y1, y2)
        });
      });
      segments.sort(function(a2, b2) {
        return a2.maxX - b2.maxX;
      });
      for (var sdfX = 0; sdfX < sdfWidth; sdfX++) {
        for (var sdfY = 0; sdfY < sdfHeight; sdfY++) {
          var signedDist = findNearestSignedDistance(
            viewBox[0] + viewBoxWidth * (sdfX + 0.5) / sdfWidth,
            viewBox[1] + viewBoxHeight * (sdfY + 0.5) / sdfHeight
          );
          var alpha = Math.pow(1 - Math.abs(signedDist) / maxDistance, sdfExponent) / 2;
          if (signedDist < 0) {
            alpha = 1 - alpha;
          }
          alpha = Math.max(0, Math.min(255, Math.round(alpha * 255)));
          textureData[sdfY * sdfWidth + sdfX] = alpha;
        }
      }
      return textureData;
      function findNearestSignedDistance(x, y) {
        var closestDistSq = Infinity;
        var closestDist = Infinity;
        for (var i = segments.length; i--; ) {
          var seg = segments[i];
          if (seg.maxX + closestDist <= x) {
            break;
          }
          if (x + closestDist > seg.minX && y - closestDist < seg.maxY && y + closestDist > seg.minY) {
            var distSq = absSquareDistanceToLineSegment(x, y, seg.x1, seg.y1, seg.x2, seg.y2);
            if (distSq < closestDistSq) {
              closestDistSq = distSq;
              closestDist = Math.sqrt(closestDistSq);
            }
          }
        }
        if (isPointInPoly(x, y)) {
          closestDist = -closestDist;
        }
        return closestDist;
      }
      function isPointInPoly(x, y) {
        var winding = 0;
        for (var i = segments.length; i--; ) {
          var seg = segments[i];
          if (seg.maxX <= x) {
            break;
          }
          var intersects = seg.y1 > y !== seg.y2 > y && x < (seg.x2 - seg.x1) * (y - seg.y1) / (seg.y2 - seg.y1) + seg.x1;
          if (intersects) {
            winding += seg.y1 < seg.y2 ? 1 : -1;
          }
        }
        return winding !== 0;
      }
    }
    function generateIntoCanvas$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
      if (sdfExponent === void 0) sdfExponent = 1;
      if (x === void 0) x = 0;
      if (y === void 0) y = 0;
      if (channel === void 0) channel = 0;
      generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
    }
    function generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
      if (sdfExponent === void 0) sdfExponent = 1;
      if (x === void 0) x = 0;
      if (y === void 0) y = 0;
      if (channel === void 0) channel = 0;
      var data = generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent);
      var rgbaData = new Uint8Array(data.length * 4);
      for (var i = 0; i < data.length; i++) {
        rgbaData[i * 4 + channel] = data[i];
      }
      renderImageData(glOrCanvas, rgbaData, x, y, sdfWidth, sdfHeight, 1 << 3 - channel, framebuffer);
    }
    function absSquareDistanceToLineSegment(x, y, lineX0, lineY0, lineX1, lineY1) {
      var ldx = lineX1 - lineX0;
      var ldy = lineY1 - lineY0;
      var lengthSq = ldx * ldx + ldy * ldy;
      var t2 = lengthSq ? Math.max(0, Math.min(1, ((x - lineX0) * ldx + (y - lineY0) * ldy) / lengthSq)) : 0;
      var dx = x - (lineX0 + t2 * ldx);
      var dy = y - (lineY0 + t2 * ldy);
      return dx * dx + dy * dy;
    }
    var javascript = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: generate$2,
      generateIntoCanvas: generateIntoCanvas$2,
      generateIntoFramebuffer: generateIntoFramebuffer$1
    });
    var mainVertex = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
    var mainFragment = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}";
    var postFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}";
    var viewportUVs = new Float32Array([0, 0, 2, 0, 0, 2]);
    var implicitContext = null;
    var isTestingSupport = false;
    var NULL_OBJECT = {};
    var supportByCanvas = /* @__PURE__ */ new WeakMap();
    function validateSupport(glOrCanvas) {
      if (!isTestingSupport && !isSupported(glOrCanvas)) {
        throw new Error("WebGL generation not supported");
      }
    }
    function generate$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas) {
      if (sdfExponent === void 0) sdfExponent = 1;
      if (glOrCanvas === void 0) glOrCanvas = null;
      if (!glOrCanvas) {
        glOrCanvas = implicitContext;
        if (!glOrCanvas) {
          var canvas = typeof OffscreenCanvas === "function" ? new OffscreenCanvas(1, 1) : typeof document !== "undefined" ? document.createElement("canvas") : null;
          if (!canvas) {
            throw new Error("OffscreenCanvas or DOM canvas not supported");
          }
          glOrCanvas = implicitContext = canvas.getContext("webgl", { depth: false });
        }
      }
      validateSupport(glOrCanvas);
      var rgbaData = new Uint8Array(sdfWidth * sdfHeight * 4);
      withWebGLContext(glOrCanvas, function(ref) {
        var gl = ref.gl;
        var withTexture = ref.withTexture;
        var withTextureFramebuffer = ref.withTextureFramebuffer;
        withTexture("readable", function(texture, textureUnit) {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, sdfWidth, sdfHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
          withTextureFramebuffer(texture, textureUnit, function(framebuffer) {
            generateIntoFramebuffer(
              sdfWidth,
              sdfHeight,
              path,
              viewBox,
              maxDistance,
              sdfExponent,
              gl,
              framebuffer,
              0,
              0,
              0
              // red channel
            );
            gl.readPixels(0, 0, sdfWidth, sdfHeight, gl.RGBA, gl.UNSIGNED_BYTE, rgbaData);
          });
        });
      });
      var data = new Uint8Array(sdfWidth * sdfHeight);
      for (var i = 0, j2 = 0; i < rgbaData.length; i += 4) {
        data[j2++] = rgbaData[i];
      }
      return data;
    }
    function generateIntoCanvas$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
      if (sdfExponent === void 0) sdfExponent = 1;
      if (x === void 0) x = 0;
      if (y === void 0) y = 0;
      if (channel === void 0) channel = 0;
      generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
    }
    function generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
      if (sdfExponent === void 0) sdfExponent = 1;
      if (x === void 0) x = 0;
      if (y === void 0) y = 0;
      if (channel === void 0) channel = 0;
      validateSupport(glOrCanvas);
      var lineSegmentCoords = [];
      pathToLineSegments(path, function(x1, y1, x2, y2) {
        lineSegmentCoords.push(x1, y1, x2, y2);
      });
      lineSegmentCoords = new Float32Array(lineSegmentCoords);
      withWebGLContext(glOrCanvas, function(ref) {
        var gl = ref.gl;
        var isWebGL2 = ref.isWebGL2;
        var getExtension2 = ref.getExtension;
        var withProgram = ref.withProgram;
        var withTexture = ref.withTexture;
        var withTextureFramebuffer = ref.withTextureFramebuffer;
        var handleContextLoss = ref.handleContextLoss;
        withTexture("rawDistances", function(intermediateTexture, intermediateTextureUnit) {
          if (sdfWidth !== intermediateTexture._lastWidth || sdfHeight !== intermediateTexture._lastHeight) {
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              gl.RGBA,
              intermediateTexture._lastWidth = sdfWidth,
              intermediateTexture._lastHeight = sdfHeight,
              0,
              gl.RGBA,
              gl.UNSIGNED_BYTE,
              null
            );
          }
          withProgram("main", mainVertex, mainFragment, function(ref2) {
            var setAttribute = ref2.setAttribute;
            var setUniform = ref2.setUniform;
            var instancingExtension = !isWebGL2 && getExtension2("ANGLE_instanced_arrays");
            var blendMinMaxExtension = !isWebGL2 && getExtension2("EXT_blend_minmax");
            setAttribute("aUV", 2, gl.STATIC_DRAW, 0, viewportUVs);
            setAttribute("aLineSegment", 4, gl.DYNAMIC_DRAW, 1, lineSegmentCoords);
            setUniform.apply(void 0, ["4f", "uGlyphBounds"].concat(viewBox));
            setUniform("1f", "uMaxDistance", maxDistance);
            setUniform("1f", "uExponent", sdfExponent);
            withTextureFramebuffer(intermediateTexture, intermediateTextureUnit, function(framebuffer2) {
              gl.enable(gl.BLEND);
              gl.colorMask(true, true, true, true);
              gl.viewport(0, 0, sdfWidth, sdfHeight);
              gl.scissor(0, 0, sdfWidth, sdfHeight);
              gl.blendFunc(gl.ONE, gl.ONE);
              gl.blendEquationSeparate(gl.FUNC_ADD, isWebGL2 ? gl.MAX : blendMinMaxExtension.MAX_EXT);
              gl.clear(gl.COLOR_BUFFER_BIT);
              if (isWebGL2) {
                gl.drawArraysInstanced(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
              } else {
                instancingExtension.drawArraysInstancedANGLE(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
              }
            });
          });
          withProgram("post", viewportQuadVertex, postFragment, function(program) {
            program.setAttribute("aUV", 2, gl.STATIC_DRAW, 0, viewportUVs);
            program.setUniform("1i", "tex", intermediateTextureUnit);
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            gl.disable(gl.BLEND);
            gl.colorMask(channel === 0, channel === 1, channel === 2, channel === 3);
            gl.viewport(x, y, sdfWidth, sdfHeight);
            gl.scissor(x, y, sdfWidth, sdfHeight);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
          });
        });
        if (gl.isContextLost()) {
          handleContextLoss();
          throw new Error("webgl context lost");
        }
      });
    }
    function isSupported(glOrCanvas) {
      var key = !glOrCanvas || glOrCanvas === implicitContext ? NULL_OBJECT : glOrCanvas.canvas || glOrCanvas;
      var supported = supportByCanvas.get(key);
      if (supported === void 0) {
        isTestingSupport = true;
        var failReason = null;
        try {
          var expectedResult = [
            97,
            106,
            97,
            61,
            99,
            137,
            118,
            80,
            80,
            118,
            137,
            99,
            61,
            97,
            106,
            97
          ];
          var testResult = generate$1(
            4,
            4,
            "M8,8L16,8L24,24L16,24Z",
            [0, 0, 32, 32],
            24,
            1,
            glOrCanvas
          );
          supported = testResult && expectedResult.length === testResult.length && testResult.every(function(val, i) {
            return val === expectedResult[i];
          });
          if (!supported) {
            failReason = "bad trial run results";
            console.info(expectedResult, testResult);
          }
        } catch (err) {
          supported = false;
          failReason = err.message;
        }
        if (failReason) {
          console.warn("WebGL SDF generation not supported:", failReason);
        }
        isTestingSupport = false;
        supportByCanvas.set(key, supported);
      }
      return supported;
    }
    var webgl = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: generate$1,
      generateIntoCanvas: generateIntoCanvas$1,
      generateIntoFramebuffer,
      isSupported
    });
    function generate(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
      if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
      if (sdfExponent === void 0) sdfExponent = 1;
      try {
        return generate$1.apply(webgl, arguments);
      } catch (e2) {
        console.info("WebGL SDF generation failed, falling back to JS", e2);
        return generate$2.apply(javascript, arguments);
      }
    }
    function generateIntoCanvas(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
      if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
      if (sdfExponent === void 0) sdfExponent = 1;
      if (x === void 0) x = 0;
      if (y === void 0) y = 0;
      if (channel === void 0) channel = 0;
      try {
        return generateIntoCanvas$1.apply(webgl, arguments);
      } catch (e2) {
        console.info("WebGL SDF generation failed, falling back to JS", e2);
        return generateIntoCanvas$2.apply(javascript, arguments);
      }
    }
    exports$12.forEachPathCommand = forEachPathCommand;
    exports$12.generate = generate;
    exports$12.generateIntoCanvas = generateIntoCanvas;
    exports$12.javascript = javascript;
    exports$12.pathToLineSegments = pathToLineSegments;
    exports$12.webgl = webgl;
    exports$12.webglUtils = webglUtils;
    Object.defineProperty(exports$12, "__esModule", { value: true });
    return exports$12;
  })({});
  return exports$1;
}
function bidiFactory() {
  var bidi = (function(exports$1) {
    var DATA = {
      "R": "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
      "EN": "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
      "ES": "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
      "ET": "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
      "AN": "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
      "CS": "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
      "B": "a,3,f+2,2v,690",
      "S": "9,2,k",
      "WS": "c,k,4f4,1vk+a,u,1j,335",
      "ON": "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
      "BN": "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
      "NSM": "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
      "AL": "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
      "LRO": "6ct",
      "RLO": "6cu",
      "LRE": "6cq",
      "RLE": "6cr",
      "PDF": "6cs",
      "LRI": "6ee",
      "RLI": "6ef",
      "FSI": "6eg",
      "PDI": "6eh"
    };
    var TYPES = {};
    var TYPES_TO_NAMES = {};
    TYPES.L = 1;
    TYPES_TO_NAMES[1] = "L";
    Object.keys(DATA).forEach(function(type, i) {
      TYPES[type] = 1 << i + 1;
      TYPES_TO_NAMES[TYPES[type]] = type;
    });
    Object.freeze(TYPES);
    var ISOLATE_INIT_TYPES = TYPES.LRI | TYPES.RLI | TYPES.FSI;
    var STRONG_TYPES = TYPES.L | TYPES.R | TYPES.AL;
    var NEUTRAL_ISOLATE_TYPES = TYPES.B | TYPES.S | TYPES.WS | TYPES.ON | TYPES.FSI | TYPES.LRI | TYPES.RLI | TYPES.PDI;
    var BN_LIKE_TYPES = TYPES.BN | TYPES.RLE | TYPES.LRE | TYPES.RLO | TYPES.LRO | TYPES.PDF;
    var TRAILING_TYPES = TYPES.S | TYPES.WS | TYPES.B | ISOLATE_INIT_TYPES | TYPES.PDI | BN_LIKE_TYPES;
    var map = null;
    function parseData() {
      if (!map) {
        map = /* @__PURE__ */ new Map();
        var loop2 = function(type2) {
          if (DATA.hasOwnProperty(type2)) {
            var lastCode = 0;
            DATA[type2].split(",").forEach(function(range) {
              var ref = range.split("+");
              var skip = ref[0];
              var step = ref[1];
              skip = parseInt(skip, 36);
              step = step ? parseInt(step, 36) : 0;
              map.set(lastCode += skip, TYPES[type2]);
              for (var i = 0; i < step; i++) {
                map.set(++lastCode, TYPES[type2]);
              }
            });
          }
        };
        for (var type in DATA) loop2(type);
      }
    }
    function getBidiCharType(char) {
      parseData();
      return map.get(char.codePointAt(0)) || TYPES.L;
    }
    function getBidiCharTypeName(char) {
      return TYPES_TO_NAMES[getBidiCharType(char)];
    }
    var data$1 = {
      "pairs": "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
      "canonical": "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
    };
    function parseCharacterMap(encodedString, includeReverse) {
      var radix = 36;
      var lastCode = 0;
      var map2 = /* @__PURE__ */ new Map();
      var reverseMap = includeReverse && /* @__PURE__ */ new Map();
      var prevPair;
      encodedString.split(",").forEach(function visit(entry) {
        if (entry.indexOf("+") !== -1) {
          for (var i = +entry; i--; ) {
            visit(prevPair);
          }
        } else {
          prevPair = entry;
          var ref = entry.split(">");
          var a2 = ref[0];
          var b2 = ref[1];
          a2 = String.fromCodePoint(lastCode += parseInt(a2, radix));
          b2 = String.fromCodePoint(lastCode += parseInt(b2, radix));
          map2.set(a2, b2);
          includeReverse && reverseMap.set(b2, a2);
        }
      });
      return { map: map2, reverseMap };
    }
    var openToClose, closeToOpen, canonical;
    function parse$1() {
      if (!openToClose) {
        var ref = parseCharacterMap(data$1.pairs, true);
        var map2 = ref.map;
        var reverseMap = ref.reverseMap;
        openToClose = map2;
        closeToOpen = reverseMap;
        canonical = parseCharacterMap(data$1.canonical, false).map;
      }
    }
    function openingToClosingBracket(char) {
      parse$1();
      return openToClose.get(char) || null;
    }
    function closingToOpeningBracket(char) {
      parse$1();
      return closeToOpen.get(char) || null;
    }
    function getCanonicalBracket(char) {
      parse$1();
      return canonical.get(char) || null;
    }
    var TYPE_L = TYPES.L;
    var TYPE_R = TYPES.R;
    var TYPE_EN = TYPES.EN;
    var TYPE_ES = TYPES.ES;
    var TYPE_ET = TYPES.ET;
    var TYPE_AN = TYPES.AN;
    var TYPE_CS = TYPES.CS;
    var TYPE_B = TYPES.B;
    var TYPE_S = TYPES.S;
    var TYPE_ON = TYPES.ON;
    var TYPE_BN = TYPES.BN;
    var TYPE_NSM = TYPES.NSM;
    var TYPE_AL = TYPES.AL;
    var TYPE_LRO = TYPES.LRO;
    var TYPE_RLO = TYPES.RLO;
    var TYPE_LRE = TYPES.LRE;
    var TYPE_RLE = TYPES.RLE;
    var TYPE_PDF = TYPES.PDF;
    var TYPE_LRI = TYPES.LRI;
    var TYPE_RLI = TYPES.RLI;
    var TYPE_FSI = TYPES.FSI;
    var TYPE_PDI = TYPES.PDI;
    function getEmbeddingLevels(string, baseDirection) {
      var MAX_DEPTH = 125;
      var charTypes = new Uint32Array(string.length);
      for (var i = 0; i < string.length; i++) {
        charTypes[i] = getBidiCharType(string[i]);
      }
      var charTypeCounts = /* @__PURE__ */ new Map();
      function changeCharType(i2, type2) {
        var oldType = charTypes[i2];
        charTypes[i2] = type2;
        charTypeCounts.set(oldType, charTypeCounts.get(oldType) - 1);
        if (oldType & NEUTRAL_ISOLATE_TYPES) {
          charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) - 1);
        }
        charTypeCounts.set(type2, (charTypeCounts.get(type2) || 0) + 1);
        if (type2 & NEUTRAL_ISOLATE_TYPES) {
          charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
        }
      }
      var embedLevels = new Uint8Array(string.length);
      var isolationPairs = /* @__PURE__ */ new Map();
      var paragraphs = [];
      var paragraph = null;
      for (var i$12 = 0; i$12 < string.length; i$12++) {
        if (!paragraph) {
          paragraphs.push(paragraph = {
            start: i$12,
            end: string.length - 1,
            // 3.3.1 P2-P3: Determine the paragraph level
            level: baseDirection === "rtl" ? 1 : baseDirection === "ltr" ? 0 : determineAutoEmbedLevel(i$12, false)
          });
        }
        if (charTypes[i$12] & TYPE_B) {
          paragraph.end = i$12;
          paragraph = null;
        }
      }
      var FORMATTING_TYPES = TYPE_RLE | TYPE_LRE | TYPE_RLO | TYPE_LRO | ISOLATE_INIT_TYPES | TYPE_PDI | TYPE_PDF | TYPE_B;
      var nextEven = function(n) {
        return n + (n & 1 ? 1 : 2);
      };
      var nextOdd = function(n) {
        return n + (n & 1 ? 2 : 1);
      };
      for (var paraIdx = 0; paraIdx < paragraphs.length; paraIdx++) {
        paragraph = paragraphs[paraIdx];
        var statusStack = [{
          _level: paragraph.level,
          _override: 0,
          //0=neutral, 1=L, 2=R
          _isolate: 0
          //bool
        }];
        var stackTop = void 0;
        var overflowIsolateCount = 0;
        var overflowEmbeddingCount = 0;
        var validIsolateCount = 0;
        charTypeCounts.clear();
        for (var i$22 = paragraph.start; i$22 <= paragraph.end; i$22++) {
          var charType = charTypes[i$22];
          stackTop = statusStack[statusStack.length - 1];
          charTypeCounts.set(charType, (charTypeCounts.get(charType) || 0) + 1);
          if (charType & NEUTRAL_ISOLATE_TYPES) {
            charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
          }
          if (charType & FORMATTING_TYPES) {
            if (charType & (TYPE_RLE | TYPE_LRE)) {
              embedLevels[i$22] = stackTop._level;
              var level = (charType === TYPE_RLE ? nextOdd : nextEven)(stackTop._level);
              if (level <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) {
                statusStack.push({
                  _level: level,
                  _override: 0,
                  _isolate: 0
                });
              } else if (!overflowIsolateCount) {
                overflowEmbeddingCount++;
              }
            } else if (charType & (TYPE_RLO | TYPE_LRO)) {
              embedLevels[i$22] = stackTop._level;
              var level$1 = (charType === TYPE_RLO ? nextOdd : nextEven)(stackTop._level);
              if (level$1 <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) {
                statusStack.push({
                  _level: level$1,
                  _override: charType & TYPE_RLO ? TYPE_R : TYPE_L,
                  _isolate: 0
                });
              } else if (!overflowIsolateCount) {
                overflowEmbeddingCount++;
              }
            } else if (charType & ISOLATE_INIT_TYPES) {
              if (charType & TYPE_FSI) {
                charType = determineAutoEmbedLevel(i$22 + 1, true) === 1 ? TYPE_RLI : TYPE_LRI;
              }
              embedLevels[i$22] = stackTop._level;
              if (stackTop._override) {
                changeCharType(i$22, stackTop._override);
              }
              var level$2 = (charType === TYPE_RLI ? nextOdd : nextEven)(stackTop._level);
              if (level$2 <= MAX_DEPTH && overflowIsolateCount === 0 && overflowEmbeddingCount === 0) {
                validIsolateCount++;
                statusStack.push({
                  _level: level$2,
                  _override: 0,
                  _isolate: 1,
                  _isolInitIndex: i$22
                });
              } else {
                overflowIsolateCount++;
              }
            } else if (charType & TYPE_PDI) {
              if (overflowIsolateCount > 0) {
                overflowIsolateCount--;
              } else if (validIsolateCount > 0) {
                overflowEmbeddingCount = 0;
                while (!statusStack[statusStack.length - 1]._isolate) {
                  statusStack.pop();
                }
                var isolInitIndex = statusStack[statusStack.length - 1]._isolInitIndex;
                if (isolInitIndex != null) {
                  isolationPairs.set(isolInitIndex, i$22);
                  isolationPairs.set(i$22, isolInitIndex);
                }
                statusStack.pop();
                validIsolateCount--;
              }
              stackTop = statusStack[statusStack.length - 1];
              embedLevels[i$22] = stackTop._level;
              if (stackTop._override) {
                changeCharType(i$22, stackTop._override);
              }
            } else if (charType & TYPE_PDF) {
              if (overflowIsolateCount === 0) {
                if (overflowEmbeddingCount > 0) {
                  overflowEmbeddingCount--;
                } else if (!stackTop._isolate && statusStack.length > 1) {
                  statusStack.pop();
                  stackTop = statusStack[statusStack.length - 1];
                }
              }
              embedLevels[i$22] = stackTop._level;
            } else if (charType & TYPE_B) {
              embedLevels[i$22] = paragraph.level;
            }
          } else {
            embedLevels[i$22] = stackTop._level;
            if (stackTop._override && charType !== TYPE_BN) {
              changeCharType(i$22, stackTop._override);
            }
          }
        }
        var levelRuns = [];
        var currentRun = null;
        for (var i$3 = paragraph.start; i$3 <= paragraph.end; i$3++) {
          var charType$1 = charTypes[i$3];
          if (!(charType$1 & BN_LIKE_TYPES)) {
            var lvl = embedLevels[i$3];
            var isIsolInit = charType$1 & ISOLATE_INIT_TYPES;
            var isPDI = charType$1 === TYPE_PDI;
            if (currentRun && lvl === currentRun._level) {
              currentRun._end = i$3;
              currentRun._endsWithIsolInit = isIsolInit;
            } else {
              levelRuns.push(currentRun = {
                _start: i$3,
                _end: i$3,
                _level: lvl,
                _startsWithPDI: isPDI,
                _endsWithIsolInit: isIsolInit
              });
            }
          }
        }
        var isolatingRunSeqs = [];
        for (var runIdx = 0; runIdx < levelRuns.length; runIdx++) {
          var run2 = levelRuns[runIdx];
          if (!run2._startsWithPDI || run2._startsWithPDI && !isolationPairs.has(run2._start)) {
            var seqRuns = [currentRun = run2];
            for (var pdiIndex = void 0; currentRun && currentRun._endsWithIsolInit && (pdiIndex = isolationPairs.get(currentRun._end)) != null; ) {
              for (var i$4 = runIdx + 1; i$4 < levelRuns.length; i$4++) {
                if (levelRuns[i$4]._start === pdiIndex) {
                  seqRuns.push(currentRun = levelRuns[i$4]);
                  break;
                }
              }
            }
            var seqIndices = [];
            for (var i$5 = 0; i$5 < seqRuns.length; i$5++) {
              var run$1 = seqRuns[i$5];
              for (var j2 = run$1._start; j2 <= run$1._end; j2++) {
                seqIndices.push(j2);
              }
            }
            var firstLevel = embedLevels[seqIndices[0]];
            var prevLevel = paragraph.level;
            for (var i$6 = seqIndices[0] - 1; i$6 >= 0; i$6--) {
              if (!(charTypes[i$6] & BN_LIKE_TYPES)) {
                prevLevel = embedLevels[i$6];
                break;
              }
            }
            var lastIndex = seqIndices[seqIndices.length - 1];
            var lastLevel = embedLevels[lastIndex];
            var nextLevel = paragraph.level;
            if (!(charTypes[lastIndex] & ISOLATE_INIT_TYPES)) {
              for (var i$7 = lastIndex + 1; i$7 <= paragraph.end; i$7++) {
                if (!(charTypes[i$7] & BN_LIKE_TYPES)) {
                  nextLevel = embedLevels[i$7];
                  break;
                }
              }
            }
            isolatingRunSeqs.push({
              _seqIndices: seqIndices,
              _sosType: Math.max(prevLevel, firstLevel) % 2 ? TYPE_R : TYPE_L,
              _eosType: Math.max(nextLevel, lastLevel) % 2 ? TYPE_R : TYPE_L
            });
          }
        }
        for (var seqIdx = 0; seqIdx < isolatingRunSeqs.length; seqIdx++) {
          var ref = isolatingRunSeqs[seqIdx];
          var seqIndices$1 = ref._seqIndices;
          var sosType = ref._sosType;
          var eosType = ref._eosType;
          var embedDirection = embedLevels[seqIndices$1[0]] & 1 ? TYPE_R : TYPE_L;
          if (charTypeCounts.get(TYPE_NSM)) {
            for (var si = 0; si < seqIndices$1.length; si++) {
              var i$8 = seqIndices$1[si];
              if (charTypes[i$8] & TYPE_NSM) {
                var prevType = sosType;
                for (var sj = si - 1; sj >= 0; sj--) {
                  if (!(charTypes[seqIndices$1[sj]] & BN_LIKE_TYPES)) {
                    prevType = charTypes[seqIndices$1[sj]];
                    break;
                  }
                }
                changeCharType(i$8, prevType & (ISOLATE_INIT_TYPES | TYPE_PDI) ? TYPE_ON : prevType);
              }
            }
          }
          if (charTypeCounts.get(TYPE_EN)) {
            for (var si$1 = 0; si$1 < seqIndices$1.length; si$1++) {
              var i$9 = seqIndices$1[si$1];
              if (charTypes[i$9] & TYPE_EN) {
                for (var sj$1 = si$1 - 1; sj$1 >= -1; sj$1--) {
                  var prevCharType = sj$1 === -1 ? sosType : charTypes[seqIndices$1[sj$1]];
                  if (prevCharType & STRONG_TYPES) {
                    if (prevCharType === TYPE_AL) {
                      changeCharType(i$9, TYPE_AN);
                    }
                    break;
                  }
                }
              }
            }
          }
          if (charTypeCounts.get(TYPE_AL)) {
            for (var si$2 = 0; si$2 < seqIndices$1.length; si$2++) {
              var i$10 = seqIndices$1[si$2];
              if (charTypes[i$10] & TYPE_AL) {
                changeCharType(i$10, TYPE_R);
              }
            }
          }
          if (charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) {
            for (var si$3 = 1; si$3 < seqIndices$1.length - 1; si$3++) {
              var i$11 = seqIndices$1[si$3];
              if (charTypes[i$11] & (TYPE_ES | TYPE_CS)) {
                var prevType$1 = 0, nextType = 0;
                for (var sj$2 = si$3 - 1; sj$2 >= 0; sj$2--) {
                  prevType$1 = charTypes[seqIndices$1[sj$2]];
                  if (!(prevType$1 & BN_LIKE_TYPES)) {
                    break;
                  }
                }
                for (var sj$3 = si$3 + 1; sj$3 < seqIndices$1.length; sj$3++) {
                  nextType = charTypes[seqIndices$1[sj$3]];
                  if (!(nextType & BN_LIKE_TYPES)) {
                    break;
                  }
                }
                if (prevType$1 === nextType && (charTypes[i$11] === TYPE_ES ? prevType$1 === TYPE_EN : prevType$1 & (TYPE_EN | TYPE_AN))) {
                  changeCharType(i$11, prevType$1);
                }
              }
            }
          }
          if (charTypeCounts.get(TYPE_EN)) {
            for (var si$4 = 0; si$4 < seqIndices$1.length; si$4++) {
              var i$122 = seqIndices$1[si$4];
              if (charTypes[i$122] & TYPE_EN) {
                for (var sj$4 = si$4 - 1; sj$4 >= 0 && charTypes[seqIndices$1[sj$4]] & (TYPE_ET | BN_LIKE_TYPES); sj$4--) {
                  changeCharType(seqIndices$1[sj$4], TYPE_EN);
                }
                for (si$4++; si$4 < seqIndices$1.length && charTypes[seqIndices$1[si$4]] & (TYPE_ET | BN_LIKE_TYPES | TYPE_EN); si$4++) {
                  if (charTypes[seqIndices$1[si$4]] !== TYPE_EN) {
                    changeCharType(seqIndices$1[si$4], TYPE_EN);
                  }
                }
              }
            }
          }
          if (charTypeCounts.get(TYPE_ET) || charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) {
            for (var si$5 = 0; si$5 < seqIndices$1.length; si$5++) {
              var i$13 = seqIndices$1[si$5];
              if (charTypes[i$13] & (TYPE_ET | TYPE_ES | TYPE_CS)) {
                changeCharType(i$13, TYPE_ON);
                for (var sj$5 = si$5 - 1; sj$5 >= 0 && charTypes[seqIndices$1[sj$5]] & BN_LIKE_TYPES; sj$5--) {
                  changeCharType(seqIndices$1[sj$5], TYPE_ON);
                }
                for (var sj$6 = si$5 + 1; sj$6 < seqIndices$1.length && charTypes[seqIndices$1[sj$6]] & BN_LIKE_TYPES; sj$6++) {
                  changeCharType(seqIndices$1[sj$6], TYPE_ON);
                }
              }
            }
          }
          if (charTypeCounts.get(TYPE_EN)) {
            for (var si$6 = 0, prevStrongType = sosType; si$6 < seqIndices$1.length; si$6++) {
              var i$14 = seqIndices$1[si$6];
              var type = charTypes[i$14];
              if (type & TYPE_EN) {
                if (prevStrongType === TYPE_L) {
                  changeCharType(i$14, TYPE_L);
                }
              } else if (type & STRONG_TYPES) {
                prevStrongType = type;
              }
            }
          }
          if (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES)) {
            var R_TYPES_FOR_N_STEPS = TYPE_R | TYPE_EN | TYPE_AN;
            var STRONG_TYPES_FOR_N_STEPS = R_TYPES_FOR_N_STEPS | TYPE_L;
            var bracketPairs = [];
            {
              var openerStack = [];
              for (var si$7 = 0; si$7 < seqIndices$1.length; si$7++) {
                if (charTypes[seqIndices$1[si$7]] & NEUTRAL_ISOLATE_TYPES) {
                  var char = string[seqIndices$1[si$7]];
                  var oppositeBracket = void 0;
                  if (openingToClosingBracket(char) !== null) {
                    if (openerStack.length < 63) {
                      openerStack.push({ char, seqIndex: si$7 });
                    } else {
                      break;
                    }
                  } else if ((oppositeBracket = closingToOpeningBracket(char)) !== null) {
                    for (var stackIdx = openerStack.length - 1; stackIdx >= 0; stackIdx--) {
                      var stackChar = openerStack[stackIdx].char;
                      if (stackChar === oppositeBracket || stackChar === closingToOpeningBracket(getCanonicalBracket(char)) || openingToClosingBracket(getCanonicalBracket(stackChar)) === char) {
                        bracketPairs.push([openerStack[stackIdx].seqIndex, si$7]);
                        openerStack.length = stackIdx;
                        break;
                      }
                    }
                  }
                }
              }
              bracketPairs.sort(function(a2, b2) {
                return a2[0] - b2[0];
              });
            }
            for (var pairIdx = 0; pairIdx < bracketPairs.length; pairIdx++) {
              var ref$1 = bracketPairs[pairIdx];
              var openSeqIdx = ref$1[0];
              var closeSeqIdx = ref$1[1];
              var foundStrongType = false;
              var useStrongType = 0;
              for (var si$8 = openSeqIdx + 1; si$8 < closeSeqIdx; si$8++) {
                var i$15 = seqIndices$1[si$8];
                if (charTypes[i$15] & STRONG_TYPES_FOR_N_STEPS) {
                  foundStrongType = true;
                  var lr = charTypes[i$15] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                  if (lr === embedDirection) {
                    useStrongType = lr;
                    break;
                  }
                }
              }
              if (foundStrongType && !useStrongType) {
                useStrongType = sosType;
                for (var si$9 = openSeqIdx - 1; si$9 >= 0; si$9--) {
                  var i$16 = seqIndices$1[si$9];
                  if (charTypes[i$16] & STRONG_TYPES_FOR_N_STEPS) {
                    var lr$1 = charTypes[i$16] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                    if (lr$1 !== embedDirection) {
                      useStrongType = lr$1;
                    } else {
                      useStrongType = embedDirection;
                    }
                    break;
                  }
                }
              }
              if (useStrongType) {
                charTypes[seqIndices$1[openSeqIdx]] = charTypes[seqIndices$1[closeSeqIdx]] = useStrongType;
                if (useStrongType !== embedDirection) {
                  for (var si$10 = openSeqIdx + 1; si$10 < seqIndices$1.length; si$10++) {
                    if (!(charTypes[seqIndices$1[si$10]] & BN_LIKE_TYPES)) {
                      if (getBidiCharType(string[seqIndices$1[si$10]]) & TYPE_NSM) {
                        charTypes[seqIndices$1[si$10]] = useStrongType;
                      }
                      break;
                    }
                  }
                }
                if (useStrongType !== embedDirection) {
                  for (var si$11 = closeSeqIdx + 1; si$11 < seqIndices$1.length; si$11++) {
                    if (!(charTypes[seqIndices$1[si$11]] & BN_LIKE_TYPES)) {
                      if (getBidiCharType(string[seqIndices$1[si$11]]) & TYPE_NSM) {
                        charTypes[seqIndices$1[si$11]] = useStrongType;
                      }
                      break;
                    }
                  }
                }
              }
            }
            for (var si$12 = 0; si$12 < seqIndices$1.length; si$12++) {
              if (charTypes[seqIndices$1[si$12]] & NEUTRAL_ISOLATE_TYPES) {
                var niRunStart = si$12, niRunEnd = si$12;
                var prevType$2 = sosType;
                for (var si2 = si$12 - 1; si2 >= 0; si2--) {
                  if (charTypes[seqIndices$1[si2]] & BN_LIKE_TYPES) {
                    niRunStart = si2;
                  } else {
                    prevType$2 = charTypes[seqIndices$1[si2]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                    break;
                  }
                }
                var nextType$1 = eosType;
                for (var si2$1 = si$12 + 1; si2$1 < seqIndices$1.length; si2$1++) {
                  if (charTypes[seqIndices$1[si2$1]] & (NEUTRAL_ISOLATE_TYPES | BN_LIKE_TYPES)) {
                    niRunEnd = si2$1;
                  } else {
                    nextType$1 = charTypes[seqIndices$1[si2$1]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                    break;
                  }
                }
                for (var sj$7 = niRunStart; sj$7 <= niRunEnd; sj$7++) {
                  charTypes[seqIndices$1[sj$7]] = prevType$2 === nextType$1 ? prevType$2 : embedDirection;
                }
                si$12 = niRunEnd;
              }
            }
          }
        }
        for (var i$17 = paragraph.start; i$17 <= paragraph.end; i$17++) {
          var level$3 = embedLevels[i$17];
          var type$1 = charTypes[i$17];
          if (level$3 & 1) {
            if (type$1 & (TYPE_L | TYPE_EN | TYPE_AN)) {
              embedLevels[i$17]++;
            }
          } else {
            if (type$1 & TYPE_R) {
              embedLevels[i$17]++;
            } else if (type$1 & (TYPE_AN | TYPE_EN)) {
              embedLevels[i$17] += 2;
            }
          }
          if (type$1 & BN_LIKE_TYPES) {
            embedLevels[i$17] = i$17 === 0 ? paragraph.level : embedLevels[i$17 - 1];
          }
          if (i$17 === paragraph.end || getBidiCharType(string[i$17]) & (TYPE_S | TYPE_B)) {
            for (var j$1 = i$17; j$1 >= 0 && getBidiCharType(string[j$1]) & TRAILING_TYPES; j$1--) {
              embedLevels[j$1] = paragraph.level;
            }
          }
        }
      }
      return {
        levels: embedLevels,
        paragraphs
      };
      function determineAutoEmbedLevel(start, isFSI) {
        for (var i2 = start; i2 < string.length; i2++) {
          var charType2 = charTypes[i2];
          if (charType2 & (TYPE_R | TYPE_AL)) {
            return 1;
          }
          if (charType2 & (TYPE_B | TYPE_L) || isFSI && charType2 === TYPE_PDI) {
            return 0;
          }
          if (charType2 & ISOLATE_INIT_TYPES) {
            var pdi = indexOfMatchingPDI(i2);
            i2 = pdi === -1 ? string.length : pdi;
          }
        }
        return 0;
      }
      function indexOfMatchingPDI(isolateStart) {
        var isolationLevel = 1;
        for (var i2 = isolateStart + 1; i2 < string.length; i2++) {
          var charType2 = charTypes[i2];
          if (charType2 & TYPE_B) {
            break;
          }
          if (charType2 & TYPE_PDI) {
            if (--isolationLevel === 0) {
              return i2;
            }
          } else if (charType2 & ISOLATE_INIT_TYPES) {
            isolationLevel++;
          }
        }
        return -1;
      }
    }
    var data = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1";
    var mirrorMap;
    function parse() {
      if (!mirrorMap) {
        var ref = parseCharacterMap(data, true);
        var map2 = ref.map;
        var reverseMap = ref.reverseMap;
        reverseMap.forEach(function(value, key) {
          map2.set(key, value);
        });
        mirrorMap = map2;
      }
    }
    function getMirroredCharacter(char) {
      parse();
      return mirrorMap.get(char) || null;
    }
    function getMirroredCharactersMap(string, embeddingLevels, start, end) {
      var strLen = string.length;
      start = Math.max(0, start == null ? 0 : +start);
      end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
      var map2 = /* @__PURE__ */ new Map();
      for (var i = start; i <= end; i++) {
        if (embeddingLevels[i] & 1) {
          var mirror = getMirroredCharacter(string[i]);
          if (mirror !== null) {
            map2.set(i, mirror);
          }
        }
      }
      return map2;
    }
    function getReorderSegments(string, embeddingLevelsResult, start, end) {
      var strLen = string.length;
      start = Math.max(0, start == null ? 0 : +start);
      end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
      var segments = [];
      embeddingLevelsResult.paragraphs.forEach(function(paragraph) {
        var lineStart = Math.max(start, paragraph.start);
        var lineEnd = Math.min(end, paragraph.end);
        if (lineStart < lineEnd) {
          var lineLevels = embeddingLevelsResult.levels.slice(lineStart, lineEnd + 1);
          for (var i = lineEnd; i >= lineStart && getBidiCharType(string[i]) & TRAILING_TYPES; i--) {
            lineLevels[i] = paragraph.level;
          }
          var maxLevel = paragraph.level;
          var minOddLevel = Infinity;
          for (var i$12 = 0; i$12 < lineLevels.length; i$12++) {
            var level = lineLevels[i$12];
            if (level > maxLevel) {
              maxLevel = level;
            }
            if (level < minOddLevel) {
              minOddLevel = level | 1;
            }
          }
          for (var lvl = maxLevel; lvl >= minOddLevel; lvl--) {
            for (var i$22 = 0; i$22 < lineLevels.length; i$22++) {
              if (lineLevels[i$22] >= lvl) {
                var segStart = i$22;
                while (i$22 + 1 < lineLevels.length && lineLevels[i$22 + 1] >= lvl) {
                  i$22++;
                }
                if (i$22 > segStart) {
                  segments.push([segStart + lineStart, i$22 + lineStart]);
                }
              }
            }
          }
        }
      });
      return segments;
    }
    function getReorderedString(string, embedLevelsResult, start, end) {
      var indices = getReorderedIndices(string, embedLevelsResult, start, end);
      var chars = [].concat(string);
      indices.forEach(function(charIndex, i) {
        chars[i] = (embedLevelsResult.levels[charIndex] & 1 ? getMirroredCharacter(string[charIndex]) : null) || string[charIndex];
      });
      return chars.join("");
    }
    function getReorderedIndices(string, embedLevelsResult, start, end) {
      var segments = getReorderSegments(string, embedLevelsResult, start, end);
      var indices = [];
      for (var i = 0; i < string.length; i++) {
        indices[i] = i;
      }
      segments.forEach(function(ref) {
        var start2 = ref[0];
        var end2 = ref[1];
        var slice = indices.slice(start2, end2 + 1);
        for (var i2 = slice.length; i2--; ) {
          indices[end2 - i2] = slice[i2];
        }
      });
      return indices;
    }
    exports$1.closingToOpeningBracket = closingToOpeningBracket;
    exports$1.getBidiCharType = getBidiCharType;
    exports$1.getBidiCharTypeName = getBidiCharTypeName;
    exports$1.getCanonicalBracket = getCanonicalBracket;
    exports$1.getEmbeddingLevels = getEmbeddingLevels;
    exports$1.getMirroredCharacter = getMirroredCharacter;
    exports$1.getMirroredCharactersMap = getMirroredCharactersMap;
    exports$1.getReorderSegments = getReorderSegments;
    exports$1.getReorderedIndices = getReorderedIndices;
    exports$1.getReorderedString = getReorderedString;
    exports$1.openingToClosingBracket = openingToClosingBracket;
    Object.defineProperty(exports$1, "__esModule", { value: true });
    return exports$1;
  })({});
  return bidi;
}
const voidMainRegExp = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function expandShaderIncludes(source) {
  const pattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function replace(match, include) {
    let chunk = ShaderChunk[include];
    return chunk ? expandShaderIncludes(chunk) : match;
  }
  return source.replace(pattern, replace);
}
const _lut = [];
for (let i = 0; i < 256; i++) {
  _lut[i] = (i < 16 ? "0" : "") + i.toString(16);
}
function generateUUID() {
  const d0 = Math.random() * 4294967295 | 0;
  const d1 = Math.random() * 4294967295 | 0;
  const d2 = Math.random() * 4294967295 | 0;
  const d3 = Math.random() * 4294967295 | 0;
  const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
  return uuid.toUpperCase();
}
const assign$1 = Object.assign || function() {
  let target = arguments[0];
  for (let i = 1, len = arguments.length; i < len; i++) {
    let source = arguments[i];
    if (source) {
      for (let prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          target[prop] = source[prop];
        }
      }
    }
  }
  return target;
};
const epoch = Date.now();
const CONSTRUCTOR_CACHE = /* @__PURE__ */ new WeakMap();
const SHADER_UPGRADE_CACHE = /* @__PURE__ */ new Map();
let materialInstanceId = 1e10;
function createDerivedMaterial(baseMaterial, options) {
  const optionsKey = getKeyForOptions(options);
  let ctorsByDerivation = CONSTRUCTOR_CACHE.get(baseMaterial);
  if (!ctorsByDerivation) {
    CONSTRUCTOR_CACHE.set(baseMaterial, ctorsByDerivation = /* @__PURE__ */ Object.create(null));
  }
  if (ctorsByDerivation[optionsKey]) {
    return new ctorsByDerivation[optionsKey]();
  }
  const privateBeforeCompileProp = `_onBeforeCompile${optionsKey}`;
  const onBeforeCompile = function(shaderInfo, renderer) {
    baseMaterial.onBeforeCompile.call(this, shaderInfo, renderer);
    const cacheKey = this.customProgramCacheKey() + "|" + shaderInfo.vertexShader + "|" + shaderInfo.fragmentShader;
    let upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey];
    if (!upgradedShaders) {
      const upgraded = upgradeShaders(this, shaderInfo, options, optionsKey);
      upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey] = upgraded;
    }
    shaderInfo.vertexShader = upgradedShaders.vertexShader;
    shaderInfo.fragmentShader = upgradedShaders.fragmentShader;
    assign$1(shaderInfo.uniforms, this.uniforms);
    if (options.timeUniform) {
      shaderInfo.uniforms[options.timeUniform] = {
        get value() {
          return Date.now() - epoch;
        }
      };
    }
    if (this[privateBeforeCompileProp]) {
      this[privateBeforeCompileProp](shaderInfo);
    }
  };
  const DerivedMaterial = function DerivedMaterial2() {
    return derive(options.chained ? baseMaterial : baseMaterial.clone());
  };
  const derive = function(base) {
    const derived = Object.create(base, descriptor);
    Object.defineProperty(derived, "baseMaterial", { value: baseMaterial });
    Object.defineProperty(derived, "id", { value: materialInstanceId++ });
    derived.uuid = generateUUID();
    derived.uniforms = assign$1({}, base.uniforms, options.uniforms);
    derived.defines = assign$1({}, base.defines, options.defines);
    derived.defines[`TROIKA_DERIVED_MATERIAL_${optionsKey}`] = "";
    derived.extensions = assign$1({}, base.extensions, options.extensions);
    derived._listeners = void 0;
    return derived;
  };
  const descriptor = {
    constructor: { value: DerivedMaterial },
    isDerivedMaterial: { value: true },
    type: {
      get: () => baseMaterial.type,
      set: (value) => {
        baseMaterial.type = value;
      }
    },
    isDerivedFrom: {
      writable: true,
      configurable: true,
      value: function(testMaterial) {
        const base = this.baseMaterial;
        return testMaterial === base || base.isDerivedMaterial && base.isDerivedFrom(testMaterial) || false;
      }
    },
    customProgramCacheKey: {
      writable: true,
      configurable: true,
      value: function() {
        return baseMaterial.customProgramCacheKey() + "|" + optionsKey;
      }
    },
    onBeforeCompile: {
      get() {
        return onBeforeCompile;
      },
      set(fn) {
        this[privateBeforeCompileProp] = fn;
      }
    },
    copy: {
      writable: true,
      configurable: true,
      value: function(source) {
        baseMaterial.copy.call(this, source);
        if (!baseMaterial.isShaderMaterial && !baseMaterial.isDerivedMaterial) {
          assign$1(this.extensions, source.extensions);
          assign$1(this.defines, source.defines);
          assign$1(this.uniforms, UniformsUtils.clone(source.uniforms));
        }
        return this;
      }
    },
    clone: {
      writable: true,
      configurable: true,
      value: function() {
        const newBase = new baseMaterial.constructor();
        return derive(newBase).copy(this);
      }
    },
    /**
     * Utility to get a MeshDepthMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */
    getDepthMaterial: {
      writable: true,
      configurable: true,
      value: function() {
        let depthMaterial = this._depthMaterial;
        if (!depthMaterial) {
          depthMaterial = this._depthMaterial = createDerivedMaterial(
            baseMaterial.isDerivedMaterial ? baseMaterial.getDepthMaterial() : new MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
            options
          );
          depthMaterial.defines.IS_DEPTH_MATERIAL = "";
          depthMaterial.uniforms = this.uniforms;
        }
        return depthMaterial;
      }
    },
    /**
     * Utility to get a MeshDistanceMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */
    getDistanceMaterial: {
      writable: true,
      configurable: true,
      value: function() {
        let distanceMaterial = this._distanceMaterial;
        if (!distanceMaterial) {
          distanceMaterial = this._distanceMaterial = createDerivedMaterial(
            baseMaterial.isDerivedMaterial ? baseMaterial.getDistanceMaterial() : new MeshDistanceMaterial(),
            options
          );
          distanceMaterial.defines.IS_DISTANCE_MATERIAL = "";
          distanceMaterial.uniforms = this.uniforms;
        }
        return distanceMaterial;
      }
    },
    dispose: {
      writable: true,
      configurable: true,
      value() {
        const { _depthMaterial, _distanceMaterial } = this;
        if (_depthMaterial) _depthMaterial.dispose();
        if (_distanceMaterial) _distanceMaterial.dispose();
        baseMaterial.dispose.call(this);
      }
    }
  };
  ctorsByDerivation[optionsKey] = DerivedMaterial;
  return new DerivedMaterial();
}
function upgradeShaders(material, { vertexShader: vertexShader2, fragmentShader: fragmentShader2 }, options, key) {
  let {
    vertexDefs,
    vertexMainIntro,
    vertexMainOutro,
    vertexTransform,
    fragmentDefs,
    fragmentMainIntro,
    fragmentMainOutro,
    fragmentColorTransform,
    customRewriter,
    timeUniform
  } = options;
  vertexDefs = vertexDefs || "";
  vertexMainIntro = vertexMainIntro || "";
  vertexMainOutro = vertexMainOutro || "";
  fragmentDefs = fragmentDefs || "";
  fragmentMainIntro = fragmentMainIntro || "";
  fragmentMainOutro = fragmentMainOutro || "";
  if (vertexTransform || customRewriter) {
    vertexShader2 = expandShaderIncludes(vertexShader2);
  }
  if (fragmentColorTransform || customRewriter) {
    fragmentShader2 = fragmentShader2.replace(
      /^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,
      "\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n"
    );
    fragmentShader2 = expandShaderIncludes(fragmentShader2);
  }
  if (customRewriter) {
    let res = customRewriter({ vertexShader: vertexShader2, fragmentShader: fragmentShader2 });
    vertexShader2 = res.vertexShader;
    fragmentShader2 = res.fragmentShader;
  }
  if (fragmentColorTransform) {
    let postChunks = [];
    fragmentShader2 = fragmentShader2.replace(
      /^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,
      // [^]+? = non-greedy match of any chars including newlines
      (match) => {
        postChunks.push(match);
        return "";
      }
    );
    fragmentMainOutro = `${fragmentColorTransform}
${postChunks.join("\n")}
${fragmentMainOutro}`;
  }
  if (timeUniform) {
    const code = `
uniform float ${timeUniform};
`;
    vertexDefs = code + vertexDefs;
    fragmentDefs = code + fragmentDefs;
  }
  if (vertexTransform) {
    vertexShader2 = `vec3 troika_position_${key};
vec3 troika_normal_${key};
vec2 troika_uv_${key};
${vertexShader2}
`;
    vertexDefs = `${vertexDefs}
void troikaVertexTransform${key}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${vertexTransform}
}
`;
    vertexMainIntro = `
troika_position_${key} = vec3(position);
troika_normal_${key} = vec3(normal);
troika_uv_${key} = vec2(uv);
troikaVertexTransform${key}(troika_position_${key}, troika_normal_${key}, troika_uv_${key});
${vertexMainIntro}
`;
    vertexShader2 = vertexShader2.replace(/\b(position|normal|uv)\b/g, (match, match1, index, fullStr) => {
      return /\battribute\s+vec[23]\s+$/.test(fullStr.substr(0, index)) ? match1 : `troika_${match1}_${key}`;
    });
    if (!(material.map && material.map.channel > 0)) {
      vertexShader2 = vertexShader2.replace(/\bMAP_UV\b/g, `troika_uv_${key}`);
    }
  }
  vertexShader2 = injectIntoShaderCode(vertexShader2, key, vertexDefs, vertexMainIntro, vertexMainOutro);
  fragmentShader2 = injectIntoShaderCode(fragmentShader2, key, fragmentDefs, fragmentMainIntro, fragmentMainOutro);
  return {
    vertexShader: vertexShader2,
    fragmentShader: fragmentShader2
  };
}
function injectIntoShaderCode(shaderCode, id, defs, intro, outro) {
  if (intro || outro || defs) {
    shaderCode = shaderCode.replace(
      voidMainRegExp,
      `
${defs}
void troikaOrigMain${id}() {`
    );
    shaderCode += `
void main() {
  ${intro}
  troikaOrigMain${id}();
  ${outro}
}`;
  }
  return shaderCode;
}
function optionsJsonReplacer(key, value) {
  return key === "uniforms" ? void 0 : typeof value === "function" ? value.toString() : value;
}
let _idCtr = 0;
const optionsHashesToIds = /* @__PURE__ */ new Map();
function getKeyForOptions(options) {
  const optionsHash = JSON.stringify(options, optionsJsonReplacer);
  let id = optionsHashesToIds.get(optionsHash);
  if (id == null) {
    optionsHashesToIds.set(optionsHash, id = ++_idCtr);
  }
  return id;
}
/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/
function typrFactory() {
  return "undefined" == typeof window && (self.window = self), (function(r2) {
    var e2 = { parse: function(r3) {
      var t3 = e2._bin, a3 = new Uint8Array(r3);
      if ("ttcf" == t3.readASCII(a3, 0, 4)) {
        var n = 4;
        t3.readUshort(a3, n), n += 2, t3.readUshort(a3, n), n += 2;
        var o2 = t3.readUint(a3, n);
        n += 4;
        for (var s = [], i = 0; i < o2; i++) {
          var h2 = t3.readUint(a3, n);
          n += 4, s.push(e2._readFont(a3, h2));
        }
        return s;
      }
      return [e2._readFont(a3, 0)];
    }, _readFont: function(r3, t3) {
      var a3 = e2._bin, n = t3;
      a3.readFixed(r3, t3), t3 += 4;
      var o2 = a3.readUshort(r3, t3);
      t3 += 2, a3.readUshort(r3, t3), t3 += 2, a3.readUshort(r3, t3), t3 += 2, a3.readUshort(r3, t3), t3 += 2;
      for (var s = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GDEF", "GPOS", "GSUB", "SVG "], i = { _data: r3, _offset: n }, h2 = {}, d = 0; d < o2; d++) {
        var f = a3.readASCII(r3, t3, 4);
        t3 += 4, a3.readUint(r3, t3), t3 += 4;
        var u = a3.readUint(r3, t3);
        t3 += 4;
        var l2 = a3.readUint(r3, t3);
        t3 += 4, h2[f] = { offset: u, length: l2 };
      }
      for (d = 0; d < s.length; d++) {
        var v = s[d];
        h2[v] && (i[v.trim()] = e2[v.trim()].parse(r3, h2[v].offset, h2[v].length, i));
      }
      return i;
    }, _tabOffset: function(r3, t3, a3) {
      for (var n = e2._bin, o2 = n.readUshort(r3, a3 + 4), s = a3 + 12, i = 0; i < o2; i++) {
        var h2 = n.readASCII(r3, s, 4);
        s += 4, n.readUint(r3, s), s += 4;
        var d = n.readUint(r3, s);
        if (s += 4, n.readUint(r3, s), s += 4, h2 == t3) return d;
      }
      return 0;
    } };
    e2._bin = { readFixed: function(r3, e3) {
      return (r3[e3] << 8 | r3[e3 + 1]) + (r3[e3 + 2] << 8 | r3[e3 + 3]) / 65540;
    }, readF2dot14: function(r3, t3) {
      return e2._bin.readShort(r3, t3) / 16384;
    }, readInt: function(r3, t3) {
      return e2._bin._view(r3).getInt32(t3);
    }, readInt8: function(r3, t3) {
      return e2._bin._view(r3).getInt8(t3);
    }, readShort: function(r3, t3) {
      return e2._bin._view(r3).getInt16(t3);
    }, readUshort: function(r3, t3) {
      return e2._bin._view(r3).getUint16(t3);
    }, readUshorts: function(r3, t3, a3) {
      for (var n = [], o2 = 0; o2 < a3; o2++) n.push(e2._bin.readUshort(r3, t3 + 2 * o2));
      return n;
    }, readUint: function(r3, t3) {
      return e2._bin._view(r3).getUint32(t3);
    }, readUint64: function(r3, t3) {
      return 4294967296 * e2._bin.readUint(r3, t3) + e2._bin.readUint(r3, t3 + 4);
    }, readASCII: function(r3, e3, t3) {
      for (var a3 = "", n = 0; n < t3; n++) a3 += String.fromCharCode(r3[e3 + n]);
      return a3;
    }, readUnicode: function(r3, e3, t3) {
      for (var a3 = "", n = 0; n < t3; n++) {
        var o2 = r3[e3++] << 8 | r3[e3++];
        a3 += String.fromCharCode(o2);
      }
      return a3;
    }, _tdec: "undefined" != typeof window && window.TextDecoder ? new window.TextDecoder() : null, readUTF8: function(r3, t3, a3) {
      var n = e2._bin._tdec;
      return n && 0 == t3 && a3 == r3.length ? n.decode(r3) : e2._bin.readASCII(r3, t3, a3);
    }, readBytes: function(r3, e3, t3) {
      for (var a3 = [], n = 0; n < t3; n++) a3.push(r3[e3 + n]);
      return a3;
    }, readASCIIArray: function(r3, e3, t3) {
      for (var a3 = [], n = 0; n < t3; n++) a3.push(String.fromCharCode(r3[e3 + n]));
      return a3;
    }, _view: function(r3) {
      return r3._dataView || (r3._dataView = r3.buffer ? new DataView(r3.buffer, r3.byteOffset, r3.byteLength) : new DataView(new Uint8Array(r3).buffer));
    } }, e2._lctf = {}, e2._lctf.parse = function(r3, t3, a3, n, o2) {
      var s = e2._bin, i = {}, h2 = t3;
      s.readFixed(r3, t3), t3 += 4;
      var d = s.readUshort(r3, t3);
      t3 += 2;
      var f = s.readUshort(r3, t3);
      t3 += 2;
      var u = s.readUshort(r3, t3);
      return t3 += 2, i.scriptList = e2._lctf.readScriptList(r3, h2 + d), i.featureList = e2._lctf.readFeatureList(r3, h2 + f), i.lookupList = e2._lctf.readLookupList(r3, h2 + u, o2), i;
    }, e2._lctf.readLookupList = function(r3, t3, a3) {
      var n = e2._bin, o2 = t3, s = [], i = n.readUshort(r3, t3);
      t3 += 2;
      for (var h2 = 0; h2 < i; h2++) {
        var d = n.readUshort(r3, t3);
        t3 += 2;
        var f = e2._lctf.readLookupTable(r3, o2 + d, a3);
        s.push(f);
      }
      return s;
    }, e2._lctf.readLookupTable = function(r3, t3, a3) {
      var n = e2._bin, o2 = t3, s = { tabs: [] };
      s.ltype = n.readUshort(r3, t3), t3 += 2, s.flag = n.readUshort(r3, t3), t3 += 2;
      var i = n.readUshort(r3, t3);
      t3 += 2;
      for (var h2 = s.ltype, d = 0; d < i; d++) {
        var f = n.readUshort(r3, t3);
        t3 += 2;
        var u = a3(r3, h2, o2 + f, s);
        s.tabs.push(u);
      }
      return s;
    }, e2._lctf.numOfOnes = function(r3) {
      for (var e3 = 0, t3 = 0; t3 < 32; t3++) 0 != (r3 >>> t3 & 1) && e3++;
      return e3;
    }, e2._lctf.readClassDef = function(r3, t3) {
      var a3 = e2._bin, n = [], o2 = a3.readUshort(r3, t3);
      if (t3 += 2, 1 == o2) {
        var s = a3.readUshort(r3, t3);
        t3 += 2;
        var i = a3.readUshort(r3, t3);
        t3 += 2;
        for (var h2 = 0; h2 < i; h2++) n.push(s + h2), n.push(s + h2), n.push(a3.readUshort(r3, t3)), t3 += 2;
      }
      if (2 == o2) {
        var d = a3.readUshort(r3, t3);
        t3 += 2;
        for (h2 = 0; h2 < d; h2++) n.push(a3.readUshort(r3, t3)), t3 += 2, n.push(a3.readUshort(r3, t3)), t3 += 2, n.push(a3.readUshort(r3, t3)), t3 += 2;
      }
      return n;
    }, e2._lctf.getInterval = function(r3, e3) {
      for (var t3 = 0; t3 < r3.length; t3 += 3) {
        var a3 = r3[t3], n = r3[t3 + 1];
        if (r3[t3 + 2], a3 <= e3 && e3 <= n) return t3;
      }
      return -1;
    }, e2._lctf.readCoverage = function(r3, t3) {
      var a3 = e2._bin, n = {};
      n.fmt = a3.readUshort(r3, t3), t3 += 2;
      var o2 = a3.readUshort(r3, t3);
      return t3 += 2, 1 == n.fmt && (n.tab = a3.readUshorts(r3, t3, o2)), 2 == n.fmt && (n.tab = a3.readUshorts(r3, t3, 3 * o2)), n;
    }, e2._lctf.coverageIndex = function(r3, t3) {
      var a3 = r3.tab;
      if (1 == r3.fmt) return a3.indexOf(t3);
      if (2 == r3.fmt) {
        var n = e2._lctf.getInterval(a3, t3);
        if (-1 != n) return a3[n + 2] + (t3 - a3[n]);
      }
      return -1;
    }, e2._lctf.readFeatureList = function(r3, t3) {
      var a3 = e2._bin, n = t3, o2 = [], s = a3.readUshort(r3, t3);
      t3 += 2;
      for (var i = 0; i < s; i++) {
        var h2 = a3.readASCII(r3, t3, 4);
        t3 += 4;
        var d = a3.readUshort(r3, t3);
        t3 += 2;
        var f = e2._lctf.readFeatureTable(r3, n + d);
        f.tag = h2.trim(), o2.push(f);
      }
      return o2;
    }, e2._lctf.readFeatureTable = function(r3, t3) {
      var a3 = e2._bin, n = t3, o2 = {}, s = a3.readUshort(r3, t3);
      t3 += 2, s > 0 && (o2.featureParams = n + s);
      var i = a3.readUshort(r3, t3);
      t3 += 2, o2.tab = [];
      for (var h2 = 0; h2 < i; h2++) o2.tab.push(a3.readUshort(r3, t3 + 2 * h2));
      return o2;
    }, e2._lctf.readScriptList = function(r3, t3) {
      var a3 = e2._bin, n = t3, o2 = {}, s = a3.readUshort(r3, t3);
      t3 += 2;
      for (var i = 0; i < s; i++) {
        var h2 = a3.readASCII(r3, t3, 4);
        t3 += 4;
        var d = a3.readUshort(r3, t3);
        t3 += 2, o2[h2.trim()] = e2._lctf.readScriptTable(r3, n + d);
      }
      return o2;
    }, e2._lctf.readScriptTable = function(r3, t3) {
      var a3 = e2._bin, n = t3, o2 = {}, s = a3.readUshort(r3, t3);
      t3 += 2, s > 0 && (o2.default = e2._lctf.readLangSysTable(r3, n + s));
      var i = a3.readUshort(r3, t3);
      t3 += 2;
      for (var h2 = 0; h2 < i; h2++) {
        var d = a3.readASCII(r3, t3, 4);
        t3 += 4;
        var f = a3.readUshort(r3, t3);
        t3 += 2, o2[d.trim()] = e2._lctf.readLangSysTable(r3, n + f);
      }
      return o2;
    }, e2._lctf.readLangSysTable = function(r3, t3) {
      var a3 = e2._bin, n = {};
      a3.readUshort(r3, t3), t3 += 2, n.reqFeature = a3.readUshort(r3, t3), t3 += 2;
      var o2 = a3.readUshort(r3, t3);
      return t3 += 2, n.features = a3.readUshorts(r3, t3, o2), n;
    }, e2.CFF = {}, e2.CFF.parse = function(r3, t3, a3) {
      var n = e2._bin;
      (r3 = new Uint8Array(r3.buffer, t3, a3))[t3 = 0], r3[++t3], r3[++t3], r3[++t3], t3++;
      var o2 = [];
      t3 = e2.CFF.readIndex(r3, t3, o2);
      for (var s = [], i = 0; i < o2.length - 1; i++) s.push(n.readASCII(r3, t3 + o2[i], o2[i + 1] - o2[i]));
      t3 += o2[o2.length - 1];
      var h2 = [];
      t3 = e2.CFF.readIndex(r3, t3, h2);
      var d = [];
      for (i = 0; i < h2.length - 1; i++) d.push(e2.CFF.readDict(r3, t3 + h2[i], t3 + h2[i + 1]));
      t3 += h2[h2.length - 1];
      var f = d[0], u = [];
      t3 = e2.CFF.readIndex(r3, t3, u);
      var l2 = [];
      for (i = 0; i < u.length - 1; i++) l2.push(n.readASCII(r3, t3 + u[i], u[i + 1] - u[i]));
      if (t3 += u[u.length - 1], e2.CFF.readSubrs(r3, t3, f), f.CharStrings) {
        t3 = f.CharStrings;
        u = [];
        t3 = e2.CFF.readIndex(r3, t3, u);
        var v = [];
        for (i = 0; i < u.length - 1; i++) v.push(n.readBytes(r3, t3 + u[i], u[i + 1] - u[i]));
        f.CharStrings = v;
      }
      if (f.ROS) {
        t3 = f.FDArray;
        var c2 = [];
        t3 = e2.CFF.readIndex(r3, t3, c2), f.FDArray = [];
        for (i = 0; i < c2.length - 1; i++) {
          var p2 = e2.CFF.readDict(r3, t3 + c2[i], t3 + c2[i + 1]);
          e2.CFF._readFDict(r3, p2, l2), f.FDArray.push(p2);
        }
        t3 += c2[c2.length - 1], t3 = f.FDSelect, f.FDSelect = [];
        var U = r3[t3];
        if (t3++, 3 != U) throw U;
        var g2 = n.readUshort(r3, t3);
        t3 += 2;
        for (i = 0; i < g2 + 1; i++) f.FDSelect.push(n.readUshort(r3, t3), r3[t3 + 2]), t3 += 3;
      }
      return f.Encoding && (f.Encoding = e2.CFF.readEncoding(r3, f.Encoding, f.CharStrings.length)), f.charset && (f.charset = e2.CFF.readCharset(r3, f.charset, f.CharStrings.length)), e2.CFF._readFDict(r3, f, l2), f;
    }, e2.CFF._readFDict = function(r3, t3, a3) {
      var n;
      for (var o2 in t3.Private && (n = t3.Private[1], t3.Private = e2.CFF.readDict(r3, n, n + t3.Private[0]), t3.Private.Subrs && e2.CFF.readSubrs(r3, n + t3.Private.Subrs, t3.Private)), t3) -1 != ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(o2) && (t3[o2] = a3[t3[o2] - 426 + 35]);
    }, e2.CFF.readSubrs = function(r3, t3, a3) {
      var n = e2._bin, o2 = [];
      t3 = e2.CFF.readIndex(r3, t3, o2);
      var s, i = o2.length;
      s = i < 1240 ? 107 : i < 33900 ? 1131 : 32768, a3.Bias = s, a3.Subrs = [];
      for (var h2 = 0; h2 < o2.length - 1; h2++) a3.Subrs.push(n.readBytes(r3, t3 + o2[h2], o2[h2 + 1] - o2[h2]));
    }, e2.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], e2.CFF.glyphByUnicode = function(r3, e3) {
      for (var t3 = 0; t3 < r3.charset.length; t3++) if (r3.charset[t3] == e3) return t3;
      return -1;
    }, e2.CFF.glyphBySE = function(r3, t3) {
      return t3 < 0 || t3 > 255 ? -1 : e2.CFF.glyphByUnicode(r3, e2.CFF.tableSE[t3]);
    }, e2.CFF.readEncoding = function(r3, t3, a3) {
      e2._bin;
      var n = [".notdef"], o2 = r3[t3];
      if (t3++, 0 != o2) throw "error: unknown encoding format: " + o2;
      var s = r3[t3];
      t3++;
      for (var i = 0; i < s; i++) n.push(r3[t3 + i]);
      return n;
    }, e2.CFF.readCharset = function(r3, t3, a3) {
      var n = e2._bin, o2 = [".notdef"], s = r3[t3];
      if (t3++, 0 == s) for (var i = 0; i < a3; i++) {
        var h2 = n.readUshort(r3, t3);
        t3 += 2, o2.push(h2);
      }
      else {
        if (1 != s && 2 != s) throw "error: format: " + s;
        for (; o2.length < a3; ) {
          h2 = n.readUshort(r3, t3);
          t3 += 2;
          var d = 0;
          1 == s ? (d = r3[t3], t3++) : (d = n.readUshort(r3, t3), t3 += 2);
          for (i = 0; i <= d; i++) o2.push(h2), h2++;
        }
      }
      return o2;
    }, e2.CFF.readIndex = function(r3, t3, a3) {
      var n = e2._bin, o2 = n.readUshort(r3, t3) + 1, s = r3[t3 += 2];
      if (t3++, 1 == s) for (var i = 0; i < o2; i++) a3.push(r3[t3 + i]);
      else if (2 == s) for (i = 0; i < o2; i++) a3.push(n.readUshort(r3, t3 + 2 * i));
      else if (3 == s) for (i = 0; i < o2; i++) a3.push(16777215 & n.readUint(r3, t3 + 3 * i - 1));
      else if (1 != o2) throw "unsupported offset size: " + s + ", count: " + o2;
      return (t3 += o2 * s) - 1;
    }, e2.CFF.getCharString = function(r3, t3, a3) {
      var n = e2._bin, o2 = r3[t3], s = r3[t3 + 1];
      r3[t3 + 2], r3[t3 + 3], r3[t3 + 4];
      var i = 1, h2 = null, d = null;
      o2 <= 20 && (h2 = o2, i = 1), 12 == o2 && (h2 = 100 * o2 + s, i = 2), 21 <= o2 && o2 <= 27 && (h2 = o2, i = 1), 28 == o2 && (d = n.readShort(r3, t3 + 1), i = 3), 29 <= o2 && o2 <= 31 && (h2 = o2, i = 1), 32 <= o2 && o2 <= 246 && (d = o2 - 139, i = 1), 247 <= o2 && o2 <= 250 && (d = 256 * (o2 - 247) + s + 108, i = 2), 251 <= o2 && o2 <= 254 && (d = 256 * -(o2 - 251) - s - 108, i = 2), 255 == o2 && (d = n.readInt(r3, t3 + 1) / 65535, i = 5), a3.val = null != d ? d : "o" + h2, a3.size = i;
    }, e2.CFF.readCharString = function(r3, t3, a3) {
      for (var n = t3 + a3, o2 = e2._bin, s = []; t3 < n; ) {
        var i = r3[t3], h2 = r3[t3 + 1];
        r3[t3 + 2], r3[t3 + 3], r3[t3 + 4];
        var d = 1, f = null, u = null;
        i <= 20 && (f = i, d = 1), 12 == i && (f = 100 * i + h2, d = 2), 19 != i && 20 != i || (f = i, d = 2), 21 <= i && i <= 27 && (f = i, d = 1), 28 == i && (u = o2.readShort(r3, t3 + 1), d = 3), 29 <= i && i <= 31 && (f = i, d = 1), 32 <= i && i <= 246 && (u = i - 139, d = 1), 247 <= i && i <= 250 && (u = 256 * (i - 247) + h2 + 108, d = 2), 251 <= i && i <= 254 && (u = 256 * -(i - 251) - h2 - 108, d = 2), 255 == i && (u = o2.readInt(r3, t3 + 1) / 65535, d = 5), s.push(null != u ? u : "o" + f), t3 += d;
      }
      return s;
    }, e2.CFF.readDict = function(r3, t3, a3) {
      for (var n = e2._bin, o2 = {}, s = []; t3 < a3; ) {
        var i = r3[t3], h2 = r3[t3 + 1];
        r3[t3 + 2], r3[t3 + 3], r3[t3 + 4];
        var d = 1, f = null, u = null;
        if (28 == i && (u = n.readShort(r3, t3 + 1), d = 3), 29 == i && (u = n.readInt(r3, t3 + 1), d = 5), 32 <= i && i <= 246 && (u = i - 139, d = 1), 247 <= i && i <= 250 && (u = 256 * (i - 247) + h2 + 108, d = 2), 251 <= i && i <= 254 && (u = 256 * -(i - 251) - h2 - 108, d = 2), 255 == i) throw u = n.readInt(r3, t3 + 1) / 65535, d = 5, "unknown number";
        if (30 == i) {
          var l2 = [];
          for (d = 1; ; ) {
            var v = r3[t3 + d];
            d++;
            var c2 = v >> 4, p2 = 15 & v;
            if (15 != c2 && l2.push(c2), 15 != p2 && l2.push(p2), 15 == p2) break;
          }
          for (var U = "", g2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], S = 0; S < l2.length; S++) U += g2[l2[S]];
          u = parseFloat(U);
        }
        if (i <= 21) {
          if (f = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][i], d = 1, 12 == i) f = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][h2], d = 2;
        }
        null != f ? (o2[f] = 1 == s.length ? s[0] : s, s = []) : s.push(u), t3 += d;
      }
      return o2;
    }, e2.cmap = {}, e2.cmap.parse = function(r3, t3, a3) {
      r3 = new Uint8Array(r3.buffer, t3, a3), t3 = 0;
      var n = e2._bin, o2 = {};
      n.readUshort(r3, t3), t3 += 2;
      var s = n.readUshort(r3, t3);
      t3 += 2;
      var i = [];
      o2.tables = [];
      for (var h2 = 0; h2 < s; h2++) {
        var d = n.readUshort(r3, t3);
        t3 += 2;
        var f = n.readUshort(r3, t3);
        t3 += 2;
        var u = n.readUint(r3, t3);
        t3 += 4;
        var l2 = "p" + d + "e" + f, v = i.indexOf(u);
        if (-1 == v) {
          var c2;
          v = o2.tables.length, i.push(u);
          var p2 = n.readUshort(r3, u);
          0 == p2 ? c2 = e2.cmap.parse0(r3, u) : 4 == p2 ? c2 = e2.cmap.parse4(r3, u) : 6 == p2 ? c2 = e2.cmap.parse6(r3, u) : 12 == p2 ? c2 = e2.cmap.parse12(r3, u) : console.debug("unknown format: " + p2, d, f, u), o2.tables.push(c2);
        }
        if (null != o2[l2]) throw "multiple tables for one platform+encoding";
        o2[l2] = v;
      }
      return o2;
    }, e2.cmap.parse0 = function(r3, t3) {
      var a3 = e2._bin, n = {};
      n.format = a3.readUshort(r3, t3), t3 += 2;
      var o2 = a3.readUshort(r3, t3);
      t3 += 2, a3.readUshort(r3, t3), t3 += 2, n.map = [];
      for (var s = 0; s < o2 - 6; s++) n.map.push(r3[t3 + s]);
      return n;
    }, e2.cmap.parse4 = function(r3, t3) {
      var a3 = e2._bin, n = t3, o2 = {};
      o2.format = a3.readUshort(r3, t3), t3 += 2;
      var s = a3.readUshort(r3, t3);
      t3 += 2, a3.readUshort(r3, t3), t3 += 2;
      var i = a3.readUshort(r3, t3);
      t3 += 2;
      var h2 = i / 2;
      o2.searchRange = a3.readUshort(r3, t3), t3 += 2, o2.entrySelector = a3.readUshort(r3, t3), t3 += 2, o2.rangeShift = a3.readUshort(r3, t3), t3 += 2, o2.endCount = a3.readUshorts(r3, t3, h2), t3 += 2 * h2, t3 += 2, o2.startCount = a3.readUshorts(r3, t3, h2), t3 += 2 * h2, o2.idDelta = [];
      for (var d = 0; d < h2; d++) o2.idDelta.push(a3.readShort(r3, t3)), t3 += 2;
      for (o2.idRangeOffset = a3.readUshorts(r3, t3, h2), t3 += 2 * h2, o2.glyphIdArray = []; t3 < n + s; ) o2.glyphIdArray.push(a3.readUshort(r3, t3)), t3 += 2;
      return o2;
    }, e2.cmap.parse6 = function(r3, t3) {
      var a3 = e2._bin, n = {};
      n.format = a3.readUshort(r3, t3), t3 += 2, a3.readUshort(r3, t3), t3 += 2, a3.readUshort(r3, t3), t3 += 2, n.firstCode = a3.readUshort(r3, t3), t3 += 2;
      var o2 = a3.readUshort(r3, t3);
      t3 += 2, n.glyphIdArray = [];
      for (var s = 0; s < o2; s++) n.glyphIdArray.push(a3.readUshort(r3, t3)), t3 += 2;
      return n;
    }, e2.cmap.parse12 = function(r3, t3) {
      var a3 = e2._bin, n = {};
      n.format = a3.readUshort(r3, t3), t3 += 2, t3 += 2, a3.readUint(r3, t3), t3 += 4, a3.readUint(r3, t3), t3 += 4;
      var o2 = a3.readUint(r3, t3);
      t3 += 4, n.groups = [];
      for (var s = 0; s < o2; s++) {
        var i = t3 + 12 * s, h2 = a3.readUint(r3, i + 0), d = a3.readUint(r3, i + 4), f = a3.readUint(r3, i + 8);
        n.groups.push([h2, d, f]);
      }
      return n;
    }, e2.glyf = {}, e2.glyf.parse = function(r3, e3, t3, a3) {
      for (var n = [], o2 = 0; o2 < a3.maxp.numGlyphs; o2++) n.push(null);
      return n;
    }, e2.glyf._parseGlyf = function(r3, t3) {
      var a3 = e2._bin, n = r3._data, o2 = e2._tabOffset(n, "glyf", r3._offset) + r3.loca[t3];
      if (r3.loca[t3] == r3.loca[t3 + 1]) return null;
      var s = {};
      if (s.noc = a3.readShort(n, o2), o2 += 2, s.xMin = a3.readShort(n, o2), o2 += 2, s.yMin = a3.readShort(n, o2), o2 += 2, s.xMax = a3.readShort(n, o2), o2 += 2, s.yMax = a3.readShort(n, o2), o2 += 2, s.xMin >= s.xMax || s.yMin >= s.yMax) return null;
      if (s.noc > 0) {
        s.endPts = [];
        for (var i = 0; i < s.noc; i++) s.endPts.push(a3.readUshort(n, o2)), o2 += 2;
        var h2 = a3.readUshort(n, o2);
        if (o2 += 2, n.length - o2 < h2) return null;
        s.instructions = a3.readBytes(n, o2, h2), o2 += h2;
        var d = s.endPts[s.noc - 1] + 1;
        s.flags = [];
        for (i = 0; i < d; i++) {
          var f = n[o2];
          if (o2++, s.flags.push(f), 0 != (8 & f)) {
            var u = n[o2];
            o2++;
            for (var l2 = 0; l2 < u; l2++) s.flags.push(f), i++;
          }
        }
        s.xs = [];
        for (i = 0; i < d; i++) {
          var v = 0 != (2 & s.flags[i]), c2 = 0 != (16 & s.flags[i]);
          v ? (s.xs.push(c2 ? n[o2] : -n[o2]), o2++) : c2 ? s.xs.push(0) : (s.xs.push(a3.readShort(n, o2)), o2 += 2);
        }
        s.ys = [];
        for (i = 0; i < d; i++) {
          v = 0 != (4 & s.flags[i]), c2 = 0 != (32 & s.flags[i]);
          v ? (s.ys.push(c2 ? n[o2] : -n[o2]), o2++) : c2 ? s.ys.push(0) : (s.ys.push(a3.readShort(n, o2)), o2 += 2);
        }
        var p2 = 0, U = 0;
        for (i = 0; i < d; i++) p2 += s.xs[i], U += s.ys[i], s.xs[i] = p2, s.ys[i] = U;
      } else {
        var g2;
        s.parts = [];
        do {
          g2 = a3.readUshort(n, o2), o2 += 2;
          var S = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (s.parts.push(S), S.glyphIndex = a3.readUshort(n, o2), o2 += 2, 1 & g2) {
            var m2 = a3.readShort(n, o2);
            o2 += 2;
            var b2 = a3.readShort(n, o2);
            o2 += 2;
          } else {
            m2 = a3.readInt8(n, o2);
            o2++;
            b2 = a3.readInt8(n, o2);
            o2++;
          }
          2 & g2 ? (S.m.tx = m2, S.m.ty = b2) : (S.p1 = m2, S.p2 = b2), 8 & g2 ? (S.m.a = S.m.d = a3.readF2dot14(n, o2), o2 += 2) : 64 & g2 ? (S.m.a = a3.readF2dot14(n, o2), o2 += 2, S.m.d = a3.readF2dot14(n, o2), o2 += 2) : 128 & g2 && (S.m.a = a3.readF2dot14(n, o2), o2 += 2, S.m.b = a3.readF2dot14(n, o2), o2 += 2, S.m.c = a3.readF2dot14(n, o2), o2 += 2, S.m.d = a3.readF2dot14(n, o2), o2 += 2);
        } while (32 & g2);
        if (256 & g2) {
          var y = a3.readUshort(n, o2);
          o2 += 2, s.instr = [];
          for (i = 0; i < y; i++) s.instr.push(n[o2]), o2++;
        }
      }
      return s;
    }, e2.GDEF = {}, e2.GDEF.parse = function(r3, t3, a3, n) {
      var o2 = t3;
      t3 += 4;
      var s = e2._bin.readUshort(r3, t3);
      return { glyphClassDef: 0 === s ? null : e2._lctf.readClassDef(r3, o2 + s) };
    }, e2.GPOS = {}, e2.GPOS.parse = function(r3, t3, a3, n) {
      return e2._lctf.parse(r3, t3, a3, n, e2.GPOS.subt);
    }, e2.GPOS.subt = function(r3, t3, a3, n) {
      var o2 = e2._bin, s = a3, i = {};
      if (i.fmt = o2.readUshort(r3, a3), a3 += 2, 1 == t3 || 2 == t3 || 3 == t3 || 7 == t3 || 8 == t3 && i.fmt <= 2) {
        var h2 = o2.readUshort(r3, a3);
        a3 += 2, i.coverage = e2._lctf.readCoverage(r3, h2 + s);
      }
      if (1 == t3 && 1 == i.fmt) {
        var d = o2.readUshort(r3, a3);
        a3 += 2, 0 != d && (i.pos = e2.GPOS.readValueRecord(r3, a3, d));
      } else if (2 == t3 && i.fmt >= 1 && i.fmt <= 2) {
        d = o2.readUshort(r3, a3);
        a3 += 2;
        var f = o2.readUshort(r3, a3);
        a3 += 2;
        var u = e2._lctf.numOfOnes(d), l2 = e2._lctf.numOfOnes(f);
        if (1 == i.fmt) {
          i.pairsets = [];
          var v = o2.readUshort(r3, a3);
          a3 += 2;
          for (var c2 = 0; c2 < v; c2++) {
            var p2 = s + o2.readUshort(r3, a3);
            a3 += 2;
            var U = o2.readUshort(r3, p2);
            p2 += 2;
            for (var g2 = [], S = 0; S < U; S++) {
              var m2 = o2.readUshort(r3, p2);
              p2 += 2, 0 != d && (P = e2.GPOS.readValueRecord(r3, p2, d), p2 += 2 * u), 0 != f && (x = e2.GPOS.readValueRecord(r3, p2, f), p2 += 2 * l2), g2.push({ gid2: m2, val1: P, val2: x });
            }
            i.pairsets.push(g2);
          }
        }
        if (2 == i.fmt) {
          var b2 = o2.readUshort(r3, a3);
          a3 += 2;
          var y = o2.readUshort(r3, a3);
          a3 += 2;
          var F = o2.readUshort(r3, a3);
          a3 += 2;
          var C = o2.readUshort(r3, a3);
          a3 += 2, i.classDef1 = e2._lctf.readClassDef(r3, s + b2), i.classDef2 = e2._lctf.readClassDef(r3, s + y), i.matrix = [];
          for (c2 = 0; c2 < F; c2++) {
            var _ = [];
            for (S = 0; S < C; S++) {
              var P = null, x = null;
              0 != d && (P = e2.GPOS.readValueRecord(r3, a3, d), a3 += 2 * u), 0 != f && (x = e2.GPOS.readValueRecord(r3, a3, f), a3 += 2 * l2), _.push({ val1: P, val2: x });
            }
            i.matrix.push(_);
          }
        }
      } else if (4 == t3 && 1 == i.fmt) i.markCoverage = e2._lctf.readCoverage(r3, o2.readUshort(r3, a3) + s), i.baseCoverage = e2._lctf.readCoverage(r3, o2.readUshort(r3, a3 + 2) + s), i.markClassCount = o2.readUshort(r3, a3 + 4), i.markArray = e2.GPOS.readMarkArray(r3, o2.readUshort(r3, a3 + 6) + s), i.baseArray = e2.GPOS.readBaseArray(r3, o2.readUshort(r3, a3 + 8) + s, i.markClassCount);
      else if (6 == t3 && 1 == i.fmt) i.mark1Coverage = e2._lctf.readCoverage(r3, o2.readUshort(r3, a3) + s), i.mark2Coverage = e2._lctf.readCoverage(r3, o2.readUshort(r3, a3 + 2) + s), i.markClassCount = o2.readUshort(r3, a3 + 4), i.mark1Array = e2.GPOS.readMarkArray(r3, o2.readUshort(r3, a3 + 6) + s), i.mark2Array = e2.GPOS.readBaseArray(r3, o2.readUshort(r3, a3 + 8) + s, i.markClassCount);
      else {
        if (9 == t3 && 1 == i.fmt) {
          var I = o2.readUshort(r3, a3);
          a3 += 2;
          var w = o2.readUint(r3, a3);
          if (a3 += 4, 9 == n.ltype) n.ltype = I;
          else if (n.ltype != I) throw "invalid extension substitution";
          return e2.GPOS.subt(r3, n.ltype, s + w);
        }
        console.debug("unsupported GPOS table LookupType", t3, "format", i.fmt);
      }
      return i;
    }, e2.GPOS.readValueRecord = function(r3, t3, a3) {
      var n = e2._bin, o2 = [];
      return o2.push(1 & a3 ? n.readShort(r3, t3) : 0), t3 += 1 & a3 ? 2 : 0, o2.push(2 & a3 ? n.readShort(r3, t3) : 0), t3 += 2 & a3 ? 2 : 0, o2.push(4 & a3 ? n.readShort(r3, t3) : 0), t3 += 4 & a3 ? 2 : 0, o2.push(8 & a3 ? n.readShort(r3, t3) : 0), t3 += 8 & a3 ? 2 : 0, o2;
    }, e2.GPOS.readBaseArray = function(r3, t3, a3) {
      var n = e2._bin, o2 = [], s = t3, i = n.readUshort(r3, t3);
      t3 += 2;
      for (var h2 = 0; h2 < i; h2++) {
        for (var d = [], f = 0; f < a3; f++) d.push(e2.GPOS.readAnchorRecord(r3, s + n.readUshort(r3, t3))), t3 += 2;
        o2.push(d);
      }
      return o2;
    }, e2.GPOS.readMarkArray = function(r3, t3) {
      var a3 = e2._bin, n = [], o2 = t3, s = a3.readUshort(r3, t3);
      t3 += 2;
      for (var i = 0; i < s; i++) {
        var h2 = e2.GPOS.readAnchorRecord(r3, a3.readUshort(r3, t3 + 2) + o2);
        h2.markClass = a3.readUshort(r3, t3), n.push(h2), t3 += 4;
      }
      return n;
    }, e2.GPOS.readAnchorRecord = function(r3, t3) {
      var a3 = e2._bin, n = {};
      return n.fmt = a3.readUshort(r3, t3), n.x = a3.readShort(r3, t3 + 2), n.y = a3.readShort(r3, t3 + 4), n;
    }, e2.GSUB = {}, e2.GSUB.parse = function(r3, t3, a3, n) {
      return e2._lctf.parse(r3, t3, a3, n, e2.GSUB.subt);
    }, e2.GSUB.subt = function(r3, t3, a3, n) {
      var o2 = e2._bin, s = a3, i = {};
      if (i.fmt = o2.readUshort(r3, a3), a3 += 2, 1 != t3 && 2 != t3 && 4 != t3 && 5 != t3 && 6 != t3) return null;
      if (1 == t3 || 2 == t3 || 4 == t3 || 5 == t3 && i.fmt <= 2 || 6 == t3 && i.fmt <= 2) {
        var h2 = o2.readUshort(r3, a3);
        a3 += 2, i.coverage = e2._lctf.readCoverage(r3, s + h2);
      }
      if (1 == t3 && i.fmt >= 1 && i.fmt <= 2) {
        if (1 == i.fmt) i.delta = o2.readShort(r3, a3), a3 += 2;
        else if (2 == i.fmt) {
          var d = o2.readUshort(r3, a3);
          a3 += 2, i.newg = o2.readUshorts(r3, a3, d), a3 += 2 * i.newg.length;
        }
      } else if (2 == t3 && 1 == i.fmt) {
        d = o2.readUshort(r3, a3);
        a3 += 2, i.seqs = [];
        for (var f = 0; f < d; f++) {
          var u = o2.readUshort(r3, a3) + s;
          a3 += 2;
          var l2 = o2.readUshort(r3, u);
          i.seqs.push(o2.readUshorts(r3, u + 2, l2));
        }
      } else if (4 == t3) {
        i.vals = [];
        d = o2.readUshort(r3, a3);
        a3 += 2;
        for (f = 0; f < d; f++) {
          var v = o2.readUshort(r3, a3);
          a3 += 2, i.vals.push(e2.GSUB.readLigatureSet(r3, s + v));
        }
      } else if (5 == t3 && 2 == i.fmt) {
        if (2 == i.fmt) {
          var c2 = o2.readUshort(r3, a3);
          a3 += 2, i.cDef = e2._lctf.readClassDef(r3, s + c2), i.scset = [];
          var p2 = o2.readUshort(r3, a3);
          a3 += 2;
          for (f = 0; f < p2; f++) {
            var U = o2.readUshort(r3, a3);
            a3 += 2, i.scset.push(0 == U ? null : e2.GSUB.readSubClassSet(r3, s + U));
          }
        }
      } else if (6 == t3 && 3 == i.fmt) {
        if (3 == i.fmt) {
          for (f = 0; f < 3; f++) {
            d = o2.readUshort(r3, a3);
            a3 += 2;
            for (var g2 = [], S = 0; S < d; S++) g2.push(e2._lctf.readCoverage(r3, s + o2.readUshort(r3, a3 + 2 * S)));
            a3 += 2 * d, 0 == f && (i.backCvg = g2), 1 == f && (i.inptCvg = g2), 2 == f && (i.ahedCvg = g2);
          }
          d = o2.readUshort(r3, a3);
          a3 += 2, i.lookupRec = e2.GSUB.readSubstLookupRecords(r3, a3, d);
        }
      } else {
        if (7 == t3 && 1 == i.fmt) {
          var m2 = o2.readUshort(r3, a3);
          a3 += 2;
          var b2 = o2.readUint(r3, a3);
          if (a3 += 4, 9 == n.ltype) n.ltype = m2;
          else if (n.ltype != m2) throw "invalid extension substitution";
          return e2.GSUB.subt(r3, n.ltype, s + b2);
        }
        console.debug("unsupported GSUB table LookupType", t3, "format", i.fmt);
      }
      return i;
    }, e2.GSUB.readSubClassSet = function(r3, t3) {
      var a3 = e2._bin.readUshort, n = t3, o2 = [], s = a3(r3, t3);
      t3 += 2;
      for (var i = 0; i < s; i++) {
        var h2 = a3(r3, t3);
        t3 += 2, o2.push(e2.GSUB.readSubClassRule(r3, n + h2));
      }
      return o2;
    }, e2.GSUB.readSubClassRule = function(r3, t3) {
      var a3 = e2._bin.readUshort, n = {}, o2 = a3(r3, t3), s = a3(r3, t3 += 2);
      t3 += 2, n.input = [];
      for (var i = 0; i < o2 - 1; i++) n.input.push(a3(r3, t3)), t3 += 2;
      return n.substLookupRecords = e2.GSUB.readSubstLookupRecords(r3, t3, s), n;
    }, e2.GSUB.readSubstLookupRecords = function(r3, t3, a3) {
      for (var n = e2._bin.readUshort, o2 = [], s = 0; s < a3; s++) o2.push(n(r3, t3), n(r3, t3 + 2)), t3 += 4;
      return o2;
    }, e2.GSUB.readChainSubClassSet = function(r3, t3) {
      var a3 = e2._bin, n = t3, o2 = [], s = a3.readUshort(r3, t3);
      t3 += 2;
      for (var i = 0; i < s; i++) {
        var h2 = a3.readUshort(r3, t3);
        t3 += 2, o2.push(e2.GSUB.readChainSubClassRule(r3, n + h2));
      }
      return o2;
    }, e2.GSUB.readChainSubClassRule = function(r3, t3) {
      for (var a3 = e2._bin, n = {}, o2 = ["backtrack", "input", "lookahead"], s = 0; s < o2.length; s++) {
        var i = a3.readUshort(r3, t3);
        t3 += 2, 1 == s && i--, n[o2[s]] = a3.readUshorts(r3, t3, i), t3 += 2 * n[o2[s]].length;
      }
      i = a3.readUshort(r3, t3);
      return t3 += 2, n.subst = a3.readUshorts(r3, t3, 2 * i), t3 += 2 * n.subst.length, n;
    }, e2.GSUB.readLigatureSet = function(r3, t3) {
      var a3 = e2._bin, n = t3, o2 = [], s = a3.readUshort(r3, t3);
      t3 += 2;
      for (var i = 0; i < s; i++) {
        var h2 = a3.readUshort(r3, t3);
        t3 += 2, o2.push(e2.GSUB.readLigature(r3, n + h2));
      }
      return o2;
    }, e2.GSUB.readLigature = function(r3, t3) {
      var a3 = e2._bin, n = { chain: [] };
      n.nglyph = a3.readUshort(r3, t3), t3 += 2;
      var o2 = a3.readUshort(r3, t3);
      t3 += 2;
      for (var s = 0; s < o2 - 1; s++) n.chain.push(a3.readUshort(r3, t3)), t3 += 2;
      return n;
    }, e2.head = {}, e2.head.parse = function(r3, t3, a3) {
      var n = e2._bin, o2 = {};
      return n.readFixed(r3, t3), t3 += 4, o2.fontRevision = n.readFixed(r3, t3), t3 += 4, n.readUint(r3, t3), t3 += 4, n.readUint(r3, t3), t3 += 4, o2.flags = n.readUshort(r3, t3), t3 += 2, o2.unitsPerEm = n.readUshort(r3, t3), t3 += 2, o2.created = n.readUint64(r3, t3), t3 += 8, o2.modified = n.readUint64(r3, t3), t3 += 8, o2.xMin = n.readShort(r3, t3), t3 += 2, o2.yMin = n.readShort(r3, t3), t3 += 2, o2.xMax = n.readShort(r3, t3), t3 += 2, o2.yMax = n.readShort(r3, t3), t3 += 2, o2.macStyle = n.readUshort(r3, t3), t3 += 2, o2.lowestRecPPEM = n.readUshort(r3, t3), t3 += 2, o2.fontDirectionHint = n.readShort(r3, t3), t3 += 2, o2.indexToLocFormat = n.readShort(r3, t3), t3 += 2, o2.glyphDataFormat = n.readShort(r3, t3), t3 += 2, o2;
    }, e2.hhea = {}, e2.hhea.parse = function(r3, t3, a3) {
      var n = e2._bin, o2 = {};
      return n.readFixed(r3, t3), t3 += 4, o2.ascender = n.readShort(r3, t3), t3 += 2, o2.descender = n.readShort(r3, t3), t3 += 2, o2.lineGap = n.readShort(r3, t3), t3 += 2, o2.advanceWidthMax = n.readUshort(r3, t3), t3 += 2, o2.minLeftSideBearing = n.readShort(r3, t3), t3 += 2, o2.minRightSideBearing = n.readShort(r3, t3), t3 += 2, o2.xMaxExtent = n.readShort(r3, t3), t3 += 2, o2.caretSlopeRise = n.readShort(r3, t3), t3 += 2, o2.caretSlopeRun = n.readShort(r3, t3), t3 += 2, o2.caretOffset = n.readShort(r3, t3), t3 += 2, t3 += 8, o2.metricDataFormat = n.readShort(r3, t3), t3 += 2, o2.numberOfHMetrics = n.readUshort(r3, t3), t3 += 2, o2;
    }, e2.hmtx = {}, e2.hmtx.parse = function(r3, t3, a3, n) {
      for (var o2 = e2._bin, s = { aWidth: [], lsBearing: [] }, i = 0, h2 = 0, d = 0; d < n.maxp.numGlyphs; d++) d < n.hhea.numberOfHMetrics && (i = o2.readUshort(r3, t3), t3 += 2, h2 = o2.readShort(r3, t3), t3 += 2), s.aWidth.push(i), s.lsBearing.push(h2);
      return s;
    }, e2.kern = {}, e2.kern.parse = function(r3, t3, a3, n) {
      var o2 = e2._bin, s = o2.readUshort(r3, t3);
      if (t3 += 2, 1 == s) return e2.kern.parseV1(r3, t3 - 2, a3, n);
      var i = o2.readUshort(r3, t3);
      t3 += 2;
      for (var h2 = { glyph1: [], rval: [] }, d = 0; d < i; d++) {
        t3 += 2;
        a3 = o2.readUshort(r3, t3);
        t3 += 2;
        var f = o2.readUshort(r3, t3);
        t3 += 2;
        var u = f >>> 8;
        if (0 != (u &= 15)) throw "unknown kern table format: " + u;
        t3 = e2.kern.readFormat0(r3, t3, h2);
      }
      return h2;
    }, e2.kern.parseV1 = function(r3, t3, a3, n) {
      var o2 = e2._bin;
      o2.readFixed(r3, t3), t3 += 4;
      var s = o2.readUint(r3, t3);
      t3 += 4;
      for (var i = { glyph1: [], rval: [] }, h2 = 0; h2 < s; h2++) {
        o2.readUint(r3, t3), t3 += 4;
        var d = o2.readUshort(r3, t3);
        t3 += 2, o2.readUshort(r3, t3), t3 += 2;
        var f = d >>> 8;
        if (0 != (f &= 15)) throw "unknown kern table format: " + f;
        t3 = e2.kern.readFormat0(r3, t3, i);
      }
      return i;
    }, e2.kern.readFormat0 = function(r3, t3, a3) {
      var n = e2._bin, o2 = -1, s = n.readUshort(r3, t3);
      t3 += 2, n.readUshort(r3, t3), t3 += 2, n.readUshort(r3, t3), t3 += 2, n.readUshort(r3, t3), t3 += 2;
      for (var i = 0; i < s; i++) {
        var h2 = n.readUshort(r3, t3);
        t3 += 2;
        var d = n.readUshort(r3, t3);
        t3 += 2;
        var f = n.readShort(r3, t3);
        t3 += 2, h2 != o2 && (a3.glyph1.push(h2), a3.rval.push({ glyph2: [], vals: [] }));
        var u = a3.rval[a3.rval.length - 1];
        u.glyph2.push(d), u.vals.push(f), o2 = h2;
      }
      return t3;
    }, e2.loca = {}, e2.loca.parse = function(r3, t3, a3, n) {
      var o2 = e2._bin, s = [], i = n.head.indexToLocFormat, h2 = n.maxp.numGlyphs + 1;
      if (0 == i) for (var d = 0; d < h2; d++) s.push(o2.readUshort(r3, t3 + (d << 1)) << 1);
      if (1 == i) for (d = 0; d < h2; d++) s.push(o2.readUint(r3, t3 + (d << 2)));
      return s;
    }, e2.maxp = {}, e2.maxp.parse = function(r3, t3, a3) {
      var n = e2._bin, o2 = {}, s = n.readUint(r3, t3);
      return t3 += 4, o2.numGlyphs = n.readUshort(r3, t3), t3 += 2, 65536 == s && (o2.maxPoints = n.readUshort(r3, t3), t3 += 2, o2.maxContours = n.readUshort(r3, t3), t3 += 2, o2.maxCompositePoints = n.readUshort(r3, t3), t3 += 2, o2.maxCompositeContours = n.readUshort(r3, t3), t3 += 2, o2.maxZones = n.readUshort(r3, t3), t3 += 2, o2.maxTwilightPoints = n.readUshort(r3, t3), t3 += 2, o2.maxStorage = n.readUshort(r3, t3), t3 += 2, o2.maxFunctionDefs = n.readUshort(r3, t3), t3 += 2, o2.maxInstructionDefs = n.readUshort(r3, t3), t3 += 2, o2.maxStackElements = n.readUshort(r3, t3), t3 += 2, o2.maxSizeOfInstructions = n.readUshort(r3, t3), t3 += 2, o2.maxComponentElements = n.readUshort(r3, t3), t3 += 2, o2.maxComponentDepth = n.readUshort(r3, t3), t3 += 2), o2;
    }, e2.name = {}, e2.name.parse = function(r3, t3, a3) {
      var n = e2._bin, o2 = {};
      n.readUshort(r3, t3), t3 += 2;
      var s = n.readUshort(r3, t3);
      t3 += 2, n.readUshort(r3, t3);
      for (var i, h2 = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], d = t3 += 2, f = 0; f < s; f++) {
        var u = n.readUshort(r3, t3);
        t3 += 2;
        var l2 = n.readUshort(r3, t3);
        t3 += 2;
        var v = n.readUshort(r3, t3);
        t3 += 2;
        var c2 = n.readUshort(r3, t3);
        t3 += 2;
        var p2 = n.readUshort(r3, t3);
        t3 += 2;
        var U = n.readUshort(r3, t3);
        t3 += 2;
        var g2, S = h2[c2], m2 = d + 12 * s + U;
        if (0 == u) g2 = n.readUnicode(r3, m2, p2 / 2);
        else if (3 == u && 0 == l2) g2 = n.readUnicode(r3, m2, p2 / 2);
        else if (0 == l2) g2 = n.readASCII(r3, m2, p2);
        else if (1 == l2) g2 = n.readUnicode(r3, m2, p2 / 2);
        else if (3 == l2) g2 = n.readUnicode(r3, m2, p2 / 2);
        else {
          if (1 != u) throw "unknown encoding " + l2 + ", platformID: " + u;
          g2 = n.readASCII(r3, m2, p2), console.debug("reading unknown MAC encoding " + l2 + " as ASCII");
        }
        var b2 = "p" + u + "," + v.toString(16);
        null == o2[b2] && (o2[b2] = {}), o2[b2][void 0 !== S ? S : c2] = g2, o2[b2]._lang = v;
      }
      for (var y in o2) if (null != o2[y].postScriptName && 1033 == o2[y]._lang) return o2[y];
      for (var y in o2) if (null != o2[y].postScriptName && 0 == o2[y]._lang) return o2[y];
      for (var y in o2) if (null != o2[y].postScriptName && 3084 == o2[y]._lang) return o2[y];
      for (var y in o2) if (null != o2[y].postScriptName) return o2[y];
      for (var y in o2) {
        i = y;
        break;
      }
      return console.debug("returning name table with languageID " + o2[i]._lang), o2[i];
    }, e2["OS/2"] = {}, e2["OS/2"].parse = function(r3, t3, a3) {
      var n = e2._bin.readUshort(r3, t3);
      t3 += 2;
      var o2 = {};
      if (0 == n) e2["OS/2"].version0(r3, t3, o2);
      else if (1 == n) e2["OS/2"].version1(r3, t3, o2);
      else if (2 == n || 3 == n || 4 == n) e2["OS/2"].version2(r3, t3, o2);
      else {
        if (5 != n) throw "unknown OS/2 table version: " + n;
        e2["OS/2"].version5(r3, t3, o2);
      }
      return o2;
    }, e2["OS/2"].version0 = function(r3, t3, a3) {
      var n = e2._bin;
      return a3.xAvgCharWidth = n.readShort(r3, t3), t3 += 2, a3.usWeightClass = n.readUshort(r3, t3), t3 += 2, a3.usWidthClass = n.readUshort(r3, t3), t3 += 2, a3.fsType = n.readUshort(r3, t3), t3 += 2, a3.ySubscriptXSize = n.readShort(r3, t3), t3 += 2, a3.ySubscriptYSize = n.readShort(r3, t3), t3 += 2, a3.ySubscriptXOffset = n.readShort(r3, t3), t3 += 2, a3.ySubscriptYOffset = n.readShort(r3, t3), t3 += 2, a3.ySuperscriptXSize = n.readShort(r3, t3), t3 += 2, a3.ySuperscriptYSize = n.readShort(r3, t3), t3 += 2, a3.ySuperscriptXOffset = n.readShort(r3, t3), t3 += 2, a3.ySuperscriptYOffset = n.readShort(r3, t3), t3 += 2, a3.yStrikeoutSize = n.readShort(r3, t3), t3 += 2, a3.yStrikeoutPosition = n.readShort(r3, t3), t3 += 2, a3.sFamilyClass = n.readShort(r3, t3), t3 += 2, a3.panose = n.readBytes(r3, t3, 10), t3 += 10, a3.ulUnicodeRange1 = n.readUint(r3, t3), t3 += 4, a3.ulUnicodeRange2 = n.readUint(r3, t3), t3 += 4, a3.ulUnicodeRange3 = n.readUint(r3, t3), t3 += 4, a3.ulUnicodeRange4 = n.readUint(r3, t3), t3 += 4, a3.achVendID = [n.readInt8(r3, t3), n.readInt8(r3, t3 + 1), n.readInt8(r3, t3 + 2), n.readInt8(r3, t3 + 3)], t3 += 4, a3.fsSelection = n.readUshort(r3, t3), t3 += 2, a3.usFirstCharIndex = n.readUshort(r3, t3), t3 += 2, a3.usLastCharIndex = n.readUshort(r3, t3), t3 += 2, a3.sTypoAscender = n.readShort(r3, t3), t3 += 2, a3.sTypoDescender = n.readShort(r3, t3), t3 += 2, a3.sTypoLineGap = n.readShort(r3, t3), t3 += 2, a3.usWinAscent = n.readUshort(r3, t3), t3 += 2, a3.usWinDescent = n.readUshort(r3, t3), t3 += 2;
    }, e2["OS/2"].version1 = function(r3, t3, a3) {
      var n = e2._bin;
      return t3 = e2["OS/2"].version0(r3, t3, a3), a3.ulCodePageRange1 = n.readUint(r3, t3), t3 += 4, a3.ulCodePageRange2 = n.readUint(r3, t3), t3 += 4;
    }, e2["OS/2"].version2 = function(r3, t3, a3) {
      var n = e2._bin;
      return t3 = e2["OS/2"].version1(r3, t3, a3), a3.sxHeight = n.readShort(r3, t3), t3 += 2, a3.sCapHeight = n.readShort(r3, t3), t3 += 2, a3.usDefault = n.readUshort(r3, t3), t3 += 2, a3.usBreak = n.readUshort(r3, t3), t3 += 2, a3.usMaxContext = n.readUshort(r3, t3), t3 += 2;
    }, e2["OS/2"].version5 = function(r3, t3, a3) {
      var n = e2._bin;
      return t3 = e2["OS/2"].version2(r3, t3, a3), a3.usLowerOpticalPointSize = n.readUshort(r3, t3), t3 += 2, a3.usUpperOpticalPointSize = n.readUshort(r3, t3), t3 += 2;
    }, e2.post = {}, e2.post.parse = function(r3, t3, a3) {
      var n = e2._bin, o2 = {};
      return o2.version = n.readFixed(r3, t3), t3 += 4, o2.italicAngle = n.readFixed(r3, t3), t3 += 4, o2.underlinePosition = n.readShort(r3, t3), t3 += 2, o2.underlineThickness = n.readShort(r3, t3), t3 += 2, o2;
    }, null == e2 && (e2 = {}), null == e2.U && (e2.U = {}), e2.U.codeToGlyph = function(r3, e3) {
      var t3 = r3.cmap, a3 = -1;
      if (null != t3.p0e4 ? a3 = t3.p0e4 : null != t3.p3e1 ? a3 = t3.p3e1 : null != t3.p1e0 ? a3 = t3.p1e0 : null != t3.p0e3 && (a3 = t3.p0e3), -1 == a3) throw "no familiar platform and encoding!";
      var n = t3.tables[a3];
      if (0 == n.format) return e3 >= n.map.length ? 0 : n.map[e3];
      if (4 == n.format) {
        for (var o2 = -1, s = 0; s < n.endCount.length; s++) if (e3 <= n.endCount[s]) {
          o2 = s;
          break;
        }
        if (-1 == o2) return 0;
        if (n.startCount[o2] > e3) return 0;
        return 65535 & (0 != n.idRangeOffset[o2] ? n.glyphIdArray[e3 - n.startCount[o2] + (n.idRangeOffset[o2] >> 1) - (n.idRangeOffset.length - o2)] : e3 + n.idDelta[o2]);
      }
      if (12 == n.format) {
        if (e3 > n.groups[n.groups.length - 1][1]) return 0;
        for (s = 0; s < n.groups.length; s++) {
          var i = n.groups[s];
          if (i[0] <= e3 && e3 <= i[1]) return i[2] + (e3 - i[0]);
        }
        return 0;
      }
      throw "unknown cmap table format " + n.format;
    }, e2.U.glyphToPath = function(r3, t3) {
      var a3 = { cmds: [], crds: [] };
      if (r3.SVG && r3.SVG.entries[t3]) {
        var n = r3.SVG.entries[t3];
        return null == n ? a3 : ("string" == typeof n && (n = e2.SVG.toPath(n), r3.SVG.entries[t3] = n), n);
      }
      if (r3.CFF) {
        var o2 = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: r3.CFF.Private ? r3.CFF.Private.defaultWidthX : 0, open: false }, s = r3.CFF, i = r3.CFF.Private;
        if (s.ROS) {
          for (var h2 = 0; s.FDSelect[h2 + 2] <= t3; ) h2 += 2;
          i = s.FDArray[s.FDSelect[h2 + 1]].Private;
        }
        e2.U._drawCFF(r3.CFF.CharStrings[t3], o2, s, i, a3);
      } else r3.glyf && e2.U._drawGlyf(t3, r3, a3);
      return a3;
    }, e2.U._drawGlyf = function(r3, t3, a3) {
      var n = t3.glyf[r3];
      null == n && (n = t3.glyf[r3] = e2.glyf._parseGlyf(t3, r3)), null != n && (n.noc > -1 ? e2.U._simpleGlyph(n, a3) : e2.U._compoGlyph(n, t3, a3));
    }, e2.U._simpleGlyph = function(r3, t3) {
      for (var a3 = 0; a3 < r3.noc; a3++) {
        for (var n = 0 == a3 ? 0 : r3.endPts[a3 - 1] + 1, o2 = r3.endPts[a3], s = n; s <= o2; s++) {
          var i = s == n ? o2 : s - 1, h2 = s == o2 ? n : s + 1, d = 1 & r3.flags[s], f = 1 & r3.flags[i], u = 1 & r3.flags[h2], l2 = r3.xs[s], v = r3.ys[s];
          if (s == n) if (d) {
            if (!f) {
              e2.U.P.moveTo(t3, l2, v);
              continue;
            }
            e2.U.P.moveTo(t3, r3.xs[i], r3.ys[i]);
          } else f ? e2.U.P.moveTo(t3, r3.xs[i], r3.ys[i]) : e2.U.P.moveTo(t3, (r3.xs[i] + l2) / 2, (r3.ys[i] + v) / 2);
          d ? f && e2.U.P.lineTo(t3, l2, v) : u ? e2.U.P.qcurveTo(t3, l2, v, r3.xs[h2], r3.ys[h2]) : e2.U.P.qcurveTo(t3, l2, v, (l2 + r3.xs[h2]) / 2, (v + r3.ys[h2]) / 2);
        }
        e2.U.P.closePath(t3);
      }
    }, e2.U._compoGlyph = function(r3, t3, a3) {
      for (var n = 0; n < r3.parts.length; n++) {
        var o2 = { cmds: [], crds: [] }, s = r3.parts[n];
        e2.U._drawGlyf(s.glyphIndex, t3, o2);
        for (var i = s.m, h2 = 0; h2 < o2.crds.length; h2 += 2) {
          var d = o2.crds[h2], f = o2.crds[h2 + 1];
          a3.crds.push(d * i.a + f * i.b + i.tx), a3.crds.push(d * i.c + f * i.d + i.ty);
        }
        for (h2 = 0; h2 < o2.cmds.length; h2++) a3.cmds.push(o2.cmds[h2]);
      }
    }, e2.U._getGlyphClass = function(r3, t3) {
      var a3 = e2._lctf.getInterval(t3, r3);
      return -1 == a3 ? 0 : t3[a3 + 2];
    }, e2.U._applySubs = function(r3, t3, a3, n) {
      for (var o2 = r3.length - t3 - 1, s = 0; s < a3.tabs.length; s++) if (null != a3.tabs[s]) {
        var i, h2 = a3.tabs[s];
        if (!h2.coverage || -1 != (i = e2._lctf.coverageIndex(h2.coverage, r3[t3]))) {
          if (1 == a3.ltype) r3[t3], 1 == h2.fmt ? r3[t3] = r3[t3] + h2.delta : r3[t3] = h2.newg[i];
          else if (4 == a3.ltype) for (var d = h2.vals[i], f = 0; f < d.length; f++) {
            var u = d[f], l2 = u.chain.length;
            if (!(l2 > o2)) {
              for (var v = true, c2 = 0, p2 = 0; p2 < l2; p2++) {
                for (; -1 == r3[t3 + c2 + (1 + p2)]; ) c2++;
                u.chain[p2] != r3[t3 + c2 + (1 + p2)] && (v = false);
              }
              if (v) {
                r3[t3] = u.nglyph;
                for (p2 = 0; p2 < l2 + c2; p2++) r3[t3 + p2 + 1] = -1;
                break;
              }
            }
          }
          else if (5 == a3.ltype && 2 == h2.fmt) for (var U = e2._lctf.getInterval(h2.cDef, r3[t3]), g2 = h2.cDef[U + 2], S = h2.scset[g2], m2 = 0; m2 < S.length; m2++) {
            var b2 = S[m2], y = b2.input;
            if (!(y.length > o2)) {
              for (v = true, p2 = 0; p2 < y.length; p2++) {
                var F = e2._lctf.getInterval(h2.cDef, r3[t3 + 1 + p2]);
                if (-1 == U && h2.cDef[F + 2] != y[p2]) {
                  v = false;
                  break;
                }
              }
              if (v) {
                var C = b2.substLookupRecords;
                for (f = 0; f < C.length; f += 2) C[f], C[f + 1];
              }
            }
          }
          else if (6 == a3.ltype && 3 == h2.fmt) {
            if (!e2.U._glsCovered(r3, h2.backCvg, t3 - h2.backCvg.length)) continue;
            if (!e2.U._glsCovered(r3, h2.inptCvg, t3)) continue;
            if (!e2.U._glsCovered(r3, h2.ahedCvg, t3 + h2.inptCvg.length)) continue;
            var _ = h2.lookupRec;
            for (m2 = 0; m2 < _.length; m2 += 2) {
              U = _[m2];
              var P = n[_[m2 + 1]];
              e2.U._applySubs(r3, t3 + U, P, n);
            }
          }
        }
      }
    }, e2.U._glsCovered = function(r3, t3, a3) {
      for (var n = 0; n < t3.length; n++) {
        if (-1 == e2._lctf.coverageIndex(t3[n], r3[a3 + n])) return false;
      }
      return true;
    }, e2.U.glyphsToPath = function(r3, t3, a3) {
      for (var n = { cmds: [], crds: [] }, o2 = 0, s = 0; s < t3.length; s++) {
        var i = t3[s];
        if (-1 != i) {
          for (var h2 = s < t3.length - 1 && -1 != t3[s + 1] ? t3[s + 1] : 0, d = e2.U.glyphToPath(r3, i), f = 0; f < d.crds.length; f += 2) n.crds.push(d.crds[f] + o2), n.crds.push(d.crds[f + 1]);
          a3 && n.cmds.push(a3);
          for (f = 0; f < d.cmds.length; f++) n.cmds.push(d.cmds[f]);
          a3 && n.cmds.push("X"), o2 += r3.hmtx.aWidth[i], s < t3.length - 1 && (o2 += e2.U.getPairAdjustment(r3, i, h2));
        }
      }
      return n;
    }, e2.U.P = {}, e2.U.P.moveTo = function(r3, e3, t3) {
      r3.cmds.push("M"), r3.crds.push(e3, t3);
    }, e2.U.P.lineTo = function(r3, e3, t3) {
      r3.cmds.push("L"), r3.crds.push(e3, t3);
    }, e2.U.P.curveTo = function(r3, e3, t3, a3, n, o2, s) {
      r3.cmds.push("C"), r3.crds.push(e3, t3, a3, n, o2, s);
    }, e2.U.P.qcurveTo = function(r3, e3, t3, a3, n) {
      r3.cmds.push("Q"), r3.crds.push(e3, t3, a3, n);
    }, e2.U.P.closePath = function(r3) {
      r3.cmds.push("Z");
    }, e2.U._drawCFF = function(r3, t3, a3, n, o2) {
      for (var s = t3.stack, i = t3.nStems, h2 = t3.haveWidth, d = t3.width, f = t3.open, u = 0, l2 = t3.x, v = t3.y, c2 = 0, p2 = 0, U = 0, g2 = 0, S = 0, m2 = 0, b2 = 0, y = 0, F = 0, C = 0, _ = { val: 0, size: 0 }; u < r3.length; ) {
        e2.CFF.getCharString(r3, u, _);
        var P = _.val;
        if (u += _.size, "o1" == P || "o18" == P) s.length % 2 != 0 && !h2 && (d = s.shift() + n.nominalWidthX), i += s.length >> 1, s.length = 0, h2 = true;
        else if ("o3" == P || "o23" == P) {
          s.length % 2 != 0 && !h2 && (d = s.shift() + n.nominalWidthX), i += s.length >> 1, s.length = 0, h2 = true;
        } else if ("o4" == P) s.length > 1 && !h2 && (d = s.shift() + n.nominalWidthX, h2 = true), f && e2.U.P.closePath(o2), v += s.pop(), e2.U.P.moveTo(o2, l2, v), f = true;
        else if ("o5" == P) for (; s.length > 0; ) l2 += s.shift(), v += s.shift(), e2.U.P.lineTo(o2, l2, v);
        else if ("o6" == P || "o7" == P) for (var x = s.length, I = "o6" == P, w = 0; w < x; w++) {
          var k2 = s.shift();
          I ? l2 += k2 : v += k2, I = !I, e2.U.P.lineTo(o2, l2, v);
        }
        else if ("o8" == P || "o24" == P) {
          x = s.length;
          for (var G = 0; G + 6 <= x; ) c2 = l2 + s.shift(), p2 = v + s.shift(), U = c2 + s.shift(), g2 = p2 + s.shift(), l2 = U + s.shift(), v = g2 + s.shift(), e2.U.P.curveTo(o2, c2, p2, U, g2, l2, v), G += 6;
          "o24" == P && (l2 += s.shift(), v += s.shift(), e2.U.P.lineTo(o2, l2, v));
        } else {
          if ("o11" == P) break;
          if ("o1234" == P || "o1235" == P || "o1236" == P || "o1237" == P) "o1234" == P && (p2 = v, U = (c2 = l2 + s.shift()) + s.shift(), C = g2 = p2 + s.shift(), m2 = g2, y = v, l2 = (b2 = (S = (F = U + s.shift()) + s.shift()) + s.shift()) + s.shift(), e2.U.P.curveTo(o2, c2, p2, U, g2, F, C), e2.U.P.curveTo(o2, S, m2, b2, y, l2, v)), "o1235" == P && (c2 = l2 + s.shift(), p2 = v + s.shift(), U = c2 + s.shift(), g2 = p2 + s.shift(), F = U + s.shift(), C = g2 + s.shift(), S = F + s.shift(), m2 = C + s.shift(), b2 = S + s.shift(), y = m2 + s.shift(), l2 = b2 + s.shift(), v = y + s.shift(), s.shift(), e2.U.P.curveTo(o2, c2, p2, U, g2, F, C), e2.U.P.curveTo(o2, S, m2, b2, y, l2, v)), "o1236" == P && (c2 = l2 + s.shift(), p2 = v + s.shift(), U = c2 + s.shift(), C = g2 = p2 + s.shift(), m2 = g2, b2 = (S = (F = U + s.shift()) + s.shift()) + s.shift(), y = m2 + s.shift(), l2 = b2 + s.shift(), e2.U.P.curveTo(o2, c2, p2, U, g2, F, C), e2.U.P.curveTo(o2, S, m2, b2, y, l2, v)), "o1237" == P && (c2 = l2 + s.shift(), p2 = v + s.shift(), U = c2 + s.shift(), g2 = p2 + s.shift(), F = U + s.shift(), C = g2 + s.shift(), S = F + s.shift(), m2 = C + s.shift(), b2 = S + s.shift(), y = m2 + s.shift(), Math.abs(b2 - l2) > Math.abs(y - v) ? l2 = b2 + s.shift() : v = y + s.shift(), e2.U.P.curveTo(o2, c2, p2, U, g2, F, C), e2.U.P.curveTo(o2, S, m2, b2, y, l2, v));
          else if ("o14" == P) {
            if (s.length > 0 && !h2 && (d = s.shift() + a3.nominalWidthX, h2 = true), 4 == s.length) {
              var O = s.shift(), T = s.shift(), D2 = s.shift(), B = s.shift(), A = e2.CFF.glyphBySE(a3, D2), R = e2.CFF.glyphBySE(a3, B);
              e2.U._drawCFF(a3.CharStrings[A], t3, a3, n, o2), t3.x = O, t3.y = T, e2.U._drawCFF(a3.CharStrings[R], t3, a3, n, o2);
            }
            f && (e2.U.P.closePath(o2), f = false);
          } else if ("o19" == P || "o20" == P) {
            s.length % 2 != 0 && !h2 && (d = s.shift() + n.nominalWidthX), i += s.length >> 1, s.length = 0, h2 = true, u += i + 7 >> 3;
          } else if ("o21" == P) s.length > 2 && !h2 && (d = s.shift() + n.nominalWidthX, h2 = true), v += s.pop(), l2 += s.pop(), f && e2.U.P.closePath(o2), e2.U.P.moveTo(o2, l2, v), f = true;
          else if ("o22" == P) s.length > 1 && !h2 && (d = s.shift() + n.nominalWidthX, h2 = true), l2 += s.pop(), f && e2.U.P.closePath(o2), e2.U.P.moveTo(o2, l2, v), f = true;
          else if ("o25" == P) {
            for (; s.length > 6; ) l2 += s.shift(), v += s.shift(), e2.U.P.lineTo(o2, l2, v);
            c2 = l2 + s.shift(), p2 = v + s.shift(), U = c2 + s.shift(), g2 = p2 + s.shift(), l2 = U + s.shift(), v = g2 + s.shift(), e2.U.P.curveTo(o2, c2, p2, U, g2, l2, v);
          } else if ("o26" == P) for (s.length % 2 && (l2 += s.shift()); s.length > 0; ) c2 = l2, p2 = v + s.shift(), l2 = U = c2 + s.shift(), v = (g2 = p2 + s.shift()) + s.shift(), e2.U.P.curveTo(o2, c2, p2, U, g2, l2, v);
          else if ("o27" == P) for (s.length % 2 && (v += s.shift()); s.length > 0; ) p2 = v, U = (c2 = l2 + s.shift()) + s.shift(), g2 = p2 + s.shift(), l2 = U + s.shift(), v = g2, e2.U.P.curveTo(o2, c2, p2, U, g2, l2, v);
          else if ("o10" == P || "o29" == P) {
            var L = "o10" == P ? n : a3;
            if (0 == s.length) console.debug("error: empty stack");
            else {
              var W2 = s.pop(), M = L.Subrs[W2 + L.Bias];
              t3.x = l2, t3.y = v, t3.nStems = i, t3.haveWidth = h2, t3.width = d, t3.open = f, e2.U._drawCFF(M, t3, a3, n, o2), l2 = t3.x, v = t3.y, i = t3.nStems, h2 = t3.haveWidth, d = t3.width, f = t3.open;
            }
          } else if ("o30" == P || "o31" == P) {
            var V = s.length, E2 = (G = 0, "o31" == P);
            for (G += V - (x = -3 & V); G < x; ) E2 ? (p2 = v, U = (c2 = l2 + s.shift()) + s.shift(), v = (g2 = p2 + s.shift()) + s.shift(), x - G == 5 ? (l2 = U + s.shift(), G++) : l2 = U, E2 = false) : (c2 = l2, p2 = v + s.shift(), U = c2 + s.shift(), g2 = p2 + s.shift(), l2 = U + s.shift(), x - G == 5 ? (v = g2 + s.shift(), G++) : v = g2, E2 = true), e2.U.P.curveTo(o2, c2, p2, U, g2, l2, v), G += 4;
          } else {
            if ("o" == (P + "").charAt(0)) throw console.debug("Unknown operation: " + P, r3), P;
            s.push(P);
          }
        }
      }
      t3.x = l2, t3.y = v, t3.nStems = i, t3.haveWidth = h2, t3.width = d, t3.open = f;
    };
    var t2 = e2, a2 = { Typr: t2 };
    return r2.Typr = t2, r2.default = a2, Object.defineProperty(r2, "__esModule", { value: true }), r2;
  })({}).Typr;
}
/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/
function woff2otfFactory() {
  return (function(r2) {
    var e2 = Uint8Array, n = Uint16Array, t2 = Uint32Array, a2 = new e2([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), i = new e2([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), o2 = new e2([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), f = function(r3, e3) {
      for (var a3 = new n(31), i2 = 0; i2 < 31; ++i2) a3[i2] = e3 += 1 << r3[i2 - 1];
      var o3 = new t2(a3[30]);
      for (i2 = 1; i2 < 30; ++i2) for (var f2 = a3[i2]; f2 < a3[i2 + 1]; ++f2) o3[f2] = f2 - a3[i2] << 5 | i2;
      return [a3, o3];
    }, u = f(a2, 2), v = u[0], s = u[1];
    v[28] = 258, s[258] = 28;
    for (var l2 = f(i, 0)[0], c2 = new n(32768), g2 = 0; g2 < 32768; ++g2) {
      var h2 = (43690 & g2) >>> 1 | (21845 & g2) << 1;
      h2 = (61680 & (h2 = (52428 & h2) >>> 2 | (13107 & h2) << 2)) >>> 4 | (3855 & h2) << 4, c2[g2] = ((65280 & h2) >>> 8 | (255 & h2) << 8) >>> 1;
    }
    var w = function(r3, e3, t3) {
      for (var a3 = r3.length, i2 = 0, o3 = new n(e3); i2 < a3; ++i2) ++o3[r3[i2] - 1];
      var f2, u2 = new n(e3);
      for (i2 = 0; i2 < e3; ++i2) u2[i2] = u2[i2 - 1] + o3[i2 - 1] << 1;
      {
        f2 = new n(1 << e3);
        var v2 = 15 - e3;
        for (i2 = 0; i2 < a3; ++i2) if (r3[i2]) for (var s2 = i2 << 4 | r3[i2], l3 = e3 - r3[i2], g3 = u2[r3[i2] - 1]++ << l3, h3 = g3 | (1 << l3) - 1; g3 <= h3; ++g3) f2[c2[g3] >>> v2] = s2;
      }
      return f2;
    }, d = new e2(288);
    for (g2 = 0; g2 < 144; ++g2) d[g2] = 8;
    for (g2 = 144; g2 < 256; ++g2) d[g2] = 9;
    for (g2 = 256; g2 < 280; ++g2) d[g2] = 7;
    for (g2 = 280; g2 < 288; ++g2) d[g2] = 8;
    var m2 = new e2(32);
    for (g2 = 0; g2 < 32; ++g2) m2[g2] = 5;
    var b2 = w(d, 9), p2 = w(m2, 5), y = function(r3) {
      for (var e3 = r3[0], n2 = 1; n2 < r3.length; ++n2) r3[n2] > e3 && (e3 = r3[n2]);
      return e3;
    }, L = function(r3, e3, n2) {
      var t3 = e3 / 8 | 0;
      return (r3[t3] | r3[t3 + 1] << 8) >> (7 & e3) & n2;
    }, U = function(r3, e3) {
      var n2 = e3 / 8 | 0;
      return (r3[n2] | r3[n2 + 1] << 8 | r3[n2 + 2] << 16) >> (7 & e3);
    }, k2 = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], T = function(r3, e3, n2) {
      var t3 = new Error(e3 || k2[r3]);
      if (t3.code = r3, Error.captureStackTrace && Error.captureStackTrace(t3, T), !n2) throw t3;
      return t3;
    }, O = function(r3, f2, u2) {
      var s2 = r3.length;
      if (!s2 || u2 && !u2.l && s2 < 5) return f2 || new e2(0);
      var c3 = !f2 || u2, g3 = !u2 || u2.i;
      u2 || (u2 = {}), f2 || (f2 = new e2(3 * s2));
      var h3, d2 = function(r4) {
        var n2 = f2.length;
        if (r4 > n2) {
          var t3 = new e2(Math.max(2 * n2, r4));
          t3.set(f2), f2 = t3;
        }
      }, m3 = u2.f || 0, k3 = u2.p || 0, O2 = u2.b || 0, A2 = u2.l, x2 = u2.d, E2 = u2.m, D2 = u2.n, M = 8 * s2;
      do {
        if (!A2) {
          u2.f = m3 = L(r3, k3, 1);
          var S = L(r3, k3 + 1, 3);
          if (k3 += 3, !S) {
            var V = r3[(I = ((h3 = k3) / 8 | 0) + (7 & h3 && 1) + 4) - 4] | r3[I - 3] << 8, _ = I + V;
            if (_ > s2) {
              g3 && T(0);
              break;
            }
            c3 && d2(O2 + V), f2.set(r3.subarray(I, _), O2), u2.b = O2 += V, u2.p = k3 = 8 * _;
            continue;
          }
          if (1 == S) A2 = b2, x2 = p2, E2 = 9, D2 = 5;
          else if (2 == S) {
            var j2 = L(r3, k3, 31) + 257, z = L(r3, k3 + 10, 15) + 4, C = j2 + L(r3, k3 + 5, 31) + 1;
            k3 += 14;
            for (var F = new e2(C), P = new e2(19), q = 0; q < z; ++q) P[o2[q]] = L(r3, k3 + 3 * q, 7);
            k3 += 3 * z;
            var B = y(P), G = (1 << B) - 1, H = w(P, B);
            for (q = 0; q < C; ) {
              var I, J = H[L(r3, k3, G)];
              if (k3 += 15 & J, (I = J >>> 4) < 16) F[q++] = I;
              else {
                var K = 0, N = 0;
                for (16 == I ? (N = 3 + L(r3, k3, 3), k3 += 2, K = F[q - 1]) : 17 == I ? (N = 3 + L(r3, k3, 7), k3 += 3) : 18 == I && (N = 11 + L(r3, k3, 127), k3 += 7); N--; ) F[q++] = K;
              }
            }
            var Q = F.subarray(0, j2), R = F.subarray(j2);
            E2 = y(Q), D2 = y(R), A2 = w(Q, E2), x2 = w(R, D2);
          } else T(1);
          if (k3 > M) {
            g3 && T(0);
            break;
          }
        }
        c3 && d2(O2 + 131072);
        for (var W2 = (1 << E2) - 1, X2 = (1 << D2) - 1, Y = k3; ; Y = k3) {
          var Z = (K = A2[U(r3, k3) & W2]) >>> 4;
          if ((k3 += 15 & K) > M) {
            g3 && T(0);
            break;
          }
          if (K || T(2), Z < 256) f2[O2++] = Z;
          else {
            if (256 == Z) {
              Y = k3, A2 = null;
              break;
            }
            var $ = Z - 254;
            if (Z > 264) {
              var rr = a2[q = Z - 257];
              $ = L(r3, k3, (1 << rr) - 1) + v[q], k3 += rr;
            }
            var er = x2[U(r3, k3) & X2], nr = er >>> 4;
            er || T(3), k3 += 15 & er;
            R = l2[nr];
            if (nr > 3) {
              rr = i[nr];
              R += U(r3, k3) & (1 << rr) - 1, k3 += rr;
            }
            if (k3 > M) {
              g3 && T(0);
              break;
            }
            c3 && d2(O2 + 131072);
            for (var tr = O2 + $; O2 < tr; O2 += 4) f2[O2] = f2[O2 - R], f2[O2 + 1] = f2[O2 + 1 - R], f2[O2 + 2] = f2[O2 + 2 - R], f2[O2 + 3] = f2[O2 + 3 - R];
            O2 = tr;
          }
        }
        u2.l = A2, u2.p = Y, u2.b = O2, A2 && (m3 = 1, u2.m = E2, u2.d = x2, u2.n = D2);
      } while (!m3);
      return O2 == f2.length ? f2 : (function(r4, a3, i2) {
        (null == i2 || i2 > r4.length) && (i2 = r4.length);
        var o3 = new (r4 instanceof n ? n : r4 instanceof t2 ? t2 : e2)(i2 - a3);
        return o3.set(r4.subarray(a3, i2)), o3;
      })(f2, 0, O2);
    }, A = new e2(0);
    var x = "undefined" != typeof TextDecoder && new TextDecoder();
    try {
      x.decode(A, { stream: true }), 1;
    } catch (r3) {
    }
    return r2.convert_streams = function(r3) {
      var e3 = new DataView(r3), n2 = 0;
      function t3() {
        var r4 = e3.getUint16(n2);
        return n2 += 2, r4;
      }
      function a3() {
        var r4 = e3.getUint32(n2);
        return n2 += 4, r4;
      }
      function i2(r4) {
        m3.setUint16(b3, r4), b3 += 2;
      }
      function o3(r4) {
        m3.setUint32(b3, r4), b3 += 4;
      }
      for (var f2 = { signature: a3(), flavor: a3(), length: a3(), numTables: t3(), reserved: t3(), totalSfntSize: a3(), majorVersion: t3(), minorVersion: t3(), metaOffset: a3(), metaLength: a3(), metaOrigLength: a3(), privOffset: a3(), privLength: a3() }, u2 = 0; Math.pow(2, u2) <= f2.numTables; ) u2++;
      u2--;
      for (var v2 = 16 * Math.pow(2, u2), s2 = 16 * f2.numTables - v2, l3 = 12, c3 = [], g3 = 0; g3 < f2.numTables; g3++) c3.push({ tag: a3(), offset: a3(), compLength: a3(), origLength: a3(), origChecksum: a3() }), l3 += 16;
      var h3, w2 = new Uint8Array(12 + 16 * c3.length + c3.reduce((function(r4, e4) {
        return r4 + e4.origLength + 4;
      }), 0)), d2 = w2.buffer, m3 = new DataView(d2), b3 = 0;
      return o3(f2.flavor), i2(f2.numTables), i2(v2), i2(u2), i2(s2), c3.forEach((function(r4) {
        o3(r4.tag), o3(r4.origChecksum), o3(l3), o3(r4.origLength), r4.outOffset = l3, (l3 += r4.origLength) % 4 != 0 && (l3 += 4 - l3 % 4);
      })), c3.forEach((function(e4) {
        var n3, t4 = r3.slice(e4.offset, e4.offset + e4.compLength);
        if (e4.compLength != e4.origLength) {
          var a4 = new Uint8Array(e4.origLength);
          n3 = new Uint8Array(t4, 2), O(n3, a4);
        } else a4 = new Uint8Array(t4);
        w2.set(a4, e4.outOffset);
        var i3 = 0;
        (l3 = e4.outOffset + e4.origLength) % 4 != 0 && (i3 = 4 - l3 % 4), w2.set(new Uint8Array(i3).buffer, e4.outOffset + e4.origLength), h3 = l3 + i3;
      })), d2.slice(0, h3);
    }, Object.defineProperty(r2, "__esModule", { value: true }), r2;
  })({}).convert_streams;
}
function parserFactory(Typr, woff2otf) {
  const cmdArgLengths = {
    M: 2,
    L: 2,
    Q: 4,
    C: 6,
    Z: 0
  };
  const joiningTypeRawData = { "C": "18g,ca,368,1kz", "D": "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v", "R": "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6", "L": "x9u,jff,a,fd,jv", "T": "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n" };
  const JT_LEFT = 1, JT_RIGHT = 2, JT_DUAL = 4, JT_TRANSPARENT = 8, JT_JOIN_CAUSING = 16, JT_NON_JOINING = 32;
  let joiningTypeMap;
  function getCharJoiningType(ch) {
    if (!joiningTypeMap) {
      const m2 = {
        R: JT_RIGHT,
        L: JT_LEFT,
        D: JT_DUAL,
        C: JT_JOIN_CAUSING,
        U: JT_NON_JOINING,
        T: JT_TRANSPARENT
      };
      joiningTypeMap = /* @__PURE__ */ new Map();
      for (let type in joiningTypeRawData) {
        let lastCode = 0;
        joiningTypeRawData[type].split(",").forEach((range) => {
          let [skip, step] = range.split("+");
          skip = parseInt(skip, 36);
          step = step ? parseInt(step, 36) : 0;
          joiningTypeMap.set(lastCode += skip, m2[type]);
          for (let i = step; i--; ) {
            joiningTypeMap.set(++lastCode, m2[type]);
          }
        });
      }
    }
    return joiningTypeMap.get(ch) || JT_NON_JOINING;
  }
  const ISOL = 1, INIT = 2, FINA = 3, MEDI = 4;
  const formsToFeatures = [null, "isol", "init", "fina", "medi"];
  function detectJoiningForms(str) {
    const joiningForms = new Uint8Array(str.length);
    let prevJoiningType = JT_NON_JOINING;
    let prevForm = ISOL;
    let prevIndex = -1;
    for (let i = 0; i < str.length; i++) {
      const code = str.codePointAt(i);
      let joiningType = getCharJoiningType(code) | 0;
      let form = ISOL;
      if (joiningType & JT_TRANSPARENT) {
        continue;
      }
      if (prevJoiningType & (JT_LEFT | JT_DUAL | JT_JOIN_CAUSING)) {
        if (joiningType & (JT_RIGHT | JT_DUAL | JT_JOIN_CAUSING)) {
          form = FINA;
          if (prevForm === ISOL || prevForm === FINA) {
            joiningForms[prevIndex]++;
          }
        } else if (joiningType & (JT_LEFT | JT_NON_JOINING)) {
          if (prevForm === INIT || prevForm === MEDI) {
            joiningForms[prevIndex]--;
          }
        }
      } else if (prevJoiningType & (JT_RIGHT | JT_NON_JOINING)) {
        if (prevForm === INIT || prevForm === MEDI) {
          joiningForms[prevIndex]--;
        }
      }
      prevForm = joiningForms[i] = form;
      prevJoiningType = joiningType;
      prevIndex = i;
      if (code > 65535) i++;
    }
    return joiningForms;
  }
  function stringToGlyphs(font, str) {
    const glyphIds = [];
    for (let i = 0; i < str.length; i++) {
      const cc = str.codePointAt(i);
      if (cc > 65535) i++;
      glyphIds.push(Typr.U.codeToGlyph(font, cc));
    }
    const gsub = font["GSUB"];
    if (gsub) {
      const { lookupList, featureList } = gsub;
      let joiningForms;
      const supportedFeatures = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/;
      const usedLookups = [];
      featureList.forEach((feature) => {
        if (supportedFeatures.test(feature.tag)) {
          for (let ti = 0; ti < feature.tab.length; ti++) {
            if (usedLookups[feature.tab[ti]]) continue;
            usedLookups[feature.tab[ti]] = true;
            const tab = lookupList[feature.tab[ti]];
            const isJoiningFeature = /^(isol|init|fina|medi)$/.test(feature.tag);
            if (isJoiningFeature && !joiningForms) {
              joiningForms = detectJoiningForms(str);
            }
            for (let ci = 0; ci < glyphIds.length; ci++) {
              if (!joiningForms || !isJoiningFeature || formsToFeatures[joiningForms[ci]] === feature.tag) {
                Typr.U._applySubs(glyphIds, ci, tab, lookupList);
              }
            }
          }
        }
      });
    }
    return glyphIds;
  }
  function calcGlyphPositions(font, glyphIds) {
    const positions = new Int16Array(glyphIds.length * 3);
    let glyphIndex = 0;
    for (; glyphIndex < glyphIds.length; glyphIndex++) {
      const glyphId = glyphIds[glyphIndex];
      if (glyphId === -1) continue;
      positions[glyphIndex * 3 + 2] = font.hmtx.aWidth[glyphId];
      const gpos = font.GPOS;
      if (gpos) {
        const llist = gpos.lookupList;
        for (let i = 0; i < llist.length; i++) {
          const lookup = llist[i];
          for (let j2 = 0; j2 < lookup.tabs.length; j2++) {
            const tab = lookup.tabs[j2];
            if (lookup.ltype === 1) {
              const ind = Typr._lctf.coverageIndex(tab.coverage, glyphId);
              if (ind !== -1 && tab.pos) {
                applyValueRecord(tab.pos, glyphIndex);
                break;
              }
            } else if (lookup.ltype === 2) {
              let adj = null;
              let prevGlyphIndex = getPrevGlyphIndex();
              if (prevGlyphIndex !== -1) {
                const coverageIndex = Typr._lctf.coverageIndex(tab.coverage, glyphIds[prevGlyphIndex]);
                if (coverageIndex !== -1) {
                  if (tab.fmt === 1) {
                    const right = tab.pairsets[coverageIndex];
                    for (let k2 = 0; k2 < right.length; k2++) {
                      if (right[k2].gid2 === glyphId) adj = right[k2];
                    }
                  } else if (tab.fmt === 2) {
                    const c1 = Typr.U._getGlyphClass(glyphIds[prevGlyphIndex], tab.classDef1);
                    const c2 = Typr.U._getGlyphClass(glyphId, tab.classDef2);
                    adj = tab.matrix[c1][c2];
                  }
                  if (adj) {
                    if (adj.val1) applyValueRecord(adj.val1, prevGlyphIndex);
                    if (adj.val2) applyValueRecord(adj.val2, glyphIndex);
                    break;
                  }
                }
              }
            } else if (lookup.ltype === 4) {
              const markArrIndex = Typr._lctf.coverageIndex(tab.markCoverage, glyphId);
              if (markArrIndex !== -1) {
                const baseGlyphIndex = getPrevGlyphIndex(isBaseGlyph);
                const baseArrIndex = baseGlyphIndex === -1 ? -1 : Typr._lctf.coverageIndex(tab.baseCoverage, glyphIds[baseGlyphIndex]);
                if (baseArrIndex !== -1) {
                  const markRecord = tab.markArray[markArrIndex];
                  const baseAnchor = tab.baseArray[baseArrIndex][markRecord.markClass];
                  positions[glyphIndex * 3] = baseAnchor.x - markRecord.x + positions[baseGlyphIndex * 3] - positions[baseGlyphIndex * 3 + 2];
                  positions[glyphIndex * 3 + 1] = baseAnchor.y - markRecord.y + positions[baseGlyphIndex * 3 + 1];
                  break;
                }
              }
            } else if (lookup.ltype === 6) {
              const mark1ArrIndex = Typr._lctf.coverageIndex(tab.mark1Coverage, glyphId);
              if (mark1ArrIndex !== -1) {
                const prevGlyphIndex = getPrevGlyphIndex();
                if (prevGlyphIndex !== -1) {
                  const prevGlyphId = glyphIds[prevGlyphIndex];
                  if (getGlyphClass(font, prevGlyphId) === 3) {
                    const mark2ArrIndex = Typr._lctf.coverageIndex(tab.mark2Coverage, prevGlyphId);
                    if (mark2ArrIndex !== -1) {
                      const mark1Record = tab.mark1Array[mark1ArrIndex];
                      const mark2Anchor = tab.mark2Array[mark2ArrIndex][mark1Record.markClass];
                      positions[glyphIndex * 3] = mark2Anchor.x - mark1Record.x + positions[prevGlyphIndex * 3] - positions[prevGlyphIndex * 3 + 2];
                      positions[glyphIndex * 3 + 1] = mark2Anchor.y - mark1Record.y + positions[prevGlyphIndex * 3 + 1];
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } else if (font.kern && !font.cff) {
        const prevGlyphIndex = getPrevGlyphIndex();
        if (prevGlyphIndex !== -1) {
          const ind1 = font.kern.glyph1.indexOf(glyphIds[prevGlyphIndex]);
          if (ind1 !== -1) {
            const ind2 = font.kern.rval[ind1].glyph2.indexOf(glyphId);
            if (ind2 !== -1) {
              positions[prevGlyphIndex * 3 + 2] += font.kern.rval[ind1].vals[ind2];
            }
          }
        }
      }
    }
    return positions;
    function getPrevGlyphIndex(filter) {
      for (let i = glyphIndex - 1; i >= 0; i--) {
        if (glyphIds[i] !== -1 && (!filter || filter(glyphIds[i]))) {
          return i;
        }
      }
      return -1;
    }
    function isBaseGlyph(glyphId) {
      return getGlyphClass(font, glyphId) === 1;
    }
    function applyValueRecord(source, gi) {
      for (let i = 0; i < 3; i++) {
        positions[gi * 3 + i] += source[i] || 0;
      }
    }
  }
  function getGlyphClass(font, glyphId) {
    const classDef = font.GDEF && font.GDEF.glyphClassDef;
    return classDef ? Typr.U._getGlyphClass(glyphId, classDef) : 0;
  }
  function firstNum(...args) {
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === "number") {
        return args[i];
      }
    }
  }
  function wrapFontObj(typrFont) {
    const glyphMap = /* @__PURE__ */ Object.create(null);
    const os2 = typrFont["OS/2"];
    const hhea = typrFont.hhea;
    const unitsPerEm = typrFont.head.unitsPerEm;
    const ascender = firstNum(os2 && os2.sTypoAscender, hhea && hhea.ascender, unitsPerEm);
    const fontObj = {
      unitsPerEm,
      ascender,
      descender: firstNum(os2 && os2.sTypoDescender, hhea && hhea.descender, 0),
      capHeight: firstNum(os2 && os2.sCapHeight, ascender),
      xHeight: firstNum(os2 && os2.sxHeight, ascender),
      lineGap: firstNum(os2 && os2.sTypoLineGap, hhea && hhea.lineGap),
      supportsCodePoint(code) {
        return Typr.U.codeToGlyph(typrFont, code) > 0;
      },
      forEachGlyph(text, fontSize, letterSpacing, callback) {
        let penX = 0;
        const fontScale = 1 / fontObj.unitsPerEm * fontSize;
        const glyphIds = stringToGlyphs(typrFont, text);
        let charIndex = 0;
        const positions = calcGlyphPositions(typrFont, glyphIds);
        glyphIds.forEach((glyphId, i) => {
          if (glyphId !== -1) {
            let glyphObj = glyphMap[glyphId];
            if (!glyphObj) {
              const { cmds, crds } = Typr.U.glyphToPath(typrFont, glyphId);
              let path = "";
              let crdsIdx = 0;
              for (let i2 = 0, len = cmds.length; i2 < len; i2++) {
                const numArgs = cmdArgLengths[cmds[i2]];
                path += cmds[i2];
                for (let j2 = 1; j2 <= numArgs; j2++) {
                  path += (j2 > 1 ? "," : "") + crds[crdsIdx++];
                }
              }
              let xMin, yMin, xMax, yMax;
              if (crds.length) {
                xMin = yMin = Infinity;
                xMax = yMax = -Infinity;
                for (let i2 = 0, len = crds.length; i2 < len; i2 += 2) {
                  let x = crds[i2];
                  let y = crds[i2 + 1];
                  if (x < xMin) xMin = x;
                  if (y < yMin) yMin = y;
                  if (x > xMax) xMax = x;
                  if (y > yMax) yMax = y;
                }
              } else {
                xMin = xMax = yMin = yMax = 0;
              }
              glyphObj = glyphMap[glyphId] = {
                index: glyphId,
                advanceWidth: typrFont.hmtx.aWidth[glyphId],
                xMin,
                yMin,
                xMax,
                yMax,
                path
              };
            }
            callback.call(
              null,
              glyphObj,
              penX + positions[i * 3] * fontScale,
              positions[i * 3 + 1] * fontScale,
              charIndex
            );
            penX += positions[i * 3 + 2] * fontScale;
            if (letterSpacing) {
              penX += letterSpacing * fontSize;
            }
          }
          charIndex += text.codePointAt(charIndex) > 65535 ? 2 : 1;
        });
        return penX;
      }
    };
    return fontObj;
  }
  return function parse(buffer) {
    const peek = new Uint8Array(buffer, 0, 4);
    const tag = Typr._bin.readASCII(peek, 0, 4);
    if (tag === "wOFF") {
      buffer = woff2otf(buffer);
    } else if (tag === "wOF2") {
      throw new Error("woff2 fonts not supported");
    }
    return wrapFontObj(Typr.parse(buffer)[0]);
  };
}
const workerModule = /* @__PURE__ */ defineWorkerModule({
  name: "Typr Font Parser",
  dependencies: [typrFactory, woff2otfFactory, parserFactory],
  init(typrFactory2, woff2otfFactory2, parserFactory2) {
    const Typr = typrFactory2();
    const woff2otf = woff2otfFactory2();
    return parserFactory2(Typr, woff2otf);
  }
});
/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/
function unicodeFontResolverClientFactory() {
  return (function(t2) {
    var n = function() {
      this.buckets = /* @__PURE__ */ new Map();
    };
    n.prototype.add = function(t3) {
      var n2 = t3 >> 5;
      this.buckets.set(n2, (this.buckets.get(n2) || 0) | 1 << (31 & t3));
    }, n.prototype.has = function(t3) {
      var n2 = this.buckets.get(t3 >> 5);
      return void 0 !== n2 && 0 != (n2 & 1 << (31 & t3));
    }, n.prototype.serialize = function() {
      var t3 = [];
      return this.buckets.forEach((function(n2, r3) {
        t3.push((+r3).toString(36) + ":" + n2.toString(36));
      })), t3.join(",");
    }, n.prototype.deserialize = function(t3) {
      var n2 = this;
      this.buckets.clear(), t3.split(",").forEach((function(t4) {
        var r3 = t4.split(":");
        n2.buckets.set(parseInt(r3[0], 36), parseInt(r3[1], 36));
      }));
    };
    var r2 = Math.pow(2, 8), e2 = r2 - 1, o2 = ~e2;
    function a2(t3) {
      var n2 = (function(t4) {
        return t4 & o2;
      })(t3).toString(16), e3 = (function(t4) {
        return (t4 & o2) + r2 - 1;
      })(t3).toString(16);
      return "codepoint-index/plane" + (t3 >> 16) + "/" + n2 + "-" + e3 + ".json";
    }
    function i(t3, n2) {
      var r3 = t3 & e2, o3 = n2.codePointAt(r3 / 6 | 0);
      return 0 != ((o3 = (o3 || 48) - 48) & 1 << r3 % 6);
    }
    function u(t3, n2) {
      var r3;
      (r3 = t3, r3.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map((function(t4) {
        return t4.split("-").map((function(t5) {
          return parseInt(t5.trim(), 16);
        }));
      }))).forEach((function(t4) {
        var r4 = t4[0], e3 = t4[1];
        void 0 === e3 && (e3 = r4), n2(r4, e3);
      }));
    }
    function c2(t3, n2) {
      u(t3, (function(t4, r3) {
        for (var e3 = t4; e3 <= r3; e3++) n2(e3);
      }));
    }
    var s = {}, f = {}, l2 = /* @__PURE__ */ new WeakMap(), v = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
    function d(t3) {
      var r3 = l2.get(t3);
      return r3 || (r3 = new n(), c2(t3.ranges, (function(t4) {
        return r3.add(t4);
      })), l2.set(t3, r3)), r3;
    }
    var h2, p2 = /* @__PURE__ */ new Map();
    function g2(t3, n2, r3) {
      return t3[n2] ? n2 : t3[r3] ? r3 : (function(t4) {
        for (var n3 in t4) return n3;
      })(t3);
    }
    function w(t3, n2) {
      var r3 = n2;
      if (!t3.includes(r3)) {
        r3 = 1 / 0;
        for (var e3 = 0; e3 < t3.length; e3++) Math.abs(t3[e3] - n2) < Math.abs(r3 - n2) && (r3 = t3[e3]);
      }
      return r3;
    }
    function k2(t3) {
      return h2 || (h2 = /* @__PURE__ */ new Set(), c2("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", (function(t4) {
        h2.add(t4);
      }))), h2.has(t3);
    }
    return t2.CodePointSet = n, t2.clearCache = function() {
      s = {}, f = {};
    }, t2.getFontsForString = function(t3, n2) {
      void 0 === n2 && (n2 = {});
      var r3, e3 = n2.lang;
      void 0 === e3 && (e3 = /\p{Script=Hangul}/u.test(r3 = t3) ? "ko" : /\p{Script=Hiragana}|\p{Script=Katakana}/u.test(r3) ? "ja" : "en");
      var o3 = n2.category;
      void 0 === o3 && (o3 = "sans-serif");
      var u2 = n2.style;
      void 0 === u2 && (u2 = "normal");
      var c3 = n2.weight;
      void 0 === c3 && (c3 = 400);
      var l3 = (n2.dataUrl || v).replace(/\/$/g, ""), h3 = /* @__PURE__ */ new Map(), y = new Uint8Array(t3.length), b2 = {}, m2 = {}, A = new Array(t3.length), S = /* @__PURE__ */ new Map(), j2 = false;
      function M(t4) {
        var n3 = p2.get(t4);
        return n3 || (n3 = fetch(l3 + "/" + t4).then((function(t5) {
          if (!t5.ok) throw new Error(t5.statusText);
          return t5.json().then((function(t6) {
            if (!Array.isArray(t6) || 1 !== t6[0]) throw new Error("Incorrect schema version; need 1, got " + t6[0]);
            return t6[1];
          }));
        })).catch((function(n4) {
          if (l3 !== v) return j2 || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + l3 + '", trying default CDN. ' + n4.message), j2 = true), l3 = v, p2.delete(t4), M(t4);
          throw n4;
        })), p2.set(t4, n3)), n3;
      }
      for (var P = function(n3) {
        var r4 = t3.codePointAt(n3), e4 = a2(r4);
        A[n3] = e4, s[e4] || S.has(e4) || S.set(e4, M(e4).then((function(t4) {
          s[e4] = t4;
        }))), r4 > 65535 && (n3++, E2 = n3);
      }, E2 = 0; E2 < t3.length; E2++) P(E2);
      return Promise.all(S.values()).then((function() {
        S.clear();
        for (var n3 = function(n4) {
          var o4 = t3.codePointAt(n4), a3 = null, u3 = s[A[n4]], c4 = void 0;
          for (var l4 in u3) {
            var v2 = m2[l4];
            if (void 0 === v2 && (v2 = m2[l4] = new RegExp(l4).test(e3 || "en")), v2) {
              for (var d2 in c4 = l4, u3[l4]) if (i(o4, u3[l4][d2])) {
                a3 = d2;
                break;
              }
              break;
            }
          }
          if (!a3) {
            t: for (var h4 in u3) if (h4 !== c4) {
              for (var p3 in u3[h4]) if (i(o4, u3[h4][p3])) {
                a3 = p3;
                break t;
              }
            }
          }
          a3 || (console.debug("No font coverage for U+" + o4.toString(16)), a3 = "latin"), A[n4] = a3, f[a3] || S.has(a3) || S.set(a3, M("font-meta/" + a3 + ".json").then((function(t4) {
            f[a3] = t4;
          }))), o4 > 65535 && (n4++, r4 = n4);
        }, r4 = 0; r4 < t3.length; r4++) n3(r4);
        return Promise.all(S.values());
      })).then((function() {
        for (var n3, r4 = null, e4 = 0; e4 < t3.length; e4++) {
          var a3 = t3.codePointAt(e4);
          if (r4 && (k2(a3) || d(r4).has(a3))) y[e4] = y[e4 - 1];
          else {
            r4 = f[A[e4]];
            var i2 = b2[r4.id];
            if (!i2) {
              var s2 = r4.typeforms, v2 = g2(s2, o3, "sans-serif"), p3 = g2(s2[v2], u2, "normal"), m3 = w(null === (n3 = s2[v2]) || void 0 === n3 ? void 0 : n3[p3], c3);
              i2 = b2[r4.id] = l3 + "/font-files/" + r4.id + "/" + v2 + "." + p3 + "." + m3 + ".woff";
            }
            var S2 = h3.get(i2);
            null == S2 && (S2 = h3.size, h3.set(i2, S2)), y[e4] = S2;
          }
          a3 > 65535 && (e4++, y[e4] = y[e4 - 1]);
        }
        return { fontUrls: Array.from(h3.keys()), chars: y };
      }));
    }, Object.defineProperty(t2, "__esModule", { value: true }), t2;
  })({});
}
function createFontResolver(fontParser, unicodeFontResolverClient) {
  const parsedFonts = /* @__PURE__ */ Object.create(null);
  const loadingFonts = /* @__PURE__ */ Object.create(null);
  function doLoadFont(url, callback) {
    const onError = (err) => {
      console.error(`Failure loading font ${url}`, err);
    };
    try {
      const request = new XMLHttpRequest();
      request.open("get", url, true);
      request.responseType = "arraybuffer";
      request.onload = function() {
        if (request.status >= 400) {
          onError(new Error(request.statusText));
        } else if (request.status > 0) {
          try {
            const fontObj = fontParser(request.response);
            fontObj.src = url;
            callback(fontObj);
          } catch (e2) {
            onError(e2);
          }
        }
      };
      request.onerror = onError;
      request.send();
    } catch (err) {
      onError(err);
    }
  }
  function loadFont(fontUrl, callback) {
    let font = parsedFonts[fontUrl];
    if (font) {
      callback(font);
    } else if (loadingFonts[fontUrl]) {
      loadingFonts[fontUrl].push(callback);
    } else {
      loadingFonts[fontUrl] = [callback];
      doLoadFont(fontUrl, (fontObj) => {
        fontObj.src = fontUrl;
        parsedFonts[fontUrl] = fontObj;
        loadingFonts[fontUrl].forEach((cb) => cb(fontObj));
        delete loadingFonts[fontUrl];
      });
    }
  }
  return function(text, callback, {
    lang,
    fonts: userFonts = [],
    style = "normal",
    weight = "normal",
    unicodeFontsURL
  } = {}) {
    const charResolutions = new Uint8Array(text.length);
    const fontResolutions = [];
    if (!text.length) {
      allDone();
    }
    const fontIndices = /* @__PURE__ */ new Map();
    const fallbackRanges = [];
    if (style !== "italic") style = "normal";
    if (typeof weight !== "number") {
      weight = weight === "bold" ? 700 : 400;
    }
    if (userFonts && !Array.isArray(userFonts)) {
      userFonts = [userFonts];
    }
    userFonts = userFonts.slice().filter((def) => !def.lang || def.lang.test(lang)).reverse();
    if (userFonts.length) {
      const UNKNOWN = 0;
      const RESOLVED = 1;
      const NEEDS_FALLBACK = 2;
      let prevCharResult = UNKNOWN;
      (function resolveUserFonts(startIndex = 0) {
        for (let i = startIndex, iLen = text.length; i < iLen; i++) {
          const codePoint = text.codePointAt(i);
          if (prevCharResult === RESOLVED && fontResolutions[charResolutions[i - 1]].supportsCodePoint(codePoint) || i > 0 && /\s/.test(text[i])) {
            charResolutions[i] = charResolutions[i - 1];
            if (prevCharResult === NEEDS_FALLBACK) {
              fallbackRanges[fallbackRanges.length - 1][1] = i;
            }
          } else {
            for (let j2 = charResolutions[i], jLen = userFonts.length; j2 <= jLen; j2++) {
              if (j2 === jLen) {
                const range = prevCharResult === NEEDS_FALLBACK ? fallbackRanges[fallbackRanges.length - 1] : fallbackRanges[fallbackRanges.length] = [i, i];
                range[1] = i;
                prevCharResult = NEEDS_FALLBACK;
              } else {
                charResolutions[i] = j2;
                const { src, unicodeRange } = userFonts[j2];
                if (!unicodeRange || isCodeInRanges(codePoint, unicodeRange)) {
                  const fontObj = parsedFonts[src];
                  if (!fontObj) {
                    loadFont(src, () => {
                      resolveUserFonts(i);
                    });
                    return;
                  }
                  if (fontObj.supportsCodePoint(codePoint)) {
                    let fontIndex = fontIndices.get(fontObj);
                    if (typeof fontIndex !== "number") {
                      fontIndex = fontResolutions.length;
                      fontResolutions.push(fontObj);
                      fontIndices.set(fontObj, fontIndex);
                    }
                    charResolutions[i] = fontIndex;
                    prevCharResult = RESOLVED;
                    break;
                  }
                }
              }
            }
          }
          if (codePoint > 65535 && i + 1 < iLen) {
            charResolutions[i + 1] = charResolutions[i];
            i++;
            if (prevCharResult === NEEDS_FALLBACK) {
              fallbackRanges[fallbackRanges.length - 1][1] = i;
            }
          }
        }
        resolveFallbacks();
      })();
    } else {
      fallbackRanges.push([0, text.length - 1]);
      resolveFallbacks();
    }
    function resolveFallbacks() {
      if (fallbackRanges.length) {
        const fallbackString = fallbackRanges.map((range) => text.substring(range[0], range[1] + 1)).join("\n");
        unicodeFontResolverClient.getFontsForString(fallbackString, {
          lang: lang || void 0,
          style,
          weight,
          dataUrl: unicodeFontsURL
        }).then(({ fontUrls, chars }) => {
          const fontIndexOffset = fontResolutions.length;
          let charIdx = 0;
          fallbackRanges.forEach((range) => {
            for (let i = 0, endIdx = range[1] - range[0]; i <= endIdx; i++) {
              charResolutions[range[0] + i] = chars[charIdx++] + fontIndexOffset;
            }
            charIdx++;
          });
          let loadedCount = 0;
          fontUrls.forEach((url, i) => {
            loadFont(url, (fontObj) => {
              fontResolutions[i + fontIndexOffset] = fontObj;
              if (++loadedCount === fontUrls.length) {
                allDone();
              }
            });
          });
        });
      } else {
        allDone();
      }
    }
    function allDone() {
      callback({
        chars: charResolutions,
        fonts: fontResolutions
      });
    }
    function isCodeInRanges(code, ranges) {
      for (let k2 = 0; k2 < ranges.length; k2++) {
        const [start, end = start] = ranges[k2];
        if (start <= code && code <= end) {
          return true;
        }
      }
      return false;
    }
  };
}
const fontResolverWorkerModule = /* @__PURE__ */ defineWorkerModule({
  name: "FontResolver",
  dependencies: [
    createFontResolver,
    workerModule,
    unicodeFontResolverClientFactory
  ],
  init(createFontResolver2, fontParser, unicodeFontResolverClientFactory2) {
    return createFontResolver2(fontParser, unicodeFontResolverClientFactory2());
  }
});
function createTypesetter(resolveFonts, bidi) {
  const INF = Infinity;
  const DEFAULT_IGNORABLE_CHARS = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/;
  const lineBreakingWhiteSpace = `[^\\S\\u00A0]`;
  const BREAK_AFTER_CHARS = new RegExp(`${lineBreakingWhiteSpace}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
  function calculateFontRuns({ text, lang, fonts, style, weight, preResolvedFonts, unicodeFontsURL }, onDone) {
    const onResolved = ({ chars, fonts: parsedFonts }) => {
      let curRun, prevVal;
      const runs = [];
      for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== prevVal) {
          prevVal = chars[i];
          runs.push(curRun = { start: i, end: i, fontObj: parsedFonts[chars[i]] });
        } else {
          curRun.end = i;
        }
      }
      onDone(runs);
    };
    if (preResolvedFonts) {
      onResolved(preResolvedFonts);
    } else {
      resolveFonts(
        text,
        onResolved,
        { lang, fonts, style, weight, unicodeFontsURL }
      );
    }
  }
  function typeset({
    text = "",
    font,
    lang,
    sdfGlyphSize = 64,
    fontSize = 400,
    fontWeight = 1,
    fontStyle = "normal",
    letterSpacing = 0,
    lineHeight = "normal",
    maxWidth = INF,
    direction,
    textAlign = "left",
    textIndent = 0,
    whiteSpace = "normal",
    overflowWrap = "normal",
    anchorX = 0,
    anchorY = 0,
    metricsOnly = false,
    unicodeFontsURL,
    preResolvedFonts = null,
    includeCaretPositions = false,
    chunkedBoundsSize = 8192,
    colorRanges = null
  }, callback) {
    const mainStart = now2();
    const timings = { fontLoad: 0, typesetting: 0 };
    if (text.indexOf("\r") > -1) {
      console.info("Typesetter: got text with \\r chars; normalizing to \\n");
      text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    }
    fontSize = +fontSize;
    letterSpacing = +letterSpacing;
    maxWidth = +maxWidth;
    lineHeight = lineHeight || "normal";
    textIndent = +textIndent;
    calculateFontRuns({
      text,
      lang,
      style: fontStyle,
      weight: fontWeight,
      fonts: typeof font === "string" ? [{ src: font }] : font,
      unicodeFontsURL,
      preResolvedFonts
    }, (runs) => {
      timings.fontLoad = now2() - mainStart;
      const hasMaxWidth = isFinite(maxWidth);
      let glyphIds = null;
      let glyphFontIndices = null;
      let glyphPositions = null;
      let glyphData = null;
      let glyphColors = null;
      let caretPositions = null;
      let visibleBounds = null;
      let chunkedBounds = null;
      let maxLineWidth = 0;
      let renderableGlyphCount = 0;
      let canWrap = whiteSpace !== "nowrap";
      const metricsByFont = /* @__PURE__ */ new Map();
      const typesetStart = now2();
      let lineXOffset = textIndent;
      let prevRunEndX = 0;
      let currentLine = new TextLine();
      const lines = [currentLine];
      runs.forEach((run2) => {
        const { fontObj } = run2;
        const { ascender, descender, unitsPerEm, lineGap, capHeight, xHeight } = fontObj;
        let fontData2 = metricsByFont.get(fontObj);
        if (!fontData2) {
          const fontSizeMult2 = fontSize / unitsPerEm;
          const calcLineHeight = lineHeight === "normal" ? (ascender - descender + lineGap) * fontSizeMult2 : lineHeight * fontSize;
          const halfLeading = (calcLineHeight - (ascender - descender) * fontSizeMult2) / 2;
          const caretHeight = Math.min(calcLineHeight, (ascender - descender) * fontSizeMult2);
          const caretTop = (ascender + descender) / 2 * fontSizeMult2 + caretHeight / 2;
          fontData2 = {
            index: metricsByFont.size,
            src: fontObj.src,
            fontObj,
            fontSizeMult: fontSizeMult2,
            unitsPerEm,
            ascender: ascender * fontSizeMult2,
            descender: descender * fontSizeMult2,
            capHeight: capHeight * fontSizeMult2,
            xHeight: xHeight * fontSizeMult2,
            lineHeight: calcLineHeight,
            baseline: -halfLeading - ascender * fontSizeMult2,
            // baseline offset from top of line height
            // cap: -halfLeading - capHeight * fontSizeMult, // cap from top of line height
            // ex: -halfLeading - xHeight * fontSizeMult, // ex from top of line height
            caretTop,
            caretBottom: caretTop - caretHeight
          };
          metricsByFont.set(fontObj, fontData2);
        }
        const { fontSizeMult } = fontData2;
        const runText = text.slice(run2.start, run2.end + 1);
        let prevGlyphX, prevGlyphObj;
        fontObj.forEachGlyph(runText, fontSize, letterSpacing, (glyphObj, glyphX, glyphY, charIndex) => {
          glyphX += prevRunEndX;
          charIndex += run2.start;
          prevGlyphX = glyphX;
          prevGlyphObj = glyphObj;
          const char = text.charAt(charIndex);
          const glyphWidth = glyphObj.advanceWidth * fontSizeMult;
          const curLineCount = currentLine.count;
          let nextLine;
          if (!("isEmpty" in glyphObj)) {
            glyphObj.isWhitespace = !!char && new RegExp(lineBreakingWhiteSpace).test(char);
            glyphObj.canBreakAfter = !!char && BREAK_AFTER_CHARS.test(char);
            glyphObj.isEmpty = glyphObj.xMin === glyphObj.xMax || glyphObj.yMin === glyphObj.yMax || DEFAULT_IGNORABLE_CHARS.test(char);
          }
          if (!glyphObj.isWhitespace && !glyphObj.isEmpty) {
            renderableGlyphCount++;
          }
          if (canWrap && hasMaxWidth && !glyphObj.isWhitespace && glyphX + glyphWidth + lineXOffset > maxWidth && curLineCount) {
            if (currentLine.glyphAt(curLineCount - 1).glyphObj.canBreakAfter) {
              nextLine = new TextLine();
              lineXOffset = -glyphX;
            } else {
              for (let i = curLineCount; i--; ) {
                if (i === 0 && overflowWrap === "break-word") {
                  nextLine = new TextLine();
                  lineXOffset = -glyphX;
                  break;
                } else if (currentLine.glyphAt(i).glyphObj.canBreakAfter) {
                  nextLine = currentLine.splitAt(i + 1);
                  const adjustX = nextLine.glyphAt(0).x;
                  lineXOffset -= adjustX;
                  for (let j2 = nextLine.count; j2--; ) {
                    nextLine.glyphAt(j2).x -= adjustX;
                  }
                  break;
                }
              }
            }
            if (nextLine) {
              currentLine.isSoftWrapped = true;
              currentLine = nextLine;
              lines.push(currentLine);
              maxLineWidth = maxWidth;
            }
          }
          let fly = currentLine.glyphAt(currentLine.count);
          fly.glyphObj = glyphObj;
          fly.x = glyphX + lineXOffset;
          fly.y = glyphY;
          fly.width = glyphWidth;
          fly.charIndex = charIndex;
          fly.fontData = fontData2;
          if (char === "\n") {
            currentLine = new TextLine();
            lines.push(currentLine);
            lineXOffset = -(glyphX + glyphWidth + letterSpacing * fontSize) + textIndent;
          }
        });
        prevRunEndX = prevGlyphX + prevGlyphObj.advanceWidth * fontSizeMult + letterSpacing * fontSize;
      });
      let totalHeight = 0;
      lines.forEach((line) => {
        let isTrailingWhitespace = true;
        for (let i = line.count; i--; ) {
          const glyphInfo = line.glyphAt(i);
          if (isTrailingWhitespace && !glyphInfo.glyphObj.isWhitespace) {
            line.width = glyphInfo.x + glyphInfo.width;
            if (line.width > maxLineWidth) {
              maxLineWidth = line.width;
            }
            isTrailingWhitespace = false;
          }
          let { lineHeight: lineHeight2, capHeight, xHeight, baseline } = glyphInfo.fontData;
          if (lineHeight2 > line.lineHeight) line.lineHeight = lineHeight2;
          const baselineDiff = baseline - line.baseline;
          if (baselineDiff < 0) {
            line.baseline += baselineDiff;
            line.cap += baselineDiff;
            line.ex += baselineDiff;
          }
          line.cap = Math.max(line.cap, line.baseline + capHeight);
          line.ex = Math.max(line.ex, line.baseline + xHeight);
        }
        line.baseline -= totalHeight;
        line.cap -= totalHeight;
        line.ex -= totalHeight;
        totalHeight += line.lineHeight;
      });
      let anchorXOffset = 0;
      let anchorYOffset = 0;
      if (anchorX) {
        if (typeof anchorX === "number") {
          anchorXOffset = -anchorX;
        } else if (typeof anchorX === "string") {
          anchorXOffset = -maxLineWidth * (anchorX === "left" ? 0 : anchorX === "center" ? 0.5 : anchorX === "right" ? 1 : parsePercent(anchorX));
        }
      }
      if (anchorY) {
        if (typeof anchorY === "number") {
          anchorYOffset = -anchorY;
        } else if (typeof anchorY === "string") {
          anchorYOffset = anchorY === "top" ? 0 : anchorY === "top-baseline" ? -lines[0].baseline : anchorY === "top-cap" ? -lines[0].cap : anchorY === "top-ex" ? -lines[0].ex : anchorY === "middle" ? totalHeight / 2 : anchorY === "bottom" ? totalHeight : anchorY === "bottom-baseline" ? -lines[lines.length - 1].baseline : parsePercent(anchorY) * totalHeight;
        }
      }
      if (!metricsOnly) {
        const bidiLevelsResult = bidi.getEmbeddingLevels(text, direction);
        glyphIds = new Uint16Array(renderableGlyphCount);
        glyphFontIndices = new Uint8Array(renderableGlyphCount);
        glyphPositions = new Float32Array(renderableGlyphCount * 2);
        glyphData = {};
        visibleBounds = [INF, INF, -INF, -INF];
        chunkedBounds = [];
        if (includeCaretPositions) {
          caretPositions = new Float32Array(text.length * 4);
        }
        if (colorRanges) {
          glyphColors = new Uint8Array(renderableGlyphCount * 3);
        }
        let renderableGlyphIndex = 0;
        let prevCharIndex = -1;
        let colorCharIndex = -1;
        let chunk;
        let currentColor;
        lines.forEach((line, lineIndex) => {
          let { count: lineGlyphCount, width: lineWidth } = line;
          if (lineGlyphCount > 0) {
            let trailingWhitespaceCount = 0;
            for (let i = lineGlyphCount; i-- && line.glyphAt(i).glyphObj.isWhitespace; ) {
              trailingWhitespaceCount++;
            }
            let lineXOffset2 = 0;
            let justifyAdjust = 0;
            if (textAlign === "center") {
              lineXOffset2 = (maxLineWidth - lineWidth) / 2;
            } else if (textAlign === "right") {
              lineXOffset2 = maxLineWidth - lineWidth;
            } else if (textAlign === "justify" && line.isSoftWrapped) {
              let whitespaceCount = 0;
              for (let i = lineGlyphCount - trailingWhitespaceCount; i--; ) {
                if (line.glyphAt(i).glyphObj.isWhitespace) {
                  whitespaceCount++;
                }
              }
              justifyAdjust = (maxLineWidth - lineWidth) / whitespaceCount;
            }
            if (justifyAdjust || lineXOffset2) {
              let justifyOffset = 0;
              for (let i = 0; i < lineGlyphCount; i++) {
                let glyphInfo = line.glyphAt(i);
                const glyphObj2 = glyphInfo.glyphObj;
                glyphInfo.x += lineXOffset2 + justifyOffset;
                if (justifyAdjust !== 0 && glyphObj2.isWhitespace && i < lineGlyphCount - trailingWhitespaceCount) {
                  justifyOffset += justifyAdjust;
                  glyphInfo.width += justifyAdjust;
                }
              }
            }
            const flips = bidi.getReorderSegments(
              text,
              bidiLevelsResult,
              line.glyphAt(0).charIndex,
              line.glyphAt(line.count - 1).charIndex
            );
            for (let fi = 0; fi < flips.length; fi++) {
              const [start, end] = flips[fi];
              let left = Infinity, right = -Infinity;
              for (let i = 0; i < lineGlyphCount; i++) {
                if (line.glyphAt(i).charIndex >= start) {
                  let startInLine = i, endInLine = i;
                  for (; endInLine < lineGlyphCount; endInLine++) {
                    let info = line.glyphAt(endInLine);
                    if (info.charIndex > end) {
                      break;
                    }
                    if (endInLine < lineGlyphCount - trailingWhitespaceCount) {
                      left = Math.min(left, info.x);
                      right = Math.max(right, info.x + info.width);
                    }
                  }
                  for (let j2 = startInLine; j2 < endInLine; j2++) {
                    const glyphInfo = line.glyphAt(j2);
                    glyphInfo.x = right - (glyphInfo.x + glyphInfo.width - left);
                  }
                  break;
                }
              }
            }
            let glyphObj;
            const setGlyphObj = (g2) => glyphObj = g2;
            for (let i = 0; i < lineGlyphCount; i++) {
              const glyphInfo = line.glyphAt(i);
              glyphObj = glyphInfo.glyphObj;
              const glyphId = glyphObj.index;
              const rtl = bidiLevelsResult.levels[glyphInfo.charIndex] & 1;
              if (rtl) {
                const mirrored = bidi.getMirroredCharacter(text[glyphInfo.charIndex]);
                if (mirrored) {
                  glyphInfo.fontData.fontObj.forEachGlyph(mirrored, 0, 0, setGlyphObj);
                }
              }
              if (includeCaretPositions) {
                const { charIndex, fontData: fontData2 } = glyphInfo;
                const caretLeft = glyphInfo.x + anchorXOffset;
                const caretRight = glyphInfo.x + glyphInfo.width + anchorXOffset;
                caretPositions[charIndex * 4] = rtl ? caretRight : caretLeft;
                caretPositions[charIndex * 4 + 1] = rtl ? caretLeft : caretRight;
                caretPositions[charIndex * 4 + 2] = line.baseline + fontData2.caretBottom + anchorYOffset;
                caretPositions[charIndex * 4 + 3] = line.baseline + fontData2.caretTop + anchorYOffset;
                const ligCount = charIndex - prevCharIndex;
                if (ligCount > 1) {
                  fillLigatureCaretPositions(caretPositions, prevCharIndex, ligCount);
                }
                prevCharIndex = charIndex;
              }
              if (colorRanges) {
                const { charIndex } = glyphInfo;
                while (charIndex > colorCharIndex) {
                  colorCharIndex++;
                  if (colorRanges.hasOwnProperty(colorCharIndex)) {
                    currentColor = colorRanges[colorCharIndex];
                  }
                }
              }
              if (!glyphObj.isWhitespace && !glyphObj.isEmpty) {
                const idx = renderableGlyphIndex++;
                const { fontSizeMult, src: fontSrc, index: fontIndex } = glyphInfo.fontData;
                const fontGlyphData = glyphData[fontSrc] || (glyphData[fontSrc] = {});
                if (!fontGlyphData[glyphId]) {
                  fontGlyphData[glyphId] = {
                    path: glyphObj.path,
                    pathBounds: [glyphObj.xMin, glyphObj.yMin, glyphObj.xMax, glyphObj.yMax]
                  };
                }
                const glyphX = glyphInfo.x + anchorXOffset;
                const glyphY = glyphInfo.y + line.baseline + anchorYOffset;
                glyphPositions[idx * 2] = glyphX;
                glyphPositions[idx * 2 + 1] = glyphY;
                const visX0 = glyphX + glyphObj.xMin * fontSizeMult;
                const visY0 = glyphY + glyphObj.yMin * fontSizeMult;
                const visX1 = glyphX + glyphObj.xMax * fontSizeMult;
                const visY1 = glyphY + glyphObj.yMax * fontSizeMult;
                if (visX0 < visibleBounds[0]) visibleBounds[0] = visX0;
                if (visY0 < visibleBounds[1]) visibleBounds[1] = visY0;
                if (visX1 > visibleBounds[2]) visibleBounds[2] = visX1;
                if (visY1 > visibleBounds[3]) visibleBounds[3] = visY1;
                if (idx % chunkedBoundsSize === 0) {
                  chunk = { start: idx, end: idx, rect: [INF, INF, -INF, -INF] };
                  chunkedBounds.push(chunk);
                }
                chunk.end++;
                const chunkRect = chunk.rect;
                if (visX0 < chunkRect[0]) chunkRect[0] = visX0;
                if (visY0 < chunkRect[1]) chunkRect[1] = visY0;
                if (visX1 > chunkRect[2]) chunkRect[2] = visX1;
                if (visY1 > chunkRect[3]) chunkRect[3] = visY1;
                glyphIds[idx] = glyphId;
                glyphFontIndices[idx] = fontIndex;
                if (colorRanges) {
                  const start = idx * 3;
                  glyphColors[start] = currentColor >> 16 & 255;
                  glyphColors[start + 1] = currentColor >> 8 & 255;
                  glyphColors[start + 2] = currentColor & 255;
                }
              }
            }
          }
        });
        if (caretPositions) {
          const ligCount = text.length - prevCharIndex;
          if (ligCount > 1) {
            fillLigatureCaretPositions(caretPositions, prevCharIndex, ligCount);
          }
        }
      }
      const fontData = [];
      metricsByFont.forEach(({ index, src, unitsPerEm, ascender, descender, lineHeight: lineHeight2, capHeight, xHeight }) => {
        fontData[index] = { src, unitsPerEm, ascender, descender, lineHeight: lineHeight2, capHeight, xHeight };
      });
      timings.typesetting = now2() - typesetStart;
      callback({
        glyphIds,
        //id for each glyph, specific to that glyph's font
        glyphFontIndices,
        //index into fontData for each glyph
        glyphPositions,
        //x,y of each glyph's origin in layout
        glyphData,
        //dict holding data about each glyph appearing in the text
        fontData,
        //data about each font used in the text
        caretPositions,
        //startX,endX,bottomY caret positions for each char
        // caretHeight, //height of cursor from bottom to top - todo per glyph?
        glyphColors,
        //color for each glyph, if color ranges supplied
        chunkedBounds,
        //total rects per (n=chunkedBoundsSize) consecutive glyphs
        fontSize,
        //calculated em height
        topBaseline: anchorYOffset + lines[0].baseline,
        //y coordinate of the top line's baseline
        blockBounds: [
          //bounds for the whole block of text, including vertical padding for lineHeight
          anchorXOffset,
          anchorYOffset - totalHeight,
          anchorXOffset + maxLineWidth,
          anchorYOffset
        ],
        visibleBounds,
        //total bounds of visible text paths, may be larger or smaller than blockBounds
        timings
      });
    });
  }
  function measure(args, callback) {
    typeset({ ...args, metricsOnly: true }, (result) => {
      const [x0, y0, x1, y1] = result.blockBounds;
      callback({
        width: x1 - x0,
        height: y1 - y0
      });
    });
  }
  function parsePercent(str) {
    let match = str.match(/^([\d.]+)%$/);
    let pct = match ? parseFloat(match[1]) : NaN;
    return isNaN(pct) ? 0 : pct / 100;
  }
  function fillLigatureCaretPositions(caretPositions, ligStartIndex, ligCount) {
    const ligStartX = caretPositions[ligStartIndex * 4];
    const ligEndX = caretPositions[ligStartIndex * 4 + 1];
    const ligBottom = caretPositions[ligStartIndex * 4 + 2];
    const ligTop = caretPositions[ligStartIndex * 4 + 3];
    const guessedAdvanceX = (ligEndX - ligStartX) / ligCount;
    for (let i = 0; i < ligCount; i++) {
      const startIndex = (ligStartIndex + i) * 4;
      caretPositions[startIndex] = ligStartX + guessedAdvanceX * i;
      caretPositions[startIndex + 1] = ligStartX + guessedAdvanceX * (i + 1);
      caretPositions[startIndex + 2] = ligBottom;
      caretPositions[startIndex + 3] = ligTop;
    }
  }
  function now2() {
    return (self.performance || Date).now();
  }
  function TextLine() {
    this.data = [];
  }
  const textLineProps = ["glyphObj", "x", "y", "width", "charIndex", "fontData"];
  TextLine.prototype = {
    width: 0,
    lineHeight: 0,
    baseline: 0,
    cap: 0,
    ex: 0,
    isSoftWrapped: false,
    get count() {
      return Math.ceil(this.data.length / textLineProps.length);
    },
    glyphAt(i) {
      let fly = TextLine.flyweight;
      fly.data = this.data;
      fly.index = i;
      return fly;
    },
    splitAt(i) {
      let newLine = new TextLine();
      newLine.data = this.data.splice(i * textLineProps.length);
      return newLine;
    }
  };
  TextLine.flyweight = textLineProps.reduce((obj, prop, i, all) => {
    Object.defineProperty(obj, prop, {
      get() {
        return this.data[this.index * textLineProps.length + i];
      },
      set(val) {
        this.data[this.index * textLineProps.length + i] = val;
      }
    });
    return obj;
  }, { data: null, index: 0 });
  return {
    typeset,
    measure
  };
}
const now = () => (self.performance || Date).now();
const mainThreadGenerator = /* @__PURE__ */ SDFGenerator();
let warned;
function generateSDF(width, height, path, viewBox, distance, exponent, canvas, x, y, channel, useWebGL = true) {
  if (!useWebGL) {
    return generateSDF_JS_Worker(width, height, path, viewBox, distance, exponent, canvas, x, y, channel);
  }
  return generateSDF_GL(width, height, path, viewBox, distance, exponent, canvas, x, y, channel).then(
    null,
    (err) => {
      if (!warned) {
        console.warn(`WebGL SDF generation failed, falling back to JS`, err);
        warned = true;
      }
      return generateSDF_JS_Worker(width, height, path, viewBox, distance, exponent, canvas, x, y, channel);
    }
  );
}
const queue = [];
const chunkTimeBudget = 5;
let timer = 0;
function nextChunk() {
  const start = now();
  while (queue.length && now() - start < chunkTimeBudget) {
    queue.shift()();
  }
  timer = queue.length ? setTimeout(nextChunk, 0) : 0;
}
const generateSDF_GL = (...args) => {
  return new Promise((resolve2, reject) => {
    queue.push(() => {
      const start = now();
      try {
        mainThreadGenerator.webgl.generateIntoCanvas(...args);
        resolve2({ timing: now() - start });
      } catch (err) {
        reject(err);
      }
    });
    if (!timer) {
      timer = setTimeout(nextChunk, 0);
    }
  });
};
const threadCount = 4;
const idleTimeout = 2e3;
const threads = {};
let callNum = 0;
function generateSDF_JS_Worker(width, height, path, viewBox, distance, exponent, canvas, x, y, channel) {
  const workerId = "TroikaTextSDFGenerator_JS_" + callNum++ % threadCount;
  let thread = threads[workerId];
  if (!thread) {
    thread = threads[workerId] = {
      workerModule: defineWorkerModule({
        name: workerId,
        workerId,
        dependencies: [
          SDFGenerator,
          now
        ],
        init(_createSDFGenerator, now2) {
          const generate = _createSDFGenerator().javascript.generate;
          return function(...args) {
            const start = now2();
            const textureData = generate(...args);
            return {
              textureData,
              timing: now2() - start
            };
          };
        },
        getTransferables(result) {
          return [result.textureData.buffer];
        }
      }),
      requests: 0,
      idleTimer: null
    };
  }
  thread.requests++;
  clearTimeout(thread.idleTimer);
  return thread.workerModule(width, height, path, viewBox, distance, exponent).then(({ textureData, timing }) => {
    const start = now();
    const imageData = new Uint8Array(textureData.length * 4);
    for (let i = 0; i < textureData.length; i++) {
      imageData[i * 4 + channel] = textureData[i];
    }
    mainThreadGenerator.webglUtils.renderImageData(canvas, imageData, x, y, width, height, 1 << 3 - channel);
    timing += now() - start;
    if (--thread.requests === 0) {
      thread.idleTimer = setTimeout(() => {
        terminateWorker(workerId);
      }, idleTimeout);
    }
    return { timing };
  });
}
function warmUpSDFCanvas(canvas) {
  if (!canvas._warm) {
    mainThreadGenerator.webgl.isSupported(canvas);
    canvas._warm = true;
  }
}
const resizeWebGLCanvasWithoutClearing = mainThreadGenerator.webglUtils.resizeWebGLCanvasWithoutClearing;
const CONFIG = {
  unicodeFontsURL: null,
  sdfGlyphSize: 64,
  sdfMargin: 1 / 16,
  sdfExponent: 9,
  textureWidth: 2048
};
const tempColor = /* @__PURE__ */ new Color();
function now$1() {
  return (self.performance || Date).now();
}
const atlases = /* @__PURE__ */ Object.create(null);
function getTextRenderInfo(args, callback) {
  args = assign({}, args);
  const totalStart = now$1();
  const fonts = [];
  if (args.font) {
    fonts.push({ label: "user", src: toAbsoluteURL(args.font) });
  }
  args.font = fonts;
  args.text = "" + args.text;
  args.sdfGlyphSize = args.sdfGlyphSize || CONFIG.sdfGlyphSize;
  args.unicodeFontsURL = args.unicodeFontsURL || CONFIG.unicodeFontsURL;
  if (args.colorRanges != null) {
    let colors = {};
    for (let key in args.colorRanges) {
      if (args.colorRanges.hasOwnProperty(key)) {
        let val = args.colorRanges[key];
        if (typeof val !== "number") {
          val = tempColor.set(val).getHex();
        }
        colors[key] = val;
      }
    }
    args.colorRanges = colors;
  }
  Object.freeze(args);
  const { textureWidth, sdfExponent } = CONFIG;
  const { sdfGlyphSize } = args;
  const glyphsPerRow = textureWidth / sdfGlyphSize * 4;
  let atlas = atlases[sdfGlyphSize];
  if (!atlas) {
    const canvas = document.createElement("canvas");
    canvas.width = textureWidth;
    canvas.height = sdfGlyphSize * 256 / glyphsPerRow;
    atlas = atlases[sdfGlyphSize] = {
      glyphCount: 0,
      sdfGlyphSize,
      sdfCanvas: canvas,
      sdfTexture: new Texture(
        canvas,
        void 0,
        void 0,
        void 0,
        LinearFilter,
        LinearFilter
      ),
      contextLost: false,
      glyphsByFont: /* @__PURE__ */ new Map()
    };
    atlas.sdfTexture.generateMipmaps = false;
    initContextLossHandling(atlas);
  }
  const { sdfTexture, sdfCanvas } = atlas;
  const typeset = typesetInWorker;
  typeset(args).then((result) => {
    const { glyphIds, glyphFontIndices, fontData, glyphPositions, fontSize, timings } = result;
    const neededSDFs = [];
    const glyphBounds = new Float32Array(glyphIds.length * 4);
    let boundsIdx = 0;
    let positionsIdx = 0;
    const quadsStart = now$1();
    const fontGlyphMaps = fontData.map((font) => {
      let map = atlas.glyphsByFont.get(font.src);
      if (!map) {
        atlas.glyphsByFont.set(font.src, map = /* @__PURE__ */ new Map());
      }
      return map;
    });
    glyphIds.forEach((glyphId, i) => {
      const fontIndex = glyphFontIndices[i];
      const { src: fontSrc, unitsPerEm } = fontData[fontIndex];
      let glyphInfo = fontGlyphMaps[fontIndex].get(glyphId);
      if (!glyphInfo) {
        const { path, pathBounds } = result.glyphData[fontSrc][glyphId];
        const fontUnitsMargin = Math.max(pathBounds[2] - pathBounds[0], pathBounds[3] - pathBounds[1]) / sdfGlyphSize * (CONFIG.sdfMargin * sdfGlyphSize + 0.5);
        const atlasIndex = atlas.glyphCount++;
        const sdfViewBox2 = [
          pathBounds[0] - fontUnitsMargin,
          pathBounds[1] - fontUnitsMargin,
          pathBounds[2] + fontUnitsMargin,
          pathBounds[3] + fontUnitsMargin
        ];
        fontGlyphMaps[fontIndex].set(glyphId, glyphInfo = { path, atlasIndex, sdfViewBox: sdfViewBox2 });
        neededSDFs.push(glyphInfo);
      }
      const { sdfViewBox } = glyphInfo;
      const posX = glyphPositions[positionsIdx++];
      const posY = glyphPositions[positionsIdx++];
      const fontSizeMult = fontSize / unitsPerEm;
      glyphBounds[boundsIdx++] = posX + sdfViewBox[0] * fontSizeMult;
      glyphBounds[boundsIdx++] = posY + sdfViewBox[1] * fontSizeMult;
      glyphBounds[boundsIdx++] = posX + sdfViewBox[2] * fontSizeMult;
      glyphBounds[boundsIdx++] = posY + sdfViewBox[3] * fontSizeMult;
      glyphIds[i] = glyphInfo.atlasIndex;
    });
    timings.quads = (timings.quads || 0) + (now$1() - quadsStart);
    const sdfStart = now$1();
    timings.sdf = {};
    const currentHeight = sdfCanvas.height;
    const neededRows = Math.ceil(atlas.glyphCount / glyphsPerRow);
    const neededHeight = Math.pow(2, Math.ceil(Math.log2(neededRows * sdfGlyphSize)));
    if (neededHeight > currentHeight) {
      console.info(`Increasing SDF texture size ${currentHeight}->${neededHeight}`);
      resizeWebGLCanvasWithoutClearing(sdfCanvas, textureWidth, neededHeight);
      sdfTexture.dispose();
    }
    Promise.all(neededSDFs.map(
      (glyphInfo) => generateGlyphSDF(glyphInfo, atlas, args.gpuAccelerateSDF).then(({ timing }) => {
        timings.sdf[glyphInfo.atlasIndex] = timing;
      })
    )).then(() => {
      if (neededSDFs.length && !atlas.contextLost) {
        safariPre15Workaround(atlas);
        sdfTexture.needsUpdate = true;
      }
      timings.sdfTotal = now$1() - sdfStart;
      timings.total = now$1() - totalStart;
      callback(Object.freeze({
        parameters: args,
        sdfTexture,
        sdfGlyphSize,
        sdfExponent,
        glyphBounds,
        glyphAtlasIndices: glyphIds,
        glyphColors: result.glyphColors,
        caretPositions: result.caretPositions,
        chunkedBounds: result.chunkedBounds,
        ascender: result.ascender,
        descender: result.descender,
        lineHeight: result.lineHeight,
        capHeight: result.capHeight,
        xHeight: result.xHeight,
        topBaseline: result.topBaseline,
        blockBounds: result.blockBounds,
        visibleBounds: result.visibleBounds,
        timings: result.timings
      }));
    });
  });
  Promise.resolve().then(() => {
    if (!atlas.contextLost) {
      warmUpSDFCanvas(sdfCanvas);
    }
  });
}
function generateGlyphSDF({ path, atlasIndex, sdfViewBox }, { sdfGlyphSize, sdfCanvas, contextLost }, useGPU) {
  if (contextLost) {
    return Promise.resolve({ timing: -1 });
  }
  const { textureWidth, sdfExponent } = CONFIG;
  const maxDist = Math.max(sdfViewBox[2] - sdfViewBox[0], sdfViewBox[3] - sdfViewBox[1]);
  const squareIndex = Math.floor(atlasIndex / 4);
  const x = squareIndex % (textureWidth / sdfGlyphSize) * sdfGlyphSize;
  const y = Math.floor(squareIndex / (textureWidth / sdfGlyphSize)) * sdfGlyphSize;
  const channel = atlasIndex % 4;
  return generateSDF(sdfGlyphSize, sdfGlyphSize, path, sdfViewBox, maxDist, sdfExponent, sdfCanvas, x, y, channel, useGPU);
}
function initContextLossHandling(atlas) {
  const canvas = atlas.sdfCanvas;
  canvas.addEventListener("webglcontextlost", (event) => {
    console.log("Context Lost", event);
    event.preventDefault();
    atlas.contextLost = true;
  });
  canvas.addEventListener("webglcontextrestored", (event) => {
    console.log("Context Restored", event);
    atlas.contextLost = false;
    const promises = [];
    atlas.glyphsByFont.forEach((glyphMap) => {
      glyphMap.forEach((glyph) => {
        promises.push(generateGlyphSDF(glyph, atlas, true));
      });
    });
    Promise.all(promises).then(() => {
      safariPre15Workaround(atlas);
      atlas.sdfTexture.needsUpdate = true;
    });
  });
}
function preloadFont({ font, characters, sdfGlyphSize }, callback) {
  let text = Array.isArray(characters) ? characters.join("\n") : "" + characters;
  getTextRenderInfo({ font, sdfGlyphSize, text }, callback);
}
function assign(toObj, fromObj) {
  for (let key in fromObj) {
    if (fromObj.hasOwnProperty(key)) {
      toObj[key] = fromObj[key];
    }
  }
  return toObj;
}
let linkEl;
function toAbsoluteURL(path) {
  if (!linkEl) {
    linkEl = typeof document === "undefined" ? {} : document.createElement("a");
  }
  linkEl.href = path;
  return linkEl.href;
}
function safariPre15Workaround(atlas) {
  if (typeof createImageBitmap !== "function") {
    console.info("Safari<15: applying SDF canvas workaround");
    const { sdfCanvas, sdfTexture } = atlas;
    const { width, height } = sdfCanvas;
    const gl = atlas.sdfCanvas.getContext("webgl");
    let pixels = sdfTexture.image.data;
    if (!pixels || pixels.length !== width * height * 4) {
      pixels = new Uint8Array(width * height * 4);
      sdfTexture.image = { width, height, data: pixels };
      sdfTexture.flipY = false;
      sdfTexture.isDataTexture = true;
    }
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  }
}
const typesetterWorkerModule = /* @__PURE__ */ defineWorkerModule({
  name: "Typesetter",
  dependencies: [
    createTypesetter,
    fontResolverWorkerModule,
    bidiFactory
  ],
  init(createTypesetter2, fontResolver, bidiFactory2) {
    return createTypesetter2(fontResolver, bidiFactory2());
  }
});
const typesetInWorker = /* @__PURE__ */ defineWorkerModule({
  name: "Typesetter",
  dependencies: [
    typesetterWorkerModule
  ],
  init(typesetter) {
    return function(args) {
      return new Promise((resolve2) => {
        typesetter.typeset(args, resolve2);
      });
    };
  },
  getTransferables(result) {
    const transferables = [];
    for (let p2 in result) {
      if (result[p2] && result[p2].buffer) {
        transferables.push(result[p2].buffer);
      }
    }
    return transferables;
  }
});
typesetInWorker.onMainThread;
const templateGeometries = {};
function getTemplateGeometry(detail) {
  let geom = templateGeometries[detail];
  if (!geom) {
    geom = templateGeometries[detail] = new PlaneGeometry(1, 1, detail, detail).translate(0.5, 0.5, 0);
  }
  return geom;
}
const glyphBoundsAttrName = "aTroikaGlyphBounds";
const glyphIndexAttrName = "aTroikaGlyphIndex";
const glyphColorAttrName = "aTroikaGlyphColor";
class GlyphsGeometry extends InstancedBufferGeometry {
  constructor() {
    super();
    this.detail = 1;
    this.curveRadius = 0;
    this.groups = [
      { start: 0, count: Infinity, materialIndex: 0 },
      { start: 0, count: Infinity, materialIndex: 1 }
    ];
    this.boundingSphere = new Sphere();
    this.boundingBox = new Box3();
  }
  computeBoundingSphere() {
  }
  computeBoundingBox() {
  }
  set detail(detail) {
    if (detail !== this._detail) {
      this._detail = detail;
      if (typeof detail !== "number" || detail < 1) {
        detail = 1;
      }
      let tpl = getTemplateGeometry(detail);
      ["position", "normal", "uv"].forEach((attr) => {
        this.attributes[attr] = tpl.attributes[attr].clone();
      });
      this.setIndex(tpl.getIndex().clone());
    }
  }
  get detail() {
    return this._detail;
  }
  set curveRadius(r2) {
    if (r2 !== this._curveRadius) {
      this._curveRadius = r2;
      this._updateBounds();
    }
  }
  get curveRadius() {
    return this._curveRadius;
  }
  /**
   * Update the geometry for a new set of glyphs.
   * @param {Float32Array} glyphBounds - An array holding the planar bounds for all glyphs
   *        to be rendered, 4 entries for each glyph: x1,x2,y1,y1
   * @param {Float32Array} glyphAtlasIndices - An array holding the index of each glyph within
   *        the SDF atlas texture.
   * @param {Array} blockBounds - An array holding the [minX, minY, maxX, maxY] across all glyphs
   * @param {Array} [chunkedBounds] - An array of objects describing bounds for each chunk of N
   *        consecutive glyphs: `{start:N, end:N, rect:[minX, minY, maxX, maxY]}`. This can be
   *        used with `applyClipRect` to choose an optimized `instanceCount`.
   * @param {Uint8Array} [glyphColors] - An array holding r,g,b values for each glyph.
   */
  updateGlyphs(glyphBounds, glyphAtlasIndices, blockBounds, chunkedBounds, glyphColors) {
    this.updateAttributeData(glyphBoundsAttrName, glyphBounds, 4);
    this.updateAttributeData(glyphIndexAttrName, glyphAtlasIndices, 1);
    this.updateAttributeData(glyphColorAttrName, glyphColors, 3);
    this._blockBounds = blockBounds;
    this._chunkedBounds = chunkedBounds;
    this.instanceCount = glyphAtlasIndices.length;
    this._updateBounds();
  }
  _updateBounds() {
    const bounds = this._blockBounds;
    if (bounds) {
      const { curveRadius, boundingBox: bbox } = this;
      if (curveRadius) {
        const { PI, floor, min, max: max2, sin, cos } = Math;
        const halfPi = PI / 2;
        const twoPi = PI * 2;
        const absR = Math.abs(curveRadius);
        const leftAngle = bounds[0] / absR;
        const rightAngle = bounds[2] / absR;
        const minX = floor((leftAngle + halfPi) / twoPi) !== floor((rightAngle + halfPi) / twoPi) ? -absR : min(sin(leftAngle) * absR, sin(rightAngle) * absR);
        const maxX = floor((leftAngle - halfPi) / twoPi) !== floor((rightAngle - halfPi) / twoPi) ? absR : max2(sin(leftAngle) * absR, sin(rightAngle) * absR);
        const maxZ = floor((leftAngle + PI) / twoPi) !== floor((rightAngle + PI) / twoPi) ? absR * 2 : max2(absR - cos(leftAngle) * absR, absR - cos(rightAngle) * absR);
        bbox.min.set(minX, bounds[1], curveRadius < 0 ? -maxZ : 0);
        bbox.max.set(maxX, bounds[3], curveRadius < 0 ? 0 : maxZ);
      } else {
        bbox.min.set(bounds[0], bounds[1], 0);
        bbox.max.set(bounds[2], bounds[3], 0);
      }
      bbox.getBoundingSphere(this.boundingSphere);
    }
  }
  /**
   * Given a clipping rect, and the chunkedBounds from the last updateGlyphs call, choose the lowest
   * `instanceCount` that will show all glyphs within the clipped view. This is an optimization
   * for long blocks of text that are clipped, to skip vertex shader evaluation for glyphs that would
   * be clipped anyway.
   *
   * Note that since `drawElementsInstanced[ANGLE]` only accepts an instance count and not a starting
   * offset, this optimization becomes less effective as the clipRect moves closer to the end of the
   * text block. We could fix that by switching from instancing to a full geometry with a drawRange,
   * but at the expense of much larger attribute buffers (see classdoc above.)
   *
   * @param {Vector4} clipRect
   */
  applyClipRect(clipRect) {
    let count = this.getAttribute(glyphIndexAttrName).count;
    let chunks = this._chunkedBounds;
    if (chunks) {
      for (let i = chunks.length; i--; ) {
        count = chunks[i].end;
        let rect = chunks[i].rect;
        if (rect[1] < clipRect.w && rect[3] > clipRect.y && rect[0] < clipRect.z && rect[2] > clipRect.x) {
          break;
        }
      }
    }
    this.instanceCount = count;
  }
  /**
   * Utility for updating instance attributes with automatic resizing
   */
  updateAttributeData(attrName, newArray, itemSize) {
    const attr = this.getAttribute(attrName);
    if (newArray) {
      if (attr && attr.array.length === newArray.length) {
        attr.array.set(newArray);
        attr.needsUpdate = true;
      } else {
        this.setAttribute(attrName, new InstancedBufferAttribute(newArray, itemSize));
        delete this._maxInstanceCount;
        this.dispose();
      }
    } else if (attr) {
      this.deleteAttribute(attrName);
    }
  }
}
const VERTEX_DEFS = `
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`;
const VERTEX_TRANSFORM = `
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);

${""}
float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`;
const FRAGMENT_DEFS = `
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  ${""}
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  ${""}
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  ${""}

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`;
const FRAGMENT_TRANSFORM = `
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;
function createTextDerivedMaterial(baseMaterial) {
  const textMaterial = createDerivedMaterial(baseMaterial, {
    chained: true,
    extensions: {
      derivatives: true
    },
    uniforms: {
      uTroikaSDFTexture: { value: null },
      uTroikaSDFTextureSize: { value: new Vector2() },
      uTroikaSDFGlyphSize: { value: 0 },
      uTroikaSDFExponent: { value: 0 },
      uTroikaTotalBounds: { value: new Vector4(0, 0, 0, 0) },
      uTroikaClipRect: { value: new Vector4(0, 0, 0, 0) },
      uTroikaEdgeOffset: { value: 0 },
      uTroikaFillOpacity: { value: 1 },
      uTroikaPositionOffset: { value: new Vector2() },
      uTroikaCurveRadius: { value: 0 },
      uTroikaBlurRadius: { value: 0 },
      uTroikaStrokeWidth: { value: 0 },
      uTroikaStrokeColor: { value: new Color() },
      uTroikaStrokeOpacity: { value: 1 },
      uTroikaOrient: { value: new Matrix3() },
      uTroikaUseGlyphColors: { value: true },
      uTroikaSDFDebug: { value: false }
    },
    vertexDefs: VERTEX_DEFS,
    vertexTransform: VERTEX_TRANSFORM,
    fragmentDefs: FRAGMENT_DEFS,
    fragmentColorTransform: FRAGMENT_TRANSFORM,
    customRewriter({ vertexShader: vertexShader2, fragmentShader: fragmentShader2 }) {
      let uDiffuseRE = /\buniform\s+vec3\s+diffuse\b/;
      if (uDiffuseRE.test(fragmentShader2)) {
        fragmentShader2 = fragmentShader2.replace(uDiffuseRE, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor");
        if (!uDiffuseRE.test(vertexShader2)) {
          vertexShader2 = vertexShader2.replace(
            voidMainRegExp,
            "uniform vec3 diffuse;\n$&\nvTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;\n"
          );
        }
      }
      return { vertexShader: vertexShader2, fragmentShader: fragmentShader2 };
    }
  });
  textMaterial.transparent = true;
  textMaterial.forceSinglePass = true;
  Object.defineProperties(textMaterial, {
    isTroikaTextMaterial: { value: true },
    // WebGLShadowMap reverses the side of the shadow material by default, which fails
    // for planes, so here we force the `shadowSide` to always match the main side.
    shadowSide: {
      get() {
        return this.side;
      },
      set() {
      }
    }
  });
  return textMaterial;
}
const defaultMaterial = /* @__PURE__ */ new MeshBasicMaterial({
  color: 16777215,
  side: DoubleSide,
  transparent: true
});
const defaultStrokeColor = 8421504;
const tempMat4 = /* @__PURE__ */ new Matrix4();
const tempVec3a = /* @__PURE__ */ new Vector3();
const tempVec3b = /* @__PURE__ */ new Vector3();
const tempArray = [];
const origin = /* @__PURE__ */ new Vector3();
const defaultOrient = "+x+y";
function first(o2) {
  return Array.isArray(o2) ? o2[0] : o2;
}
let getFlatRaycastMesh = () => {
  const mesh = new Mesh(
    new PlaneGeometry(1, 1),
    defaultMaterial
  );
  getFlatRaycastMesh = () => mesh;
  return mesh;
};
let getCurvedRaycastMesh = () => {
  const mesh = new Mesh(
    new PlaneGeometry(1, 1, 32, 1),
    defaultMaterial
  );
  getCurvedRaycastMesh = () => mesh;
  return mesh;
};
const syncStartEvent = { type: "syncstart" };
const syncCompleteEvent = { type: "synccomplete" };
const SYNCABLE_PROPS = [
  "font",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "lang",
  "letterSpacing",
  "lineHeight",
  "maxWidth",
  "overflowWrap",
  "text",
  "direction",
  "textAlign",
  "textIndent",
  "whiteSpace",
  "anchorX",
  "anchorY",
  "colorRanges",
  "sdfGlyphSize"
];
const COPYABLE_PROPS = SYNCABLE_PROPS.concat(
  "material",
  "color",
  "depthOffset",
  "clipRect",
  "curveRadius",
  "orientation",
  "glyphGeometryDetail"
);
let Text$1 = class Text extends Mesh {
  constructor() {
    const geometry = new GlyphsGeometry();
    super(geometry, null);
    this.text = "";
    this.anchorX = 0;
    this.anchorY = 0;
    this.curveRadius = 0;
    this.direction = "auto";
    this.font = null;
    this.unicodeFontsURL = null;
    this.fontSize = 0.1;
    this.fontWeight = "normal";
    this.fontStyle = "normal";
    this.lang = null;
    this.letterSpacing = 0;
    this.lineHeight = "normal";
    this.maxWidth = Infinity;
    this.overflowWrap = "normal";
    this.textAlign = "left";
    this.textIndent = 0;
    this.whiteSpace = "normal";
    this.material = null;
    this.color = null;
    this.colorRanges = null;
    this.outlineWidth = 0;
    this.outlineColor = 0;
    this.outlineOpacity = 1;
    this.outlineBlur = 0;
    this.outlineOffsetX = 0;
    this.outlineOffsetY = 0;
    this.strokeWidth = 0;
    this.strokeColor = defaultStrokeColor;
    this.strokeOpacity = 1;
    this.fillOpacity = 1;
    this.depthOffset = 0;
    this.clipRect = null;
    this.orientation = defaultOrient;
    this.glyphGeometryDetail = 1;
    this.sdfGlyphSize = null;
    this.gpuAccelerateSDF = true;
    this.debugSDF = false;
  }
  /**
   * Updates the text rendering according to the current text-related configuration properties.
   * This is an async process, so you can pass in a callback function to be executed when it
   * finishes.
   * @param {function} [callback]
   */
  sync(callback) {
    if (this._needsSync) {
      this._needsSync = false;
      if (this._isSyncing) {
        (this._queuedSyncs || (this._queuedSyncs = [])).push(callback);
      } else {
        this._isSyncing = true;
        this.dispatchEvent(syncStartEvent);
        getTextRenderInfo({
          text: this.text,
          font: this.font,
          lang: this.lang,
          fontSize: this.fontSize || 0.1,
          fontWeight: this.fontWeight || "normal",
          fontStyle: this.fontStyle || "normal",
          letterSpacing: this.letterSpacing || 0,
          lineHeight: this.lineHeight || "normal",
          maxWidth: this.maxWidth,
          direction: this.direction || "auto",
          textAlign: this.textAlign,
          textIndent: this.textIndent,
          whiteSpace: this.whiteSpace,
          overflowWrap: this.overflowWrap,
          anchorX: this.anchorX,
          anchorY: this.anchorY,
          colorRanges: this.colorRanges,
          includeCaretPositions: true,
          //TODO parameterize
          sdfGlyphSize: this.sdfGlyphSize,
          gpuAccelerateSDF: this.gpuAccelerateSDF,
          unicodeFontsURL: this.unicodeFontsURL
        }, (textRenderInfo) => {
          this._isSyncing = false;
          this._textRenderInfo = textRenderInfo;
          this.geometry.updateGlyphs(
            textRenderInfo.glyphBounds,
            textRenderInfo.glyphAtlasIndices,
            textRenderInfo.blockBounds,
            textRenderInfo.chunkedBounds,
            textRenderInfo.glyphColors
          );
          const queued = this._queuedSyncs;
          if (queued) {
            this._queuedSyncs = null;
            this._needsSync = true;
            this.sync(() => {
              queued.forEach((fn) => fn && fn());
            });
          }
          this.dispatchEvent(syncCompleteEvent);
          if (callback) {
            callback();
          }
        });
      }
    }
  }
  /**
   * Initiate a sync if needed - note it won't complete until next frame at the
   * earliest so if possible it's a good idea to call sync() manually as soon as
   * all the properties have been set.
   * @override
   */
  onBeforeRender(renderer, scene, camera, geometry, material, group) {
    this.sync();
    if (material.isTroikaTextMaterial) {
      this._prepareForRender(material);
    }
  }
  /**
   * Shortcut to dispose the geometry specific to this instance.
   * Note: we don't also dispose the derived material here because if anything else is
   * sharing the same base material it will result in a pause next frame as the program
   * is recompiled. Instead users can dispose the base material manually, like normal,
   * and we'll also dispose the derived material at that time.
   */
  dispose() {
    this.geometry.dispose();
  }
  /**
   * @property {TroikaTextRenderInfo|null} textRenderInfo
   * @readonly
   * The current processed rendering data for this TextMesh, returned by the TextBuilder after
   * a `sync()` call. This will be `null` initially, and may be stale for a short period until
   * the asynchrous `sync()` process completes.
   */
  get textRenderInfo() {
    return this._textRenderInfo || null;
  }
  /**
   * Create the text derived material from the base material. Can be overridden to use a custom
   * derived material.
   */
  createDerivedMaterial(baseMaterial) {
    return createTextDerivedMaterial(baseMaterial);
  }
  // Handler for automatically wrapping the base material with our upgrades. We do the wrapping
  // lazily on _read_ rather than write to avoid unnecessary wrapping on transient values.
  get material() {
    let derivedMaterial = this._derivedMaterial;
    const baseMaterial = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = defaultMaterial.clone());
    if (!derivedMaterial || !derivedMaterial.isDerivedFrom(baseMaterial)) {
      derivedMaterial = this._derivedMaterial = this.createDerivedMaterial(baseMaterial);
      baseMaterial.addEventListener("dispose", function onDispose() {
        baseMaterial.removeEventListener("dispose", onDispose);
        derivedMaterial.dispose();
      });
    }
    if (this.hasOutline()) {
      let outlineMaterial = derivedMaterial._outlineMtl;
      if (!outlineMaterial) {
        outlineMaterial = derivedMaterial._outlineMtl = Object.create(derivedMaterial, {
          id: { value: derivedMaterial.id + 0.1 }
        });
        outlineMaterial.isTextOutlineMaterial = true;
        outlineMaterial.depthWrite = false;
        outlineMaterial.map = null;
        derivedMaterial.addEventListener("dispose", function onDispose() {
          derivedMaterial.removeEventListener("dispose", onDispose);
          outlineMaterial.dispose();
        });
      }
      return [
        outlineMaterial,
        derivedMaterial
      ];
    } else {
      return derivedMaterial;
    }
  }
  set material(baseMaterial) {
    if (baseMaterial && baseMaterial.isTroikaTextMaterial) {
      this._derivedMaterial = baseMaterial;
      this._baseMaterial = baseMaterial.baseMaterial;
    } else {
      this._baseMaterial = baseMaterial;
    }
  }
  hasOutline() {
    return !!(this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY);
  }
  get glyphGeometryDetail() {
    return this.geometry.detail;
  }
  set glyphGeometryDetail(detail) {
    this.geometry.detail = detail;
  }
  get curveRadius() {
    return this.geometry.curveRadius;
  }
  set curveRadius(r2) {
    this.geometry.curveRadius = r2;
  }
  // Create and update material for shadows upon request:
  get customDepthMaterial() {
    return first(this.material).getDepthMaterial();
  }
  set customDepthMaterial(m2) {
  }
  get customDistanceMaterial() {
    return first(this.material).getDistanceMaterial();
  }
  set customDistanceMaterial(m2) {
  }
  _prepareForRender(material) {
    const isOutline = material.isTextOutlineMaterial;
    const uniforms = material.uniforms;
    const textInfo = this.textRenderInfo;
    if (textInfo) {
      const { sdfTexture, blockBounds } = textInfo;
      uniforms.uTroikaSDFTexture.value = sdfTexture;
      uniforms.uTroikaSDFTextureSize.value.set(sdfTexture.image.width, sdfTexture.image.height);
      uniforms.uTroikaSDFGlyphSize.value = textInfo.sdfGlyphSize;
      uniforms.uTroikaSDFExponent.value = textInfo.sdfExponent;
      uniforms.uTroikaTotalBounds.value.fromArray(blockBounds);
      uniforms.uTroikaUseGlyphColors.value = !isOutline && !!textInfo.glyphColors;
      let distanceOffset = 0;
      let blurRadius = 0;
      let strokeWidth = 0;
      let fillOpacity;
      let strokeOpacity;
      let strokeColor;
      let offsetX = 0;
      let offsetY = 0;
      if (isOutline) {
        let { outlineWidth, outlineOffsetX, outlineOffsetY, outlineBlur, outlineOpacity } = this;
        distanceOffset = this._parsePercent(outlineWidth) || 0;
        blurRadius = Math.max(0, this._parsePercent(outlineBlur) || 0);
        fillOpacity = outlineOpacity;
        offsetX = this._parsePercent(outlineOffsetX) || 0;
        offsetY = this._parsePercent(outlineOffsetY) || 0;
      } else {
        strokeWidth = Math.max(0, this._parsePercent(this.strokeWidth) || 0);
        if (strokeWidth) {
          strokeColor = this.strokeColor;
          uniforms.uTroikaStrokeColor.value.set(strokeColor == null ? defaultStrokeColor : strokeColor);
          strokeOpacity = this.strokeOpacity;
          if (strokeOpacity == null) strokeOpacity = 1;
        }
        fillOpacity = this.fillOpacity;
      }
      uniforms.uTroikaEdgeOffset.value = distanceOffset;
      uniforms.uTroikaPositionOffset.value.set(offsetX, offsetY);
      uniforms.uTroikaBlurRadius.value = blurRadius;
      uniforms.uTroikaStrokeWidth.value = strokeWidth;
      uniforms.uTroikaStrokeOpacity.value = strokeOpacity;
      uniforms.uTroikaFillOpacity.value = fillOpacity == null ? 1 : fillOpacity;
      uniforms.uTroikaCurveRadius.value = this.curveRadius || 0;
      let clipRect = this.clipRect;
      if (clipRect && Array.isArray(clipRect) && clipRect.length === 4) {
        uniforms.uTroikaClipRect.value.fromArray(clipRect);
      } else {
        const pad = (this.fontSize || 0.1) * 100;
        uniforms.uTroikaClipRect.value.set(
          blockBounds[0] - pad,
          blockBounds[1] - pad,
          blockBounds[2] + pad,
          blockBounds[3] + pad
        );
      }
      this.geometry.applyClipRect(uniforms.uTroikaClipRect.value);
    }
    uniforms.uTroikaSDFDebug.value = !!this.debugSDF;
    material.polygonOffset = !!this.depthOffset;
    material.polygonOffsetFactor = material.polygonOffsetUnits = this.depthOffset || 0;
    const color = isOutline ? this.outlineColor || 0 : this.color;
    if (color == null) {
      delete material.color;
    } else {
      const colorObj = material.hasOwnProperty("color") ? material.color : material.color = new Color();
      if (color !== colorObj._input || typeof color === "object") {
        colorObj.set(colorObj._input = color);
      }
    }
    let orient = this.orientation || defaultOrient;
    if (orient !== material._orientation) {
      let rotMat = uniforms.uTroikaOrient.value;
      orient = orient.replace(/[^-+xyz]/g, "");
      let match = orient !== defaultOrient && orient.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (match) {
        let [, hSign, hAxis, vSign, vAxis] = match;
        tempVec3a.set(0, 0, 0)[hAxis] = hSign === "-" ? 1 : -1;
        tempVec3b.set(0, 0, 0)[vAxis] = vSign === "-" ? -1 : 1;
        tempMat4.lookAt(origin, tempVec3a.cross(tempVec3b), tempVec3b);
        rotMat.setFromMatrix4(tempMat4);
      } else {
        rotMat.identity();
      }
      material._orientation = orient;
    }
  }
  _parsePercent(value) {
    if (typeof value === "string") {
      let match = value.match(/^(-?[\d.]+)%$/);
      let pct = match ? parseFloat(match[1]) : NaN;
      value = (isNaN(pct) ? 0 : pct / 100) * this.fontSize;
    }
    return value;
  }
  /**
   * Translate a point in local space to an x/y in the text plane.
   */
  localPositionToTextCoords(position, target = new Vector2()) {
    target.copy(position);
    const r2 = this.curveRadius;
    if (r2) {
      target.x = Math.atan2(position.x, Math.abs(r2) - Math.abs(position.z)) * Math.abs(r2);
    }
    return target;
  }
  /**
   * Translate a point in world space to an x/y in the text plane.
   */
  worldPositionToTextCoords(position, target = new Vector2()) {
    tempVec3a.copy(position);
    return this.localPositionToTextCoords(this.worldToLocal(tempVec3a), target);
  }
  /**
   * @override Custom raycasting to test against the whole text block's max rectangular bounds
   * TODO is there any reason to make this more granular, like within individual line or glyph rects?
   */
  raycast(raycaster, intersects) {
    const { textRenderInfo, curveRadius } = this;
    if (textRenderInfo) {
      const bounds = textRenderInfo.blockBounds;
      const raycastMesh = curveRadius ? getCurvedRaycastMesh() : getFlatRaycastMesh();
      const geom = raycastMesh.geometry;
      const { position, uv } = geom.attributes;
      for (let i = 0; i < uv.count; i++) {
        let x = bounds[0] + uv.getX(i) * (bounds[2] - bounds[0]);
        const y = bounds[1] + uv.getY(i) * (bounds[3] - bounds[1]);
        let z = 0;
        if (curveRadius) {
          z = curveRadius - Math.cos(x / curveRadius) * curveRadius;
          x = Math.sin(x / curveRadius) * curveRadius;
        }
        position.setXYZ(i, x, y, z);
      }
      geom.boundingSphere = this.geometry.boundingSphere;
      geom.boundingBox = this.geometry.boundingBox;
      raycastMesh.matrixWorld = this.matrixWorld;
      raycastMesh.material.side = this.material.side;
      tempArray.length = 0;
      raycastMesh.raycast(raycaster, tempArray);
      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i].object = this;
        intersects.push(tempArray[i]);
      }
    }
  }
  copy(source) {
    const geom = this.geometry;
    super.copy(source);
    this.geometry = geom;
    COPYABLE_PROPS.forEach((prop) => {
      this[prop] = source[prop];
    });
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
SYNCABLE_PROPS.forEach((prop) => {
  const privateKey = "_private_" + prop;
  Object.defineProperty(Text$1.prototype, prop, {
    get() {
      return this[privateKey];
    },
    set(value) {
      if (value !== this[privateKey]) {
        this[privateKey] = value;
        this._needsSync = true;
      }
    }
  });
});
new Box3();
new Color();
const Text2 = /* @__PURE__ */ reactExports.forwardRef(({
  sdfGlyphSize = 64,
  anchorX = "center",
  anchorY = "middle",
  font,
  fontSize = 1,
  children,
  characters,
  onSync,
  ...props
}, ref) => {
  const invalidate2 = useThree(({
    invalidate: invalidate3
  }) => invalidate3);
  const [troikaMesh] = reactExports.useState(() => new Text$1());
  const [nodes, text] = reactExports.useMemo(() => {
    const n = [];
    let t2 = "";
    reactExports.Children.forEach(children, (child) => {
      if (typeof child === "string" || typeof child === "number") {
        t2 += child;
      } else {
        n.push(child);
      }
    });
    return [n, t2];
  }, [children]);
  suspend(() => new Promise((res) => preloadFont({
    font,
    characters
  }, res)), ["troika-text", font, characters]);
  reactExports.useLayoutEffect(() => void troikaMesh.sync(() => {
    invalidate2();
    if (onSync) onSync(troikaMesh);
  }));
  reactExports.useEffect(() => {
    return () => troikaMesh.dispose();
  }, [troikaMesh]);
  return /* @__PURE__ */ reactExports.createElement("primitive", _extends({
    object: troikaMesh,
    ref,
    font,
    text,
    anchorX,
    anchorY,
    fontSize,
    sdfGlyphSize
  }, props), nodes);
});
let dracoLoader = null;
let decoderPath = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
function extensions(useDraco = true, useMeshopt = true, extendLoader) {
  return (loader) => {
    if (extendLoader) {
      extendLoader(loader);
    }
    if (useDraco) {
      if (!dracoLoader) {
        dracoLoader = new DRACOLoader();
      }
      dracoLoader.setDecoderPath(typeof useDraco === "string" ? useDraco : decoderPath);
      loader.setDRACOLoader(dracoLoader);
    }
    if (useMeshopt) {
      loader.setMeshoptDecoder(typeof MeshoptDecoder === "function" ? MeshoptDecoder() : MeshoptDecoder);
    }
  };
}
const useGLTF = (path, useDraco, useMeshopt, extendLoader) => useLoader(GLTFLoader, path, extensions(useDraco, useMeshopt, extendLoader));
useGLTF.preload = (path, useDraco, useMeshopt, extendLoader) => useLoader.preload(GLTFLoader, path, extensions(useDraco, useMeshopt, extendLoader));
useGLTF.clear = (path) => useLoader.clear(GLTFLoader, path);
useGLTF.setDecoderPath = (path) => {
  decoderPath = path;
};
const OrbitControls2 = /* @__PURE__ */ reactExports.forwardRef(({
  makeDefault,
  camera,
  regress,
  domElement,
  enableDamping = true,
  keyEvents = false,
  onChange,
  onStart,
  onEnd,
  ...restProps
}, ref) => {
  const invalidate2 = useThree((state2) => state2.invalidate);
  const defaultCamera = useThree((state2) => state2.camera);
  const gl = useThree((state2) => state2.gl);
  const events = useThree((state2) => state2.events);
  const setEvents = useThree((state2) => state2.setEvents);
  const set = useThree((state2) => state2.set);
  const get = useThree((state2) => state2.get);
  const performance = useThree((state2) => state2.performance);
  const explCamera = camera || defaultCamera;
  const explDomElement = domElement || events.connected || gl.domElement;
  const controls = reactExports.useMemo(() => new OrbitControls$1(explCamera), [explCamera]);
  useFrame(() => {
    if (controls.enabled) controls.update();
  }, -1);
  reactExports.useEffect(() => {
    if (keyEvents) {
      controls.connect(keyEvents === true ? explDomElement : keyEvents);
    }
    controls.connect(explDomElement);
    return () => void controls.dispose();
  }, [keyEvents, explDomElement, regress, controls, invalidate2]);
  reactExports.useEffect(() => {
    const callback = (e2) => {
      invalidate2();
      if (regress) performance.regress();
      if (onChange) onChange(e2);
    };
    const onStartCb = (e2) => {
      if (onStart) onStart(e2);
    };
    const onEndCb = (e2) => {
      if (onEnd) onEnd(e2);
    };
    controls.addEventListener("change", callback);
    controls.addEventListener("start", onStartCb);
    controls.addEventListener("end", onEndCb);
    return () => {
      controls.removeEventListener("start", onStartCb);
      controls.removeEventListener("end", onEndCb);
      controls.removeEventListener("change", callback);
    };
  }, [onChange, onStart, onEnd, controls, invalidate2, setEvents]);
  reactExports.useEffect(() => {
    if (makeDefault) {
      const old = get().controls;
      set({
        controls
      });
      return () => set({
        controls: old
      });
    }
  }, [makeDefault, controls]);
  return /* @__PURE__ */ reactExports.createElement("primitive", _extends({
    ref,
    object: controls,
    enableDamping
  }, restProps));
});
const getBufferForType = (type, width, height) => {
  let out;
  switch (type) {
    case UnsignedByteType:
      out = new Uint8ClampedArray(width * height * 4);
      break;
    case HalfFloatType:
      out = new Uint16Array(width * height * 4);
      break;
    case UnsignedIntType:
      out = new Uint32Array(width * height * 4);
      break;
    case ByteType:
      out = new Int8Array(width * height * 4);
      break;
    case ShortType:
      out = new Int16Array(width * height * 4);
      break;
    case IntType:
      out = new Int32Array(width * height * 4);
      break;
    case FloatType:
      out = new Float32Array(width * height * 4);
      break;
    default:
      throw new Error("Unsupported data type");
  }
  return out;
};
let _canReadPixelsResult;
const canReadPixels = (type, renderer, camera, renderTargetOptions) => {
  if (_canReadPixelsResult !== void 0)
    return _canReadPixelsResult;
  const testRT = new WebGLRenderTarget(1, 1, renderTargetOptions);
  renderer.setRenderTarget(testRT);
  const mesh = new Mesh(new PlaneGeometry(), new MeshBasicMaterial({ color: 16777215 }));
  renderer.render(mesh, camera);
  renderer.setRenderTarget(null);
  const out = getBufferForType(type, testRT.width, testRT.height);
  renderer.readRenderTargetPixels(testRT, 0, 0, testRT.width, testRT.height, out);
  testRT.dispose();
  mesh.geometry.dispose();
  mesh.material.dispose();
  _canReadPixelsResult = out[0] !== 0;
  return _canReadPixelsResult;
};
class QuadRenderer {
  /**
   * Constructs a new QuadRenderer
   *
   * @param options Parameters for this QuadRenderer
   */
  constructor(options) {
    __publicField(this, "_renderer");
    __publicField(this, "_rendererIsDisposable", false);
    __publicField(this, "_material");
    __publicField(this, "_scene");
    __publicField(this, "_camera");
    __publicField(this, "_quad");
    __publicField(this, "_renderTarget");
    __publicField(this, "_width");
    __publicField(this, "_height");
    __publicField(this, "_type");
    __publicField(this, "_colorSpace");
    __publicField(this, "_supportsReadPixels", true);
    /**
     * Renders the input texture using the specified material
     */
    __publicField(this, "render", () => {
      this._renderer.setRenderTarget(this._renderTarget);
      try {
        this._renderer.render(this._scene, this._camera);
      } catch (e2) {
        this._renderer.setRenderTarget(null);
        throw e2;
      }
      this._renderer.setRenderTarget(null);
    });
    var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    this._width = options.width;
    this._height = options.height;
    this._type = options.type;
    this._colorSpace = options.colorSpace;
    const rtOptions = {
      // fixed options
      format: RGBAFormat,
      depthBuffer: false,
      stencilBuffer: false,
      // user options
      type: this._type,
      // set in class property
      colorSpace: this._colorSpace,
      // set in class property
      anisotropy: ((_a2 = options.renderTargetOptions) == null ? void 0 : _a2.anisotropy) !== void 0 ? (_b2 = options.renderTargetOptions) == null ? void 0 : _b2.anisotropy : 1,
      generateMipmaps: ((_c = options.renderTargetOptions) == null ? void 0 : _c.generateMipmaps) !== void 0 ? (_d = options.renderTargetOptions) == null ? void 0 : _d.generateMipmaps : false,
      magFilter: ((_e = options.renderTargetOptions) == null ? void 0 : _e.magFilter) !== void 0 ? (_f = options.renderTargetOptions) == null ? void 0 : _f.magFilter : LinearFilter,
      minFilter: ((_g = options.renderTargetOptions) == null ? void 0 : _g.minFilter) !== void 0 ? (_h = options.renderTargetOptions) == null ? void 0 : _h.minFilter : LinearFilter,
      samples: ((_i = options.renderTargetOptions) == null ? void 0 : _i.samples) !== void 0 ? (_j = options.renderTargetOptions) == null ? void 0 : _j.samples : void 0,
      wrapS: ((_k = options.renderTargetOptions) == null ? void 0 : _k.wrapS) !== void 0 ? (_l = options.renderTargetOptions) == null ? void 0 : _l.wrapS : ClampToEdgeWrapping,
      wrapT: ((_m = options.renderTargetOptions) == null ? void 0 : _m.wrapT) !== void 0 ? (_n = options.renderTargetOptions) == null ? void 0 : _n.wrapT : ClampToEdgeWrapping
    };
    this._material = options.material;
    if (options.renderer) {
      this._renderer = options.renderer;
    } else {
      this._renderer = QuadRenderer.instantiateRenderer();
      this._rendererIsDisposable = true;
    }
    this._scene = new Scene();
    this._camera = new OrthographicCamera();
    this._camera.position.set(0, 0, 10);
    this._camera.left = -0.5;
    this._camera.right = 0.5;
    this._camera.top = 0.5;
    this._camera.bottom = -0.5;
    this._camera.updateProjectionMatrix();
    if (!canReadPixels(this._type, this._renderer, this._camera, rtOptions)) {
      let alternativeType;
      switch (this._type) {
        case HalfFloatType:
          alternativeType = this._renderer.extensions.has("EXT_color_buffer_float") ? FloatType : void 0;
          break;
      }
      if (alternativeType !== void 0) {
        console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${FloatType}`);
        this._type = alternativeType;
      } else {
        this._supportsReadPixels = false;
        console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown");
      }
    }
    this._quad = new Mesh(new PlaneGeometry(), this._material);
    this._quad.geometry.computeBoundingBox();
    this._scene.add(this._quad);
    this._renderTarget = new WebGLRenderTarget(this.width, this.height, rtOptions);
    this._renderTarget.texture.mapping = ((_o = options.renderTargetOptions) == null ? void 0 : _o.mapping) !== void 0 ? (_p = options.renderTargetOptions) == null ? void 0 : _p.mapping : UVMapping;
  }
  /**
   * Instantiates a temporary renderer
   *
   * @returns
   */
  static instantiateRenderer() {
    const renderer = new WebGLRenderer();
    renderer.setSize(128, 128);
    return renderer;
  }
  /**
   * Obtains a Buffer containing the rendered texture.
   *
   * @throws Error if the browser cannot read pixels from this RenderTarget type.
   * @returns a TypedArray containing RGBA values from this renderer
   */
  toArray() {
    if (!this._supportsReadPixels)
      throw new Error("Can't read pixels in this browser");
    const out = getBufferForType(this._type, this._width, this._height);
    this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, out);
    return out;
  }
  /**
   * Performs a readPixel operation in the renderTarget
   * and returns a DataTexture containing the read data
   *
   * @param options options
   * @returns
   */
  toDataTexture(options) {
    const returnValue = new DataTexture(
      // fixed values
      this.toArray(),
      this.width,
      this.height,
      RGBAFormat,
      this._type,
      // user values
      (options == null ? void 0 : options.mapping) || UVMapping,
      (options == null ? void 0 : options.wrapS) || ClampToEdgeWrapping,
      (options == null ? void 0 : options.wrapT) || ClampToEdgeWrapping,
      (options == null ? void 0 : options.magFilter) || LinearFilter,
      (options == null ? void 0 : options.minFilter) || LinearFilter,
      (options == null ? void 0 : options.anisotropy) || 1,
      // fixed value
      LinearSRGBColorSpace$1
    );
    returnValue.generateMipmaps = (options == null ? void 0 : options.generateMipmaps) !== void 0 ? options == null ? void 0 : options.generateMipmaps : false;
    return returnValue;
  }
  /**
   * If using a disposable renderer, it will dispose it.
   */
  disposeOnDemandRenderer() {
    this._renderer.setRenderTarget(null);
    if (this._rendererIsDisposable) {
      this._renderer.dispose();
      this._renderer.forceContextLoss();
    }
  }
  /**
   * Will dispose of **all** assets used by this renderer.
   *
   *
   * @param disposeRenderTarget will dispose of the renderTarget which will not be usable later
   * set this to true if you passed the `renderTarget.texture` to a `PMREMGenerator`
   * or are otherwise done with it.
   *
   * @example
   * ```js
   * const loader = new HDRJPGLoader(renderer)
   * const result = await loader.loadAsync('gainmap.jpeg')
   * const mesh = new Mesh(geometry, new MeshBasicMaterial({ map: result.renderTarget.texture }) )
   * // DO NOT dispose the renderTarget here,
   * // it is used directly in the material
   * result.dispose()
   * ```
   *
   * @example
   * ```js
   * const loader = new HDRJPGLoader(renderer)
   * const pmremGenerator = new PMREMGenerator( renderer );
   * const result = await loader.loadAsync('gainmap.jpeg')
   * const envMap = pmremGenerator.fromEquirectangular(result.renderTarget.texture)
   * const mesh = new Mesh(geometry, new MeshStandardMaterial({ envMap }) )
   * // renderTarget can be disposed here
   * // because it was used to generate a PMREM texture
   * result.dispose(true)
   * ```
   */
  dispose(disposeRenderTarget) {
    this.disposeOnDemandRenderer();
    if (disposeRenderTarget) {
      this.renderTarget.dispose();
    }
    if (this.material instanceof ShaderMaterial) {
      Object.values(this.material.uniforms).forEach((v) => {
        if (v.value instanceof Texture)
          v.value.dispose();
      });
    }
    Object.values(this.material).forEach((value) => {
      if (value instanceof Texture)
        value.dispose();
    });
    this.material.dispose();
    this._quad.geometry.dispose();
  }
  /**
   * Width of the texture
   */
  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
    this._renderTarget.setSize(this._width, this._height);
  }
  /**
   * Height of the texture
   */
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
    this._renderTarget.setSize(this._width, this._height);
  }
  /**
   * The renderer used
   */
  get renderer() {
    return this._renderer;
  }
  /**
   * The `WebGLRenderTarget` used.
   */
  get renderTarget() {
    return this._renderTarget;
  }
  set renderTarget(value) {
    this._renderTarget = value;
    this._width = value.width;
    this._height = value.height;
  }
  /**
   * The `Material` used.
   */
  get material() {
    return this._material;
  }
  /**
   *
   */
  get type() {
    return this._type;
  }
  get colorSpace() {
    return this._colorSpace;
  }
}
class GainMapNotFoundError extends Error {
}
class XMPMetadataNotFoundError extends Error {
}
const getXMLValue = (xml, tag, defaultValue) => {
  const attributeMatch = new RegExp(`${tag}="([^"]*)"`, "i").exec(xml);
  if (attributeMatch)
    return attributeMatch[1];
  const tagMatch = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i").exec(xml);
  if (tagMatch) {
    const liValues = tagMatch[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
    if (liValues && liValues.length === 3) {
      return liValues.map((v) => v.replace(/<\/?rdf:li>/g, ""));
    }
    return tagMatch[1].trim();
  }
  if (defaultValue !== void 0)
    return defaultValue;
  throw new Error(`Can't find ${tag} in gainmap metadata`);
};
const extractXMP = (input) => {
  let str;
  if (typeof TextDecoder !== "undefined")
    str = new TextDecoder().decode(input);
  else
    str = input.toString();
  let start = str.indexOf("<x:xmpmeta");
  while (start !== -1) {
    const end = str.indexOf("x:xmpmeta>", start);
    const xmpBlock = str.slice(start, end + 10);
    try {
      const gainMapMin = getXMLValue(xmpBlock, "hdrgm:GainMapMin", "0");
      const gainMapMax = getXMLValue(xmpBlock, "hdrgm:GainMapMax");
      const gamma = getXMLValue(xmpBlock, "hdrgm:Gamma", "1");
      const offsetSDR = getXMLValue(xmpBlock, "hdrgm:OffsetSDR", "0.015625");
      const offsetHDR = getXMLValue(xmpBlock, "hdrgm:OffsetHDR", "0.015625");
      const hdrCapacityMinMatch = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(xmpBlock);
      const hdrCapacityMin = hdrCapacityMinMatch ? hdrCapacityMinMatch[1] : "0";
      const hdrCapacityMaxMatch = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(xmpBlock);
      if (!hdrCapacityMaxMatch)
        throw new Error("Incomplete gainmap metadata");
      const hdrCapacityMax = hdrCapacityMaxMatch[1];
      return {
        gainMapMin: Array.isArray(gainMapMin) ? gainMapMin.map((v) => parseFloat(v)) : [parseFloat(gainMapMin), parseFloat(gainMapMin), parseFloat(gainMapMin)],
        gainMapMax: Array.isArray(gainMapMax) ? gainMapMax.map((v) => parseFloat(v)) : [parseFloat(gainMapMax), parseFloat(gainMapMax), parseFloat(gainMapMax)],
        gamma: Array.isArray(gamma) ? gamma.map((v) => parseFloat(v)) : [parseFloat(gamma), parseFloat(gamma), parseFloat(gamma)],
        offsetSdr: Array.isArray(offsetSDR) ? offsetSDR.map((v) => parseFloat(v)) : [parseFloat(offsetSDR), parseFloat(offsetSDR), parseFloat(offsetSDR)],
        offsetHdr: Array.isArray(offsetHDR) ? offsetHDR.map((v) => parseFloat(v)) : [parseFloat(offsetHDR), parseFloat(offsetHDR), parseFloat(offsetHDR)],
        hdrCapacityMin: parseFloat(hdrCapacityMin),
        hdrCapacityMax: parseFloat(hdrCapacityMax)
      };
    } catch (e2) {
    }
    start = str.indexOf("<x:xmpmeta", end);
  }
};
class MPFExtractor {
  constructor(options) {
    __publicField(this, "options");
    this.options = {
      debug: options && options.debug !== void 0 ? options.debug : false,
      extractFII: options && options.extractFII !== void 0 ? options.extractFII : true,
      extractNonFII: options && options.extractNonFII !== void 0 ? options.extractNonFII : true
    };
  }
  extract(imageArrayBuffer) {
    return new Promise((resolve2, reject) => {
      const debug = this.options.debug;
      const dataView = new DataView(imageArrayBuffer.buffer);
      if (dataView.getUint16(0) !== 65496) {
        reject(new Error("Not a valid jpeg"));
        return;
      }
      const length = dataView.byteLength;
      let offset = 2;
      let loops = 0;
      let marker;
      while (offset < length) {
        if (++loops > 250) {
          reject(new Error(`Found no marker after ${loops} loops 😵`));
          return;
        }
        if (dataView.getUint8(offset) !== 255) {
          reject(new Error(`Not a valid marker at offset 0x${offset.toString(16)}, found: 0x${dataView.getUint8(offset).toString(16)}`));
          return;
        }
        marker = dataView.getUint8(offset + 1);
        if (debug)
          console.log(`Marker: ${marker.toString(16)}`);
        if (marker === 226) {
          if (debug)
            console.log("Found APP2 marker (0xffe2)");
          const formatPt = offset + 4;
          if (dataView.getUint32(formatPt) === 1297106432) {
            const tiffOffset = formatPt + 4;
            let bigEnd;
            if (dataView.getUint16(tiffOffset) === 18761) {
              bigEnd = false;
            } else if (dataView.getUint16(tiffOffset) === 19789) {
              bigEnd = true;
            } else {
              reject(new Error("No valid endianness marker found in TIFF header"));
              return;
            }
            if (dataView.getUint16(tiffOffset + 2, !bigEnd) !== 42) {
              reject(new Error("Not valid TIFF data! (no 0x002A marker)"));
              return;
            }
            const firstIFDOffset = dataView.getUint32(tiffOffset + 4, !bigEnd);
            if (firstIFDOffset < 8) {
              reject(new Error("Not valid TIFF data! (First offset less than 8)"));
              return;
            }
            const dirStart = tiffOffset + firstIFDOffset;
            const count = dataView.getUint16(dirStart, !bigEnd);
            const entriesStart = dirStart + 2;
            let numberOfImages = 0;
            for (let i = entriesStart; i < entriesStart + 12 * count; i += 12) {
              if (dataView.getUint16(i, !bigEnd) === 45057) {
                numberOfImages = dataView.getUint32(i + 8, !bigEnd);
              }
            }
            const nextIFDOffsetLen = 4;
            const MPImageListValPt = dirStart + 2 + count * 12 + nextIFDOffsetLen;
            const images = [];
            for (let i = MPImageListValPt; i < MPImageListValPt + numberOfImages * 16; i += 16) {
              const image = {
                MPType: dataView.getUint32(i, !bigEnd),
                size: dataView.getUint32(i + 4, !bigEnd),
                // This offset is specified relative to the address of the MP Endian
                // field in the MP Header, unless the image is a First Individual Image,
                // in which case the value of the offset shall be NULL (0x00000000).
                dataOffset: dataView.getUint32(i + 8, !bigEnd),
                dependantImages: dataView.getUint32(i + 12, !bigEnd),
                start: -1,
                end: -1,
                isFII: false
              };
              if (!image.dataOffset) {
                image.start = 0;
                image.isFII = true;
              } else {
                image.start = tiffOffset + image.dataOffset;
                image.isFII = false;
              }
              image.end = image.start + image.size;
              images.push(image);
            }
            if (this.options.extractNonFII && images.length) {
              const bufferBlob = new Blob([dataView]);
              const imgs = [];
              for (const image of images) {
                if (image.isFII && !this.options.extractFII) {
                  continue;
                }
                const imageBlob = bufferBlob.slice(image.start, image.end + 1, "image/jpeg");
                imgs.push(imageBlob);
              }
              resolve2(imgs);
            }
          }
        }
        offset += 2 + dataView.getUint16(offset + 2);
      }
    });
  }
}
const extractGainmapFromJPEG = async (jpegFile) => {
  const metadata = extractXMP(jpegFile);
  if (!metadata)
    throw new XMPMetadataNotFoundError("Gain map XMP metadata not found");
  const mpfExtractor = new MPFExtractor({ extractFII: true, extractNonFII: true });
  const images = await mpfExtractor.extract(jpegFile);
  if (images.length !== 2)
    throw new GainMapNotFoundError("Gain map recovery image not found");
  return {
    sdr: new Uint8Array(await images[0].arrayBuffer()),
    gainMap: new Uint8Array(await images[1].arrayBuffer()),
    metadata
  };
};
const getHTMLImageFromBlob = (blob) => {
  return new Promise((resolve2, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      resolve2(img);
    };
    img.onerror = (e2) => {
      reject(e2);
    };
    img.src = URL.createObjectURL(blob);
  });
};
class LoaderBaseShared extends Loader {
  constructor(config, manager) {
    super(manager);
    __publicField(this, "_renderer");
    __publicField(this, "_renderTargetOptions");
    __publicField(this, "_internalLoadingManager");
    __publicField(this, "_config");
    this._config = config;
    if (config.renderer)
      this._renderer = config.renderer;
    this._internalLoadingManager = new LoadingManager();
  }
  setRenderer(renderer) {
    this._renderer = renderer;
    return this;
  }
  setRenderTargetOptions(options) {
    this._renderTargetOptions = options;
    return this;
  }
  prepareQuadRenderer() {
    if (!this._renderer) {
      console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
    }
    const material = this._config.createMaterial({
      gainMapMax: [1, 1, 1],
      gainMapMin: [0, 0, 0],
      gamma: [1, 1, 1],
      offsetHdr: [1, 1, 1],
      offsetSdr: [1, 1, 1],
      hdrCapacityMax: 1,
      hdrCapacityMin: 0,
      maxDisplayBoost: 1,
      gainMap: new Texture(),
      sdr: new Texture()
    });
    return this._config.createQuadRenderer({
      width: 16,
      height: 16,
      type: HalfFloatType,
      colorSpace: LinearSRGBColorSpace$1,
      material,
      renderer: this._renderer,
      renderTargetOptions: this._renderTargetOptions
    });
  }
  async processImages(sdrBuffer, gainMapBuffer, imageOrientation) {
    const gainMapBlob = gainMapBuffer ? new Blob([gainMapBuffer], { type: "image/jpeg" }) : void 0;
    const sdrBlob = new Blob([sdrBuffer], { type: "image/jpeg" });
    let sdrImage;
    let gainMapImage;
    let needsFlip = false;
    if (typeof createImageBitmap === "undefined") {
      const res = await Promise.all([
        gainMapBlob ? getHTMLImageFromBlob(gainMapBlob) : Promise.resolve(void 0),
        getHTMLImageFromBlob(sdrBlob)
      ]);
      gainMapImage = res[0];
      sdrImage = res[1];
      needsFlip = imageOrientation === "flipY";
    } else {
      const res = await Promise.all([
        gainMapBlob ? createImageBitmap(gainMapBlob, { imageOrientation: imageOrientation || "flipY" }) : Promise.resolve(void 0),
        createImageBitmap(sdrBlob, { imageOrientation: imageOrientation || "flipY" })
      ]);
      gainMapImage = res[0];
      sdrImage = res[1];
    }
    return { sdrImage, gainMapImage, needsFlip };
  }
  createTextures(sdrImage, gainMapImage, needsFlip) {
    const gainMap = new Texture(gainMapImage || new ImageData(2, 2), UVMapping, ClampToEdgeWrapping, ClampToEdgeWrapping, LinearFilter, LinearMipMapLinearFilter, RGBAFormat, UnsignedByteType, 1, LinearSRGBColorSpace$1);
    gainMap.flipY = needsFlip;
    gainMap.needsUpdate = true;
    const sdr = new Texture(sdrImage, UVMapping, ClampToEdgeWrapping, ClampToEdgeWrapping, LinearFilter, LinearMipMapLinearFilter, RGBAFormat, UnsignedByteType, 1, SRGBColorSpace$1);
    sdr.flipY = needsFlip;
    sdr.needsUpdate = true;
    return { gainMap, sdr };
  }
  updateQuadRenderer(quadRenderer, sdrImage, gainMap, sdr, metadata) {
    quadRenderer.width = sdrImage.width;
    quadRenderer.height = sdrImage.height;
    quadRenderer.material.gainMap = gainMap;
    quadRenderer.material.sdr = sdr;
    quadRenderer.material.gainMapMin = metadata.gainMapMin;
    quadRenderer.material.gainMapMax = metadata.gainMapMax;
    quadRenderer.material.offsetHdr = metadata.offsetHdr;
    quadRenderer.material.offsetSdr = metadata.offsetSdr;
    quadRenderer.material.gamma = metadata.gamma;
    quadRenderer.material.hdrCapacityMin = metadata.hdrCapacityMin;
    quadRenderer.material.hdrCapacityMax = metadata.hdrCapacityMax;
    quadRenderer.material.maxDisplayBoost = Math.pow(2, metadata.hdrCapacityMax);
    quadRenderer.material.needsUpdate = true;
  }
}
const vertexShader = (
  /* glsl */
  `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
);
const fragmentShader = (
  /* glsl */
  `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`
);
class GainMapDecoderMaterial extends ShaderMaterial {
  /**
   *
   * @param params
   */
  constructor({ gamma, offsetHdr, offsetSdr, gainMapMin, gainMapMax, maxDisplayBoost, hdrCapacityMin, hdrCapacityMax, sdr, gainMap }) {
    super({
      name: "GainMapDecoderMaterial",
      vertexShader,
      fragmentShader,
      uniforms: {
        sdr: { value: sdr },
        gainMap: { value: gainMap },
        gamma: { value: new Vector3(1 / gamma[0], 1 / gamma[1], 1 / gamma[2]) },
        offsetHdr: { value: new Vector3().fromArray(offsetHdr) },
        offsetSdr: { value: new Vector3().fromArray(offsetSdr) },
        gainMapMin: { value: new Vector3().fromArray(gainMapMin) },
        gainMapMax: { value: new Vector3().fromArray(gainMapMax) },
        weightFactor: {
          value: (Math.log2(maxDisplayBoost) - hdrCapacityMin) / (hdrCapacityMax - hdrCapacityMin)
        }
      },
      blending: NoBlending,
      depthTest: false,
      depthWrite: false
    });
    __publicField(this, "_maxDisplayBoost");
    __publicField(this, "_hdrCapacityMin");
    __publicField(this, "_hdrCapacityMax");
    this._maxDisplayBoost = maxDisplayBoost;
    this._hdrCapacityMin = hdrCapacityMin;
    this._hdrCapacityMax = hdrCapacityMax;
    this.needsUpdate = true;
    this.uniformsNeedUpdate = true;
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(value) {
    this.uniforms.sdr.value = value;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(value) {
    this.uniforms.gainMap.value = value;
  }
  /**
   * @see {@link GainMapMetadata.offsetHdr}
   */
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(value) {
    this.uniforms.offsetHdr.value.fromArray(value);
  }
  /**
   * @see {@link GainMapMetadata.offsetSdr}
   */
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(value) {
    this.uniforms.offsetSdr.value.fromArray(value);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMin}
   */
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(value) {
    this.uniforms.gainMapMin.value.fromArray(value);
  }
  /**
   * @see {@link GainMapMetadata.gainMapMax}
   */
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(value) {
    this.uniforms.gainMapMax.value.fromArray(value);
  }
  /**
   * @see {@link GainMapMetadata.gamma}
   */
  get gamma() {
    const g2 = this.uniforms.gamma.value;
    return [1 / g2.x, 1 / g2.y, 1 / g2.z];
  }
  set gamma(value) {
    const g2 = this.uniforms.gamma.value;
    g2.x = 1 / value[0];
    g2.y = 1 / value[1];
    g2.z = 1 / value[2];
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(value) {
    this._hdrCapacityMin = value;
    this.calculateWeight();
  }
  /**
   * @see {@link GainMapMetadata.hdrCapacityMin}
   * @remarks Logarithmic space
   */
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(value) {
    this._hdrCapacityMax = value;
    this.calculateWeight();
  }
  /**
   * @see {@link GainmapDecodingParameters.maxDisplayBoost}
   * @remarks Non Logarithmic space
   */
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(value) {
    this._maxDisplayBoost = Math.max(1, Math.min(65504, value));
    this.calculateWeight();
  }
  calculateWeight() {
    const val = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, val));
  }
}
class LoaderBaseWebGL extends LoaderBaseShared {
  constructor(renderer, manager) {
    super({
      renderer,
      createMaterial: (params) => new GainMapDecoderMaterial(params),
      createQuadRenderer: (params) => new QuadRenderer(params)
    }, manager);
  }
  /**
   * @private
   * @param quadRenderer
   * @param metadata
   * @param sdrBuffer
   * @param gainMapBuffer
   */
  async render(quadRenderer, metadata, sdrBuffer, gainMapBuffer) {
    const { sdrImage, gainMapImage, needsFlip } = await this.processImages(sdrBuffer, gainMapBuffer, "flipY");
    const { gainMap, sdr } = this.createTextures(sdrImage, gainMapImage, needsFlip);
    this.updateQuadRenderer(quadRenderer, sdrImage, gainMap, sdr, metadata);
    quadRenderer.render();
  }
}
class GainMapLoader extends LoaderBaseWebGL {
  /**
   * Loads a gainmap using separate data
   * * sdr image
   * * gain map image
   * * metadata json
   *
   * useful for webp gain maps
   *
   * @param urls An array in the form of [sdr.jpg, gainmap.jpg, metadata.json]
   * @param onLoad Load complete callback, will receive the result
   * @param onProgress Progress callback, will receive a `ProgressEvent`
   * @param onError Error callback
   * @returns
   */
  load([sdrUrl, gainMapUrl, metadataUrl], onLoad, onProgress, onError) {
    const quadRenderer = this.prepareQuadRenderer();
    let sdr;
    let gainMap;
    let metadata;
    const loadCheck = async () => {
      if (sdr && gainMap && metadata) {
        try {
          await this.render(quadRenderer, metadata, sdr, gainMap);
        } catch (error) {
          this.manager.itemError(sdrUrl);
          this.manager.itemError(gainMapUrl);
          this.manager.itemError(metadataUrl);
          if (typeof onError === "function")
            onError(error);
          quadRenderer.disposeOnDemandRenderer();
          return;
        }
        if (typeof onLoad === "function")
          onLoad(quadRenderer);
        this.manager.itemEnd(sdrUrl);
        this.manager.itemEnd(gainMapUrl);
        this.manager.itemEnd(metadataUrl);
        quadRenderer.disposeOnDemandRenderer();
      }
    };
    let sdrLengthComputable = true;
    let sdrTotal = 0;
    let sdrLoaded = 0;
    let gainMapLengthComputable = true;
    let gainMapTotal = 0;
    let gainMapLoaded = 0;
    let metadataLengthComputable = true;
    let metadataTotal = 0;
    let metadataLoaded = 0;
    const progressHandler = () => {
      if (typeof onProgress === "function") {
        const total = sdrTotal + gainMapTotal + metadataTotal;
        const loaded = sdrLoaded + gainMapLoaded + metadataLoaded;
        const lengthComputable = sdrLengthComputable && gainMapLengthComputable && metadataLengthComputable;
        onProgress(new ProgressEvent("progress", { lengthComputable, loaded, total }));
      }
    };
    this.manager.itemStart(sdrUrl);
    this.manager.itemStart(gainMapUrl);
    this.manager.itemStart(metadataUrl);
    const sdrLoader = new FileLoader(this._internalLoadingManager);
    sdrLoader.setResponseType("arraybuffer");
    sdrLoader.setRequestHeader(this.requestHeader);
    sdrLoader.setPath(this.path);
    sdrLoader.setWithCredentials(this.withCredentials);
    sdrLoader.load(sdrUrl, async (buffer) => {
      if (typeof buffer === "string")
        throw new Error("Invalid sdr buffer");
      sdr = buffer;
      await loadCheck();
    }, (e2) => {
      sdrLengthComputable = e2.lengthComputable;
      sdrLoaded = e2.loaded;
      sdrTotal = e2.total;
      progressHandler();
    }, (error) => {
      this.manager.itemError(sdrUrl);
      if (typeof onError === "function")
        onError(error);
    });
    const gainMapLoader = new FileLoader(this._internalLoadingManager);
    gainMapLoader.setResponseType("arraybuffer");
    gainMapLoader.setRequestHeader(this.requestHeader);
    gainMapLoader.setPath(this.path);
    gainMapLoader.setWithCredentials(this.withCredentials);
    gainMapLoader.load(gainMapUrl, async (buffer) => {
      if (typeof buffer === "string")
        throw new Error("Invalid gainmap buffer");
      gainMap = buffer;
      await loadCheck();
    }, (e2) => {
      gainMapLengthComputable = e2.lengthComputable;
      gainMapLoaded = e2.loaded;
      gainMapTotal = e2.total;
      progressHandler();
    }, (error) => {
      this.manager.itemError(gainMapUrl);
      if (typeof onError === "function")
        onError(error);
    });
    const metadataLoader = new FileLoader(this._internalLoadingManager);
    metadataLoader.setRequestHeader(this.requestHeader);
    metadataLoader.setPath(this.path);
    metadataLoader.setWithCredentials(this.withCredentials);
    metadataLoader.load(metadataUrl, async (json) => {
      if (typeof json !== "string")
        throw new Error("Invalid metadata string");
      metadata = JSON.parse(json);
      await loadCheck();
    }, (e2) => {
      metadataLengthComputable = e2.lengthComputable;
      metadataLoaded = e2.loaded;
      metadataTotal = e2.total;
      progressHandler();
    }, (error) => {
      this.manager.itemError(metadataUrl);
      if (typeof onError === "function")
        onError(error);
    });
    return quadRenderer;
  }
}
class HDRJPGLoader extends LoaderBaseWebGL {
  /**
   * Loads a JPEG containing gain map metadata
   * Renders a normal SDR image if gainmap data is not found
   *
   * @param url Path to a JPEG file containing embedded gain map metadata
   * @param onLoad Load complete callback, will receive the result
   * @param onProgress Progress callback, will receive a `ProgressEvent`
   * @param onError Error callback
   * @returns
   */
  load(url, onLoad, onProgress, onError) {
    const quadRenderer = this.prepareQuadRenderer();
    const loader = new FileLoader(this._internalLoadingManager);
    loader.setResponseType("arraybuffer");
    loader.setRequestHeader(this.requestHeader);
    loader.setPath(this.path);
    loader.setWithCredentials(this.withCredentials);
    this.manager.itemStart(url);
    loader.load(url, async (jpeg) => {
      if (typeof jpeg === "string")
        throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
      const jpegBuffer = new Uint8Array(jpeg);
      let sdrJPEG;
      let gainMapJPEG;
      let metadata;
      try {
        const extractionResult = await extractGainmapFromJPEG(jpegBuffer);
        sdrJPEG = extractionResult.sdr;
        gainMapJPEG = extractionResult.gainMap;
        metadata = extractionResult.metadata;
      } catch (e2) {
        if (e2 instanceof XMPMetadataNotFoundError || e2 instanceof GainMapNotFoundError) {
          console.warn(`Failure to reconstruct an HDR image from ${url}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`);
          metadata = {
            gainMapMin: [0, 0, 0],
            gainMapMax: [1, 1, 1],
            gamma: [1, 1, 1],
            hdrCapacityMin: 0,
            hdrCapacityMax: 1,
            offsetHdr: [0, 0, 0],
            offsetSdr: [0, 0, 0]
          };
          sdrJPEG = jpegBuffer;
        } else {
          throw e2;
        }
      }
      try {
        await this.render(quadRenderer, metadata, sdrJPEG.buffer, gainMapJPEG == null ? void 0 : gainMapJPEG.buffer);
      } catch (error) {
        this.manager.itemError(url);
        if (typeof onError === "function")
          onError(error);
        quadRenderer.disposeOnDemandRenderer();
        return;
      }
      if (typeof onLoad === "function")
        onLoad(quadRenderer);
      this.manager.itemEnd(url);
      quadRenderer.disposeOnDemandRenderer();
    }, onProgress, (error) => {
      this.manager.itemError(url);
      if (typeof onError === "function")
        onError(error);
    });
    return quadRenderer;
  }
}
const presetsObj = {
  apartment: "lebombo_1k.hdr",
  city: "potsdamer_platz_1k.hdr",
  dawn: "kiara_1_dawn_1k.hdr",
  forest: "forest_slope_1k.hdr",
  lobby: "st_fagans_interior_1k.hdr",
  night: "dikhololo_night_1k.hdr",
  park: "rooitou_park_1k.hdr",
  studio: "studio_small_03_1k.hdr",
  sunset: "venice_sunset_1k.hdr",
  warehouse: "empty_warehouse_01_1k.hdr"
};
const CUBEMAP_ROOT = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/";
const isArray = (arr) => Array.isArray(arr);
const defaultFiles = ["/px.png", "/nx.png", "/py.png", "/ny.png", "/pz.png", "/nz.png"];
function useEnvironment({
  files = defaultFiles,
  path = "",
  preset = void 0,
  colorSpace = void 0,
  extensions: extensions2
} = {}) {
  if (preset) {
    validatePreset(preset);
    files = presetsObj[preset];
    path = CUBEMAP_ROOT;
  }
  const multiFile = isArray(files);
  const {
    extension,
    isCubemap
  } = getExtension(files);
  const loader = getLoader(extension);
  if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
  const gl = useThree((state2) => state2.gl);
  reactExports.useLayoutEffect(() => {
    if (extension !== "webp" && extension !== "jpg" && extension !== "jpeg") return;
    function clearGainmapTexture() {
      useLoader.clear(loader, multiFile ? [files] : files);
    }
    gl.domElement.addEventListener("webglcontextlost", clearGainmapTexture, {
      once: true
    });
  }, [files, gl.domElement]);
  const loaderResult = useLoader(loader, multiFile ? [files] : files, (loader2) => {
    if (extension === "webp" || extension === "jpg" || extension === "jpeg") {
      loader2.setRenderer(gl);
    }
    loader2.setPath == null || loader2.setPath(path);
    if (extensions2) extensions2(loader2);
  });
  let texture = multiFile ? (
    // @ts-ignore
    loaderResult[0]
  ) : loaderResult;
  if (extension === "jpg" || extension === "jpeg" || extension === "webp") {
    var _renderTarget;
    texture = (_renderTarget = texture.renderTarget) == null ? void 0 : _renderTarget.texture;
  }
  texture.mapping = isCubemap ? CubeReflectionMapping : EquirectangularReflectionMapping;
  texture.colorSpace = colorSpace !== null && colorSpace !== void 0 ? colorSpace : isCubemap ? "srgb" : "srgb-linear";
  return texture;
}
const preloadDefaultOptions = {
  files: defaultFiles,
  path: "",
  preset: void 0,
  extensions: void 0
};
useEnvironment.preload = (preloadOptions) => {
  const options = {
    ...preloadDefaultOptions,
    ...preloadOptions
  };
  let {
    files,
    path = ""
  } = options;
  const {
    preset,
    extensions: extensions2
  } = options;
  if (preset) {
    validatePreset(preset);
    files = presetsObj[preset];
    path = CUBEMAP_ROOT;
  }
  const {
    extension
  } = getExtension(files);
  if (extension === "webp" || extension === "jpg" || extension === "jpeg") {
    throw new Error("useEnvironment: Preloading gainmaps is not supported");
  }
  const loader = getLoader(extension);
  if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
  useLoader.preload(loader, isArray(files) ? [files] : files, (loader2) => {
    loader2.setPath == null || loader2.setPath(path);
    if (extensions2) extensions2(loader2);
  });
};
const clearDefaultOptins = {
  files: defaultFiles,
  preset: void 0
};
useEnvironment.clear = (clearOptions) => {
  const options = {
    ...clearDefaultOptins,
    ...clearOptions
  };
  let {
    files
  } = options;
  const {
    preset
  } = options;
  if (preset) {
    validatePreset(preset);
    files = presetsObj[preset];
  }
  const {
    extension
  } = getExtension(files);
  const loader = getLoader(extension);
  if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
  useLoader.clear(loader, isArray(files) ? [files] : files);
};
function validatePreset(preset) {
  if (!(preset in presetsObj)) throw new Error("Preset must be one of: " + Object.keys(presetsObj).join(", "));
}
function getExtension(files) {
  var _firstEntry$split$pop;
  const isCubemap = isArray(files) && files.length === 6;
  const isGainmap = isArray(files) && files.length === 3 && files.some((file) => file.endsWith("json"));
  const firstEntry = isArray(files) ? files[0] : files;
  const extension = isCubemap ? "cube" : isGainmap ? "webp" : firstEntry.startsWith("data:application/exr") ? "exr" : firstEntry.startsWith("data:application/hdr") ? "hdr" : firstEntry.startsWith("data:image/jpeg") ? "jpg" : (_firstEntry$split$pop = firstEntry.split(".").pop()) == null || (_firstEntry$split$pop = _firstEntry$split$pop.split("?")) == null || (_firstEntry$split$pop = _firstEntry$split$pop.shift()) == null ? void 0 : _firstEntry$split$pop.toLowerCase();
  return {
    extension,
    isCubemap,
    isGainmap
  };
}
function getLoader(extension) {
  const loader = extension === "cube" ? CubeTextureLoader : extension === "hdr" ? RGBELoader : extension === "exr" ? EXRLoader : extension === "jpg" || extension === "jpeg" ? HDRJPGLoader : extension === "webp" ? GainMapLoader : null;
  return loader;
}
const isRef = (obj) => obj.current && obj.current.isScene;
const resolveScene = (scene) => isRef(scene) ? scene.current : scene;
function setEnvProps(background, scene, defaultScene, texture, sceneProps = {}) {
  var _target$backgroundRot, _target$backgroundRot2, _target$environmentRo, _target$environmentRo2;
  sceneProps = {
    backgroundBlurriness: 0,
    backgroundIntensity: 1,
    backgroundRotation: [0, 0, 0],
    environmentIntensity: 1,
    environmentRotation: [0, 0, 0],
    ...sceneProps
  };
  const target = resolveScene(scene || defaultScene);
  const oldbg = target.background;
  const oldenv = target.environment;
  const oldSceneProps = {
    // @ts-ignore
    backgroundBlurriness: target.backgroundBlurriness,
    // @ts-ignore
    backgroundIntensity: target.backgroundIntensity,
    // @ts-ignore
    backgroundRotation: (_target$backgroundRot = (_target$backgroundRot2 = target.backgroundRotation) == null || _target$backgroundRot2.clone == null ? void 0 : _target$backgroundRot2.clone()) !== null && _target$backgroundRot !== void 0 ? _target$backgroundRot : [0, 0, 0],
    // @ts-ignore
    environmentIntensity: target.environmentIntensity,
    // @ts-ignore
    environmentRotation: (_target$environmentRo = (_target$environmentRo2 = target.environmentRotation) == null || _target$environmentRo2.clone == null ? void 0 : _target$environmentRo2.clone()) !== null && _target$environmentRo !== void 0 ? _target$environmentRo : [0, 0, 0]
  };
  if (background !== "only") target.environment = texture;
  if (background) target.background = texture;
  applyProps(target, sceneProps);
  return () => {
    if (background !== "only") target.environment = oldenv;
    if (background) target.background = oldbg;
    applyProps(target, oldSceneProps);
  };
}
function EnvironmentMap({
  scene,
  background = false,
  map,
  ...config
}) {
  const defaultScene = useThree((state2) => state2.scene);
  reactExports.useLayoutEffect(() => {
    if (map) return setEnvProps(background, scene, defaultScene, map, config);
  });
  return null;
}
function EnvironmentCube({
  background = false,
  scene,
  blur,
  backgroundBlurriness,
  backgroundIntensity,
  backgroundRotation,
  environmentIntensity,
  environmentRotation,
  ...rest
}) {
  const texture = useEnvironment(rest);
  const defaultScene = useThree((state2) => state2.scene);
  reactExports.useLayoutEffect(() => {
    return setEnvProps(background, scene, defaultScene, texture, {
      backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
      backgroundIntensity,
      backgroundRotation,
      environmentIntensity,
      environmentRotation
    });
  });
  reactExports.useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);
  return null;
}
function EnvironmentPortal({
  children,
  near = 0.1,
  far = 1e3,
  resolution = 256,
  frames = 1,
  map,
  background = false,
  blur,
  backgroundBlurriness,
  backgroundIntensity,
  backgroundRotation,
  environmentIntensity,
  environmentRotation,
  scene,
  files,
  path,
  preset = void 0,
  extensions: extensions2
}) {
  const gl = useThree((state2) => state2.gl);
  const defaultScene = useThree((state2) => state2.scene);
  const camera = reactExports.useRef(null);
  const [virtualScene] = reactExports.useState(() => new Scene());
  const fbo = reactExports.useMemo(() => {
    const fbo2 = new WebGLCubeRenderTarget(resolution);
    fbo2.texture.type = HalfFloatType;
    return fbo2;
  }, [resolution]);
  reactExports.useEffect(() => {
    return () => {
      fbo.dispose();
    };
  }, [fbo]);
  reactExports.useLayoutEffect(() => {
    if (frames === 1) {
      const autoClear = gl.autoClear;
      gl.autoClear = true;
      camera.current.update(gl, virtualScene);
      gl.autoClear = autoClear;
    }
    return setEnvProps(background, scene, defaultScene, fbo.texture, {
      backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
      backgroundIntensity,
      backgroundRotation,
      environmentIntensity,
      environmentRotation
    });
  }, [children, virtualScene, fbo.texture, scene, defaultScene, background, frames, gl]);
  let count = 1;
  useFrame(() => {
    if (frames === Infinity || count < frames) {
      const autoClear = gl.autoClear;
      gl.autoClear = true;
      camera.current.update(gl, virtualScene);
      gl.autoClear = autoClear;
      count++;
    }
  });
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, createPortal(/* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, children, /* @__PURE__ */ reactExports.createElement("cubeCamera", {
    ref: camera,
    args: [near, far, fbo]
  }), files || preset ? /* @__PURE__ */ reactExports.createElement(EnvironmentCube, {
    background: true,
    files,
    preset,
    path,
    extensions: extensions2
  }) : map ? /* @__PURE__ */ reactExports.createElement(EnvironmentMap, {
    background: true,
    map,
    extensions: extensions2
  }) : null), virtualScene));
}
function EnvironmentGround(props) {
  var _props$ground, _props$ground2, _scale, _props$ground3;
  const textureDefault = useEnvironment(props);
  const texture = props.map || textureDefault;
  reactExports.useMemo(() => extend({
    GroundProjectedEnvImpl: GroundProjectedEnv
  }), []);
  reactExports.useEffect(() => {
    return () => {
      textureDefault.dispose();
    };
  }, [textureDefault]);
  const args = reactExports.useMemo(() => [texture], [texture]);
  const height = (_props$ground = props.ground) == null ? void 0 : _props$ground.height;
  const radius = (_props$ground2 = props.ground) == null ? void 0 : _props$ground2.radius;
  const scale = (_scale = (_props$ground3 = props.ground) == null ? void 0 : _props$ground3.scale) !== null && _scale !== void 0 ? _scale : 1e3;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(EnvironmentMap, _extends({}, props, {
    map: texture
  })), /* @__PURE__ */ reactExports.createElement("groundProjectedEnvImpl", {
    args,
    scale,
    height,
    radius
  }));
}
function Environment(props) {
  return props.ground ? /* @__PURE__ */ reactExports.createElement(EnvironmentGround, props) : props.map ? /* @__PURE__ */ reactExports.createElement(EnvironmentMap, props) : props.children ? /* @__PURE__ */ reactExports.createElement(EnvironmentPortal, props) : /* @__PURE__ */ reactExports.createElement(EnvironmentCube, props);
}
export {
  Billboard as B,
  Canvas as C,
  Environment as E,
  OrbitControls2 as O,
  Text2 as T,
  useThree as a,
  useGLTF as b,
  useFrame as u
};
