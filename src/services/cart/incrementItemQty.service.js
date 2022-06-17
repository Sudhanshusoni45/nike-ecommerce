import axios from "axios";

const incrementItemQtyService = ({ _id, token }) => {
  const url = `/api/user/cart/${_id}`;
  const data = {
    action: { type: "increment" },
  };
  const config = {
    headers: {
      authorization: token,
    },
  };
  const response = axios.post(url, data, config);
  return response;
};

export { incrementItemQtyService };
