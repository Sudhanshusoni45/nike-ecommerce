import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import cartReducer from "../reducer/cartReducer";
import { useAuth } from "./auth-context";

const CartContext = createContext();
const initialState = [];

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  console.log("cartState:", cartState);
  const { authState } = useAuth();
  const { token } = authState;

  const decrementQuantity = async (_id) => {
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: { type: "decrement" },
        },
        config
      );
      if (response.status === 200) {
        cartDispatch({
          type: "UPDATE",
          payload: { products: response.data.cart },
        });
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
