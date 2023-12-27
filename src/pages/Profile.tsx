import {
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="20px" p="20px" colorScheme="pinky">
      <TabList>
        <Tab>User Info</Tab>
        <Tab>Update Password</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Grid templateColumns="repeat(4, 1fr)">
            <GridItem colSpan={4}>
              <Box padding="6" boxShadow="lg">
                <SkeletonCircle size="10" />
                <SkeletonText
                  mt="4"
                  noOfLines={3}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Box>
            </GridItem>
            <GridItem colSpan={3}>
              <Skeleton />
            </GridItem>
            <GridItem colSpan={1}>
              <Skeleton />
            </GridItem>
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
