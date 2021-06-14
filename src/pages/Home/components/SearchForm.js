import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

export function SearchForm() {

    const [query, setQuery] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(query)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                name="queryField"
                onChange={e => setQuery(e.target.value)}
                variant="flushed"
                placeholder="Busca tu pizza..."
                size="lg"
                w={500}
                my={8}
            />
        </form>
    )
}
