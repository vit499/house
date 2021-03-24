import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
//import Nav from "react-bootstrap/Nav";

import { UserContext } from "contexts/user";
import "./topbar.css";

const TopBar = () => {
  const [token, setToken] = useContext(UserContext);

  const isAuth = !!token;
  console.log("topbar, isAuth:", isAuth);
  const logout = () => {
    //setIsLogout(true)
    console.log("topbar, logout");
    setToken("");
  };
  useEffect(() => {
    console.log("top bar did mount, isAuth:", isAuth);
  }, []);

  return (
    <>
      <Navbar expand="md" className="color-nav">
        <Container fluid="md">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                {" "}
                <Link to="/" className="nav-link" exact>
                  Home
                </Link>
              </Nav.Link>
              {!isAuth && (
                <Fragment>
                  <Nav.Link>
                    {" "}
                    <Link to="/login" className="nav-link">
                      Войти
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <Link to="/register" className="nav-link">
                      Reg
                    </Link>
                  </Nav.Link>
                </Fragment>
              )}
              {isAuth && (
                <Fragment>
                  <Nav.Link>
                    {" "}
                    <Link to="/getall" className="nav-link">
                      Все
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <Link to="/create" className="nav-link">
                      Добавить
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    {" "}
                    <Link to="/" onClick={logout} className="nav-link">
                      Выйти
                    </Link>
                  </Nav.Link>
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
