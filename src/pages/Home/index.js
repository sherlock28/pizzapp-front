import React, { useEffect } from "react";
import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "./components/ProductCard";
import { SearchForm } from "./components/SearchForm";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "reducers/productSlice";

export function HomePage() {
  const listProducts = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);
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
      {loading ?
        <LoadingSkeleton /> :
        listProducts.map(product => {
          return <ProductCard product={product} key={product._id} />
        })
      }
    </SimpleGrid>
  </>;
}
