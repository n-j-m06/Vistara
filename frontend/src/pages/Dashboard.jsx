import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import fluteMusic from "../assets/flute.mp3";

const states = [

  { name: "Andhra Pradesh", emoji: "🏝️", tagline: "Temples • Beaches" },
  { name: "Arunachal Pradesh", emoji: "🏔️", tagline: "Mountains • Monasteries" },
  { name: "Assam", emoji: "🍵", tagline: "Tea Gardens • Wildlife" },
  { name: "Bihar", emoji: "🛕", tagline: "Ancient Heritage • Buddhism" },
  { name: "Chhattisgarh", emoji: "🌳", tagline: "Forests • Waterfalls" },
  { name: "Goa", emoji: "🏖️", tagline: "Beaches • Nightlife" },
  { name: "Gujarat", emoji: "🦁", tagline: "White Desert • Heritage" },
  { name: "Haryana", emoji: "🌾", tagline: "Culture • Agriculture" },
  { name: "Himachal Pradesh", emoji: "❄️", tagline: "Snow • Hill Stations" },
  { name: "Jharkhand", emoji: "🌲", tagline: "Forests • Tribal Culture" },
  { name: "Karnataka", emoji: "🌿", tagline: "Nature • Technology" },
  { name: "Kerala", emoji: "🌴", tagline: "Backwaters • Ayurveda" },
  { name: "Madhya Pradesh", emoji: "🐅", tagline: "Wildlife • Temples" },
  { name: "Maharashtra", emoji: "🌆", tagline: "Mumbai • Western Ghats" },
  { name: "Manipur", emoji: "🌸", tagline: "Lakes • Culture" },
  { name: "Meghalaya", emoji: "🌧️", tagline: "Clouds • Waterfalls" },
  { name: "Mizoram", emoji: "⛰️", tagline: "Hills • Traditions" },
  { name: "Nagaland", emoji: "🪶", tagline: "Festivals • Mountains" },
  { name: "Odisha", emoji: "🛕", tagline: "Temples • Beaches" },
  { name: "Punjab", emoji: "🌾", tagline: "Culture • Food" },
  { name: "Rajasthan", emoji: "🏰", tagline: "Forts • Desert Culture" },
  { name: "Sikkim", emoji: "🏔️", tagline: "Mountains • Monasteries" },
  { name: "Tamil Nadu", emoji: "🛕", tagline: "Temples • Heritage" },
  { name: "Telangana", emoji: "💎", tagline: "History • Technology" },
  { name: "Tripura", emoji: "🌿", tagline: "Nature • Palaces" },
  { name: "Uttar Pradesh", emoji: "🕌", tagline: "Taj Mahal • Spirituality" },
  { name: "Uttarakhand", emoji: "🧘", tagline: "Yoga • Himalayas" },
  { name: "West Bengal", emoji: "🎭", tagline: "Culture • Literature" },

  // Union Territories
  { name: "Delhi", emoji: "🏛️", tagline: "Capital • Heritage" },
  { name: "Jammu & Kashmir", emoji: "🏔️", tagline: "Paradise • Valleys" },
  { name: "Ladakh", emoji: "🏍️", tagline: "Mountains • Adventure" },
  { name: "Puducherry", emoji: "🌊", tagline: "French Culture • Beaches" },
  { name: "Andaman & Nicobar", emoji: "🏝️", tagline: "Islands • Coral Reefs" },
  { name: "Lakshadweep", emoji: "🌊", tagline: "Beaches • Marine Life" },
  { name: "Chandigarh", emoji: "🏙️", tagline: "Modern Architecture" },

];

export default function Dashboard() {

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("vistaraTheme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "vistaraTheme",
      darkMode ? "dark" : "light"
    );

  }, [darkMode]);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (

    <div
      className={`relative min-h-screen overflow-hidden px-8 py-10 transition-all duration-700 ${
        darkMode
          ? "bg-[#0F172A]"
          : "bg-[#FFFDF7]"
      }`}
    >

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src={fluteMusic} type="audio/mp3" />
      </audio>

      {/* Top Buttons */}
      <div className="absolute top-6 right-6 z-50 flex gap-3">

        {/* Audio Toggle */}
        <button
          onClick={toggleMusic}
          className={`px-4 py-2 text-sm rounded-xl backdrop-blur-xl border transition-all duration-500 shadow-lg ${
            darkMode
              ? "bg-white/10 border-white/20 text-white"
              : "bg-white/70 border-white/40 text-slate-700"
          }`}
        >
          {playing
            ? "🔇 Audio Off"
            : "🎵 Audio"}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className={`px-4 py-2 text-sm rounded-xl backdrop-blur-xl border transition-all duration-500 shadow-lg ${
            darkMode
              ? "bg-white/10 border-white/20 text-white"
              : "bg-white/70 border-white/40 text-slate-700"
          }`}
        >
          {darkMode
            ? "☀ Light"
            : "🌙 Dark"}
        </button>

      </div>

      {/* Background Glow */}
      <div
        className={`absolute top-[-200px] left-[-200px] w-[500px] h-[500px] blur-3xl rounded-full ${
          darkMode
            ? "bg-orange-500/20"
            : "bg-orange-200/40"
        }`}
      />

      <div
        className={`absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] blur-3xl rounded-full ${
          darkMode
            ? "bg-emerald-500/20"
            : "bg-emerald-200/40"
        }`}
      />

      {/* Falling Leaves */}
      {[...Array(30)].map((_, i) => (

        <motion.div
          key={i}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: -200,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: "120vh",
            opacity: [0, 0.2, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          className="absolute text-3xl"
        >
          🍃
        </motion.div>

      ))}

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">

        <div>

          <h1
            className={`text-7xl font-black ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            VISTARA
          </h1>

          <p
            className={`mt-3 text-xl ${
              darkMode
                ? "text-slate-300"
                : "text-slate-600"
            }`}
          >
            Explore India State by State
          </p>

        </div>

        <div
          className={`px-6 py-3 rounded-2xl backdrop-blur-xl border shadow-lg ${
            darkMode
              ? "bg-white/10 border-white/10 text-white"
              : "bg-white/70 border-white/40 text-slate-800"
          }`}
        >
          🇮🇳 Incredible India
        </div>

      </div>

      {/* Hero */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 mt-16 text-center"
      >

        <h2
          className={`text-6xl font-black leading-tight ${
            darkMode
              ? "text-white"
              : "text-slate-900"
          }`}
        >

          Discover The
          <span className="block bg-gradient-to-r from-orange-500 to-emerald-500 bg-clip-text text-transparent">
            Soul of India
          </span>

        </h2>

        <p
          className={`mt-6 text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode
              ? "text-slate-300"
              : "text-slate-600"
          }`}
        >
          Explore heritage, spirituality, nature,
          beaches, forts, cuisine, and unforgettable
          experiences across India.
        </p>

      </motion.div>

      {/* State Cards */}
      <div className="relative z-10 mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {states.map((state, index) => (

          <motion.div
            key={state.name}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className={`group relative overflow-hidden rounded-[35px] backdrop-blur-2xl border shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 cursor-pointer transition-all duration-500 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/50 border-white/40"
            }`}
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-200/30 to-emerald-200/30" />

            <div className="relative z-10">

              <div className="text-6xl">
                {state.emoji}
              </div>

              <h3
                className={`mt-6 text-3xl font-black ${
                  darkMode
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                {state.name}
              </h3>

              <p
                className={`mt-4 leading-relaxed ${
                  darkMode
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                {state.tagline}
              </p>

              <button className="mt-8 px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-emerald-500 text-white font-semibold shadow-lg">
                Explore
              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  );
}