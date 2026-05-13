import { useMutation } from "@tanstack/react-query";
import { ORDER_ITEM_URL } from "../constants";
import { formatSpecialRequests } from "../components/utils";

const orderItemsFn = (orderData = {}) => {
  const { id, customerName, sweetener, isDecaf, sugarLevel, specialRequests, description, name } =
    orderData;

  const payload = {
    menuItemId: id,
    customerName,
    sweetener,
    specialRequests: formatSpecialRequests({
      isDecaf,
      specialRequests,
      sugarLevel,
      name,
      description
    }),
  };
  return fetch(ORDER_ITEM_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
};

export const useOrderItem = (options) => {
  return useMutation({
    mutationFn: (orderData) => orderItemsFn(orderData),
    ...options,
  });
};
