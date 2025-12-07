import { useQuery } from "@tanstack/react-query";
import { MENU_ITEMS_URL } from "../constants";
import { menuItems } from "../sampleMenuItems.js";

const getMenuItems = () => {
  return menuItems;
  //   return fetch(MENU_ITEMS_URL, {
  //     method: "GET",
  //   }).then((res) => res.json());
};

export const useMenuItems = (options) => {
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: getMenuItems,
    ...options,
  });
};
