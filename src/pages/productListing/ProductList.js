import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const bgColors = ["bg-yellow", "bg-blue", "bg-pink", "bg-green", "bg-orange"];

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getProducts(), []);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <FilterSideBar />
        <main className="product-grid">
          {products
            ? products.map(({ name, price }) => {
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

export default ProductList;
