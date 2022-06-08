import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem, Navbar } from "../../components";
import { useCart } from "../../Context/cart-context";

const CartPage = () => {
  const { cartState } = useCart();
  const [billPrice, setBillPrice] = useState(0);
  const Navigate = useNavigate();

  const billHandler = () => {
    let totalPrice = 0;
    cartState.forEach((element) => {
      totalPrice = totalPrice + element.qty * element.price;
    });
    setBillPrice(totalPrice);
  };
  const displayRazorpay = async () => {
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }
    const options = {
      key: "rzp_test_UetVgthB7AKi3k",
      key_id: "rzp_test_UetVgthB7AKi3k",
      key_secret: "vzdbUqbn3UDW081dWSO0lYOm",
      amount: (billPrice - 50) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Nike Ecommerce",
      description: "Test Transaction",
      image: "https://example.com/your_logo",

      handler: function () {
        Navigate("/productlist");
        toast.success("Order Placed Successfully");
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new Razorpay(options);
    paymentObject.open();
  };

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
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
            <button className="btn bg-purple" onClick={displayRazorpay}>
              Place Order
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export { CartPage };
