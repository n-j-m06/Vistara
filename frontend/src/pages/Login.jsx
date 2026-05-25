import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import fluteMusic from "../assets/flute.mp3";

import {
  registerUser,
  loginUser,
} from "../services/authService";

export default function Login() {

  const navigate = useNavigate();

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [isSignup, setIsSignup] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const leaves = ["🍃", "🍂", "🌿"];

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

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
      general: "",
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setErrors({});
    setSuccessMessage("");

    try {

      if (isSignup) {

        await registerUser(formData);

        setSuccessMessage(
          "Account created successfully. Please login to continue."
        );

        setIsSignup(false);

        setFormData({
          name: "",
          email: "",
          password: "",
        });

      } else {

        const response = await loginUser(formData);

        localStorage.setItem(
          "vistaraUser",
          JSON.stringify(response.user)
        );

        navigate("/home");
      }

    } catch (error) {

      const message =
        error.response?.data?.message ||
        "Something went wrong";

      if (
        message.toLowerCase().includes("email")
      ) {

        setErrors({
          email: message,
        });

      } else if (
        message.toLowerCase().includes("password")
      ) {

        setErrors({
          password: message,
        });

      } else if (
        message.toLowerCase().includes("credential")
      ) {

        setErrors({
          password: "Invalid email or password",
        });

      } else {

        setErrors({
          general: message,
        });

      }

    }
  };

  return (

    <div
      className={`relative min-h-screen overflow-hidden flex items-center justify-center px-6 transition-all duration-700 ${
        darkMode
          ? "bg-[#0F172A]"
          : "bg-[#FFFDF7]"
      }`}
    >

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src={fluteMusic} type="audio/mp3" />
      </audio>

      {/* Theme Toggle */}
      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
        className={`absolute top-8 right-8 z-50 px-5 py-3 rounded-2xl backdrop-blur-xl border transition-all duration-500 shadow-lg ${
          darkMode
            ? "bg-white/10 border-white/20 text-white"
            : "bg-white/70 border-white/40 text-slate-700"
        }`}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

      {/* Floating Glow */}
      <div
        className={`absolute top-[-200px] left-[-200px] w-[500px] h-[500px] blur-3xl rounded-full animate-pulse ${
          darkMode
            ? "bg-orange-500/20"
            : "bg-orange-200/40"
        }`}
      />

      <div
        className={`absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] blur-3xl rounded-full animate-pulse ${
          darkMode
            ? "bg-emerald-500/20"
            : "bg-emerald-200/40"
        }`}
      />

      {/* Natural Falling Leaves Across Entire Screen */}
      {[...Array(28)].map((_, i) => {

        const startX =
          Math.random() * (window.innerWidth + 400) - 200;

        return (

          <motion.div
            key={i}
            initial={{
              x: startX,
              y: -400,
              rotate: Math.random() * 360,
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight + 400,
              x: [
                startX,
                startX + 80,
                startX - 60,
                startX + 100,
                startX - 40,
              ],
              rotate: [
                0,
                90,
                -90,
                45,
                0,
              ],
              opacity: [0, 0.15, 0.25, 0.2, 0],
            }}
            transition={{
              duration: 14 + Math.random() * 12,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 18,
            }}
            className="absolute z-0 pointer-events-none text-3xl md:text-4xl"
          >
            {leaves[i % leaves.length]}
          </motion.div>

        );
      })}

      {/* Main Glass Card */}
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
        className={`relative z-10 w-full max-w-6xl grid lg:grid-cols-2 rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border backdrop-blur-2xl transition-all duration-700 ${
          darkMode
            ? "bg-white/5 border-white/10"
            : "bg-white/40 border-white/40"
        }`}
      >

        {/* Left Side */}
        <div className="relative hidden lg:flex flex-col justify-center p-16">

          {/* Giant Text Background */}
          <h1
            className={`absolute text-[180px] font-black top-16 left-[-10px] select-none whitespace-nowrap ${
              darkMode
                ? "text-white/[0.025]"
                : "text-black/[0.025]"
            }`}
          >
            INDIA
          </h1>

          <div className="relative z-10">

            <div
              className={`inline-block px-5 py-2 rounded-full backdrop-blur-xl border text-sm tracking-[4px] font-semibold ${
                darkMode
                  ? "bg-white/10 border-white/10 text-orange-300"
                  : "bg-white/70 border-white/40 text-orange-500"
              }`}
            >
              INCREDIBLE INDIA
            </div>

            <h1
              className={`mt-8 text-8xl font-black leading-[0.9] ${
                darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              VISTARA
            </h1>

            <div className="mt-4 h-[4px] w-32 rounded-full bg-gradient-to-r from-orange-500 to-emerald-500" />

            <p
              className={`mt-8 text-2xl leading-relaxed max-w-xl ${
                darkMode
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              A cinematic gateway to India’s culture,
              heritage, hidden gems, and breathtaking journeys.
            </p>

            {/* Feature Pills */}
            <div className="mt-10 flex flex-wrap gap-4">

              <div
                className={`px-5 py-3 rounded-2xl backdrop-blur-xl shadow-lg ${
                  darkMode
                    ? "bg-white/10 text-white"
                    : "bg-white/70 text-slate-800"
                }`}
              >
                🏛 Heritage
              </div>

              <div
                className={`px-5 py-3 rounded-2xl backdrop-blur-xl shadow-lg ${
                  darkMode
                    ? "bg-white/10 text-white"
                    : "bg-white/70 text-slate-800"
                }`}
              >
                🌿 Nature
              </div>

              <div
                className={`px-5 py-3 rounded-2xl backdrop-blur-xl shadow-lg ${
                  darkMode
                    ? "bg-white/10 text-white"
                    : "bg-white/70 text-slate-800"
                }`}
              >
                🛕 Spiritual
              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div
          className={`relative p-10 md:p-16 backdrop-blur-2xl transition-all duration-700 ${
            darkMode
              ? "bg-white/5"
              : "bg-white/30"
          }`}
        >

          {/* Floating Gradient */}
          <div
            className={`absolute top-0 right-0 w-[300px] h-[300px] blur-3xl rounded-full ${
              darkMode
                ? "bg-orange-500/10"
                : "bg-orange-200/30"
            }`}
          />

          <div className="relative z-10">

            <div className="flex items-center justify-between">

              <div>

                <h2
                  className={`text-5xl font-black ${
                    darkMode
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >

                  {isSignup
                    ? "Create Account"
                    : "Welcome"}

                </h2>

                <p
                  className={`mt-3 text-lg ${
                    darkMode
                      ? "text-slate-300"
                      : "text-slate-600"
                  }`}
                >

                  {isSignup
                    ? "Begin your journey through India."
                    : "Continue your journey through India."}

                </p>

              </div>

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-orange-500 to-emerald-500 flex items-center justify-center text-3xl shadow-xl">
                🇮🇳
              </div>

            </div>

            {successMessage && (

              <div className="mt-8 rounded-2xl bg-emerald-100 border border-emerald-300 px-5 py-4 text-emerald-700">
                {successMessage}
              </div>

            )}

            {errors.general && (

              <div className="mt-8 rounded-2xl bg-red-100 border border-red-300 px-5 py-4 text-red-700">
                {errors.general}
              </div>

            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              {isSignup && (

                <div>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-6 py-5 rounded-3xl backdrop-blur-xl border outline-none shadow-md transition-all ${
                      darkMode
                        ? "bg-white/10 border-white/10 text-white placeholder:text-slate-400"
                        : "bg-white/70 border-white/50 text-slate-800"
                    }`}
                  />

                </div>

              )}

              {/* Email */}
              <div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-5 rounded-3xl backdrop-blur-xl border outline-none shadow-md transition-all ${
                    darkMode
                      ? "bg-white/10 border-white/10 text-white placeholder:text-slate-400"
                      : "bg-white/70 border-white/50 text-slate-800"
                  }`}
                />

                {errors.email && (

                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>

                )}

              </div>

              {/* Password */}
              <div>

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-6 py-5 rounded-3xl backdrop-blur-xl border outline-none shadow-md transition-all ${
                    darkMode
                      ? "bg-white/10 border-white/10 text-white placeholder:text-slate-400"
                      : "bg-white/70 border-white/50 text-slate-800"
                  }`}
                />

                {errors.password && (

                  <p className="mt-2 text-sm text-red-500">
                    {errors.password}
                  </p>

                )}

              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-5 rounded-3xl bg-gradient-to-r from-orange-500 via-yellow-500 to-emerald-500 text-white text-lg font-bold shadow-[0_20px_40px_rgba(251,146,60,0.35)] hover:scale-[1.02] transition-all duration-300"
              >

                {isSignup
                  ? "Create Account"
                  : "Continue Journey"}

              </button>

            </form>

            {/* Bottom */}
            <div
              className={`mt-8 flex flex-col gap-4 ${
                darkMode
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >

              <button
                onClick={() =>
                  setIsSignup(!isSignup)
                }
                className="hover:text-orange-500 transition text-left"
              >

                {isSignup
                  ? "Already have an account? Login"
                  : "New to Vistara? Create Account"}

              </button>

              <button
                onClick={toggleMusic}
                className="hover:text-orange-500 transition text-left"
              >

                {playing
                  ? "Disable Ambient Audio"
                  : "Enable Ambient Audio"}

              </button>

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  );
}