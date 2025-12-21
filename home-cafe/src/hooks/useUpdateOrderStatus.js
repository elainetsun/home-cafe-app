import { useMutation } from "@tanstack/react-query";
import { ORDER_ITEM_URL } from "../constants";

const updateOrderFn = (id) => {
  const payload = { status: "Completed" };

  return fetch(`${ORDER_ITEM_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};

export const useUpdateOrderStatus = (options) => {
  return useMutation({
    mutationFn: (id) => updateOrderFn(id),
    ...options,
  });
};
