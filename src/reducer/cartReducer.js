const cartReducer = (state, { type, payload }) => {
  const { products } = payload;

  switch (type) {
    case "INITIALIZE":
      return [...products];
    case "ADD_TO_CART":
      return [...products];
  }
};

export default cartReducer;
