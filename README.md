# 🎃 Hacker NFC Halloween Party Experience 💀

Turn yourself into a legendary hacker at your Halloween party! When anyone taps your NFC card with their iPhone or Android, it instantly launches a cinematic hacker prank that looks like their phone is being completely hijacked, before blowing up in neon confetti with a heartwarming Halloween message, your socials, and a 1-tap contact save.

---

## ⚡ What Happens When They Tap Your Card

1. **Phase 0: NFC Breach Warning**
   - High-tech glowing biometric / NFC interface.
   - Matrix digital code rain falling in the background.
   - Screen says: `[ ⚠️ NFC HANDSHAKE DETECTED // TOUCH TO OVERRIDE ]`.
2. **Phase 1: Real Device Interrogation (The Freak-out)**
   - It queries their real browser & hardware specifications:
     - Their actual phone model (e.g. `Apple iPhone 15 Pro (iOS 18.2)` or `Samsung Galaxy`)
     - Display resolution & pixel ratio
     - WebGL GPU renderer name (e.g. `Apple GPU` or `Adreno 740`)
     - Actual battery percentage & charging status
     - CPU cores pinned to 100%
     - Dynamic typewriter terminal with procedural typing sounds and phone vibrations!
     - Progress bars simulating photo gallery extraction & camera compromise.
3. **Phase 2: Critical Meltdown (Red Alert)**
   - Screen flashes into a strobing red hazard warning.
   - ASCII Skull art flashes: `[ SYSTEM COMPROMISED ]`.
   - Synthesized klaxon siren blares & phone violently vibrates!
   - Countdown: `3... 2... 1...` followed by a bass drop CRT overload.
4. **Phase 3: The Big Reveal & Celebration 🎉**
   - Screen explodes with colorful Halloween confetti (pumpkins 🎃, bats 🦇, ghosts 👻, candy 🍬, skulls 💀).
   - Upbeat victory synthwave fanfare plays.
   - Glowing Halloween headline: `🎃 HAPPY HALLOWEEN! 🎃`
   - Your message: **`"You are sooo coooollll! Hope you have an amazing yearrr!"`**
   - Hacker badge with your name: **`Aarish // 0xPHANTOM`**
5. **Phase 4: Socials & Party Power Features**
   - 📸 **Instagram / TikTok / Snapchat / LinkedIn / WhatsApp** buttons
   - 💾 **"Save Contact to Phone"**: Downloads an instant `.vcf` vCard contact so they can add your number/Instagram to their contacts with 1 tap!
   - 😈 **"Prank a Friend"**: Replays the hack from the start with a clean reset so they can pass their phone to a friend.
   - 🔗 **"Share Link / AirDrop"**: Native share sheet to send it via iMessage, WhatsApp, or AirDrop.
   - ⚙️ **In-Browser Customizer**: Tap the ⚙️ icon in the top right at any time to change your handles, name, or phone number on the fly.

---

## 🚀 Quick Setup & Customization

### Option A: Edit `config.js`
Open `config.js` and update your handles:
```javascript
window.HACKER_CONFIG = {
  name: "Aarish",
  alias: "0xPHANTOM",
  halloweenMessage: "HAPPY HALLOWEEN!",
  subMessage: "You are sooo coooollll! Hope you have an amazing yearrr!",
  socials: {
    instagram: "your_handle",   // Your Instagram handle (no @)
    tiktok: "your_handle",
    snapchat: "your_handle",
    linkedin: "your_handle",
    whatsapp: "15551234567"     // With country code
  },
  contact: {
    phone: "+1 555-123-4567",
    email: "aarish@example.com"
  }
};
```

### Option B: Override via URL Parameters
You can customize the card link on the fly without touching any code!
```
https://your-site.com/?name=Aarish&ig=aarishsyed&snap=aarishsyed
```
Supported URL parameters:
- `name`: Your name
- `alias`: Hacker codename
- `ig`: Instagram handle
- `tt`: TikTok username
- `snap`: Snapchat username
- `wa`: WhatsApp phone number
- `sub`: Custom quote message

### Option C: In-Browser Editor (At the Party!)
Tap the **⚙️** icon in the top right corner of the website from your phone at any time. Type your new handles, tap **Save & Apply Now**, and it updates immediately and persists in `localStorage`!

---

## 🌐 How to Host It Online in 60 Seconds (Free)

Your website must have a public `https://` link so mobile phones can open it when tapped. Here are the 3 fastest free ways:

### 1. Netlify Drop (Easiest - 15 Seconds)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this entire `halloween` folder into the browser window.
3. Done! Netlify gives you an instant live URL like `https://spooky-hacker-2026.netlify.app`.

### 2. Vercel
Run in terminal:
```bash
npx vercel
```
Follow the prompts, and your site is live instantly!

### 3. GitHub Pages
1. Push this folder to a GitHub repository.
2. In your repo: **Settings** -> **Pages** -> Source: `main` branch `/ (root)`.
3. Your site is live at `https://<username>.github.io/<repo-name>`.

---

## 💳 How to Write the URL to Your NFC Card

You can use standard, inexpensive NFC cards, stickers, keychains, or wristbands (e.g. **NTAG213, NTAG215, or NTAG216**).

1. Download the free app **NFC Tools** on your phone:
   - [iOS App Store](https://apps.apple.com/app/nfc-tools/id1252962749)
   - [Android Google Play](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc)
2. Open **NFC Tools** and tap **Write**.
3. Tap **Add a record** ➡️ Select **URL / URI**.
4. Paste your hosted URL (e.g. `https://your-site.netlify.app`).
5. Tap **Write** (or **Write / 28 Bytes**).
6. Hold your NFC card against the back of your phone:
   - **iPhone**: Hold card near the top edge next to the camera bump.
   - **Android**: Hold card against the center back of the phone.
7. You will hear a success chime and see a green checkmark!

---

## 🎭 Party Hacker Pro-Tips

1. **Card Placement in Costume**:
   - Slip the NFC card inside a black fingerless hacker glove on your palm or wrist.
   - When you shake hands or "fist bump" someone with their phone out, you tap their phone and say: *"I just injected a probe into your device."*
   - Or stick the NFC tag to a fake "Cybersecurity Department / FBI / Anonymous" lanyard badge and tell people to tap your badge to verify your clearance!
2. **Audio Auto-Play**:
   - Mobile browsers (Safari/Chrome) require a single screen touch to enable sound.
   - The initial screen has a pulsating `[ ⚡ TOUCH TO OVERRIDE ]` button. Once they touch the screen, all sound effects, alarms, and vibrations engage automatically!
3. **Prank Replay**:
   - After someone experiences it, they will want to prank their friends! Just tap **😈 Prank a Friend** to restart the countdown so they can hand their phone over!

