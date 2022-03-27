import { CartItem, Navbar } from "../../components";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div class="cart-container">
        <div className="cart-item-container">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="price-details">
          <h3>Price Details</h3>
          <div className="price-details-grid">
            <span>Price</span>
            <span>$200</span>
            <span>Discount</span>
            <span>$50</span>
            <span>Delivery Charges</span>
            <span>0</span>
            <h3>Total Amount</h3>
            <h3>$150</h3>
          </div>
          <p>You will save $50 on this order</p>
          <button className="btn bg-purple">Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
