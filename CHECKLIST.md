# Mehfil — Product Roadmap & Execution Checklist

A structured tracker aligning the engineering and design execution of **Mehfil (India Sound Culture Engine)** with [india-sound-culture-product-brief.md](india-sound-culture-product-brief.md).

---

## 📍 Overall Status Overview

```
[ Phase 1: MVP Core ] ───▶ [ Phase 2: Retention & Social ] ───▶ [ Phase 3: Moat & Artist Radar ]
      (COMPLETED)                     (UP NEXT)                           (FUTURE)
```

---

## Phase 1: Core Creator Utility (MVP) — Status: 95% Complete

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
  - [ ] **Audio Cue Simulation**: Interactive visualizer / play state indicator.

---

## Phase 2: Retention & Social Expression — Status: Up Next

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

## Phase 3: Moat & Artist Radar — Status: Future

The goal of Phase 3 is creating high-value data and partner intelligence for creators and artists.

- [ ] **Interactive Sound Routes**
  - [ ] Dynamic geographic map tracing how sounds migrate between cities and reels.
- [ ] **Spotify Playlist Sync**
  - [ ] Direct export of any Vault board into a personal Spotify playlist via Spotify Web API.
- [ ] **Artist Radar**
  - [ ] Dedicated surface for independent musicians to track regional velocity, creator use cases, and saves.
- [ ] **Platform & Label Partnerships**
  - [ ] Verified Instagram Reels audio deep links.
  - [ ] Label showcase drops for verified indie collectives.

---

## 🎯 Recommended Next Immediate Step

Implement the **Phase 1 Polish Items**:
1. **One-Click Reel Blueprint Copy**: Add a "Copy Reel Blueprint" button on every sound card and in the modal that copies:
   ```
   🎵 Sound: [Title] by [Artist] ([Hook Timestamp])
   🎬 Reel Format: [Best For]
   💡 Fresh Angle: [Idea]
   ✍️ Caption: [Suggested ready-to-post caption hook]
   ```
2. **Sound Route Migration Path**: Add the visual 3-node lifecycle tracker in the modal (*Scene Origin ➜ Early Adopters ➜ National FYP*).
