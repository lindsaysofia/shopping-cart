import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState({});
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
      setProduct({});
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
      <p className="Product-price">{product.price}</p>
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
    </div>
  );
}

export default Product;