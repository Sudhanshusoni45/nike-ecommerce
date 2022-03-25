import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card, FilterSideBar, Navbar } from "../../components";
import { useAuth } from "../../Context/auth-context";
import { useWishlist } from "../../Context/wishlist-context";

const Wishlist = () => {
  const { wishlistState } = useWishlist();
  const { authState } = useAuth();
  const { token } = authState;
  console.log("token:", token);
  const bgColors = ["bg-yellow", "bg-blue", "bg-pink", "bg-green", "bg-orange"];
  console.log(wishlistState);
  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* <FilterSideBar /> */}
        <main className="product-grid">
          {wishlistState.length
            ? wishlistState.map(({ name, price, rating }) => {
                const randomNum = parseInt(Math.random() * 5);

                return (
                  <Card
                    name={name}
                    price={price}
                    bgColor={bgColors[randomNum]}
                    rating={rating}
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
