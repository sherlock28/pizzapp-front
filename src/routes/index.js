import React from "react";
import { Route, Switch } from "wouter";
import { HomePage } from "pages/Home";
import { SignInPage } from "pages/SignIn";
import { SignUpPage } from "pages/SignUp";
import { ContactsPage } from "pages/Contacts";
import { DetailPage } from "pages/Detail";
import { MyAccountPage } from "pages/MyAccount";
import { CartPage } from "pages/Cart";

export function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={SignInPage} exact />
        <Route path="/register" component={SignUpPage} exact />
        <Route path="/contacts" component={ContactsPage} exact />
        <Route path="/detail/:id" component={DetailPage} exact />
        <Route path="/account" component={MyAccountPage} exact />
        <Route path="/cart" component={CartPage} exact />
        <Route>404, Not Found!</Route>
      </Switch>
    </>
  );
}
