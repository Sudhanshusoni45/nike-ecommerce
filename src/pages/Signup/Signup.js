import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";
import { signupHandler } from "../../utils";
const Signup = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { authDispatch } = useAuth();
  const Navigate = useNavigate();

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signupHandler({ authDispatch, newUser, Navigate });
  };

  const testCredsHandler = () => {
    setNewUser((prevState) => ({
      firstName: "sudhanshu",
      lastName: "soni",
      email: "sudhanshusoni@gmail.com",
      password: "sudhanshu@123",
    }));
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

          <Link to={"/login"}>
            <span className="login_instead_link">
              Already have an account ? Login instead
            </span>
          </Link>
          <button className="btn auth-btn" onClick={testCredsHandler}>
            Test Creadentials
          </button>
          <button className="btn auth-btn">SignUp</button>
        </form>
      </div>
    </>
  );
};

export { Signup };
