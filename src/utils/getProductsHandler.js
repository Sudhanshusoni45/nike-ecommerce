import axios from "axios";

const getProductsHandler = async (productDispatch) => {
  try {
    const url = "/api/products";
    const response = await axios.get(url);
    if (response.status === 200) {
      const {
        data: { products },
      } = response;
      productDispatch({ type: "SET_PRODUCTS", payload: products });
    }
  } catch (error) {
    console.error(error);
  }
};

export { getProductsHandler };
