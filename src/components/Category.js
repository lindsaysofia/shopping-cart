import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Category.css';

function Category(props) {
  const { category, filterCategories } = props;
  const [data, setData] = useState([{}]);

  async function getCategoryData() {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=1`, {mode: 'cors'});
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() =>{
    getCategoryData();
    return () => {
      setData([{}]);
    };
  }, []);

  return (
    <Link 
      to="/shop" 
      data-category={category}
      data-parent="home"
      className="Category" 
      onClick={filterCategories}
    >
      <img 
        src={data[0].image} 
        alt="" 
        className="Category-img" 
        data-category={category}
        data-parent="home"
      />
      <p 
        className="Category-description"
        data-category={category}
        data-parent="home"
      >
        {category}
      </p>
    </Link>
  );
}

export default Category;