import { useState } from "react";
import { saveUser } from "../services/sessionStorageService";

function Login({ setIsLoggedIn }) {

  const [email, setEmail] = useState("");

  const login = () => {

    const user = {
      email
    };

    saveUser(user);

    setIsLoggedIn(true);
  };

  return (
    <div>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;