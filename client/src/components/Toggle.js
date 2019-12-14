import React, { useState } from "react";
import UseDarkMode from "../hooks/useDarkMode";

//hook//
const Toggle = () => {
  const [darkMode, setDarkMode] = UseDarkMode(false);
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Toggle;
