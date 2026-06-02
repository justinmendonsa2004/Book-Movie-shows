import { Link } from "react-router-dom";
import "../styles/Favorites.css";

const Favorites = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">🎬 Justin Mendonsa Movies</h1>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/favorites">Favorites</Link>
          </li>

          <li>
            <Link to="/liked">Liked</Link>
          </li>
        </ul>
      </nav>

      <div className="favorites-container">
        <h1 className="favorites-title">⭐ Favorites Page</h1>
        <p className="favorites-text">Your favorite movies will appear here.</p>
      </div>
    </div>
  );
};

export default Favorites;
