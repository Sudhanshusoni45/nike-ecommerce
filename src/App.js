import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RequiresAuth } from "./components";
import MockAPI from "./pages/Mockman/Mockman";
import "react-toastify/dist/ReactToastify.css";

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
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer
        theme="light"
        position="bottom-right"
        autoClose={2000}
        newestOnTop={true}
        closeOnClick
        pauseOnHover={false}
      />
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
    </div>
  );
}

export default App;
