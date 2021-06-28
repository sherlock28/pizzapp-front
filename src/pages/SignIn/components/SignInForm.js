import React from "react";
import {
  Box,
  Link as LinkChakra,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  Input,
  InputRightElement,
  Stack,
  Checkbox,
  Button,
  Center,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "wouter";
import { validateEmail, validatePassword } from "./validations";
import { colors } from "config/colorPalette";
import { useSignInForm } from "./useSignInForm";

export function SignInForm() {

  const { onSubmit,
    handleShowPass,
    register,
    handleSubmit,
    errors,
    isFetching,
    showPass } = useSignInForm();

  return (
    <>
      <Box textAlign="left">
        <form>
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
                <Button h="1.75rem" size="sm" onClick={handleShowPass}>
                  {showPass ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <Stack isInline justifyContent="space-between" mt={4}>
            <Box>
              <Checkbox {...register("remindMe")}>Recordarme</Checkbox>
            </Box>
            <Box>
              <Link to="/forgetterpass">
                <LinkChakra color={colors.orangeBg}>
                  ¿Olvidaste tu contraseña?
                </LinkChakra>
              </Link>
            </Box>
          </Stack>

          <Center>
            <Button
              onClick={handleSubmit(onSubmit)}
              bg={colors.btnCard}
              color="white"
              _hover={{
                background: colors.hoverBtnCard,
                color: "black"
              }}
              type="submit"
              isLoading={isFetching}
              loadingText="Enviando"
              width="60%"
              mt={4}
            >
              Ingresar
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
}
