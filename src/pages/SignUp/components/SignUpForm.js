import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  FormErrorMessage,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Center,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerAction, userSelector, clearState } from "reducers/userSlice";
import { useLocation } from "wouter";
import {
  validateUsername,
  validateFullname,
  validateEmail,
  validatePhone,
  validatePassword,
} from "./validations";
import { useToast } from "@chakra-ui/react";
import { colors } from "config/colorPalette";

export function SignUpForm() {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );

  const toast = useToast();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = data => {
    if (data.password === data.confirmpass) {
      dispatch(registerAction(data));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      toast({
        title: "Success.",
        description: "Usuario creado con exito.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLocation("/login");
    }

    if (isError) {
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      dispatch(clearState());
    }
  },// eslint-disable-next-line 
    [isSuccess, isError]);

  return (
    <>
      <Box textAlign="left">
        <form>
          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.username}>
              <FormLabel>Nombre de usuario</FormLabel>
              <Input
                id="username"
                type="text"
                placeholder="Nombre de usuario"
                {...register("username", validateUsername)}
                w={["100%", "100%", "48%", "48%", "48%"]}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.fullname}>
              <FormLabel>Nombre</FormLabel>
              <Input
                id="fullname"
                type="text"
                placeholder="Nombre"
                {...register("fullname", validateFullname)}
              />
              <FormErrorMessage>
                {errors.fullname && errors.fullname.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
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

            <FormControl m={2} isInvalid={errors.phone}>
              <FormLabel>Celular</FormLabel>
              <Input
                id="phone"
                type="text"
                placeholder="Celular"
                w={"200px"}
                {...register("phone", validatePhone)}
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex direction={["column", "column", "row", "row", "row"]}>
            <FormControl m={2} isInvalid={errors.password}>
              <FormLabel>Contraseña</FormLabel>
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

            <FormControl m={2} isInvalid={errors.confirmpass}>
              <FormLabel>Confirma tu contraseña</FormLabel>
              <Input
                id="confirmpass"
                type={show ? "text" : "password"}
                placeholder="Confirmación de contraseña"
                {...register("confirmpass", validatePassword)}
              />
              <FormErrorMessage>
                {errors.confirmpass && errors.confirmpass.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Center>
            <Button
              onClick={handleSubmit(onSubmit)}
              bg={colors.orange1}
              type="submit"
              isLoading={isFetching}
              loadingText="Registrando"
              width="60%"
              mt={4}
            >
              Registrase
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
}
