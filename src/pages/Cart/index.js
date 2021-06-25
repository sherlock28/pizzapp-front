import React from "react";
import { useIsLogged } from "hooks/useIsLogged";

export function CartPage() {
    useIsLogged();

    return (<>Carrito</>)
}
