import React from "react";
import { Route, Switch } from "wouter";
import { HomePage } from "pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route>404, Not Found!</Route>
    </Switch>
  );
}
