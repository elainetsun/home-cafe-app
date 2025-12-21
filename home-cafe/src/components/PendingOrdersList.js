import { useQueryClient } from "@tanstack/react-query";
import { useMenuItems } from "../hooks/useMenuItems";
import { usePendingOrderList } from "../hooks/usePendingOrderList";
import { Stack, Button, Box, Typography } from "@mui/material";
import { useUpdateOrderStatus } from "../hooks/useUpdateOrderStatus";

const breakStringEvery20 = (text = "") => {
  return text.match(/.{1,20}/g)?.join("\n") || "";
};

export const PendingOrdersList = () => {
  const queryClient = useQueryClient();
  const { data = [] } = usePendingOrderList();
  const { data: menuItems } = useMenuItems();

  const handleSuccess = () => {
    queryClient.invalidateQueries();
  };

  const handleCopy = ({
    customerName,
    itemName,
    sweetener,
    specialRequests,
  }) => {
    const textToCopy = `Name: ${customerName}\nItem: ${itemName}\nSugar: ${sweetener}\nRequest:\n${breakStringEvery20(specialRequests)}`;
    navigator.clipboard.writeText(textToCopy);
  };

  const { mutate } = useUpdateOrderStatus({ onSuccess: handleSuccess });

  const handleFinishOrder = (id) => {
    mutate(id);
  };

  const handleRefresh = () => {
    queryClient.refetchQueries({ queryKey: ["pendingOrderItems"] });
  };

  return (
    <Stack sx={{ gap: 2, width: "100%" }}>
      <Box sx={rowSx}>
        <Typography>Pending Orders</Typography>
        <Button variant="outlined" onClick={handleRefresh}>
          Refresh
        </Button>
      </Box>
      {data.length === 0 && <Typography>No Orders</Typography>}
      {data.map((order) => {
        const { id, customerName, sweetener, specialRequests, menuItemId } =
          order;
        const itemName = getItemName(menuItemId, menuItems);
        return (
          <>
            <Box sx={rowSx}>
              <Stack
                sx={{
                  border: "1px solid",
                  p: 1,
                  borderRadius: 1,
                  width: "100%",
                  wordBreak: "break-all",
                }}
              >
                <div>Name: {customerName}</div>
                <div>Item: {itemName}</div>
                <div>Sugar: {sweetener}</div>
                <div>Request: {specialRequests}</div>
              </Stack>
              <Stack sx={{ gap: 1 }}>
                <Button
                  onClick={() =>
                    handleCopy({
                      itemName,
                      customerName,
                      sweetener,
                      specialRequests,
                    })
                  }
                  variant="outlined"
                >
                  Copy
                </Button>
                <Button
                  onClick={() => handleFinishOrder(id)}
                  sx={{ height: "fit-content" }}
                >
                  Complete
                </Button>
              </Stack>
            </Box>
          </>
        );
      })}
    </Stack>
  );
};

const getItemName = (id, menuItems) => {
  const item = menuItems.find((item) => item.id === id);
  return item?.name;
};

const rowSx = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: 1,
  alignItems: "center",
};
