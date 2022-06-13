import axios from "axios";

const getCartService = (token) => {
  console.log("token:", token);
  const url = "/api/user/cart";
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.get(url, config);
  return response;
};

export { getCartService };
