import React from "react";
import { Center, Box, List, Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "wouter";
import { paths } from "config/paths";

export function ColumnSections(props) {
  return (
    <Center>
      <Box height="auto">
        <List spacing={3}>
          <Flex>
            <Text ml={2} {...props}>
              <Link to={paths.home}>
                <ChevronRightIcon boxSize={6} /> Inicio
              </Link>
            </Text>
          </Flex>

          <Flex>
            <Text ml={2} {...props}>
              <Link to={paths.account}>
                {" "}
                <ChevronRightIcon boxSize={6} /> Mi cuenta
              </Link>
            </Text>
          </Flex>

          <Flex>
            <Text ml={2} {...props}>
              <Link to={paths.contacts}>
                <ChevronRightIcon boxSize={6} /> Contactos
              </Link>
            </Text>
          </Flex>
        </List>
      </Box>
    </Center>
  );
}
