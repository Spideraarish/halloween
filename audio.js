/**
 * ====================================================================
 * ANONYMOUS CYBER AUDIO SYNTHESIZER
 * Procedural Audio: Handshakes, Typing, Data Streams, Cyber Laugh & Decrypt
 * ====================================================================
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.masterGain = null;
    this.initialized = false;
    this.ambientGain = null;
    this.ambientOsc = null;
    this.ambientActive = false;
  }

  // Synchronous unlock called directly from touch/click handler
  unlock() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!this.ctx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.muted ? 0 : 0.75, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      // Wake up DAC hardware on iOS
      const buffer = this.ctx.createBuffer(1, 1, 22050);
      const source = this.ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(this.ctx.destination);
      source.start(0);

      this.initialized = true;

      if (!this.ambientActive) {
        this.startCyberAmbience();
      }
      this.playHackerHandshake();
    } catch (e) {
      console.warn("Audio unlock error:", e);
    }
  }

  init() {
    this.unlock();
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.muted ? 0 : 0.75, this.ctx.currentTime);
    }
    return this.muted;
  }

  // Low ambient cyber server hum
  startCyberAmbience() {
    if (this.ambientActive || !this.ctx || this.muted) return;
    try {
      this.ambientOsc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      this.ambientGain = this.ctx.createGain();

      this.ambientOsc.type = 'sawtooth';
      this.ambientOsc.frequency.setValueAtTime(70, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(160, this.ctx.currentTime);

      this.ambientGain.gain.setValueAtTime(0.14, this.ctx.currentTime);

      this.ambientOsc.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.masterGain);

      this.ambientOsc.start();
      this.ambientActive = true;
    } catch (e) {}
  }

  // Modem / cyber electronic handshake chirp
  playHackerHandshake() {
    if (this.muted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const freqs = [920, 1500, 1050, 1920, 2400, 1300];
      const now = this.ctx.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.15, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.045);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.05);
      });
    } catch (e) {}
  }

  // Mechanical typing keyclick
  playKeyclick() {
    if (this.muted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      
      const freqs = [1600, 2100, 2500, 1350, 2900];
      osc.frequency.setValueAtTime(freqs[Math.floor(Math.random() * freqs.length)], this.ctx.currentTime);

      gain.gain.setValueAtTime(0.09, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch (e) {}
  }

  // Rapid electronic data packet chirp
  playDataPacket() {
    if (this.muted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';

      const freq = 1200 + Math.random() * 900;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(freq + (Math.random() > 0.5 ? 200 : -200), this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.045);
    } catch (e) {}
  }

  // Password cracking rapid digital jitter
  playCrackJitter() {
    if (this.muted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';

      const freq = 600 + Math.random() * 1200;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch (e) {}
  }

  // Digitized Robotic Laugh Sound for Laughing Skull ("HA-HA-HA-HA")
  playRoboticLaugh() {
    if (this.muted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const laughChirps = [
        { f: 520, t: 0.00 },
        { f: 480, t: 0.16 },
        { f: 430, t: 0.32 },
        { f: 380, t: 0.48 },
        { f: 490, t: 0.68 },
        { f: 440, t: 0.84 },
        { f: 390, t: 1.00 },
        { f: 340, t: 1.16 }
      ];

      const now = this.ctx.currentTime;
      laughChirps.forEach(c => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        
        // Pitch drop envelope for authentic "HA!" articulation
        osc.frequency.setValueAtTime(c.f + 140, now + c.t);
        osc.frequency.exponentialRampToValueAtTime(c.f - 60, now + c.t + 0.12);

        gain.gain.setValueAtTime(0.16, now + c.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + c.t + 0.13);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + c.t);
        osc.stop(now + c.t + 0.14);
      });
    } catch (e) {}
  }

  // Rapid cipher decode tick for fullscreen scramble
  playDecodeTick() {
    if (this.muted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';

      const freq = 950 + Math.random() * 850;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.035);
    } catch (e) {}
  }

  // Deep cinematic sub-bass boom when decrypted
  playImpact() {
    if (this.muted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';

      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(26, now + 1.4);

      gain.gain.setValueAtTime(0.85, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(now + 1.55);
    } catch (e) {}
  }
}

window.soundEngine = new SoundEngine();
