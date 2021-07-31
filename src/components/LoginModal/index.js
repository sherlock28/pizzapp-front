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
    Input,
    InputGroup,
    InputRightElement,
    FormErrorMessage,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { validateEmail, validatePassword } from "config/validations";
import { useModalLogin } from "./hooks/useModalLogin";

import { colors } from "config/colorPalette";

export function LoginModal({ isOpen, onClose }) {

    const {
        handleSubmit, onSubmit, isFetching, register, errors, showPass, handleClick
    } = useModalLogin({ isOpen, onClose })

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <form>

                    <ModalContent>
                        <ModalHeader>Accedé a tu cuenta</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>

                            <FormControl m={2} isInvalid={errors.email}>
                                <FormLabel>Ingresá tu email</FormLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    {...register("email", validateEmail)}
                                />
                                <FormErrorMessage>
                                    {errors.email && errors.email.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl m={2} isInvalid={errors.password}>
                                <FormLabel>Ingresá tu contraseña</FormLabel>
                                <InputGroup>
                                    <Input
                                        id="password"
                                        type={showPass ? "text" : "password"}
                                        placeholder="Contraseña"
                                        {...register("password", validatePassword)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {showPass ? <ViewOffIcon /> : <ViewIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors.password && errors.password.message}
                                </FormErrorMessage>
                            </FormControl>

                        </ModalBody>

                        <ModalFooter>
                            <Button
                                onClick={handleSubmit(onSubmit)}
                                bg={colors.orange1}
                                type="submit"
                                isLoading={isFetching}
                                loadingText="Enviando"
                                w="80%"
                                m="auto"
                            >
                                Iniciar sesión
                            </Button>
                        </ModalFooter>
                    </ModalContent>

                </form>
            </Modal>
        </>
    )
}