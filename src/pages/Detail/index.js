import React, { useState, useEffect } from "react";
import { Box, Image, Center, Text, Flex, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { useRoute } from "wouter";
import { products } from "services";


export function DetailPage() {
  const [_, params] = useRoute("/detail/:id");
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const { id } = params
    products.getAllProductsById({ idProduct: id })
      .then(res => {
        setProduct(res.data.product)
      })
  }, [])


  if (product === null) {
    return <LoadingSkeleton />
  };

  return (
    <Flex w="100%" mt={10} flexDir={["column", "column", "row", "row", "row"]}>

      <Box w={["100%", "100%", "30%", "30%", "30%"]} m="auto" >
        <Image boxSize="300px" src={product.imageURL} alt={product.name} objectFit="cover" />
      </Box>

      <Box w={["100%", "100%", "70%", "70%", "70%"]} ml={[0, 0, 8, 8, 8]} >
        <Box mt="1">
          <Text
            fontWeight="bold"
            fontSize={22}
            as="h2"
            lineHeight="tight">
            {product.name}
          </Text>
        </Box>
        <Box mt={2}>
          <Text
            fontSize={16}
            as="p"
            lineHeight="tight"
            textAlign="justify"
          >
            {product.description}
          </Text>
        </Box>


        <Box d="flex" mt={4}>
          <Text fontSize={36}>
            ${product.price}
          </Text>
          {product.off && <Text as="span" mt={2} ml={1} fontSize={20} color="#00a650">
            {`   ${product.off} OFF`}
          </Text>}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < product.rating ? "#fa983a" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {product.reviewCount} reviews
          </Box>
        </Box>

        <Center w="100%">
          <Flex flexDir={["column", "column", "row", "row", "row"]}>

            <Box>
              <Button
                m={4}
                w={["240px", "100%", "80%", "80%", "80%"]}
                border="1px solid #fa8231"
                size="md"
                color="#fa8231"
                _hover={{
                  background: "#ffaf40",
                  color: "black"
                }}>
                Comprar ahora
              </Button>
            </Box>

            <Box>

              <Button
                m={4}
                w={["240px", "100%", "80%", "80%", "80%"]}
                bg="#fa8231"
                size="md"
                color="white"
                _hover={{
                  background: "#ffaf40",
                  color: "black"
                }}>
                Agregar al carrito
              </Button>
            </Box>

          </Flex>
        </Center>

      </Box>
    </Flex>
  );
}
