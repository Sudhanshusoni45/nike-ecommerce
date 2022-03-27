import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../Context/product-context";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Nike</h2>
      </div>
      <input className="search-bar" type="text" placeholder="Search" />
      <nav>
        <Link to={"/login"}>
          <button className="btn margin-right-xxs bg-primary">Login</button>
        </Link>

        <Link to={"/wishlist"}>
          <i className="fas fa-heart fa-lg margin-right-xxs"></i>
        </Link>
        <Link to={"#"}>
          <i className="fas fa-shopping-cart fa-lg"></i>
        </Link>
      </nav>
    </header>
  );
};

export { Navbar };
