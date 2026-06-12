// import { useState } from "react";
// import "../styles/movieCards.css";

// function MovieCard({ movie }) {
//   const [liked, setLiked] = useState(false);
//   const [favorite, setFavorite] = useState(false);
//   const [play, setplay] = useState(false);

//   return (
//     <div className="card">
//       {play ? (
//         <iframe
//           width="100%"
//           height="200"
//           src={movie.trailer.replace("watch?v=", "embed/")}
//           title={movie.title}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       ) : (
//         <img src={movie.image} alt={movie.title} />
//       )}

//       <h3>{movie.title}</h3>

//       <div className="buttons">
//         <button onClick={() => setLiked(!liked)}>
//           {liked ? "❤️ Liked" : "🤍 Like"}
//         </button>

//         <button onClick={() => setFavorite(!favorite)}>
//           {favorite ? "⭐ Favorite" : "☆ Favorite"}
//         </button>
//       </div>
//       <button onClick={() => setplay(!play)}>
//         {play ? "⏹️  Close Trailer" : "▶️ Play Trailer"}
//       </button>
//     </div>
//   );
// }

// export default MovieCard;

import { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import "../styles/movieCards.css";

function MovieCard({ movie }) {
  const [liked, setLiked] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const { addLiked, addFavorite, likedMovies, favoriteMovies } =
    useContext(MovieContext);

  const handleLike = () => {
    if (!liked) {
      addLiked(movie);
    }
    setLiked(!liked);
  };

  const handleFavorite = () => {
    if (!favorite) {
      addFavorite(movie);
    }
    setFavorite(!favorite);
  };

  return (
    <>
      <div className="card">
        <img src={movie.image} alt={movie.title} />

        <h3>{movie.title}</h3>

        <div className="buttons">
          <button onClick={handleLike}>{liked ? "❤️ Liked" : "🤍 Like"}</button>

          <button onClick={handleFavorite}>
            {favorite ? "⭐ Favorite" : "☆ Favorite"}
          </button>
        </div>

        <button onClick={() => setShowTrailer(true)}>▶️ Play Trailer</button>
      </div>

      {showTrailer && (
        <div className="modal-overlay" onClick={() => setShowTrailer(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowTrailer(false)}>
              ✖
            </button>

            <iframe
              width="100%"
              height="500"
              src={movie.trailer.replace("watch?v=", "embed/")}
              title={movie.title}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MovieCard;
