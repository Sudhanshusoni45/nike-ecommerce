import { createContext, useReducer } from "react";
import { useContext } from "react";
import authReducer from "../reducer/authReducer";

const AuthContext = createContext(null);

const initialState = {
  token: null,
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
