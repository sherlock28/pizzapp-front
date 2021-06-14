import React from "react";
import logo from "assets/logo.png"
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "wouter";

export function Logo(props) {
  return (
    <Box {...props}>
      <Link to="/">
        <Flex h="80px" 
          alignItems="center"
          _hover={{
            cursor: "pointer",
          }}>
          <Image
            borderRadius="full"
            boxSize="80px"
            src={logo}
            alt="Logo"
          />
          <Text
            fontSize={40}
            fontWeight="bold"
          >
            Pizzapp
          </Text>
        </Flex>
      </Link>
    </Box>
  );
}
