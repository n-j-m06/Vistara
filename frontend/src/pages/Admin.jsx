import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import axios from "axios";
import { motion } from "framer-motion";

import fluteMusic from "../assets/flute.mp3";

export default function Admin() {

  const navigate = useNavigate();

  const audioRef = useRef(null);

  const [playing, setPlaying] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(true);

  const [states, setStates] =
    useState([]);

  const [formData, setFormData] =
    useState({

      name: "",
      hero: "",
      description: "",
      category: "",
      famousPlaces: "",
      food: "",
      culture: "",
      bestTime: "",
      officialLink: "",
      image: "",

    });

  useEffect(() => {

    fetchStates();

  }, []);

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

  const fetchStates =
    async () => {

      try {

        const res =
          await axios.get(
            "http://localhost:5000/api/states/all"
          );

        setStates(res.data);

      } catch (error) {

        console.log(error);

      }

    };

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });
  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await axios.post(
          "http://localhost:5000/api/states/add",

          {
            ...formData,

            famousPlaces:
              formData.famousPlaces
                .split(","),

            food:
              formData.food
                .split(","),
          }
        );

        fetchStates();

        setFormData({

          name: "",
          hero: "",
          description: "",
          category: "",
          famousPlaces: "",
          food: "",
          culture: "",
          bestTime: "",
          officialLink: "",
          image: "",

        });

      } catch (error) {

        console.log(error);

      }

    };

  const deleteState =
    async (id) => {

      try {

        await axios.delete(
          `http://localhost:5000/api/states/delete/${id}`
        );

        fetchStates();

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <div
      className={`min-h-screen p-10 relative overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-[#020B2D]"
          : "bg-[#FFFDF7]"
      }`}
    >
        {/* Falling Leaves */}

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
    className="absolute text-3xl opacity-20 pointer-events-none"
  >
    🍃
  </motion.div>

))}

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source
          src={fluteMusic}
          type="audio/mp3"
        />
      </audio>

      {/* Top Buttons */}
      <div className="fixed top-6 left-6 z-50 flex gap-3">

        {/* Back */}
        <button
          onClick={() =>
            navigate(-1)
          }
          className={`px-5 py-3 rounded-2xl backdrop-blur-xl border shadow-lg transition-all duration-300 ${
            darkMode
              ? "bg-white/10 border-white/10 text-white"
              : "bg-white border-slate-200 text-slate-700"
          }`}
        >
          ← Back
        </button>

      </div>

      <div className="fixed top-6 right-6 z-50 flex gap-3">

        {/* Audio */}
        <button
          onClick={toggleMusic}
          className={`px-5 py-3 rounded-2xl backdrop-blur-xl border shadow-lg transition-all duration-300 ${
            darkMode
              ? "bg-white/10 border-white/10 text-white"
              : "bg-white border-slate-200 text-slate-700"
          }`}
        >
          {playing
            ? "Mute"
            : "Audio"}
        </button>

        {/* Theme */}
        <button
          onClick={() =>
            setDarkMode(
              !darkMode
            )
          }
          className={`px-5 py-3 rounded-2xl backdrop-blur-xl border shadow-lg transition-all duration-300 ${
            darkMode
              ? "bg-white/10 border-white/10 text-white"
              : "bg-white border-slate-200 text-slate-700"
          }`}
        >
          {darkMode
            ? "☀ Light"
            : "🌙 Dark"}
        </button>

      </div>

      {/* Heading */}
      <h1
        className={`text-6xl font-black text-center mb-16 ${
          darkMode
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        Vistara Admin Panel
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className={`max-w-5xl mx-auto rounded-[40px] p-10 shadow-xl space-y-5 transition-all duration-500 ${
          darkMode
            ? "bg-white/5 border border-white/10"
            : "bg-white"
        }`}
      >

        {[
          "name",
          "hero",
          "category",
          "famousPlaces",
          "food",
          "culture",
          "bestTime",
          "officialLink",
          "image",
        ].map((field) => (

          <input
            key={field}
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
            className={`w-full p-4 rounded-2xl border outline-none ${
              darkMode
                ? "bg-white/10 border-white/10 text-white placeholder:text-slate-300"
                : "bg-white border-slate-200 text-slate-700"
            }`}
          />

        ))}

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className={`w-full p-4 rounded-2xl border h-32 outline-none ${
            darkMode
              ? "bg-white/10 border-white/10 text-white placeholder:text-slate-300"
              : "bg-white border-slate-200 text-slate-700"
          }`}
        />

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-emerald-500 text-white font-bold text-lg hover:scale-[1.02] transition-all duration-300"
        >
          Add State
        </button>

      </form>

      {/* State Cards */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {states.map((state) => (

          <div
            key={state._id}
            className={`rounded-[30px] p-8 shadow-xl transition-all duration-500 ${
              darkMode
                ? "bg-white/5 border border-white/10"
                : "bg-white"
            }`}
          >

            <h2
              className={`text-3xl font-black ${
                darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {state.name}
            </h2>

            <p
              className={`mt-3 ${
                darkMode
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              {state.hero}
            </p>

            <button
              onClick={() =>
                deleteState(
                  state._id
                )
              }
              className="mt-6 px-5 py-3 rounded-2xl bg-red-500 text-white font-semibold hover:scale-105 transition-all duration-300"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}