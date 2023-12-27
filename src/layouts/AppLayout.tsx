import {
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/aside/Sidebar";
import Navbar from "../components/nav/Navbar";
import { items } from "../config/menu-items";
import { getPath } from "../utils/BreadcrumbUtils";
import Breadcrumb from "./Breadcrumb";

export default function AppLayout() {
  const paths = getPath(useLocation());
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
        <Breadcrumb paths={paths} />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
