import axios from "axios";

const addToCartService = (product, token) => {
  const url = `/api/user/cart`;
  const config = {
    headers: {
      authorization: token,
    },
  };
  //   const data = {
  //     action: {
  //       type: "increment",
  //     },
  //   };
  const data = { product };
  const response = axios.post(url, data, config);
  return response;
};

export { addToCartService };
