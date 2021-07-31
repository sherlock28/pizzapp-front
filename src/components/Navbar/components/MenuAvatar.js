import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Avatar,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { colors } from "config/colorPalette";
import { useNavbar } from "../hooks/useNavbar";

export function MenuAvatar({ fullname }) {
  const { toggleColorMode, handleLogout, goToCart, goToMyAccount } =
    useNavbar();

  return (
    <Menu>
      <MenuButton>
        <Avatar name={fullname} bg={colors.orange1} />
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <MenuItem onClick={goToMyAccount}>Mi cuenta</MenuItem>
          <MenuItem onClick={goToCart}>Carrito</MenuItem>
          <MenuItem>
            <Text mr={2}>Modo:</Text>
            <Switch onChange={toggleColorMode} size="md" />
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
