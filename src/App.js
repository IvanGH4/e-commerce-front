import Navbar from "./components/extras/Navbar";
import RegisterAdmin from "./components/pages/RegisterAdmin";
import Container from "./components/pages/container/Container";
import { BrowserRouter, Switch } from "react-router-dom";
import React, { Component } from "react";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import "./App.css";
import RegisterClient from "./components/pages/RegisterClient";
import Login from "./components/pages/Login";
import ProductsList from "./components/ProductsList";
import SingleProduct from "./components/SingleProduct";
import Shop from "./components/pages/Shop";
import CategoryProducts from "./components/pages/CategoryProducts";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";

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
          <PublicRoute
            restricted={false}
            component={Login}
            path="/iniciarSesion"
            exact
          />
          <PublicRoute component={Shop} path="/shop" restricted={false} />
          <PublicRoute
            component={SingleProduct}
            path="/productos/:slug"
            restricted={false}
          />
          <PublicRoute
            component={CategoryProducts}
            path="/categorias/:name/:id"
            restricted={false}
          />
          <PublicRoute component={Cart} path="/carrito" restricted={false} />
          <PublicRoute component={About} path="/proyecto" restricted={false} />
          <PublicRoute component={Profile} path="/perfil" restricted={true} />
          {/*
        <PrivateRoute path="/admin" component={admin} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
