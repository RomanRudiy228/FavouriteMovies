import React, { useState, useEffect } from "react";
import RateSwitch from "./RateSwitch";
import Pagination from "./Pagination";
import ThemeButton from "./ThemeButton";
import PopUp from "./PopUp";
import useFetchMovies from "./useFetchMovies";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeReducer";

const MoviesList = ( { apiURL, title } ) => {
    const { data: movies, total, currentPage, setCurrentPage } = useFetchMovies(apiURL);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state) => state.theme.mode === "dark");

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.title = title;
    }, [currentPage, title]);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [isDarkTheme]);

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className="main-container">
            <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                <h1 className="title">{title}</h1>
                <ThemeButton isDarkTheme={isDarkTheme} toggleTheme={handleThemeToggle} />
                {currentPage > 1 && (
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={total}
                        onPageChange={setCurrentPage}
                    /> )}
                    <div className="movies-list">
                        {movies.map((movie) => (
                            <div key={movie.id} className="movie-card">
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="movie-poster"
                                    onClick={() => setSelectedMovie(movie)}
                                />
                                <div className="movie-info">
                                    <h3>{movie.title}</h3>
                                    <p>{movie.overview}</p>
                                    <RateSwitch rate={movie.popularity ? movie.popularity.toFixed(1) : "N/A"} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={total}
                        onPageChange={setCurrentPage}
                    />
                </div>
            {selectedMovie && <PopUp releaseDate={selectedMovie.release_date} closePopUp={() => setSelectedMovie(null)} />}
        </div>    
    );
};

export default MoviesList;