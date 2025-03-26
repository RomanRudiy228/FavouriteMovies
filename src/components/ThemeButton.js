import React from "react";
import "./ThemeButton.css";
import SunIcon from "../Images/sun2.png";
import MoonIcon from "../Images/moon.png";

const ThemeButton = ({ isDarkTheme, toggleTheme }) => {
    return (
        <button className="theme-switcher" onClick={toggleTheme}>
            <img 
                src={isDarkTheme ? MoonIcon : SunIcon}
                alt={isDarkTheme ? "Moon" : "Sun"}
                className="theme-icon"
            />
        </button>
    );
};

export default ThemeButton;