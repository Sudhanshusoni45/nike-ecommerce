const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" };

    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" };

    case "JORDANS":
      return { ...state, jordans: action.payload };

    case "RUNNING":
      return { ...state, running: action.payload };

    case "BASKETBALL":
      return { ...state, basketball: action.payload };

    case "FOOTBALL":
      return { ...state, football: action.payload };

    case "WALKING":
      return { ...state, walking: action.payload };

    case "RESET":
      return {
        sortBy: "",
        inStock: false,
        running: false,
        football: false,
        basketball: false,
        jordans: false,
        walking: false,
      };

    default:
      return state;
  }
};

export default filterReducer;
