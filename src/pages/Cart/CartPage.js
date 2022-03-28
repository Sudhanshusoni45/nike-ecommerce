import { CartItem, Navbar } from "../../components";
import { useCart } from "../../Context/cart-context";

const CartPage = () => {
  const { cartState } = useCart();
  console.log("cartState:", cartState);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-item-container">
          {cartState.length !== 0
            ? cartState.map(({ name, _id, price, rating, bgColor }) => (
                <CartItem
                  name={name}
                  price={price}
                  rating={rating}
                  _id={_id}
                  bgColor={bgColor}
                />
              ))
            : null}
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

export { CartPage };
