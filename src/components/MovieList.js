import React, { useState, useEffect } from "react";
import RateSwitch from "./RateSwitch";
import Pagination from "./Pagination";
import ThemeButton from "./ThemeButton";
import PopUp from "./PopUp";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeReducer";
import Loader from "./Loader";
import { fetchMoviesList } from "../store/fetchMoviesList";


const MoviesList = ( { apiURL, title } ) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.list);
    const isLoading = useSelector((state) => state.movies.isLoading);
    const total = useSelector((state) => state.movies.total);
    const [currentPage, setCurrentPage] = useState(1);
    const isDarkTheme = useSelector((state) => state.theme.mode === "dark");

    useEffect(() => {
        dispatch(fetchMoviesList(`${apiURL}&page=${currentPage}`));
    }, [apiURL, currentPage, dispatch]);

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
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                <ThemeButton isDarkTheme={isDarkTheme} toggleTheme={handleThemeToggle} />
                {currentPage > 1 && (
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={total}
                        onPageChange={setCurrentPage}
                    /> 
                )}
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
                </>
                )}
                </div>
            {selectedMovie && <PopUp releaseDate={selectedMovie.release_date} closePopUp={() => setSelectedMovie(null)} />}
        </div>    
    );
};

export default MoviesList;