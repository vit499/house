import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CreateArt from "pages/createArt";
import DetailPage from "pages/detailPage";
import LinkPage from "pages/linkPage";
import Home from "pages/home";
import Login from "pages/login";
import Register from "pages/register";
import Articles from "pages/articles";
import Mathematic from "pages/mathematic";
import Task from "pages/task";
import MathResult from "pages/mathResult";
import Geom from "components/geom/geom";
import { UserContext } from "contexts/user";

const Routes = () => {
  const [token] = useContext(UserContext);

  const isAuth = !!token;
  console.log("routes, isAuth:", isAuth);
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/geom">
          <Geom />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Route path="/create">
          <CreateArt />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/geom">
          <Geom />
        </Route>
        <Route path="/mathinfo">
          <Mathematic />
        </Route>
        <Route path="/task">
          <Task />
        </Route>
        <Route path="/mathresult">
          <MathResult />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }
};

export default Routes;
