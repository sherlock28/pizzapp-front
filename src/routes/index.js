import React from "react";
import { Route, Switch } from "wouter";
import { HomePage } from "pages/Home";
import { SignInPage } from "pages/SignIn";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={SignInPage} exact />
      <Route>404, Not Found!</Route>
    </Switch>
  );
}
