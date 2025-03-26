import React, { useState, useEffect } from "react";
import RateSwitch from "./RateSwitch";
import Pagination from "./Pagination";
import ThemeButton from "./ThemeButton";
import PopUp from "./PopUp";
import useFetchMovies from "./useFetchMovies";

const API_KEY = "8653ef2efa68ca7761a600d93289521b"; 
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`;

const MoviesList = () => {
    const { data: movies, total, currentPage, setCurrentPage } = useFetchMovies(API_URL);
    const [isDarkTheme, setIsDarkTheme] = useState(() => localStorage.getItem("theme") === "dark");
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [currentPage]);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <div className="main-container">
            <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                <h1 className="title">Favourite Movies</h1>
                    <ThemeButton isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

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