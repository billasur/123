import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Kavlium ❤️
      </Link>
      <ul>
        {/* Link for Contacts Page */}
        {/* Link for About Page */}
      </ul>
    </nav>
  );
}

export default Navbar;
