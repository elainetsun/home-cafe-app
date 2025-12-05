import { MenuHeader, MenuItemContainer } from "./MenuComponents.js";
import { Box } from "@mui/material";
import theme from "../theme";

export const AppContent = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <MenuHeader />
      <MenuItemContainer />
    </Box>
  );
};
