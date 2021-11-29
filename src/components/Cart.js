import '../styles/Cart.css';
function Cart(props) {
  const { cart, products, hideCart, handleCartQuantityChange } = props;
  const cartLength = Object.keys(cart).length;
  let totalPrice = 0;
  return (
    <div className="Cart">
      <div className="Cart-display">
        <div className="Cart-heading">
          <h2 className="heading-title">Cart ({cartLength === 1 ? '1 item' : `${cartLength} items`})</h2>
          <button className="heading-exit" onClick={hideCart}>X</button>
        </div>
        <div className="Cart-items">
          {Object.keys(cart).map((id, index) => {
            let product = products.find((item) => item.id === Number(id)) || {};
            let quantity = cart[id];
            let displayPrice = (quantity * ('price' in product ? product.price : 0)).toFixed(2);
            let numberPrice = Number(displayPrice);
            totalPrice += numberPrice;
            return (
              <div
                key={index}
                className="item"
              >
                <img src={product.image} alt="" className="item-image"/>
                <p className="item-title">{product.title}</p>
                <div className="item-quantity">
                  <button 
                    className="quantity-decrease" 
                    data-action="decrease"
                    data-id={id}
                    onClick={handleCartQuantityChange}
                  >-</button>
                  <input 
                    type="number" 
                    min="0" 
                    max="10" 
                    name="quantity" 
                    value={quantity}
                    data-action="manual"
                    data-id={id}
                    onChange={handleCartQuantityChange}
                  />
                  <button 
                    className="quantity-increase" 
                    data-action="increase"
                    data-id={id}
                    onClick={handleCartQuantityChange}
                  >+</button>
                </div>
                <p className="item-price">${displayPrice}</p>
              </div>
            );
          })}
        </div>
        <div className="Cart-checkout">
          <h2>Subtotal: ${totalPrice.toFixed(2)}</h2>
          <button onClick={() => alert('Thank you for shopping!')}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;