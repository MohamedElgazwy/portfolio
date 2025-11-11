import { useDarkMode } from "../Contexts/DarkModeContext";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/" && location.pathname === "/home");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        <Link
          to="/"
          className="text-lg sm:text-2xl font-bold text-teal-600 dark:text-teal-400 tracking-wide hover:scale-105 transition-transform truncate"
        >
          Mohamed Aljazwi
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 mr-4"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 dark:bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex space-x-4 xl:space-x-6 text-gray-800 dark:text-gray-200 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-teal-500 transition-colors ${
                  isActive(link.to) ? "text-teal-500 font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleDarkMode}
            className="px-3 py-2 rounded-lg border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-3 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`hover:text-teal-500 transition-colors py-2 ${
                    isActive(link.to)
                      ? "text-teal-500 font-bold"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleDarkMode();
                  setMenuOpen(false);
                }}
                className="px-4 py-2 rounded-lg border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 w-full"
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
