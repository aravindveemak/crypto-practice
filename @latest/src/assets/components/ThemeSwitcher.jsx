import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
// side effect to update the theme
  useEffect(() => {
    if (theme === "dark") {                                  
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]); 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="p-6 bg-gray-400 dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Theme Change
        </h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 transition"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;