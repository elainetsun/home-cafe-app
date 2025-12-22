import { useMutation } from "@tanstack/react-query";
import { MENU_ITEMS_URL } from "../constants";

const editMenuItemFn = (menuItem = {}) => {
  console.log("elaine", menuItem);
  return fetch(`${MENU_ITEMS_URL}/${menuItem.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(menuItem),
  }).then((res) => res.json());
};

export const useEditMenuItem = (options) => {
  return useMutation({
    mutationFn: (menuItem) => editMenuItemFn(menuItem),
    ...options,
  });
};
