import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const RequiresAuth = ({ children }) => {
  const { authState } = useAuth();
  const location = useLocation();
  const { token } = authState;
  return token !== null ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export { RequiresAuth };
