import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "bg-dark text-white" : "bg-light text-dark";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button className="btn btn-secondary" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
