import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">🎬 JM Movies</h1>
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
  );
};

export default Navbar;
