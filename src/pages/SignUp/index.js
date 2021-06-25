import React from "react";
import { SignUpArea } from "./components/SignUpArea";
import { useIsLogged } from "hooks/useIsLogged";

export function SignUpPage() {
  useIsLogged();

  return <SignUpArea />;
}
