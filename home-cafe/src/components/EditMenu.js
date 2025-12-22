import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { useMenuItems } from "../hooks/useMenuItems";
import { LoadingSpinner } from "./utils";

export const EditMenu = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editMenu/${id}`);
  };

  const { data: menuItems, isLoading } = useMenuItems();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 2, gap: 2 }}>
      <Typography variant="h2" sx={{ m: 0 }}>
        Edit Menu Items
      </Typography>
      {menuItems.map(({ name, id }) => (
        <Button variant="text" onClick={() => handleEdit(id)}>
          {name}
        </Button>
      ))}
    </Box>
  );
};
