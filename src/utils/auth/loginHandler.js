import { loginService } from "../../services";

const loginHandler = async ({ authDispatch, user, Navigate, location }) => {
  try {
    const response = await loginService({ user });

    if (response.status === 200) {
      const { encodedToken: token } = response.data;
      const { foundUser: user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      authDispatch({
        type: "LOGIN",
        payload: { user, token },
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
