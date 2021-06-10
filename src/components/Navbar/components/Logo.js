import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "wouter";

export function Logo(props) {
  return (
    <Box {...props}>
      <Link to="/">
        <Text
          fontSize="lg"
          fontWeight="bold"
          _hover={{
            cursor: "pointer",
          }}
        >
          Logo
        </Text>
      </Link>
    </Box>
  );
}
