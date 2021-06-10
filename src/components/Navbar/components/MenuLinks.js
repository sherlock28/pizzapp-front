import React from "react";
import { Box, Stack, Button } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { useLocation } from "wouter";

export function MenuLinks({ isOpen }) {
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Inicio</MenuItem>
        <MenuItem to="/contacts">Contactos</MenuItem>
        <Button
          colorScheme="teal"
          size="md"
          variant="ghost"
          onClick={() => setLocation("/login")}
          minW={"140px"}
        >
          Iniciar sesión
        </Button>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => setLocation("/register")}
          minW={"140px"}
        >
          Registrate
        </Button>
      </Stack>
    </Box>
  );
}
