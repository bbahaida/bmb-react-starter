import React from "react";

import { List } from "@chakra-ui/react";
import { SidebarProps } from "../types";
import MenuItem from "./MenuItem";

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <List
      bg="white"
      boxShadow="3px 0 5px -2px #666"
      minH="calc(100vh - 60px)"
      color="full"
      fontSize="1.1em"
      padding="20px"
    >
      {items.map((i) => (
        <MenuItem item={i} />
      ))}
    </List>
  );
};

export default Sidebar;
