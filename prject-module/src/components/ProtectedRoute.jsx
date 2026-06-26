import { Navigate }
from "react-router-dom";

function ProtectedRoute(
  {
    children,
    role
  }
) {

  const user = JSON.parse(
    sessionStorage.getItem("user")
  );

  if (!user) {
    return <Navigate to="/" />;
  }

  if (user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;