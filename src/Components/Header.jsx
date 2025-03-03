import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../Contexts/DarkModeContext";

function Header({ title }) {
  const [navOpen, setNavOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="md:flex items-center justify-between py-3 px-9 text-xl font-semibold shadow-xl dark:bg-gray-800 dark:text-white">
      <h1 className="font-bold text-3xl py-3">
        <NavLink to="/">{title}</NavLink>
      </h1>
      <nav className="hidden md:flex items-center justify-around space-x-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-emerald-800 rounded-full px-2 py-2 hover:text-black duration-150"
              : "text-black-400  transition duration-300 dark:text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-emerald-800 rounded-full px-2 py-1 hover:text-black duration-150"
              : "text-black-400  transition duration-300 dark:text-white"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-emerald-800 rounded-full px-2 py-1 hover:text-black duration-150"
              : "text-black-400  transition duration-300 dark:text-white"
          }
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-emerald-800 rounded-full px-2 py-1 hover:text-black duration-150"
              : "text-black-400  transition duration-300 dark:text-white"
          }
        >
          Contact
        </NavLink>
        <button onClick={toggleDarkMode} className="cursor-pointer">
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </nav>
      <div className="md:hidden" onClick={toggleNav}>
        {navOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <ul
        className={`md:hidden w-full text-amber-400 center transition-all duration-300 ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <li className="py-4 hover:text-amber-400">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="py-4 hover:text-amber-400">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="py-4 hover:text-amber-400">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="py-4 hover:text-amber-400">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li onClick={toggleDarkMode} className="cursor-pointer">
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </li>
      </ul>
    </div>
  );
}

export default Header;
