import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { SignUpHeader } from "./SignUpHeader";
import { SignUpForm } from "./SignUpForm";

export function SignUpArea() {
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
    >
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="900px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4}>
          <SignUpHeader />
          <SignUpForm />
        </Box>
      </Box>
    </Flex>
  );
}
