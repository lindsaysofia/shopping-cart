/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from "react-router-dom";
import { Outlet } from 'react-router';
import '../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="Navigation">
      <a href="#" className="Navigation-link Navigation-pseudostore">Pseudostore</a>
      <a href="#" className="Navigation-link">Shop</a>
      <a href="#" className="Navigation-link">About</a>
      <a href="#" className="Navigation-link"><i className="fas fa-shopping-bag"></i> 1</a>
      <Outlet />
    </nav>
  );
}

export default Navigation;