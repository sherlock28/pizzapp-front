import React from "react";
import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "wouter";

export function ProductCard({ product }) {

    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            transition="box-shadow 0.6s ease-out;"
            _hover={{
                boxShadow:
                    "1px 0px 12px 0px rgba(50, 50, 50, 0.73)"
            }} >
            <Link to={`/detail/${product._id}`}>
                <Image boxSize="300px" src={product.imageURL} alt={product.name} objectFit="cover" />

                <Box p="6">
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {product.name}
                    </Box>

                    <Box>
                        <Text fontSize="2xl">
                            ${product.price}
                            {product.off && <Box as="span" color="#00a650" fontSize="sm">
                                {`   ${product.off} OFF`}
                            </Box>}
                        </Text>
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
                </Box>
            </Link>

            <Flex justify="center">
                <Button m={4} w="80%" bg="#fa8231" size="sm" color="white">
                    Agregar al carro
                </Button>
            </Flex>

        </Box >
    )
}