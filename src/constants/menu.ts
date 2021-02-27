import { Route } from "./route";

export type MenuNode = {
  label: React.ReactNode;
  path: Route;
};

export const menu: MenuNode[] = [
  {
    label: "Wyszukiwarka",
    path: Route.Search,
  },
  {
    label: "Zapisane",
    path: Route.Saved,
  },
];
