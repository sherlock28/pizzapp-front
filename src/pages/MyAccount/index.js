import React from "react";
import { useIsLogged } from "hooks/useIsLogged";
import { Heading, Container, Flex, Avatar, Text, Divider, Box, Button } from "@chakra-ui/react";
import { colors } from "config/colorPalette";

export function MyAccountPage() {
  useIsLogged();

  const user = {
    username: "user1",
    name: "John Doe",
    email: "example@gmail.com",
    phone: "+54 381 459 4138",
    password: "************"
  }

  const handleEditPass = () => {
    console.log("Edit Password");
  }

  const handleEditPhone = () => {
    console.log("Edit Phone");
  }


  return (
    <>
      <Heading fontWeight="bold" as="h2" size="lg">
        Mi cuenta
      </Heading>
      <Container maxW="container.lg" mt={4}>
        <Flex p={2} mb={4}>
          <Avatar size="lg" src=""/>
          <Flex flexDir="column" mx={2}>
            <Text fontSize={"1.5rem"} fontWeight={500}>&nbsp;&nbsp;{user.name}</Text>
            <Text fontSize={"1rem"} fontWeight="light" lineHeight={1}>&nbsp;&nbsp;{user.email}</Text>
          </Flex>
        </Flex>
        <Divider orientation="horizontal" />
        <Flex p={2} mb={4} flexDir="column">
          <Heading as="h5" size="sm" my="1rem">Usuario y clave</Heading>
          <Box mb="0.8rem">
            <Heading as="h6" size="xs" fontWeight="light" mb="0.5rem">Nombre de usuario</Heading>
            <Text fontSize={"1rem"} fontWeight="light">{user.username}</Text>
          </Box>
          <Box>
            <Heading as="h6" size="xs" fontWeight="light" mb="0.5rem">Clave</Heading>
              <Text fontSize={"1rem"} fontWeight="light">{user.password}</Text>
              <Button color={`${colors.orange1}`} variant="link" mx={2} onClick={handleEditPass}>Editar</Button>
          </Box>
        </Flex>
        <Divider orientation="horizontal" />
        <Flex p={2} mb={4} flexDir="column">
          <Heading as="h5" size="sm" my="1rem">Datos personales</Heading>
          <Box mb="0.8rem">
            <Heading as="h6" size="xs" fontWeight="light" mb="0.5rem">Nombre</Heading>
            <Text fontSize={"1rem"} fontWeight="light">{user.name}</Text>
          </Box>
          <Box>
            <Heading as="h6" size="sm" fontWeight="light" mb="0.5rem">Teléfono</Heading>
              <Text fontSize={"1rem"} fontWeight="light">{user.phone}</Text> 
              <Button color={`${colors.orange1}`} variant="link" mx={2} onClick={handleEditPhone}>Editar</Button>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
