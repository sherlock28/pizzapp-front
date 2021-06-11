import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export function ProductCard() {
    const property = {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/67/Eataly_Las_Vegas_-_Feb_2019_-_Stierch_12.jpg",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{
            boxShadow:
                "1px 0px 12px 0px rgba(50, 50, 50, 0.73)"
        }}>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p="6">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {property.title}
                </Box>

                <Box>
                    {property.formattedPrice}
                    <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                    </Box>
                </Box>

                <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < property.rating ? "teal.500" : "gray.300"}
                            />
                        ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {property.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}