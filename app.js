/**
 * MEHFIL — India Sound Culture Engine (Phase 1 MVP)
 * Based on india-sound-culture-product-brief.md
 * Curated editorial catalog representing India's regional scenes equally.
 */

// 1. Curated Sound Catalog (32+ tracks across India's language scenes)
const catalog = [
  // HINDI INDIE & RETRO
  {
    id: "aankhon-se-batana",
    title: "Aankhon Se Batana",
    artist: "Dikshant",
    language: "Hindi indie",
    scene: "Delhi bedroom pop",
    stage: "Early",
    hook: "0:41 — 0:54",
    best: "Best for a sunset-fit reveal",
    idea: "Let the first look land in complete stillness. Reveal fabric details only when the acoustic guitar opens.",
    soundTwins: ["Roz Roz (Acoustic)", "Bikhra"],
    outboundUrl: "https://open.spotify.com/search/Aankhon%20Se%20Batana%20Dikshant",
    tone: "peach",
    energy: "soft",
    moments: ["outfit", "soft-launch", "late-night"],
    art: "soft focus / 01"
  },
  {
    id: "iraaday",
    title: "Iraaday",
    artist: "Abdul Hannan & Rovalio",
    language: "Urdu / Hindi indie",
    scene: "Lahore / Delhi crossover",
    stage: "Rising",
    hook: "0:32 — 0:47",
    best: "Best for an effortless mirror edit",
    idea: "Three cuts only: before, in-between, the look. Don’t rush the last frame before the beat fades.",
    soundTwins: ["Bikhra", "Kho Gaye"],
    outboundUrl: "https://open.spotify.com/search/Iraaday%20Abdul%20Hannan",
    tone: "violet",
    energy: "soft",
    moments: ["outfit", "soft-launch", "birthday"],
    art: "after light / 02"
  },
  {
    id: "mann-mera",
    title: "Mann Mera (Lo-Fi)",
    artist: "Srinivas, Lo-Fi rework",
    language: "Hindi",
    scene: "Mumbai film archive rework",
    stage: "Retro comeback",
    hook: "0:18 — 0:33",
    best: "Best for a photo dump with a pulse",
    idea: "Use film-camera flash frames on the snare hits, then leave one unposed candid image at the end.",
    soundTwins: ["Jaane Woh Kaise", "Choo Lo"],
    outboundUrl: "https://open.spotify.com/search/Mann%20Mera%20Lofi",
    tone: "ink",
    energy: "nostalgic",
    moments: ["farewell", "travel", "soft-launch"],
    art: "found on film / 03"
  },
  {
    id: "maya",
    title: "Maya",
    artist: "The Yellow Diary",
    language: "Hindi alt-rock",
    scene: "Mumbai indie rock",
    stage: "Early",
    hook: "0:49 — 1:04",
    best: "Best for an unplanned train-window edit",
    idea: "Pan past the landscape first. Let the person enter frame only when the drum fill resolves.",
    soundTwins: ["Roz Roz", "Choo Lo"],
    outboundUrl: "https://open.spotify.com/search/Maya%20The%20Yellow%20Diary",
    tone: "moss",
    energy: "nostalgic",
    moments: ["travel", "farewell", "late-night"],
    art: "go somewhere / 04"
  },
  {
    id: "choo-lo",
    title: "Choo Lo",
    artist: "The Local Train",
    language: "Hindi indie rock",
    scene: "Chandigarh / Delhi college anthem",
    stage: "Retro comeback",
    hook: "0:45 — 1:00",
    best: "Best for the last college walk",
    idea: "Show empty spaces before faces: the bench, the gate, the empty chai stall before group hugs.",
    soundTwins: ["Aaftaab", "Maya"],
    outboundUrl: "https://open.spotify.com/search/Choo%20Lo%20The%20Local%20Train",
    tone: "blue",
    energy: "nostalgic",
    moments: ["farewell", "breakup", "travel"],
    art: "last bell / 05"
  },
  {
    id: "heeriye",
    title: "Heeriye",
    artist: "Jasleen Royal & Arijit Singh",
    language: "Punjabi / Hindi",
    scene: "Mainstream pop",
    stage: "Saturated",
    hook: "0:17 — 0:32",
    best: "Loved, but saturated in wedding entries",
    idea: "Too overplayed for standard reveals. Consider its Sound Twin 'Aankhon Se Batana' or use unedited audio.",
    soundTwins: ["Aankhon Se Batana", "Kangal Edho"],
    outboundUrl: "https://open.spotify.com/search/Heeriye%20Jasleen%20Royal",
    tone: "gold",
    energy: "soft",
    moments: ["wedding", "birthday"],
    art: "everywhere / 06"
  },
  {
    id: "kho-gaye",
    title: "Kho Gaye",
    artist: "Taaruk Raina",
    language: "Hindi indie",
    scene: "Delhi bedroom acoustic",
    stage: "Early",
    hook: "0:28 — 0:42",
    best: "Best for late-night candid thoughts",
    idea: "Shoot handheld with warm lamp lighting. Keep the cuts slow and rhythmically detached from the guitar.",
    soundTwins: ["Iraaday", "Roz Roz"],
    outboundUrl: "https://open.spotify.com/search/Kho%20Gaye%20Taaruk%20Raina",
    tone: "peach",
    energy: "soft",
    moments: ["late-night", "soft-launch", "breakup"],
    art: "quiet hour / 07"
  },

  // PUNJABI
  {
    id: "khaab",
    title: "Khaab",
    artist: "Akhil",
    language: "Punjabi romantic",
    scene: "Jalandhar / Punjab heartland",
    stage: "Peaking",
    hook: "0:36 — 0:51",
    best: "Best for a dramatic entrance",
    idea: "Skip the obvious slow-mo walk. Frame the entrance through other people's candid reactions.",
    soundTwins: ["Gal Sunja", "Samayama"],
    outboundUrl: "https://open.spotify.com/search/Khaab%20Akhil",
    tone: "amber",
    energy: "nostalgic",
    moments: ["wedding", "outfit", "birthday"],
    art: "golden hour / 08"
  },
  {
    id: "gal-sunja",
    title: "Gal Sunja",
    artist: "Wazir Patar",
    language: "Punjabi indie",
    scene: "Majha street wave",
    stage: "Early",
    hook: "0:44 — 0:58",
    best: "Best for night city driving / street outfit",
    idea: "Low-angle rolling shots through rear-view mirrors. Cut exactly on the snare kick.",
    soundTwins: ["Kohra", "Big Dawgs"],
    outboundUrl: "https://open.spotify.com/search/Gal%20Sunja%20Wazir%20Patar",
    tone: "ink",
    energy: "bold",
    moments: ["outfit", "travel", "gym"],
    art: "street pulse / 09"
  },
  {
    id: "kohra",
    title: "Kohra",
    artist: "Prabh Deep",
    language: "Punjabi alt-hip-hop",
    scene: "West Delhi underground",
    stage: "Early",
    hook: "1:02 — 1:16",
    best: "Best for intense gym sets or gritty street reels",
    idea: "Monochrome grading. Start during the warm-up bar, and drop into maximum intensity as the beat cuts in.",
    soundTwins: ["Gal Sunja", "Big Dawgs"],
    outboundUrl: "https://open.spotify.com/search/Kohra%20Prabh%20Deep",
    tone: "moss",
    energy: "bold",
    moments: ["gym", "outfit", "meme"],
    art: "concrete / 10"
  },
  {
    id: "big-dawgs",
    title: "Big Dawgs",
    artist: "Hanumankind & Kalmi",
    language: "English / Indian hip-hop",
    scene: "Bengaluru / Kerala underground",
    stage: "Peaking",
    hook: "0:42 — 0:56",
    best: "Best for heavy barbell PRs and high-octane cuts",
    idea: "High frame-rate shake on the chalk dust release. Don't use standard gym cuts; sync to the percussion roll.",
    soundTwins: ["Kohra", "Gal Sunja"],
    outboundUrl: "https://open.spotify.com/search/Big%20Dawgs%20Hanumankind",
    tone: "amber",
    energy: "bold",
    moments: ["gym", "outfit", "travel"],
    art: "well of death / 11"
  },

  // TAMIL
  {
    id: "kangal-edho",
    title: "Kangal Edho",
    artist: "Dhibu Ninan Thomas",
    language: "Tamil indie-acoustic",
    scene: "Chennai melodic wave",
    stage: "Rising",
    hook: "0:27 — 0:42",
    best: "Best for an inside-joke photo carousel",
    idea: "Build around tiny, absurd evidence of the day—blurred laughs, spilled filter coffee, not posed portraits.",
    soundTwins: ["Engengo", "Aalolam"],
    outboundUrl: "https://open.spotify.com/search/Kangal%20Edho%20Dhibu%20Ninan",
    tone: "red",
    energy: "soft",
    moments: ["soft-launch", "birthday", "travel"],
    art: "little proofs / 12"
  },
  {
    id: "katchi-sera",
    title: "Katchi Sera",
    artist: "Sai Abhyankkar",
    language: "Tamil pop-funk",
    scene: "Chennai indie breakout",
    stage: "Peaking",
    hook: "0:30 — 0:45",
    best: "Best for upbeat wedding sangeet steps",
    idea: "Turn the camera around to film the youngest kids and grandparents trying the hook step together.",
    soundTwins: ["Engengo", "Samayama"],
    outboundUrl: "https://open.spotify.com/search/Katchi%20Sera%20Sai%20Abhyankkar",
    tone: "gold",
    energy: "chaotic",
    moments: ["wedding", "birthday", "meme"],
    art: "brass dance / 13"
  },
  {
    id: "engengo",
    title: "Engengo",
    artist: "Sean Roldan & Pradeep Kumar",
    language: "Tamil acoustic",
    scene: "Madurai / Chennai acoustic roots",
    stage: "Early",
    hook: "0:52 — 1:07",
    best: "Best for coastal drives and quiet travelogues",
    idea: "Frame the ocean horizon through open car windows. Let the acoustic guitar solo carry the whole frame.",
    soundTwins: ["Kangal Edho", "Malare"],
    outboundUrl: "https://open.spotify.com/search/Engengo%20Sean%20Roldan",
    tone: "blue",
    energy: "nostalgic",
    moments: ["travel", "farewell", "late-night"],
    art: "coastline / 14"
  },
  {
    id: "nenjame",
    title: "Nenjame",
    artist: "Anirudh Ravichander",
    language: "Tamil soul",
    scene: "Chennai cinematic soul",
    stage: "Rising",
    hook: "0:48 — 1:03",
    best: "Best for breakup reflections and self-care resets",
    idea: "Focus on mundane solo rituals: boiling water for tea, folding clothes, looking out at rain in silence.",
    soundTwins: ["Engengo", "Choo Lo"],
    outboundUrl: "https://open.spotify.com/search/Nenjame%20Anirudh",
    tone: "violet",
    energy: "soft",
    moments: ["breakup", "late-night", "travel"],
    art: "quiet rebuild / 15"
  },

  // MALAYALAM
  {
    id: "malare",
    title: "Malare",
    artist: "Vijay Yesudas",
    language: "Malayalam",
    scene: "Kochi college romance classic",
    stage: "Retro comeback",
    hook: "0:39 — 0:54",
    best: "Best for a quiet soft launch",
    idea: "No dramatic face reveal needed. An unposed hand sharing tea or touching foliage makes it feel authentic.",
    soundTwins: ["Aalolam", "Kangal Edho"],
    outboundUrl: "https://open.spotify.com/search/Malare%20Vijay%20Yesudas",
    tone: "rose",
    energy: "soft",
    moments: ["soft-launch", "travel", "farewell"],
    art: "almost said / 16"
  },
  {
    id: "aalolam",
    title: "Aalolam",
    artist: "Job Kurian",
    language: "Malayalam indie-folk",
    scene: "Thiruvananthapuram roots",
    stage: "Early",
    hook: "0:34 — 0:49",
    best: "Best for monsoon travel and misty hillside reels",
    idea: "Slow pans across emerald tea gardens and rain falling on leaves. Time the vocal swell with a wide landscape cut.",
    soundTwins: ["Malare", "Engengo"],
    outboundUrl: "https://open.spotify.com/search/Aalolam%20Job%20Kurian",
    tone: "moss",
    energy: "soft",
    moments: ["travel", "late-night", "soft-launch"],
    art: "high mist / 17"
  },
  {
    id: "jaada",
    title: "Jaada",
    artist: "Sushin Shyam",
    language: "Malayalam indie groove",
    scene: "Kochi new-wave soundtrack",
    stage: "Rising",
    hook: "0:22 — 0:37",
    best: "Best for funny friend reels & chaotic travel bloopers",
    idea: "Deadpan expressions while chaotic group antics unfold in the background. Cut on the quirky synth hits.",
    soundTwins: ["Katchi Sera", "Kurchi Rework"],
    outboundUrl: "https://open.spotify.com/search/Jaada%20Sushin%20Shyam",
    tone: "amber",
    energy: "chaotic",
    moments: ["meme", "birthday", "travel"],
    art: "deadpan grin / 18"
  },

  // TELUGU
  {
    id: "samayama",
    title: "Samayama",
    artist: "Anurag Kulkarni & Sithara",
    language: "Telugu melody",
    scene: "Hyderabad contemporary melody",
    stage: "Rising",
    hook: "0:25 — 0:40",
    best: "Best for candid wedding pheras or couple travel",
    idea: "Capture the groom's nervous smile right before the garland exchange rather than the rehearsed poses.",
    soundTwins: ["Kangal Edho", "Aalolam"],
    outboundUrl: "https://open.spotify.com/search/Samayama%20Anurag%20Kulkarni",
    tone: "peach",
    energy: "soft",
    moments: ["wedding", "soft-launch", "birthday"],
    art: "garland light / 19"
  },
  {
    id: "kaala-bhairava",
    title: "Kaanunna Kalyanam",
    artist: "Vivek Sagar & Anurag",
    language: "Telugu indie-fusion",
    scene: "Secunderabad retro fusion",
    stage: "Early",
    hook: "0:40 — 0:55",
    best: "Best for festive vintage wardrobe styling",
    idea: "Pair handloom fabrics with modern street sneakers. Match shoe-tap transitions to the syncopated mridangam.",
    soundTwins: ["Samayama", "Valam Aavo Ne"],
    outboundUrl: "https://open.spotify.com/search/Kaanunna%20Kalyanam%20Vivek%20Sagar",
    tone: "gold",
    energy: "bold",
    moments: ["outfit", "wedding", "birthday"],
    art: "handloom / 20"
  },
  {
    id: "inthandham",
    title: "Inthandham",
    artist: "Hesham Abdul Wahab",
    language: "Telugu acoustic",
    scene: "Hyderabad / Kochi crossover",
    stage: "Peaking",
    hook: "0:30 — 0:45",
    best: "Best for anniversary or birthday photo drops",
    idea: "Show chronological polaroids flipping through hands, ending with a ticket or token from yesterday.",
    soundTwins: ["Samayama", "Malare"],
    outboundUrl: "https://open.spotify.com/search/Inthandham%20Hesham%20Abdul%20Wahab",
    tone: "rose",
    energy: "nostalgic",
    moments: ["birthday", "soft-launch", "farewell"],
    art: "polaroid flip / 21"
  },

  // BENGALI
  {
    id: "amake-amar-moto",
    title: "Amake Amar Moto",
    artist: "Anupam Roy",
    language: "Bengali indie-folk",
    scene: "Kolkata coffeehouse anthem",
    stage: "Retro comeback",
    hook: "0:45 — 1:00",
    best: "Best for solo bookstore hops and rainy trams",
    idea: "Black-and-white cuts of old Calcutta balustrades and paper books. Fade into color on the final vocal note.",
    soundTwins: ["Boba Tunnel", "Choo Lo"],
    outboundUrl: "https://open.spotify.com/search/Amake%20Amar%20Moto%20Anupam%20Roy",
    tone: "ink",
    energy: "nostalgic",
    moments: ["late-night", "breakup", "travel"],
    art: "college street / 22"
  },
  {
    id: "tomake-bujhina-priyo",
    title: "Tomake Bujhina Priyo",
    artist: "Prosen & Somlata",
    language: "Bengali alt-romance",
    scene: "Kolkata indie scene",
    stage: "Rising",
    hook: "0:35 — 0:50",
    best: "Best for autumn festival preparation & soft aesthetics",
    idea: "Show the hands working on decor and fairy lights before revealing the evening gathering.",
    soundTwins: ["Amake Amar Moto", "Kangal Edho"],
    outboundUrl: "https://open.spotify.com/search/Tomake%20Bujhina%20Priyo",
    tone: "red",
    energy: "soft",
    moments: ["soft-launch", "wedding", "birthday"],
    art: "autumn marigold / 23"
  },

  // MARATHI
  {
    id: "kevadya",
    title: "Kevadya",
    artist: "Abhay Jodhpurkar",
    language: "Marathi contemporary",
    scene: "Pune acoustic circle",
    stage: "Early",
    hook: "0:38 — 0:53",
    best: "Best for subtle traditional jewelry / saree reveals",
    idea: "Extreme macro shots: silk border texture, glass bangles, kajal touch. Widescreen reveal on the flute flourish.",
    soundTwins: ["Gau Nako Kisna", "Samayama"],
    outboundUrl: "https://open.spotify.com/search/Kevadya%20Abhay%20Jodhpurkar",
    tone: "violet",
    energy: "soft",
    moments: ["outfit", "wedding", "birthday"],
    art: "paithani / 24"
  },
  {
    id: "gau-nako-kisna",
    title: "Gau Nako Kisna",
    artist: "Ajay-Atul",
    language: "Marathi folk classic",
    scene: "Maharashtra soil roots",
    stage: "Retro comeback",
    hook: "0:25 — 0:40",
    best: "Best for high-energy village road trips or dhol vibes",
    idea: "Quick cuts of dust rising under bike tires, roadside sugarcane stalls, and smiling locals dancing along.",
    soundTwins: ["Khalasi", "Gal Sunja"],
    outboundUrl: "https://open.spotify.com/search/Gau%20Nako%20Kisna",
    tone: "amber",
    energy: "bold",
    moments: ["travel", "gym", "meme"],
    art: "soil dust / 25"
  },

  // GUJARATI
  {
    id: "khalasi",
    title: "Khalasi",
    artist: "Aditya Gadhvi & Achint",
    language: "Gujarati folk-pop",
    scene: "Ahmedabad coke studio wave",
    stage: "Peaking",
    hook: "0:31 — 0:46",
    best: "Best for energetic Navratri & festival swirls",
    idea: "Overplayed in generic spinning reels. Instead, try framing it around the tireless backstage dhol drummers.",
    soundTwins: ["Valam Aavo Ne", "Gau Nako Kisna"],
    outboundUrl: "https://open.spotify.com/search/Khalasi%20Aditya%20Gadhvi",
    tone: "gold",
    energy: "chaotic",
    moments: ["wedding", "birthday", "meme"],
    art: "kutch swirl / 26"
  },
  {
    id: "valam-aavo-ne",
    title: "Valam Aavo Ne",
    artist: "Jigardan Gadhavi",
    language: "Gujarati acoustic",
    scene: "Gujarat indie acoustic",
    stage: "Rising",
    hook: "0:29 — 0:44",
    best: "Best for sentimental long-distance love & reunion clips",
    idea: "Airport arrival gate candid video. Keep the camera steady at waist level as they walk into frame.",
    soundTwins: ["Samayama", "Aalolam"],
    outboundUrl: "https://open.spotify.com/search/Valam%20Aavo%20Ne%20Jigardan",
    tone: "peach",
    energy: "soft",
    moments: ["soft-launch", "travel", "wedding"],
    art: "arrival / 27"
  },

  // KANNADA
  {
    id: "belakina-kavithe",
    title: "Belakina Kavithe",
    artist: "Sanjith Hegde",
    language: "Kannada indie-pop",
    scene: "Bengaluru bedroom indie",
    stage: "Rising",
    hook: "0:33 — 0:48",
    best: "Best for Bengaluru cafe morning hops & cycling edits",
    idea: "Shoot early Sunday mornings before traffic wakes up. Frame morning filter coffee steam catching sun rays.",
    soundTwins: ["Kaagadada Doniyalli", "Kangal Edho"],
    outboundUrl: "https://open.spotify.com/search/Belakina%20Kavithe%20Sanjith%20Hegde",
    tone: "moss",
    energy: "soft",
    moments: ["travel", "outfit", "birthday"],
    art: "gulmohar / 28"
  },
  {
    id: "kaagadada-doniyalli",
    title: "Kaagadada Doniyalli",
    artist: "Vasuki Vaibhav",
    language: "Kannada acoustic",
    scene: "Mysuru acoustic poetry",
    stage: "Early",
    hook: "0:42 — 0:57",
    best: "Best for nostalgic college batch memories",
    idea: "Collage of train tickets, identity cards, handwritten assignment covers, and canteen bills.",
    soundTwins: ["Belakina Kavithe", "Choo Lo"],
    outboundUrl: "https://open.spotify.com/search/Kaagadada%20Doniyalli%20Vasuki%20Vaibhav",
    tone: "blue",
    energy: "nostalgic",
    moments: ["farewell", "late-night", "breakup"],
    art: "paper boat / 29"
  },

  // ASSAMESE & NORTHEAST
  {
    id: "majuli",
    title: "Majuli",
    artist: "Nilotpal Bora",
    language: "Assamese folk-indie",
    scene: "Brahmaputra riverbank melody",
    stage: "Rising",
    hook: "0:36 — 0:51",
    best: "Best for solo ferry journeys & riverside camps",
    idea: "Let the river water reflections dominate the screen. Don't cut quickly; let the gentle acoustic strumming breathe.",
    soundTwins: ["Koli Aashor", "Aalolam"],
    outboundUrl: "https://open.spotify.com/search/Majuli%20Nilotpal%20Bora",
    tone: "moss",
    energy: "soft",
    moments: ["travel", "farewell", "late-night"],
    art: "river silt / 30"
  },
  {
    id: "koli-aashor",
    title: "Koli Aashor",
    artist: "Shankuraj Konwar",
    language: "Assamese ambient indie",
    scene: "Guwahati electronic-folk",
    stage: "Early",
    hook: "0:44 — 0:59",
    best: "Best for moodboard edits, thrift fits & rainy days",
    idea: "Macro focus on thrifted textures and vintage watch dials. Transition on the rhythmic electronic rim-shot.",
    soundTwins: ["Majuli", "Kohra"],
    outboundUrl: "https://open.spotify.com/search/Koli%20Aashor%20Shankuraj",
    tone: "violet",
    energy: "bold",
    moments: ["outfit", "late-night", "soft-launch"],
    art: "monsoon neon / 31"
  },

  // HARYANVI INDIE
  {
    id: "laado",
    title: "Choudhar",
    artist: "MC Square",
    language: "Haryanvi street indie",
    scene: "NCR / Haryana underground",
    stage: "Rising",
    hook: "0:30 — 0:45",
    best: "Best for raw street style & gym heavy sets",
    idea: "Hard shadows in a parking basement. Sync sudden camera whip-pans to the rapid-fire lyrical rhymes.",
    soundTwins: ["Gal Sunja", "Kohra"],
    outboundUrl: "https://open.spotify.com/search/Choudhar%20MC%20Square",
    tone: "ink",
    energy: "bold",
    moments: ["gym", "outfit", "meme"],
    art: "ragged punch / 32"
  },

  // KASHMIRI & HIMALAYAN INDIE
  {
    id: "ride-home",
    title: "Fitna Fitoor",
    artist: "Alif & Mohammad Muneem",
    language: "Kashmiri / Urdu indie",
    scene: "Srinagar acoustic wave",
    stage: "Early",
    hook: "0:42 — 0:57",
    best: "Best for valley travelogues & quiet pine forests",
    idea: "Focus on chimney smoke rising in cold morning air. Hold the shot steady as the rabab melody unfolds.",
    soundTwins: ["Aalolam", "Engengo"],
    outboundUrl: "https://open.spotify.com/search/Fitna%20Fitoor%20Alif",
    tone: "blue",
    energy: "nostalgic",
    moments: ["travel", "farewell", "late-night"],
    art: "chinar ember / 33"
  }
];

// 2. State & Vault Storage
let activeMoment = "outfit";
let activeBoard = "my 2026 sound";

const defaultBoards = [
  "my 2026 sound",
  "my future wedding",
  "songs for train journeys",
  "college will end someday"
];

function getBoards() {
  const custom = JSON.parse(localStorage.getItem("mehfil-custom-boards") || "[]");
  return Array.from(new Set([...defaultBoards, ...custom]));
}

function saveCustomBoard(name) {
  const custom = JSON.parse(localStorage.getItem("mehfil-custom-boards") || "[]");
  if (!custom.includes(name)) {
    custom.push(name);
    localStorage.setItem("mehfil-custom-boards", JSON.stringify(custom));
  }
}

function getSavedVault() {
  return JSON.parse(localStorage.getItem("mehfil-vault-records") || "{}");
}

function setSavedVault(data) {
  localStorage.setItem("mehfil-vault-records", JSON.stringify(data));
}

// 3. Editorial "Today" Drop (Product Brief Section 5) & Weekly Drop Archive
let currentEdition = "vol-01";

const editionsData = {
  "vol-01": [
    {
      role: "Use Now",
      soundId: "aalolam",
      badge: "⚡ Use Now",
      editorialNote: "Misty acoustic momentum from Kerala; untouched by mainstream algorithms. Perfect for monsoon travel reels."
    },
    {
      role: "Rising",
      soundId: "kangal-edho",
      badge: "🔥 Rising",
      editorialNote: "Spiking across Bengaluru and Chennai collegiate photo carousels. Peak posting window this week."
    },
    {
      role: "Retro Return",
      soundId: "mann-mera",
      badge: "📼 Retro Return",
      editorialNote: "Late-2000s Bollywood melody finding new life in 35mm film grain edits and sentimental farewell posts."
    },
    {
      role: "Independent Find",
      soundId: "koli-aashor",
      badge: "✦ Independent Find",
      editorialNote: "Guwahati electronic dream-folk with tactile rim-shots. A distinctive statement sound for street-style fits."
    },
    {
      role: "Saturated Alternative",
      soundId: "heeriye",
      twinId: "aankhon-se-batana",
      badge: "⇄ Saturated Alternative",
      editorialNote: "'Heeriye' is everywhere. Swap it with its Sound Twin 'Aankhon Se Batana' for fresh emotional resonance."
    }
  ],
  "vol-02": [
    {
      role: "Use Now",
      soundId: "gal-sunja",
      badge: "⚡ Use Now",
      editorialNote: "Majha street wave with raw analog textures. Dominating late-night highway windshield edits in Punjab."
    },
    {
      role: "Rising",
      soundId: "iraaday",
      badge: "🔥 Rising",
      editorialNote: "Vulnerable bedroom pop gaining velocity in Delhi and Lahore aesthetic mirror fit reveals."
    },
    {
      role: "Retro Return",
      soundId: "choo-lo",
      badge: "📼 Retro Return",
      editorialNote: "The Local Train classic echoing through collegiate farewell edits and bittersweet memory dumps."
    },
    {
      role: "Independent Find",
      soundId: "belakina-kavithe",
      badge: "✦ Independent Find",
      editorialNote: "Bengaluru bedroom indie pop. Perfect for breezy Sunday morning cycling and filter-coffee stops."
    },
    {
      role: "Saturated Alternative",
      soundId: "khaab",
      twinId: "samayama",
      badge: "⇄ Saturated Alternative",
      editorialNote: "'Khaab' is legendary but heavily used. Try Telugu acoustic gem 'Samayama' for intimate weddings."
    }
  ],
  "vol-03": [
    {
      role: "Use Now",
      soundId: "engengo",
      badge: "⚡ Use Now",
      editorialNote: "Sean Roldan & Pradeep Kumar coastal acoustic warmth. Ideal for sunset sea drives and quiet train views."
    },
    {
      role: "Rising",
      soundId: "majuli",
      badge: "🔥 Rising",
      editorialNote: "Nilotpal Bora's Brahmaputra riverside melody. Touching heartfelt outdoor and travel reels."
    },
    {
      role: "Retro Return",
      soundId: "amake-amar-moto",
      badge: "📼 Retro Return",
      editorialNote: "Kolkata coffeehouse anthem finding second life in bookstore hopping and moody tram carousels."
    },
    {
      role: "Independent Find",
      soundId: "maya",
      badge: "✦ Independent Find",
      editorialNote: "The Yellow Diary's lush alt-rock crescendo. Superb for cinematic long-distance travel transitions."
    },
    {
      role: "Saturated Alternative",
      soundId: "katchi-sera",
      twinId: "kaala-bhairava",
      badge: "⇄ Saturated Alternative",
      editorialNote: "'Katchi Sera' is peaking on dance reels. Try Vivek Sagar's syncopated retro-fusion 'Kaanunna Kalyanam'."
    }
  ]
};

// 4. Recommendation Engine (Dynamic Match)
function getRecommendedSounds(moment, energy) {
  // Filter by moment compatibility first
  let matches = catalog.filter((s) => s.moments && s.moments.includes(moment));

  // Prioritize matching energy if available
  if (energy) {
    const energyMatches = matches.filter((s) => s.energy === energy);
    if (energyMatches.length >= 2) {
      matches = energyMatches;
    }
  }

  // Ensure variety: prioritize Early, Rising, or Retro over Saturated
  const nonSaturated = matches.filter((s) => s.stage !== "Saturated");
  const candidates = nonSaturated.length >= 3 ? nonSaturated : matches;

  // Shuffle deterministic sample or take top 3
  if (candidates.length <= 3) {
    // Fill up to 3 from general catalog if fewer than 3
    const fill = catalog.filter((s) => !candidates.includes(s) && (s.energy === energy || s.stage === "Rising"));
    return [...candidates, ...fill].slice(0, 3);
  }

  return candidates.slice(0, 3);
}

// 5. DOM References
const grid = document.querySelector("#sound-grid");
const template = document.querySelector("#sound-card-template");
const todayGrid = document.querySelector("#today-editorial-grid");
const searchInput = document.querySelector("#sound-search");
const searchResults = document.querySelector("#search-results");
const modalOverlay = document.querySelector("#sound-modal");
const modalContent = document.querySelector("#modal-body");
const modalClose = document.querySelector("#modal-close");
const toastEl = document.querySelector("#toast");

// Toast Notification Helper
function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.remove("hidden");
  toastEl.classList.add("show");
  clearTimeout(toastEl._timeout);
  toastEl._timeout = setTimeout(() => {
    toastEl.classList.remove("show");
    setTimeout(() => toastEl.classList.add("hidden"), 300);
  }, 2400);
}

// Cultural Sound Route 3-Node Trajectory (Section 4.C)
function getSoundRoute(sound) {
  if (sound.stage === "Early") {
    return {
      nodes: [
        { label: "Origin Scene", title: sound.scene, status: "active", icon: "📍" },
        { label: "Campus / Niche Hubs", title: "Regional edits & indie drops", status: "upcoming", icon: "✦" },
        { label: "National FYP", title: "Untapped — zero saturation", status: "upcoming", icon: "↗" }
      ],
      commentary: `Concentrated in ${sound.scene}. Golden early window for creators before mainstream saturation.`
    };
  } else if (sound.stage === "Rising") {
    return {
      nodes: [
        { label: "Origin Scene", title: sound.scene, status: "done", icon: "✓" },
        { label: "Campus / Niche Hubs", title: "Bengaluru, Delhi & Mumbai creator circles", status: "active", icon: "🔥" },
        { label: "National FYP", title: "Crossing linguistic borders into lifestyle feeds", status: "upcoming", icon: "↗" }
      ],
      commentary: `Rapid momentum moving beyond ${sound.scene}. Creators are driving breakout velocity right now.`
    };
  } else if (sound.stage === "Peaking") {
    return {
      nodes: [
        { label: "Origin Scene", title: sound.scene, status: "done", icon: "✓" },
        { label: "Campus / Niche Hubs", title: "Mainstream lifestyle & dance adoption", status: "done", icon: "✓" },
        { label: "National FYP", title: "Peak reach — high cliché risk", status: "active", icon: "⚡" }
      ],
      commentary: `Peaking nationally across Reels & Shorts. High reach, but standard trends are becoming repetitive.`
    };
  } else if (sound.stage === "Saturated") {
    return {
      nodes: [
        { label: "Origin Scene", title: sound.scene, status: "done", icon: "✓" },
        { label: "Campus / Niche Hubs", title: "Exhausted trend carousels", status: "done", icon: "✓" },
        { label: "National FYP", title: "High skip rate — use Sound Twin", status: "saturated", icon: "⚠️" }
      ],
      commentary: `Heavily saturated. Use its underground Sound Twin instead to retain audience intrigue.`
    };
  } else { // Retro comeback
    return {
      nodes: [
        { label: "Archive Origin", title: `${sound.language} classic release`, status: "done", icon: "📼" },
        { label: "Niche Rediscovery", title: "35mm film flash & nostalgia edits", status: "done", icon: "✓" },
        { label: "Gen Z Resurgence", title: "Trending in college farewell & travel reels", status: "active", icon: "✨" }
      ],
      commentary: `Revived through Gen Z aesthetic editing. High emotional resonance for bittersweet or nostalgic edits.`
    };
  }
}

// One-Click Reel Blueprint Copy
function copyReelBlueprint(sound, buttonEl) {
  const captionHook = `Found this before it peaks 🕊️ // ${sound.title} by ${sound.artist}`;
  const twinText = (sound.soundTwins && sound.soundTwins.length) ? sound.soundTwins.join(", ") : "None";

  const text = [
    `═══════════════════════════════════════════`,
    `✦ MEHFIL REEL BLUEPRINT ✦`,
    `═══════════════════════════════════════════`,
    `🎵 SOUND: ${sound.title}`,
    `👤 ARTIST: ${sound.artist} (${sound.language})`,
    `📍 SCENE: ${sound.scene}`,
    `📊 STAGE: ${sound.stage}`,
    `⏱️ BEST HOOK: ${sound.hook}`,
    `🎬 FORMAT: ${sound.best}`,
    `💡 FRESH ANGLE: ${sound.idea}`,
    `⇄ SOUND TWINS: ${twinText}`,
    `✍️ READY CAPTION:`,
    `"${captionHook}"`,
    `═══════════════════════════════════════════`,
    `🎧 Official Search: ${sound.outboundUrl}`,
    `Discovered via Mehfil (India Sound Culture Engine)`
  ].join("\n");

  const showSuccess = () => {
    if (buttonEl) {
      const orig = buttonEl.innerHTML;
      buttonEl.innerHTML = `✓ Copied!`;
      buttonEl.classList.add("copied");
      setTimeout(() => {
        buttonEl.innerHTML = orig;
        buttonEl.classList.remove("copied");
      }, 2000);
    }
    showToast(`Reel blueprint for "${sound.title}" copied!`);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showSuccess).catch(() => {
      fallbackCopy(text, showSuccess);
    });
  } else {
    fallbackCopy(text, showSuccess);
  }
}

function fallbackCopy(text, cb) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    if (cb) cb();
  } catch (err) {
    console.error("Clipboard copy failed", err);
  }
  document.body.removeChild(ta);
}

// 6. Render Post Match Cards
function renderMatchCards() {
  if (!grid || !template) return;
  grid.replaceChildren();

  const currentEnergy = document.querySelector("#mood") ? document.querySelector("#mood").value : "soft";
  const sounds = getRecommendedSounds(activeMoment, currentEnergy);
  const vault = getSavedVault();
  const currentBoardItems = vault[activeBoard] || [];

  sounds.forEach((sound, index) => {
    const card = template.content.cloneNode(true);
    const root = card.querySelector(".sound-card");
    root.style.setProperty("--tone", `var(--${sound.tone})`);
    root.dataset.soundId = sound.id;

    card.querySelector(".art-number").textContent = String(index + 1).padStart(2, "0");
    card.querySelector(".art-text").textContent = sound.art;
    
    const stageEl = card.querySelector(".stage");
    stageEl.textContent = sound.stage;
    stageEl.className = `stage stage-${sound.stage.toLowerCase().replace(/\s+/g, "-")}`;
    
    card.querySelector(".language").textContent = sound.language;
    card.querySelector("h3").textContent = sound.title;
    card.querySelector(".artist").textContent = sound.artist;
    card.querySelector(".hook strong").textContent = sound.hook;
    card.querySelector(".best-for").textContent = sound.best;
    card.querySelector(".fresh p").textContent = sound.idea;

    // Sound twins pill
    const twinsEl = card.querySelector(".sound-twins-info");
    if (twinsEl && sound.soundTwins && sound.soundTwins.length) {
      twinsEl.textContent = `Twin: ${sound.soundTwins[0]}`;
    }

    // Blueprint copy button
    const blueprintBtn = card.querySelector(".copy-blueprint-btn");
    if (blueprintBtn) {
      blueprintBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        copyReelBlueprint(sound, blueprintBtn);
      });
    }

    // Save button
    const saveBtn = card.querySelector(".save");
    const isSaved = currentBoardItems.includes(sound.id);
    saveBtn.classList.toggle("is-saved", isSaved);
    saveBtn.textContent = isSaved ? "✓" : "＋";
    saveBtn.setAttribute("aria-label", isSaved ? `Remove ${sound.title} from ${activeBoard}` : `Save ${sound.title} to ${activeBoard}`);
    saveBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSaveSound(sound.id, activeBoard);
    });

    // Outbound link
    const openLink = card.querySelector(".open-link");
    openLink.href = sound.outboundUrl;
    openLink.target = "_blank";
    openLink.rel = "noopener noreferrer";

    // Click card to open modal story
    root.addEventListener("click", (e) => {
      if (e.target.closest(".save") || e.target.closest(".open-link") || e.target.closest(".copy-blueprint-btn")) return;
      openSoundStory(sound);
    });

    grid.append(card);
  });
}

// 7. Render Today Editorial Drop (Product Brief Section 5) & Multi-Edition Archive
function renderTodayFeed(editionId = currentEdition) {
  if (!todayGrid) return;
  todayGrid.replaceChildren();

  currentEdition = editionId;
  const dropItems = editionsData[editionId] || editionsData["vol-01"];

  // Update active edition pills
  document.querySelectorAll(".edition-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.edition === editionId);
  });

  dropItems.forEach((item) => {
    const sound = catalog.find((s) => s.id === item.soundId);
    if (!sound) return;

    const twin = item.twinId ? catalog.find((s) => s.id === item.twinId) : null;

    const el = document.createElement("article");
    el.className = "today-card";
    el.style.setProperty("--tone", `var(--${sound.tone})`);

    el.innerHTML = `
      <div class="today-tag">${item.badge}</div>
      <div class="today-art" style="background:var(--tone)">
        <div class="today-orb"></div>
        <span class="today-scene">${sound.scene}</span>
      </div>
      <div class="today-info">
        <div class="today-meta">
          <span class="stage stage-${sound.stage.toLowerCase().replace(/\s+/g, "-")}">● ${sound.stage}</span>
          <span class="lang">${sound.language}</span>
        </div>
        <h4>${sound.title}</h4>
        <p class="artist-sub">${sound.artist}</p>
        <div class="today-hook"><span>Hook</span><strong>${sound.hook}</strong></div>
        <p class="editorial-reason">"${item.editorialNote}"</p>
        ${
          twin
            ? `<div class="today-twin">
                <span class="twin-label">Fresh Sound Twin:</span>
                <strong>${twin.title}</strong> · <em>${twin.artist}</em>
               </div>`
            : ""
        }
        <div class="today-actions">
          <button class="view-story-btn" data-sound="${sound.id}">View story ↗</button>
          <a class="listen-outbound" href="${sound.outboundUrl}" target="_blank" rel="noopener noreferrer">Listen on Spotify ↗</a>
        </div>
      </div>
    `;

    el.querySelector(".view-story-btn").addEventListener("click", () => openSoundStory(sound));
    todayGrid.append(el);
  });
}

// 8. Sound Story Modal (With Sound Route Visualizer & One-Click Blueprint)
function openSoundStory(sound) {
  if (!modalOverlay || !modalContent) return;

  const route = getSoundRoute(sound);
  const captionHook = `Found this before it peaks 🕊️ // ${sound.title} by ${sound.artist}`;
  const twinBadges = sound.soundTwins && sound.soundTwins.length
    ? sound.soundTwins.map((t) => `<span class="twin-pill">✦ ${t}</span>`).join(" ")
    : "None listed";

  modalContent.innerHTML = `
    <div class="story-header" style="--tone:var(--${sound.tone})">
      <div class="story-vinyl-wrap">
        <div class="story-vinyl"></div>
      </div>
      <div class="story-headline">
        <div class="meta">
          <span class="stage stage-${sound.stage.toLowerCase().replace(/\s+/g, "-")}">● ${sound.stage}</span>
          <span class="language">${sound.language}</span>
        </div>
        <h2>${sound.title}</h2>
        <p class="story-artist">By <strong>${sound.artist}</strong></p>
        <p class="story-scene">Scene Origin: <em>${sound.scene}</em></p>
      </div>
    </div>
    <div class="story-body">
      <!-- 3-Node Sound Route Visualizer -->
      <div class="story-block sound-route-block">
        <div class="route-header">
          <span class="story-label">Sound Route · Cultural Trajectory</span>
          <span class="route-badge stage-${sound.stage.toLowerCase().replace(/\s+/g, "-")}">● ${sound.stage}</span>
        </div>
        <div class="route-track">
          ${route.nodes.map((node, i) => `
            <div class="route-node node-${node.status}">
              <div class="node-indicator">
                <span class="node-icon">${node.icon}</span>
                <span class="node-num">0${i + 1}</span>
              </div>
              <div class="node-details">
                <span class="node-phase">${node.label}</span>
                <strong class="node-title">${node.title}</strong>
              </div>
            </div>
            ${i < route.nodes.length - 1 ? '<div class="route-connector"></div>' : ''}
          `).join('')}
        </div>
        <p class="route-commentary">${route.commentary}</p>
      </div>

      <!-- One-Click Creator Blueprint Copy -->
      <div class="story-block blueprint-action-block">
        <div class="blueprint-header">
          <div>
            <span class="story-label">Creator Blueprint</span>
            <p class="blueprint-subtitle">Ready-to-post caption hook & timestamp breakdown</p>
          </div>
          <button class="modal-blueprint-btn" id="modal-blueprint-btn">📋 Copy Reel Blueprint</button>
        </div>
        <div class="blueprint-preview">
          <div class="blueprint-row">
            <span class="blueprint-row-label">Caption Hook:</span>
            <p class="blueprint-caption">"${captionHook}"</p>
          </div>
          <div class="blueprint-row">
            <span class="blueprint-row-label">Hook Cue:</span>
            <code class="blueprint-code">${sound.hook}</code>
          </div>
        </div>
      </div>

      <div class="story-block">
        <span class="story-label">The 10-15s Hook Timestamp</span>
        <div class="hook-box">
          <strong>${sound.hook}</strong>
          <p>Cue: The exact beat / vocal switch suited for high-retention short form videos.</p>
        </div>
      </div>
      <div class="story-block">
        <span class="story-label">Best Format Match</span>
        <p class="format-text">${sound.best}</p>
      </div>
      <div class="story-block">
        <span class="story-label">Fresh Angle (Original Execution Concept)</span>
        <div class="idea-box">
          <p>${sound.idea}</p>
        </div>
      </div>
      <div class="story-block">
        <span class="story-label">Sound Twins (Less Saturated Alternatives)</span>
        <div class="twins-container">${twinBadges}</div>
      </div>
      <div class="story-actions">
        <a class="primary-btn" href="${sound.outboundUrl}" target="_blank" rel="noopener noreferrer">Listen on Spotify <span>↗</span></a>
        <a class="secondary-btn" href="https://www.youtube.com/results?search_query=${encodeURIComponent(sound.title + ' ' + sound.artist)}" target="_blank" rel="noopener noreferrer">Search on YouTube <span>↗</span></a>
        <button class="save-modal-btn" id="modal-save-btn">Save to "${activeBoard}"</button>
      </div>
      <p class="rights-disclaimer">Curated editorial layer. Mehfil respects music rights and connects you directly to official streaming platforms.</p>
    </div>
  `;

  // Blueprint copy button in modal
  const modalBlueprintBtn = modalContent.querySelector("#modal-blueprint-btn");
  if (modalBlueprintBtn) {
    modalBlueprintBtn.addEventListener("click", () => {
      copyReelBlueprint(sound, modalBlueprintBtn);
    });
  }

  const modalSaveBtn = modalContent.querySelector("#modal-save-btn");
  const vault = getSavedVault();
  const currentBoardItems = vault[activeBoard] || [];
  const isSaved = currentBoardItems.includes(sound.id);
  modalSaveBtn.textContent = isSaved ? `✓ Saved in "${activeBoard}"` : `＋ Save to "${activeBoard}"`;

  modalSaveBtn.addEventListener("click", () => {
    toggleSaveSound(sound.id, activeBoard);
    const updated = (getSavedVault()[activeBoard] || []).includes(sound.id);
    modalSaveBtn.textContent = updated ? `✓ Saved in "${activeBoard}"` : `＋ Save to "${activeBoard}"`;
  });

  modalOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSoundStory() {
  if (!modalOverlay) return;
  modalOverlay.classList.add("hidden");
  document.body.style.overflow = "";
}

if (modalClose) {
  modalClose.addEventListener("click", closeSoundStory);
}
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeSoundStory();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay && !modalOverlay.classList.contains("hidden")) {
    closeSoundStory();
  }
});

// 9. The Vault (Multi-board functionality per Section 4.D)
function toggleSaveSound(soundId, boardName) {
  const vault = getSavedVault();
  if (!vault[boardName]) {
    vault[boardName] = [];
  }

  const idx = vault[boardName].indexOf(soundId);
  if (idx > -1) {
    vault[boardName].splice(idx, 1);
  } else {
    vault[boardName].push(soundId);
  }

  setSavedVault(vault);
  renderVault();
  renderMatchCards();
}

function renderVault() {
  const vault = getSavedVault();
  const boards = getBoards();
  const currentItems = vault[activeBoard] || [];

  // Update total saved count badge in header
  let totalSaved = 0;
  Object.values(vault).forEach((arr) => {
    if (Array.isArray(arr)) totalSaved += arr.length;
  });
  const savedCountEl = document.querySelector(".saved-count");
  if (savedCountEl) savedCountEl.textContent = totalSaved;

  const vaultTotalEl = document.querySelector("#vault-total");
  if (vaultTotalEl) vaultTotalEl.textContent = `${currentItems.length} saved`;

  // Render board tabs
  const tabsContainer = document.querySelector("#board-tabs");
  if (tabsContainer) {
    tabsContainer.replaceChildren();
    boards.forEach((board) => {
      const btn = document.createElement("button");
      btn.className = `board-tab ${board === activeBoard ? "active" : ""}`;
      const count = (vault[board] || []).length;
      btn.innerHTML = `${board} <small>(${count})</small>`;
      btn.addEventListener("click", () => {
        activeBoard = board;
        document.querySelector("#active-board-title").textContent = board;
        renderVault();
        renderMatchCards();
      });
      tabsContainer.append(btn);
    });
  }

  // Render saved list in active board
  const vaultList = document.querySelector("#vault-list");
  if (!vaultList) return;
  vaultList.replaceChildren();

  if (!currentItems.length) {
    vaultList.innerHTML = `<p class="vault-empty">No sounds in "${activeBoard}" yet. Use the ＋ button on any sound card to save it here.</p>`;
    return;
  }

  currentItems.forEach((id) => {
    const sound = catalog.find((s) => s.id === id);
    if (!sound) return;

    const row = document.createElement("article");
    row.className = "vault-item";
    row.innerHTML = `
      <span class="vault-dot" style="--tone:var(--${sound.tone})"></span>
      <div class="vault-item-info">
        <strong>${sound.title}</strong>
        <p>${sound.artist} · ${sound.language} · <span class="stage stage-${sound.stage.toLowerCase().replace(/\s+/g, "-")}">● ${sound.stage}</span></p>
      </div>
      <div class="vault-item-actions">
        <a href="${sound.outboundUrl}" target="_blank" rel="noopener noreferrer" title="Listen on Spotify">↗</a>
        <button aria-label="Remove ${sound.title} from ${activeBoard}" title="Remove sound">×</button>
      </div>
    `;

    row.querySelector("button").addEventListener("click", () => {
      toggleSaveSound(sound.id, activeBoard);
    });

    row.querySelector(".vault-item-info").addEventListener("click", () => {
      openSoundStory(sound);
    });

    vaultList.append(row);
  });
}

// 10. Search ("Catch the Sound" - Product Brief Section 4.B)
function searchSounds(query) {
  if (!searchResults) return;
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

  if (!terms.length) {
    searchResults.innerHTML = '<p class="search-empty">Try a mood, artist, language or use case.</p>';
    return;
  }

  const matches = catalog.filter((sound) => {
    const haystack = `${sound.title} ${sound.artist} ${sound.language} ${sound.scene} ${sound.stage} ${sound.best} ${sound.idea} ${sound.energy} ${(sound.soundTwins || []).join(" ")}`.toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });

  searchResults.replaceChildren();

  if (!matches.length) {
    searchResults.innerHTML = '<p class="search-empty">No matching sound found. Try searching for a language (Tamil, Punjabi, Malayalam), scene, or post type (outfit, wedding, travel).</p>';
    return;
  }

  matches.slice(0, 6).forEach((sound) => {
    const row = document.createElement("div");
    row.className = "search-row";
    row.innerHTML = `
      <span class="mini-art" style="--tone:var(--${sound.tone})"></span>
      <div class="search-row-title">
        <strong>${sound.title}</strong>
        <small>${sound.artist} · ${sound.language} (${sound.scene})</small>
      </div>
      <span class="stage stage-${sound.stage.toLowerCase().replace(/\s+/g, "-")}">● ${sound.stage}</span>
      <button class="search-view-btn" aria-label="View story for ${sound.title}">View ↗</button>
    `;

    row.querySelector(".search-view-btn").addEventListener("click", () => {
      openSoundStory(sound);
    });

    searchResults.append(row);
  });
}

// 11. Initial Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Moment chips selection
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const current = document.querySelector(".chip.selected");
      if (current) current.classList.remove("selected");
      chip.classList.add("selected");
      activeMoment = chip.dataset.moment;
    });
  });

  // "Find my sounds" button
  const findBtn = document.querySelector("#find-sounds");
  if (findBtn) {
    findBtn.addEventListener("click", () => {
      const selectedMomentEl = document.querySelector(".chip.selected");
      const selectedMoment = selectedMomentEl ? selectedMomentEl.textContent.toLowerCase() : "outfit reveal";
      const moodSelect = document.querySelector("#mood");
      const selectedMood = moodSelect ? moodSelect.selectedOptions[0].textContent.toLowerCase() : "soft & cinematic";
      
      const note = document.querySelector(".match-note");
      if (note) {
        note.innerHTML = `for an <strong>${selectedMoment}</strong> with a <strong>${selectedMood}</strong> mood`;
      }
      
      renderMatchCards();
      const resultsSection = document.querySelector("#match-results");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Energy dropdown change re-renders match
  const moodEl = document.querySelector("#mood");
  if (moodEl) {
    moodEl.addEventListener("change", () => {
      renderMatchCards();
    });
  }

  // Search input and tags
  if (searchInput) {
    searchInput.addEventListener("input", (e) => searchSounds(e.target.value));
  }

  document.querySelectorAll("[data-search]").forEach((button) => {
    button.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = button.dataset.search;
        searchSounds(searchInput.value);
        searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  // Global CMD+K / CTRL+K
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  // New board creator
  const createBoardBtn = document.querySelector("#create-board-btn");
  const newBoardInput = document.querySelector("#new-board-input");
  if (createBoardBtn && newBoardInput) {
    createBoardBtn.addEventListener("click", () => {
      const name = newBoardInput.value.trim();
      if (name) {
        saveCustomBoard(name);
        activeBoard = name;
        document.querySelector("#active-board-title").textContent = name;
        newBoardInput.value = "";
        renderVault();
      }
    });
  }

  // Taste Passport & Share Board Buttons
  const viewPassportBtn = document.querySelector("#view-passport-btn");
  if (viewPassportBtn) {
    viewPassportBtn.addEventListener("click", openTastePassportModal);
  }

  const shareBoardBtn = document.querySelector("#share-board-btn");
  if (shareBoardBtn) {
    shareBoardBtn.addEventListener("click", () => openShareBoardModal(activeBoard));
  }

  // Initial Renders
  renderTodayFeed();
  renderMatchCards();
  renderVault();
});

// 12. Taste Passport (Cultural Identity Summary)
const passportModal = document.querySelector("#passport-modal");
const passportBody = document.querySelector("#passport-body");
const passportClose = document.querySelector("#passport-close");

function getTastePassportData() {
  const vault = getSavedVault();
  const allIds = Array.from(new Set(Object.values(vault).flat())).filter(Boolean);

  if (!allIds.length) {
    return {
      isDemo: true,
      totalSaved: 0,
      persona: "The Cultural Explorer",
      tagline: "Your sound identity is waiting. Save sounds from Post Match or Today to stamp your passport.",
      freshnessScore: 100,
      scenes: [
        { name: "Malayalam Lo-Fi", pct: 40 },
        { name: "Punjabi Street", pct: 30 },
        { name: "Hindi Indie", pct: 20 },
        { name: "Tamil Acoustic", pct: 10 }
      ],
      stages: { Early: 1, Rising: 2, "Retro comeback": 1 },
      signatureTracks: catalog.slice(0, 3)
    };
  }

  const tracks = allIds.map((id) => catalog.find((s) => s.id === id)).filter(Boolean);
  const total = tracks.length;

  const sceneCounts = {};
  const stageCounts = { Early: 0, Rising: 0, "Retro comeback": 0, Peaking: 0, Saturated: 0 };

  tracks.forEach((t) => {
    sceneCounts[t.language] = (sceneCounts[t.language] || 0) + 1;
    if (stageCounts[t.stage] !== undefined) stageCounts[t.stage]++;
  });

  const scenes = Object.entries(sceneCounts)
    .map(([name, count]) => ({
      name,
      count,
      pct: Math.round((count / total) * 100)
    }))
    .sort((a, b) => b.pct - a.pct);

  const earlyRisingRetro = (stageCounts.Early || 0) + (stageCounts.Rising || 0) + (stageCounts["Retro comeback"] || 0);
  const freshnessScore = Math.min(100, Math.round((earlyRisingRetro / total) * 100));

  let persona = "The Pan-India Sound Pioneer";
  let tagline = "Wide-angle curiosity moving across India's regional subcultures.";

  const topScene = scenes[0] ? scenes[0].name.toLowerCase() : "";
  if (topScene.includes("malayalam") || topScene.includes("tamil")) {
    persona = "The Southern Cinema Dreamer";
    tagline = "Drawn to acoustic rainscapes, coastal drives, and understated candids.";
  } else if (topScene.includes("punjabi") || topScene.includes("haryanvi")) {
    persona = "The High-Octane Stylist";
    tagline = "Gravitates towards raw street cadence, heavy basslines, and statement fits.";
  } else if (topScene.includes("bengali") || topScene.includes("hindi")) {
    persona = "The Poetic Indie Archivist";
    tagline = "Prefers bedroom pop, 35mm film nostalgia, and contemplative late-night reflections.";
  } else if (stageCounts["Retro comeback"] >= Math.ceil(total * 0.4)) {
    persona = "The 35mm Nostalgist";
    tagline = "Reviving vintage Indian classics with fresh modern aesthetic framing.";
  }

  return {
    isDemo: false,
    totalSaved: total,
    persona,
    tagline,
    freshnessScore,
    scenes,
    stages: stageCounts,
    signatureTracks: tracks.slice(0, 4)
  };
}

function openTastePassportModal() {
  if (!passportModal || !passportBody) return;
  const data = getTastePassportData();

  const sceneBarsHtml = data.scenes.map((s) => `
    <div class="passport-scene-row">
      <div class="scene-row-meta">
        <strong>${s.name}</strong>
        <span>${s.pct}%</span>
      </div>
      <div class="scene-progress-bg">
        <div class="scene-progress-fill" style="width:${s.pct}%"></div>
      </div>
    </div>
  `).join("");

  const signatureTracksHtml = data.signatureTracks.map((t, idx) => `
    <div class="passport-track-row">
      <span class="track-num">0${idx + 1}</span>
      <div class="track-text">
        <strong>${t.title}</strong>
        <small>${t.artist} · ${t.language}</small>
      </div>
      <span class="stage stage-${t.stage.toLowerCase().replace(/\s+/g, "-")}">● ${t.stage}</span>
    </div>
  `).join("");

  passportBody.innerHTML = `
    <div class="passport-booklet">
      <div class="passport-header">
        <div class="passport-stamp">
          <span>MEHFIL</span>
          <strong>2026</strong>
          <small>ARCHIVE</small>
        </div>
        <div>
          <span class="passport-doc-label">Official Sound Culture Passport</span>
          <h2>${data.persona}</h2>
          <p class="passport-tagline">${data.tagline}</p>
        </div>
      </div>

      <div class="passport-stats-grid">
        <div class="passport-stat-card">
          <span class="stat-label">Pre-Saturation Index</span>
          <strong class="stat-val">${data.freshnessScore}%</strong>
          <p class="stat-sub">Early & Rising Discovery</p>
        </div>
        <div class="passport-stat-card">
          <span class="stat-label">Saved Sounds</span>
          <strong class="stat-val">${data.totalSaved}</strong>
          <p class="stat-sub">${data.isDemo ? "Sample Demo Profile" : "In Your Vault Boards"}</p>
        </div>
      </div>

      <div class="passport-section">
        <span class="passport-sec-label">Regional Scene Footprint</span>
        <div class="passport-scenes-list">
          ${sceneBarsHtml}
        </div>
      </div>

      <div class="passport-section">
        <span class="passport-sec-label">Defining Signature Tracks</span>
        <div class="passport-tracks-list">
          ${signatureTracksHtml}
        </div>
      </div>

      <div class="passport-actions">
        <button id="copy-passport-btn" class="passport-action-btn">📋 Copy Passport Bio</button>
        <button id="download-passport-btn" class="passport-action-btn primary">📥 Download Passport Card</button>
      </div>
      <p class="passport-footer-note">Mehfil Cultural Identity · Generated from your personal sound memory vault.</p>
    </div>
  `;

  document.querySelector("#copy-passport-btn").addEventListener("click", () => {
    const topScenesText = data.scenes.slice(0, 3).map((s) => `${s.pct}% ${s.name}`).join(" · ");
    const bioText = `🎫 MEHFIL TASTE PASSPORT\nIdentity: ${data.persona}\nCultural Footprint: ${topScenesText}\nPre-Saturation Score: ${data.freshnessScore}%\nFind the sound before it peaks — curated on Mehfil.`;
    navigator.clipboard.writeText(bioText).then(() => {
      showToast("Taste Passport bio copied!");
    });
  });

  document.querySelector("#download-passport-btn").addEventListener("click", () => {
    downloadPassportCanvas(data);
  });

  passportModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeTastePassportModal() {
  if (!passportModal) return;
  passportModal.classList.add("hidden");
  document.body.style.overflow = "";
}

if (passportClose) passportClose.addEventListener("click", closeTastePassportModal);
if (passportModal) {
  passportModal.addEventListener("click", (e) => {
    if (e.target === passportModal) closeTastePassportModal();
  });
}

// 13. Shareable Board Cards (Instagram Story 9:16 Export)
const shareModal = document.querySelector("#share-card-modal");
const shareBody = document.querySelector("#share-body");
const shareClose = document.querySelector("#share-close");

function openShareBoardModal(boardName) {
  if (!shareModal || !shareBody) return;
  const vault = getSavedVault();
  const soundIds = vault[boardName] || [];
  const tracks = soundIds.map((id) => catalog.find((s) => s.id === id)).filter(Boolean);

  if (!tracks.length) {
    shareBody.innerHTML = `
      <div class="story-empty-state">
        <p class="story-empty-icon">📂</p>
        <h3>Board is empty</h3>
        <p>Save at least one sound to "${boardName}" to export a shareable Instagram Story card.</p>
      </div>
    `;
    shareModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    return;
  }

  const trackRowsHtml = tracks.slice(0, 6).map((t, i) => `
    <div class="story-card-item">
      <span class="story-item-num">0${i + 1}</span>
      <div class="story-item-info">
        <strong>${t.title}</strong>
        <p>${t.artist} · ${t.language}</p>
      </div>
      <span class="stage stage-${t.stage.toLowerCase().replace(/\s+/g, "-")}">● ${t.stage}</span>
    </div>
  `).join("");

  shareBody.innerHTML = `
    <div class="story-export-container">
      <div class="story-preview-wrapper">
        <div class="story-card-preview" id="story-card-canvas-preview">
          <div class="story-header-brand">
            <span>mehfil®</span>
            <small>SOUND VAULT · VOL. 01</small>
          </div>
          <div class="story-board-title">
            <p>CURATED BOARD</p>
            <h3>${boardName}</h3>
          </div>
          <div class="story-tracklist">
            ${trackRowsHtml}
          </div>
          <div class="story-card-footer">
            <p>"Find the sound before it becomes everyone's sound."</p>
            <span>mehfil.app · India Sound Culture</span>
          </div>
        </div>
      </div>
      <div class="story-export-controls">
        <h4>Export for Instagram Stories</h4>
        <p>Download a high-resolution 9:16 vertical card or copy the tracklist text ready for story stickers.</p>
        <div class="story-action-btns">
          <button id="download-story-btn" class="passport-action-btn primary">📥 Download Story Image (.png)</button>
          <button id="copy-story-text-btn" class="passport-action-btn">📋 Copy Story Text</button>
        </div>
      </div>
    </div>
  `;

  document.querySelector("#download-story-btn").addEventListener("click", () => {
    downloadStoryCanvas(boardName, tracks);
  });

  document.querySelector("#copy-story-text-btn").addEventListener("click", () => {
    const lines = [
      `🎵 MEHFIL SOUND BOARD: "${boardName}"`,
      `══════════════════════════════════`,
      ...tracks.map((t, i) => `0${i + 1}. ${t.title} — ${t.artist} [${t.stage}]`),
      `══════════════════════════════════`,
      `Discovered on Mehfil (India Sound Culture Engine)`
    ].join("\n");
    navigator.clipboard.writeText(lines).then(() => {
      showToast("Story text copied to clipboard!");
    });
  });

  shareModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeShareBoardModal() {
  if (!shareModal) return;
  shareModal.classList.add("hidden");
  document.body.style.overflow = "";
}

if (shareClose) shareClose.addEventListener("click", closeShareBoardModal);
if (shareModal) {
  shareModal.addEventListener("click", (e) => {
    if (e.target === shareModal) closeShareBoardModal();
  });
}

// 14. HTML5 Canvas Renderers (Client-side PNG Exports)
function downloadStoryCanvas(boardName, tracks) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#f0ebe0";
  ctx.fillRect(0, 0, 1080, 1920);

  // Borders
  ctx.strokeStyle = "#201e1c";
  ctx.lineWidth = 14;
  ctx.strokeRect(60, 60, 960, 1800);

  // Inner Accent Line
  ctx.lineWidth = 2;
  ctx.strokeRect(75, 75, 930, 1770);

  // Brand Header
  ctx.fillStyle = "#df503a";
  ctx.font = "bold 54px 'Playfair Display', serif";
  ctx.fillText("mehfil®", 120, 190);

  ctx.fillStyle = "#766f67";
  ctx.font = "bold 24px 'DM Mono', monospace";
  ctx.fillText("SOUND CULTURE ENGINE // VOL. 01", 120, 240);

  // Board Title
  ctx.fillStyle = "#766f67";
  ctx.font = "24px 'DM Mono', monospace";
  ctx.fillText("CURATED VAULT BOARD", 120, 360);

  ctx.fillStyle = "#181818";
  ctx.font = "bold 82px 'Playfair Display', serif";
  ctx.fillText(boardName, 120, 460);

  // Separator Line
  ctx.strokeStyle = "#201e1c";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(120, 520);
  ctx.lineTo(960, 520);
  ctx.stroke();

  // Tracks list
  let y = 620;
  tracks.slice(0, 7).forEach((t, idx) => {
    // Number
    ctx.fillStyle = "#df503a";
    ctx.font = "bold 32px 'DM Mono', monospace";
    ctx.fillText(String(idx + 1).padStart(2, "0"), 120, y);

    // Title
    ctx.fillStyle = "#181818";
    ctx.font = "bold 44px 'Playfair Display', serif";
    ctx.fillText(t.title, 190, y);

    // Artist & Language
    ctx.fillStyle = "#766f67";
    ctx.font = "30px 'DM Sans', sans-serif";
    ctx.fillText(`${t.artist} · ${t.language}`, 190, y + 45);

    // Stage tag
    ctx.fillStyle = "#201e1c";
    ctx.font = "bold 24px 'DM Mono', monospace";
    ctx.fillText(`● ${t.stage}`, 800, y);

    // Dotted divider
    ctx.strokeStyle = "rgba(24, 24, 24, 0.15)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(120, y + 80);
    ctx.lineTo(960, y + 80);
    ctx.stroke();

    y += 145;
  });

  // Footer Tagline
  ctx.fillStyle = "#181818";
  ctx.font = "italic 36px 'Playfair Display', serif";
  ctx.fillText('"Find the sound before it becomes everyone\'s sound."', 120, 1680);

  ctx.fillStyle = "#766f67";
  ctx.font = "24px 'DM Mono', monospace";
  ctx.fillText("mehfil.app · India in Surround Sound", 120, 1740);

  // Download Trigger
  const link = document.createElement("a");
  link.download = `mehfil-${boardName.toLowerCase().replace(/\s+/g, "-")}-story.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("Story card downloaded!");
}

function downloadPassportCanvas(data) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#f4ecdf";
  ctx.fillRect(0, 0, 1200, 800);

  // Double Border
  ctx.strokeStyle = "#201e1c";
  ctx.lineWidth = 10;
  ctx.strokeRect(40, 40, 1120, 720);
  ctx.lineWidth = 2;
  ctx.strokeRect(55, 55, 1090, 690);

  // Header Stamp Seal
  ctx.strokeStyle = "#df503a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(1040, 160, 70, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#df503a";
  ctx.font = "bold 22px 'DM Mono', monospace";
  ctx.textAlign = "center";
  ctx.fillText("MEHFIL", 1040, 150);
  ctx.font = "16px 'DM Mono', monospace";
  ctx.fillText("CULTURAL", 1040, 175);
  ctx.fillText("PASSPORT", 1040, 195);
  ctx.textAlign = "left";

  // Document Title
  ctx.fillStyle = "#766f67";
  ctx.font = "bold 22px 'DM Mono', monospace";
  ctx.fillText("OFFICIAL CULTURAL TASTE PASSPORT", 100, 130);

  // Persona Name
  ctx.fillStyle = "#181818";
  ctx.font = "bold 64px 'Playfair Display', serif";
  ctx.fillText(data.persona, 100, 210);

  ctx.fillStyle = "#5d5751";
  ctx.font = "italic 28px 'Playfair Display', serif";
  ctx.fillText(data.tagline, 100, 260);

  // Score Box
  ctx.fillStyle = "#fff";
  ctx.fillRect(100, 320, 320, 140);
  ctx.strokeStyle = "#201e1c";
  ctx.lineWidth = 3;
  ctx.strokeRect(100, 320, 320, 140);

  ctx.fillStyle = "#766f67";
  ctx.font = "18px 'DM Mono', monospace";
  ctx.fillText("PRE-SATURATION SCORE", 130, 365);
  ctx.fillStyle = "#df503a";
  ctx.font = "bold 56px 'DM Mono', monospace";
  ctx.fillText(`${data.freshnessScore}%`, 130, 430);

  // Scenes list
  ctx.fillStyle = "#181818";
  ctx.font = "bold 22px 'DM Mono', monospace";
  ctx.fillText("REGIONAL SCENE FOOTPRINT:", 480, 345);

  let sy = 390;
  data.scenes.slice(0, 4).forEach((s) => {
    ctx.fillStyle = "#181818";
    ctx.font = "bold 26px 'Playfair Display', serif";
    ctx.fillText(`${s.name}:`, 480, sy);

    ctx.fillStyle = "#df503a";
    ctx.font = "bold 26px 'DM Mono', monospace";
    ctx.fillText(`${s.pct}%`, 860, sy);

    sy += 45;
  });

  // Footer
  ctx.fillStyle = "#766f67";
  ctx.font = "20px 'DM Mono', monospace";
  ctx.fillText("Curated with Mehfil · Find the sound before it peaks", 100, 700);

  const link = document.createElement("a");
  link.download = `mehfil-taste-passport.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("Taste Passport downloaded!");
}

// 15. Scene & City Explorer (Phase 2 Feature)
const scenesData = {
  all: {
    title: "All Cultural Hubs",
    tagline: "India in surround sound: 33 active tracks moving across 11 regional creative hubs.",
    filter: () => true
  },
  kochi: {
    title: "Kochi & Malabar Monsoons",
    tagline: "Misty tea estates, rain on windowpanes, breezy acoustic chords, and unhurried candids.",
    filter: (s) => s.language.toLowerCase().includes("malayalam") || s.scene.toLowerCase().includes("kochi")
  },
  chandigarh: {
    title: "Chandigarh & Majha Circuit",
    tagline: "Raw tumbi grooves, UK drill kicks, brass hits, highway cruising, and statement fits.",
    filter: (s) => s.language.toLowerCase().includes("punjabi") || s.scene.toLowerCase().includes("punjab") || s.scene.toLowerCase().includes("majha") || s.scene.toLowerCase().includes("chandigarh")
  },
  chennai: {
    title: "Chennai & Madurai Indie Wave",
    tagline: "Carnatic vocal runs fused with dream-pop, acoustic coastline solos, and inside-joke carousels.",
    filter: (s) => s.language.toLowerCase().includes("tamil") || s.scene.toLowerCase().includes("chennai")
  },
  delhi: {
    title: "Delhi NCR Bedroom Pop",
    tagline: "Warm lamp lighting, intimate nylon strings, lo-fi drum machines, and rooftop evening fits.",
    filter: (s) => s.language.toLowerCase().includes("hindi") && (s.scene.toLowerCase().includes("delhi") || s.scene.toLowerCase().includes("bedroom"))
  },
  kolkata: {
    title: "Kolkata Coffeehouse Alt",
    tagline: "Poetic lyricism, dotara strings, black-and-white tram cuts, and rain-soaked book stalls.",
    filter: (s) => s.language.toLowerCase().includes("bengali") || s.scene.toLowerCase().includes("kolkata")
  },
  hyderabad: {
    title: "Hyderabad & Deccan Grooves",
    tagline: "Syncopated mridangam rhythms, contemporary melodies, handloom styling, and festive energy.",
    filter: (s) => s.language.toLowerCase().includes("telugu") || s.scene.toLowerCase().includes("hyderabad")
  },
  bengaluru: {
    title: "Bengaluru Bedroom & Electronics",
    tagline: "Urban indie pop, Sunday morning cafe rides, filter coffee steam, and hip-hop underground.",
    filter: (s) => s.language.toLowerCase().includes("kannada") || s.scene.toLowerCase().includes("bengaluru")
  },
  ahmedabad: {
    title: "Ahmedabad & Kutch Rhythms",
    tagline: "Garba-synth fusion, Charotar acoustic melodies, mirrorwork fabrics, and energetic swirl edits.",
    filter: (s) => s.language.toLowerCase().includes("gujarati") || s.scene.toLowerCase().includes("ahmedabad")
  },
  pune: {
    title: "Pune & Maharashtra Roots",
    tagline: "Contemporary acoustic ghazals, Paithani silk macro details, and energetic dhol-tasha road trips.",
    filter: (s) => s.language.toLowerCase().includes("marathi") || s.scene.toLowerCase().includes("pune")
  },
  guwahati: {
    title: "Guwahati & Himalayan Mist",
    tagline: "Ambient electronic-folk, Brahmaputra river reflections, cold mountain smoke, and rabab chords.",
    filter: (s) => s.language.toLowerCase().includes("assamese") || s.language.toLowerCase().includes("kashmiri") || s.scene.toLowerCase().includes("guwahati") || s.scene.toLowerCase().includes("srinagar")
  }
};

let activeHub = "all";

function renderSceneExplorer(hubKey = "all") {
  const manifestoEl = document.querySelector("#scene-manifesto");
  const tracksGrid = document.querySelector("#scene-tracks-grid");
  if (!manifestoEl || !tracksGrid) return;

  activeHub = hubKey;
  const hub = scenesData[hubKey] || scenesData.all;
  const matches = catalog.filter(hub.filter);

  // Update chip states
  document.querySelectorAll(".scene-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.hub === hubKey);
  });

  manifestoEl.innerHTML = `
    <div class="manifesto-card">
      <div class="manifesto-top">
        <span class="manifesto-badge">CREATIVE HUB</span>
        <span class="manifesto-count">${matches.length} active sounds</span>
      </div>
      <h3>${hub.title}</h3>
      <p class="manifesto-tagline">${hub.tagline}</p>
    </div>
  `;

  tracksGrid.replaceChildren();

  matches.forEach((sound) => {
    const item = document.createElement("article");
    item.className = "scene-track-card";
    item.style.setProperty("--tone", `var(--${sound.tone})`);
    item.innerHTML = `
      <div class="scene-card-top">
        <span class="stage stage-${sound.stage.toLowerCase().replace(/\s+/g, "-")}">● ${sound.stage}</span>
        <span class="scene-sound-lang">${sound.language}</span>
      </div>
      <h4>${sound.title}</h4>
      <p class="scene-sound-artist">${sound.artist}</p>
      <div class="scene-sound-hook"><span>Hook:</span> <strong>${sound.hook}</strong></div>
      <p class="scene-sound-best">${sound.best}</p>
      <div class="scene-card-actions">
        <button class="scene-view-btn" data-sound="${sound.id}">View Story ↗</button>
        <button class="scene-copy-btn" data-sound="${sound.id}">📋 Copy</button>
      </div>
    `;

    item.querySelector(".scene-view-btn").addEventListener("click", () => openSoundStory(sound));
    item.querySelector(".scene-copy-btn").addEventListener("click", (e) => {
      copyReelBlueprint(sound, e.currentTarget);
    });

    tracksGrid.append(item);
  });
}

// 16. Creator Submissions (/curate-sound Review Desk)
const submitModal = document.querySelector("#submit-modal");
const submitClose = document.querySelector("#submit-close");
const openSubmitBtn = document.querySelector("#open-submit-btn");
const creatorSubmitForm = document.querySelector("#creator-submit-form");

function openSubmitModal() {
  if (!submitModal) return;
  submitModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSubmitModal() {
  if (!submitModal) return;
  submitModal.classList.add("hidden");
  document.body.style.overflow = "";
}

if (openSubmitBtn) openSubmitBtn.addEventListener("click", openSubmitModal);
if (submitClose) submitClose.addEventListener("click", closeSubmitModal);
if (submitModal) {
  submitModal.addEventListener("click", (e) => {
    if (e.target === submitModal) closeSubmitModal();
  });
}

if (creatorSubmitForm) {
  creatorSubmitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const submission = {
      id: "user-sub-" + Date.now(),
      title: document.querySelector("#sub-title").value.trim(),
      artist: document.querySelector("#sub-artist").value.trim(),
      scene: document.querySelector("#sub-scene").value.trim(),
      hook: document.querySelector("#sub-hook").value.trim(),
      best: document.querySelector("#sub-format").value.trim(),
      idea: document.querySelector("#sub-idea").value.trim(),
      url: document.querySelector("#sub-url").value.trim(),
      handle: document.querySelector("#sub-handle").value.trim(),
      submittedAt: new Date().toISOString()
    };

    const existing = JSON.parse(localStorage.getItem("mehfil-user-submissions") || "[]");
    existing.push(submission);
    localStorage.setItem("mehfil-user-submissions", JSON.stringify(existing));

    creatorSubmitForm.reset();
    closeSubmitModal();
    showToast(`✓ "${submission.title}" submitted to /curate-sound review desk!`);
  });
}

// 17. Attach Listeners for Edition Pills & Scene Chips
function attachPhase2Listeners() {
  // Edition pills for Weekly Drop Archive
  document.querySelectorAll(".edition-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      renderTodayFeed(pill.dataset.edition);
    });
  });

  // Scene filter chips
  document.querySelectorAll(".scene-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      renderSceneExplorer(chip.dataset.hub);
    });
  });
}

// Global escape key handler
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSoundStory();
    closeTastePassportModal();
    closeShareBoardModal();
    closeSubmitModal();
  }
});

// Run initial setups
attachPhase2Listeners();
renderTodayFeed("vol-01");
renderMatchCards();
renderVault();
renderSceneExplorer("all");
