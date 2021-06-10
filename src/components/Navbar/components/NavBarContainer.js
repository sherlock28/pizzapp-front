import React from "react";
import { Flex } from "@chakra-ui/react";

export const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg="#FB8B24"
      {...props}
    >
      {children}
    </Flex>
  );
};
