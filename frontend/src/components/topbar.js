import React, {useState, useContext, useEffect, Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'

import {UserContext} from 'contexts/user'

const TopBar = () => {
  const [token, setToken] = useContext(UserContext)

  const isAuth = !!token;
  console.log('topbar, isAuth:', isAuth);
  const logout = () => {
    
    //setIsLogout(true)
    console.log('topbar, logout');
    setToken('')
  }
  useEffect(() => {
    console.log('top bar did mount, isAuth:', isAuth);
    
  }, [])

  return (
    <nav className="navbar navbar-light navbar-expand-sm" style={{backgroundColor: '#64ffda'}}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
          </li>
          {!isAuth && (
            <Fragment>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Войти
                </NavLink>
              </li>
            </Fragment>
          )}
          {isAuth && (
            <Fragment>
              <li className="nav-item">
                <NavLink to="/getall" className="nav-link">
                  Все
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/create" className="nav-link">
                  Добавить
                </NavLink>
              </li>
              <li className="nav-item">
                
                <NavLink to="/" className="nav-link" onClick={logout}>
                  Выйти
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default TopBar
