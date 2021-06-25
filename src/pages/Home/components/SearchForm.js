import React from "react";
import { Input, Box, Text } from "@chakra-ui/react";
import { useSearchProducts } from "../hooks/useSearchProducts";

export function SearchForm() {

    const { handleSubmit, handleChange, message } = useSearchProducts();

    return (
        <form onSubmit={handleSubmit}>
            <Box d="flex" flexDir="column" justifyContent="center">
                <Input
                    name="queryField"
                    onChange={handleChange}
                    variant="flushed"
                    placeholder="Busca tu pizza preferida..."
                    size="lg"
                    w={["100%", "340px", "440px", "500px"]}
                    my={8}
                />
                <Text mb={8}>{message}</Text>
            </Box>
        </form>
    )
}
