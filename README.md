# STS Group B · Health, Society, and HIV & AIDS Education
## Modern Interactive Presentation Deck & Social Media Carousel

This project upgrades the original Canva HTML presentation into an interactive **React + TypeScript + Vite** slide deck engineered for high visual quality, smooth presentation delivery, and seamless embedding (e.g. Canva embed, Notion, website `<iframe>`, or standalone deployment).

---

### 🌟 Key Enhancements

1. **Realistic Instagram & Facebook Social Media Simulator**:
   - **Interactive Carousel**: Swipe or drag on touch/mouse, arrow buttons, card pagination indicator (`1/3`).
   - **Double-tap heart interaction**: Double-clicking/tapping the card bursts a heart animation.
   - **Interactive actions**: Like, bookmark/save state toggles, and expanding "See more" captions with official tags (`#UNCCares #KnowYourStatusBicol #RA11166 #EndTheStigma #NagaCityHealth`).
   - **Platform Switcher**: Toggle seamlessly between **Instagram** feed view and **Facebook** post view.

2. **Responsive 16:9 Presentation Canvas & Embed Scaler**:
   - Built inside a responsive `ResizeObserver` stage that preserves a crisp 1280×720 aspect ratio at any embed container width or height.
   - Fixed slide scrolling/overflow issues with scroll-safe phone mockups.

3. **Curated Editorial Typography & Design Aesthetics**:
   - Custom fonts: **Fraunces** (editorial serif display) paired with **Plus Jakarta Sans** (clean, readable interface typography).
   - Rich color palette: Deep crimson (`#5a0d16`), vibrant accents (`#c42a38`), warm paper tones (`#fbf7f1`), and champagne gold accents (`#f2b544`).
   - Dynamic slide transitions with direction-aware slide animations.

4. **14 Complete Slides Covering STS Reporting Requirements**:
   - **Slide 1**: Title & Overview (Creative Director intro, Group B, UNC).
   - **Slide 2**: HIV vs. AIDS Clinical & Biological Distinction.
   - **Slide 3**: Modern Health Technology (RDTs, PrEP, PEP, ART) & the U=U Consensus.
   - **Slide 4**: Republic Act No. 11166 (Age 15+ Testing & Youth Consent without parental permission).
   - **Slide 5**: RA 11166 Privacy, Medical Confidentiality & Anti-Discrimination Penalties.
   - **Slide 6**: Rising Youth Cases in the Philippines & the 4 Pillars of Stigma.
   - **Slide 7**: Part 2 Deliverable Introduction & Workflow.
   - **Slide 8**: AI Audit (Transmission Myths 1–3) with flagged language removal matrix.
   - **Slide 9**: AI Audit (Testing Myths 4–5) with Philippine law & Naga City reality checks.
   - **Slide 10**: Ready-to-Post 3-Slide Carousel Overview with mock Instagram preview.
   - **Slide 11**: Zoom-In Card 1 (Transmission Myths vs. Facts breakdown & U=U).
   - **Slide 12**: Zoom-In Card 2 (Testing Myths & RA 11166 Student Rights).
   - **Slide 13**: Zoom-In Card 3 (Naga City Hygiene Clinic, BMC SAGIP, & CamSur RHUs).
   - **Slide 14**: Official References (Official Gazette, DOH, WHO) & Mandatory AI Transparency Disclosure.

---

### 🚀 Running the Project

#### 1. In Local Development:
```bash
cd "C:\Users\milliscent claire\.gemini\antigravity-ide\scratch\sts-hiv-deck"
npm run dev
```
Open [http://localhost:5180](http://localhost:5180) in your browser.

#### 2. Keyboard & Touch Controls:
- **Next Slide**: Right Arrow `→`, `PageDown`, `Space`, or screen click.
- **Previous Slide**: Left Arrow `←`, `PageUp`.
- **First / Last**: `Home` / `End`.
- **Fullscreen**: Press `F` or click the fullscreen toggle icon `⛶` in the bottom bar.
- **Deep Linking**: Navigating updates the URL hash (`#1`, `#2`, ..., `#14`).

#### 3. Embedding in Canva / Web Pages:
Use an iframe pointing to the hosted bundle:
```html
<iframe
  src="https://your-deployment-url/#1"
  width="100%"
  height="650"
  style="border: none; border-radius: 16px; overflow: hidden;"
  allow="fullscreen"
></iframe>
```
