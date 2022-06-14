import { toast } from "react-toastify";
import { addToCartService } from "../../services";

const addToCartHandler = async (product, cartDispatch, token) => {
  const alreadyInCart = (_id) => {
    let flag = false;
    cartState.map((item) => {
      if (item._id === _id) {
        flag = true;
      }
    });
    return flag;
  };
  try {
    // const itemInCart = alreadyInCart(product._id);
    const response = await addToCartService(product, token);
    {
      // if (itemInCart) {
      //   cartDispatch({
      //     type: "ADD_TO_CART",
      //     payload: { products: response.data.cart },
      //   });
      // } else {
      //   console.log("else ran");
      //   const response = await axios.post("/api/user/cart", data, config);
    }
    if (response.status === 201) {
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

export { addToCartHandler };
