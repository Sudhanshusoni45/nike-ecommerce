import axios from "axios";

const loginService = async ({ user }) => {
  const url = "/api/auth/login";
  const data = user;
  const response = axios.post(url, data);
  return response;
};

export { loginService };
