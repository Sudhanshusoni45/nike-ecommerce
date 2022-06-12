import { Footer, Navbar } from "../../components";
import {
  nikeAirBanner,
  nike_jordan_category,
  nike_running_category,
  football_banner,
} from "../../assests";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { useFilters } from "../../Context/filter-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getProductsHandler } from "../../utils";
import { useProducts } from "../../Context/product-context";

const Homepage = () => {
  const { filterDispatch } = useFilters();
  const Navigate = useNavigate();
  const { productDispatch } = useProducts();

  const showCategoryProducts = (type) => {
    filterDispatch({ type: "RESET" });
    filterDispatch({ type: type, payload: true });
    Navigate("/productlist");
  };

  useEffect(() => getProductsHandler(productDispatch), []);

  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={nikeAirBanner} alt="" className="hero_banner_image" />
        <button
          className="all_products_btn btn"
          onClick={() => Navigate("/productlist")}
        >
          See All Product
        </button>
      </div>

      <div className="category-container">
        <div
          className="category-card"
          onClick={() => showCategoryProducts("JORDANS")}
        >
          <img
            src={nike_jordan_category}
            alt="jordan shoe category"
            className="category-image"
          />
          <h2 className="category-name">Jordans</h2>
          <Link to={"/productlist"}>
            <button className="btn bg-black category-card-button">
              Shopnow
            </button>
          </Link>
        </div>

        <div
          className="category-card"
          onClick={() => showCategoryProducts("RUNNING")}
        >
          <img src={nike_running_category} alt="" className="category-image" />
          <h2 className="category-name">Running</h2>
          <Link to={"/productlist"}>
            <button className="btn bg-black category-card-button">
              Shopnow
            </button>
          </Link>
        </div>
      </div>

      <div
        className="banner-second"
        onClick={() => showCategoryProducts("FOOTBALL")}
      >
        <img
          src={football_banner}
          alt="foot ball shoes"
          className="banner-second-image"
        />
      </div>
      <Footer />
    </>
  );
};

export { Homepage };
