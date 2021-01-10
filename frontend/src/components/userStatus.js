import React, { useContext, useEffect } from 'react'

import {UserContext} from 'contexts/user'

const UserStatus = ({children}) => {

  const [token, setToken] = useContext(UserContext)

  console.log('user status', token);


  return children
}

export default UserStatus
