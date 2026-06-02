import { Link } from "react-router-dom";
import "../styles/Liked.css";

const Liked = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">🎬 Justin Mendonsa Movies</h1>
        <ul className="nav-links">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/Liked">Liked</Link>
          </li>
        </ul>
      </nav>
      <div className="Liked-container">
        <h1 className="Liked-title">❤️ Liked Movies Page</h1>
        <p className="Liked-text">Your Liked movies will appear here.</p>
      </div>
    </div>
  );
};

export default Liked;
