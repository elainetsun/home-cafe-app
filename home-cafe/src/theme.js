import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F7C6C7", // pastel pink
      contrastText: "#4E3B31", // dark brown text
    },
    secondary: {
      main: "#A67B5B", // coffee brown
      contrastText: "#FFF5F2", // light text on brown
    },
    background: {
      default: "#FFF5F2", // page background
      paper: "#FFF1E6", // card background
    },
    text: {
      primary: "#4E3B31", // dark brown
      secondary: "#8C6A57", // lighter brown for descriptions
    },
  },
  typography: {
    fontFamily: '"Nunito", sans-serif', // default body font
    h1: {
      fontFamily: '"Pacifico", cursive', // menu header
      fontSize: "2rem",
      fontWeight: 700,
      color: "#A67B5B",
    },
    h2: {
      fontFamily: '"Playfair Display", serif', // item names
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#4E3B31",
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#4E3B31",
    },
    body1: {
      fontFamily: '"Nunito", sans-serif', // item descriptions
      fontSize: "0.9rem",
      color: "#8C6A57",
    },
    body2: {
      fontFamily: '"Nunito", sans-serif',
      fontSize: "0.8rem",
      color: "#8C6A57",
    },
  },
});

export default theme;
