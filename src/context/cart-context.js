import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
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
      if (response.status == 200) {
        cartDispatch({
          type: "INITIALIZE",
          payload: { products: response.data.cart },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const alreadyInCart = (_id) => {
    let flag = false;
    cartState.map((item) => {
      if (item._id === _id) {
        flag = true;
      }
    });
    return flag;
  };

  const addToCart = async (product) => {
    try {
      const itemInCart = alreadyInCart(product._id);

      if (itemInCart) {
        console.log("if ran");
        const data = {
          action: {
            type: "increment",
          },
        };

        const config = {
          headers: {
            authorization: token,
          },
        };
        const response = await axios.post(
          `/api/user/cart/${product._id}`,
          data,
          config
        );

        cartDispatch({
          type: "ADD_TO_CART",
          payload: { products: response.data.cart },
        });
      } else {
        console.log("else ran");

        const data = { product };
        const config = {
          headers: {
            authorization: token,
          },
        };
        const response = await axios.post("/api/user/cart", data, config);
        cartDispatch({
          type: "ADD_TO_CART",
          payload: { products: response.data.cart },
        });
      }
      toast.success("Item added to cart");
    } catch (err) {
      console.log("addtocart catch");
      console.error(err);
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
    } catch (err) {
      console.error(err);
    }
  };

  const incrementQuantity = async (_id) => {
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: { type: "increment" },
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
      console.error(err);
    }
  };

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

  useEffect(() => getCart(), []);

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
