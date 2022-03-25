const wishListReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return [...payload];

    case "INITIALIZE":
      return [...payload];

    case "DELETE":
      return [...payload];

    default:
      break;
  }
};

export default wishListReducer;
