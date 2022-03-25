import axios from "axios";
import { createContext, useReducer } from "react";
import { useContext, useEffect } from "react";
import wishListReducer from "../reducer/wishlistReducer";
import { useAuth } from "./auth-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { authState } = useAuth();
  const { token } = authState;
  const initialState = [];
  const [wishlistState, wishlistDispatch] = useReducer(
    wishListReducer,
    initialState
  );

  const addToWishList = async (product) => {
    try {
      if (token !== null) {
        console.log("token", token);
        const config = {
          headers: {
            authorization: token,
          },
        };
        const data = {
          product,
        };
        const response = await axios.post("/api/user/wishlist", data, config);
        console.log("response from add to wishlist:", response);

        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: response.data.wishlist,
        });
      } else {
        alert("Please Login to use wishlist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getWishList = async () => {
    if (token !== null) {
      try {
        const config = {
          headers: {
            authorization: token,
          },
        };

        const response = await axios.get("/api/user/wishlist", config);

        wishlistDispatch({
          type: "INITIALIZE",
          payload: response.data.wishlist,
        });

        console.log("response from getWishList:", response);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => getWishList(), [token]);

  return (
    <WishlistContext.Provider
      value={{ wishlistState, wishlistDispatch, addToWishList }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
