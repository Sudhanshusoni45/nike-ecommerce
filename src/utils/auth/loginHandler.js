import { loginService } from "../../services";

const loginHandler = async ({ authDispatch, user, Navigate }) => {
  try {
    const response = await loginService({ user });

    if (response.status === 200) {
      const { encodedToken: token } = response.data;
      const { foundUser } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(foundUser));

      authDispatch({
        type: "LOGIN",
        payload: { user: foundUser, token: token },
      });

      Navigate(location?.state?.from?.pathname || "/", {
        replace: true,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export { loginHandler };
