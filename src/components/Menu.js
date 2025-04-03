import React from "react";
import { Link } from "react-router-dom";
import "./styles/Menu.css";

const Menu = () => {
    return (
        <nav className="menu">
            <Link to="/">Favourite Movies</Link>
            <Link to="/top-rated">Top Rated Movies</Link>
            <Link to="/tv-shows">Popular TV Shows</Link>
        </nav>
    );
};

export default Menu;