import theme from "../theme";
import { Box, Card, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { emojis } from "../sampleMenuItems";

export const DrinkCard = ({ id, emoji, description, displayName }) => {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate(`/order/${id}`);
  };

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
        {emojis[emoji]}
      </Box>

      <Box flex={1}>
        <Typography variant="h3">{displayName}</Typography>
        <Typography variant="body2" mt={0.5}>
          {description}
        </Typography>
      </Box>

      <Box textAlign="right">
        <Button onClick={handleOrder}>Order</Button>
      </Box>
    </Card>
  );
};
