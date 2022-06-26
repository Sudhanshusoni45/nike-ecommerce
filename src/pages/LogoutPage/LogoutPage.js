import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { useAuth } from "../../context/auth-context";
import "./logoutPage.css";

const LogoutPage = () => {
  const {
    authDispatch,
    authState: {
      user: { firstName, lastName, email },
    },
  } = useAuth();
  const Navigate = useNavigate();
  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT", payload: { user: null, token: null } });
    localStorage.clear();
    Navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="profile-page-container">
        <div className="profile-container">
          <div className="profile">
            <h2 className="profile-page-heading">Profile Details</h2>
            <div>
              <div>
                <h3 className="display-inline-block ">Name : </h3>
                <span>
                  {firstName} {lastName}
                </span>
              </div>
              <div>
                <h3 className="display-inline-block">Email : </h3>
                <span> {email}</span>
              </div>
            </div>
            <h2 className="profile-page-heading">Account</h2>
            <button className="btn logout-btn " onClick={() => logoutHandler()}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { LogoutPage };
