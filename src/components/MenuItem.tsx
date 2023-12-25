import React from "react";
import { MenuItemProps } from "../types";
import { ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <NavLink to={item.path}>
      <ListItem display="flex" alignItems="center" mb="10px">
        <ListIcon as={item.icon} />
        {item.title}
      </ListItem>
    </NavLink>
  );
};

export default MenuItem;
