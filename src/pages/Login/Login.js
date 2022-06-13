import "./login.css";
import { Navbar } from "../../components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { loginHandler } from "../../utils";

const Login = () => {
  const location = useLocation();
  const { authDispatch } = useAuth();
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    email: "johndoe@gmail.com",
    password: "johnDoe123",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    loginHandler({ authDispatch, user, Navigate });
  };
  return (
    <>
      <Navbar />
      <div className="login-component">
        <form action="" className="login-form">
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

          <button className="btn auth-btn" onClick={clickHandler}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export { Login };
