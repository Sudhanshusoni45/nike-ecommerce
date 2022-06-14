import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useAuth } from "../../context/auth-context";
import { addToCartHandler } from "../../utils";

const Card = ({
  _id,
  name,
  price,
  bgColor,
  rating,
  fromWishlist,
  productImage,
}) => {
  const { addToWishList, wishlistState, deleteFromWishlist } = useWishlist();
  const [inWishlist, setInWishlist] = useState(fromWishlist);
  const { cartState, cartDispatch } = useCart();
  const checkInWishlist = () => {
    wishlistState.map((item) =>
      item._id === _id ? setInWishlist(true) : null
    );
  };
  const {
    authState: { token },
  } = useAuth();
  const Navigate = useNavigate();

  useEffect(() => checkInWishlist(), []);

  const ratingStar = () => {
    const starArr = [];
    for (let i = 0; i < rating; i++) {
      starArr.push(i);
    }
    return starArr;
  };
  const starArr = ratingStar();

  const checkProductInCart = (_id) => {
    return cartState.some((item) => item._id === _id);
  };

  return (
    <>
      <div
        className="card"
        onClick={(e) => {
          Navigate(`/singleproductpage/${_id}`);
        }}
      >
        <div className={`product-card ${bgColor}`}>
          <div className="badge">
            {inWishlist && (
              <i
                className="fas fa-heart wishlist-heart"
                onClick={(e) => {
                  fromWishlist ? null : setInWishlist(false);
                  deleteFromWishlist(_id);
                  e.stopPropagation();
                }}
              ></i>
            )}

            {!inWishlist && (
              <i
                className="fa fa-heart-o wishlist-heart"
                aria-hidden="true"
                onClick={(e) => {
                  setInWishlist(true);

                  addToWishList({
                    _id,
                    name,
                    price,
                    bgColor,
                    inWishlist,
                    rating,
                    productImage,
                  });
                  e.stopPropagation();
                }}
              ></i>
            )}
          </div>
          <img className="card-image" src={productImage} alt={`${name}`} />
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
            onClick={(e) => {
              addToCartHandler(
                {
                  _id,
                  name,
                  price,
                  bgColor,
                  inWishlist,
                  rating,
                  productImage,
                },
                cartDispatch,
                token
              );
              deleteFromWishlist(_id);
              e.stopPropagation();
            }}
            className="addToCart-btn btn"
          >
            Move to Cart
          </button>
        ) : (
          <div>
            {checkProductInCart(_id) ? (
              <button
                onClick={(e) => {
                  Navigate("/cart");
                  e.stopPropagation();
                }}
                className="addToCart-btn btn"
              >
                Go to Cart
              </button>
            ) : (
              <button
                onClick={(e) => {
                  {
                    token
                      ? addToCartHandler(
                          {
                            _id,
                            name,
                            price,
                            bgColor,
                            inWishlist,
                            rating,
                            productImage,
                          },
                          cartDispatch,
                          token
                        )
                      : Navigate("/login");
                  }
                  e.stopPropagation();
                }}
                className="addToCart-btn btn"
              >
                Add to Cart
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export { Card };
