import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Avatar
} from "@chakra-ui/react";

export function MenuAvatar({ fullname }) {
    return (
        <Menu>
            <MenuButton>
                <Avatar name={fullname} />
            </MenuButton>
            <MenuList>
                <MenuGroup>
                    <MenuItem>Mi cuenta</MenuItem>
                    <MenuItem>Carrito</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                    <MenuItem>Cerrar sesión</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}
