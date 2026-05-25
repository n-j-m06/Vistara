const statesData = {

  andhrapradesh: {
    name: "Andhra Pradesh",
    hero: "Land of Temples & Coastlines",
    emoji: "🏝️",
    description:
      "Andhra Pradesh is known for its beautiful temples, long coastline, spicy cuisine, and cultural richness.",
    bestTime: "October to March",
    famousPlaces: [
      "Visakhapatnam",
      "Tirupati",
      "Araku Valley",
      "Vijayawada",
    ],
    food: [
      "Andhra Meals",
      "Pulihora",
      "Gongura",
    ],
    culture:
      "Classical dance, temple architecture, spiritual traditions",
    gradient: "from-sky-500 to-blue-700",
    officialLink:
      "https://tourism.ap.gov.in/",
  },

  arunachalpradesh: {
    name: "Arunachal Pradesh",
    hero: "The Land of Dawn-Lit Mountains",
    emoji: "🏔️",
    description:
      "Arunachal Pradesh offers stunning mountains, monasteries, rivers, and untouched natural beauty.",
    bestTime: "October to April",
    famousPlaces: [
      "Tawang",
      "Ziro Valley",
      "Bomdila",
    ],
    food: [
      "Thukpa",
      "Momos",
      "Rice Beer",
    ],
    culture:
      "Buddhist monasteries and tribal traditions",
    gradient: "from-cyan-500 to-sky-700",
    officialLink:
      "https://arunachaltourism.com/",
  },

  assam: {
    name: "Assam",
    hero: "Tea Gardens & Wildlife",
    emoji: "🍵",
    description:
      "Assam is famous for tea estates, wildlife sanctuaries, and the mighty Brahmaputra river.",
    bestTime: "October to April",
    famousPlaces: [
      "Kaziranga",
      "Majuli",
      "Guwahati",
    ],
    food: [
      "Assam Tea",
      "Masor Tenga",
      "Pitha",
    ],
    culture:
      "Bihu dance and vibrant Assamese traditions",
    gradient: "from-green-500 to-emerald-700",
    officialLink:
      "https://tourism.assam.gov.in/",
  },

  bihar: {
    name: "Bihar",
    hero: "Ancient Spiritual Heritage",
    emoji: "🛕",
    description:
      "Bihar is home to ancient universities, Buddhist pilgrimage sites, and rich historical heritage.",
    bestTime: "October to March",
    famousPlaces: [
      "Bodh Gaya",
      "Nalanda",
      "Rajgir",
    ],
    food: [
      "Litti Chokha",
      "Thekua",
    ],
    culture:
      "Buddhist history and ancient Indian civilization",
    gradient: "from-yellow-500 to-orange-600",
    officialLink:
      "https://tourism.bihar.gov.in/",
  },

  chhattisgarh: {
    name: "Chhattisgarh",
    hero: "Forests & Waterfalls",
    emoji: "🌳",
    description:
      "Chhattisgarh is filled with dense forests, waterfalls, caves, and tribal heritage.",
    bestTime: "October to February",
    famousPlaces: [
      "Chitrakote Falls",
      "Bastar",
    ],
    food: [
      "Chila",
      "Faraa",
    ],
    culture:
      "Tribal festivals and folk traditions",
    gradient: "from-lime-500 to-green-700",
    officialLink:
      "https://tourism.cgstate.gov.in/",
  },

  goa: {
    name: "Goa",
    hero: "Beach Paradise",
    emoji: "🏖️",
    description:
      "Goa offers beaches, nightlife, Portuguese heritage, and vibrant tourism experiences.",
    bestTime: "November to February",
    famousPlaces: [
      "Baga",
      "Calangute",
      "Panaji",
    ],
    food: [
      "Fish Curry",
      "Bebinca",
    ],
    culture:
      "Portuguese architecture and beach festivals",
    gradient: "from-sky-500 to-cyan-700",
    officialLink:
      "https://www.goatourism.gov.in/",
  },

  gujarat: {
    name: "Gujarat",
    hero: "Land of Lions & Heritage",
    emoji: "🦁",
    description:
      "Gujarat blends wildlife, white deserts, temples, and vibrant culture.",
    bestTime: "November to February",
    famousPlaces: [
      "Gir",
      "Kutch",
      "Somnath",
    ],
    food: [
      "Dhokla",
      "Undhiyu",
    ],
    culture:
      "Garba dance and colorful traditions",
    gradient: "from-orange-500 to-red-700",
    officialLink:
      "https://www.gujarattourism.com/",
  },

  haryana: {
    name: "Haryana",
    hero: "Tradition & Agriculture",
    emoji: "🌾",
    description:
      "Haryana is known for agriculture, history, and rich North Indian traditions.",
    bestTime: "October to March",
    famousPlaces: [
      "Kurukshetra",
      "Sultanpur Bird Sanctuary",
    ],
    food: [
      "Bajra Roti",
      "Kadhi",
    ],
    culture:
      "Folk music and rural heritage",
    gradient: "from-amber-500 to-yellow-700",
    officialLink:
      "https://haryanatourism.gov.in/",
  },

  himachalpradesh: {
    name: "Himachal Pradesh",
    hero: "Himalayan Escape",
    emoji: "❄️",
    description:
      "Himachal Pradesh is famous for snowy mountains, hill stations, and adventure tourism.",
    bestTime: "March to June",
    famousPlaces: [
      "Manali",
      "Shimla",
      "Kasol",
    ],
    food: [
      "Siddu",
      "Madra",
    ],
    culture:
      "Mountain traditions and Tibetan influence",
    gradient: "from-blue-500 to-indigo-700",
    officialLink:
      "https://himachaltourism.gov.in/",
  },

  jharkhand: {
    name: "Jharkhand",
    hero: "Forests & Tribal Beauty",
    emoji: "🌲",
    description:
      "Jharkhand is rich in forests, waterfalls, minerals, and tribal culture.",
    bestTime: "October to March",
    famousPlaces: [
      "Ranchi",
      "Netarhat",
    ],
    food: [
      "Dhuska",
      "Rugra",
    ],
    culture:
      "Tribal art and natural landscapes",
    gradient: "from-green-500 to-teal-700",
    officialLink:
      "https://tourism.jharkhand.gov.in/",
  },

  karnataka: {
    name: "Karnataka",
    hero: "Technology Meets Nature",
    emoji: "🌿",
    description:
      "Karnataka combines modern cities, heritage architecture, coffee plantations, and beaches.",
    bestTime: "October to March",
    famousPlaces: [
      "Bangalore",
      "Mysore",
      "Coorg",
      "Hampi",
    ],
    food: [
      "Bisi Bele Bath",
      "Mysore Pak",
    ],
    culture:
      "Carnatic music and royal heritage",
    gradient: "from-emerald-500 to-green-800",
    officialLink:
      "https://www.karnatakatourism.org/",
  },

  kerala: {
    name: "Kerala",
    hero: "God's Own Country",
    emoji: "🌴",
    description:
      "Kerala is renowned for backwaters, ayurveda, beaches, greenery, and cultural richness.",
    bestTime: "September to March",
    famousPlaces: [
      "Munnar",
      "Alleppey",
      "Wayanad",
      "Kochi",
    ],
    food: [
      "Appam",
      "Puttu",
      "Kerala Sadya",
    ],
    culture:
      "Kathakali, Ayurveda, temple festivals",
    gradient: "from-emerald-500 to-green-700",
    officialLink:
      "https://www.keralatourism.org/",
  },

  madhyapradesh: {
    name: "Madhya Pradesh",
    hero: "Heart of Incredible India",
    emoji: "🐅",
    description:
      "Madhya Pradesh is famous for wildlife reserves, temples, and historical monuments.",
    bestTime: "October to March",
    famousPlaces: [
      "Khajuraho",
      "Bandhavgarh",
      "Sanchi",
    ],
    food: [
      "Poha",
      "Bhutte Ka Kees",
    ],
    culture:
      "Ancient temples and tribal traditions",
    gradient: "from-orange-500 to-yellow-700",
    officialLink:
      "https://www.mptourism.com/",
  },

  maharashtra: {
    name: "Maharashtra",
    hero: "Gateway to Dreams",
    emoji: "🌆",
    description:
      "Maharashtra offers bustling cities, forts, beaches, and Western Ghats.",
    bestTime: "October to February",
    famousPlaces: [
      "Mumbai",
      "Lonavala",
      "Ajanta Ellora",
    ],
    food: [
      "Vada Pav",
      "Puran Poli",
    ],
    culture:
      "Bollywood and Maratha heritage",
    gradient: "from-purple-500 to-pink-700",
    officialLink:
      "https://www.maharashtratourism.gov.in/",
  },

  tamilnadu: {
    name: "Tamil Nadu",
    hero: "Land of Temples",
    emoji: "🛕",
    description:
      "Tamil Nadu is known for Dravidian temples, beaches, and classical arts.",
    bestTime: "October to March",
    famousPlaces: [
      "Chennai",
      "Madurai",
      "Ooty",
      "Kanyakumari",
    ],
    food: [
      "Dosa",
      "Idli",
      "Pongal",
    ],
    culture:
      "Bharatanatyam and Carnatic music",
    gradient: "from-orange-500 to-red-700",
    officialLink:
      "https://www.tamilnadutourism.tn.gov.in/",
  },

  telangana: {
    name: "Telangana",
    hero: "History Meets Innovation",
    emoji: "💎",
    description:
      "Telangana blends historical monuments with modern technology and culture.",
    bestTime: "October to February",
    famousPlaces: [
      "Hyderabad",
      "Warangal",
    ],
    food: [
      "Hyderabadi Biryani",
      "Haleem",
    ],
    culture:
      "Nizami heritage and Deccan traditions",
    gradient: "from-violet-500 to-purple-700",
    officialLink:
      "https://tourism.telangana.gov.in/",
  },

  westbengal: {
    name: "West Bengal",
    hero: "Culture & Literature",
    emoji: "🎭",
    description:
      "West Bengal is known for literature, art, sweets, and colonial architecture.",
    bestTime: "October to March",
    famousPlaces: [
      "Kolkata",
      "Darjeeling",
      "Sundarbans",
    ],
    food: [
      "Rasgulla",
      "Macher Jhol",
    ],
    culture:
      "Durga Puja and Bengali literature",
    gradient: "from-red-500 to-pink-700",
    officialLink:
      "https://wbtourism.gov.in/",
  },

  manipur: {
  name: "Manipur",
  hero: "Jewel of Northeast India",
  emoji: "🌸",
  description:
    "Manipur is known for its scenic lakes, lush hills, rich traditions, and vibrant dance culture.",
  bestTime: "October to March",
  famousPlaces: [
    "Loktak Lake",
    "Imphal",
    "Ukhrul",
  ],
  food: [
    "Eromba",
    "Chamthong",
    "Nga Thongba",
  ],
  culture:
    "Manipuri dance, handloom traditions, and tribal heritage",
  gradient: "from-pink-500 to-rose-700",
  officialLink:
    "https://manipurtourism.gov.in/",
},

meghalaya: {
  name: "Meghalaya",
  hero: "Abode of Clouds",
  emoji: "🌧️",
  description:
    "Meghalaya is famous for waterfalls, living root bridges, caves, and misty landscapes.",
  bestTime: "October to April",
  famousPlaces: [
    "Shillong",
    "Cherrapunji",
    "Dawki",
  ],
  food: [
    "Jadoh",
    "Tungrymbai",
  ],
  culture:
    "Khasi traditions, music culture, and nature festivals",
  gradient: "from-cyan-500 to-blue-700",
  officialLink:
    "https://www.meghalayatourism.in/",
},

mizoram: {
  name: "Mizoram",
  hero: "Land of Rolling Hills",
  emoji: "⛰️",
  description:
    "Mizoram offers peaceful landscapes, hills, tribal traditions, and scenic beauty.",
  bestTime: "October to March",
  famousPlaces: [
    "Aizawl",
    "Reiek",
    "Vantawng Falls",
  ],
  food: [
    "Bai",
    "Sawhchiar",
  ],
  culture:
    "Mizo festivals, bamboo dance, and tribal customs",
  gradient: "from-green-500 to-teal-700",
  officialLink:
    "https://tourism.mizoram.gov.in/",
},

nagaland: {
  name: "Nagaland",
  hero: "Land of Festivals",
  emoji: "🪶",
  description:
    "Nagaland is known for mountains, tribal heritage, and colorful festivals.",
  bestTime: "October to May",
  famousPlaces: [
    "Kohima",
    "Dimapur",
    "Dzukou Valley",
  ],
  food: [
    "Smoked Pork",
    "Axone",
  ],
  culture:
    "Hornbill Festival and tribal traditions",
  gradient: "from-orange-500 to-red-700",
  officialLink:
    "https://tourism.nagaland.gov.in/",
},

odisha: {
  name: "Odisha",
  hero: "Soul of Incredible India",
  emoji: "🛕",
  description:
    "Odisha is famous for temples, beaches, tribal culture, and classical dance.",
  bestTime: "October to February",
  famousPlaces: [
    "Puri",
    "Konark",
    "Bhubaneswar",
  ],
  food: [
    "Dalma",
    "Rasgulla",
  ],
  culture:
    "Odissi dance, Jagannath culture, and temple heritage",
  gradient: "from-yellow-500 to-orange-700",
  officialLink:
    "https://odishatourism.gov.in/",
},

punjab: {
  name: "Punjab",
  hero: "Land of Five Rivers",
  emoji: "🌾",
  description:
    "Punjab is known for its vibrant culture, food, agriculture, and spirituality.",
  bestTime: "October to March",
  famousPlaces: [
    "Amritsar",
    "Golden Temple",
    "Wagah Border",
  ],
  food: [
    "Butter Chicken",
    "Sarson da Saag",
    "Lassi",
  ],
  culture:
    "Bhangra, Sikh heritage, and Punjabi traditions",
  gradient: "from-amber-500 to-yellow-700",
  officialLink:
    "https://punjabtourism.punjab.gov.in/",
},

rajasthan: {
  name: "Rajasthan",
  hero: "Land of Kings",
  emoji: "🏰",
  description:
    "Rajasthan is famous for majestic forts, palaces, deserts, and royal heritage.",
  bestTime: "October to March",
  famousPlaces: [
    "Jaipur",
    "Udaipur",
    "Jaisalmer",
    "Jodhpur",
  ],
  food: [
    "Dal Baati Churma",
    "Gatte Ki Sabzi",
  ],
  culture:
    "Rajput heritage, folk dance, and desert festivals",
  gradient: "from-orange-500 to-red-700",
  officialLink:
    "https://www.tourism.rajasthan.gov.in/",
},

sikkim: {
  name: "Sikkim",
  hero: "Himalayan Paradise",
  emoji: "🏔️",
  description:
    "Sikkim is known for snow-covered mountains, monasteries, and serene beauty.",
  bestTime: "March to June",
  famousPlaces: [
    "Gangtok",
    "Tsomgo Lake",
    "Nathula Pass",
  ],
  food: [
    "Momos",
    "Thukpa",
  ],
  culture:
    "Buddhist monasteries and Himalayan traditions",
  gradient: "from-sky-500 to-indigo-700",
 officialLink:
"https://www.holidify.com/state/sikkim/",
},

tripura: {
  name: "Tripura",
  hero: "Hidden Gem of Northeast",
  emoji: "🌿",
  description:
    "Tripura offers palaces, lakes, temples, and lush greenery.",
  bestTime: "October to March",
  famousPlaces: [
    "Agartala",
    "Neermahal",
    "Ujjayanta Palace",
  ],
  food: [
    "Mui Borok",
    "Mosdeng Serma",
  ],
  culture:
    "Bamboo crafts and tribal traditions",
  gradient: "from-emerald-500 to-green-700",
  officialLink:
    "https://tripuratourism.gov.in/",
},

uttarpradesh: {
  name: "Uttar Pradesh",
  hero: "Heart of Indian Spirituality",
  emoji: "🕌",
  description:
    "Uttar Pradesh is home to the Taj Mahal, holy cities, and Mughal heritage.",
  bestTime: "October to March",
  famousPlaces: [
    "Agra",
    "Varanasi",
    "Lucknow",
  ],
  food: [
    "Tunday Kabab",
    "Petha",
  ],
  culture:
    "Mughal architecture and spiritual traditions",
  gradient: "from-red-500 to-orange-700",
  officialLink:
    "https://uptourism.gov.in/",
},

uttarakhand: {
  name: "Uttarakhand",
  hero: "Land of Gods",
  emoji: "🧘",
  description:
    "Uttarakhand is famous for Himalayan beauty, yoga, and spiritual destinations.",
  bestTime: "March to June",
  famousPlaces: [
    "Rishikesh",
    "Nainital",
    "Mussoorie",
  ],
  food: [
    "Kafuli",
    "Aloo Ke Gutke",
  ],
  culture:
    "Yoga, spirituality, and mountain traditions",
  gradient: "from-cyan-500 to-blue-700",
  officialLink:
    "https://uttarakhandtourism.gov.in/",
},

delhi: {
  name: "Delhi",
  hero: "Capital of India",
  emoji: "🏛️",
  description:
    "Delhi blends Mughal history, modern culture, street food, and iconic monuments.",
  bestTime: "October to March",
  famousPlaces: [
    "India Gate",
    "Red Fort",
    "Qutub Minar",
  ],
  food: [
    "Chole Bhature",
    "Paratha",
  ],
  culture:
    "Mughal heritage and modern cosmopolitan culture",
  gradient: "from-slate-500 to-gray-700",
  officialLink:
    "https://delhitourism.gov.in/",
},

jammukashmir: {
  name: "Jammu & Kashmir",
  hero: "Paradise on Earth",
  emoji: "🏔️",
  description:
    "Jammu & Kashmir is famous for valleys, snow mountains, lakes, and breathtaking beauty.",
  bestTime: "March to October",
  famousPlaces: [
    "Srinagar",
    "Gulmarg",
    "Pahalgam",
  ],
  food: [
    "Rogan Josh",
    "Kahwa",
  ],
  culture:
    "Kashmiri handicrafts and Himalayan traditions",
  gradient: "from-sky-500 to-blue-800",
  officialLink:
    "https://www.jktdc.co.in/",
},

ladakh: {
  name: "Ladakh",
  hero: "Land of High Passes",
  emoji: "🏍️",
  description:
    "Ladakh is known for adventure tourism, monasteries, and breathtaking landscapes.",
  bestTime: "May to September",
  famousPlaces: [
    "Leh",
    "Pangong Lake",
    "Nubra Valley",
  ],
  food: [
    "Thukpa",
    "Butter Tea",
  ],
  culture:
    "Buddhist monasteries and mountain life",
  gradient: "from-amber-500 to-orange-700",
  officialLink:
"https://tourism.ladakh.gov.in/",
},

puducherry: {
  name: "Puducherry",
  hero: "French Riviera of the East",
  emoji: "🌊",
  description:
    "Puducherry blends French architecture, beaches, spirituality, and cafes.",
  bestTime: "October to March",
  famousPlaces: [
    "Auroville",
    "Promenade Beach",
    "White Town",
  ],
  food: [
    "French Cuisine",
    "Seafood",
  ],
  culture:
    "French colonial heritage and spiritual retreats",
  gradient: "from-cyan-500 to-sky-700",
  officialLink:
"https://www.py.gov.in/tourism",
},

andamannicobar: {
  name: "Andaman & Nicobar Islands",
  hero: "Tropical Island Paradise",
  emoji: "🏝️",
  description:
    "The islands are known for crystal-clear waters, coral reefs, and marine life.",
  bestTime: "October to May",
  famousPlaces: [
    "Havelock Island",
    "Cellular Jail",
    "Neil Island",
  ],
  food: [
    "Seafood",
    "Coconut Cuisine",
  ],
  culture:
    "Island traditions and marine lifestyle",
  gradient: "from-sky-500 to-cyan-700",
 officialLink:
"https://www.holidify.com/places/andaman-nicobar-islands/",
},

lakshadweep: {
  name: "Lakshadweep",
  hero: "Coral Paradise",
  emoji: "🌊",
  description:
    "Lakshadweep is famous for coral reefs, lagoons, and untouched beaches.",
  bestTime: "October to May",
  famousPlaces: [
    "Agatti",
    "Bangaram",
    "Kavaratti",
  ],
  food: [
    "Seafood",
    "Coconut-based Cuisine",
  ],
  culture:
    "Island traditions and marine culture",
  gradient: "from-cyan-500 to-blue-700",
  officialLink:
    "https://samudram.utl.gov.in/",
},

chandigarh: {
  name: "Chandigarh",
  hero: "The City Beautiful",
  emoji: "🏙️",
  description:
    "Chandigarh is known for modern architecture, gardens, and urban planning.",
  bestTime: "October to March",
  famousPlaces: [
    "Rock Garden",
    "Sukhna Lake",
    "Rose Garden",
  ],
  food: [
    "Chole Kulche",
    "Lassi",
  ],
  culture:
    "Modern urban culture and Punjabi influence",
  gradient: "from-slate-500 to-zinc-700",
  officialLink:
"https://chandigarhtourism.gov.in/",
},

};

export default statesData;