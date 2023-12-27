import { Location } from "react-router-dom";

export const getPath = (location: Location): string[] => {
  let path = location.pathname.split("/");
  const lastIndex = path.length - 1;
  if (path[lastIndex] === "") {
    path = path.slice(0, lastIndex);
  }
  return path.map((p) => `/${p}`);
};
