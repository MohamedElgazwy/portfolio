// Home.jsx
import profilePhoto from "../assets/photo.jpg";
import { motion } from "framer-motion";
import { useDarkMode } from "../Contexts/DarkModeContext";

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-500 pt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Profile Section with Enhanced Image Design */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* الصورة مع تأثيرات متطورة */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-700/30">
            <img
              src={profilePhoto}
              alt="Mohammed Aljazwi"
              className="w-full h-full object-cover"
            />
          </div>
          {/* تأثير إشعاعي خلف الصورة */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
        </motion.div>

        {/* النص مع تحسينات */}
        <div className="text-center md:text-left max-w-2xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Mohammed Aljazwi
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Frontend Developer | Instructor at ACM Minia University &
            eta_Platform
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Passionate about building modern, fast, and responsive web
            interfaces. I've mastered React, Next.js, and Tailwind CSS, and I'm
            always learning to become one of the best frontend developers in the
            Arab World.
          </motion.p>
        </div>
      </motion.div>

      {/* Buttons - محسنة */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.button
          onClick={toggleDarkMode}
          className="px-8 py-3 rounded-2xl font-semibold shadow-lg border-0 transition-all duration-300 
          bg-gradient-to-r from-indigo-500 to-purple-600 text-white dark:from-purple-500 dark:to-indigo-600
          hover:shadow-xl hover:scale-105 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? "☀️" : "🌙"}
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </motion.button>

        <motion.a
          href="/CV Mohamed Farag.pdf"
          download
          className="px-8 py-3 rounded-2xl font-semibold shadow-lg border border-gray-300 dark:border-gray-600 
          transition-all duration-300 hover:scale-105 hover:shadow-xl
          bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📄 Download CV
        </motion.a>
      </motion.div>

      {/* Animated Footer */}
      <motion.footer
        className="mt-16 text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        © {new Date().getFullYear()} Mohammed Aljazwi. All rights reserved.
      </motion.footer>
    </div>
  );
}
