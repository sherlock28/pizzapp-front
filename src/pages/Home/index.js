import React, { useEffect } from "react";
import { Heading, Box, SimpleGrid, list } from "@chakra-ui/react";
import { ProductCard } from "./components/ProductCard";
import { SearchForm } from "./components/SearchForm";
import { LoadingSkeleton } from "./components/LoadingSkeleton";
import { useSelector, useDispatch } from "react-redux";
import { productSelector, fetchAllProducts } from "reducers/productSlice";

export function HomePage() {
  const { loading, filteredProducts, products: allProducts } = useSelector(productSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const isWithoutResults = filteredProducts.length === 0;
  let listProducts;
  if (isWithoutResults) {
    listProducts = allProducts;
  } else {
    listProducts = filteredProducts;
  }

  return <>
    <Heading fontWeight="bold" as="h1" size="2xl">Pizzapp</Heading>
    <SearchForm />
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
      {loading ?
        <LoadingSkeleton />
        : listProducts.map(product => {
          return <ProductCard product={product} key={product._id} />
        })
      }
    </SimpleGrid>
  </>;
}
