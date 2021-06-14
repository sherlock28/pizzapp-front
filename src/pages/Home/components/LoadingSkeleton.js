import React from "react";
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

export function LoadingSkeleton() {
    return (
        <>
            <Box d="flex" flexDir="column" >
                <Skeleton h="300px" w="300px" />
                <SkeletonText mt="4" noOfLines={3} spacing="4" />
            </Box>
            <Box d="flex" flexDir="column" >
                <Skeleton h="300px" w="300px" />
                <SkeletonText mt="4" noOfLines={3} spacing="4" />
            </Box>
            <Box d="flex" flexDir="column" >
                <Skeleton h="300px" w="300px" />
                <SkeletonText mt="4" noOfLines={3} spacing="4" />
            </Box>
            <Box d="flex" flexDir="column" >
                <Skeleton h="300px" w="300px" />
                <SkeletonText mt="4" noOfLines={3} spacing="4" />
            </Box>
            <Box d="flex" flexDir="column" >
                <Skeleton h="300px" w="300px" />
                <SkeletonText mt="4" noOfLines={3} spacing="4" />
            </Box>
            <Box d="flex" flexDir="column" >
                <Skeleton h="300px" w="300px" />
                <SkeletonText mt="4" noOfLines={3} spacing="4" />
            </Box>
        </>
    )
}
