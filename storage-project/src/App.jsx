import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { getUser } from "./services/sessionStorageService";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    getUser() ? true : false
  );

  return (
    <div>

      {
        isLoggedIn
          ? <Dashboard />
          : (
              <Login
                setIsLoggedIn={setIsLoggedIn}
              />
            )
      }

    </div>
  );
}

export default App;

//session storage (tempoarary)
//login -> session storage store email
//refresh -> still login
//close tab -> automatically remove from browser

//local storage(permenent)
//add studnet -> local storage store data 
//refresh -> still exist ->browser restart -> still exist 