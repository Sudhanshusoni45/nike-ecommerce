import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import useAxios from "../../CustomHooks/useAxios";
import { useProducts } from "../../Context/product-context";

const ProductList = () => {
  useAxios("/api/products", "get");

  const [products, setProducts] = useState("");
  const { state, dispatch } = useProducts();
  const bgColors = ["bg-yellow", "bg-blue", "bg-pink", "bg-green", "bg-orange"];

  return (
    <>
      <Navbar />
      <div className="main-container">
        <FilterSideBar />
        <main className="product-grid">
          {state.products
            ? state.products.map(({ id, name, price, inWishList }) => {
                const randomNum = parseInt(Math.random() * 5);

                return (
                  <li key={id}>
                    <Card
                      id={id}
                      name={name}
                      price={price}
                      bgColor={bgColors[randomNum]}
                      inWishList={inWishList}
                      setProducts={setProducts}
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

export default ProductList;
