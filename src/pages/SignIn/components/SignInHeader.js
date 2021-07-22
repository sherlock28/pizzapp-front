import React from "react";
import { Box, Heading, Text, Link as LinkChakra } from "@chakra-ui/react";
import { Link } from "wouter";
import { colors } from "config/colorPalette";
import { paths } from "config/paths";

export function SignInHeader() {
  return (
    <Box textAlign="center">
      <Heading>Accedé a tu cuenta</Heading>
      <Text mt={4}>
        ¿Todavía no tenés cuenta en Pizzapp?{" "}
        <Link to={paths.register}>
          <LinkChakra color={colors.orangeBg}>Clic aquí</LinkChakra>
        </Link>
      </Text>
    </Box>
  );
}
