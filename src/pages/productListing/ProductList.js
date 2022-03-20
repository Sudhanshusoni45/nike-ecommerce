import useAxios from "../../CustomHooks/useAxios";
import { useProducts } from "../../Context/product-context";
import { Card, Navbar, FilterSideBar } from "../../components";
import { categoryFilter, getSortData } from "../../utils";

const ProductList = () => {
  useAxios("/api/products", "get");

  const { state, dispatch } = useProducts();
  const bgColors = ["bg-yellow", "bg-blue", "bg-pink", "bg-green", "bg-orange"];

  const categoryData = categoryFilter();
  const sortedData = getSortData(categoryData);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <FilterSideBar />
        <main className="product-grid">
          {sortedData
            ? sortedData.map(({ id, name, price, inWishList }) => {
                const randomNum = parseInt(Math.random() * 5);

                return (
                  <li key={id}>
                    <Card
                      id={id}
                      name={name}
                      price={price}
                      bgColor={bgColors[randomNum]}
                      inWishList={inWishList}
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
