import { useFilters } from "../context/filter-context";

const getSortData = (products) => {
  const { filterState } = useFilters();
  const { sortBy } = filterState;

  switch (sortBy) {
    case "LOW_TO_HIGH":
      return [...products].sort((a, b) => a.price - b.price);
    case "HIGH_TO_LOW":
      return [...products].sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

export { getSortData };
