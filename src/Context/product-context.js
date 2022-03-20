import { createContext, useReducer, useContext } from "react";

const ProductContext = createContext({ item: 5 });

const reducer = (productState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...productState, products: action.payload };
  }
};

const useProducts = () => useContext(ProductContext);
const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(reducer, [{}]);
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProducts };
