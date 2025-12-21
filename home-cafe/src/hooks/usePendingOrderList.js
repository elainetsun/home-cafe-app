import { useQuery } from "@tanstack/react-query";
import { PENDING_ORDERS_URL } from "../constants";

const getPendingOrderItems = () => {
  return fetch(PENDING_ORDERS_URL, {
    method: "GET",
  }).then((res) => res.json());
};

export const usePendingOrderList = (options = []) => {
  return useQuery({
    queryKey: ["pendingOrderItems"],
    queryFn: getPendingOrderItems,
    ...options,
  });
};
