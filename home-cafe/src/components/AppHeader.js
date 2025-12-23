import { Box, Typography } from "@mui/material";
import BearLogoImg from "../sp.jpg";
import theme from "../theme";
import { APP_HEADER_TEXT, APP_HEADER_SUBTEXT } from "../constants";

export const AppHeader = () => (
  <Box display="flex" gap={2} alignItems="center" mb={2} p={1}>
    <Box
      sx={{
        width: 56,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.secondary.main}`,
      }}
    >
      <img
        src={BearLogoImg}
        alt="Bear Logo"
        style={{
          width: 48,
          height: 48,
          display: "block",
          background: "transparent",
          borderRadius: "50%",
        }}
      />
    </Box>
    <Box>
      <Typography variant="h1" sx={{ m: 0 }}>
        {APP_HEADER_TEXT}
      </Typography>
      <Typography variant="subtitle1">{APP_HEADER_SUBTEXT}</Typography>
    </Box>
  </Box>
);
