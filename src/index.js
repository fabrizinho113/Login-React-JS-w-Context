import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from './context/LoginContext';

import App from './App'
//import "./styles.css";


function AppWithProvider() {
  return (
    <ContextProvider value={500}>
      <div>
        <h4>Login con Context</h4>
      </div>
      
      <App />
    </ContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithProvider />, rootElement);


