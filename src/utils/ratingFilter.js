import { useFilters } from "../context/filter-context";

const ratingFilter = (data) => {
  const { filterState } = useFilters();
  const { rating } = filterState;

  switch (rating) {
    case 4:
      return data.filter((item) => item.rating >= 4);
    case 3:
      return data.filter((item) => item.rating >= 3);
    case 2:
      return data.filter((item) => item.rating >= 2);
    case 1:
      return data.filter((item) => item.rating >= 1);

    default:
      return data;
  }
};

export { ratingFilter };
