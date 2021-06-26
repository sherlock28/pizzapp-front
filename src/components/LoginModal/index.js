import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input
} from "@chakra-ui/react";
import { colors } from "config/colorPalette";

export function LoginModal({ isOpen, onClose }) {

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Accedé a tu cuenta</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Ingresá tu email</FormLabel>
                            <Input placeholder="Email" />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Ingresá tu contraseña</FormLabel>
                            <Input placeholder="Contraseña" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            w={"80%"}
                            m="auto"
                            bg={colors.orange1}
                            //isLoading={true}
                            loadingText="Enviando"
                        >
                            Iniciar sesión
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}