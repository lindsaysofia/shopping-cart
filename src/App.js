import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Shop from "./components/Shop";
import About from "./components/About";
import Product from './components/Product';
import { useEffect, useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([{}]);
  const [ displayCategories, setDisplayCategories ] = useState([]);
  const [cart, setCart] = useState({});

  async function getCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories', {mode: 'cors'});
    const data = await response.json();
    setCategories(data);
    setDisplayCategories(data);
  }

  async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products', {mode: 'cors'});
    const data = await response.json();
    setProducts(data);
  }

  const filterCategories = (e) => {
    const { category, parent } = e.target.dataset;
    if (parent === 'home'){
      setDisplayCategories([category]);
    } else if (parent === 'shop') {
      const checked = e.target.checked;
      if (checked) {
        setDisplayCategories((prevDisplayCategories) => {
          const copy = prevDisplayCategories.slice();
          copy.push(category);
          return copy;
        });
      } else {
        setDisplayCategories((prevDisplayCategories) => {
          let copy = prevDisplayCategories.slice();
          copy = copy.filter(element => element !== category);
          return copy;
        });
      }
    } else {
      setDisplayCategories(categories);
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAdd = (e) => {
    const { id } = e.target.dataset;
    setCart((prevCart) => {
      if (id in prevCart) {
        console.log(prevCart[id], quantity);
        return {
          ...prevCart,
          [id]: prevCart[id] + quantity,
        }
      } else {
        return {
          ...prevCart,
          [id]: quantity,
        }
      }
    });
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    getCategories();
    return () => {
      setCategories([]);
      setDisplayCategories([]);
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
          <Route index element={<Home categories={categories} filterCategories={filterCategories} />} />
          <Route path="shop" element={<Shop categories={categories} products={products} displayCategories={displayCategories} filterCategories={filterCategories}/>} />
          <Route path="shop/:id" element={<Product quantity={quantity} handleQuantityChange={handleQuantityChange} handleAdd={handleAdd}/>} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
