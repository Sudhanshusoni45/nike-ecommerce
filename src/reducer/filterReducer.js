const filterReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" };

    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" };

    case "JORDANS":
      return { ...state, jordans: payload };

    case "RUNNING":
      return { ...state, running: payload };

    case "BASKETBALL":
      return { ...state, basketball: payload };

    case "FOOTBALL":
      return { ...state, football: payload };

    case "WALKING":
      return { ...state, walking: payload };

    case "RATING_FILTER":
      return { ...state, rating: payload.value };

    case "PRICE_FILTER":
      return { ...state, rangeValue: payload };

    case "RESET":
      return {
        sortBy: "",
        inStock: false,
        running: false,
        football: false,
        basketball: false,
        jordans: false,
        walking: false,
        rating: 0,
        rangeValue: 1000,
      };

    default:
      return state;
  }
};

export default filterReducer;
