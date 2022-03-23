import { useFilters } from "../Context/filter-context";
import { useProducts } from "../Context/product-context";

const categoryFilter = () => {
  const { filterState } = useFilters();
  const { productState } = useProducts();
  const data = productState.products;

  const { running, football, walking, basketball, jordans } = filterState;

  if (!running && !football && !walking && !basketball && !jordans) {
    return data;
  }

  const filteredData = [];

  if (jordans) {
    const jordansShoes = data.filter((item) => item.categoryName === "jordans");
    filteredData.push(...jordansShoes);
  }
  if (running) {
    const runningShoes = data.filter((item) => item.categoryName === "running");
    filteredData.push(...runningShoes);
  }
  if (basketball) {
    const basketballShoes = data.filter(
      (item) => item.categoryName === "basketball"
    );
    filteredData.push(...basketballShoes);
  }
  if (football) {
    const footballShoes = data.filter(
      (item) => item.categoryName === "football"
    );
    filteredData.push(...footballShoes);
  }
  if (walking) {
    const walkingShoes = data.filter((item) => item.categoryName === "walking");
    filteredData.push(...walkingShoes);
  }
  return filteredData;
};

export { categoryFilter };
