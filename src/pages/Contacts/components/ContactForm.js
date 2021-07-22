import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import { validateEmail, validateFullname } from "config/validations";
import { colors } from "config/colorPalette";
import { useContactForm } from "./useContactForm";

export function ContactForm() {
  const { register, errors, onSubmit, handleSubmit } = useContactForm();

  return (
    <>
      <Box textAlign="left">
        <form>
          <FormControl m={2} isInvalid={errors.fullname}>
            <FormLabel>Ingresá tu nombre</FormLabel>
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

          <FormControl m={2} isInvalid={errors.message}>
            <FormLabel>Ingresá tu mensaje</FormLabel>
            <Textarea
              placeholder="Mensaje"
              size="md"
              rows={6}
              resize="none"
              {...register("message", {
                required: "Debes ingresar tu mensaje.",
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

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
              isLoading={false}
              loadingText="Enviando"
              width="60%"
              mt={4}
            >
              Enviar
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
}
