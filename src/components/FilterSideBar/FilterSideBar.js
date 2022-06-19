import { useFilters } from "../../context/filter-context";
import "./filterSideBar.css";

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
          <h3 className="margin-bottom-xxs">Filters</h3>
          <a href="#">
            <span onClick={() => filterDispatch({ type: "RESET" })}>Clear</span>
          </a>
        </div>
        <div className="sidebar-filters">
          <h3 className="margin-bottom-xxs">Category</h3>
          <ul>
            <div>
              <input
                type="checkbox"
                name="jordans"
                id="jordans"
                className="cursor-pointer"
                checked={jordans}
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "JORDANS", payload: true })
                    : filterDispatch({ type: "JORDANS", payload: false });
                }}
              />

              <label htmlFor="jordans" className="cursor-pointer">
                Jordan
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                id="running"
                className="cursor-pointer"
                checked={running}
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "RUNNING", payload: true })
                    : filterDispatch({ type: "RUNNING", payload: false });
                }}
              />
              <label htmlFor="running" className="cursor-pointer">
                Running
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                id="basketball"
                className="cursor-pointer"
                checked={basketball}
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "BASKETBALL", payload: true })
                    : filterDispatch({ type: "BASKETBALL", payload: false });
                }}
              />
              <label htmlFor="basketball" className="cursor-pointer">
                Basketball
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                className="cursor-pointer"
                checked={football}
                id="football"
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "FOOTBALL", payload: true })
                    : filterDispatch({ type: "FOOTBALL", payload: false });
                }}
              />
              <label htmlFor="football" className="cursor-pointer">
                Football
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="category"
                className="cursor-pointer"
                checked={walking}
                id="walking"
                onChange={(e) => {
                  e.target.checked
                    ? filterDispatch({ type: "WALKING", payload: true })
                    : filterDispatch({ type: "WALKING", payload: false });
                }}
              />
              <label htmlFor="walking" className="cursor-pointer">
                Walking
              </label>
            </div>
          </ul>
        </div>

        <div className="sidebar-filters">
          <h3 className="margin-bottom-xxs">Price</h3>
          <label htmlFor="priceSlider">$0 to ${rangeValue}</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={rangeValue}
            className="cursor-pointer"
            onChange={(e) =>
              filterDispatch({ type: "PRICE_FILTER", payload: e.target.value })
            }
          />
        </div>

        <div className="sidebar-filters">
          <h3 className="margin-bottom-xxs">Sort By</h3>
          <div>
            <input
              type="radio"
              name="sortByPrice"
              id="lowToHigh"
              className="cursor-pointer"
              checked={sortBy === "LOW_TO_HIGH" ? true : false}
              onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
            />
            <label htmlFor="lowToHigh" className="cursor-pointer">
              Price-Low to High
            </label>
          </div>

          <div>
            <input
              id="highToLow"
              type="radio"
              name="sortByPrice"
              className="cursor-pointer"
              checked={sortBy === "HIGH_TO_LOW" ? true : false}
              onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
            />
            <label htmlFor="highToLow" className="cursor-pointer">
              Price-High to Low
            </label>
          </div>
        </div>
        <h3 className="margin-bottom-xxs">Rating</h3>
        <div>
          <input
            type="radio"
            id="fourStarAbove"
            name="sortByRating"
            value="4"
            className="cursor-pointer"
            checked={rating === 4 ? true : false}
            onChange={() =>
              filterDispatch({ type: "RATING_FILTER", payload: { value: 4 } })
            }
          />
          <label
            className="margin-left-xxs cursor-pointer"
            htmlFor="fourStarAbove"
          >
            4 Stars & above
          </label>
        </div>
        <div>
          <input
            id="threeStarAbove"
            type="radio"
            name="sortByRating"
            value="3"
            className="cursor-pointer"
            checked={rating === 3 ? true : false}
            onChange={() =>
              filterDispatch({ type: "RATING_FILTER", payload: { value: 3 } })
            }
          />
          <label
            className="margin-left-xxs cursor-pointer"
            htmlFor="threeStarAbove"
          >
            3 Stars & above
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="sortByRating"
            id="twoStarAbove"
            value="2"
            className="cursor-pointer"
            checked={rating === 2 ? true : false}
            onChange={() =>
              filterDispatch({ type: "RATING_FILTER", payload: { value: 2 } })
            }
          />
          <label
            className="margin-left-xxs cursor-pointer"
            htmlFor="twoStarAbove"
          >
            2 Stars & above
          </label>
        </div>
        <div>
          <input
            id="oneStarAbove"
            type="radio"
            name="sortByRating"
            value="1"
            className="cursor-pointer"
            checked={rating === 1 ? true : false}
            onChange={() =>
              filterDispatch({ type: "RATING_FILTER", payload: { value: 1 } })
            }
          />
          <label
            className="margin-left-xxs cursor-pointer"
            htmlFor="oneStarAbove"
          >
            1 Stars & above
          </label>
        </div>
      </aside>
    </>
  );
};

export { FilterSideBar };
