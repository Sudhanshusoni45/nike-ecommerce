import "./login.css";
import { Navbar } from "../../components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/auth-context";

const Login = () => {
  const location = useLocation();
  console.log("location:", location);
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "sudhanshu@gmail.com",
    password: "sudhanshu",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: `${user.email}`,
        password: `${user.password}`,
      });
      console.log(response);

      const { status } = response;
      const { encodedToken: token } = response.data;
      const { foundUser } = response.data;

      if (status === 200) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(foundUser));

        authDispatch({
          type: "LOGIN",
          payload: { user: foundUser, token: token },
        });
        navigate(location?.state?.from?.pathname || "/", {
          replace: true,
        });
      } else if (status === 404) {
        throw new Error("Email is not registered");
      } else if (status === 401) {
        throw new Error("Password incorrect");
      } else if (status === 500) {
        throw new Error("Server Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log("locattion from login", location);

  return (
    <>
      <Navbar />
      <div className="login-component">
        <form action="" className="login-form" onSubmit={loginHandler}>
          <h1>Login</h1>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
            />

            <label htmlFor="Password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={user.password}
              onChange={changeHandler}
            />
          </div>

          <div>
            <input type="checkbox" name="rememberMe" />
            <label className="margin-left-xxs" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="">
            <small>Forgot your password</small>
          </a>
          <Link to={"/signup"}> New here? Create a new account </Link>

          <button className="btn login-btn">Login</button>
        </form>
      </div>
    </>
  );
};

export { Login };
