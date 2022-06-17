import { createContext, useContext, useReducer, useEffect } from "react";
import cartReducer from "../reducer/cartReducer";
import { useAuth } from "./auth-context";

const CartContext = createContext();
const initialState = [];

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  console.log("cartState:", cartState);
  const { authState } = useAuth();

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
