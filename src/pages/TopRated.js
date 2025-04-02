import React from "react";
import MoviesList from "../components/MovieList";

const API_KEY = "8653ef2efa68ca7761a600d93289521b";
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;

const TopRated = () => {
    return <MoviesList apiUrl={API_URL} title="Top Rated Movies" />;
};

export default TopRated;