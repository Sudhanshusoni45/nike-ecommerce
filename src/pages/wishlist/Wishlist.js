import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card, FilterSideBar, Navbar } from "../../components";
import { useAuth } from "../../Context/auth-context";
import { useWishlist } from "../../Context/wishlist-context";

const Wishlist = () => {
  const { wishlistState } = useWishlist();
  const { authState } = useAuth();

  const bgColors = ["bg-yellow", "bg-blue", "bg-pink", "bg-green", "bg-orange"];
  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* <FilterSideBar /> */}
        <main className="product-grid">
          {wishlistState.length ? (
            wishlistState.map(({ _id, name, price, rating, inWishlist }) => {
              const randomNum = parseInt(price % 5);

              return (
                <Card
                  _id={_id}
                  name={name}
                  price={price}
                  bgColor={bgColors[randomNum]}
                  rating={rating}
                  fromWishlist={true}
                />
              );
            })
          ) : (
            <h1>You have run out of wishes add something to wishlist...</h1>
          )}
        </main>
      </div>
    </>
  );
};

export { Wishlist };
