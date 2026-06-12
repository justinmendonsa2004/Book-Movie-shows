import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Navbar from "../components/Navbar";
import "../styles/Favorites.css";

const Favorites = () => {
  const { favoriteMovies } = useContext(MovieContext);

  return (
    <>
      <Navbar />

      <div className="favorites-container">
        <h1 className="favorites-title">⭐ Favorite Movies</h1>

        <div className="movie-list">
          {favoriteMovies.length === 0 ? (
            <p>No favorite movies yet.</p>
          ) : (
            favoriteMovies.map((movie, index) => (
              <div className="fav-card" key={index}>
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.title}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
