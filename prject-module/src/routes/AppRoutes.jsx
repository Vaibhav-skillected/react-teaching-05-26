import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login
from "../pages/auth/Login";

import AdminDashboard
from "../pages/admin/AdminDashboard";

import UserDashboard
from "../pages/user/UserDashboard";

import ProtectedRoute
from "../components/ProtectedRoute";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute
             role="ADMIN">

              <AdminDashboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute
             role="USER">

              <UserDashboard />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;