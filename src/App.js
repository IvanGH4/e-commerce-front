import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Container from "./components/pages/container/Container";
import { BrowserRouter, Switch } from "react-router-dom";
import React, { Component } from "react";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import "./App.css";

function App() {
  <div className="App">
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} component={Container} path="/" exact />
        {/*   <PublicRoute
          restricted={true}
          component={Register}
          path="/register"
          exact
        />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PrivateRoute path="/edit" component={EditProducts} /> */}
      </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
