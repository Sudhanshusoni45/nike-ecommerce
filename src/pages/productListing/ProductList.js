import useAxios from "../../CustomHooks/useAxios";
import { Card, Navbar, FilterSideBar } from "../../components";
import {
  categoryFilter,
  getSortData,
  priceFilter,
  ratingFilter,
} from "../../utils";
import { useWishlist } from "../../Context/wishlist-context";

const ProductList = () => {
  const { wishlistState } = useWishlist();

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
            ? sortedData.map(({ _id, name, price, rating }) => {
                const randomNum = parseInt(Math.random() * 5);

                return (
                  <li key={_id}>
                    <Card
                      _id={_id}
                      name={name}
                      price={price}
                      bgColor={bgColors[randomNum]}
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
