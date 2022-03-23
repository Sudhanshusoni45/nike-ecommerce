import useAxios from "../../CustomHooks/useAxios";
import { Card, Navbar, FilterSideBar } from "../../components";
import {
  categoryFilter,
  getSortData,
  priceFilter,
  ratingFilter,
} from "../../utils";

const ProductList = () => {
  useAxios("/api/products", "get");

  const bgColors = ["bg-yellow", "bg-blue", "bg-pink", "bg-green", "bg-orange"];

  const categoryData = categoryFilter();
  const priceFilterData = priceFilter(categoryData);
  const ratingData = ratingFilter(priceFilterData);
  const sortedData = getSortData(ratingData);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <FilterSideBar />
        <main className="product-grid">
          {sortedData
            ? sortedData.map(({ id, name, price, inWishList, rating }) => {
                const randomNum = parseInt(Math.random() * 5);

                return (
                  <li key={id}>
                    <Card
                      id={id}
                      name={name}
                      price={price}
                      bgColor={bgColors[randomNum]}
                      inWishList={inWishList}
                      rating={rating}
                    />
                  </li>
                );
              })
            : null}
        </main>
      </div>
    </>
  );
};

export { ProductList };
