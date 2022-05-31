import { Link } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const {
    authState: { token, user },
    authState,
  } = useAuth();
  const searchBarHandler = (e) => {
    setSearchQuery((prevQuery) => e.target.value);
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h2>Nike</h2>
        </Link>
      </div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        onChange={searchBarHandler}
        value={searchQuery}
      />
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
