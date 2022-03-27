import "./cartItem.css";
import pic from "./shoe.png";

const CartItem = () => {
  return (
    <>
      <div className="horizontal-ecomm-card">
        <div className="horizontal-card-image-bg">
          <img
            className="card-image"
            src={pic}
            alt="jordan shoe"
          />
        </div>
        <div className="horizontal-card-details">
          <h3>Jordan Zoom</h3>
          <h3>$340</h3>
          <div className="quantity">
            <i className="fas fa-plus"></i>
            <span>
              {" "}
              <strong>1</strong>{" "}
            </span>

            <i className="fas fa-minus"></i>
          </div>
          <button className="btn">Remove from Cart</button>
        </div>
      </div>
    </>
  );
};

export { CartItem };
