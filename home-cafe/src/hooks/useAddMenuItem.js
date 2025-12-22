import { useMutation } from "@tanstack/react-query";
import { MENU_ITEMS_URL } from "../constants";

const addMenuItemFn = (menuItem = {}) => {
  return fetch(MENU_ITEMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(menuItem),
  }).then((res) => res.json());
};

export const useAddMenuItem = (options) => {
  return useMutation({
    mutationFn: (menuItem) => addMenuItemFn(menuItem),
    ...options,
  });
};
