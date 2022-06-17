import { incrementItemQtyService } from "../../services";

const incrementItemQtyHandler = async ({ token, _id, cartDispatch }) => {
  try {
    const response = await incrementItemQtyService({ _id, token });
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

export { incrementItemQtyHandler };
