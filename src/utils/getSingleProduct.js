import axios from "axios";

const getSingleProduct = async ({ productId, setProduct }) => {
  try {
    const url = `/api/products/${productId}`;
    const response = await axios.get(url);
    console.log("response:", response);
    if (response.status === 200) {
      const {
        data: { product },
      } = response;
      setProduct((prevProduct) => product);
    }
  } catch (error) {
    console.error(error);
  }
};

export { getSingleProduct };
