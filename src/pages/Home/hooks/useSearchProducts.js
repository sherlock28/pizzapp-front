import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productSelector, setFilteredProducts } from "reducers/productSlice";

export function useSearchProducts() {

    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");

    const { products } = useSelector(productSelector);

    const handleChange = e => {
        setQuery(e.target.value);
        filter();
    }

    const filter = () => {
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

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setFilteredProducts([]));
    }

    return {
        handleChange, handleSubmit, message
    }
}