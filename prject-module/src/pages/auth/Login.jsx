import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser }
from "../../services/authService";
import useAuth from "../../hooks/useAuth";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = (e) => {

    e.preventDefault();

    const user =
      loginUser(email, password);

    if (user) {

      login(user);

      if (user.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setPassword(e.target.value)}
        />

        <button>Login</button>

      </form>

    </div>
  );
}

export default Login;