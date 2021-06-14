import React, { useEffect } from "react";
import { Heading, Input, SimpleGrid } from "@chakra-ui/react"
import { ProductCard } from "./components/ProductCard";
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
    <Input variant="flushed" placeholder="Busca tu pizza..." size="lg" w="50%" my={8} />
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
      {listProducts.map(product => {
        return <ProductCard product={product}/>
      })}
    </SimpleGrid>
  </>;
}
