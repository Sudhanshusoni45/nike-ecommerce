import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/index.css";

import { ProductProvider } from "./Context/product-context";
import {
  CartPage,
  Homepage,
  Login,
  LogoutPage,
  ProductList,
  Signup,
  SingleProductPage,
  Wishlist,
} from "./pages";
import { FilterPovider } from "./Context/filter-context";
import MockAPI from "./pages/Mockman/Mockman";
import { AuthProvider } from "./Context/auth-context";
import { WishlistProvider } from "./Context/wishlist-context";
import { CartProvider } from "./Context/cart-context";
import { RequiresAuth } from "./components";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider value={{ item: 5 }}>
      <FilterPovider>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/productlist" element={<ProductList />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                    path="/wishlist"
                    element={
                      <RequiresAuth>
                        <Wishlist />
                      </RequiresAuth>
                    }
                  />
                  <Route path="/mockman" element={<MockAPI />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route
                    path="/singleproductpage/:productId"
                    element={<SingleProductPage />}
                  />
                  <Route path="/" element={<Homepage />} />
                  <Route path="/logout" element={<LogoutPage />} />
                </Routes>
              </BrowserRouter>
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </FilterPovider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
