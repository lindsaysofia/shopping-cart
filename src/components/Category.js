/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import '../styles/Category.css';

function Category(props) {
  const { category } = props;
  const [data, setData] = useState([{}]);

  async function getCategoryData() {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=1`, {mode: 'cors'});
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() =>{
    getCategoryData();
    console.log(data);
  }, []);

  return (
    <a href="#" className="Category">
      <img src={data[0].image} alt="" className="Category-img"/>
      <p className="Category-description">{category}</p>
    </a>
  );
}

export default Category;