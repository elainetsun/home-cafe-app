import { useMutation } from "@tanstack/react-query";
import { MENU_ITEMS_URL } from "../constants";

const deleteMenuItemFn = async (id) => {
  const res = await fetch(`${MENU_ITEMS_URL}/${id}`, {
    method: "DELETE",
  });
  return res;
};

export const useDeleteMenuItem = (options) => {
  return useMutation({
    mutationFn: (id) => deleteMenuItemFn(id),
    ...options,
  });
};
