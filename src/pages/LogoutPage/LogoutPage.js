import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";

const LogoutPage = () => {
  const { authDispatch } = useAuth();
  const Navigate = useNavigate();
  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT", payload: { user: null, token: null } });
    localStorage.clear();
    Navigate("/login");
  };
  return (
    <>
      <Navbar />
      <button className="btn" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};

export { LogoutPage };
