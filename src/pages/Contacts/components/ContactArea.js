import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ContactHeader } from "./ContactHeader";
import { ContactForm } from "./ContactForm";

export function ContactArea() {
  return (
    <Flex width="full" align="center" justifyContent="center" my={8}>
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
          <ContactHeader />
          <ContactForm />
        </Box>
      </Box>
    </Flex>
  );
}
