import React from "react";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "./components/ProductCard";
import { SearchForm } from "./components/SearchForm";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { useGetProducts } from "./hooks/useGetProducts";

export function HomePage() {

  const { listProducts, loading } = useGetProducts();

  return <>
    <Heading fontWeight="bold" as="h1" size="2xl">Pizzapp</Heading>
    <SearchForm />
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
      {loading && <LoadingSkeleton />}
      {
        listProducts && listProducts.map(product => {
          return <ProductCard product={product} key={product._id} />
        })
      }
    </SimpleGrid>
  </>;
}
