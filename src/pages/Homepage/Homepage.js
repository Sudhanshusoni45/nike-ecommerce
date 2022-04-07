import { Card, Navbar } from "../../components";
import { heroimage, menCategory, womenCategory } from "../../assests";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div class="hero">
        <img src={heroimage} alt="" />
      </div>

      <div class="category-container">
        <a href="">
          <div class="category-card">
            <img src={womenCategory} alt="" />
          </div>
        </a>

        <div class="category-card men">
          <img src={menCategory} alt="" />
        </div>
      </div>

      <div class="new-arrivals-container">
        <h1>New Arrivals</h1>
        <div class="new-arrivals-grid">
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
