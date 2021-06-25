import React, { useState } from "react";
import { NavBarContainer } from "./components/NavBarContainer";
import { Logo } from "./components/Logo";
import { MenuToggle } from "./components/MenuToggle";
import { MenuLinks } from "./components/MenuLinks";

export const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color="white"
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
