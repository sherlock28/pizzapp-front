import React from "react";
import { Skeleton, Flex } from "@chakra-ui/react";

export function LoadingSkeleton() {
    return (
        <Flex w="100%" my={8} >
            <Skeleton h="300px" w="300px" />
            <Flex flexDir="column" w="100%" p={4}>
                <Skeleton h="20px" w="300px" />
                <Skeleton h="10px" w="100%" mt={4} />
                <Skeleton h="10px" w="100%" mt={2} />
                <Skeleton h="10px" w="100%" mt={2} />
                <Skeleton h="10px" w="100%" mt={2} />
                <Skeleton h="10px" w="100%" mt={2} />
                <Skeleton h="10px" w="50%" mt={2} />
                <Skeleton h="20px" w="30%" mt={4} />
                <Skeleton h="10px" w="20%" mt={2} />
                <Flex flexDir="row" w="100%" justifyContent="center">
                    <Skeleton h="30px" w="30%" mt={4} p={4} />
                    <Skeleton h="30px" w="30%" mt={4} ml={4} />
                </Flex>
            </Flex>
        </Flex>
    )
}
