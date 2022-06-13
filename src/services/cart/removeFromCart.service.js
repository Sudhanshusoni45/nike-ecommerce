import axios from "axios";

const removeFromCartService = ({ _id, token }) => {
  const url = `/api/user/cart/${_id}`;
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.delete(url, config);
  return response;
};

export { removeFromCartService };
