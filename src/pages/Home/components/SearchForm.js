import React, { useState } from "react";
import { Input, Box, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { productSelector, setFilteredProducts } from "reducers/productSlice";

export function SearchForm() {

    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");

    const { products } = useSelector(productSelector);

    const handleChange = e => {
        setQuery(e.target.value);

        let result = [];
        products.forEach(product => {
            let name = product.name.toLowerCase();
            if (name.indexOf(query.toLowerCase()) !== -1) {
                result.push(product);
            };
        });

        if (result.length === 0) {
            setMessage("Producto no encontrado");
        } else {
            setMessage("");
        }

        dispatch(setFilteredProducts(result));
    }


    return (
        <Box d="flex" flexDir="columns" justifyContent="center" w="100%">
            <Input
                name="queryField"
                onChange={handleChange}
                variant="flushed"
                placeholder="Busca tu pizza preferida..."
                size="lg"
                w={500}
                my={8}
            />
            <Text>{message}</Text>
        </Box>

    )
}
