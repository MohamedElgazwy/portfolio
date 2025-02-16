import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Header({ title }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className=" md:flex items-center justify-between py-3 px-9 text-xl font-semibold shadow-xl">
      <h1 className="font-bold text-3xl py-3">
        <NavLink to="/">{title}</NavLink>
      </h1>
      <ul className="hidden md:flex items-center justify-around space-x-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-emerald-800 rounded-full px-2 py-2 hover:text-black duration-150"
                : "text-black-400 hover:text-white transition duration-300"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-emerald-800 rounded-full px-2 py-1 hover:text-black duration-150"
                : "text-black-400 hover:text-white transition duration-300"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-emerald-800 rounded-full px-2 py-1 hover:text-black duration-150"
                : "text-black-400 hover:text-white transition duration-300"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-emerald-800 rounded-full px-2 py-1 hover:text-black duration-150"
                : "text-black-400 hover:text-white transition duration-300"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="md:hidden" onClick={toggleNav}>
        {navOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <ul
        className={`md:hidden  w-full text-amber-400center transition-all duration-300 ${
          navOpen ? "block" : "hidden"
        }
        }`}
      >
        <li className="py-4 hover:text-amber-400">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="py-4  hover:text-amber-400">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="py-4  hover:text-amber-400">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="py-4  hover:text-amber-400">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
