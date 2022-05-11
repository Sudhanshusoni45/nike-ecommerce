import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/wishlist-context";
import pic from "./shoe.png";

const Card = ({ _id, name, price, bgColor, rating, fromWishlist }) => {
  const { addToWishList, wishlistState, deleteFromWishlist } = useWishlist();
  const [inWishlist, setInWishlist] = useState(fromWishlist);
  const { addToCart } = useCart();
  const checkInWishlist = () => {
    wishlistState.map((item) =>
      item._id === _id ? setInWishlist(true) : null
    );
  };

  useEffect(() => checkInWishlist(), []);

  const ratingStar = () => {
    const starArr = [];
    for (let i = 0; i < rating; i++) {
      starArr.push(i);
    }
    return starArr;
  };
  const Navigate = useNavigate();
  const starArr = ratingStar();

  return (
    <>
      <div
        className="card"
        onClick={() => Navigate(`/singleproductpage/${_id}`)}
      >
        <div className={`product-card ${bgColor}`}>
          <div className="badge">
            {inWishlist && (
              <i
                className="fas fa-heart wishlist-heart"
                onClick={() => {
                  fromWishlist ? null : setInWishlist(false);
                  deleteFromWishlist(_id);
                }}
              ></i>
            )}

            {!inWishlist && (
              <i
                className="fa fa-heart-o wishlist-heart"
                aria-hidden="true"
                onClick={() => {
                  setInWishlist(true);

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
              <i key={item} className=" fas fa-star fa-sm"></i>
            ))}
          </div>
        </div>
        {fromWishlist ? (
          <button
            onClick={() => {
              addToCart({ _id, name, price, bgColor, inWishlist, rating });
              deleteFromWishlist(_id);
            }}
            className="addToCart-btn btn"
          >
            Move to Cart
          </button>
        ) : (
          <button
            onClick={() =>
              addToCart({ _id, name, price, bgColor, inWishlist, rating })
            }
            className="addToCart-btn btn"
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

export { Card };
