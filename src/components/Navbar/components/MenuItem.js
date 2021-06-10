import React from "react";
import { Text } from "@chakra-ui/react";
import { Link, useLocation } from "wouter";

export const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  const [location] = useLocation();
  const color = location === to ? "#f6dcbf" : "black";

  return (
    <Link to={to}>
      <Text
        py={[3, 3, 1, 1]} 
        display="block"
        color={color}
        fontSize={{ base: "15px", sm: "15px", md: "20px", lg: "20px" }}
      >
        {children}
      </Text>
    </Link>
  );
};
