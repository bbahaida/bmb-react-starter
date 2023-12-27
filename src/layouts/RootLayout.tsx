import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Sidebar from "../components/aside/Sidebar";
import { items } from "../config/menu-items";
import { getPath } from "../utils/BreadcrumbUtils";

export default function RootLayout() {
  const path = getPath(useLocation());
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
        <Breadcrumb mb="20px">
          {path.map((p, i) => (
            <BreadcrumbItem key={p}>
              <BreadcrumbLink
                as={Link}
                to={p}
                isCurrentPage={i + 1 == path.length}
              >
                {items.find((i) => i.path == p)?.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        <Outlet />
      </GridItem>
    </Grid>
  );
}
