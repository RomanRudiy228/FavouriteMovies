import React from "react";
import "./ThemeButton.css";
import SunIcon from "../Images/sun2.png";
import MoonIcon from "../Images/moon.png";

class ThemeButton extends React.Component {
    handletoggle = () => {
        this.props.toggleTheme();
    };

    render() {
        const { isDarkTheme } = this.props;

        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }

        return (
            <button className="theme-switcher" onClick={this.handletoggle}>
                <img 
                src={isDarkTheme ? MoonIcon : SunIcon}
                alt={isDarkTheme ? 'Moon' : 'Sun'}
                className="theme-icon"
                />
            </button>
        );
    }
}

export default ThemeButton;