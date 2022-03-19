import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/index.css";

import { ProductProvider } from "./Context/product-context";
import { Login, ProductList, Signup, Wishlist } from "./pages";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider value={{ item: 5 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
