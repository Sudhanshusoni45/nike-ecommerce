import { signupService } from "../../services";

const signupHandler = async ({ authDispatch, newUser, Navigate }) => {
  try {
    const response = await signupService(newUser);

    if (response.status === 201) {
      const { encodedToken: token } = response.data;
      const { createdUser: user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      authDispatch({
        type: "SIGNUP",
        payload: { user, token },
      });

      Navigate("/");
    }
  } catch (err) {
    console.error(err);
  }
};

export { signupHandler };
