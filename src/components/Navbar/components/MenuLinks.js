import React from "react";
import { Box, Stack, Button } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { MenuAvatar } from "./MenuAvatar";
import { MenuAuthButtons } from "./MenuAuthButtons";
import { useSelector } from "react-redux";
import { userSelector } from "reducers/userSlice";

export function MenuLinks({ isOpen }) {
  const { isLoggedIn, isFetching, user } = useSelector(
    userSelector
  );

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
        {isLoggedIn ? <MenuAvatar fullname={"Rodolfo Caceres"} /> : <MenuAuthButtons />}
      </Stack>
    </Box>
  );
}
