const authReducer = (state, action) => {
  const { user } = action.payload;
  const { token } = action.payload;

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: user,
        token: token,
      };

    case "SIGNUP":
      return {
        ...state,
        user: user,
        token: token,
      };

    default:
      return state;
  }
};

export default authReducer;
