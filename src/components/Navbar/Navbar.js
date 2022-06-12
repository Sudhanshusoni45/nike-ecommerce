import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import "./navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const {
    authState: { token, user },
  } = useAuth();
  const searchBarHandler = (e) => {
    setSearchQuery((prevQuery) => e.target.value);
  };
  const { pathname } = useLocation();
  return (
    <header
      className={
        pathname === "/productlist" ? "extra_padding header" : "header"
      }
    >
      <div className="logo">
        <Link to="/">
          <h2>Nike</h2>
        </Link>
      </div>
      {pathname === "/productlist" ? (
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          onChange={searchBarHandler}
          value={searchQuery}
        />
      ) : null}
      <nav>
        <Link to={token ? "/logout" : "/login"}>
          <i className="fas fa-user fa-lg margin-right-xxs"></i>
          <span className="margin-right-xxs">
            {token !== null ? user.firstName : "Login"}
          </span>
        </Link>

        <Link to={"/wishlist"}>
          <i className="fas fa-heart fa-lg margin-right-xxs"></i>
        </Link>
        <Link to={"/cart"}>
          <i className="fas fa-shopping-cart fa-lg"></i>
        </Link>
      </nav>
    </header>
  );
};

export { Navbar };
