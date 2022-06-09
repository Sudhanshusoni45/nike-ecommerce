import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../../components";
import axios from "axios";
import { useAuth } from "../../Context/auth-context";
const Signup = () => {
  const [newUser, setNewUser] = useState("");
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/auth/signup", {
        email: newUser.email,
        password: newUser.password,
      });

      const { status } = response;
      const { encodedToken: token } = response.data;
      const { createdUser } = response.data;

      if (status === 201) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(createdUser));

        authDispatch({
          type: "SIGNUP",
          payload: { user: createdUser, token: token },
        });

        navigate("/");
      } else if (status === 422) {
        throw new Error("Email already exists");
      } else if (status === 500) {
        throw new Error("Server Error");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-component">
        <form action="" className="login-form" onSubmit={submitHandler}>
          <h1>SignUp</h1>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={newUser.firstName}
              onChange={changeHandler}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={newUser.lastName}
              onChange={changeHandler}
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              value={newUser.email}
              onChange={changeHandler}
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              name="password"
              value={newUser.password}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label className="margin-left-xxs" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="">
            <small>Forgot your password</small>
          </a>
          <Link to={"/login"}>Already have an account ? Login instead</Link>

          <button className="btn login-btn">SignUp</button>
        </form>
      </div>
    </>
  );
};

export { Signup };
