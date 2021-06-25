import React from "react";
import { SimpleGrid, Box, Flex, Text } from "@chakra-ui/react";
import { ColumnSections } from "./components/ColumnSections";
import { ColumnContacts } from "./components/ColumnContacts";
import { colors } from "config/colorPalette";

export function Footer() {
    return (
        <Box
            w="100%"
            bg={colors.orangeBg}
            mt={16}
            p={8}>

            <SimpleGrid columns={[2, 2, 2, 2]} spacing={20}>
                <ColumnSections
                    color="white"
                    _hover={{
                        color: colors.orange2
                    }} />
                <ColumnContacts
                    color="white"
                    _hover={{
                        color: colors.orange2
                    }} />
            </SimpleGrid>
            <Flex pt={4} direction="column" alignItems="center">
                <Flex>
                    <Text>© 2021 by rododev. All Rights Reserved.</Text>
                </Flex>
            </Flex>
        </Box>
    )
}


