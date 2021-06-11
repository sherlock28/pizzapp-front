import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <CloseIcon color="white" w={6} h={6} />
      ) : (
        <HamburgerIcon color="white" w={6} h={6} />
      )}
    </Box>
  );
};
