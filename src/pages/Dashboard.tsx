import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

export default function Dashboard() {
  const borderColor = useColorModeValue("full.900", "white");
  const bg = useColorModeValue("white", "full.900");
  return (
    <SimpleGrid spacing={10} columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
      <Box bg={bg} h="300px" border="1px solid" borderColor={borderColor}></Box>
      <Box bg={bg} h="300px" border="1px solid" borderColor={borderColor}></Box>
      <Box bg={bg} h="300px" border="1px solid" borderColor={borderColor}></Box>
      <Box bg={bg} h="300px" border="1px solid" borderColor={borderColor}></Box>
      <Box bg={bg} h="300px" border="1px solid" borderColor={borderColor}></Box>
      <Box bg={bg} h="300px" border="1px solid" borderColor={borderColor}></Box>
      <Box bg={bg} h="300px" border="1px solid" borderColor={borderColor}></Box>
      <Box bg={bg} h="300px" border="1px solid" borderColor={borderColor}></Box>
      <Box bg={bg} h="300px" border="1px solid" borderColor={borderColor}></Box>
    </SimpleGrid>
  );
}
