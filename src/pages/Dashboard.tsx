import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid spacing={10} columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
      <Box bg="white" h="300px" border="1px solid"></Box>
      <Box bg="white" h="300px" border="1px solid"></Box>
      <Box bg="white" h="300px" border="1px solid"></Box>
      <Box bg="white" h="300px" border="1px solid"></Box>
      <Box bg="white" h="300px" border="1px solid"></Box>
      <Box bg="white" h="300px" border="1px solid"></Box>
      <Box bg="white" h="300px" border="1px solid"></Box>
      <Box bg="white" h="300px" border="1px solid"></Box>
      <Box bg="white" h="300px" border="1px solid"></Box>
      <Box bg="white" h="300px" border="1px solid"></Box>
    </SimpleGrid>
  );
}
