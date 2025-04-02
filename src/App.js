import  React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MoviesList from './components/MovieList';
import Menu from "./components/Menu";
import TopRated from "./pages/TopRated";
import TVShowsRedirect from './pages/TVShowsRedirect';

const API_KEY = "8653ef2efa68ca7761a600d93289521b";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;

const App = () => {
  useEffect(() => {
      if (window.location.pathname !== "/") {
          window.location.replace("/"); 
      }
  }, []);
  
    return (
      <Router>
          <Menu />
            <Routes>
                <Route path='/' element={<MoviesList apiUrl={API_URL} title="Favourite Movies" />} />
                <Route path='/top-rated' element={<TopRated />} />
                <Route path='/tv-shows' element={<TVShowsRedirect />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
      </Router>
    );
}

export default App;
