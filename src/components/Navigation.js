import { Link, Outlet } from "react-router-dom";
import '../styles/Navigation.css';
import Cart from "./Cart";

function Navigation(props) {
  const { cart, products, displayCart, hideCart, handleCartQuantityChange } = props;
  return (
    <nav className="Navigation">
      <Link to="/" className="Navigation-link Navigation-pseudostore">Pseudostore</Link>
      <Link to="/shop" className="Navigation-link">Shop</Link>
      <Link to="/about" className="Navigation-link">About</Link>
      <p className="Navigation-link Navigation-cart" onClick={displayCart}><i className="fas fa-shopping-bag"></i> {Object.keys(cart).length}</p>
      <Cart cart={cart} products={products} hideCart={hideCart} handleCartQuantityChange={handleCartQuantityChange}/>
      <Outlet />
    </nav>
  );
}

export default Navigation;