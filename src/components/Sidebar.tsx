import React from "react";

import { Box, List, useColorModeValue } from "@chakra-ui/react";
import { SidebarProps } from "../types";
import MenuItem from "./MenuItem";

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const bg = useColorModeValue("white", "full.900");
  const boxShadow = "3px 0 5px -2px" + useColorModeValue("#9f9f9f", "#fee");
  return (
    <Box
      as="aside"
      bg={bg}
      boxShadow={boxShadow}
      minH="calc(100vh - 60px)"
      padding="20px"
    >
      <List color={useColorModeValue("full.900", "white")} fontSize="1.1em">
        {items.map((i) => (
          <MenuItem item={i} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
