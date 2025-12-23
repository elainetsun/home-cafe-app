import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { useMenuItems } from "../hooks/useMenuItems";
import { LoadingSpinner } from "./utils";
import { DrinkCard } from "./DrinkCard";

export const EditMenu = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editMenu/${id}`);
  };

  const handleAdd = () => {
    navigate(`/addMenuItem`);
  };

  const { data: menuItems = [], isLoading } = useMenuItems();

  const allItems = useMemo(
    () => menuItems.sort((a, b) => a?.id - b?.id),
    [menuItems],
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ m: 0 }}>
          Edit Menu Items
        </Typography>
        <Button variant="contained" onClick={handleAdd}>
          + Add new menu item
        </Button>
      </Box>

      {allItems?.map((card) => (
        <DrinkCard isEdit onEdit={handleEdit} {...card} />
      ))}
    </Box>
  );
};
