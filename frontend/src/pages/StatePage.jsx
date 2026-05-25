import {
  useParams,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";

import {
  useRef,
  useState,
  useEffect,
} from "react";

import fluteMusic from "../assets/flute.mp3";

import statesData from "../data/statesData";

export default function StatePage() {

  const { stateId } = useParams();

  const navigate = useNavigate();

  const audioRef = useRef(null);

const [playing, setPlaying] =
  useState(false);

  const state =
    statesData[stateId];

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

  if (!state) {

    return (

      <div className="min-h-screen flex items-center justify-center text-5xl font-black">
        State Not Found
      </div>

    );
  }

  return (

    <div className="min-h-screen overflow-hidden bg-[#FFFDF7]">

        <audio ref={audioRef} loop>
  <source
    src={fluteMusic}
    type="audio/mp3"
  />
</audio>

        {/* Back Button */}

<button
  onClick={() => navigate(-1)}
  className="fixed top-6 left-6 z-50 px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg text-slate-700 hover:scale-105 transition-all duration-300"
>
  ← Back
</button>

      {/* Hero Section */}
      <div
        className={`relative h-[75vh] bg-gradient-to-r ${state.gradient} flex items-center justify-center`}
      >

        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-10 text-center text-white px-6"
        >

          <div className="text-8xl">
            {state.emoji}
          </div>

          <h1 className="mt-6 text-7xl font-black">
            {state.name}
          </h1>

          <p className="mt-5 text-3xl font-light">
            {state.hero}
          </p>

        </motion.div>

      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* About */}
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
            delay: 0.2,
          }}
          className="bg-white rounded-[40px] p-10 shadow-xl"
        >

          <h2 className="text-4xl font-black text-slate-900">
            About {state.name}
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            {state.description}
          </p>

        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">

          {/* Famous Places */}
          <motion.div
            whileHover={{
              y: -8,
            }}
            className="bg-white rounded-[35px] p-8 shadow-xl"
          >

            <h3 className="text-3xl font-black text-slate-900">
              Famous Places
            </h3>

            <div className="mt-6 space-y-4">

              {state.famousPlaces.map((place) => (

                <div
                  key={place}
                  className="px-5 py-4 rounded-2xl bg-orange-50 text-slate-700"
                >
                  📍 {place}
                </div>

              ))}

            </div>

          </motion.div>

          {/* Food */}
          <motion.div
            whileHover={{
              y: -8,
            }}
            className="bg-white rounded-[35px] p-8 shadow-xl"
          >

            <h3 className="text-3xl font-black text-slate-900">
              Cuisine
            </h3>

            <div className="mt-6 space-y-4">

              {state.food.map((item) => (

                <div
                  key={item}
                  className="px-5 py-4 rounded-2xl bg-emerald-50 text-slate-700"
                >
                  🍛 {item}
                </div>

              ))}

            </div>

          </motion.div>

          {/* Culture */}
          <motion.div
            whileHover={{
              y: -8,
            }}
            className="bg-white rounded-[35px] p-8 shadow-xl"
          >

            <h3 className="text-3xl font-black text-slate-900">
              Culture
            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {state.culture}
            </p>

            <div className="mt-10">

              <h4 className="text-xl font-bold text-slate-900">
                Best Time To Visit
              </h4>

              <p className="mt-3 text-slate-600">
                🌤 {state.bestTime}
              </p>

            </div>

          </motion.div>

        </div>

        {/* External Link */}
        <div className="mt-16 text-center">

          <button
            onClick={() =>
              window.open(
                state.officialLink,
                "_blank"
              )
            }
            className={`px-10 py-5 rounded-3xl text-white text-xl font-bold bg-gradient-to-r ${state.gradient} shadow-2xl hover:scale-105 transition-all duration-300`}
          >
            Explore Official Tourism Website
          </button>

        </div>

      </div>

    </div>

  );
}