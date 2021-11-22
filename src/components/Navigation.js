import { Link, Outlet } from "react-router-dom";
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="Navigation">
      <Link to="/" className="Navigation-link Navigation-pseudostore">Pseudostore</Link>
      <Link to="/shop" className="Navigation-link">Shop</Link>
      <Link to="/about" className="Navigation-link">About</Link>
      <p className="Navigation-link"><i className="fas fa-shopping-bag"></i> 1</p>
      <Outlet />
    </nav>
  );
}

export default Navigation;