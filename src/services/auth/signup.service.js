import axios from "axios";

const signupService = (newUser) => {
  const url = "api/auth/signup";
  const data = newUser;

  const response = axios.post(url, data);
  return response;
};

export { signupService };
