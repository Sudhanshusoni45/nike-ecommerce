import { toast } from "react-toastify";
import { addToCartService } from "../../services";

const addToCartHandler = async (product, cartDispatch, token) => {
  try {
    // const alreadyInCart = (_id) => {
    //   let res = cartState.some((item) => item._id === _id);
    //   console.log("res:", res);
    //   return res;
    // };

    // if (alreadyInCart(product._id)) {
    //   toast.warning("Item already in cart");
    // }
    const response = await addToCartService(product, token);

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
