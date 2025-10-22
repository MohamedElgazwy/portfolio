// Header.jsx
import { useDarkMode } from "../Contexts/DarkModeContext";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* اللوجو على اليسار */}
        <Link
          to="/"
          className="text-2xl font-bold text-teal-600 dark:text-teal-400 tracking-wide hover:scale-105 transition-transform"
        >
          Mohamed Aljazwi
        </Link>

        {/* التنقل على اليمين */}
        <div className="flex items-center gap-6">
          <nav className="flex space-x-6 text-gray-800 dark:text-gray-200 font-medium">
            <Link
              to="/"
              className={`hover:text-teal-500 transition-colors ${
                location.pathname === "/" || location.pathname === "/home"
                  ? "text-teal-500 font-bold"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-teal-500 transition-colors ${
                location.pathname === "/about" ? "text-teal-500 font-bold" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={`hover:text-teal-500 transition-colors ${
                location.pathname === "/portfolio"
                  ? "text-teal-500 font-bold"
                  : ""
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`hover:text-teal-500 transition-colors ${
                location.pathname === "/contact"
                  ? "text-teal-500 font-bold"
                  : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* زر تبديل الوضع الداكن */}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-2 rounded-lg border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
