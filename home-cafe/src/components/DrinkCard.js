import theme from "../theme";
import { Box, Card, Typography, Button } from "@mui/material";

export const DrinkCard = ({ emoji, desc, title }) => {
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
        {emoji}
      </Box>

      <Box flex={1}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body2" mt={0.5}>
          {desc}
        </Typography>
      </Box>

      <Box textAlign="right">
        <Button>Order</Button>
      </Box>
    </Card>
  );
};
