import React from "react";
import { Route, Switch } from "wouter";
import { HomePage } from "pages/Home";
import { SignInPage } from "pages/SignIn";
import { SignUpPage } from "pages/SignUp";
import { ContactsPage } from "pages/Contacts";
import { DetailPage } from "pages/Detail";
import { MyAccountPage } from "pages/MyAccount";
import { CartPage } from "pages/Cart";
import { NotFoundPage } from "pages/NotFound";

import { paths } from "config/paths";

export function Routes() {
  return (
    <>
      <Switch>
        <Route path={paths.home} component={HomePage} exact />
        <Route path={paths.login} component={SignInPage} exact />
        <Route path={paths.register} component={SignUpPage} exact />
        <Route path={paths.account} component={MyAccountPage} exact />
        <Route path={paths.cart} component={CartPage} exact />
        <Route path={paths.contacts} component={ContactsPage} exact />
        <Route path={paths.detail} component={DetailPage} exact />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}
