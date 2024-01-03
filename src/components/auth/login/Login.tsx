import { Flex, Heading, Skeleton } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex alignItems="center" direction="column" gap={2}>
      <Heading colorScheme="pinky" size="lg" textAlign="center">
        Login
      </Heading>
      <Skeleton w="lg" h="md" />
    </Flex>
  );
};

export default Login;
