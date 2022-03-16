import "./Card.css";
import pic from "./shoe.png";

const Card = ({ name, price, bgColor }) => {
  return (
    <>
      <div className="card">
        <div className={`product-card ${bgColor}`}>
          <img className="card-image" src={pic} alt={`${name}`} />
        </div>
        <div className="card-details">
          <h4>{name}</h4>
          <h4>{price}</h4>

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
