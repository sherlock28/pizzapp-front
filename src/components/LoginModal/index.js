import React, { useState, useEffect } from "react";
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
import { useForm } from "react-hook-form";
import { validateEmail, validatePassword } from "config/validations";
import { useLocation } from "wouter";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, userSelector, clearState } from "reducers/userSlice";

import { colors } from "config/colorPalette";

let showToast = true;

export function LoginModal({ isOpen, onClose }) {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const dispatch = useDispatch();
    const toast = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector);

    const onSubmit = data => {
        dispatch(loginAction(data));
        showToast = true;
    };

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            if (showToast) {
                toast({
                    title: "Error",
                    description: errorMessage,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
                showToast = !showToast;
                dispatch(clearState());
            }
        }

        if (isSuccess) {
            onClose();
        }
    }, // eslint-disable-next-line 
        [isError, isSuccess]);

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
                                        type={show ? "text" : "password"}
                                        placeholder="Contraseña"
                                        {...register("password", validatePassword)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                                            {show ? <ViewOffIcon /> : <ViewIcon />}
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