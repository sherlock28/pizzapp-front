import React from "react";
import { Box, Heading, Text, Link as LinkChakra } from "@chakra-ui/react";
import { Link } from "wouter";

export function SignUpHeader() {
  return (
    <Box textAlign="center">
      <Heading>Registro</Heading>
      <Text mt={4}>
        ¿Ya tenés cuenta con Pizzapp?{" "}
        <Link to="/signin">
          <LinkChakra color="teal.500">Clic aquí</LinkChakra>
        </Link>
      </Text>
    </Box>
  );
}
