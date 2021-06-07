import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { SignInHeader } from "./SignInHeader";
import { SignInForm } from "./SignInForm";

export function SignInArea() {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box p={4}>
          <SignInHeader />
          <SignInForm />
        </Box>
      </Box>
    </Flex>
  );
}
