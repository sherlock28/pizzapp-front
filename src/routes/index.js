import React from "react";
import { Route, Switch } from "wouter";
import { HomePage } from "pages/Home";
import { SignUpPage } from "pages/SignUp";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={SignUpPage} exact />
      <Route>404, Not Found!</Route>
    </Switch>
  );
}
