import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import '../styles/Home.css';

function Home() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories', {mode: 'cors'});
    const data = await response.json();
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
    return () => {
      setCategories([]);
    };
  }, []);

  return (
    <div className="Home">
      <div className="Home-bg">
      </div>
      <div className="Home-main">
        <h2 className="Home-featured">Featured Categories</h2>
        <Link to="/shop" className="Home-shop">Shop All</Link>
        <div className="Categories">
          {categories.map((category, index) => <Category key={index} category={category}/>)}
        </div>
      </div>
    </div>
  );
}

export default Home;