/**
 * ====================================================================
 * ANONYMOUS EXTENDED INFILTRATION, LAUGHING SKULL & CIPHER DECRYPTION
 * ====================================================================
 */

(function () {
  'use strict';

  const CIPHER_CHARS = "01!@#$%^&*<>_[]{}—=+*~?#Ø§µΨΩ010101";

  const config = window.HACKER_CONFIG || {
    instagram: "spider_aarish",
    line1: "HAPPY HALLOWEEN",
    line2: "YOU LOOK AMAZINGGG AND HOPE YOU HAVE A GREAT YEAR!!!"
  };

  const line1Text = config.line1 || "HAPPY HALLOWEEN";
  const line2Text = config.line2 || "YOU LOOK AMAZINGGG AND HOPE YOU HAVE A GREAT YEAR!!!";
  const instaUser = config.instagram || "spider_aarish";

  // Elements
  const authTriggerPanel = document.getElementById('authTriggerPanel');
  const terminalOutput = document.getElementById('terminalOutput');
  const laughingSkullStage = document.getElementById('laughingSkullStage');
  const fullscreenCipherWall = document.getElementById('fullscreenCipherWall');
  const heroHeadline = document.getElementById('heroHeadline');
  const heroSubline = document.getElementById('heroSubline');
  const anonymousCreedBox = document.getElementById('anonymousCreedBox');
  const instaRevealContainer = document.getElementById('instaRevealContainer');
  const replayBtn = document.getElementById('replayBtn');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const matrixCanvasWall = document.getElementById('matrixCanvasWall');

  let executionStarted = false;

  // Background Matrix Canvas for Decryption Wall
  let mCtx, mWidth, mHeight, drops;
  function initMatrixCanvas() {
    if (!matrixCanvasWall) return;
    mCtx = matrixCanvasWall.getContext('2d');
    mWidth = matrixCanvasWall.width = window.innerWidth;
    mHeight = matrixCanvasWall.height = window.innerHeight;
    const fontSize = 16;
    const cols = Math.floor(mWidth / fontSize);
    drops = Array(cols).fill(1);
  }

  function drawMatrixStream() {
    if (!mCtx) return;
    mCtx.fillStyle = 'rgba(2, 3, 4, 0.12)';
    mCtx.fillRect(0, 0, mWidth, mHeight);

    mCtx.fillStyle = '#00ff66';
    mCtx.font = '14px monospace';

    for (let i = 0; i < drops.length; i++) {
      const char = CIPHER_CHARS.charAt(Math.floor(Math.random() * CIPHER_CHARS.length));
      const x = i * 16;
      const y = drops[i] * 16;

      mCtx.fillText(char, x, y);

      if (y > mHeight && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  let matrixTimer = null;
  function startMatrix() {
    initMatrixCanvas();
    if (!matrixTimer) matrixTimer = setInterval(drawMatrixStream, 33);
  }
  window.addEventListener('resize', initMatrixCanvas);

  // Audio Unlock Wrapper
  function unlockAudio() {
    if (window.soundEngine) {
      window.soundEngine.unlock();
    }
  }

  // Device Telemetry
  async function gatherTelemetry() {
    const specs = {
      model: "Mobile Device",
      platform: "Darwin 24.1.0",
      screen: `${window.screen.width}x${window.screen.height} (${window.devicePixelRatio}x)`,
      battery: "76%",
      cores: `${navigator.hardwareConcurrency || 8} Threads`,
      ip: "10.0.4.182"
    };

    const ua = navigator.userAgent;
    if (/iPhone/i.test(ua)) {
      specs.model = "Apple iPhone";
      const match = ua.match(/OS (\d+[._]\d+)/);
      specs.platform = match ? `iOS ${match[1].replace('_', '.')}` : "Darwin / iOS";
    } else if (/iPad/i.test(ua)) {
      specs.model = "Apple iPad";
      specs.platform = "iPadOS";
    } else if (/Android/i.test(ua)) {
      specs.model = "Android Host";
      if (/Samsung|SM-/i.test(ua)) specs.model = "Samsung Galaxy";
      else if (/Pixel/i.test(ua)) specs.model = "Google Pixel";
      const match = ua.match(/Android (\d+(\.\d+)?)/);
      specs.platform = match ? `Android Linux ${match[1]}` : "Linux Android";
    } else if (/Macintosh/i.test(ua)) {
      specs.model = "Apple Mac";
      specs.platform = "Darwin / macOS";
    }

    if (navigator.getBattery) {
      try {
        const b = await navigator.getBattery();
        specs.battery = `${Math.round(b.level * 100)}% [${b.charging ? 'BUS' : 'DISCHARGING'}]`;
      } catch (e) {}
    }

    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 1000);
      const res = await fetch('https://ipapi.co/json/', { signal: ctrl.signal });
      clearTimeout(t);
      if (res.ok) {
        const d = await res.json();
        if (d.ip) specs.ip = d.ip;
      }
    } catch (e) {}

    return specs;
  }

  // Reliable Mobile Auto-Scroll Helper
  function scrollTerminalToEnd() {
    const anchor = document.getElementById('scrollAnchor');
    if (anchor && anchor.scrollIntoView) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    const maxScroll = Math.max(
      document.body.scrollHeight, 
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    window.scrollTo({ top: maxScroll, behavior: 'smooth' });
  }

  function printLog(tag, content, colorClass, delay = 140) {
    return new Promise(resolve => {
      const row = document.createElement('div');
      row.className = 'log-row';
      row.innerHTML = `<span class="log-tag">[${tag}]</span><span class="log-content ${colorClass || ''}">${content}</span>`;
      terminalOutput.appendChild(row);
      scrollTerminalToEnd();

      if (window.soundEngine) {
        if (Math.random() > 0.45) {
          window.soundEngine.playKeyclick();
        } else {
          window.soundEngine.playDataPacket();
        }
      }

      setTimeout(resolve, delay);
    });
  }

  // Brute Force Password Cracker Visual Simulation
  function simulateBruteForcePassword(targetLabel, durationMs = 1800) {
    return new Promise(resolve => {
      const box = document.createElement('div');
      box.className = 'cracker-box';
      box.innerHTML = `
        <div class="cracker-header">
          <span>[+] INITIATING BRUTE-FORCE ATTACK: ${targetLabel}</span>
          <span class="speed">52,400 h/s</span>
        </div>
        <div class="cracker-stream">HASH: [ .................... ]</div>
      `;
      terminalOutput.appendChild(box);
      scrollTerminalToEnd();

      const stream = box.querySelector('.cracker-stream');
      const samplePasswords = [
        "123456", "password", "guest_2026", "secret_key", "shadow_vault", 
        "master_pin", "0xDECRYPT", "passcode_ok"
      ];

      let elapsed = 0;
      const interval = 50;
      const timer = setInterval(() => {
        elapsed += interval;
        const candidate = samplePasswords[Math.floor(Math.random() * samplePasswords.length)];
        const fakeHash = Array(16).fill(0).map(() => Math.floor(Math.random()*16).toString(16)).join('');
        stream.innerHTML = `TRY: <span style="color:#ffaa00;">${candidate}</span> &nbsp; SHA256: [${fakeHash}] -> <span style="color:#ff3355;">MISMATCH</span>`;
        scrollTerminalToEnd();

        if (window.soundEngine) window.soundEngine.playCrackJitter();

        if (elapsed >= durationMs) {
          clearInterval(timer);
          stream.innerHTML = `KEY FOUND: <span style="color:#00ff66; font-weight:800;">[ACCESS_GRANTED_2026]</span> -> <span style="color:#00ff66;">MATCH 100% [SUCCESS]</span>`;
          if (window.soundEngine) window.soundEngine.playKeyclick();
          scrollTerminalToEnd();
          setTimeout(resolve, 200);
        }
      }, interval);
    });
  }

  // Exfiltration Progress Bar Simulation
  function simulateProgressBar(label, durationMs = 1800) {
    return new Promise(resolve => {
      const box = document.createElement('div');
      box.className = 'progress-box';
      box.innerHTML = `
        <div class="progress-header">
          <span>${label}</span>
          <span class="pct">0%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill"></div>
        </div>
      `;
      terminalOutput.appendChild(box);
      scrollTerminalToEnd();

      const fill = box.querySelector('.progress-bar-fill');
      const pctDisplay = box.querySelector('.pct');

      let pct = 0;
      const interval = 40;
      const step = 100 / (durationMs / interval);

      const timer = setInterval(() => {
        pct += step;
        if (pct >= 100) {
          pct = 100;
          fill.style.width = '100%';
          pctDisplay.textContent = '100% [DONE]';
          clearInterval(timer);
          if (window.soundEngine) window.soundEngine.playKeyclick();
          scrollTerminalToEnd();
          setTimeout(resolve, 200);
        } else {
          fill.style.width = `${Math.round(pct)}%`;
          pctDisplay.textContent = `${Math.round(pct)}%`;
          scrollTerminalToEnd();
          if (window.soundEngine && Math.random() > 0.6) window.soundEngine.playDataPacket();
        }
      }, interval);
    });
  }

  // Fullscreen Cryptographic Scramble Decoder
  function decodeScrambleHero(element, finalText, speedMs = 32) {
    return new Promise(resolve => {
      const len = finalText.length;
      let frame = 0;
      const totalFrames = len + 22;

      const interval = setInterval(() => {
        frame++;
        let output = "";
        let completedChars = Math.floor((frame / totalFrames) * len);

        for (let i = 0; i < len; i++) {
          if (finalText[i] === " ") {
            output += " ";
          } else if (i < completedChars) {
            output += finalText[i];
          } else {
            output += CIPHER_CHARS.charAt(Math.floor(Math.random() * CIPHER_CHARS.length));
          }
        }

        element.textContent = output;

        if (window.soundEngine && frame % 2 === 0) {
          window.soundEngine.playDecodeTick();
        }

        if (frame >= totalFrames) {
          element.textContent = finalText;
          clearInterval(interval);
          if (window.soundEngine) window.soundEngine.playKeyclick();
          resolve();
        }
      }, speedMs);
    });
  }

  // Main Infiltration Execution
  async function runExtendedInfiltration() {
    if (executionStarted) return;
    executionStarted = true;
    unlockAudio();

    if (authTriggerPanel) {
      authTriggerPanel.style.display = 'none';
    }

    const specs = await gatherTelemetry();

    // 1. Hardware Fingerprinting
    await printLog("+", `NFC peripheral handshake established [ISO-14443-A @ 13.56 MHz]`, "green", 180);
    await printLog("*", `Probing host architecture... ${specs.model} (${specs.platform})`, "white", 220);
    await printLog("+", `Display matrix: ${specs.screen} @ 120Hz ProMotion`, "cyan", 160);
    await printLog("+", `Power bus status: ${specs.battery}`, "amber", 160);
    await printLog("*", `Hardware threads: ${specs.cores} [PINNED @ 100%]`, "", 180);

    // 2. Network Infiltration & Port Scanning
    await printLog(">", `Scanning network interfaces for ${specs.ip}...`, "cyan", 240);
    await printLog("+", `PORT 22/SSH ...... OPEN [BYPASS_SESSION_OK]`, "green", 170);
    await printLog("+", `PORT 80/HTTP ..... OPEN [MITM_PROXY_INJECTED]`, "green", 170);
    await printLog("+", `PORT 443/HTTPS ... OPEN [SSL_STRIP_ACTIVE]`, "green", 190);
    await printLog("+", `PORT 8080/WS ..... OPEN [SOCKET_TUNNEL_BOUND]`, "green", 170);
    await printLog("!", `GATEWAY ROUTER: 192.168.1.1 [FIREWALL BYPASSED]`, "amber", 240);

    // 3. Brute Force Password Cracking
    await simulateBruteForcePassword("SECURE_ENCLAVE / KEYSTORE PIN", 1800);

    // 4. Kernel Privilege Escalation
    await printLog("!", `Exploiting kernel vulnerability CVE-2026-9812...`, "red", 240);
    await printLog("*", `Overwriting process credentials: cred->cr_uid = 0;`, "", 190);
    await printLog("+", `ROOT PERMISSIONS ACQUIRED: uid=0(root) gid=0(wheel)`, "green", 260);

    // 5. Exfiltration of Files & Sensors
    await printLog("*", `Accessing Front Optical Sensor [CAMERA STREAM: 1080p @ 60fps]`, "cyan", 240);
    await simulateProgressBar("Exfiltrating /private/var/mobile/Media/DCIM (3,842 files)", 1800);

    await printLog("!", `ALL SECURITY DEFENSES COMPROMISED.`, "red", 280);
    await printLog(">", `INITIATING ROOT LOCKOUT OVERRIDE...`, "green", 500);

    // 6. LAUGHING CYBER SKULL STAGE (PRE-DECRYPTION INTERCEPT)
    await new Promise(r => setTimeout(r, 400));
    laughingSkullStage.classList.add('active');
    if (window.soundEngine) {
      window.soundEngine.playRoboticLaugh();
    }
    // Laughing skull animates for 2.8 seconds
    await new Promise(r => setTimeout(r, 2800));
    laughingSkullStage.classList.remove('active');

    // 7. FULLSCREEN CIPHER TAKEOVER
    fullscreenCipherWall.classList.add('active');
    startMatrix();

    // Decrypt Line 1: "HAPPY HALLOWEEN"
    await decodeScrambleHero(heroHeadline, line1Text, 32);
    await new Promise(r => setTimeout(r, 250));

    // Decrypt Line 2: "YOU LOOK AMAZINGGG AND HOPE YOU HAVE A GREAT YEAR!!!"
    await decodeScrambleHero(heroSubline, line2Text, 24);
    await new Promise(r => setTimeout(r, 350));

    // Play Deep Sub-bass Impact
    if (window.soundEngine) {
      window.soundEngine.playImpact();
    }

    // Reveal Anonymous Creed & Instagram Link
    anonymousCreedBox.classList.add('visible');
    instaRevealContainer.classList.add('visible');
  }

  // Replay Transmission
  function replayTransmission() {
    if (window.soundEngine) window.soundEngine.playKeyclick();
    laughingSkullStage.classList.remove('active');
    fullscreenCipherWall.classList.remove('active');
    if (matrixTimer) {
      clearInterval(matrixTimer);
      matrixTimer = null;
    }
    terminalOutput.innerHTML = '';
    heroHeadline.textContent = '';
    heroSubline.textContent = '';
    anonymousCreedBox.classList.remove('visible');
    instaRevealContainer.classList.remove('visible');
    authTriggerPanel.style.display = 'block';
    executionStarted = false;
  }

  // Event Listeners for User Gestures (Mobile Safari & Android Chrome)
  function handleUserGesture(e) {
    unlockAudio();
    if (!executionStarted && (!e.target || !e.target.closest('#audioToggleBtn'))) {
      runExtendedInfiltration();
    }
  }

  window.addEventListener('touchstart', handleUserGesture, { passive: true });
  window.addEventListener('touchend', handleUserGesture, { passive: true });
  window.addEventListener('pointerdown', handleUserGesture, { passive: true });
  window.addEventListener('click', handleUserGesture);

  if (replayBtn) {
    replayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      replayTransmission();
    });
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      unlockAudio();
      const muted = window.soundEngine.toggleMute();
      audioToggleBtn.textContent = muted ? '[AUDIO: OFF]' : '[AUDIO: ON]';
      audioToggleBtn.style.opacity = muted ? '0.5' : '1';
      if (!muted) {
        window.soundEngine.playHackerHandshake();
      }
    });
  }

})();
