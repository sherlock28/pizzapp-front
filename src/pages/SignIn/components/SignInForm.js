import React, { useState, useEffect } from "react";
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
import { Link, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, userSelector, clearState } from "reducers/userSlice";
import { validateEmail, validatePassword } from "./validations";
import { useToast } from "@chakra-ui/react";
import { colors } from "config/colorPalette";

export function SignInForm() {
  // eslint-disable-next-line
  const [_, setLocation] = useLocation();
  const dispatch = useDispatch();
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
    dispatch(loginAction(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
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

    if (isSuccess) {
      setLocation("/");
    }
  }, // eslint-disable-next-line 
    [isError, isSuccess]);

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
                <LinkChakra color={colors.orangeBg}>
                  ¿Olvidaste tu contraseña?
                </LinkChakra>
              </Link>
            </Box>
          </Stack>

          <Center>
            <Button
              onClick={handleSubmit(onSubmit)}
              bg={colors.orange1}
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
