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
              <Nav.Link as={Link} to="/">
                {" "}
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/geom">
                Геометрия
              </Nav.Link>
              {!isAuth && (
                <Fragment>
                  <Nav.Link as={Link} to="/login">
                    Войти
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Reg
                  </Nav.Link>
                </Fragment>
              )}
              {isAuth && (
                <Fragment>
                  <Nav.Link as={Link} to="/getall">
                    Все
                  </Nav.Link>
                  <Nav.Link as={Link} to="/create">
                    Добавить
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" onClick={logout}>
                    Выйти
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
