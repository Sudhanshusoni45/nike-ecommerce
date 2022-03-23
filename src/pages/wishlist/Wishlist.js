import { useState } from "react";
import { Card, FilterSideBar, Navbar } from "../../components";

const Wishlist = () => {
  const [wishlist, setWishList] = useState([
    { name: "Jordan Zoom", price: 250 },
    { name: "Jordan Zoom", price: 250 },
    { name: "Jordan Zoom", price: 250 },
    { name: "Jordan Zoom", price: 250 },
    { name: "Jordan Zoom", price: 250 },
    { name: "Jordan Zoom", price: 250 },
    { name: "Jordan Zoom", price: 250 },
  ]);
  const bgColors = ["bg-yellow", "bg-blue", "bg-pink", "bg-green", "bg-orange"];

  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* <FilterSideBar /> */}
        <main className="product-grid">
          {wishlist.length
            ? wishlist.map(({ name, price }) => {
                const randomNum = parseInt(Math.random() * 5);

                return (
                  <Card
                    name={name}
                    price={price}
                    bgColor={bgColors[randomNum]}
                  />
                );
              })
            : null}
        </main>
      </div>
    </>
  );
};

export { Wishlist };
