import { Link } from "react-router-dom";
import Category from "./Category";
import '../styles/Home.css';

function Home(props) {
  const { categories, filterCategories } = props;

  return (
    <div className="Home">
      <div className="Home-bg">
      </div>
      <div className="Home-main">
        <h2 className="Home-featured">Featured Categories</h2>
        <Link to="/shop" className="Home-shop" onClick={filterCategories}>Shop All</Link>
        <div className="Categories">
          {categories.map((category, index) => <Category key={index} category={category} filterCategories={filterCategories}/>)}
        </div>
      </div>
    </div>
  );
}

export default Home;