import { IconType } from "react-icons";

export interface MenuItem {
  icon: IconType;
  title: string;
  path: string;
}

export interface SidebarProps {
  items: MenuItem[];
}
export interface MenuItemProps {
  item: MenuItem;
}
