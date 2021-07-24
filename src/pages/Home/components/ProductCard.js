import React from "react";
import { Box, Image, Text, Flex, Button, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "wouter";
import { LoginModal } from "components/LoginModal";
import { useAddProductToCart } from "../hooks/useAddProductToCart";

import { colors } from "config/colorPalette";
import { paths } from "config/paths";

export function ProductCard({ product }) {
  const { addToCart, isOpen, onClose } = useAddProductToCart();

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        transition="box-shadow 0.6s ease-out;"
        _hover={{
          boxShadow: "1px 0px 12px 0px rgba(50, 50, 50, 0.73)",
        }}
      >
        <Link to={`${paths.detailForPage}/${product._id}`}>
          <Image
            boxSize="300px"
            src={product.imageURL}
            alt={product.name}
            objectFit="cover"
          />

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
                {product.off && (
                  <Badge ml="1" colorScheme="green" color={colors.off}>
                    {`   ${product.off} OFF`}
                  </Badge>
                )}
              </Text>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={
                      i < product.rating
                        ? colors.starIconFull
                        : colors.starIconEmpty
                    }
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Link>

        <Flex justify="center">
          <Button
            onClick={() => addToCart(product._id)}
            m={4}
            w="80%"
            bg={colors.btnCard}
            size="sm"
            color="white"
            _hover={{
              background: colors.hoverBtnCard,
              color: "black",
            }}
          >
            Agregar al carrito
          </Button>
          <LoginModal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Box>
    </>
  );
}
