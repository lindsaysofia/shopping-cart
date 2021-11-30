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
  const [products, setProducts] = useState([{price: 0}]);
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
    let { value } = e.target;
    if (value === '') {
      setQuantity('');
    } else {
      value = Number(e.target.value);
      if (value < 1) {
        setQuantity(1);
      } else if (value > 10) {
        setQuantity(10);
      } else {
        setQuantity(value);
      }
    }
  };

  const resetQuantity = () => {
    setQuantity(1);
  };

  const displayCart = () => {
    const cartElement = document.querySelector('.Cart');
    cartElement.style.visibility = 'visible';
  }

  const hideCart = () => {
    const cartElement = document.querySelector('.Cart');
    cartElement.style.visibility = 'hidden';
  };

  const handleAdd = (e) => {
    const { id } = e.target.dataset;
    displayCart();
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

  const handleCartQuantityChange = (e) => {
    const { action, id } = e.target.dataset;
    switch(action) {
      case 'decrease':
        setCart((prevCart) => {
          if (prevCart[id] === 1) {
            let newCart = {...prevCart};
            delete newCart[id];
            return newCart;
          } else {
            return {
              ...prevCart,
              [id]: prevCart[id] - 1,
            }
          }
        });
        break;
      case 'manual':
        let value = e.target.value;
        if (value === '') {
          setCart((prevCart) =>{
            return {
              ...prevCart,
              [id]: value,
            }
          });
        } else {
          value = Number(value);
          setCart((prevCart) => {
            if (value < 0 || value > 10) {
              return prevCart;
            } else if (value === 0) {
              let newCart = {...prevCart};
              delete newCart[id];
              return newCart;
            } else {
              return {
                ...prevCart,
                [id]: value,
              }
            }
          });
        }
        break;
      case 'increase':
        setCart((prevCart) => {
          if (prevCart[id] === 10) {
            return prevCart;
          } else {
            return {
              ...prevCart,
              [id]: prevCart[id] + 1,
            }
          }
        });
        break;
      default:
        break;
    }
  }

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
      setProducts([{price: 0}]);
    };
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Navigation cart={cart} products={products} displayCart={displayCart} hideCart={hideCart} handleCartQuantityChange={handleCartQuantityChange} />}>
          <Route index element={<Home categories={categories} filterCategories={filterCategories} />} />
          <Route path="shop" element={<Shop categories={categories} products={products} displayCategories={displayCategories} filterCategories={filterCategories} resetQuantity={resetQuantity}/>} />
          <Route path="shop/:id" element={<Product quantity={quantity} handleQuantityChange={handleQuantityChange} handleAdd={handleAdd}/>} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
