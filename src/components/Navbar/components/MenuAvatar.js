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
    useColorMode
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, userSelector } from "reducers/userSlice";
import { colors } from "config/colorPalette";

export function MenuAvatar({ fullname }) {
    const dispatch = useDispatch();
    const { token } = useSelector(userSelector);
    // eslint-disable-next-line
    const { colorMode, toggleColorMode } = useColorMode();


    const handleSubmit = () => {
        dispatch(logoutAction({ jwt: token }));
    }

    return (
        <Menu>
            <MenuButton>
                <Avatar name={fullname} bg={colors.orange1} />
            </MenuButton>
            <MenuList>
                <MenuGroup>
                    <MenuItem>Mi cuenta</MenuItem>
                    <MenuItem>Carrito</MenuItem>
                    <MenuItem>
                        <Text mr={2}>Modo:</Text>
                        <Switch
                            onChange={toggleColorMode}
                            size="md"
                        />
                    </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                    <MenuItem onClick={handleSubmit}>Cerrar sesión</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}
