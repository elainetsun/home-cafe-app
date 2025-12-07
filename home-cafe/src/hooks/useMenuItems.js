import { useQuery } from "@tanstack/react-query";
import { MENU_ITEMS_URL } from "../constants";

const menuItems = [
  {
    emoji: "☕",
    title: "Cafe latte",
    desc: "Espresso, milk",
  },
  {
    emoji: "🍵",
    title: "Matcha latte",
    desc: "Matcha, milk",
  },
  {
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

export const useMenuItems = () => {
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: getMenuItems,
  });
};
