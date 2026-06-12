// import { Link } from "react-router-dom";
// import "../styles/Liked.css";

// const Liked = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <h1 className="logo">🎬 JM Movies</h1>
//         <ul className="nav-links">
//           <li>
//             <Link to="/"> Home </Link>
//           </li>
//           <li>
//             <Link to="/Favorites">Favorites</Link>
//           </li>
//           <li>
//             <Link to="/Liked">Liked</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="Liked-container">
//         <h1 className="Liked-title">❤️ Liked Movies Page</h1>
//         <p className="Liked-text">Your Liked movies will appear here.</p>
//       </div>
//     </div>
//   );
// };

// export default Liked;

import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Navbar from "../components/Navbar";
import "../styles/Liked.css";

const Liked = () => {
  const { likedMovies } = useContext(MovieContext);

  return (
    <>
      <Navbar />

      <div className="Liked-container">
        <h1 className="Liked-title">❤️ Liked Movies</h1>

        <div className="movie-list">
          {likedMovies.length === 0 ? (
            <p>No liked movies yet.</p>
          ) : (
            likedMovies.map((movie, index) => (
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

export default Liked;
