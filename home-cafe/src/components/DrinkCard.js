import theme from "../theme";
import { Box, Card, Typography, Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { emojis } from "../sampleMenuItems";
import { useDeleteMenuItem } from "../hooks/useDeleteMenuItem";
import { useQueryClient } from "@tanstack/react-query";

export const DrinkCard = ({
  id,
  imageURL,
  description,
  name,
  isItemOutOfStock = false,
  isEdit = false,
  onEdit = () => {},
}) => {
  const queryClient = useQueryClient();
  const { mutate } = useDeleteMenuItem({
    onSuccess: () => queryClient.refetchQueries(),
  });
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate(`/order/${id}`);
  };
  const handleDelete = () => {
    mutate(id);
  };

  const isOrderDisabled = !isEdit && isItemOutOfStock;

  return (
    <Card>
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: theme.palette.secondary.main,
          fontSize: 28,
        }}
      >
        {imageURL ? (
          <img
            src={imageURL}
            alt={description}
            style={{
              height: 64,
              width: 64,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          emojis[1]
        )}
      </Box>
      <Box flex={1}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body2" mt={0.5}>
          {description}
        </Typography>
        {isItemOutOfStock && (
          <Typography variant="body2" mt={0.5} color="red">
            Out of stock
          </Typography>
        )}
      </Box>

      <Box textAlign="right" display="flex" gap={1}>
        {isEdit && (
          <Button variant="outlined" onClick={handleDelete}>
            Delete
          </Button>
        )}
        <Tooltip title={isOrderDisabled ? "Out of stock" : ""}>
          <Box component="span" sx={{ cursor: "not-allowed" }}>
            <Button
              disabled={isOrderDisabled}
              variant="contained"
              onClick={() => (isEdit ? onEdit(id) : handleOrder())}
            >
              {isEdit ? "Edit" : "Order"}
            </Button>
          </Box>
        </Tooltip>
      </Box>
    </Card>
  );
};
