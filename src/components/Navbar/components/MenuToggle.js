import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <CloseIcon color={"#f6dcbf"} />
      ) : (
        <HamburgerIcon color={"#f6dcbf"} />
      )}
    </Box>
  );
};
