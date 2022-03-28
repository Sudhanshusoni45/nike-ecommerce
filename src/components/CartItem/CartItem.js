import { useCart } from "../../Context/cart-context";
import "./cartItem.css";
import pic from "./shoe.png";

const CartItem = ({ name, _id, price, rating }) => {
  const { removeFromCart } = useCart();
  return (
    <>
      <div className="horizontal-ecomm-card">
        <div className="horizontal-card-image-bg">
          <img className="card-image" src={pic} alt="jordan shoe" />
        </div>
        <div className="horizontal-card-details">
          <h3>{name}</h3>
          <h3>${price}</h3>
          <div className="quantity">
            <i className="fas fa-minus"></i>
            <span>
              {" "}
              <strong>1</strong>{" "}
            </span>

            <i className="fas fa-plus"></i>
          </div>

          <button onClick={() => removeFromCart(_id)} className="btn">
            Move to Wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export { CartItem };
