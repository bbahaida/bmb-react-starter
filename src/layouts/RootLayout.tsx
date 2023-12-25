import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { items } from "../config/menu-items";

export default function RootLayout() {
  return (
    <Grid bg="light.100" templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={6}>
        <Navbar />
      </GridItem>
      <GridItem colSpan={1}>
        <Sidebar items={items} />
      </GridItem>
      <GridItem colSpan={5}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}
