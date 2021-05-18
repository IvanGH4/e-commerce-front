import Login from "./components/pages/Login";
import Navbar from "./components/extras/Navbar";
import Register from "./components/pages/Register";
import Container from "./components/pages/container/Container";
import { BrowserRouter, Switch } from "react-router-dom";
import React, { Component } from "react";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PublicRoute restricted={false} component={Container} path="/" exact />
        <Switch>
          {/*   <PublicRoute
          restricted={true}
          component={Register}
          path="/register"
          exact
        />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PrivateRoute path="/admin" component={admin} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
