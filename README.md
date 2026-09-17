# Mehfil (India Sound Culture Engine)

> *"Find the sound before it becomes everyone's sound."*

Mehfil is a creator-first sound culture engine that helps creators discover, understand, and post with sounds moving across India's regional music scenes—from Punjabi drill to Tamil dream-pop, Malayalam lo-fi, Bengali alternative, Gujarati folk-pop, and Hindi indie.

---

## What Shipped in Phase 1 MVP

1. **Editorial Daily Drop ("Today")**
   - 5 cultural archetypes: *Use Now*, *Rising*, *Retro Return*, *Independent Find*, and *Saturated Alternative*.
   - Explains *why* each track is moving today with direct Spotify playback links.

2. **Moment-First Post Match**
   - "What are you posting today?" selection across 10 creator moments (Outfit reveal, Travel dump, Soft launch, Wedding, College farewell, Birthday, Gym / PR, Breakup & healing, Meme / chaos, Late night thoughts).
   - Energy filters: *Soft & cinematic*, *Bold & unbothered*, *Nostalgic*, *Chaotic good*.
   - Returns 3 tailored recommendations with:
     - 10-15s hook timestamp range.
     - Trend lifecycle badge (*Early*, *Rising*, *Peaking*, *Saturated*, *Retro comeback*).
     - Best reel format match.
     - Concrete, non-cliché video execution angle.
     - **Sound Twins** (less-saturated alternatives).

3. **Sound Story Modal**
   - Full cultural deep dive: regional scene origin, visual hook cue, format instructions, Sound Twins, and outbound listening destinations (Spotify, YouTube).

4. **The Vault (Themed Boards)**
   - Curate sounds into emotional boards: *"my 2026 sound"*, *"my future wedding"*, *"songs for train journeys"*, *"college will end someday"*.
   - Create custom boards and save tracks with persistent browser storage (`localStorage`).

5. **Catch the Sound (Full-Text Search)**
   - Instant search by imperfect lyrics, song titles, artists, regional languages, scene origins, and vibes.
   - Quick-filter search suggestions with global `⌘K` / `Ctrl+K` shortcut.

6. **Catalog Breadth (32+ Active Tracks)**
   - Culturally authentic tracks spanning Hindi indie, Punjabi, Tamil, Malayalam, Telugu, Bengali, Marathi, Gujarati, Kannada, and Assamese.

---

## Project Structure & `.claude` Architecture

```
mehfil/
├── .claude/
│   ├── commands/
│   │   ├── curate-sound.md         # Workflow to scout, timestamp, and index regional tracks
│   │   ├── analyze-trend.md        # Trend velocity, lifecycle progression, and Sound Twin finder
│   │   ├── test-post-match.md      # Test moment + energy matching combinations
│   │   ├── generate-editorial.md   # Curate the 5-card daily editorial drop
│   │   └── audit-rights.md         # Music rights and outbound link verification
│   ├── skills/
│   │   ├── cultural-sound-curation/
│   │   │   └── SKILL.md            # Deep knowledge of India's multi-lingual sound ecosystems
│   │   ├── trend-stage-taxonomy/
│   │   │   └── SKILL.md            # Lifecycle classification, velocity, and Sound Twins
│   │   ├── creator-concept-engine/
│   │   │   └── SKILL.md            # 10-15s hook design & video reel editing angles
│   │   └── rights-and-attribution/
│   │       └── SKILL.md            # Platform rules, outbound licensing, metadata integrity
│   └── agents/
│       ├── sound-curator.md        # Regional sound scout & lyric/hook indexer
│       ├── trend-analyst.md        # Trend velocity, lifecycle evaluator & sound twin finder
│       ├── creator-strategist.md   # Video format & reel concept architect
│       └── catalog-auditor.md      # QA, language balance & outbound link verifier
├── index.html                      # Phase 1 MVP UI
├── styles.css                      # Bespoke Indian music magazine design system
├── app.js                          # Core engine: catalog, recommendation matching, vault, modal
├── README.md                       # Project overview & documentation
└── india-sound-culture-product-brief.md # Original product brief
```

---

## Run Locally

Serve with any static web server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js npx serve
npx serve .
```

Then open `http://localhost:8080` in your web browser.

---

## Music Rights & Platform Rules
Per Section 7 of `india-sound-culture-product-brief.md`, Mehfil never hosts, streams, or redistributes full copyrighted audio files. All music playback occurs through verified outbound links to official streaming platforms (Spotify, YouTube, Instagram Audio).
