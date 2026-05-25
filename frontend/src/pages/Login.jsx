import { motion } from "framer-motion";
import { useRef, useState } from "react";
import fluteMusic from "../assets/flute.mp3";

export default function Login() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

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
    <div className="relative min-h-screen overflow-hidden bg-[#FFFDF7]">

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src={fluteMusic} type="audio/mp3" />
      </audio>

      {/* Luxury Saffron Ribbon */}
      <motion.div
        animate={{
          x: [-120, 120, -120],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-15%] left-[-10%] w-[140%] h-[250px] rounded-full blur-3xl bg-orange-300/40"
      />

      {/* Ivory Ribbon */}
      <motion.div
        animate={{
          x: [100, -100, 100],
          rotate: [1, -1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] left-[-10%] w-[140%] h-[250px] rounded-full blur-3xl bg-white/80"
      />

      {/* Emerald Ribbon */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[140%] h-[250px] rounded-full blur-3xl bg-emerald-300/40"
      />

      {/* Golden Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-yellow-300 blur-[140px]" />
      </motion.div>

      {/* Decorative Gold Circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[-200px] top-[-200px] w-[500px] h-[500px] border border-yellow-400/20 rounded-full"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[-250px] bottom-[-250px] w-[600px] h-[600px] border border-emerald-400/20 rounded-full"
      />

      {/* Natural Falling Leaves */}

{[...Array(8)].map((_, index) => {
  const startX = Math.random() * 1200;

  return (
    <motion.div
      key={index}
      initial={{
        x: startX,
        y: -150,
        rotate: Math.random() * 360,
      }}
      animate={{
        y: ["-10vh", "120vh"],
        x: [
          startX,
          startX + 40,
          startX - 30,
          startX + 50,
          startX,
        ],
        rotate: [
          0,
          45,
          -45,
          20,
          0,
        ],
      }}
      transition={{
        duration: 18 + Math.random() * 8,
        repeat: Infinity,
        ease: "linear",
        delay: Math.random() * 12,
      }}
      className="absolute z-0 pointer-events-none text-3xl md:text-5xl"
      style={{
        opacity: 0.25,
      }}
    >
      🍃
    </motion.div>
  );
})}
      {/* Main Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="w-full max-w-6xl overflow-hidden rounded-[36px] bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >

          <div className="grid md:grid-cols-2">

            {/* Left Side */}
            <div className="p-14 flex flex-col justify-center">

              <motion.h1
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="text-7xl font-black tracking-wide text-slate-800"
              >
                VISTARA
              </motion.h1>

              <div className="mt-4 h-[2px] w-32 bg-yellow-500 rounded-full" />

              <p className="mt-6 text-2xl font-medium text-slate-700">
                India's Digital Tourism Atlas
              </p>

              <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                Discover destinations, cultural heritage,
                hidden gems, and unforgettable journeys
                through a unified tourism experience.
              </p>

              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-slate-700">
                    Curated Heritage Experiences
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="text-slate-700">
                    Authentic Cultural Narratives
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-700">
                    Iconic Landmarks & Hidden Gems
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  <span className="text-slate-700">
                    Trusted Travel Knowledge
                  </span>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div className="p-14 bg-white/30">

              <h2 className="text-4xl font-bold text-slate-800">
                Sign In to Vistara
              </h2>

              <p className="mt-3 text-slate-600">
                Access India's most comprehensive tourism
                knowledge platform.
              </p>

              <form className="mt-10 space-y-5">

                <div>
                  <label className="block mb-2 text-slate-700 font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-slate-700 font-medium">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 outline-none focus:border-orange-400"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 py-4 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Continue Journey
                </button>

              </form>

              <button
                onClick={toggleMusic}
                className="mt-6 rounded-xl border border-slate-300 bg-white/50 px-5 py-3 text-slate-700 hover:bg-white/70 transition"
              >
                {playing
                  ? "Disable Ambient Audio"
                  : "Enable Ambient Audio"}
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}