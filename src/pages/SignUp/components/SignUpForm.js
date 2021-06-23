import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { registerAction } from "reducers/userSlice";
import {
  validateUsername,
  validateFullname,
  validateEmail,
  validatePhone,
  validatePassword,
} from "./validations";

export function SignUpForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = data => {
    if (data.password === data.confirmPassword) {
      dispatch(registerAction(data));
    }
  };

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

            <FormControl m={2} isInvalid={errors.confirmPassword}>
              <FormLabel>Confirma tu contraseña</FormLabel>
              <Input
                id="confirmPassword"
                type={show ? "text" : "password"}
                placeholder="Confirmación de contraseña"
                {...register("confirmPassword", validatePassword)}
              />
              <FormErrorMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Center>
            <Button
              onClick={handleSubmit(onSubmit)}
              bg="#E36414"
              type="submit"
              isLoading={isSubmitting}
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
