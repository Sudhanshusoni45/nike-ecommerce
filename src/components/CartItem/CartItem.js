import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { removeFromCartHandler } from "../../utils";
import "./cartItem.css";

const CartItem = ({ name, _id, price, rating, bgColor, qty, productImage }) => {
  const { incrementQuantity, decrementQuantity, cartDispatch } = useCart();
  const {
    authState: { token },
  } = useAuth();
  const { addToWishList } = useWishlist();
  return (
    <>
      <div className="horizontal-ecomm-card">
        <div className={`horizontal-card-image-bg ${bgColor}`}>
          <img className="card-image" src={productImage} alt={name} />
        </div>
        <div className="horizontal-card-details">
          <h3>{name}</h3>
          <h3>${price}</h3>
          <div className="quantity">
            {qty === 1 ? (
              <i
                className="fas fa-trash"
                onClick={() =>
                  removeFromCartHandler({ _id, token, cartDispatch })
                }
              ></i>
            ) : (
              <i
                className="fas fa-minus"
                onClick={() => decrementQuantity(_id)}
              ></i>
            )}
            <span>
              {" "}
              <strong>{qty}</strong>{" "}
            </span>

            <i
              className="fas fa-plus "
              onClick={() => {
                incrementQuantity(_id);
              }}
            ></i>
          </div>

          <button
            onClick={() => {
              addToWishList({
                name,
                _id,
                price,
                rating,
                bgColor,
                productImage,
              });
              removeFromCartHandler({ _id, token, cartDispatch });
            }}
            className="btn"
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export { CartItem };
