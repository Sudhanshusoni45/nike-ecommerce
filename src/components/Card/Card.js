import "./Card.css";
import pic from "./shoe.png";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="product-card">
          <img className="card-image" src={pic} alt="" />
        </div>
        <div className="card-details">
          <h4>Jordan Zoom</h4>
          <h4>$340</h4>

          <div>
            <i className=" fas fa-star fa-sm"></i>
            <i className=" fas fa-star fa-sm"></i>
            <i className=" fas fa-star fa-sm"></i>
            <i className=" fas fa-star fa-sm"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
