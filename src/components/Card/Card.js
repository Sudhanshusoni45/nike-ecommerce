import { useState } from "react";
import { useEffect } from "react";
import { useWishlist } from "../../Context/wishlist-context";
import "./Card.css";
import pic from "./shoe.png";

const Card = ({ _id, name, price, bgColor, rating }) => {
  const { addToWishList, wishlistState } = useWishlist();
  const [inWishlist, setInWishlist] = useState(false);

  const checkInWishlist = () => {
    wishlistState.map((item) =>
      item._id === _id ? setInWishlist(true) : null
    );
  };

  useEffect(() => checkInWishlist(), [wishlistState]);

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
            {inWishlist && (
              <i
                className="fas fa-heart wishlist-heart"
                onClick={() => {
                  setInWishlist(false);
                  deleteFromWishlist(_id);
                }}
              ></i>
            )}

            {!inWishlist && (
              <i
                className="fa fa-heart-o wishlist-heart"
                aria-hidden="true"
                onClick={() => {
                  addToWishList({
                    _id,
                    name,
                    price,
                    bgColor,
                    inWishlist,
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
