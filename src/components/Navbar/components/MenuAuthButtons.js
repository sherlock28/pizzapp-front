import React from "react";
import { Button } from "@chakra-ui/react";
import { useLocation } from "wouter";

export function MenuAuthButtons() {

    // eslint-disable-next-line
    const [_, setLocation] = useLocation();

    return (
        <>
            <Button
                color="white"
                size="md"
                variant="link"
                onClick={() => setLocation("/login")}
                fontSize={{ base: "16px", sm: "16px", md: "16px", lg: "16px" }}
                minW={"140px"}
                _focus={{
                    border: "none",
                }}
            >
                Iniciar sesión
            </Button>
            <Button
                bg="#E36414"
                size="md"
                fontSize={{ base: "16px", sm: "16px", md: "16px", lg: "16px" }}
                onClick={() => setLocation("/register")}
                minW={"140px"}
            >
                Registrate
            </Button>
        </>
    )
}
