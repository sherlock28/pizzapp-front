import React from "react";
import { Box, Stack, Badge } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";
import { MenuAvatar } from "./MenuAvatar";
import { MenuAuthButtons } from "./MenuAuthButtons";
import { useSelector } from "react-redux";
import { userSelector } from "reducers/userSlice";
import { cartSelector } from "reducers/cartSlice";
import { paths } from "config/paths";

export function MenuLinks({ isOpen }) {
  const { isLoggedIn, user } = useSelector(userSelector);
  const { countProducts } = useSelector(cartSelector);

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
        <MenuItem to={paths.home}>Inicio</MenuItem>
        <MenuItem to={paths.cart}>
          Carrito
          {countProducts > 0 ? (
            <Badge colorScheme="orange" ml={2} mb={3}>
              {countProducts}
            </Badge>
          ) : (
            ""
          )}
        </MenuItem>
        <MenuItem to={paths.contacts}>Contactos</MenuItem>
        {isLoggedIn ? (
          <MenuAvatar fullname={user.fullname} />
        ) : (
          <MenuAuthButtons />
        )}
      </Stack>
    </Box>
  );
}
