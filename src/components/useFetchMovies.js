import { useState, useEffect } from "react";

const API_KEY = "8653ef2efa68ca7761a600d93289521b"; 
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`;

const useFetchMovies = (apiUrl, page = 1) => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(1);
    const [currentPage, setCurrentPage] = useState(page);

    useEffect (() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${API_URL}&page=${currentPage}`);
                const result = await response.json();
                setData(result.results);
                setTotal(result.total_pages);
            } catch (error) {
                console.error("Error fetching movies: ", error);
            }
        };
        fetchMovies();
    }, [apiUrl, currentPage]);
    
    return {data, total, currentPage, setCurrentPage };
};

export default useFetchMovies;