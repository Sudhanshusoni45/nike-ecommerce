import { Card, Navbar } from "../../components";
import { heroimage, menCategory, womenCategory } from "../../assests";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={heroimage} alt="" />
      </div>

      <div className="category-container">
        <div className="category-card">
          <img src={womenCategory} alt="" />
          <Link to={"/productlist"}>
            <button className="btn bg-black">Shopnow</button>
          </Link>
        </div>

        <div className="category-card men">
          <img src={menCategory} alt="" />
          <Link to={"/productlist"}>
            <button className="btn bg-black">Shopnow</button>
          </Link>
        </div>
      </div>

      <div className="new-arrivals-container">
        <h1>New Arrivals</h1>
        <div className="new-arrivals-grid">
          <Card name={"New Arrival"} price={"100"} rating={4} />
          <Card name={"New Arrival"} price={"100"} rating={4} />
          <Card name={"New Arrival"} price={"100"} rating={4} />
          <Card name={"New Arrival"} price={"100"} rating={4} />
          <Card name={"New Arrival"} price={"100"} rating={4} />
          <Card name={"New Arrival"} price={"100"} rating={4} />
        </div>
      </div>
    </>
  );
};

export { Homepage };
