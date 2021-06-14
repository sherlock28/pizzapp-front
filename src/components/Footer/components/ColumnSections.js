import React from "react";
import { Center, Box, List, Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from "wouter";

export function ColumnSections(props) {
    return (
        <Center>
            <Box height="auto">
                <List spacing={3}>
                    <Flex>
                        <Text ml={2} {...props}>
                            <Link href="/"><ChevronRightIcon boxSize={6} /> Inicio</Link>
                        </Text>
                    </Flex>
                    <Flex>
                        <Text ml={2} {...props}>
                            <Link href="/account"> <ChevronRightIcon boxSize={6} /> Mi cuenta</Link>
                        </Text>
                    </Flex>
                    <Flex>
                        <Text ml={2} {...props}>
                            <Link href="/contacts"><ChevronRightIcon boxSize={6} /> Contactos</Link>
                        </Text>
                    </Flex>
                </List>
            </Box>
        </Center>
    )
}
