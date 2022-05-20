const authReducer = (state, { type, payload: { user, token } }) => {
  // const { user } = action.payload;
  // const { token } = action.payload;

  switch (type) {
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

    case "LOGOUT":
      return {
        user,
        token,
      };
    default:
      return state;
  }
};

export default authReducer;
