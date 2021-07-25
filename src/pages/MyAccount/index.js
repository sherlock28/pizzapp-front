import React from "react";
import { useIsLogged } from "hooks/useIsLogged";
import { Box } from "@chakra-ui/react";

export function MyAccountPage() {
  useIsLogged();

  return <Box my={40}>Mi cuenta</Box>;
}
