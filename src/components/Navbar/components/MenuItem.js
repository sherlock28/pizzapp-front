import React from "react";
import { Text } from "@chakra-ui/react";
import { Link, useLocation } from "wouter";

export const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  const [location] = useLocation();
  const color = location === to ? "#E36414" : "white";

  return (
    <Link to={to}>
      <Text
        py={[3, 3, 1, 1]}
        display="block"
        color={color}
        fontSize={{ base: "16px", sm: "16px", md: "16px", lg: "16px" }}
        _hover={{
          cursor: "pointer",
        }}
      >
        {children}
      </Text>
    </Link>
  );
};
