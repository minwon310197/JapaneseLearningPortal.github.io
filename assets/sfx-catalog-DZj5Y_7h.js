import { a as useAppStore } from "./feature-3d-CFvJkEt3.js";
const STORAGE_KEY = "n4.audio.volumes.v1";
const CHANNELS = ["master", "music", "sfx", "ambient", "voice"];
const DEFAULT_VOLUMES = { master: 0.85, music: 0.6, sfx: 0.8, ambient: 0.5, voice: 0.9 };
class AudioBus {
  constructor() {
    this.ctx = null;
    this.gains = {};
    this.volumes = { ...DEFAULT_VOLUMES };
    this.prewarmed = false;
    this.buffers = /* @__PURE__ */ new Map();
    this.activeSources = /* @__PURE__ */ new Set();
    this._loadVolumes();
  }
  _getCtx() {
    var _a;
    if (this.ctx) return this.ctx;
    if (typeof window === "undefined") return null;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    this.ctx = new AC();
    for (const ch of CHANNELS) {
      const g = this.ctx.createGain();
      g.gain.value = (_a = this.volumes[ch]) != null ? _a : 1;
      if (ch !== "master" && this.gains.master) {
        g.connect(this.gains.master);
      }
      this.gains[ch] = g;
    }
    if (this.gains.master) this.gains.master.connect(this.ctx.destination);
    return this.ctx;
  }
  _loadVolumes() {
    try {
      if (typeof localStorage === "undefined") return;
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.volumes = { ...DEFAULT_VOLUMES, ...parsed };
      }
    } catch (e) {
    }
  }
  _saveVolumes() {
    try {
      if (typeof localStorage === "undefined") return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.volumes));
    } catch (e) {
    }
  }
  prewarm() {
    const ctx = this._getCtx();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume().catch(() => {
    });
    this.prewarmed = true;
  }
  setVolume(channel, value) {
    if (!CHANNELS.includes(channel)) return;
    const v = Math.max(0, Math.min(1, value));
    this.volumes[channel] = v;
    const g = this.gains[channel];
    if (g) g.gain.value = v;
    this._saveVolumes();
  }
  getVolume(channel) {
    var _a;
    return (_a = this.volumes[channel]) != null ? _a : 0;
  }
  async loadBuffer(key, url) {
    const ctx = this._getCtx();
    if (!ctx) return null;
    if (this.buffers.has(key)) return this.buffers.get(key);
    try {
      const res = await fetch(url);
      const arr = await res.arrayBuffer();
      const buf = await ctx.decodeAudioData(arr);
      this.buffers.set(key, buf);
      return buf;
    } catch (e) {
      return null;
    }
  }
  play(key, { channel = "sfx", volume = 1, pitch = 1 } = {}) {
    const ctx = this._getCtx();
    if (!ctx) return;
    const buf = this.buffers.get(key);
    if (!buf) return;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = pitch;
    const gain = ctx.createGain();
    gain.gain.value = volume;
    src.connect(gain).connect(this.gains[channel] || this.gains.sfx);
    this.activeSources.add(src);
    src.onended = () => {
      this.activeSources.delete(src);
      try {
        src.disconnect();
        gain.disconnect();
      } catch (e) {
      }
    };
    src.start();
  }
  /**
   * Simple procedural synth fallback used when buffers haven't been loaded
   * (keeps the SFX layer working even when we only ship the tone set in-repo).
   */
  beep(key, { channel = "sfx", freq = 440, type = "sine", duration = 0.12, volume = 0.6 } = {}) {
    const ctx = this._getCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const chGain = this.gains[channel] || this.gains.sfx;
    gain.gain.setValueAtTime(1e-4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 8e-3);
    gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + duration);
    osc.connect(gain).connect(chGain);
    this.activeSources.add(osc);
    osc.onended = () => {
      this.activeSources.delete(osc);
      try {
        osc.disconnect();
        gain.disconnect();
      } catch (e) {
      }
    };
    osc.start();
    osc.stop(ctx.currentTime + duration + 0.05);
  }
  /**
   * Dispatches to loaded buffer if present, else synth fallback.
   */
  sfx(key, opts = {}) {
    if (this.buffers.has(key)) this.play(key, opts);
    else this.beep(key, opts);
  }
  /**
   * Convenience helper for the standard earn sounds.
   */
  playRarityChime(rarity) {
    const map = {
      common: { freq: 523, type: "triangle", duration: 0.2, volume: 0.5 },
      rare: { freq: 659, type: "triangle", duration: 0.28, volume: 0.6 },
      epic: { freq: 784, type: "sawtooth", duration: 0.4, volume: 0.7 },
      legendary: { freq: 880, type: "square", duration: 0.6, volume: 0.85 }
    };
    const cfg = map[rarity] || map.common;
    this.beep(`rarity-${rarity}`, { ...cfg, channel: "sfx" });
  }
  async dispose() {
    for (const source of this.activeSources) {
      try {
        source.stop();
        source.disconnect();
      } catch (e) {
      }
    }
    this.activeSources.clear();
    for (const gain of Object.values(this.gains)) {
      try {
        gain.disconnect();
      } catch (e) {
      }
    }
    this.gains = {};
    this.buffers.clear();
    if (this.ctx && this.ctx.state !== "closed") await this.ctx.close().catch(() => {
    });
    this.ctx = null;
    this.prewarmed = false;
  }
}
let instance = null;
function getAudioBus() {
  if (!instance) instance = new AudioBus();
  return instance;
}
function installAudioPrewarm() {
  if (typeof window === "undefined") return () => {
  };
  const fn = () => {
    getAudioBus().prewarm();
    window.removeEventListener("pointerdown", fn, true);
    window.removeEventListener("keydown", fn, true);
  };
  window.addEventListener("pointerdown", fn, true);
  window.addEventListener("keydown", fn, true);
  return () => {
    window.removeEventListener("pointerdown", fn, true);
    window.removeEventListener("keydown", fn, true);
  };
}
const SFX_CATALOG = {
  // Earn / reward
  "coin-pickup": { channel: "sfx", type: "triangle", freq: 880, duration: 0.12, volume: 0.45 },
  "coin-burst": { channel: "sfx", type: "triangle", freq: 1046, duration: 0.2, volume: 0.6 },
  "xp-tick": { channel: "sfx", type: "sine", freq: 1320, duration: 0.08, volume: 0.35 },
  "rarity-common": { channel: "sfx", type: "triangle", freq: 523, duration: 0.2, volume: 0.5 },
  "rarity-rare": { channel: "sfx", type: "triangle", freq: 659, duration: 0.28, volume: 0.6 },
  "rarity-epic": { channel: "sfx", type: "sawtooth", freq: 784, duration: 0.4, volume: 0.7 },
  "rarity-legendary": { channel: "sfx", type: "square", freq: 880, duration: 0.6, volume: 0.85 },
  "set-complete": { channel: "sfx", type: "sine", freq: 987, duration: 0.45, volume: 0.75 },
  "level-up": { channel: "sfx", type: "triangle", freq: 1174, duration: 0.5, volume: 0.7 },
  "achievement": { channel: "sfx", type: "sine", freq: 1046, duration: 0.4, volume: 0.65 },
  // Hit / combat
  "hit-don": { channel: "sfx", type: "square", freq: 180, duration: 0.08, volume: 0.7 },
  "hit-ka": { channel: "sfx", type: "square", freq: 380, duration: 0.07, volume: 0.55 },
  "hit-perfect": { channel: "sfx", type: "triangle", freq: 880, duration: 0.1, volume: 0.6 },
  "hit-good": { channel: "sfx", type: "triangle", freq: 660, duration: 0.08, volume: 0.5 },
  "miss": { channel: "sfx", type: "sawtooth", freq: 110, duration: 0.12, volume: 0.45 },
  "parry": { channel: "sfx", type: "square", freq: 1320, duration: 0.06, volume: 0.6 },
  "slice": { channel: "sfx", type: "triangle", freq: 1500, duration: 0.08, volume: 0.5 },
  // Menu / UI
  "whoosh-menu": { channel: "sfx", type: "sine", freq: 320, duration: 0.12, volume: 0.35 },
  "whoosh-swap": { channel: "sfx", type: "sine", freq: 440, duration: 0.08, volume: 0.35 },
  "tap-soft": { channel: "sfx", type: "sine", freq: 1e3, duration: 0.03, volume: 0.25 },
  "tap-click": { channel: "sfx", type: "square", freq: 500, duration: 0.03, volume: 0.3 },
  "button-confirm": { channel: "sfx", type: "triangle", freq: 700, duration: 0.12, volume: 0.4 },
  "button-cancel": { channel: "sfx", type: "triangle", freq: 300, duration: 0.12, volume: 0.35 },
  "error": { channel: "sfx", type: "sawtooth", freq: 150, duration: 0.18, volume: 0.4 },
  // Shop / economy
  "stamp-buy": { channel: "sfx", type: "square", freq: 220, duration: 0.25, volume: 0.6 },
  "reel-tick": { channel: "sfx", type: "square", freq: 980, duration: 0.03, volume: 0.3 },
  "capsule-roll": { channel: "sfx", type: "triangle", freq: 420, duration: 0.2, volume: 0.45 },
  "capsule-open": { channel: "sfx", type: "triangle", freq: 860, duration: 0.3, volume: 0.65 },
  // Ambient / cinematic
  "bell-shrine": { channel: "sfx", type: "sine", freq: 440, duration: 1, volume: 0.5 },
  "drum-big": { channel: "sfx", type: "square", freq: 110, duration: 0.3, volume: 0.75 },
  "gong": { channel: "sfx", type: "sawtooth", freq: 90, duration: 1, volume: 0.6 },
  "chime-wind": { channel: "sfx", type: "sine", freq: 1760, duration: 0.25, volume: 0.35 },
  // Cooking / craft
  "pour-water": { channel: "sfx", type: "triangle", freq: 220, duration: 0.18, volume: 0.4 },
  "slice-ingredient": { channel: "sfx", type: "square", freq: 1200, duration: 0.05, volume: 0.5 },
  "fire-ignite": { channel: "sfx", type: "sawtooth", freq: 200, duration: 0.22, volume: 0.45 },
  "pan-sizzle": { channel: "sfx", type: "sawtooth", freq: 340, duration: 0.4, volume: 0.45 },
  "craft-forge": { channel: "sfx", type: "square", freq: 140, duration: 0.3, volume: 0.6 },
  // Footsteps / world
  "footstep-grass": { channel: "sfx", type: "triangle", freq: 120, duration: 0.07, volume: 0.25 },
  "footstep-wood": { channel: "sfx", type: "square", freq: 160, duration: 0.05, volume: 0.3 },
  "footstep-stone": { channel: "sfx", type: "square", freq: 260, duration: 0.05, volume: 0.3 }
};
function playSfx(audioBus, key) {
  if (!audioBus) return;
  try {
    if (!useAppStore.getState().soundFX) return;
  } catch (e) {
  }
  const cfg = SFX_CATALOG[key];
  if (!cfg) return;
  audioBus.beep(key, cfg);
}
export {
  getAudioBus as g,
  installAudioPrewarm as i,
  playSfx as p
};
