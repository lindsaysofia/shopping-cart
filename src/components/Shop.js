import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Shop.css';

function Shop() {
  const [products, setProducts] = useState([{}]);
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories', {mode: 'cors'});
    const data = await response.json();
    setCategories(data);
  }

  async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products', {mode: 'cors'});
    const data = await response.json();
    setProducts(data);
  }


  useEffect(() => {
    getCategories();
    return () => {
      setCategories([]);
    };
  }, []);

  useEffect(() => {
    getProducts();
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <div className="Shop">
      <h2 className="Shop-results">{products.length} results</h2>
      <fieldset className="Shop-filter">
        <legend>Categories</legend>
        <div>
          {categories.map((category, index) => {
            return (
              <div key={index} className="Shop-category">
                <input type="checkbox" id={category} name="category" value={category} />
                <label htmlFor={category}>{category}</label>
              </div>
            );
          })}
        </div>
      </fieldset>
      <div className="Shop-products">
        {products.map((product, index) => {
          return (
            <Link key={index} className="Shop-product" to={`/shop/${product.id}`} onClick={() => console.log(product.id)}>
              <img src={product.image} alt=""/>
              <p>{product.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;