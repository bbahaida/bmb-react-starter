import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb as Crumb,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { items } from "../config/menu-items";
import React from "react";
import { BreadcrumbProps } from "../types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <Crumb mb="20px">
      {paths.map((p, i) => {
        let crumb = (
          <BreadcrumbItem key={p}>
            <BreadcrumbLink as={Link} to={p}>
              {items.find((i) => i.path == p)?.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );

        if (paths.length - 1 === i) {
          crumb = (
            <BreadcrumbItem key={p} isCurrentPage>
              <span>{items.find((i) => i.path == p)?.title}</span>
            </BreadcrumbItem>
          );
        }
        return crumb;
      })}
    </Crumb>
  );
};

export default Breadcrumb;
