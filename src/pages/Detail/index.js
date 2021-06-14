import React from "react";
import { Box, Image, Center, Text, Flex, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const property = {
  imageURL: "https://res.cloudinary.com/dfzlexoul/image/upload/v1623682093/pizza-ternera_wifckn.jpg",
  name: "Pizza Napolitana",
  description: "La pizza napolitana tiene una masa tierna y delgada cuyos bordes son altos está reconocida como producto agroalimentario tradicional italiano.Las primeras referencias sobre esta pizza datan de mediados del siglo XVIII donde Vincenzo Corrado escribió un valioso tratado sobre los hábitos alimenticios de la ciudad de Nápoles, donde observo que la gente tenía por costumbre de guarnecer la pizza y los macarrones con tomate. Las primeras pizzerías aparecieron en Nápoles durante el siglo XIX y hasta mediados del siglo XX era un fenómeno exclusivo de esa ciudad.",
  price: "200",
  off: "10",
  reviewCount: 34,
  rating: 4,
}

export function DetailPage() {
  return (
    <Flex w="100%" mt={10} flexDir={["column", "column", "row", "row", "row"]}>

      <Box w={["100%", "100%", "30%", "30%", "30%"]} m="auto" boxSize={["340px", "340px", "340px", "500px", "500px"]}>
        <Image src={property.imageURL} alt={property.name} />
      </Box>

      <Box w={["100%", "100%", "70%", "70%", "70%"]} ml={[0, 0, 8, 8, 8]} >
        <Box mt="1">
          <Text
            fontWeight="bold"
            fontSize={22}
            as="h2"
            lineHeight="tight">
            {property.name}
          </Text>
        </Box>
        <Box mt={2}>
          <Text
            fontSize={16}
            lineHeight="tight"
            textAlign="justify"
          >
            {property.description}
          </Text>
        </Box>


        <Box d="flex" mt={4}>
          <Text fontSize={36}>
            ${property.price}
          </Text>
          {property.off && <Text as="span" mt={2} ml={1} fontSize={20} color="#00a650">
            {`   ${property.off} OFF`}
          </Text>}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "#fa983a" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
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
