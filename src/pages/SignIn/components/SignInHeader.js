import React from "react";
import { Box, Heading, Text, Link as LinkChakra } from "@chakra-ui/react";
import { Link } from "wouter";

export function SignInHeader() {
  return (
    <Box textAlign="center">
      <Heading>Accedé a tu cuenta</Heading>
      <Text mt={4}>
        ¿Todavía no tenés cuenta en Pizzapp?{" "}
        <Link to="/register">
          <LinkChakra color="#FB8B24">Clic aquí</LinkChakra>
        </Link>
      </Text>
    </Box>
  );
}
