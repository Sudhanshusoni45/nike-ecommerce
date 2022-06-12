import { createContext, useReducer, useContext } from "react";
import filterReducer from "../reducer/filterReducer";

const filterContext = createContext();

const FilterPovider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: "",
    inStock: false,
    running: false,
    football: false,
    basketball: false,
    jordans: false,
    walking: false,
    rating: "",
    rangeValue: 1000,
  });

  return (
    <filterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilters = () => useContext(filterContext);

export { FilterPovider, useFilters };
