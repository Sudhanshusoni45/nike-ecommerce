const FilterSideBar = () => {
  return (
    <>
      <aside className="ecomm-sidebar">
        <div className="sidebar-filters">
          <h3>Filters</h3>
          <span>Clear</span>
        </div>
        <div className="sidebar-filters">
          <h3>Category</h3>
          <ul>
            <a href="">
              <li>Jordan</li>
            </a>
            <a href="">
              <li>Running</li>
            </a>
            <a href="">
              <li>Basketball</li>
            </a>
            <a href="">
              <li>Football</li>
            </a>
            <a href="">
              <li>Walking</li>
            </a>
          </ul>
        </div>

        <div className="sidebar-filters">
          <h3>Price</h3>
          <input type="range" />
        </div>

        <div className="sidebar-filters">
          <h3>Sort By</h3>
          <div>
            <input type="radio" name="sortByPrice" />
            <label htmlFor="">Price-Low to High</label>
          </div>

          <div>
            <input type="radio" name="sortByPrice" />
            <label htmlFor="">Price-Low to High</label>
          </div>
        </div>
        <h3>Rating</h3>
        <div>
          <input type="radio" name="sortByRating" />
          <label className="margin-left-xxs" htmlFor="">
            4 Stars & above
          </label>
        </div>
        <div>
          <input type="radio" name="sortByRating" />
          <label className="margin-left-xxs" htmlFor="">
            3 Stars & above
          </label>
        </div>
        <div>
          <input type="radio" name="sortByRating" />
          <label className="margin-left-xxs" htmlFor="">
            2 Stars & above
          </label>
        </div>
        <div>
          <input type="radio" name="sortByRating" />
          <label className="margin-left-xxs" htmlFor="">
            1 Stars & above
          </label>
        </div>
      </aside>
    </>
  );
};

export { FilterSideBar };
