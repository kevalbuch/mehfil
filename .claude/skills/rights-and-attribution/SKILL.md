---
name: rights-and-attribution
description: Compliance standards for music rights, platform policies, outbound destination linking, and editorial attribution.
---

# Rights and Attribution Skill

## Overview
Mehfil is built around platform reality and music-licensing ethics. We never scrape fragile private APIs or host unauthorized audio files.

## Core Rules

### 1. No Hosted Audio
- Mehfil does not store `.mp3`, `.wav`, or `.aac` files on servers or repositories.
- Audio playback happens via permitted outbound web intents (Spotify Web Search, Apple Music, YouTube Music, Instagram Reels audio pages).

### 2. Outbound Search Links
Construct clean, compliant outbound links that direct users directly to licensed streaming services:
```javascript
function getOutboundUrl(title, artist) {
  const query = encodeURIComponent(`${title} ${artist}`);
  return `https://open.spotify.com/search/${query}`;
}
```

### 3. Clear Attribution
Every sound card and detail modal must state:
- Track Title
- Primary Artist(s), Composers, Producers
- Language Scene
- Label / Film / Independent Collective origin

### 4. Creator Correction Workflow
- Provide a clear interface for artists and listeners to submit corrections if trend stages, timestamps, or credits are inaccurate.
- Label all data transparently: *"Curated editorial intelligence. Not an algorithmic scraping product."*
