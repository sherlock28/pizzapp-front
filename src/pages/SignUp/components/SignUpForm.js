import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginAction } from "reducers/authReducer";
import { validateEmail, validatePassword } from "./validations";

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
    console.log(data.remindMe);
    dispatch(loginAction(data));
  };

  return (
    <>
      <Box my={8} textAlign="left">
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

          <Stack isInline justifyContent="space-between" mt={4}>
            <Box>
              <Checkbox {...register("remindMe")}>Recordarme</Checkbox>
            </Box>
            <Box>
              <Link to="/forgetterpass">
                <LinkChakra color="teal.500">
                  ¿Olvidaste tu contraseña?
                </LinkChakra>
              </Link>
            </Box>
          </Stack>

          <Center>
            <Button
              onClick={handleSubmit(onSubmit)}
              colorScheme={"twitter"}
              type="submit"
              isLoading={isSubmitting}
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
