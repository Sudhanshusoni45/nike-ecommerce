import { useFilters } from "../Context/filter-context";

const priceFilter = (data) => {
  const { filterState } = useFilters();
  const { rangeValue } = filterState;

  if (data) {
    return data.filter((item) => item.price <= rangeValue);
  } else return data;
};

export { priceFilter };
