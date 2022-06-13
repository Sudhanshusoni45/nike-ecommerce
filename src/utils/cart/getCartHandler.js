import { getCartService } from "../../services";

const getCartHandler = async ({ token, cartDispatch }) => {
  try {
    const response = await getCartService(token);
    console.log("response:", response);
    if (response.status === 200) {
      cartDispatch({
        type: "INITIALIZE",
        payload: { products: response.data.cart },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export { getCartHandler };
