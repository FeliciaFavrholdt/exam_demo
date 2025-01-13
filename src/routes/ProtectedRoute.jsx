import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, userRole, isTokenExpired, roles = [], children }) => {
  if (!token || isTokenExpired(token)) {
    return <Navigate to="/login" replace />;
  }
  if (roles.length && !roles.includes(userRole)) {
    alert("Access denied: You do not have permission to view this page.");
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;