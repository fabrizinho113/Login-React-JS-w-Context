import React, { useContext } from 'react';

import { AuthContext } from '../../context/LoginContext';

const Dashboard = () => {

  const { logout } = useContext(AuthContext);
  
  const onLogout = (e) => {
    e.preventDefault();
    logout();
  }

  return (
    <div>

      <div>
        <h1>
          Hello Admin
        </h1>
      </div>

      <div>
        <h1>
          <a href="#" onClick={onLogout}>Logout</a>
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;