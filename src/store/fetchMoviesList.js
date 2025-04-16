import { setMovies, setLoading, setError } from "./moviesReducer";

export const fetchMoviesList = (apiURL) => async (dispatch) => {
    const API_KEY = "8653ef2efa68ca7761a600d93289521b";
    const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&`;

    try {
        dispatch(setLoading(true));

        const response = await fetch(apiURL);

        if (!response.ok) throw new Error("Error while loading");

        const data = await response.json();

        dispatch(setMovies({ movies: data.results, total: data.total_pages }));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};
