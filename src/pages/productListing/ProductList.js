import { Card, Navbar, FilterSideBar } from "../../components";
import useAxios from "../../CustomHooks/useAxios";
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
            ? sortedData.map(({ _id, name, price, rating, productImage }) => {
                const randomNum = parseInt(price % 5);
                return (
                  <li key={_id}>
                    <Card
                      _id={_id}
                      name={name}
                      price={price}
                      bgColor={bgColors[randomNum]}
                      rating={rating}
                      fromWishlist={false}
                      productImage={productImage}
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
