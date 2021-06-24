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
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, userSelector } from "reducers/userSlice";

export function MenuAvatar({ fullname }) {
    const dispatch = useDispatch();
    const { token } = useSelector(userSelector);

    const handleSubmit = () => {
        dispatch(logoutAction({ jwt: token }));
    }

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
                    <MenuItem onClick={handleSubmit}>Cerrar sesión</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}
