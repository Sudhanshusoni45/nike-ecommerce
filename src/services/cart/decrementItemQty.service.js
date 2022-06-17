import axios from "axios";

const decrementQtyService = ({ token, _id }) => {
  const url = `/api/user/cart/${_id}`;
  const data = {
    action: { type: "decrement" },
  };
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.post(url, data, config);
  return response;
};

export { decrementQtyService };
