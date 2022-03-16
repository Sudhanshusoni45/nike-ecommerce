import "./login.css";

const Login = () => {
  return (
    <div className="login-component">
      <form action="" className="login-form">
        <h1>Login</h1>
        <div className="input-group">
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
        <button className="btn login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
