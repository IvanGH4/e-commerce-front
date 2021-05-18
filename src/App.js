import Navbar from "./components/extras/Navbar";
import RegisterAdmin from "./components/pages/RegisterAdmin";
import Container from "./components/pages/container/Container";
import { BrowserRouter, Switch } from "react-router-dom";
import React, { Component } from "react";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import "./App.css";
import RegisterClient from "./components/pages/RegisterClient";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <PublicRoute restricted={false} component={Container} path="/" exact />
        <Switch>
          <PublicRoute
            restricted={false}
            component={RegisterAdmin}
            path="/registroAdmin"
            exact
          />
          <PublicRoute
            restricted={false}
            component={RegisterClient}
            path="/registroCliente"
            exact
          />
          {/*
        <PrivateRoute path="/admin" component={admin} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
