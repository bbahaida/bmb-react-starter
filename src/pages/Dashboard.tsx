import { SimpleGrid, Skeleton } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      <Skeleton h="200px" />
      <Skeleton h="200px" />
      <Skeleton h="200px" />
      <Skeleton h="200px" />
      <Skeleton h="200px" />
      <Skeleton h="200px" />
      <Skeleton h="200px" />
    </SimpleGrid>
  );
}
