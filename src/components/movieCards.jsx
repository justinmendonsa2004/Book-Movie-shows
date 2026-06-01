import { useState } from "react";
import "../Styles/moviecard.css";

function MovieCard({ movie }) {
  const [liked, setLiked] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>

      <div className="buttons">
        <button onClick={() => setLiked(!liked)}>
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <button onClick={() => setFavorite(!favorite)}>
          {favorite ? "⭐ Favorite" : "☆ Favorite"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
