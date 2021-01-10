import React, {useState, useContext} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from 'routes'

import TopBar from 'components/topbar'
import {UserContextProvider} from 'contexts/user'
import UserStatus from 'components/userStatus'

function App() {

  

  return (
    <UserContextProvider>
      <UserStatus>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </UserStatus>
    </UserContextProvider>
  );
}

export default App;
