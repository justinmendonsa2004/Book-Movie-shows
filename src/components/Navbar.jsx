import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🎬 JM Movies</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Favorites</li>
        <li>Liked</li>
      </ul>
    </nav>
  );
}

export default Navbar;
