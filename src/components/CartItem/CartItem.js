import { useState } from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import "./cartItem.css";
import pic from "./shoe.png";

const CartItem = ({ name, _id, price, rating, bgColor, qty, productImage }) => {
  const { removeFromCart, addToCart, incrementQuantity, decrementQuantity } =
    useCart();
  const { addToWishList } = useWishlist();
  const [quantity, setQuantity] = useState(1);
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
                onClick={() => removeFromCart(_id)}
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
              removeFromCart(_id);
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
