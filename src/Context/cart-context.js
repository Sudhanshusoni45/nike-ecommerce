import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import cartReducer from "../reducer/cartReducer";
import { useAuth } from "./auth-context";

const CartContext = createContext();
const initialState = [];

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const { authState } = useAuth();
  const { token } = authState;

  const getCart = async () => {
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.get("/api/user/cart", config);
      console.log("response:", response);
      if (response.status == 200) {
        cartDispatch({
          type: "INITIALIZE",
          payload: { products: response.data.cart },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async (product) => {
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };

      const data = { product };
      const response = await axios.post("/api/user/cart", data, config);
      console.log("response:", response);
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { products: response.data.cart },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromCart = async (_id) => {
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.delete(`/api/user/cart/${_id}`, config);
      if (response.status === 200) {
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: { products: response.data.cart },
        });
      }
      console.log("response:", response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getCart(), []);

  return (
    <CartContext.Provider
      value={{ cartState, cartDispatch, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
