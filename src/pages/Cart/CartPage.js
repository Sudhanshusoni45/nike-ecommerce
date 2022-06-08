import { useEffect } from "react";
import { useState } from "react";
import { CartItem, Navbar } from "../../components";
import { useCart } from "../../Context/cart-context";

const CartPage = () => {
  const { cartState } = useCart();
  const [billPrice, setBillPrice] = useState(0);

  const billHandler = () => {
    let totalPrice = 0;
    cartState.forEach((element) => {
      totalPrice = totalPrice + element.qty * element.price;
    });
    setBillPrice(totalPrice);
  };

  useEffect(billHandler, [cartState]);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-item-container">
          {cartState.length !== 0 ? (
            cartState.map(({ name, _id, price, rating, bgColor, qty }) => (
              <li key={_id}>
                <CartItem
                  name={name}
                  price={price}
                  rating={rating}
                  _id={_id}
                  bgColor={bgColor}
                  qty={qty}
                />
              </li>
            ))
          ) : (
            <h1>
              Feels very empty in here, add items to cart to fill this place
              up...
            </h1>
          )}
        </div>
        {cartState.length !== 0 ? (
          <div className="price-details">
            <h3>Price Details</h3>
            <div className="price-details-grid">
              <span>Price</span>
              <span>{billPrice}</span>
              <span>Discount</span>
              <span>$50</span>
              <span>Delivery Charges</span>
              <span>FREE</span>
              <h3>Total Amount</h3>
              <h3>{billPrice - 50}</h3>
            </div>
            <p>You will save $50 on this order</p>
            <button className="btn bg-purple">Place Order</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export { CartPage };
