import { useQuery } from "@tanstack/react-query";
import { MENU_ITEMS_URL } from "../constants";

const getMenuItem = ({ queryKey = [] }) => {
  const { id } = queryKey[1];
  return fetch(`${MENU_ITEMS_URL}/${id}`, {
    method: "GET",
  }).then((res) => res.json());
};

const getMenuItems = () => {
  return fetch(MENU_ITEMS_URL, {
    method: "GET",
  }).then((res) => res.json());
};

export const useMenuItemById = ({ id, options }) => {
  return useQuery({
    queryKey: ["menuItems", { id }],
    queryFn: getMenuItem,
    ...options,
  });
};

export const useMenuItems = (options) => {
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: getMenuItems,
    ...options,
  });
};
