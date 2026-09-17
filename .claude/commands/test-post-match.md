# /test-post-match

Verify and test the Post Match recommendation engine across all supported creator moments and energy states.

## Purpose
Ensure that any user post moment (e.g. Outfit, Travel, Soft Launch, Wedding, Farewell, Birthday, Gym, Breakup, Meme) returns 3 diverse, high-quality sounds that match the selected energy.

## Test Matrix

| Moment | Energy Option | Expected Criteria |
|---|---|---|
| `outfit` | `soft` (Soft & cinematic) | Subtle, stylish indie/lo-fi; hook allows garment reveal on beat |
| `outfit` | `bold` (Bold & unbothered) | High-groove Punjabi/hip-hop/street energy; distinct cadence |
| `travel` | `nostalgic` (Nostalgic) | Melodic travelogue, train journey vibe, landscape fit |
| `travel` | `chaotic` (Chaotic good) | High-tempo road trip, quick cuts, energetic pulse |
| `wedding` | `soft` (Soft & cinematic) | Intimate candid moment, acoustic/sufi/melodic entry |
| `farewell` | `nostalgic` (Nostalgic) | Bittersweet indie/retro rock, collegiate memory edit |
| `gym` | `bold` (Bold & unbothered) | High adrenaline, heavy bass/dhol/brass, PR lift timing |
| `breakup` | `soft` or `nostalgic` | Contemplative, moody, moving forward without melodrama |
| `meme` | `chaotic` (Chaotic good) | Irreverent hook, comedic pause, punchline synchrony |

## Verification Criteria
- Returns exactly 3 sound cards.
- Sound cards must never include duplicate tracks.
- At least 1 of the 3 should be Early or Rising to honor the core product promise.
- Non-Hindi scenes must be represented proportionally across results.
