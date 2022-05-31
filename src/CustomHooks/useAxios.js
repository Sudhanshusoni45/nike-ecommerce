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
        // case "post": {
        //   const response = await axios.post(url, body);
        //   return response;
        // this is incomplete i will work more on this later
        // }
        default:
          return "default";
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export default useAxios;
