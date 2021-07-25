import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { products } from "services";

export function useGetProductById() {
  // eslint-disable-next-line
  const [_, params] = useRoute("/detail/:id");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { id } = params;
    products
      .getProductById({ idProduct: id })
      .then(res => {
        res === [] ? setProduct(null) : setProduct(res.data.product);
      })
      .catch(err => console.error(err));
    // eslint-disable-next-line
  }, []);

  return {
    product,
  };
}
