import React from "react";
import {
  Heading,
  Container,
  Flex,
  Divider,
  Text,
  Button,
} from "@chakra-ui/react";
import { useIsLogged } from "hooks/useIsLogged";
import { ItemCart } from "./components/ItemCart";
import { colors } from "config/colorPalette";
import { useSelector } from "react-redux";
import { cartSelector } from "reducers/cartSlice";
import { useGetTotal } from "./hooks/useGetTotal";

export function CartPage() {
  useIsLogged();

  const { cart } = useSelector(cartSelector);
  const { total } = useGetTotal({ cart });

  return (
    <>
      <Heading fontWeight="bold" as="h2" size="lg">
        Carrito
      </Heading>
      <Container maxW="container.lg" mt={4}>
        <Flex flexDir="column" w="100%">
          {cart.map(product => (
            <ItemCart product={product} key={product._id} />
          ))}
        </Flex>

        <Flex flexDir="row-reverse" mt={4}>
          <Text
            fontSize={18}
            fontWeight="light"
            color={colors.off}
            mr={8}
            ml={28}
          >
            Gratis
          </Text>
          <Text fontSize={18} fontWeight="normal" color={colors.orange1}>
            Enviar a: San Loremzo 100, San Miguel de Tucumán
          </Text>
        </Flex>
        <Flex flexDir="row-reverse" mt={8}>
          <Text fontSize={"1.625rem"} fontWeight="medium" mr={8} ml={20}>
            ${total}
          </Text>
          <Text fontSize={"1.625rem"} fontWeight="light">
            Total con envio:{" "}
          </Text>
        </Flex>

        <Divider my={4} />

        <Flex flexDir="row-reverse">
          <Button
            m={4}
            w={["240px", "100%", "80%", "80%", "240px"]}
            onClick={() => console.log("Comprar ahora")}
            bg={colors.btnCard}
            size="md"
            color="white"
            _hover={{
              background: colors.hoverBtnCard,
              color: "black",
            }}
          >
            Continuar compra
          </Button>
        </Flex>
      </Container>
    </>
  );
}
