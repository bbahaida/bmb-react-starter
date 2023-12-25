import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      bg="white"
      borderBottom="1px solid"
      borderColor="pinky"
      as="nav"
      p="10px"
      alignItems="center"
      h="60px"
    >
      <Heading as="h4" pl="20px">
        Logo
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@bmb.dev</Text>
        <Button colorScheme="red">Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
