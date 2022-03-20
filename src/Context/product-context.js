import { createContext, useReducer, useContext } from "react";

const ProductContext = createContext({ item: 5 });

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
  }
};

const useProducts = () => useContext(ProductContext);
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [{}]);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProducts };
