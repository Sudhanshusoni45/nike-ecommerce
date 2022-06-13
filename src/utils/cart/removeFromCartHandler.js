import { removeFromCartService } from "../../services";

const removeFromCartHandler = async ({ _id, token, cartDispatch }) => {
  try {
    const response = await removeFromCartService({ _id, token });
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

export { removeFromCartHandler };
