import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { useMenuItems } from "../hooks/useMenuItems";
import { LoadingSpinner } from "./utils";
import { DrinkCard } from "./DrinkCard";
import { StyledCardContainer } from "./MenuPage";

export const EditMenu = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editMenu/${id}`);
  };

  const handleAdd = () => {
    navigate(`/addMenuItem`);
  };

  const handleback = () => {
    navigate(`/`);
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
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
      >
        <Typography variant="h2" sx={{ m: 0 }}>
          Edit Menu Items
        </Typography>
        <div>
          <Button variant="outlined" onClick={handleback} sx={{ mr: 1 }}>
            Menu Page
          </Button>
          <Button variant="contained" onClick={handleAdd}>
            + Add new menu item
          </Button>
        </div>
      </Box>
      <StyledCardContainer sx={{ p: 1 }}>
        {allItems?.map((card) => (
          <DrinkCard isEdit onEdit={handleEdit} {...card} />
        ))}
      </StyledCardContainer>
    </>
  );
};
