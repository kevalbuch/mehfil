# /curate-sound

Scout, evaluate, and index a new Indian regional sound into the Mehfil catalog according to the editorial rules defined in the product brief.

## Purpose
Ensure every sound added to Mehfil is culturally legible, creator-ready, respects music rights, and fulfills the primary promise: *"Find the sound before it becomes everyone's sound."*

## Usage
Run `/curate-sound [Song Title] by [Artist] ([Language/Scene])` or invoke this workflow when processing a new track candidate.

## Step-by-Step Curation Protocol

1. **Verify Metadata & Scene Origin**
   - Track Name & Featured Artists
   - Language & Scene (e.g., *Punjabi indie, Tamil cinematic, Malayalam lo-fi, Bengali alternative, Gujarati folk-pop, Marathi hip-hop, Hindi indie, Assamese dream-pop*)
   - Label / Film / Platform credit (strictly outbound destination, no hosted audio files)

2. **Determine Trend Stage**
   - **Early**: Visible in a tight cultural niche or regional campus; not yet widely duplicated.
   - **Rising**: Clear momentum in creative edits; ideal time to post before saturation.
   - **Peaking**: Broad reach across Reels/Shorts; high risk of clichés; requires fresh execution.
   - **Saturated**: Overplayed, generic audio; must display a *Sound Twin* alternative.
   - **Retro Comeback**: Classic track resurfacing through nostalgic or ironic reel behavior.

3. **Pinpoint the 10-15s Hook Timestamp**
   - Identify the exact emotional or rhythmic moment for short-form video (e.g. `0:34 — 0:49`).
   - Specify the cue: vocal drop, bass switch, lyrical punchline, or instrumental swell.

4. **Define Creator Fit & Fresh Execution Angle**
   - **Best For**: The reel format that best complements the rhythm (e.g. *3-cut mirror outfit reveal*, *film-camera photo dump*, *train window transition*, *unposed wedding candid*).
   - **Fresh Angle**: Exactly one counter-intuitive or tactile creative direction that prevents copy-paste trends.

5. **Identify Sound Twins**
   - Pair with 1-2 lesser-known tracks that share the same rhythmic tempo or emotional resonance, offering creators an alternative if this track is peaking or saturated.

6. **Generate Catalog Entry JSON**
   Format as:
   ```json
   {
     "id": "track-id-slug",
     "title": "Track Title",
     "artist": "Artist Name",
     "language": "Scene / Language",
     "stage": "Early | Rising | Peaking | Saturated | Retro comeback",
     "hook": "0:35 — 0:50",
     "best": "Best for [specific format]",
     "idea": "[Concrete creator execution concept]",
     "soundTwins": ["Alternative Track 1", "Alternative Track 2"],
     "outboundUrl": "https://open.spotify.com/search/Track%20Title%20Artist",
     "energy": "soft | bold | nostalgic | chaotic",
     "moments": ["outfit", "travel", "wedding", ...]
   }
   ```
