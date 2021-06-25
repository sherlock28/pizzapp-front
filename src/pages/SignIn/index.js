import React from "react";
import { SignInArea } from "./components/SignInArea";
import { useIsLogged } from "hooks/useIsLogged";

export function SignInPage() {
  useIsLogged();

  return <SignInArea />;
}
