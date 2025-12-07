// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
    text: {
      primary: "#574243",
      secondary: "#7a6a67",
    },
    primary: {
      main: "#6b5850", // brown button
      contrastText: "#ffffff", // white text
    },
    secondary: {
      main: "#f5eef2ff", // mauve accent
      contrastText: "#ffffff", // white text
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: Array(25).fill("0 6px 16px rgba(0,0,0,0.06)"),
  typography: {
    fontFamily: `"Comfortaa", sans-serif`,
    h1: {
      fontFamily: `"Comfortaa", sans-serif`,
      fontWeight: 700,
      fontSize: "1.8rem",
      color: "#574243",
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#574243",
    },
    subtitle1: {
      fontFamily: `"Kalam", cursive`,
      fontSize: "0.9rem",
      color: "#7a6a67",
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#574243",
    },
    body2: {
      fontSize: "0.85rem",
      color: "#7a6a67",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: "14px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          border: "1px solid #e8e2e4",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          background: "#6b5850",
          borderRadius: 12,
          padding: "8px 12px",
          boxShadow: "0 6px 12px rgba(60,48,40,0.16)",
          fontWeight: 700,
          textTransform: "none",
          "&:hover": {
            background: "#594841",
          },
        },
      },
    },
  },
});

export default theme;
