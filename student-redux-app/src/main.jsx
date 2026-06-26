import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
      //redux 
      //centre

//parent -> child - grand child -> other component
//what is store
//store is a central database for react application

//reducer -> functinality handel

//provider 
//provider shares redux store with the 
//entire application

//provider-> app -> form, list, admin
//all component can access

//dispatch 
//proivide access to nredux 
// dispatch functio

//user clicks adds-> action created 
//reducer executed 
//store update 
//ussselector detects changes
//componennt reneder 
//updated ui shown


//context api redux   use effect 

//session handelling
