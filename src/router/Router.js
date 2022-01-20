import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Navbar } from "../components/Navbar";
import { Register } from "../pages/Register";

export const Router = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};
