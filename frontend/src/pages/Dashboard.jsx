import { motion } from "framer-motion";

import {
  useNavigate,
} from "react-router-dom";

import {
  useRef,
  useState,
  useEffect,
} from "react";

import fluteMusic from "../assets/flute.mp3";

export default function Dashboard() {

  const navigate = useNavigate();

  const audioRef = useRef(null);

  const [playing, setPlaying] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  useEffect(() => {

    const savedTheme =
      localStorage.getItem(
        "vistaraTheme"
      );

    if (savedTheme === "light") {

      setDarkMode(false);

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "vistaraTheme",
      darkMode
        ? "dark"
        : "light"
    );

  }, [darkMode]);

  useEffect(() => {

    const musicState =
      localStorage.getItem(
        "vistaraMusic"
      );

    if (
      musicState === "on" &&
      audioRef.current
    ) {

      audioRef.current.play();

      setPlaying(true);

    }

  }, []);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (playing) {

      audioRef.current.pause();

      localStorage.setItem(
        "vistaraMusic",
        "off"
      );

    } else {

      audioRef.current.play();

      localStorage.setItem(
        "vistaraMusic",
        "on"
      );

    }

    setPlaying(!playing);
  };

  const states = [

    {
      name: "Andhra Pradesh",
      emoji: "🏝️",
      tagline: "Temples • Beaches",
      category: "Spiritual",
    },

    {
      name: "Arunachal Pradesh",
      emoji: "🏔️",
      tagline:
        "Mountains • Monasteries",
      category: "Adventure",
    },

    {
      name: "Assam",
      emoji: "🍵",
      tagline:
        "Tea Gardens • Wildlife",
      category: "Nature",
    },

    {
      name: "Bihar",
      emoji: "🛕",
      tagline:
        "Ancient Heritage • Buddhism",
      category: "Heritage",
    },

    {
      name: "Chhattisgarh",
      emoji: "🌳",
      tagline:
        "Forests • Waterfalls",
      category: "Nature",
    },

    {
      name: "Goa",
      emoji: "🏖️",
      tagline:
        "Beaches • Nightlife",
      category: "Adventure",
    },

    {
      name: "Gujarat",
      emoji: "🦁",
      tagline:
        "White Desert • Heritage",
      category: "Heritage",
    },

    {
      name: "Haryana",
      emoji: "🌾",
      tagline:
        "Culture • Agriculture",
      category: "Heritage",
    },

    {
      name: "Himachal Pradesh",
      emoji: "❄️",
      tagline:
        "Snow • Hill Stations",
      category: "Adventure",
    },

    {
      name: "Jharkhand",
      emoji: "🌲",
      tagline:
        "Forests • Tribal Culture",
      category: "Nature",
    },

    {
      name: "Karnataka",
      emoji: "🌿",
      tagline:
        "Nature • Technology",
      category: "Nature",
    },

    {
      name: "Kerala",
      emoji: "🌴",
      tagline:
        "Backwaters • Ayurveda",
      category: "Nature",
    },

    {
      name: "Madhya Pradesh",
      emoji: "🐅",
      tagline:
        "Wildlife • Temples",
      category: "Heritage",
    },

    {
      name: "Maharashtra",
      emoji: "🌆",
      tagline:
        "Mumbai • Western Ghats",
      category: "Heritage",
    },

    {
      name: "Manipur",
      emoji: "🌸",
      tagline:
        "Lakes • Culture",
      category: "Nature",
    },

    {
      name: "Meghalaya",
      emoji: "🌧️",
      tagline:
        "Clouds • Waterfalls",
      category: "Nature",
    },

    {
      name: "Mizoram",
      emoji: "⛰️",
      tagline:
        "Hills • Traditions",
      category: "Nature",
    },

    {
      name: "Nagaland",
      emoji: "🪶",
      tagline:
        "Festivals • Mountains",
      category: "Adventure",
    },

    {
      name: "Odisha",
      emoji: "🛕",
      tagline:
        "Temples • Beaches",
      category: "Spiritual",
    },

    {
      name: "Punjab",
      emoji: "🌾",
      tagline:
        "Culture • Food",
      category: "Heritage",
    },

    {
      name: "Rajasthan",
      emoji: "🏰",
      tagline:
        "Forts • Desert Culture",
      category: "Heritage",
    },

    {
      name: "Sikkim",
      emoji: "🏔️",
      tagline:
        "Mountains • Monasteries",
      category: "Adventure",
    },

    {
      name: "Tamil Nadu",
      emoji: "🛕",
      tagline:
        "Temples • Heritage",
      category: "Spiritual",
    },

    {
      name: "Telangana",
      emoji: "💎",
      tagline:
        "History • Technology",
      category: "Heritage",
    },

    {
      name: "Tripura",
      emoji: "🌿",
      tagline:
        "Nature • Palaces",
      category: "Nature",
    },

    {
      name: "Uttar Pradesh",
      emoji: "🕌",
      tagline:
        "Taj Mahal • Spirituality",
      category: "Spiritual",
    },

    {
      name: "Uttarakhand",
      emoji: "🧘",
      tagline:
        "Yoga • Himalayas",
      category: "Spiritual",
    },

    {
      name: "West Bengal",
      emoji: "🎭",
      tagline:
        "Culture • Literature",
      category: "Heritage",
    },

    {
      name: "Delhi",
      emoji: "🏛️",
      tagline:
        "Capital • Heritage",
      category: "Heritage",
    },

    {
      name: "Jammu & Kashmir",
      emoji: "🏔️",
      tagline:
        "Paradise • Valleys",
      category: "Nature",
    },

    {
      name: "Ladakh",
      emoji: "🏍️",
      tagline:
        "Mountains • Adventure",
      category: "Adventure",
    },

    {
      name: "Puducherry",
      emoji: "🌊",
      tagline:
        "French Culture • Beaches",
      category: "Heritage",
    },

    {
      name: "Andaman & Nicobar",
      emoji: "🏝️",
      tagline:
        "Islands • Coral Reefs",
      category: "Adventure",
    },

    {
      name: "Lakshadweep",
      emoji: "🌊",
      tagline:
        "Beaches • Marine Life",
      category: "Adventure",
    },

    {
      name: "Chandigarh",
      emoji: "🏙️",
      tagline:
        "Modern Architecture",
      category: "Heritage",
    },

  ];

  const filteredStates =
    states.filter((state) => {

      const matchesSearch =

        state.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||

        state.tagline
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =

        activeCategory === "All" ||

        state.category ===
          activeCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (

    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-[#020B2D]"
          : "bg-[#FFFDF7]"
      }`}
    >

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source
          src={fluteMusic}
          type="audio/mp3"
        />
      </audio>

      {/* Floating Leaves */}
      {[...Array(25)].map((_, index) => (

        <motion.div
          key={index}
          initial={{
            y: -100,
            x:
              Math.random() *
              window.innerWidth,
            rotate: 0,
          }}
          animate={{
            y: "120vh",
            x: [
              Math.random() *
                window.innerWidth,

              Math.random() *
                window.innerWidth,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration:
              12 +
              Math.random() * 10,
            repeat: Infinity,
            delay:
              Math.random() * 10,
            ease: "linear",
          }}
          className="absolute text-3xl opacity-20"
        >
          🍃
        </motion.div>

      ))}

      {/* Top Buttons */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">

        <button
  onClick={() =>
    navigate("/admin")
  }
  className={`px-4 py-2 text-sm rounded-xl backdrop-blur-xl border shadow-lg transition-all duration-500 ${
    darkMode
      ? "bg-emerald-500/20 border-emerald-400/20 text-white"
      : "bg-emerald-100 border-emerald-200 text-emerald-700"
  }`}
>
  Admin
</button>

        <button
          onClick={toggleMusic}
          className={`px-4 py-2 text-sm rounded-xl backdrop-blur-xl border shadow-lg transition-all duration-500 ${
            darkMode
              ? "bg-white/10 border-white/10 text-white"
              : "bg-white/70 border-white/40 text-slate-700"
          }`}
        >
          {playing
            ? "Mute"
            : "Audio"}
        </button>

        <button
          onClick={() =>
            setDarkMode(
              !darkMode
            )
          }
          className={`px-4 py-2 text-sm rounded-xl backdrop-blur-xl border shadow-lg transition-all duration-500 ${
            darkMode
              ? "bg-white/10 border-white/10 text-white"
              : "bg-white/70 border-white/40 text-slate-700"
          }`}
        >
          {darkMode
            ? "☀ Light"
            : "🌙 Dark"}
        </button>

        <button
          onClick={() =>
            navigate("/")
          }
          className={`px-4 py-2 text-sm rounded-xl backdrop-blur-xl border shadow-lg transition-all duration-500 ${
            darkMode
              ? "bg-red-500/20 border-red-400/20 text-white"
              : "bg-red-100 border-red-200 text-red-600"
          }`}
        >
          Logout
        </button>

      </div>

      {/* Heading */}
      <div className="relative z-10 text-center pt-24 px-6">

        <motion.h1
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className={`text-6xl md:text-7xl font-black ${
            darkMode
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          Explore India 🇮🇳
        </motion.h1>

        <p
          className={`mt-5 text-xl ${
            darkMode
              ? "text-slate-300"
              : "text-slate-600"
          }`}
        >
          Discover culture,
          heritage, nature,
          spirituality & adventure
        </p>

      </div>

      {/* Search + Filters */}
      <div className="relative z-10 mt-16 px-6 flex flex-col lg:flex-row gap-5 items-center justify-between max-w-7xl mx-auto">

        {/* Search */}
        <input
          type="text"
          placeholder="Search states, destinations, vibes..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className={`w-full lg:w-[450px] px-6 py-4 rounded-2xl outline-none backdrop-blur-xl border shadow-lg ${
            darkMode
              ? "bg-white/10 border-white/10 text-white placeholder:text-slate-300"
              : "bg-white/70 border-white/40 text-slate-700 placeholder:text-slate-500"
          }`}
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-3">

          {[
            "All",
            "Nature",
            "Heritage",
            "Spiritual",
            "Adventure",
          ].map((category) => (

            <button
              key={category}
              onClick={() =>
                setActiveCategory(
                  category
                )
              }
              className={`px-5 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory ===
                category

                  ? "bg-gradient-to-r from-orange-500 to-emerald-500 text-white shadow-lg"

                  : darkMode

                  ? "bg-white/10 text-white border border-white/10"

                  : "bg-white/70 text-slate-700 border border-white/40"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </div>

      {/* Cards */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-16 max-w-7xl mx-auto">

        {filteredStates.map(
          (state, index) => (

            <motion.div
              key={state.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay:
                  index * 0.05,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`rounded-[36px] p-10 backdrop-blur-xl border shadow-xl transition-all duration-500 ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white/60 border-white/30"
              }`}
            >

              <div className="text-6xl">
                {state.emoji}
              </div>

              <h2
                className={`mt-8 text-4xl font-black ${
                  darkMode
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                {state.name}
              </h2>

              <p
                className={`mt-4 text-lg ${
                  darkMode
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                {state.tagline}
              </p>

              <button
                onClick={() =>
                  navigate(
                    `/state/${state.name
                      .toLowerCase()
                      .replace(
                        /\s/g,
                        ""
                      )
                      .replace(
                        /&/g,
                        ""
                      )}`
                  )
                }
                className="mt-8 px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-emerald-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore
              </button>

            </motion.div>

          )
        )}

      </div>

    </div>
  );
}