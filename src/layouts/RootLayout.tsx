import {
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { items } from "../config/menu-items";

export default function RootLayout() {
  const bg = useColorModeValue("#eee", "full.500");
  const sidebarSpan = useBreakpointValue({ base: 6, md: 1 });
  const contentSpan = useBreakpointValue({ base: 6, md: 5 });
  return (
    <Grid bg={bg} minH="100vh" templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={6}>
        <Navbar />
      </GridItem>
      <Show above="md">
        <GridItem colSpan={sidebarSpan} height="calc(100vh - 60px)">
          <Sidebar items={items} />
        </GridItem>
      </Show>

      <GridItem
        p="1rem"
        colSpan={contentSpan}
        overflowY="auto"
        height="calc(100vh - 60px)"
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
}
