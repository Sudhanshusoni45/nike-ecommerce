import { useFilters } from "../Context/filter-context";

const ratingFilter = (data) => {
  const { filterState } = useFilters();
  const { rating } = filterState;

  switch (rating) {
    case "4_STAR_&_ABOVE":
      return data.filter((item) => item.rating >= 4);
    case "3_STAR_&_ABOVE":
      return data.filter((item) => item.rating >= 3);
    case "2_STAR_&_ABOVE":
      return data.filter((item) => item.rating >= 2);
    case "1_STAR_&_ABOVE":
      return data.filter((item) => item.rating >= 1);

    default:
      return data;
  }
};

export default ratingFilter;
