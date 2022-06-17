import { decrementQtyService } from "../../services";

const decrementItemQtyHandler = async ({ token, _id, cartDispatch }) => {
  try {
    const response = await decrementQtyService({ token, _id });
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

export { decrementItemQtyHandler };
