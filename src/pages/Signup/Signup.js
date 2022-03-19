import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="login-component">
        <form action="" className="login-form">
          <h1>SignUp</h1>
          <div className="input-group">
            <label htmlFor="Email">First Name</label>
            <input type="text" />
            <label htmlFor="Email">Last Name</label>
            <input type="text" />
            <label htmlFor="Email">Email Address</label>
            <input type="text" />
            <label htmlFor="Password">Password</label>
            <input type="text" />
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
          <Link to={"/login"}>Already have an account ? Login instead</Link>

          <button className="btn login-btn">SignUp</button>
        </form>
      </div>
    </>
  );
};

export default Signup;