import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";

import { ProductProvider } from "./Context/product-context";

import { FilterPovider } from "./Context/filter-context";
import { AuthProvider } from "./Context/auth-context";
import { WishlistProvider } from "./Context/wishlist-context";
import { CartProvider } from "./Context/cart-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterPovider>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </FilterPovider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
