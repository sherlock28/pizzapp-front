import React, { useEffect } from "react";
import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "./components/ProductCard";
import { SearchForm } from "./components/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "reducers/productsReducer";

export function HomePage() {
  const listProducts = useSelector(state => state.products.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return <>
    <Heading fontWeight="bold" as="h1" size="2xl">Pizzapp</Heading>
    <Box d="flex" justifyContent="center" w="100%">
      <SearchForm />
    </Box>
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
      {listProducts.map(product => {
        return <ProductCard product={product} />
      })}
    </SimpleGrid>
  </>;
}
