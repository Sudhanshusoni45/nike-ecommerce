import { useFilters } from "../../Context/filter-context";

const FilterSideBar = () => {
  const { filterState, filterDispatch } = useFilters();
  const {
    running,
    football,
    basketball,
    jordans,
    walking,
    sortBy,
    rangeValue,
    rating,
  } = filterState;

  return (
    <>
      <aside className="ecomm-sidebar">
        <div className="sidebar-filters">
          <h3>Filters</h3>
          <a href="#">
            <span onClick={() => filterDispatch({ type: "RESET" })}>Clear</span>
          </a>
        </div>
        <div className="sidebar-filters">
          <h3>Category</h3>
          <ul>
            <div>
              <input
                type="checkbox"
                name="category"
                id="jordans"
                checked={jordans}
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "JORDANS", payload: true })
                    : filterDispatch({ type: "JORDANS", payload: false });
                }}
              />

              <label htmlFor="running">Jordan</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                id="running"
                checked={running}
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "RUNNING", payload: true })
                    : filterDispatch({ type: "RUNNING", payload: false });
                }}
              />
              <label htmlFor="running">Running</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                id="basketball"
                checked={basketball}
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "BASKETBALL", payload: true })
                    : filterDispatch({ type: "BASKETBALL", payload: false });
                }}
              />
              <label htmlFor="basketball">Basketball</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                checked={football}
                id="football"
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "FOOTBALL", payload: true })
                    : filterDispatch({ type: "FOOTBALL", payload: false });
                }}
              />
              <label htmlFor="football">Football</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                checked={walking}
                id="walking"
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "WALKING", payload: true })
                    : filterDispatch({ type: "WALKING", payload: false });
                }}
              />
              <label htmlFor="walking">Walking</label>
            </div>
          </ul>
        </div>

        <div className="sidebar-filters">
          <h3>Price</h3>
          <label htmlFor="priceSlider">$0 to ${rangeValue}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={rangeValue}
            onChange={(e) =>
              filterDispatch({ type: "PRICE_FILTER", payload: e.target.value })
            }
          />
        </div>

        <div className="sidebar-filters">
          <h3>Sort By</h3>
          <div>
            <input
              type="radio"
              name="sortByPrice"
              id="lowToHigh"
              checked={sortBy === "LOW_TO_HIGH" ? true : false}
              onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
            />
            <label htmlFor="lowToHigh">Price-Low to High</label>
          </div>

          <div>
            <input
              id="highToLow"
              type="radio"
              name="sortByPrice"
              checked={sortBy === "HIGH_TO_LOW" ? true : false}
              onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
            />
            <label htmlFor="highToLow">Price-High to Low</label>
          </div>
        </div>
        <h3>Rating</h3>
        <div>
          <input
            type="radio"
            id="fourStarAbove"
            name="sortByRating"
            checked={rating === "4_STAR_&_ABOVE" ? true : false}
            onChange={() => filterDispatch({ type: "4_STAR_&_ABOVE" })}
          />
          <label className="margin-left-xxs" htmlFor="fourStarAbove">
            4 Stars & above
          </label>
        </div>
        <div>
          <input
            id="threeStarAbove"
            type="radio"
            name="sortByRating"
            checked={rating === "3_STAR_&_ABOVE" ? true : false}
            onChange={() => filterDispatch({ type: "3_STAR_&_ABOVE" })}
          />
          <label className="margin-left-xxs" htmlFor="threeStarAbove">
            3 Stars & above
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="sortByRating"
            id="twoStarAbove"
            checked={rating === "2_STAR_&_ABOVE" ? true : false}
            onChange={() => filterDispatch({ type: "2_STAR_&_ABOVE" })}
          />
          <label className="margin-left-xxs" htmlFor="twoStarAbove">
            2 Stars & above
          </label>
        </div>
        <div>
          <input
            id="oneStarAbove"
            type="radio"
            name="sortByRating"
            checked={rating === "1_STAR_&_ABOVE" ? true : false}
            onChange={() => filterDispatch({ type: "1_STAR_&_ABOVE" })}
          />
          <label className="margin-left-xxs" htmlFor="oneStarAbove">
            1 Stars & above
          </label>
        </div>
      </aside>
    </>
  );
};

export { FilterSideBar };
