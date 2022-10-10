import React, {useContext} from "react";

import { AuthContext } from './context/LoginContext';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn) 
    return <Login />;
  else
    return <Dashboard />

}

export default App;
