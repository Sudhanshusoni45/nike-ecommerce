import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar";

const ProductList = () => {
  const [products, setProducts] = useState("");

  const bgColors = ["bg-yellow", "bg-blue", "bg-pink", "bg-green", "bg-orange"];

  const getProducts = async () => {
    const response = await axios.get("/api/products");
    setProducts(response.data.products);
  };

  useEffect(() => getProducts(), []);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <SideBar />
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
