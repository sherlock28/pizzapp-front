import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { colors } from "config/colorPalette";

export function ItemCart({ product }) {
  return (
    <Flex
      justifyContent="center"
      m={2}
      borderWidth="1px"
      borderRadius="lg"
      p={2}
    >
      <Image
        boxSize="80px"
        objectFit="cover"
        src={product.imageURL}
        alt={product.name}
      />
      <Box ml={8} minW={300}>
        <Text fontSize={20} fontWeight="bold">
          {product.name}
        </Text>
        <Text fontSize="14px" color={colors.off} mt={2}>
          Envío gratis
        </Text>
        <Button
          color={colors.orangeBg}
          size="md"
          variant="link"
          onClick={() => console.log("eliminar")}
          fontSize={14}
          mt={6}
          _hover={{
            textDecoration: "none",
          }}
          _focus={{
            border: "none",
          }}
        >
          Eliminar
        </Button>
      </Box>

      <Box ml={50}>
        <NumberInput size="sm" maxW={100} defaultValue={product.count} min={1}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>

      <Box ml={100}>
        <Text fontSize={"1.625rem"} fontWeight="medium">
          ${product.price}
        </Text>
      </Box>
    </Flex>
  );
}
