import { Box } from "@mui/material";
import { DrinkCard } from "./DrinkCard";
import { useMenuItems } from "../hooks/useMenuItems";

export const MenuPage = () => {
  const { data: menuItems = [] } = useMenuItems();

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      }}
    >
      {menuItems?.map((card) => (
        <DrinkCard {...card} />
      ))}
    </Box>
  );
};
