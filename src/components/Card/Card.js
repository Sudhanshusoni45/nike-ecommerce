import { useWishlist } from "../../Context/wishlist-context";
import "./Card.css";
import pic from "./shoe.png";

const Card = ({ _id, name, price, bgColor, inWishList, rating }) => {
  const { addToWishList } = useWishlist();

  const ratingStar = () => {
    const starArr = [];
    for (let i = 0; i < rating; i++) {
      starArr.push(i);
    }
    return starArr;
  };

  const starArr = ratingStar();

  return (
    <>
      <div className="card">
        <div className={`product-card ${bgColor}`}>
          <div className="badge">
            {inWishList && (
              <i
                className="fas fa-heart wishlist-heart"
                onClick={() => {
                  deleteFromWishlist(_id);
                }}
              ></i>
            )}

            {!inWishList && (
              <i
                className="fa fa-heart-o wishlist-heart"
                aria-hidden="true"
                onClick={() => {
                  addToWishList({
                    _id,
                    name,
                    price,
                    bgColor,
                    inWishList,
                    rating,
                  });
                }}
              ></i>
            )}
          </div>
          <img className="card-image" src={pic} alt={`${name}`} />
        </div>
        <div className="card-details">
          <h4>{name}</h4>
          <h4>${price}</h4>
          <div>
            {starArr.map((item) => (
              <i className=" fas fa-star fa-sm"></i>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
