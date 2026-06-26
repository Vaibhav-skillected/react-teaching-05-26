import useAuth
from "../hooks/useAuth";

function Navbar() {

  const { logout } = useAuth();

  return (

    <div>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Navbar;