import axios from "axios";
import { createContext, useReducer } from "react";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
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
        const config = {
          headers: {
            authorization: token,
          },
        };

        const data = {
          product,
        };

        const response = await axios.post("/api/user/wishlist", data, config);

        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: response.data.wishlist,
        });
        toast.success("Item added to wishlist");
      } else {
        toast.warning("please login to add items to wishlist");
      }
    } catch (err) {
      console.error(err);
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
      } catch (err) {
        console.error(err);
      }
    }
  };

  const deleteFromWishlist = async (_id) => {
    try {
      const config = {
        headers: {
          authorization: token,
        },
      };
      const response = await axios.delete(`/api/user/wishlist/${_id}`, config);
      wishlistDispatch({ type: "DELETE", payload: response.data.wishlist });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => getWishList(), [token]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        addToWishList,
        deleteFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
