import "./cartItem.css";

const CartItem = () => {
  return (
    <>
      {/* <div className="cart-container"> */}
      <div className="horizontal-ecomm-card">
        <div className="horizontal-card-image-bg">
          <img
            className="card-image"
            src="./jordan-zoom-separate-pf-basketball-shoes-kGPg2r-removebg.png"
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
      {/* </div> */}
    </>
  );
};

export { CartItem };
