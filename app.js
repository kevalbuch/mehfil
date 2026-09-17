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

// ==========================================================================
// 4. DYNAMIC TREND ENGINE & STRICT RELEVANCE ENFORCER
// ==========================================================================

const DYNAMIC_SOUNDS_CACHE = {};

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function findSoundById(id) {
  return catalog.find((s) => s.id === id) || DYNAMIC_SOUNDS_CACHE[id] || null;
}

const MOMENT_RULES = {
  gym: {
    label: "Gym / PR edit",
    preferredEnergy: "bold",
    strictEnergies: ["bold", "chaotic"],
    forbiddenKeywords: [
      "love", "romantic", "wedding", "phera", "lullaby", "sweet", "acoustic", 
      "lofi", "lo-fi", "chill", "soft-launch", "sleep", "breakup", "heartbreak", 
      "soothing", "slow", "priyo", "sanware", "bujhina", "samayama", "pyar", 
      "ishq", "romantic melody", "candid pheras", "sunset-fit", "after light"
    ],
    requiredKeywords: ["gym", "workout", "drill", "trap", "hip-hop", "rap", "bass", "phonk", "pr", "hype", "pump", "iron", "barbell", "bold"],
    defaultQueries: [
      "punjabi drill workout",
      "shubh cheques",
      "sidhu moose wala drill",
      "wazir patar gal sunja",
      "hanumankind big dawgs",
      "karan aujla drill",
      "indian hip hop gym workout"
    ]
  },
  wedding: {
    label: "Wedding",
    preferredEnergy: "soft",
    strictEnergies: ["soft", "nostalgic", "bold", "chaotic"],
    forbiddenKeywords: [
      "gym", "workout", "drill", "phonk", "breakup", "heartbreak", "crying", "death", "screaming", "rage", "iron", "deadlift"
    ],
    requiredKeywords: ["wedding", "shaadi", "sangeet", "baraat", "shehnai", "celebration", "phera", "festive", "folk", "kudmayi", "marriage"],
    defaultQueries: [
      "punjabi wedding sangeet",
      "hindi wedding acoustic melody",
      "royal shaadi shehnai celebration",
      "kudmayi wedding"
    ]
  },
  breakup: {
    label: "Breakup & healing",
    preferredEnergy: "nostalgic",
    strictEnergies: ["soft", "nostalgic"],
    forbiddenKeywords: [
      "gym", "workout", "drill", "bhangra", "party", "club", "dance", "sangeet", "dhol", "screaming", "phonk", "deadlift"
    ],
    requiredKeywords: ["breakup", "sad", "heartbreak", "yearning", "melanchol", "acoustic", "emotional", "alone", "miss"],
    defaultQueries: [
      "hindi indie breakup acoustic",
      "sad emotional yearning indie hindi",
      "abdul hannan bikhra"
    ]
  },
  "late-night": {
    label: "Late night thoughts",
    preferredEnergy: "nostalgic",
    strictEnergies: ["soft", "nostalgic"],
    forbiddenKeywords: [
      "gym", "workout", "screaming", "rage", "bhangra", "dhol", "club", "party", "deadlift", "phonk"
    ],
    requiredKeywords: ["lofi", "bedroom-pop", "ambient", "acoustic", "slow", "midnight", "night", "3am", "thoughts", "rain", "window"],
    defaultQueries: [
      "delhi bedroom pop lo-fi",
      "rain monsoon acoustic hindi",
      "late night indie pop hindi"
    ]
  },
  outfit: {
    label: "Outfit reveal",
    preferredEnergy: "soft",
    strictEnergies: ["soft", "bold", "nostalgic"],
    forbiddenKeywords: [
      "bhajan", "devotional", "workout-screaming", "rage", "deadlift", "crying", "funeral"
    ],
    requiredKeywords: ["aesthetic", "indie", "synthwave", "lofi", "groove", "fashion", "fit", "drip", "reveal", "mirror"],
    defaultQueries: [
      "aesthetic reel indie pop hindi",
      "trendy instagram outfit audio india",
      "dikshant aankhon se batana"
    ]
  },
  travel: {
    label: "Travel dump",
    preferredEnergy: "nostalgic",
    strictEnergies: ["soft", "bold", "nostalgic", "chaotic"],
    forbiddenKeywords: [
      "screaming", "rage", "workout-pr", "deadlift", "crying", "mourning"
    ],
    requiredKeywords: ["wanderlust", "scenic", "indie-rock", "synthwave", "acoustic", "road-trip", "travel", "mountains", "hills", "sea", "drive"],
    defaultQueries: [
      "road trip hindi indie",
      "scenic mountain acoustic indie hindi",
      "the local train choo lo",
      "goa sunset indie pop"
    ]
  },
  "soft-launch": {
    label: "Soft launch",
    preferredEnergy: "soft",
    strictEnergies: ["soft", "nostalgic"],
    forbiddenKeywords: [
      "gym", "workout", "screaming", "rage", "drill", "hardcore", "phonk", "deadlift"
    ],
    requiredKeywords: ["subtle", "warm", "acoustic", "lofi", "indie-pop", "couple", "love", "holding hands"],
    defaultQueries: [
      "aesthetic couple soft launch audio",
      "subtle warm indie love song hindi",
      "iraaday abdul hannan"
    ]
  },
  birthday: {
    label: "Birthday",
    preferredEnergy: "soft",
    strictEnergies: ["soft", "bold", "chaotic"],
    forbiddenKeywords: [
      "breakup", "funeral", "depressing", "mourning", "deadlift"
    ],
    requiredKeywords: ["celebration", "fun", "friendship", "indie-pop", "warm", "birthday"],
    defaultQueries: [
      "fun aesthetic birthday reel audio",
      "upbeat friendship celebration indie hindi"
    ]
  },
  farewell: {
    label: "College farewell",
    preferredEnergy: "nostalgic",
    strictEnergies: ["nostalgic", "soft"],
    forbiddenKeywords: [
      "gym", "screaming", "rage", "club-banger", "phonk"
    ],
    requiredKeywords: ["nostalgic", "college-anthem", "friendship", "acoustic-rock", "yearning", "farewell", "last day", "seniors"],
    defaultQueries: [
      "the local train choo lo",
      "college farewell indie rock hindi",
      "nostalgic friendship anthem hindi"
    ]
  },
  meme: {
    label: "Meme / chaotic",
    preferredEnergy: "chaotic",
    strictEnergies: ["chaotic", "bold"],
    forbiddenKeywords: [
      "serious", "mourning", "devotional", "depressing"
    ],
    requiredKeywords: ["funny", "ironic", "retro-kitsch", "bhangra", "drill-parody", "chaotic", "meme"],
    defaultQueries: [
      "trending meme reel audio india",
      "funny viral sound reel instagram"
    ]
  }
};

function isSoundStrictlyCompatible(sound, moment) {
  if (!sound) return false;
  const rules = MOMENT_RULES[moment];
  if (!rules) return true;

  const textToScan = (
    (sound.title || "") + " " +
    (sound.artist || "") + " " +
    (sound.language || "") + " " +
    (sound.scene || "") + " " +
    (sound.best || "") + " " +
    (sound.idea || "") + " " +
    (sound.primaryGenreName || "") + " " +
    (sound.collectionName || "") + " " +
    (sound.moments || []).join(" ")
  ).toLowerCase();

  // 1. Strictly forbid incompatible themes
  if (rules.forbiddenKeywords && rules.forbiddenKeywords.length) {
    for (const forbidden of rules.forbiddenKeywords) {
      if (textToScan.includes(forbidden.toLowerCase())) {
        return false;
      }
    }
  }

  // 2. Gym specific strict criteria
  if (moment === "gym") {
    // If energy is soft, gym is NEVER soft
    if (sound.energy === "soft") return false;

    const hasGymMatch = 
      (sound.moments && sound.moments.includes("gym")) ||
      rules.requiredKeywords.some((k) => textToScan.includes(k));

    if (!hasGymMatch) return false;
  }

  // 3. Wedding specific criteria
  if (moment === "wedding") {
    const hasWeddingMatch = 
      (sound.moments && sound.moments.includes("wedding")) ||
      rules.requiredKeywords.some((k) => textToScan.includes(k));
    if (!hasWeddingMatch) return false;
  }

  // 4. Breakup specific criteria
  if (moment === "breakup") {
    const hasBreakupMatch = 
      (sound.moments && sound.moments.includes("breakup")) ||
      rules.requiredKeywords.some((k) => textToScan.includes(k));
    if (!hasBreakupMatch) return false;
  }

  return true;
}

function parseIdeaIntent(ideaText) {
  if (!ideaText || !ideaText.trim()) return null;
  const text = ideaText.toLowerCase();

  let detectedMoment = "outfit";
  let detectedEnergy = "soft";
  let searchTerms = [];

  if (text.includes("deadlift") || text.includes("pr") || text.includes("gym") || text.includes("workout") || text.includes("lift") || text.includes("squat") || text.includes("bench") || text.includes("chalk") || text.includes("pump") || text.includes("fitness")) {
    detectedMoment = "gym";
    detectedEnergy = "bold";
    searchTerms = [
      "punjabi drill workout",
      "shubh cheques",
      "sidhu moose wala drill",
      "wazir patar gal sunja",
      "indian hip hop workout drill",
      "karan aujla drill"
    ];
  } else if (text.includes("wedding") || text.includes("shaadi") || text.includes("sangeet") || text.includes("haldi") || text.includes("mehendi") || text.includes("baraat") || text.includes("dulha") || text.includes("dulhan") || text.includes("phera")) {
    detectedMoment = "wedding";
    detectedEnergy = text.includes("sangeet") || text.includes("baraat") ? "chaotic" : "soft";
    searchTerms = [
      "punjabi wedding sangeet",
      "hindi wedding acoustic melody",
      "royal shaadi shehnai celebration",
      "kudmayi wedding"
    ];
  } else if (text.includes("breakup") || text.includes("heartbreak") || text.includes("crying") || text.includes("alone") || text.includes("miss") || text.includes("move on") || text.includes("hurts") || text.includes("tears")) {
    detectedMoment = "breakup";
    detectedEnergy = "nostalgic";
    searchTerms = [
      "hindi indie breakup acoustic",
      "sad emotional yearning indie hindi",
      "abdul hannan bikhra"
    ];
  } else if (text.includes("chai") || text.includes("balcony") || text.includes("rain") || text.includes("monsoon") || text.includes("midnight") || text.includes("night") || text.includes("thoughts") || text.includes("3am") || text.includes("lo-fi") || text.includes("lofi")) {
    detectedMoment = "late-night";
    detectedEnergy = "nostalgic";
    searchTerms = [
      "delhi bedroom pop lo-fi",
      "rain monsoon acoustic hindi",
      "late night indie pop hindi"
    ];
  } else if (text.includes("travel") || text.includes("drive") || text.includes("road") || text.includes("trip") || text.includes("mountains") || text.includes("hills") || text.includes("beach") || text.includes("goa") || text.includes("sea")) {
    detectedMoment = "travel";
    detectedEnergy = text.includes("fast") || text.includes("speed") ? "bold" : "nostalgic";
    searchTerms = [
      "road trip hindi indie",
      "scenic mountain acoustic indie hindi",
      "the local train choo lo",
      "goa sunset indie pop"
    ];
  } else if (text.includes("outfit") || text.includes("fit") || text.includes("mirror") || text.includes("drip") || text.includes("style") || text.includes("fashion") || text.includes("reveal")) {
    detectedMoment = "outfit";
    detectedEnergy = text.includes("hype") ? "bold" : "soft";
    searchTerms = [
      "aesthetic reel indie pop hindi",
      "trendy instagram outfit audio india",
      "dikshant aankhon se batana"
    ];
  } else if (text.includes("soft launch") || text.includes("couple") || text.includes("holding hands") || text.includes("candid couple")) {
    detectedMoment = "soft-launch";
    detectedEnergy = "soft";
    searchTerms = [
      "aesthetic couple soft launch audio",
      "subtle warm indie love song hindi",
      "iraaday abdul hannan"
    ];
  } else if (text.includes("farewell") || text.includes("college") || text.includes("school") || text.includes("last day") || text.includes("seniors") || text.includes("batch")) {
    detectedMoment = "farewell";
    detectedEnergy = "nostalgic";
    searchTerms = [
      "the local train choo lo",
      "college farewell indie rock hindi",
      "nostalgic friendship anthem hindi"
    ];
  } else if (text.includes("meme") || text.includes("funny") || text.includes("chaotic") || text.includes("roast") || text.includes("pov")) {
    detectedMoment = "meme";
    detectedEnergy = "chaotic";
    searchTerms = [
      "trending meme reel audio india",
      "funny viral sound reel instagram"
    ];
  } else {
    searchTerms = [
      ideaText.trim() + " hindi indie",
      ideaText.trim() + " reel audio india",
      ideaText.trim()
    ];
  }

  return {
    detectedMoment,
    detectedEnergy,
    searchTerms,
    rawText: ideaText.trim()
  };
}

class DynamicSoundEngine {
  constructor() {
    this.cache = new Map();
  }

  inferLanguageScene(item, moment) {
    const genre = (item.primaryGenreName || "").toLowerCase();
    const artist = (item.artistName || "").toLowerCase();

    if (genre.includes("punjabi") || artist.includes("sidhu") || artist.includes("wazir") || artist.includes("shubh") || artist.includes("karan")) {
      return "Punjabi Drill";
    }
    if (genre.includes("tamil")) return "Tamil Indie";
    if (genre.includes("telugu")) return "Telugu Groove";
    if (genre.includes("malayalam") || artist.includes("hanumankind")) return "Malayalam / Kerala Hip-Hop";
    if (genre.includes("hip-hop") || genre.includes("rap")) return "Desi Hip-Hop";
    if (genre.includes("electronic") || genre.includes("dance")) return "Indie Electronic";
    if (moment === "gym") return "Desi Drill / Trap";
    return "Hindi Indie Pop";
  }

  inferSceneHub(item, moment) {
    const artist = (item.artistName || "").toLowerCase();
    if (artist.includes("sidhu") || artist.includes("wazir") || artist.includes("shubh") || artist.includes("karan aujla") || artist.includes("parmish")) {
      return "Majha & Malwa Drill Circuit";
    }
    if (artist.includes("hanumankind") || artist.includes("kalmi")) {
      return "Bengaluru & Kochi Underground";
    }
    if (artist.includes("prabh deep") || artist.includes("seedhe maut")) {
      return "West Delhi Hip-Hop Belt";
    }
    if (artist.includes("divine")) {
      return "Mumbai Gully Rap Corridor";
    }
    if (artist.includes("dikshant") || artist.includes("abdul hannan")) {
      return "Delhi Bedroom Pop Scene";
    }
    if (artist.includes("local train")) {
      return "Chandigarh Indie Rock Hub";
    }

    if (moment === "gym") return "North Indian Drill Corridor";
    if (moment === "wedding") return "Punjab & Rajasthan Folk Hub";
    if (moment === "travel") return "Mountain Indie Circuit";
    if (moment === "late-night") return "Basement Lo-Fi Collective";
    return "National Indie Circuit";
  }

  inferStage(item) {
    if (!item.releaseDate) return "Rising";
    const year = new Date(item.releaseDate).getFullYear();
    if (year >= 2024) return "Rising";
    if (year >= 2022) return "Peaking";
    return "Retro comeback";
  }

  inferHookWindow(item, moment) {
    if (moment === "gym") return "0:28 — 0:43";
    if (moment === "wedding") return "0:30 — 0:45";
    if (moment === "late-night") return "0:15 — 0:30";
    return "0:24 — 0:39";
  }

  generateBestFor(item, moment, ideaText) {
    if (ideaText && ideaText.trim()) {
      return `Custom match for: "${ideaText.trim().slice(0, 60)}"`;
    }
    if (moment === "gym") {
      return "Best for heavy barbell lockouts, chalk drops, and high-intensity PR lifts";
    }
    if (moment === "wedding") {
      return "Best for candid garland exchange, sangeet entrance, or royal couple portraits";
    }
    if (moment === "breakup") {
      return "Best for solitary night walks, rainy window edits, and heartfelt healing dumps";
    }
    if (moment === "travel") {
      return "Best for sweeping hill perspectives, golden hour road trips, and sunset motion";
    }
    if (moment === "outfit") {
      return "Best for smooth 3-beat mirror reveal with pause on final silhouette";
    }
    if (moment === "late-night") {
      return "Best for 3am introspective thoughts, city bokeh reflections, and tea steam frames";
    }
    return `Best for viral ${moment} reels with authentic cultural retention`;
  }

  generateExecutionBlueprint(item, moment, ideaText) {
    if (moment === "gym") {
      return "Do not cut repeatedly during the concentric lift. Hold one continuous wide shot through the entire rep, then sync the chalk explosion or weight rack strictly on the beat drop.";
    }
    if (moment === "wedding") {
      return "Capture the unspoken candid glances between elders right before the procession moves. Let the organic acoustic intro play without artificial slow-mo.";
    }
    if (moment === "travel") {
      return "Keep the camera perspective locked on the moving horizon. Match road acceleration to the percussion switch rather than doing fast cuts.";
    }
    if (moment === "outfit") {
      return "Start in natural ambient light in complete stillness. Reveal fabric textures and jewelry sparkle only when the bass groove takes over.";
    }
    if (moment === "late-night") {
      return "Frame through window glass with rain drops in soft focus. Let the music breathe without intrusive on-screen caption clutter.";
    }
    return "Let the visual tension build during the melodic intro, then execute your key moment on the first percussion strike.";
  }

  determineTone(moment, energy) {
    if (moment === "gym") return "accent";
    if (energy === "bold") return "accent";
    if (energy === "nostalgic") return "violet";
    if (energy === "chaotic") return "ink";
    return "peach";
  }

  calculateRelevance(item, moment, ideaText) {
    let score = 94;
    const title = (item.trackName || "").toLowerCase();
    const artist = (item.artistName || "").toLowerCase();
    const genre = (item.primaryGenreName || "").toLowerCase();

    if (ideaText) {
      const words = ideaText.toLowerCase().split(/\s+/);
      for (const w of words) {
        if (w.length > 3 && (title.includes(w) || artist.includes(w) || genre.includes(w))) {
          score += 2;
        }
      }
    }

    if (moment === "gym" && (genre.includes("drill") || genre.includes("hip-hop") || artist.includes("shubh") || artist.includes("wazir") || artist.includes("moose"))) {
      score += 4;
    }
    return Math.min(score, 99);
  }

  async fetchViralTracks(moment, energy, ideaText = "") {
    const rules = MOMENT_RULES[moment] || MOMENT_RULES["gym"];
    const parsedIdea = ideaText ? parseIdeaIntent(ideaText) : null;
    
    let queryList = [];
    if (parsedIdea && parsedIdea.searchTerms.length > 0) {
      queryList = parsedIdea.searchTerms;
    } else if (rules && rules.defaultQueries) {
      queryList = rules.defaultQueries;
    } else {
      queryList = [`${moment} viral reel india audio`];
    }

    const cacheKey = `${moment}_${energy}_${(ideaText || "").trim().toLowerCase()}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const collectedTracks = [];
    const seenIds = new Set();

    for (const q of queryList.slice(0, 3)) {
      try {
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(q)}&country=IN&media=music&entity=song&limit=15`;
        const res = await fetch(url);
        if (!res.ok) continue;
        const data = await res.json();
        
        if (data.results && data.results.length > 0) {
          for (const item of data.results) {
            if (!item.previewUrl) continue;
            
            const soundId = "dyn-" + (item.trackName + "-" + item.artistName)
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "");

            if (seenIds.has(soundId)) continue;

            const soundObj = {
              id: soundId,
              title: item.trackName,
              artist: item.artistName,
              language: this.inferLanguageScene(item, moment),
              scene: this.inferSceneHub(item, moment),
              stage: this.inferStage(item),
              hook: this.inferHookWindow(item, moment),
              best: this.generateBestFor(item, moment, ideaText),
              idea: this.generateExecutionBlueprint(item, moment, ideaText),
              soundTwins: [item.collectionName || "Single Release"],
              outboundUrl: `https://open.spotify.com/search/${encodeURIComponent(item.trackName + " " + item.artistName)}`,
              tone: this.determineTone(moment, energy),
              energy: energy || "bold",
              moments: [moment],
              art: `live viral / ${item.primaryGenreName || "Reel Audio"}`,
              artworkUrl: item.artworkUrl100 || null,
              previewAudioUrl: item.previewUrl,
              relevanceScore: this.calculateRelevance(item, moment, ideaText),
              isDynamic: true,
              collectionName: item.collectionName || "",
              primaryGenreName: item.primaryGenreName || ""
            };

            // STRICT COMPATIBILITY VALIDATION
            if (isSoundStrictlyCompatible(soundObj, moment)) {
              seenIds.add(soundId);
              collectedTracks.push(soundObj);
              DYNAMIC_SOUNDS_CACHE[soundId] = soundObj;
            }

            if (collectedTracks.length >= 6) break;
          }
        }
      } catch (err) {
        console.warn("Live API query error:", q, err);
      }
      if (collectedTracks.length >= 3) break;
    }

    collectedTracks.sort((a, b) => (b.relevanceScore || 90) - (a.relevanceScore || 90));
    const result = collectedTracks.slice(0, 3);
    
    if (result.length > 0) {
      this.cache.set(cacheKey, result);
    }
    return result;
  }
}

const dynamicSoundEngine = new DynamicSoundEngine();

function getRecommendedSounds(moment, energy) {
  // Pure strict catalog matches
  const strictMatches = catalog.filter((s) => s.moments && s.moments.includes(moment) && isSoundStrictlyCompatible(s, moment));
  
  if (energy) {
    const energyMatches = strictMatches.filter((s) => s.energy === energy);
    if (energyMatches.length >= 2) return energyMatches.slice(0, 3);
  }

  if (strictMatches.length >= 3) return strictMatches.slice(0, 3);

  // If fewer than 3, ONLY pull additional strictly compatible tracks (NEVER forbidden themes)
  const additionalStrict = catalog.filter((s) => !strictMatches.includes(s) && isSoundStrictlyCompatible(s, moment));
  return [...strictMatches, ...additionalStrict].slice(0, 3);
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

// ==========================================================================
// AUDIO HOOK CUE ENGINE (Plays Genuine Official Song Previews + Web Audio Visualizer)
// ==========================================================================

const REAL_AUDIO_PREVIEWS = {
  "aankhon-se-batana": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/48/bd/d2/48bdd20d-5209-7734-8cde-f942642f6008/mzaf_5554178165118720735.plus.aac.p.m4a",
  "iraaday": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9f/65/6b/9f656b41-7ccb-87b9-80b5-a68d44b7eb51/mzaf_9444202776558929901.plus.aac.p.m4a",
  "mann-mera": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e0/64/6c/e0646c8e-8144-3e54-7194-b9170cbea114/mzaf_12998011274998801820.plus.aac.p.m4a",
  "maya": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/76/2a/c3/762ac3c2-ce61-ea68-2b3c-ef14a8ae2d61/mzaf_6538743869974903887.plus.aac.p.m4a",
  "choo-lo": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/54/eb/24/54eb2491-8858-bcbe-efe4-0c74ffd60dd0/mzaf_4910576119017201720.plus.aac.p.m4a",
  "heeriye": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/14/9b/ac/149bac62-12f1-2f55-a742-f38429b94c83/mzaf_17225240189976438593.plus.aac.p.m4a",
  "kho-gaye": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d9/af/10/d9af1079-8493-5cca-9723-2953af35c127/mzaf_7587445564338452233.plus.aac.p.m4a",
  "khaab": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/59/21/8a/59218af8-1e2a-0578-9133-ac3e77017009/mzaf_14150872265016031746.plus.aac.p.m4a",
  "gal-sunja": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6c/f7/31/6cf73128-ad4b-6320-dda9-b1e3caa60e27/mzaf_9222731296204027402.plus.aac.p.m4a",
  "kohra": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a3/d8/9c/a3d89c6f-c704-fbdd-c3c4-575d86ccdf3a/mzaf_2198404481771494490.plus.aac.p.m4a",
  "big-dawgs": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f5/92/d7/f592d7a4-19be-c005-6698-1caccacc173c/mzaf_15257808628606025867.plus.aac.p.m4a",
  "kangal-edho": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/c7/9a/2ac79a83-8565-3335-5799-689b422b55ba/mzaf_14407562067574955665.plus.aac.p.m4a",
  "katchi-sera": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/92/be/1a92be4c-5469-de62-8755-a8077ae97468/mzaf_13901935643477183705.plus.aac.p.m4a",
  "engengo": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/22/96/e2/2296e2a7-88a9-8eb9-5396-91876064f1a2/mzaf_2329603374197959000.plus.aac.p.m4a",
  "nenjame": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/49/56/a1/4956a11e-8f61-62be-dc4b-253bc84785cc/mzaf_8179112290267377998.plus.aac.p.m4a",
  "malare": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/41/59/b4/4159b41b-708b-8140-d758-e8da1ed7bedd/mzaf_7080443034849106781.plus.aac.p.m4a",
  "aalolam": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e3/38/49/e3384925-7629-fbb5-f427-2778bf6a916d/mzaf_6818538882011352221.plus.aac.p.m4a",
  "jaada": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/89/b8/ec/89b8ece8-2bdd-2fdb-c428-aa42a1cef2d7/mzaf_9264479124447525929.plus.aac.p.m4a",
  "samayama": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/9c/a9/949ca9d4-d36e-5b77-bafa-2e5f7261423d/mzaf_3943643360697243799.plus.aac.p.m4a",
  "kaala-bhairava": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9d/1d/fe/9d1dfeb2-473b-59f3-e13d-f071fbe4ac88/mzaf_10461807306940039434.plus.aac.p.m4a",
  "inthandham": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e3/dc/d7/e3dcd75a-a562-ac84-2dd1-2ea7e8db26d4/mzaf_5058541019549724977.plus.aac.p.m4a",
  "amake-amar-moto": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/c8/80/a1/c880a10d-5f5c-0d3e-101a-d88b9471d451/mzaf_16225225147904766800.plus.aac.p.m4a",
  "tomake-bujhina-priyo": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/68/9a/c4/689ac431-5c8c-03c9-608c-8d911f487547/mzaf_1976976317800126414.plus.aac.p.m4a",
  "kevadya": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fd/78/aa/fd78aac9-a3b1-c0b7-2ac2-6d04b0cf1531/mzaf_9507132563220494257.plus.aac.p.m4a",
  "gau-nako-kisna": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7b/71/c4/7b71c454-d02c-d500-7b83-4a573de9c0be/mzaf_17835338302342729329.plus.aac.p.m4a",
  "khalasi": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0d/68/bd/0d68bdec-6fee-740f-ca95-02b701c18d48/mzaf_15555358427089070690.plus.aac.p.m4a",
  "valam-aavo-ne": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/99/42/f89942bc-c110-803b-fc72-0961622c472f/mzaf_6541335243468912913.plus.aac.p.m4a",
  "belakina-kavithe": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1b/a2/ba/1ba2baa8-0f07-1c8d-ffa3-38bd871e375c/mzaf_12548650847628887217.plus.aac.p.m4a",
  "kaagadada-doniyalli": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/59/50/ed/5950edde-8e8f-36bb-9183-86935c55527e/mzaf_12485396838406714224.plus.aac.p.m4a",
  "majuli": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/58/e4/8e/58e48e35-1f13-1cc4-418d-5f14f6c6630c/mzaf_17363179489559306395.plus.aac.p.m4a",
  "koli-aashor": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d4/e7/ed/d4e7ed12-bad3-ecd9-1f29-9cef68974d36/mzaf_14265375597334458478.plus.aac.p.m4a",
  "laado": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/31/f7/e3/31f7e300-0909-2760-a2c7-7ae1ce34b74b/mzaf_5802030231272570393.plus.aac.p.m4a",
  "ride-home": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/51/e3/c0/51e3c0c3-3513-af20-bbad-50b9324622e2/mzaf_2442309061356547010.plus.aac.p.m4a"
};

class ProceduralAudioEngine {
  constructor() {
    this.ctx = null;
    this.activeNodes = [];
    this.activeIntervals = [];
    this.isPlaying = false;
    this.currentSoundId = null;
    this.currentSound = null;
    this.analyser = null;
    this.timerInterval = null;
    this.remainingSeconds = 15;
    this.onTick = null;
    this.onStop = null;
    this.animationFrameId = null;
    this.audioElement = null;
    this.mediaSource = null;
    this.masterGain = null;
    this.animTime = 0;
    this.activeCanvases = new Set();
    this.isMuted = false;
    this.miniPlayerInitialized = false;
  }

  init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  setupMiniPlayer() {
    if (this.miniPlayerInitialized || typeof document === "undefined") return;
    this.miniPlayerInitialized = true;

    const playBtn = document.querySelector("#mini-player-play-btn");
    const muteBtn = document.querySelector("#mini-player-mute-btn");
    const saveBtn = document.querySelector("#mini-player-save-btn");
    const closeBtn = document.querySelector("#mini-player-close-btn");
    const orb = document.querySelector("#mini-player-orb");

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        if (this.isPlaying) {
          this.stop();
        } else if (this.currentSound) {
          this.playHookCue(this.currentSound);
        }
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener("click", () => {
        this.isMuted = !this.isMuted;
        muteBtn.textContent = this.isMuted ? "🔇" : "🔊";
        muteBtn.title = this.isMuted ? "Unmute Audio" : "Mute Audio";
        if (this.audioElement) {
          this.audioElement.muted = this.isMuted;
        }
        if (this.masterGain && this.ctx) {
          this.masterGain.gain.setValueAtTime(this.isMuted ? 0.0001 : 0.28, this.ctx.currentTime);
        }
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        if (!this.currentSound) return;
        toggleSaveSound(this.currentSound.id, activeBoard);
        this.updateMiniPlayerSaveState();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        this.stop();
        const bar = document.querySelector("#mini-player-bar");
        if (bar) bar.classList.add("hidden");
        document.body.classList.remove("has-mini-player");
      });
    }

    if (orb) {
      orb.addEventListener("click", () => {
        if (this.currentSound) {
          openSoundStory(this.currentSound);
        }
      });
    }
  }

  updateMiniPlayerSaveState() {
    const saveBtn = document.querySelector("#mini-player-save-btn");
    if (!saveBtn || !this.currentSound) return;
    const vault = getSavedVault();
    const isSaved = (vault[activeBoard] || []).includes(this.currentSound.id);
    saveBtn.textContent = isSaved ? "✓" : "＋";
    saveBtn.classList.toggle("is-saved", isSaved);
    saveBtn.title = isSaved ? `Saved in "${activeBoard}"` : `Save to "${activeBoard}"`;
  }

  determineArchetype(sound) {
    const text = (sound.language + " " + sound.scene + " " + sound.energy + " " + (sound.idea || "")).toLowerCase();
    if (text.includes("drill") || text.includes("hip-hop") || text.includes("rap") || text.includes("gym") || text.includes("808")) {
      return "drill";
    }
    if (text.includes("synth") || text.includes("retro") || text.includes("neon") || text.includes("dance") || text.includes("pop")) {
      return "synthwave";
    }
    if (text.includes("folk") || text.includes("baul") || text.includes("flute") || text.includes("classical") || text.includes("ambient") || text.includes("tramway")) {
      return "folk";
    }
    return "lofi";
  }

  getArchetypeLabel(sound) {
    const type = this.determineArchetype(sound);
    switch (type) {
      case "drill": return "Desi Drill / 808 Pulse";
      case "synthwave": return "Retro Synthwave / Arp Groove";
      case "folk": return "Acoustic Baul / Folk Chime";
      default: return "Warm Lo-Fi / Tape Flutter";
    }
  }

  stop() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    if (this.activeIntervals) {
      this.activeIntervals.forEach(clearInterval);
      this.activeIntervals = [];
    }
    if (this.animationFrameId && typeof cancelAnimationFrame !== "undefined") {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.audioElement) {
      try {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
        this.audioElement.removeAttribute("src");
        this.audioElement.load();
      } catch (e) {}
      this.audioElement = null;
    }

    if (this.ctx) {
      this.activeNodes.forEach((node) => {
        try {
          if (node.stop) node.stop();
          if (node.disconnect) node.disconnect();
        } catch (e) {}
      });
    }
    this.activeNodes = [];
    this.masterGain = null;
    const prevId = this.currentSoundId;
    this.isPlaying = false;
    this.currentSoundId = null;
    this.remainingSeconds = 15;

    // Reset Mini Player play button
    const miniPlayBtn = document.querySelector("#mini-player-play-btn");
    if (miniPlayBtn) {
      miniPlayBtn.textContent = "▶";
      miniPlayBtn.setAttribute("aria-label", "Play Audio");
    }

    // Reset active canvases to idle state
    this.activeCanvases.forEach((canvas) => {
      this.drawIdleWaveform(canvas);
    });

    if (this.onStop && prevId) {
      this.onStop(prevId);
    }
  }

  playHookCue(sound, onTick, onStop) {
    this.setupMiniPlayer();
    this.stop();
    this.init();

    this.isPlaying = true;
    this.currentSoundId = sound.id;
    this.currentSound = sound;
    this.remainingSeconds = 15;
    this.onTick = onTick;
    this.onStop = onStop;

    // Update and display bottom mini-player
    const miniPlayer = document.querySelector("#mini-player-bar");
    if (miniPlayer) {
      miniPlayer.classList.remove("hidden");
      document.body.classList.add("has-mini-player");
      const titleEl = document.querySelector("#mini-player-title");
      const artistEl = document.querySelector("#mini-player-artist");
      const playBtn = document.querySelector("#mini-player-play-btn");
      const timerEl = document.querySelector("#mini-player-timer");
      const igBtn = document.querySelector("#mini-player-ig-btn");
      const spBtn = document.querySelector("#mini-player-spotify-btn");
      const miniWaveform = document.querySelector("#mini-player-waveform");

      if (titleEl) titleEl.textContent = sound.title;
      if (artistEl) artistEl.textContent = `${sound.artist} · ${sound.scene || sound.language || "Indie"}`;
      if (playBtn) {
        playBtn.textContent = "■";
        playBtn.setAttribute("aria-label", "Pause Audio");
      }
      if (timerEl) timerEl.textContent = "0:15";
      if (igBtn) igBtn.href = `https://www.instagram.com/reels/audio/?query=${encodeURIComponent(sound.title + " " + sound.artist)}`;
      if (spBtn) spBtn.href = sound.outboundUrl || `https://open.spotify.com/search/${encodeURIComponent(sound.title + " " + sound.artist)}`;

      this.updateMiniPlayerSaveState();

      if (miniWaveform) {
        this.activeCanvases.add(miniWaveform);
      }
    }

    const audioUrl = sound.previewAudioUrl || REAL_AUDIO_PREVIEWS[sound.id];

    if (audioUrl) {
      try {
        const audio = new Audio();
        audio.src = audioUrl;
        audio.preload = "auto";
        audio.volume = 0.95;
        audio.muted = this.isMuted;
        this.audioElement = audio;

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              this.startTimer();
              this.startWaveformLoop();
            })
            .catch((err) => {
              console.warn("Direct stream play blocked, falling back to harmonic synth:", err);
              this.fallbackToSynthesizer(sound);
            });
        }

        audio.addEventListener("ended", () => {
          this.stop();
        });

        audio.addEventListener("error", (err) => {
          console.warn("Audio element error, falling back to harmonic synth:", err);
          this.fallbackToSynthesizer(sound);
        });

        return;
      } catch (e) {
        console.warn("Audio element setup error:", e);
      }
    }

    // Fallback if no URL or offline
    this.fallbackToSynthesizer(sound);
  }

  fallbackToSynthesizer(sound) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    const targetGain = this.isMuted ? 0.0001 : 0.28;
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.exponentialRampToValueAtTime(targetGain, now + 0.3);
    masterGain.gain.setValueAtTime(targetGain, now + 14.0);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 15.0);

    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 64;
    masterGain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
    this.masterGain = masterGain;
    this.activeNodes.push(masterGain, this.analyser);

    const type = this.determineArchetype(sound);
    if (type === "drill") {
      this.synthesizeDrill(masterGain);
    } else if (type === "synthwave") {
      this.synthesizeSynthwave(masterGain);
    } else if (type === "folk") {
      this.synthesizeFolk(masterGain);
    } else {
      this.synthesizeLofi(masterGain);
    }

    this.startTimer();
    this.startWaveformLoop();
  }

  startTimer() {
    const updateDisplays = (sec) => {
      const formatted = `0:${String(Math.max(0, sec)).padStart(2, "0")}`;
      if (this.onTick) this.onTick(sec);
      const miniTimer = document.querySelector("#mini-player-timer");
      if (miniTimer) miniTimer.textContent = formatted;
    };

    updateDisplays(this.remainingSeconds);
    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      updateDisplays(this.remainingSeconds);
      if (this.remainingSeconds <= 0) {
        this.stop();
      }
    }, 1000);
  }

  synthesizeLofi(masterGain) {
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, now);
    filter.connect(masterGain);
    this.activeNodes.push(filter);

    const chordFrequencies = [146.83, 185.00, 220.00, 277.18]; // Dmaj7

    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(4.2, now);
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(6, now);
    lfo.connect(lfoGain);
    lfo.start(now);
    lfo.stop(now + 12.5);
    this.activeNodes.push(lfo, lfoGain);

    chordFrequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      lfoGain.connect(osc.detune);

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.01, now);
      oscGain.gain.linearRampToValueAtTime(0.08 / chordFrequencies.length, now + 0.4 + (idx * 0.1));

      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start(now);
      osc.stop(now + 12.5);
      this.activeNodes.push(osc, oscGain);
    });

    try {
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.value = 1500;
      noiseFilter.Q.value = 1.2;

      const noiseGain = ctx.createGain();
      noiseGain.gain.value = 0.012;

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      whiteNoise.start(now);
      whiteNoise.stop(now + 12.5);
      this.activeNodes.push(whiteNoise, noiseFilter, noiseGain);
    } catch (e) {}

    const pulseInterval = setInterval(() => {
      if (!this.isPlaying) return;
      const t = ctx.currentTime;
      const pulseOsc = ctx.createOscillator();
      pulseOsc.type = "triangle";
      pulseOsc.frequency.setValueAtTime(440, t);
      const pGain = ctx.createGain();
      pGain.gain.setValueAtTime(0.04, t);
      pGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      pulseOsc.connect(pGain);
      pGain.connect(masterGain);
      pulseOsc.start(t);
      pulseOsc.stop(t + 0.4);
    }, 1500);
    this.activeIntervals.push(pulseInterval);
  }

  synthesizeDrill(masterGain) {
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const trigger808 = (t) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(145, t);
      osc.frequency.exponentialRampToValueAtTime(44, t + 0.28);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.75);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(t);
      osc.stop(t + 0.8);
    };

    const triggerHiHat = (t) => {
      const osc = ctx.createOscillator();
      osc.type = "square";
      osc.frequency.setValueAtTime(7500, t);
      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.setValueAtTime(8000, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start(t);
      osc.stop(t + 0.06);
    };

    const notes = [329.63, 392.00, 440.00, 493.88];
    let noteIdx = 0;
    const triggerLead = (t) => {
      const osc = ctx.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(notes[noteIdx % notes.length], t);
      noteIdx++;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1800, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start(t);
      osc.stop(t + 0.35);
    };

    trigger808(now);
    triggerLead(now);

    const drillInterval = setInterval(() => {
      if (!this.isPlaying) return;
      const t = ctx.currentTime;
      trigger808(t);
      triggerLead(t);
      triggerHiHat(t + 0.25);
      triggerHiHat(t + 0.5);
      triggerHiHat(t + 0.75);
    }, 1100);
    this.activeIntervals.push(drillInterval);
  }

  synthesizeSynthwave(masterGain) {
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.Q.setValueAtTime(4.0, now);
    filter.frequency.setValueAtTime(700, now);
    filter.frequency.linearRampToValueAtTime(2600, now + 4.0);
    filter.frequency.linearRampToValueAtTime(900, now + 8.0);
    filter.connect(masterGain);
    this.activeNodes.push(filter);

    const arpNotes = [261.63, 329.63, 392.00, 493.88, 523.25];
    let step = 0;

    const arpInterval = setInterval(() => {
      if (!this.isPlaying) return;
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = step % 2 === 0 ? "sawtooth" : "square";
      osc.frequency.setValueAtTime(arpNotes[step % arpNotes.length], t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.09, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      osc.connect(gain);
      gain.connect(filter);
      osc.start(t);
      osc.stop(t + 0.25);

      if (step % 4 === 0) {
        const kick = ctx.createOscillator();
        kick.type = "sine";
        kick.frequency.setValueAtTime(130, t);
        kick.frequency.exponentialRampToValueAtTime(50, t + 0.15);
        const kGain = ctx.createGain();
        kGain.gain.setValueAtTime(0.25, t);
        kGain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
        kick.connect(kGain);
        kGain.connect(masterGain);
        kick.start(t);
        kick.stop(t + 0.22);
      }

      step++;
    }, 220);
    this.activeIntervals.push(arpInterval);
  }

  synthesizeFolk(masterGain) {
    const ctx = this.ctx;
    const now = ctx.currentTime;

    const droneFreqs = [138.59, 207.65, 277.18];
    droneFreqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 1.2);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 12.5);
      this.activeNodes.push(osc, gain);
    });

    const chimeFreqs = [277.18, 311.13, 349.23, 415.30, 466.16];
    let chimeIdx = 0;

    const chimeInterval = setInterval(() => {
      if (!this.isPlaying) return;
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(chimeFreqs[chimeIdx % chimeFreqs.length], t);
      chimeIdx++;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(t);
      osc.stop(t + 0.7);
    }, 650);
    this.activeIntervals.push(chimeInterval);
  }

  drawIdleWaveform(canvas) {
    if (!canvas || typeof canvas.getContext !== "function") return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = canvas.id === "mini-player-waveform" ? "rgba(255, 255, 255, 0.25)" : "#ded6c7";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  attachWaveformCanvas(canvas) {
    if (!canvas) return;
    this.activeCanvases.add(canvas);
    if (this.isPlaying && !this.animationFrameId) {
      this.startWaveformLoop();
    } else if (!this.isPlaying) {
      this.drawIdleWaveform(canvas);
    }
  }

  detachWaveformCanvas(canvas) {
    if (!canvas) return;
    this.activeCanvases.delete(canvas);
  }

  startWaveformLoop() {
    if (this.animationFrameId && typeof cancelAnimationFrame !== "undefined") {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    const bufferLength = this.analyser ? this.analyser.frequencyBinCount : 32;
    const dataArray = new Uint8Array(bufferLength);
    const freqData = new Uint8Array(bufferLength);

    const render = () => {
      if (!this.isPlaying) {
        this.activeCanvases.forEach((c) => this.drawIdleWaveform(c));
        return;
      }

      if (typeof requestAnimationFrame !== "undefined") {
        this.animationFrameId = requestAnimationFrame(render);
      }

      let hasSignal = false;
      if (this.analyser) {
        try {
          this.analyser.getByteTimeDomainData(dataArray);
          this.analyser.getByteFrequencyData(freqData);
          for (let k = 0; k < bufferLength; k++) {
            if (Math.abs(dataArray[k] - 128) > 2) {
              hasSignal = true;
              break;
            }
          }
        } catch (e) {}
      }

      this.animTime = (this.animTime || 0) + 0.15;

      this.activeCanvases.forEach((canvas) => {
        if (!canvas || typeof canvas.getContext !== "function") return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const width = canvas.width;
        const height = canvas.height;
        const isDark = canvas.id === "mini-player-waveform";

        ctx.clearRect(0, 0, width, height);

        // Background
        ctx.fillStyle = isDark ? "rgba(0, 0, 0, 0.25)" : "rgba(251, 247, 238, 0.45)";
        ctx.fillRect(0, 0, width, height);

        // Waveform stroke
        ctx.lineWidth = 2;
        ctx.strokeStyle = isDark ? "#ff7660" : "#c85a32";
        ctx.beginPath();

        const sliceWidth = width / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          let v = hasSignal
            ? dataArray[i] / 128.0
            : 1 + Math.sin(i * 0.25 + this.animTime) * 0.22 + Math.cos(i * 0.5 - this.animTime * 0.7) * 0.12;
          const y = (v * height) / 2;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          x += sliceWidth;
        }

        ctx.lineTo(width, height / 2);
        ctx.stroke();

        // Frequency bars
        const numBars = isDark ? 16 : 14;
        const barWidth = width / numBars - 2;
        for (let j = 0; j < numBars; j++) {
          const barHeight = hasSignal
            ? (freqData[j * 2] / 255) * (height * 0.7)
            : (Math.sin(j * 0.75 + this.animTime * 2) * 0.45 + 0.5) * (height * 0.65) + 3;
          ctx.fillStyle = isDark ? "rgba(255, 118, 96, 0.38)" : "rgba(217, 119, 54, 0.32)";
          ctx.fillRect(j * (barWidth + 2), height - barHeight, barWidth, barHeight);
        }
      });
    };

    render();
  }

  drawWaveform(canvas) {
    this.attachWaveformCanvas(canvas);
  }
}

const audioEngine = new ProceduralAudioEngine();

function toggleHookCuePlay(sound, btnEl, cardRoot) {
  if (audioEngine.isPlaying && audioEngine.currentSoundId === sound.id) {
    audioEngine.stop();
    return;
  }

  // Clear any existing playing states
  document.querySelectorAll(".sound-card.is-playing, .today-card.is-playing, .scene-track-card.is-playing, .search-row.is-playing").forEach((el) => {
    el.classList.remove("is-playing");
    const eq = el.querySelector(".cue-equalizer");
    if (eq) eq.remove();
  });
  document.querySelectorAll(".card-cue-btn, .today-cue-btn, .scene-cue-btn, .preview-cue-btn, .search-cue-btn, #radar-cue-action-btn").forEach((btn) => {
    btn.classList.remove("is-playing");
    btn.textContent = "▶ Cue";
  });

  if (cardRoot) {
    cardRoot.classList.add("is-playing");
    const art = cardRoot.querySelector(".art") || cardRoot.querySelector(".today-art");
    if (art && !art.querySelector(".cue-equalizer")) {
      const eq = document.createElement("div");
      eq.className = "cue-equalizer";
      eq.innerHTML = "<span></span><span></span><span></span><span></span>";
      art.append(eq);
    }
  }

  if (btnEl) {
    btnEl.classList.add("is-playing");
    btnEl.textContent = "■ 0:15";
  }

  audioEngine.playHookCue(
    sound,
    (seconds) => {
      const secFormatted = `0:${String(Math.max(0, seconds)).padStart(2, "0")}`;
      if (btnEl) btnEl.textContent = `■ ${secFormatted}`;
      const timerEl = document.querySelector("#modal-cue-timer");
      if (timerEl) timerEl.textContent = secFormatted;
    },
    (stoppedId) => {
      if (btnEl) {
        btnEl.classList.remove("is-playing");
        btnEl.textContent = "▶ Cue";
      }
      if (cardRoot) {
        cardRoot.classList.remove("is-playing");
        const eq = cardRoot.querySelector(".cue-equalizer");
        if (eq) eq.remove();
      }
      const modalPlayBtn = document.querySelector("#modal-cue-play-btn");
      if (modalPlayBtn) {
        modalPlayBtn.classList.remove("is-playing");
        modalPlayBtn.innerHTML = '<span class="play-icon">▶</span> Play Song Preview';
      }
      const timerEl = document.querySelector("#modal-cue-timer");
      if (timerEl) timerEl.textContent = "0:15";
    }
  );
}

// 6. Render Post Match Cards (Strict & Dynamic)
let currentMatchRequestSeq = 0;

function updateCardSaveStates() {
  const vault = getSavedVault();
  const currentBoardItems = vault[activeBoard] || [];
  document.querySelectorAll("#sound-grid .sound-card").forEach((root) => {
    const soundId = root.dataset.soundId;
    const saveBtn = root.querySelector(".save");
    if (saveBtn) {
      const isSaved = currentBoardItems.includes(soundId);
      saveBtn.classList.toggle("is-saved", isSaved);
      saveBtn.textContent = isSaved ? "✓" : "＋";
      saveBtn.setAttribute("aria-label", isSaved ? `Remove from ${activeBoard}` : `Save to ${activeBoard}`);
    }
  });
  if (typeof audioEngine !== "undefined" && audioEngine.updateMiniPlayerSaveState) {
    audioEngine.updateMiniPlayerSaveState();
  }
}

function renderSoundCardElements(sounds) {
  if (!grid || !template || !template.content) return;
  grid.replaceChildren();

  const vault = getSavedVault();
  const currentBoardItems = vault[activeBoard] || [];

  sounds.forEach((sound, index) => {
    const card = template.content.cloneNode(true);
    const root = card.querySelector(".sound-card");
    root.style.setProperty("--tone", `var(--${sound.tone || "accent"})`);
    root.dataset.soundId = sound.id;

    card.querySelector(".art-number").textContent = String(index + 1).padStart(2, "0");
    card.querySelector(".art-text").textContent = sound.art || "live viral";
    
    const stageEl = card.querySelector(".stage");
    stageEl.textContent = sound.stage || "Rising";
    stageEl.className = `stage stage-${(sound.stage || "rising").toLowerCase().replace(/\s+/g, "-")}`;
    
    card.querySelector(".language").textContent = sound.language || "Indie";

    // Match relevance badge
    const relBadge = card.querySelector(".match-relevance-badge");
    if (relBadge) {
      if (sound.relevanceScore) {
        relBadge.textContent = `${sound.relevanceScore}% Fit`;
      } else if (sound.isDynamic) {
        relBadge.textContent = "⚡ Live Viral";
      } else {
        relBadge.textContent = "✦ Verified Fit";
      }
    }

    card.querySelector("h3").textContent = sound.title;
    card.querySelector(".artist").textContent = sound.artist;
    card.querySelector(".hook strong").textContent = sound.hook || "0:25 — 0:40";
    card.querySelector(".best-for").textContent = sound.best || "";
    card.querySelector(".fresh p").textContent = sound.idea || "";

    // Sound twins pill
    const twinsEl = card.querySelector(".sound-twins-info");
    if (twinsEl && sound.soundTwins && sound.soundTwins.length) {
      twinsEl.textContent = `Twin: ${sound.soundTwins[0]}`;
    }

    // Cue preview button & vinyl orb click
    const cueBtn = card.querySelector(".card-cue-btn");
    const orb = card.querySelector(".orb");
    if (cueBtn) {
      cueBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleHookCuePlay(sound, cueBtn, root);
      });
    }
    if (orb) {
      orb.style.cursor = "pointer";
      orb.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleHookCuePlay(sound, cueBtn, root);
      });
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

    // Outbound links (Instagram & Spotify)
    const igLink = card.querySelector(".ig-link");
    if (igLink) {
      igLink.href = `https://www.instagram.com/reels/audio/?query=${encodeURIComponent(sound.title + " " + sound.artist)}`;
      igLink.target = "_blank";
      igLink.rel = "noopener noreferrer";
    }

    const openLink = card.querySelector(".open-link");
    if (openLink) {
      openLink.href = sound.outboundUrl || `https://open.spotify.com/search/${encodeURIComponent(sound.title + " " + sound.artist)}`;
      openLink.target = "_blank";
      openLink.rel = "noopener noreferrer";
    }

    // Click card to open modal story
    root.addEventListener("click", (e) => {
      if (e.target.closest(".save") || e.target.closest(".open-link") || e.target.closest(".ig-link") || e.target.closest(".copy-blueprint-btn") || e.target.closest(".card-cue-btn") || e.target.closest(".orb")) return;
      openSoundStory(sound);
    });

    grid.append(card);
  });
}

async function renderMatchCards(customSounds = null) {
  if (customSounds && Array.isArray(customSounds)) {
    renderSoundCardElements(customSounds);
    return;
  }

  const ideaInput = document.querySelector("#reel-idea-input");
  const ideaText = ideaInput && ideaInput.value ? ideaInput.value.trim() : "";
  const moodEl = document.querySelector("#mood");
  const currentEnergy = moodEl && moodEl.value ? moodEl.value : "soft";

  const seq = ++currentMatchRequestSeq;

  // Auto-parse idea if provided
  if (ideaText) {
    const parsed = parseIdeaIntent(ideaText);
    if (parsed) {
      activeMoment = parsed.detectedMoment;
      document.querySelectorAll(".chip").forEach((chip) => {
        chip.classList.toggle("selected", chip.dataset.moment === activeMoment);
      });
      const clearBtn = document.querySelector("#idea-clear-btn");
      if (clearBtn) clearBtn.classList.remove("hidden");
    }
  }

  // Update match-note text
  const matchNoteEl = document.querySelector("#match-note");
  const selectedMomentEl = document.querySelector(".chip.selected");
  const momentLabel = selectedMomentEl ? selectedMomentEl.textContent : activeMoment;
  const moodSelect = document.querySelector("#mood");
  const moodLabel = moodSelect ? moodSelect.selectedOptions[0].textContent : currentEnergy;

  if (matchNoteEl) {
    if (ideaText) {
      matchNoteEl.innerHTML = `for your idea "<strong>${escapeHtml(ideaText)}</strong>" &amp; <strong>${momentLabel}</strong>`;
    } else {
      matchNoteEl.innerHTML = `for an <strong>${momentLabel}</strong> with a <strong>${moodLabel}</strong> mood`;
    }
  }

  // Show live scanning indicator
  const loadingIndicator = document.querySelector("#match-loading-indicator");
  if (loadingIndicator) loadingIndicator.classList.remove("hidden");

  try {
    const sounds = await dynamicSoundEngine.fetchViralTracks(activeMoment, currentEnergy, ideaText);
    
    if (seq !== currentMatchRequestSeq) return;

    if (sounds && sounds.length >= 3) {
      renderSoundCardElements(sounds);
    } else {
      // Complement or fallback with strictly verified catalog tracks
      const strictCatalog = catalog.filter((s) => isSoundStrictlyCompatible(s, activeMoment));
      const existingIds = new Set((sounds || []).map((s) => s.id));
      const needed = 3 - (sounds ? sounds.length : 0);
      const fills = strictCatalog.filter((s) => !existingIds.has(s.id)).slice(0, needed);
      const combined = [...(sounds || []), ...fills];
      renderSoundCardElements(combined.length ? combined : strictCatalog.slice(0, 3));
    }
  } catch (err) {
    console.warn("Live dynamic fetch error:", err);
    if (seq === currentMatchRequestSeq) {
      const fallbackSounds = catalog.filter((s) => isSoundStrictlyCompatible(s, activeMoment)).slice(0, 3);
      renderSoundCardElements(fallbackSounds);
    }
  } finally {
    if (seq === currentMatchRequestSeq && loadingIndicator) {
      loadingIndicator.classList.add("hidden");
    }
  }
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
          <button class="today-cue-btn" data-sound="${sound.id}">▶ Cue</button>
          <button class="view-story-btn" data-sound="${sound.id}">View story ↗</button>
          <a class="ig-link" href="https://www.instagram.com/reels/audio/?query=${encodeURIComponent(sound.title + ' ' + sound.artist)}" target="_blank" rel="noopener noreferrer" title="Open on Instagram Reels Audio">IG ↗</a>
          <a class="listen-outbound" href="${sound.outboundUrl || `https://open.spotify.com/search/${encodeURIComponent(sound.title + ' ' + sound.artist)}`}" target="_blank" rel="noopener noreferrer" title="Listen on Spotify">Spotify ↗</a>
        </div>
      </div>
    `;

    const cueBtn = el.querySelector(".today-cue-btn");
    if (cueBtn) {
      cueBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleHookCuePlay(sound, cueBtn, el);
      });
    }

    const todayOrb = el.querySelector(".today-orb");
    if (todayOrb) {
      todayOrb.style.cursor = "pointer";
      todayOrb.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleHookCuePlay(sound, cueBtn, el);
      });
    }

    el.querySelector(".view-story-btn").addEventListener("click", () => openSoundStory(sound));
    todayGrid.append(el);
  });
}

// 8. Sound Story Modal (With Sound Route Visualizer & One-Click Blueprint)
function openSoundStory(sound) {
  if (!modalOverlay || !modalContent) return;

  const route = getSoundRoute(sound);
  const twinBadges = sound.soundTwins && sound.soundTwins.length
    ? sound.soundTwins.map((t) => `<span class="twin-pill">✦ ${t}</span>`).join(" ")
    : "None listed";

  const captionHook = `Found this before it peaks 🕊️ // ${sound.title} by ${sound.artist}`;
  const matchedCorridor = typeof soundRoutes !== "undefined" ? soundRoutes.find((r) => r.soundId === sound.id) : null;
  const corridorAction = matchedCorridor 
    ? `<button class="route-map-jump-btn" id="route-map-jump-btn">🗺️ Trace on Map ↗</button>` 
    : "";

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
          <div class="route-header-right">
            ${corridorAction}
            <span class="route-badge stage-${sound.stage.toLowerCase().replace(/\s+/g, "-")}">● ${sound.stage}</span>
          </div>
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

        <!-- Official Audio Hook Preview Player -->
        <div class="cue-player-box">
          <div class="cue-player-header">
            <span>OFFICIAL AUDIO HOOK PREVIEW</span>
            <span class="cue-archetype-tag">● ${sound.title} — ${sound.artist}</span>
          </div>
          <div class="cue-player-main">
            <button class="modal-cue-play-btn" id="modal-cue-play-btn" type="button">
              <span class="play-icon">▶</span> Play Song Preview
            </button>
            <div class="cue-waveform-wrap">
              <canvas class="cue-waveform-canvas" id="modal-cue-waveform" width="280" height="38"></canvas>
            </div>
            <span class="cue-timer-display" id="modal-cue-timer">0:15</span>
          </div>
          <p class="cue-legal-note">
            <strong>✦ Official Master Audio Stream:</strong> Licensed 30-second audio preview of "${sound.title}". Full uncompressed master streams outbound on Spotify & Apple Music.
          </p>
        </div>
      </div>
      <div class="story-block">
        <span class="story-label">Non-Cliché Creator Idea</span>
        <p class="idea-text">${sound.idea}</p>
      </div>
      <div class="story-block">
        <span class="story-label">Sound Twins (Aesthetic Counterparts)</span>
        <p class="twins-text">${twinBadges}</p>
      </div>
      <div class="story-actions">
        <a class="ig-link" href="https://www.instagram.com/reels/audio/?query=${encodeURIComponent(sound.title + ' ' + sound.artist)}" target="_blank" rel="noopener noreferrer">Instagram Reel Audio ↗</a>
        <a class="listen-link" href="${sound.outboundUrl || `https://open.spotify.com/search/${encodeURIComponent(sound.title + ' ' + sound.artist)}`}" target="_blank" rel="noopener noreferrer">Listen on Spotify ↗</a>
        <button class="save-modal-btn" id="modal-save-btn">Save to "${activeBoard}"</button>
      </div>
      <p class="rights-disclaimer">Curated editorial layer. Mehfil respects music rights and connects you directly to official streaming platforms.</p>
    </div>
  `;

  // Jump to Corridor Map listener
  const mapJumpBtn = modalContent.querySelector("#route-map-jump-btn");
  if (mapJumpBtn && matchedCorridor) {
    mapJumpBtn.addEventListener("click", () => {
      closeSoundStory();
      renderRoutesSection(matchedCorridor.id);
      const routesSection = document.querySelector("#routes");
      if (routesSection) {
        routesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

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

  // Modal hook cue audio player
  const modalCuePlayBtn = modalContent.querySelector("#modal-cue-play-btn");
  const modalWaveform = modalContent.querySelector("#modal-cue-waveform");
  const modalTimer = modalContent.querySelector("#modal-cue-timer");

  if (modalWaveform && typeof modalWaveform.getContext === "function") {
    const wCtx = modalWaveform.getContext("2d");
    if (wCtx) {
      wCtx.beginPath();
      wCtx.moveTo(0, modalWaveform.height / 2);
      wCtx.lineTo(modalWaveform.width, modalWaveform.height / 2);
      wCtx.strokeStyle = "#ded6c7";
      wCtx.lineWidth = 1.5;
      wCtx.stroke();
    }
  }

  if (modalCuePlayBtn) {
    if (audioEngine.isPlaying && audioEngine.currentSoundId === sound.id) {
      modalCuePlayBtn.classList.add("is-playing");
      modalCuePlayBtn.innerHTML = '<span class="play-icon">■</span> Stop Song Preview';
      if (modalTimer) modalTimer.textContent = `0:${String(audioEngine.remainingSeconds).padStart(2, "0")}`;
      if (modalWaveform) audioEngine.drawWaveform(modalWaveform);
    }

    modalCuePlayBtn.addEventListener("click", () => {
      if (audioEngine.isPlaying && audioEngine.currentSoundId === sound.id) {
        audioEngine.stop();
        modalCuePlayBtn.classList.remove("is-playing");
        modalCuePlayBtn.innerHTML = '<span class="play-icon">▶</span> Play Song Preview';
        if (modalTimer) modalTimer.textContent = "0:15";
      } else {
        modalCuePlayBtn.classList.add("is-playing");
        modalCuePlayBtn.innerHTML = '<span class="play-icon">■</span> Stop Song Preview';
        audioEngine.playHookCue(
          sound,
          (sec) => {
            if (modalTimer) modalTimer.textContent = `0:${String(sec).padStart(2, "0")}`;
          },
          () => {
            if (modalCuePlayBtn) {
              modalCuePlayBtn.classList.remove("is-playing");
              modalCuePlayBtn.innerHTML = '<span class="play-icon">▶</span> Play Song Preview';
            }
            if (modalTimer) modalTimer.textContent = "0:15";
          }
        );
        if (modalWaveform) audioEngine.drawWaveform(modalWaveform);
      }
    });
  }

  modalOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSoundStory() {
  if (!modalOverlay) return;
  const modalWaveform = document.querySelector("#modal-cue-waveform");
  if (modalWaveform && typeof audioEngine !== "undefined") {
    audioEngine.detachWaveformCanvas(modalWaveform);
  }
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
  updateCardSaveStates();
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
        updateCardSaveStates();
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
    const sound = findSoundById(id);
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
let currentSearchSeq = 0;

async function searchSounds(query) {
  if (!searchResults) return;
  const trimmed = (query || "").trim();
  const terms = trimmed.toLowerCase().split(/\s+/).filter(Boolean);

  if (!terms.length) {
    searchResults.innerHTML = '<p class="search-empty">Try a mood, artist, language or use case (e.g. "gym", "punjabi drill", "wedding").</p>';
    return;
  }

  const thisSeq = ++currentSearchSeq;

  // 1. Static Catalog search
  let matches = catalog.filter((sound) => {
    const haystack = `${sound.title} ${sound.artist} ${sound.language} ${sound.scene} ${sound.stage} ${sound.best} ${sound.idea} ${sound.energy} ${(sound.soundTwins || []).join(" ")}`.toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });

  // 2. Hybrid Dynamic Search: if matches < 3, check cached dynamic tracks
  if (matches.length < 3 && typeof dynamicSoundEngine !== "undefined") {
    const dynamicCached = (dynamicSoundEngine.cachedTracks || []).filter((sound) => {
      const haystack = `${sound.title} ${sound.artist} ${sound.language} ${sound.scene} ${sound.stage} ${sound.best} ${sound.idea} ${sound.energy}`.toLowerCase();
      return terms.some((t) => haystack.includes(t)) && !matches.some((m) => m.id === sound.id);
    });
    matches = matches.concat(dynamicCached);

    // If still 0 matches, perform an async live query
    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="search-loading" style="padding: 16px; text-align: center; color: var(--ink-faint); font: 12px 'DM Mono', monospace;">⚡ Searching live viral corridors for "${trimmed}"...</div>`;
      try {
        const liveTracks = await dynamicSoundEngine.fetchViralTracks(activeMoment || "all", "bold", trimmed);
        if (thisSeq !== currentSearchSeq) return; // Stale query check
        if (liveTracks && liveTracks.length) {
          liveTracks.forEach((t) => {
            if (!matches.some((m) => m.id === t.id)) matches.push(t);
          });
        }
      } catch (err) {
        console.warn("Dynamic search fetch error:", err);
      }
    }
  }

  if (thisSeq !== currentSearchSeq) return; // Stale query check
  searchResults.replaceChildren();

  if (!matches.length) {
    searchResults.innerHTML = '<p class="search-empty">No matching sound found. Try searching for a language (Tamil, Punjabi, Malayalam), scene, or post type (gym, outfit, wedding, travel).</p>';
    return;
  }

  matches.slice(0, 8).forEach((sound) => {
    const row = document.createElement("div");
    row.className = "search-row";
    const isPlaying = typeof audioEngine !== "undefined" && audioEngine.isPlaying && audioEngine.currentSoundId === sound.id;
    if (isPlaying) row.classList.add("is-playing");

    const isDynamic = sound.isDynamic || (sound.source === "dynamic");
    row.innerHTML = `
      <span class="mini-art" style="--tone:var(--${sound.tone || "accent"})"></span>
      <div class="search-row-title">
        <strong>${sound.title} ${isDynamic ? '<span style="font-size:10px; color:var(--accent); font-weight:normal;">⚡ Live</span>' : ''}</strong>
        <small>${sound.artist} · ${sound.language || "Indie"} (${sound.scene || "Regional"})</small>
      </div>
      <span class="stage stage-${(sound.stage || "rising").toLowerCase().replace(/\s+/g, "-")}">● ${sound.stage || "Rising"}</span>
      <div class="search-actions-wrap">
        <button type="button" class="search-cue-btn ${isPlaying ? "is-playing" : ""}" aria-label="Cue preview for ${sound.title}">${isPlaying ? `■ 0:${String(audioEngine.remainingSeconds).padStart(2, "0")}` : "▶ Cue"}</button>
        <button type="button" class="search-view-btn" aria-label="View story for ${sound.title}">View ↗</button>
      </div>
    `;

    const cueBtn = row.querySelector(".search-cue-btn");
    cueBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleHookCuePlay(sound, cueBtn, row);
    });

    const viewBtn = row.querySelector(".search-view-btn");
    viewBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openSoundStory(sound);
    });

    row.addEventListener("click", (e) => {
      if (e.target.closest(".search-cue-btn") || e.target.closest(".search-view-btn")) return;
      openSoundStory(sound);
    });

    searchResults.append(row);
  });
}

// 11. Initial Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  if (typeof audioEngine !== "undefined" && audioEngine.setupMiniPlayer) {
    audioEngine.setupMiniPlayer();
  }

  // 1. Moment chips selection
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const current = document.querySelector(".chip.selected");
      if (current) current.classList.remove("selected");
      chip.classList.add("selected");
      activeMoment = chip.dataset.moment;

      // If gym selected, automatically ensure energy is bold
      const moodSelect = document.querySelector("#mood");
      if (activeMoment === "gym" && moodSelect && moodSelect.value === "soft") {
        moodSelect.value = "bold";
      }

      renderMatchCards();
    });
  });

  // 2. Free-text Idea Input & Clear Button
  const ideaInput = document.querySelector("#reel-idea-input");
  const ideaClearBtn = document.querySelector("#idea-clear-btn");

  if (ideaInput) {
    ideaInput.addEventListener("input", () => {
      if (ideaClearBtn) {
        ideaClearBtn.classList.toggle("hidden", !ideaInput.value.trim());
      }
    });

    ideaInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        renderMatchCards();
        const resultsSection = document.querySelector("#match-results");
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }

  if (ideaClearBtn) {
    ideaClearBtn.addEventListener("click", () => {
      if (ideaInput) {
        ideaInput.value = "";
        ideaInput.focus();
      }
      ideaClearBtn.classList.add("hidden");
      renderMatchCards();
    });
  }

  // 3. Quick Idea Presets
  document.querySelectorAll(".idea-preset-chip").forEach((preset) => {
    preset.addEventListener("click", () => {
      if (ideaInput) {
        ideaInput.value = preset.dataset.idea;
      }
      if (ideaClearBtn) {
        ideaClearBtn.classList.remove("hidden");
      }
      if (preset.dataset.moment) {
        activeMoment = preset.dataset.moment;
        document.querySelectorAll(".chip").forEach((chip) => {
          chip.classList.toggle("selected", chip.dataset.moment === activeMoment);
        });
      }
      if (preset.dataset.energy) {
        const moodSelect = document.querySelector("#mood");
        if (moodSelect) moodSelect.value = preset.dataset.energy;
      }
      renderMatchCards();
      const resultsSection = document.querySelector("#match-results");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // 4. "Find my sounds" button
  const findBtn = document.querySelector("#find-sounds");
  if (findBtn) {
    findBtn.addEventListener("click", () => {
      renderMatchCards();
      const resultsSection = document.querySelector("#match-results");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // 5. Energy dropdown change re-renders match
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

  const spotifySyncBtn = document.querySelector("#spotify-sync-btn");
  if (spotifySyncBtn) {
    spotifySyncBtn.addEventListener("click", () => openSpotifySyncModal(activeBoard));
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

  const tracks = allIds.map((id) => findSoundById(id)).filter(Boolean);
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
  const tracks = soundIds.map((id) => findSoundById(id)).filter(Boolean);

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
        <button class="scene-cue-btn" data-sound="${sound.id}">▶ Cue</button>
        <button class="scene-view-btn" data-sound="${sound.id}">View Story ↗</button>
        <button class="scene-copy-btn" data-sound="${sound.id}">📋 Copy</button>
      </div>
    `;

    const sceneCueBtn = item.querySelector(".scene-cue-btn");
    if (sceneCueBtn) {
      sceneCueBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleHookCuePlay(sound, sceneCueBtn, item);
      });
    }

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

// 18. Phase 3 Feature: Sound Routes & Cartographic Intelligence
const allHubs = [
  { id: "srinagar", name: "Srinagar", x: 235, y: 100, hubKey: "srinagar", desc: "Sufi & Kashmiri folk ambient" },
  { id: "ludhiana", name: "Ludhiana", x: 240, y: 170, hubKey: "chandigarh", desc: "Majha street rap & folk tumbe" },
  { id: "chandigarh", name: "Chandigarh", x: 258, y: 175, hubKey: "chandigarh", desc: "Punjabi college anthems" },
  { id: "delhi", name: "Delhi NCR", x: 280, y: 220, hubKey: "delhi", desc: "North campus indie & bedroom pop" },
  { id: "jaipur", name: "Jaipur", x: 245, y: 255, hubKey: "all", desc: "Desert folk roots & heritage" },
  { id: "ahmedabad", name: "Ahmedabad", x: 185, y: 325, hubKey: "ahmedabad", desc: "Urban garba & Gujarati acoustic" },
  { id: "mumbai", name: "Mumbai", x: 195, y: 415, hubKey: "pune", desc: "Film archive rework & indie rock" },
  { id: "pune", name: "Pune", x: 215, y: 435, hubKey: "pune", desc: "Maharashtra college alt-pop" },
  { id: "goa", name: "Goa", x: 215, y: 495, hubKey: "all", desc: "Sunset coastal aesthetics & psych" },
  { id: "hyderabad", name: "Hyderabad", x: 310, y: 450, hubKey: "hyderabad", desc: "Deccan groove & Dakhni rap" },
  { id: "bengaluru", name: "Bengaluru", x: 285, y: 545, hubKey: "bengaluru", desc: "Indiranagar bedroom pop & Kannada indie" },
  { id: "chennai", name: "Chennai", x: 345, y: 535, hubKey: "chennai", desc: "Besant Nagar synthwave & Tamil indie" },
  { id: "kochi", name: "Kochi", x: 255, y: 615, hubKey: "kochi", desc: "Fort Kochi lo-fi & Malabar acoustic" },
  { id: "kolkata", name: "Kolkata", x: 500, y: 335, hubKey: "kolkata", desc: "College Street adda & Baul indie" },
  { id: "guwahati", name: "Guwahati", x: 565, y: 265, hubKey: "guwahati", desc: "Brahmaputra ambient & hill folk" },
  { id: "shillong", name: "Shillong", x: 568, y: 285, hubKey: "guwahati", desc: "Pine trail acoustic rock" }
];

const soundRoutes = [
  {
    id: "majha-drill",
    title: "Majha Drill Corridor",
    soundId: "gal-sunja",
    subtitle: "Ludhiana ➔ Delhi NCR ➔ Mumbai & Pan-India",
    velocityDays: 34,
    velocityScore: 96,
    momentumLabel: "High-Velocity Breakout",
    originHub: "Ludhiana & Chandigarh",
    catalystHub: "Delhi NCR Campus Circuit",
    scaleHub: "Mumbai & Pan-India FYP",
    fieldNotes: "Started in Ludhiana basement studios with raw 808s and Punjabi folk tumbe riffs. Leaped when Delhi University gym & fashion creators adopted the 0:48 hook for quick-cut contrast reels, forcing national algorithmic pickup on reels and Spotify.",
    nodes: [
      { city: "Ludhiana", x: 240, y: 170, role: "origin", roleLabel: "Origin Hub", desc: "Street cypher & raw 808s recording" },
      { city: "Delhi NCR", x: 280, y: 220, role: "catalyst", roleLabel: "Campus Catalyst", desc: "Gym PRs & university fashion edits" },
      { city: "Mumbai", x: 195, y: 415, role: "scale", roleLabel: "National Scale", desc: "National FYP & OTT webseries sync" }
    ],
    pathD: "M 240 170 C 255 190 270 205 280 220 C 250 280 215 350 195 415"
  },
  {
    id: "malabar-lofi",
    title: "Malabar Monsoon Drift",
    soundId: "aalolam",
    subtitle: "Kochi ➔ Goa ➔ Mumbai Indie Sync",
    velocityDays: 52,
    velocityScore: 88,
    momentumLabel: "Atmospheric Organic Burn",
    originHub: "Fort Kochi Cafes",
    catalystHub: "Goa Coastal Vlogs",
    scaleHub: "Mumbai Indie Film Sync",
    fieldNotes: "Composed on acoustic guitar in Fort Kochi during heavy July downpours. Backpacker creators carried it to Goa sunset reels, where film-aesthetic lifestyle accounts gave it a serene, timeless quality that caught streaming editors' attention.",
    nodes: [
      { city: "Kochi", x: 255, y: 615, role: "origin", roleLabel: "Origin Hub", desc: "Acoustic nylon session during monsoon" },
      { city: "Goa", x: 215, y: 495, role: "catalyst", roleLabel: "Aesthetic Catalyst", desc: "Ferry transits & 35mm coastal film dumps" },
      { city: "Mumbai", x: 195, y: 415, role: "scale", roleLabel: "National Scale", desc: "Indie cinema soundtrack licensing" }
    ],
    pathD: "M 255 615 C 235 570 220 530 215 495 C 210 460 200 440 195 415"
  },
  {
    id: "chennai-synth",
    title: "Besant Nagar Retro Wave",
    soundId: "katchi-sera",
    subtitle: "Chennai ➔ Bengaluru ➔ Global Tamil Diaspora",
    velocityDays: 28,
    velocityScore: 98,
    momentumLabel: "Viral Diaspora Cross-Pollination",
    originHub: "Besant Nagar Studios",
    catalystHub: "Bengaluru Design Studios",
    scaleHub: "Global Diaspora Feeds",
    fieldNotes: "Blends retro synth grooves with acoustic nadaswaram accents. Leaped when Bengaluru motion designers paired the hook with Tamil kinetic typography, going viral across London, Toronto, and Singapore creator feeds.",
    nodes: [
      { city: "Chennai", x: 345, y: 535, role: "origin", roleLabel: "Origin Hub", desc: "Analogue synthesizer & retro guitar hook" },
      { city: "Bengaluru", x: 285, y: 545, role: "catalyst", roleLabel: "Design Catalyst", desc: "Kinetic typography & streetwear styling" },
      { city: "Kolkata", x: 500, y: 335, role: "scale", roleLabel: "Diaspora Gateway", desc: "Pan-Indian viral audio & diaspora feeds" }
    ],
    pathD: "M 345 535 C 320 540 305 542 285 545 C 340 480 430 410 500 335"
  },
  {
    id: "bengaluru-bedroom",
    title: "Garden City Bedroom Circuit",
    soundId: "belakina-kavithe",
    subtitle: "Bengaluru ➔ Pune ➔ Delhi NCR",
    velocityDays: 41,
    velocityScore: 91,
    momentumLabel: "Late-Night Organic Drift",
    originHub: "Indiranagar Rooftops",
    catalystHub: "Pune Student Cafes",
    scaleHub: "Delhi NCR Late-Night FYP",
    fieldNotes: "Born in a quiet 3rd-floor attic studio off 12th Main. Tech and design creators used it for subtle couple soft-launches and ambient work-from-cafe reels, spreading northward through student communities in Pune and Delhi.",
    nodes: [
      { city: "Bengaluru", x: 285, y: 545, role: "origin", roleLabel: "Origin Hub", desc: "Terrace acoustic demo after midnight" },
      { city: "Pune", x: 215, y: 435, role: "catalyst", roleLabel: "Student Catalyst", desc: "Soft-launch relationship reels & study edits" },
      { city: "Delhi NCR", x: 280, y: 220, role: "scale", roleLabel: "National Scale", desc: "Late-night highway drive reflections" }
    ],
    pathD: "M 285 545 C 250 500 230 470 215 435 C 235 360 260 290 280 220"
  },
  {
    id: "baul-modernist",
    title: "Baul Modernist Corridor",
    soundId: "amake-amar-moto",
    subtitle: "Kolkata ➔ Jaipur ➔ Mumbai Cinephiles",
    velocityDays: 60,
    velocityScore: 84,
    momentumLabel: "Heritage Acoustic Resonance",
    originHub: "College Street Adda",
    catalystHub: "Jaipur Heritage Photowalks",
    scaleHub: "Mumbai Arts Circuit",
    fieldNotes: "Dotara strings layered over subtle acoustic guitar and melancholic poetry. Picked up during autumn heritage photowalks and carried across architectural travel journeys, establishing it as the definitive soundtrack for Indian heritage travelogues.",
    nodes: [
      { city: "Kolkata", x: 500, y: 335, role: "origin", roleLabel: "Origin Hub", desc: "Adda dotara & acoustic baul recording" },
      { city: "Jaipur", x: 245, y: 255, role: "catalyst", roleLabel: "Heritage Catalyst", desc: "Architecture photowalks & 35mm film stills" },
      { city: "Mumbai", x: 195, y: 415, role: "scale", roleLabel: "National Scale", desc: "Arthouse documentary & festival score" }
    ],
    pathD: "M 500 335 C 410 290 320 270 245 255 C 220 310 205 360 195 415"
  },
  {
    id: "northeast-drift",
    title: "Brahmaputra Mountain Arc",
    soundId: "majuli",
    subtitle: "Guwahati ➔ Shillong ➔ Delhi NCR",
    velocityDays: 45,
    velocityScore: 89,
    momentumLabel: "Atmospheric Backpacker Surge",
    originHub: "Guwahati Riverside",
    catalystHub: "Shillong Hills",
    scaleHub: "Delhi NCR Travel Creators",
    fieldNotes: "Recorded with morning mist over the Brahmaputra river. Backpacker creators traveling through Meghalaya set solo hiking time-lapses to its soaring chorus, sparking a national wave of nature, monsoon, and motorcycle road trip reels.",
    nodes: [
      { city: "Guwahati", x: 565, y: 265, role: "origin", roleLabel: "Origin Hub", desc: "Riverfront bamboo flute & soaring vocals" },
      { city: "Shillong", x: 568, y: 285, role: "catalyst", roleLabel: "Hill Catalyst", desc: "Pine trail backpacking time-lapses" },
      { city: "Delhi NCR", x: 280, y: 220, role: "scale", roleLabel: "National Scale", desc: "Expedition & highway road trip reels" }
    ],
    pathD: "M 565 265 C 570 275 568 280 568 285 C 470 260 380 240 280 220"
  }
];

let currentRouteId = "majha-drill";

function handleCityNodeClick(cityName) {
  const matchingRoutes = soundRoutes.filter((r) => r.nodes.some((n) => n.city === cityName));
  if (matchingRoutes.length > 0) {
    if (matchingRoutes.some((r) => r.id === currentRouteId)) {
      const activeRoute = soundRoutes.find((r) => r.id === currentRouteId);
      const nodeInfo = activeRoute.nodes.find((n) => n.city === cityName);
      showToast(`📍 ${cityName}: ${nodeInfo ? nodeInfo.roleLabel + " — " + nodeInfo.desc : "Active corridor hub"}`);
    } else {
      renderRoutesSection(matchingRoutes[0].id);
      showToast(`Switched to ${matchingRoutes[0].title} passing through ${cityName}`);
    }
  } else {
    showToast(`📍 ${cityName} Hub: Mapped across regional sound archives.`);
  }
}

function renderSvgMap(activeRoute) {
  const wrap = document.querySelector("#map-svg-wrap");
  if (!wrap) return;

  const activeCityNames = new Set(activeRoute.nodes.map((n) => n.city));
  const passiveHubs = allHubs.filter((h) => !activeCityNames.has(h.name));

  const svg = `
    <svg viewBox="0 0 650 720" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Interactive Sound Migration Map of India">
      <!-- Coordinate Grids -->
      <g class="map-grid-layer" opacity="0.65">
        <line x1="80" y1="120" x2="620" y2="120" class="grid-line" />
        <text x="90" y="115" class="grid-label">32°N</text>
        <line x1="80" y1="280" x2="620" y2="280" class="grid-line" />
        <text x="90" y="275" class="grid-label">24°N</text>
        <line x1="80" y1="460" x2="620" y2="460" class="grid-line" />
        <text x="90" y="455" class="grid-label">16°N</text>
        <line x1="80" y1="620" x2="620" y2="620" class="grid-line" />
        <text x="90" y="615" class="grid-label">8°N</text>

        <line x1="180" y1="80" x2="180" y2="660" class="grid-line" />
        <text x="185" y="665" class="grid-label">72°E</text>
        <line x1="320" y1="80" x2="320" y2="660" class="grid-line" />
        <text x="325" y="665" class="grid-label">80°E</text>
        <line x1="480" y1="80" x2="480" y2="660" class="grid-line" />
        <text x="485" y="665" class="grid-label">88°E</text>
      </g>

      <!-- Cartographic Compass & Seal -->
      <g class="compass-rose" transform="translate(565, 80)">
        <circle cx="0" cy="0" r="22" stroke="#8a7e6b" stroke-width="0.8" fill="#faf5ea" stroke-dasharray="2, 2" />
        <polygon points="0,-16 4,-3 0,0 -4,-3" fill="#c85a32" />
        <polygon points="0,16 4,3 0,0 -4,3" fill="#8a7e6b" />
        <polygon points="16,0 3,4 0,0 3,-4" fill="#8a7e6b" />
        <polygon points="-16,0 -3,4 0,0 -3,-4" fill="#8a7e6b" />
        <text x="0" y="-20" text-anchor="middle">N</text>
      </g>

      <!-- India Stylized Cartographic Silhouette -->
      <path class="india-landmass" d="
        M 235,80
        C 260,85 270,110 265,135
        C 275,150 300,165 330,200
        C 380,215 440,245 480,260
        C 490,260 520,240 560,230
        C 590,225 615,220 620,235
        C 625,255 605,280 600,310
        C 585,335 565,330 550,305
        C 540,290 520,300 505,335
        C 490,355 450,370 420,410
        C 390,440 365,490 345,535
        C 325,580 305,630 280,680
        C 265,650 250,610 245,570
        C 230,530 215,495 210,460
        C 205,435 195,415 190,380
        C 180,360 150,365 130,350
        C 115,340 120,315 140,305
        C 120,290 145,270 170,270
        C 185,260 195,240 200,210
        C 205,180 215,160 215,140
        C 215,115 220,95 235,80 Z
      " />

      <!-- Active Route Trajectory Arcs -->
      <g class="trajectory-group">
        <path d="${activeRoute.pathD}" class="route-path-glow" />
        <path d="${activeRoute.pathD}" class="route-path-main" />
        <path d="${activeRoute.pathD}" class="route-travel-dash" />
      </g>

      <!-- Passive Regional City Hubs -->
      <g class="passive-hubs-layer">
        ${passiveHubs
          .map(
            (hub) => `
          <g class="passive-pin map-node" data-city="${hub.name}" data-hubkey="${hub.hubKey}" transform="translate(${hub.x}, ${hub.y})">
            <circle cx="0" cy="0" r="3.5" />
            <text x="6" y="3">${hub.name}</text>
          </g>
        `
          )
          .join("")}
      </g>

      <!-- Active Corridor Nodes -->
      <g class="active-nodes-layer">
        ${activeRoute.nodes
          .map((node) => {
            const roleColor = node.role === "origin" ? "#c85a32" : node.role === "catalyst" ? "#d97736" : "#2c5e43";
            const pulseClass = node.role === "origin" ? "pulse-origin" : node.role === "catalyst" ? "pulse-catalyst" : "pulse-scale";
            return `
            <g class="active-node map-node" data-city="${node.city}" data-role="${node.role}" transform="translate(${node.x}, ${node.y})">
              <!-- Pulsing Ring -->
              <circle cx="0" cy="0" r="8" fill="none" stroke-width="2" class="${pulseClass}" />
              <!-- Solid Center Pin -->
              <circle cx="0" cy="0" r="6" fill="${roleColor}" stroke="#fff" stroke-width="1.5" />
              <!-- Badge Container -->
              <g transform="translate(10, -10)">
                <rect x="-2" y="-10" width="${node.city.length * 7 + 34}" height="20" class="node-pin-bg" />
                <text x="4" y="0" class="node-label-text">${node.city}</text>
                <text x="4" y="8" class="node-role-badge" fill="${roleColor}">● ${node.roleLabel}</text>
              </g>
            </g>
          `;
          })
          .join("")}
      </g>
    </svg>
  `;

  wrap.innerHTML = svg;

  wrap.querySelectorAll(".map-node").forEach((nodeEl) => {
    nodeEl.addEventListener("click", () => {
      const cityName = nodeEl.dataset.city;
      handleCityNodeClick(cityName);
    });
  });
}

function renderRouteDossier(activeRoute) {
  const dossier = document.querySelector("#route-dossier");
  if (!dossier) return;

  const sound = catalog.find((s) => s.id === activeRoute.soundId) || catalog[0];

  dossier.innerHTML = `
    <div class="dossier-top">
      <div>
        <span class="dossier-meta-badge">MIGRATION TELEMETRY</span>
        <h3 class="dossier-title">${activeRoute.title}</h3>
        <p class="dossier-subtitle">${activeRoute.subtitle}</p>
      </div>
      <div class="dossier-velocity-box">
        <span class="dossier-velocity-num">${activeRoute.velocityDays}d</span>
        <span class="dossier-velocity-lbl">Niche to FYP</span>
      </div>
    </div>

    <!-- 3-Node Progression Corridor -->
    <div class="corridor-chain">
      <p class="corridor-chain-title">Corridor Progression Path</p>
      ${activeRoute.nodes
        .map(
          (node, idx) => `
        <div class="corridor-step">
          <div class="step-marker ${node.role}">${idx + 1}</div>
          <div class="step-info">
            <div class="step-info-top">
              <span class="step-city">${node.city}</span>
              <span class="step-role-tag">${node.roleLabel}</span>
            </div>
            <p class="step-desc">${node.desc}</p>
          </div>
        </div>
      `
        )
        .join("")}
    </div>

    <!-- Field Dispatch Note -->
    <div class="dossier-field-notes">
      <p class="field-notes-title">Cultural Analyst Field Note</p>
      <p class="field-notes-text">"${activeRoute.fieldNotes}"</p>
    </div>

    <!-- Featured Curated Sound Card -->
    <div class="dossier-sound-preview">
      <div class="sound-preview-top">
        <span>FEATURED CORRIDOR SOUND</span>
        <span>${sound.stage}</span>
      </div>
      <div class="sound-preview-track">
        <h4>${sound.title}</h4>
        <p>${sound.artist} · ${sound.scene}</p>
      </div>
      <div class="sound-preview-hook">
        <span>10-15s Hook:</span>
        <strong>${sound.hook}</strong>
      </div>
      <div class="sound-preview-actions">
        <button class="preview-cue-btn" id="dossier-cue-btn">▶ Hook Cue</button>
        <button class="preview-view-story-btn" id="dossier-story-btn">Story ↗</button>
        <button class="preview-copy-btn" id="dossier-copy-btn">📋 Blueprint</button>
      </div>
    </div>
  `;

  const cueBtn = dossier.querySelector("#dossier-cue-btn");
  if (cueBtn) {
    cueBtn.addEventListener("click", () => {
      toggleHookCuePlay(sound, cueBtn, dossier.querySelector(".dossier-sound-preview"));
    });
  }

  const storyBtn = dossier.querySelector("#dossier-story-btn");
  const copyBtn = dossier.querySelector("#dossier-copy-btn");

  if (storyBtn) {
    storyBtn.addEventListener("click", () => openSoundStory(sound));
  }
  if (copyBtn) {
    copyBtn.addEventListener("click", (e) => copyReelBlueprint(sound, e.currentTarget));
  }
}

function renderRoutesSection(routeId) {
  if (routeId) currentRouteId = routeId;
  const activeRoute = soundRoutes.find((r) => r.id === currentRouteId) || soundRoutes[0];

  const nav = document.querySelector("#routes-corridor-nav");
  if (nav) {
    nav.innerHTML = soundRoutes
      .map(
        (r) => `
      <button class="corridor-pill ${r.id === activeRoute.id ? "active" : ""}" data-route="${r.id}">
        <span class="pill-dot"></span>
        ${r.title}
      </button>
    `
      )
      .join("");

    nav.querySelectorAll(".corridor-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        renderRoutesSection(pill.dataset.route);
      });
    });
  }

  const corridorNameEl = document.querySelector("#map-active-corridor-name");
  if (corridorNameEl) corridorNameEl.textContent = activeRoute.title;

  renderSvgMap(activeRoute);
  renderRouteDossier(activeRoute);
}

// ==========================================================================
// 19. The Vault: Spotify Playlist Sync & Export (Phase 3 Feature)
// ==========================================================================
const spotifySyncModal = document.querySelector("#spotify-sync-modal");
const spotifySyncBody = document.querySelector("#spotify-sync-body");
const spotifySyncClose = document.querySelector("#spotify-sync-close");

function openSpotifySyncModal(boardName) {
  if (!spotifySyncModal || !spotifySyncBody) return;
  const board = boardName || activeBoard;
  const vault = getSavedVault();
  const soundIds = vault[board] || [];
  const tracks = soundIds.map((id) => findSoundById(id)).filter(Boolean);

  if (!tracks.length) {
    spotifySyncBody.innerHTML = `
      <div class="spotify-sync-header">
        <span class="story-label">The Vault · Playlist Exporter</span>
        <h2>Sync to <em>Spotify</em></h2>
        <p>Your curated collection <strong>"${board}"</strong> has no saved tracks yet.</p>
      </div>
      <div class="sync-board-info">
        <span class="sync-board-title">Board: <strong>${board}</strong></span>
        <span class="sync-track-count">0 Tracks</span>
      </div>
      <div style="padding: 20px 0; text-align: center;">
        <p style="font-size: 13px; color: var(--muted); line-height: 1.6; margin: 0 0 16px;">
          Use the <strong>＋</strong> button on any sound card in Today, Post Match, or Scenes to save sounds into <strong>"${board}"</strong>, then return here to export your collection.
        </p>
        <button class="sync-copy-tracklist-btn" id="sync-empty-close-btn">Return to Vault</button>
      </div>
    `;
    const emptyBtn = document.querySelector("#sync-empty-close-btn");
    if (emptyBtn) emptyBtn.addEventListener("click", closeSpotifySyncModal);
  } else {
    const primaryTrack = tracks[0];
    const spotifyIntentUrl = primaryTrack.outboundUrl || `https://open.spotify.com/search/${encodeURIComponent(primaryTrack.title + " " + primaryTrack.artist)}`;
    
    spotifySyncBody.innerHTML = `
      <div class="spotify-sync-header">
        <span class="story-label">The Vault · Playlist Exporter</span>
        <h2>Sync to <em>Spotify</em></h2>
        <p>Export your curated <strong>"${board}"</strong> board into Spotify. Copy clean metadata formatted for playlist transfer tools (Soundiiz, TuneMyMusic) or launch directly into Spotify's web player.</p>
      </div>
      <div class="sync-board-info">
        <span class="sync-board-title">Board: <strong>${board}</strong></span>
        <span class="sync-track-count">${tracks.length} ${tracks.length === 1 ? "Track" : "Tracks"}</span>
      </div>
      <div class="sync-tracklist-preview">
        ${tracks.map((t, idx) => `
          <div class="sync-track-item">
            <div>
              <span class="sync-track-name">${idx + 1}. ${t.title}</span>
              <span class="sync-track-artist"> · ${t.artist} (${t.language})</span>
            </div>
            <a class="listen-outbound" href="${t.outboundUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 10px; padding: 3px 8px;">Listen ↗</a>
          </div>
        `).join("")}
      </div>
      <div class="sync-actions-group">
        <a class="sync-spotify-primary-btn" href="${spotifyIntentUrl}" target="_blank" rel="noopener noreferrer">
          Launch Spotify Player ↗
        </a>
        <button class="sync-copy-tracklist-btn" id="sync-copy-all-btn">
          📋 Copy Formatted Tracklist for Importer
        </button>
        <p class="sync-instructions-note">
          Tip: Paste clipboard into Spotify Desktop app (Ctrl+V / Cmd+V on a new playlist) or import via Soundiiz / TuneMyMusic for instant sync.
        </p>
      </div>
    `;

    const copyBtn = document.querySelector("#sync-copy-all-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const textPayload = `# Mehfil Curated Vault Board: ${board}\n# India Sound Culture Engine\n\n` + 
          tracks.map((t, i) => `${i + 1}. ${t.title} - ${t.artist} [${t.language}]`).join("\n");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textPayload).then(() => {
            copyBtn.textContent = "✓ Tracklist Copied to Clipboard!";
            showToast(`✓ Copied ${tracks.length} tracks to clipboard! Ready to paste into Spotify or Soundiiz.`);
            setTimeout(() => {
              if (copyBtn) copyBtn.textContent = "📋 Copy Formatted Tracklist for Importer";
            }, 3000);
          }).catch(() => {
            showToast(`✓ ${tracks.length} tracks prepared for import.`);
          });
        } else {
          showToast(`✓ ${tracks.length} tracks prepared for import.`);
        }
      });
    }
  }

  spotifySyncModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSpotifySyncModal() {
  if (!spotifySyncModal) return;
  spotifySyncModal.classList.add("hidden");
  document.body.style.overflow = "";
}

if (spotifySyncClose) {
  spotifySyncClose.addEventListener("click", closeSpotifySyncModal);
}
if (spotifySyncModal) {
  spotifySyncModal.addEventListener("click", (e) => {
    if (e.target === spotifySyncModal) closeSpotifySyncModal();
  });
}

// ==========================================================================
// 20. Artist Verification & Sound Claim Modal
// ==========================================================================
const claimModal = document.querySelector("#claim-modal");
const claimClose = document.querySelector("#claim-close");
const claimForm = document.querySelector("#artist-claim-form");

function openClaimModal(sound) {
  if (!claimModal) return;
  if (sound) {
    const artistInput = document.querySelector("#claim-artist");
    const trackInput = document.querySelector("#claim-track");
    const hookInput = document.querySelector("#claim-hook");
    if (artistInput) artistInput.value = sound.artist || "";
    if (trackInput) trackInput.value = sound.title || "";
    if (hookInput) hookInput.value = sound.hook || "";
  }
  claimModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeClaimModal() {
  if (!claimModal) return;
  claimModal.classList.add("hidden");
  document.body.style.overflow = "";
}

if (claimClose) claimClose.addEventListener("click", closeClaimModal);
if (claimModal) {
  claimModal.addEventListener("click", (e) => {
    if (e.target === claimModal) closeClaimModal();
  });
}

const radarClaimOpenBtn = document.querySelector("#radar-open-claim-btn");
if (radarClaimOpenBtn) {
  radarClaimOpenBtn.addEventListener("click", () => openClaimModal());
}

if (claimForm) {
  claimForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const claim = {
      id: "claim-" + Date.now(),
      artist: (document.querySelector("#claim-artist")?.value || "").trim(),
      track: (document.querySelector("#claim-track")?.value || "").trim(),
      ig: (document.querySelector("#claim-ig")?.value || "").trim(),
      spotify: (document.querySelector("#claim-spotify")?.value || "").trim(),
      hook: (document.querySelector("#claim-hook")?.value || "").trim(),
      note: (document.querySelector("#claim-note")?.value || "").trim(),
      claimedAt: new Date().toISOString()
    };

    const existingClaims = JSON.parse(localStorage.getItem("mehfil-artist-claims") || "[]");
    existingClaims.push(claim);
    localStorage.setItem("mehfil-artist-claims", JSON.stringify(existingClaims));

    claimForm.reset();
    closeClaimModal();
    showToast(`✓ Verification submitted for "${claim.track}" by ${claim.artist}! Our cultural desk will review within 24h.`);
  });
}

// ==========================================================================
// 21. Artist Radar Intelligence Engine (Phase 3 Feature)
// ==========================================================================
class ArtistRadarEngine {
  static hashStr(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (h * 31 + str.charCodeAt(i)) & 0xffffffff;
    }
    return Math.abs(h);
  }

  static getTrackHotspots(sound) {
    const lang = (sound.language || "").toLowerCase();
    const scene = (sound.scene || "").toLowerCase();
    if (lang.includes("punjabi") || scene.includes("majha") || scene.includes("punjab")) {
      return [
        { city: "Mohali & Chandigarh Hub", share: "44%" },
        { city: "Delhi NCR University Belt", share: "32%" },
        { city: "Birmingham / UK Diaspora", share: "24%" }
      ];
    }
    if (lang.includes("malayalam") || scene.includes("kochi") || scene.includes("kerala")) {
      return [
        { city: "Kochi & Fort Kochi Cafes", share: "48%" },
        { city: "Kozhikode Beach Circuit", share: "28%" },
        { city: "Bengaluru Indiranagar Hub", share: "24%" }
      ];
    }
    if (lang.includes("tamil") || scene.includes("chennai")) {
      return [
        { city: "Chennai Besant Nagar & ECR", share: "52%" },
        { city: "Coimbatore College Circuit", share: "28%" },
        { city: "Bengaluru Koramangala Hub", share: "20%" }
      ];
    }
    if (lang.includes("bengali") || scene.includes("kolkata")) {
      return [
        { city: "Kolkata Tramway & College St", share: "50%" },
        { city: "Shantiniketan Baul Hub", share: "28%" },
        { city: "Dhaka Creative Crossover", share: "22%" }
      ];
    }
    if (lang.includes("assamese") || scene.includes("brahmaputra") || scene.includes("northeast")) {
      return [
        { city: "Guwahati & Brahmaputra Banks", share: "46%" },
        { city: "Shillong Indie Belt", share: "34%" },
        { city: "Delhi North Campus Community", share: "20%" }
      ];
    }
    if (lang.includes("kannada") || scene.includes("bengaluru")) {
      return [
        { city: "Bengaluru Church St & Indiranagar", share: "46%" },
        { city: "Mysuru Cultural District", share: "30%" },
        { city: "Manipal & Mangaluru Belt", share: "24%" }
      ];
    }
    if (lang.includes("telugu") || scene.includes("hyderabad")) {
      return [
        { city: "Hyderabad Jubilee Hills & Gachibowli", share: "50%" },
        { city: "Visakhapatnam Beach Road", share: "30%" },
        { city: "Vijayawada Creative Scene", share: "20%" }
      ];
    }
    return [
      { city: "Delhi NCR University Belt", share: "42%" },
      { city: "Mumbai Bandra & Versova Studios", share: "35%" },
      { city: "Pune Viman Nagar Campus Scene", share: "23%" }
    ];
  }

  static getTelemetry(sound) {
    const h = this.hashStr(sound.id);
    const stage = (sound.stage || "Rising").toLowerCase();

    let velocityScore = 78;
    let runwayPct = 68;
    let velocityProjection = "";
    let runwayInsight = "";

    if (stage.includes("early") || stage.includes("underground")) {
      velocityScore = 38 + (h % 15);
      runwayPct = 85 + (h % 10);
      velocityProjection = "Underground seeding phase · High organic saves from campus & indie design creators.";
      runwayInsight = "Prime adoption window. Very low risk of audience audio fatigue.";
    } else if (stage.includes("rising")) {
      velocityScore = 75 + (h % 14);
      runwayPct = 62 + (h % 14);
      velocityProjection = "Rapid week-on-week reel acceleration · Entering multi-city lifestyle and travel circles.";
      runwayInsight = "High engagement phase. Sound is scaling beyond its original regional demographic.";
    } else if (stage.includes("peaking")) {
      velocityScore = 90 + (h % 8);
      runwayPct = 28 + (h % 12);
      velocityProjection = "Peak algorithmic distribution · Dominating national FYP feeds and explore tabs.";
      runwayInsight = "Approaching saturation. Creators should execute unique twist angles only.";
    } else if (stage.includes("saturated")) {
      velocityScore = 64 + (h % 8);
      runwayPct = 12 + (h % 8);
      velocityProjection = "Algorithmic fatigue detected · Recommend pivoting to fresher Sound Twins.";
      runwayInsight = "Overused audio index. Standard reel edits experience diminished watch completion.";
    } else {
      velocityScore = 80 + (h % 9);
      runwayPct = 55 + (h % 15);
      velocityProjection = "Nostalgic second-wave resurgence · Adopted by Gen-Z aesthetic photo dumps.";
      runwayInsight = "High emotional resonance. Re-discovered catalog track with renewed streaming life.";
    }

    const archetype = audioEngine ? audioEngine.determineArchetype(sound) : "lofi";
    let att1 = 40, att2 = 30, att3 = 18, att4 = 12;
    let label1 = "Photo Dumps & Soft Launches",
        label2 = "Morning Routine & Coffee Vlogs",
        label3 = "Rain & Bedroom Window POV",
        label4 = "Slow Motion Candid Moments";

    if (archetype === "drill") {
      att1 = 45; att2 = 28; att3 = 18; att4 = 9;
      label1 = "Fast Transitions & Kinetic Cuts";
      label2 = "Car Drive & Night Motion";
      label3 = "Campus Cultural Hype";
      label4 = "Streetwear & Sneaker Dumps";
    } else if (archetype === "synthwave") {
      att1 = 40; att2 = 30; att3 = 20; att4 = 10;
      label1 = "Golden Hour & Sunset Fits";
      label2 = "Kinetic Travel & City Walks";
      label3 = "Aesthetic Café Vlogs";
      label4 = "Late-Night Reflections";
    } else if (archetype === "folk") {
      att1 = 42; att2 = 32; att3 = 16; att4 = 10;
      label1 = "Monsoon Travel & Heritage";
      label2 = "Poetry & Introspective POV";
      label3 = "Handloom & Craft Aesthetics";
      label4 = "College Farewell & Nostalgia";
    }

    let nano = 40, micro = 40, macro = 20;
    let tierInsight = "";
    if (stage.includes("early") || stage.includes("underground")) {
      nano = 68; micro = 26; macro = 6;
      tierInsight = "Nano-creators (<10k) represent 68% of creators using this sound, driving 4.5x higher comment sentiment.";
    } else if (stage.includes("rising")) {
      nano = 44; micro = 42; macro = 14;
      tierInsight = "Healthy creator pyramid: micro-influencers are scaling the sound across lifestyle and travel communities.";
    } else if (stage.includes("peaking")) {
      nano = 22; micro = 38; macro = 40;
      tierInsight = "Heavy macro-creator adoption. Over 40% of reel volume is powered by verified accounts and agency talent.";
    } else if (stage.includes("saturated")) {
      nano = 14; micro = 30; macro = 56;
      tierInsight = "Dominated by commercial brand reels and mass templates. Underground tastemakers have begun migrating.";
    } else {
      nano = 36; micro = 46; macro = 18;
      tierInsight = "Micro aesthetic curators rediscovered the hook, blending it into film-camera dumps and analog reels.";
    }

    const hotspots = this.getTrackHotspots(sound);

    return {
      velocityScore,
      runwayPct,
      velocityProjection,
      runwayInsight,
      attributions: [
        { label: label1, pct: att1 },
        { label: label2, pct: att2 },
        { label: label3, pct: att3 },
        { label: label4, pct: att4 }
      ],
      creatorTiers: { nano, micro, macro, tierInsight },
      hotspots
    };
  }
}

let activeRadarSoundId = "gal-sunja";
let activeRadarArchetype = "all";

function getFilteredRadarCatalog(archetype) {
  if (archetype === "all") return catalog;
  return catalog.filter((s) => {
    const arch = audioEngine ? audioEngine.determineArchetype(s) : "lofi";
    return arch === archetype;
  });
}

function renderArtistRadar(soundId, archetype = activeRadarArchetype) {
  const dashboard = document.querySelector("#radar-dashboard");
  const trackSelect = document.querySelector("#radar-track-select");
  if (!dashboard) return;

  activeRadarArchetype = archetype;
  const filteredCatalog = getFilteredRadarCatalog(archetype);

  // If provided soundId is not in filtered list, pick the first in the list
  let sound = filteredCatalog.find((s) => s.id === soundId);
  if (!sound) {
    sound = filteredCatalog[0] || catalog[0];
  }
  activeRadarSoundId = sound.id;

  // Populate or refresh selector dropdown
  if (trackSelect) {
    trackSelect.innerHTML = filteredCatalog
      .map(
        (s) => `<option value="${s.id}" ${s.id === sound.id ? "selected" : ""}>
          ${s.title} — ${s.artist} [${s.scene}]
        </option>`
      )
      .join("");
  }

  const telemetry = ArtistRadarEngine.getTelemetry(sound);

  dashboard.innerHTML = `
    <!-- Metric 01: Pre-Saturation Velocity & Runway -->
    <div class="radar-card" id="radar-card-velocity">
      <div class="radar-card-header">
        <div>
          <span class="radar-card-tag">SURFACE INTEL · METRIC 01</span>
          <h3>Pre-Saturation Velocity</h3>
        </div>
        <span class="velocity-stage-pill">${sound.stage}</span>
      </div>
      <div class="velocity-hero">
        <div class="velocity-circle">
          <span class="velocity-score">${telemetry.velocityScore}</span>
          <span class="velocity-unit">/ 100 IDX</span>
        </div>
        <div class="velocity-text-info">
          <p class="velocity-projection">${telemetry.velocityProjection}</p>
        </div>
      </div>
      <div class="runway-meter">
        <div class="runway-meter-label">
          <span>Creative Runway Before FYP Fatigue</span>
          <span><strong>${telemetry.runwayPct}%</strong> REMAINING</span>
        </div>
        <div class="runway-track">
          <div class="runway-fill" style="width: ${telemetry.runwayPct}%;"></div>
        </div>
        <p style="font-size: 11px; color: var(--muted); margin: 4px 0 0; line-height: 1.4;">
          ${telemetry.runwayInsight}
        </p>
      </div>
    </div>

    <!-- Metric 02: Reel Moment Attribution -->
    <div class="radar-card" id="radar-card-attribution">
      <div class="radar-card-header">
        <div>
          <span class="radar-card-tag">CREATOR FORMAT FIT · METRIC 02</span>
          <h3>Reel Moment Attribution</h3>
        </div>
        <span class="stage stage-${sound.stage.toLowerCase().replace(/\s+/g, "-")}">● ${sound.stage}</span>
      </div>
      <div class="attribution-list">
        ${telemetry.attributions
          .map(
            (item) => `
          <div class="attribution-row">
            <div class="attribution-meta">
              <span>${item.label}</span>
              <span class="attribution-pct">${item.pct}%</span>
            </div>
            <div class="attribution-bar-track">
              <div class="attribution-bar-fill" style="width: ${item.pct}%;"></div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <!-- Metric 03: Creator Tier Mix -->
    <div class="radar-card" id="radar-card-tiers">
      <div class="radar-card-header">
        <div>
          <span class="radar-card-tag">INFLUENCE SPREAD · METRIC 03</span>
          <h3>Creator Tier Adoption</h3>
        </div>
        <span class="story-label" style="margin: 0;">Scale Distribution</span>
      </div>
      <div class="creator-tiers-grid">
        <div class="tier-box">
          <span class="tier-pct">${telemetry.creatorTiers.nano}%</span>
          <span class="tier-title">Nano Creators</span>
          <span class="tier-followers">&lt; 10K FOLLOWERS</span>
        </div>
        <div class="tier-box">
          <span class="tier-pct">${telemetry.creatorTiers.micro}%</span>
          <span class="tier-title">Micro Aesthetic</span>
          <span class="tier-followers">10K — 100K</span>
        </div>
        <div class="tier-box">
          <span class="tier-pct">${telemetry.creatorTiers.macro}%</span>
          <span class="tier-title">Macro / FYP</span>
          <span class="tier-followers">&gt; 100K FOLLOWERS</span>
        </div>
      </div>
      <p class="tier-insight-note">
        "${telemetry.creatorTiers.tierInsight}"
      </p>
    </div>

    <!-- Metric 04: Regional Adoption Hotspots -->
    <div class="radar-card" id="radar-card-hotspots">
      <div class="radar-card-header">
        <div>
          <span class="radar-card-tag">GEOGRAPHIC TELEMETRY · METRIC 04</span>
          <h3>Regional Hotspots & Actions</h3>
        </div>
        <span class="story-label" style="margin: 0;">Audience Origin</span>
      </div>
      <div class="hotspots-list">
        ${telemetry.hotspots
          .map(
            (spot) => `
          <div class="hotspot-item">
            <span class="hotspot-city">📍 ${spot.city}</span>
            <span class="hotspot-share">${spot.share} Share</span>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="radar-actions-strip">
        <button id="radar-cue-action-btn">▶ Play Hook Cue</button>
        <button id="radar-story-action-btn">Full Story ↗</button>
        <a href="${sound.outboundUrl}" target="_blank" rel="noopener noreferrer">Spotify ↗</a>
        <button id="radar-claim-this-btn">✦ Claim Sound</button>
      </div>
    </div>
  `;

  // Attach card action listeners
  const cueBtn = dashboard.querySelector("#radar-cue-action-btn");
  if (cueBtn) {
    cueBtn.addEventListener("click", () => {
      toggleHookCuePlay(sound, cueBtn, dashboard.querySelector("#radar-card-hotspots"));
    });
  }

  const storyBtn = dashboard.querySelector("#radar-story-action-btn");
  if (storyBtn) {
    storyBtn.addEventListener("click", () => openSoundStory(sound));
  }

  const claimBtn = dashboard.querySelector("#radar-claim-this-btn");
  if (claimBtn) {
    claimBtn.addEventListener("click", () => openClaimModal(sound));
  }
}

function initArtistRadar() {
  const trackSelect = document.querySelector("#radar-track-select");
  if (trackSelect) {
    trackSelect.addEventListener("change", (e) => {
      renderArtistRadar(e.target.value);
    });
  }

  const chipContainer = document.querySelector("#radar-archetype-chips");
  if (chipContainer) {
    chipContainer.querySelectorAll(".radar-filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        chipContainer.querySelectorAll(".radar-filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        const archetype = chip.dataset.archetype;
        renderArtistRadar(activeRadarSoundId, archetype);
      });
    });
  }

  renderArtistRadar("gal-sunja", "all");
}

// Global escape key handler
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (typeof audioEngine !== "undefined") audioEngine.stop();
    closeSoundStory();
    closeTastePassportModal();
    closeShareBoardModal();
    closeSubmitModal();
    closeSpotifySyncModal();
    closeClaimModal();
  }
});

// Run initial setups
attachPhase2Listeners();
renderTodayFeed("vol-01");
renderMatchCards();
renderVault();
renderSceneExplorer("all");
renderRoutesSection("majha-drill");
initArtistRadar();


