import React from "react";
import { Heading, Input, SimpleGrid } from "@chakra-ui/react"
import { ProductCard } from "./components/ProductCard";

export function HomePage() {
  return <>
    <Heading fontWeight="bold" as="h1" size="2xl">Pizzapp</Heading>
    <Input variant="flushed" placeholder="Busca tu pizza..." size="lg" w="50%" my={8} />
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </SimpleGrid>
  </>;
}
