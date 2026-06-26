import { createContext, useState } from "react";

export const AuthContext =
  createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(
    JSON.parse(
      sessionStorage.getItem("user")
    )
  );

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {

    sessionStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;