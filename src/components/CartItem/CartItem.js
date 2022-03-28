import { useState } from "react";
import { useCart } from "../../Context/cart-context";
import { useWishlist } from "../../Context/wishlist-context";
import "./cartItem.css";
import pic from "./shoe.png";

const CartItem = ({ name, _id, price, rating, bgColor }) => {
  const { removeFromCart, addToCart } = useCart();
  const { addToWishList } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="horizontal-ecomm-card">
        <div className={`horizontal-card-image-bg ${bgColor}`}>
          <img className="card-image" src={pic} alt="jordan shoe" />
        </div>
        <div className="horizontal-card-details">
          <h3>{name}</h3>
          <h3>${price}</h3>
          <div className="quantity">
            <i
              className="fas fa-minus"
              onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
            ></i>
            <span>
              {" "}
              <strong>{quantity}</strong>{" "}
            </span>

            <i
              className="fas fa-plus "
              onClick={() => {
                setQuantity((prevQuantity) => prevQuantity + 1);
                addToCart({ name, _id, price });
              }}
            ></i>
          </div>

          <button
            onClick={() => {
              addToWishList({ name, _id, price, rating, bgColor });
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
