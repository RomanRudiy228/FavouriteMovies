import React from "react";
import RateSwitch from "./RateSwitch";
import Pagination from "./Pagination";

const API_KEY = "8653ef2efa68ca7761a600d93289521b"; 
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentPage: 1,
            totalPages: 1,
        };
    }

    componentDidMount() {
        this.fetchMovies(this.state.currentPage);
    }

    fetchMovies = (page) => {
        fetch(`${API_URL}?api_key=${API_KEY}&language=en-US&page=${page}`)
          .then((response) => response.json())
          .then((data) => {
            this.setState({ 
                movies: data.results,
                totalPages: data.total_pages,
                currentPage: page
            });
          })
          .catch((error) => console.error("Error fetching movies:", error));
      };

      handlePage = (newPage) => {
        if (newPage >= 1 && newPage <= this.state.totalPages) {
            this.fetchMovies(newPage);
        }
      };

      render() {
        return (
            <div className="container">
                <h1 className="title">Favourite Movies</h1>
                <div className="movies-list">
                    { this.state.movies.map((movie) => (
                        <div key={ movie.id } className="movie-card">
                            <img 
                                src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
                                alt={ movie.title }
                                className="movie-poster"
                            />
                            <div className="movie-info">
                                <h3>{ movie.title }</h3>
                                <p>{ movie.overview }</p>
                                <RateSwitch rate={ movie.popularity? movie.popularity.toFixed(1) : "N/A" } />
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination pagination
                    currentPage={this.state.currentPage}
                    totalPages={this.state.totalPages}
                    onPageChange={this.handlePage}
                />
            </div>
        );
    }
}  

export default MoviesList;