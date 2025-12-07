import { useQuery } from "@tanstack/react-query";
import { MENU_ITEMS_URL } from "../constants";

const menuItems = [
  {
    id: 1,
    emoji: "☕",
    title: "Cafe latte",
    desc: "Espresso, milk",
  },
  {
    id: 2,
    emoji: "🍵",
    title: "Matcha latte",
    desc: "Matcha, milk",
  },
  {
    id: 3,
    emoji: "🍫",
    title: "Hot chocolate",
    desc: "Yuum",
  },
];

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
