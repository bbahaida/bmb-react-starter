import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Create() {
  const borderColor = useColorModeValue("full.900", "white");
  const bg = useColorModeValue("white", "full.900");
  return (
    <Flex justify="center">
      <Box
        minW="70vw"
        minH="60vh"
        border="1px solid"
        bg={bg}
        borderColor={borderColor}
      ></Box>
    </Flex>
  );
}
