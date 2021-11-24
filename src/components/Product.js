import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Stars from "./Stars";
import '../styles/Product.css';

function Product() {
  const [product, setProduct] = useState({rating: {rate: 0, count: 0}});
  const params = useParams();
  const id = params.id;

  async function getProduct() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
    return () => {
      setProduct({rating: {rate: 0, count: 0}});
    };
  }, []);

  return (
    <div className="Product">
      <img 
        src={product.image} 
        alt=""
        className="Product-image"
      />
      <h2 className="Product-title">{product.title}</h2>
      <p className="Product-price">${product.price}</p>
      <div 
        className="Product-rating"
      >
        <Stars rate={product.rating.rate}/>
        <p className="rating-rate">{product.rating.rate}</p>
        <p className="rating-count">See {product.rating.count} reviews</p>
      </div> 
      <p className="Product-description">{product.description}</p>
      <div
        className="Product-quantity"
      >
        <label htmlFor="quantity">Quantity: </label>
        <input 
          type="number"
          min="1"
          max="10"
          value="1"
          name="quantity"
        />
      </div>
      <button className="Product-add">Add to Cart</button>
    </div>
  );
}

export default Product;