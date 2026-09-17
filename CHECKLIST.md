# Mehfil — Product Roadmap & Execution Checklist

A structured tracker aligning the engineering and design execution of **Mehfil (India Sound Culture Engine)** with [india-sound-culture-product-brief.md](india-sound-culture-product-brief.md).

---

## 📍 Overall Status Overview

```
[ Phase 1: MVP Core ] ───▶ [ Phase 2: Retention & Social ] ───▶ [ Phase 3: Moat & Artist Radar ]
      (COMPLETED)                     (COMPLETED)                         (CURRENT FOCUS)
```

---

## Phase 1: Core Creator Utility (MVP) — Status: 100% Complete

The primary goal of Phase 1 is shortening the journey from *"I want to post"* to *"I have the right sound and a stronger idea."*

- [x] **Curated Regional Catalog (30+ Sounds)**
  - [x] 33 culturally authentic sounds across 10+ language scenes (Hindi, Punjabi, Tamil, Telugu, Malayalam, Marathi, Bengali, Gujarati, Kannada, Assamese, Haryanvi, Kashmiri).
  - [x] Explicit 10–15s hook timestamps for each sound.
  - [x] Concrete format match and non-cliché "Fresh Angle" for every track.
  - [x] Verified outbound streaming links (Spotify / YouTube).
  - [x] "Sound Twins" paired with peaking and saturated tracks.
- [x] **Moment-First Post Match**
  - [x] 10 creator moments (Outfit reveal, Travel dump, Soft launch, Wedding, Farewell, Birthday, Gym / PR, Breakup, Meme, Late night).
  - [x] 4 energy selectors (Soft & cinematic, Bold & unbothered, Nostalgic, Chaotic good).
  - [x] Dynamic matching returning 3 tailored recommendation cards.
- [x] **Today Editorial Drop**
  - [x] 5 daily sound archetypes (*Use Now*, *Rising*, *Retro Return*, *Independent Find*, *Saturated Alternative*).
  - [x] Contextual notes explaining why each track is moving today.
- [x] **The Vault (Retention Boards)**
  - [x] Default themed boards (*my 2026 sound*, *my future wedding*, *songs for train journeys*, *college will end someday*).
  - [x] Custom board creation and sound deletion.
  - [x] Browser `localStorage` persistence.
- [x] **Catch The Sound (Search)**
  - [x] Full-text search over imperfect lyrics, song titles, artists, scenes, and vibes.
  - [x] Quick-filter chips and `⌘K` / `Ctrl+K` shortcut.
- [x] **Sound Story Modal**
  - [x] Scene origin breakdown, hook cue, format match, and outbound destinations.
- [x] **`.claude` System Setup**
  - [x] 5 commands (`curate-sound`, `analyze-trend`, `test-post-match`, `generate-editorial`, `audit-rights`).
  - [x] 4 skills (`cultural-sound-curation`, `trend-stage-taxonomy`, `creator-concept-engine`, `rights-and-attribution`).
  - [x] 4 agents (`sound-curator`, `trend-analyst`, `creator-strategist`, `catalog-auditor`).
- [x] **Phase 1 Polish Items**:
  - [x] **One-Click Reel Blueprint Copy**: Copy formatted caption, hook timing, and audio credit with one click directly from cards and modal.
  - [x] **Sound Route Stage Visualizer**: Visual 3-node migration path (*Origin → Campus / Niche → National*) with live stage indicators and commentary in Sound Story modal.

---

## Phase 2: Retention & Social Expression — Status: 100% Complete

The goal of Phase 2 is making discovery personal, shareable, and community-driven.

- [x] **Taste Passport**
  - [x] Generate personal cultural identity summary based on saved Vault tracks (e.g., *"40% Malayalam Lo-Fi, 30% Punjabi Street"*).
  - [x] Persona archetype assignment (*The Southern Cinema Dreamer, The High-Octane Stylist, The Poetic Indie Archivist, etc.*).
  - [x] Pre-saturation discovery score calculator.
  - [x] One-click bio text copy & high-resolution PNG card download via Canvas.
- [x] **Shareable Board Cards (Instagram Story Export)**
  - [x] Generate an editorial 9:16 vertical graphic card preview of any Vault board.
  - [x] 1-Click high-resolution 1080x1920 PNG export via HTML5 Canvas.
  - [x] One-click Story caption/tracklist text copy for story stickers.
- [x] **Scene & City Explorer**
  - [x] Dedicated regional creative hub browser covering 11 subcultures (Kochi, Chandigarh, Chennai, Delhi, Kolkata, Hyderabad, Bengaluru, Ahmedabad, Pune, Guwahati).
  - [x] Scene manifestos, aesthetic sound signatures, and instant hub-filtered catalog.
- [x] **Creator Submissions Flow**
  - [x] Interactive submission modal allowing creators to submit tracks, 10-15s hooks, reel formats, and fresh execution angles.
  - [x] Integrated into local queue and aligned with `.claude/commands/curate-sound.md` protocol.
- [x] **Weekly Editorial Editions**
  - [x] Multi-edition drop switcher in Today section (*Vol. 01 — Sep ’26*, *Vol. 02 — Campus Edits*, *Vol. 03 — Monsoon Acoustics*).
  - [x] Dynamic re-rendering of the 5 daily archetypes with bespoke editorial notes.

---

## Phase 3: Moat & Artist Radar — Status: Current Focus

The goal of Phase 3 is creating high-value data and partner intelligence for creators and artists.

- [x] **Interactive Geographic Sound Routes Map**
  - [x] Dynamic vector/SVG map of India tracing how sounds migrate between cities and reels (e.g. Ludhiana ➔ Delhi ➔ Pan-India).
  - [x] Animated node journeys with velocity stats, cultural commentary, and city creators.
  - [x] Interactive city pin inspection and corridor switching.
  - [x] Integrated "Trace on Map" connection directly from the Sound Story modal.
- [x] **Audio Cue / Synth Preview Simulator**
  - [x] Web Audio API procedural ambient harmonic synthesizer for 10-15s hook previews (100% zero copyright infringement).
  - [x] 4 authentic regional acoustic archetypes: *Warm Lo-Fi & Tape Flutter*, *Desi Drill & 808 Pulse*, *Retro Synthwave & Arp Groove*, *Acoustic Baul & Folk Chime*.
  - [x] Real-time dynamic HTML5 Canvas audio waveform visualizer.
  - [x] Interactive hook preview triggers on Sound Cards (vinyl click & cue button), Today feed, Scene Explorer, Route Dossier, and Sound Story modal.
- [ ] **Spotify Playlist Web Sync**
  - [ ] 1-Click export of any Vault board into a Spotify search/playlist intent or formatted tracklist import.
- [ ] **Artist Radar Surface**
  - [ ] Dedicated intelligence dashboard for independent musicians to track regional velocity, reel moment adoption, and creator tiers.
  - [ ] Claim Sound / Submit Alt-Mix flow for artists.

---

## 🎯 Recommended Next Immediate Step

Build **Phase 3: Moat & Artist Radar**:
1. **Interactive Geographic Sound Routes Map**: Visual interactive map with cultural migration arcs.
2. **Audio Cue / Synth Preview Simulator**: Zero-infringement procedural Web Audio pulse for 10-15s hook preview.
3. **Spotify Playlist Sync**: Export Vault boards directly to Spotify.
4. **Artist Radar**: Analytics portal for independent regional musicians.
