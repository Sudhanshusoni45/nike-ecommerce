import { Card, Footer, Navbar } from "../../components";
import {
  heroimage,
  menCategory,
  womenCategory,
  nikeAirBanner,
  nike_jordan_category,
  nike_running_category,
  football_banner,
} from "../../assests";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={nikeAirBanner} alt="" />
      </div>

      <div className="category-container">
        <div className="category-card">
          <img src={nike_jordan_category} alt="" className="category-image" />
          <h2 className="category-name">Jordans</h2>
          <Link to={"/productlist"}>
            <button className="btn bg-black category-card-button">
              Shopnow
            </button>
          </Link>
        </div>

        <div className="category-card">
          <img src={nike_running_category} alt="" className="category-image" />
          <h2 className="category-name">Running</h2>
          <Link to={"/productlist"}>
            <button className="btn bg-black category-card-button">
              Shopnow
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="new-arrivals-container">
        <h1>New Arrivals</h1>
        <div className="new-arrivals-grid">
          <Card name={"New Arrival"} price={"100"} rating={4} />
          <Card name={"New Arrival"} price={"100"} rating={4} />
          <Card name={"New Arrival"} price={"100"} rating={4} />
          <Card name={"New Arrival"} price={"100"} rating={4} />
          <Card name={"New Arrival"} price={"100"} rating={4} />
        </div>
      </div> */}
      <div className="banner-second">
        <img src={football_banner} alt="" className="banner-second-image" />
      </div>
      <Footer />
    </>
  );
};

export { Homepage };
