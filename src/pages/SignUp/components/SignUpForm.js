import React from "react";
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
import {
  validateUsernameRegister,
  validateFullnameRegister,
  validateEmailRegister,
  validatePhoneRegister,
  validatePasswordRegister,
} from "config/validations";
import { useSignUpForm } from "./useSignUpForm";
import { colors } from "config/colorPalette";

export function SignUpForm() {
  const {
    handleShowPass,
    register,
    onSubmit,
    handleSubmit,
    errors,
    showPass,
    isFetching,
  } = useSignUpForm();

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
                {...register("username", validateUsernameRegister)}
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
                {...register("fullname", validateFullnameRegister)}
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
                {...register("email", validateEmailRegister)}
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
                {...register("phone", validatePhoneRegister)}
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
                  type={showPass ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("password", validatePasswordRegister)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowPass}>
                    {showPass ? <ViewOffIcon /> : <ViewIcon />}
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
                type={showPass ? "text" : "password"}
                placeholder="Confirmación de contraseña"
                {...register("confirmpass", validatePasswordRegister)}
              />
              <FormErrorMessage>
                {errors.confirmpass && errors.confirmpass.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Center>
            <Button
              onClick={handleSubmit(onSubmit)}
              bg={colors.btnCard}
              color="white"
              _hover={{
                background: colors.hoverBtnCard,
                color: "black",
              }}
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
