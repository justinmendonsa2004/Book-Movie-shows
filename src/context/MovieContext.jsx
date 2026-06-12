import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addLiked = (movie) => {
    if (!likedMovies.find((m) => m.title === movie.title)) {
      setLikedMovies([...likedMovies, movie]);
    }
  };

  const addFavorite = (movie) => {
    if (!favoriteMovies.find((m) => m.title === movie.title)) {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        likedMovies,
        favoriteMovies,
        addLiked,
        addFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
