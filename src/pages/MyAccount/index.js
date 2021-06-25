import React from "react";
import { useIsLogged } from "hooks/useIsLogged";

export function MyAccountPage() {
  useIsLogged();

  return <div>Mi cuenta</div>;
}
