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
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, userSelector } from "reducers/userSlice";
import { colors } from "config/colorPalette";
import { useLocation } from "wouter";
import { paths } from "config/paths";

export function MenuAvatar({ fullname }) {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();
  const { token } = useSelector(userSelector);
  // eslint-disable-next-line
  const { colorMode, toggleColorMode } = useColorMode();

  const handleSubmit = () => {
    dispatch(logoutAction({ jwt: token }));
  };

  const goToCart = () => {
    setLocation(paths.cart);
  };

  const goToMyAccount = () => {
    setLocation(paths.account);
  };

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
          <MenuItem onClick={handleSubmit}>Cerrar sesión</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
