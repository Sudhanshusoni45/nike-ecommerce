import { createContext } from "react";
import { useReducer } from "react";
import { useContext } from "react";

const ProductContext = createContext({ item: 5 });

const reducer = (state, action) => {
  switch (action.type) {
    case "setProducts":
      return { ...state, products: action.payload };
  }
};

const useProducts = () => useContext(ProductContext);
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [{}]);
  return (
    <ProductContext.Provider value={{ state, dispatch, test: 5 }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProducts };
