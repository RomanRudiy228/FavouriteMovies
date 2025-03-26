import { useState, useEffect } from "react";

const useFetchMovies = (apiUrl, page = 1) => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(1);
    const [currentPage, setCurrentPage] = useState(page);

    useEffect (() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${apiUrl}&page=${currentPage}`);
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