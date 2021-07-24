import React from "react";
import { Center, Text, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { colors } from "config/colorPalette";
import { useLocation } from "wouter";
import { paths } from "config/paths";

export function EmptyCart() {
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();

  return (
    <Center d="flex" flexDir="column" my={100}>
      <Text fontSize="3xl">Tu carrito está vacío</Text>
      <Button
        onClick={() => setLocation(paths.home)}
        rightIcon={<ArrowBackIcon />}
        mt={6}
        border={`1px solid ${colors.btnCard}`}
        size="md"
        color={colors.btnCard}
        _hover={{
          background: colors.hoverBtnCard,
          color: "black",
        }}
      >
        Ir a la lista de productos
      </Button>
    </Center>
  );
}
