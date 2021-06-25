import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productSelector, setFilteredProducts } from "reducers/productSlice";

export function useSearchProducts() {

    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");

    const { products } = useSelector(productSelector);

    const filter = e => {
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

    return {
        filter, message
    }
}