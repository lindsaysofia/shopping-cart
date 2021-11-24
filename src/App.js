import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Shop from "./components/Shop";
import About from "./components/About";
import Product from './components/Product';
import { useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([{}]);

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home categories={categories}/>} />
          <Route path="shop" element={<Shop categories={categories} products={products}/>} />
          <Route path="shop/:id" element={<Product />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
