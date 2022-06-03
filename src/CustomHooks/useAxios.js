import axios from "axios";
import { useEffect } from "react";
import { useProducts } from "../Context/product-context";

const useAxios = (url, method, body) => {
  const { productState, productDispatch } = useProducts();
  useEffect(() => networkCall(), []);

  const networkCall = async () => {
    try {
      switch (method) {
        case "get": {
          const response = await axios.get(url);
          const data = await response.data;
          productDispatch({ type: "SET_PRODUCTS", payload: data.products });
        }

        default:
          return "default";
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export default useAxios;
