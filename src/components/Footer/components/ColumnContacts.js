import React from "react";
import { Center, Box, List, Flex, Text, Link } from "@chakra-ui/react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

export function ColumnContacts(props) {
    return (
        <Center>
            <Box height="auto">
                <List spacing={3}>
                    <Flex>
                        <AiFillInstagram size={20} />
                        <Text ml={2} {...props}>
                            <Link href="https://www.instagram.com" target="_blanck">Instagram</Link>
                        </Text>
                    </Flex>
                    <Flex>
                        <AiFillFacebook size={20} />
                        <Text ml={2} {...props}>
                            <Link href="https://www.facebook.com" target="_blanck">Facebook</Link>
                        </Text>
                    </Flex>
                </List>
            </Box>
        </Center>
    )
}
