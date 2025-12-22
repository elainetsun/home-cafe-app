import { useQueryClient } from "@tanstack/react-query";
import { useMenuItems } from "../hooks/useMenuItems";
import { usePendingOrderList } from "../hooks/usePendingOrderList";
import { Stack, Button, Box, Typography } from "@mui/material";
import { useUpdateOrderStatus } from "../hooks/useUpdateOrderStatus";
import { getTimeAgo } from "./utils";

const breakStringEvery20 = (text = "") => {
  return text.match(/.{1,20}/g)?.join("\n") || "";
};

export const PendingOrdersList = () => {
  const queryClient = useQueryClient();
  const { data = [] } = usePendingOrderList();

  const handleSuccess = () => {
    queryClient.invalidateQueries();
  };

  const handleCopy = ({
    customerName,
    menuItemName,
    sweetener,
    specialRequests,
  }) => {
    const textToCopy = `Name: ${customerName}\nItem: ${menuItemName}\nSugar: ${sweetener}\nRequest:\n${breakStringEvery20(specialRequests)}`;
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
        const {
          id,
          customerName,
          sweetener,
          specialRequests,
          menuItemName,
          createdAt,
        } = order;

        return (
          <>
            <Typography
              sx={{
                marginBottom: "-15px",
                fontSize: "12px",
                paddingLeft: "5px",
              }}
            >
              {getTimeAgo(createdAt)}
            </Typography>
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
                <div>Item: {menuItemName}</div>
                <div>Sugar: {sweetener}</div>
                <div>Request: {specialRequests}</div>
              </Stack>
              <Stack sx={{ gap: 1 }}>
                <Button
                  onClick={() =>
                    handleCopy({
                      menuItemName,
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

const getItemName = (id, menuItems = []) => {
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
