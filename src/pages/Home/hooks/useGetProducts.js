import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productSelector, fetchAllProducts } from "reducers/productSlice";

export function useGetProducts() {
    const { loading, filteredProducts, products: allProducts } = useSelector(productSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    let isWithoutResults;
    if (filteredProducts) {
        isWithoutResults = filteredProducts.length === 0;
    }
    let listProducts = [];
    if (isWithoutResults) {
        listProducts = allProducts;
    } else {
        listProducts = filteredProducts;
    }

    return {
        listProducts, loading
    }
}