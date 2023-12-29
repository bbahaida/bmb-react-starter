import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

const LoginLayout = () => {
  const bg = useColorModeValue("#eee", "full.500");
  return (
    <Grid bg={bg} minH="100vh" templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={6}>
        <Navbar />
      </GridItem>
      <GridItem
        p="1rem"
        colSpan={6}
        overflowY="auto"
        height="calc(100vh - 60px)"
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default LoginLayout;
