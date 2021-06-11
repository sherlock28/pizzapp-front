import React from "react";
import { SimpleGrid, Box, Flex, Text } from "@chakra-ui/react";
import { ColumnSections } from "./components/ColumnSections";
import { ColumnContacts } from "./components/ColumnContacts";

export function Footer() {
    return (
        <Box w="100%" bg="#FB8B24" mt={16} p={8}>
            <SimpleGrid columns={[2, 2, 2, 2]} spacing={20}>
                <ColumnSections />
                <ColumnContacts />
            </SimpleGrid>
            <Flex pt={4} direction="column" alignItems="center">
                <Flex>
                    <Text>© 2021 by rododev. All Rights Reserved.</Text>
                </Flex>
            </Flex>
        </Box>
    )
}


