// DarkModeContext.js
import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  // Check system preference for dark mode
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark") === "true" || systemPrefersDark
  );

  useEffect(() => {
    // Apply dark mode to the body element
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("dark", true);
    } else {
      document.body.classList.remove("dark");
      localStorage.removeItem("dark");
    }
  }, [darkMode]);

  // Listen for system color scheme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
