/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
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
  }, []);

  return (
    <div className="Home">
      <div className="Home-bg">
      </div>
      <div className="Home-main">
        <h2 className="Home-featured">Featured Categories</h2>
        <a href="#" className="Home-shop">Shop All</a>
        <div className="Categories">
          {categories.map((category, index) => <Category key={index} category={category}/>)}
        </div>
      </div>
    </div>
  );
}

export default Home;