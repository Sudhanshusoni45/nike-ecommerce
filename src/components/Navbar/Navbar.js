const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Nike</h2>
      </div>

      <input className="search-bar" type="text" placeholder="Search" />
      <nav>
        <button className="btn margin-right-xxs bg-primary">Login</button>
        <i className="fas fa-shopping-cart fa-lg"></i>
      </nav>
    </header>
  );
};

export default Navbar;
