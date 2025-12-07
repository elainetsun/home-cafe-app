import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import theme from "./theme";
import { MenuPage } from "./components/MenuPage";
import { AppHeader } from "./components/AppHeader";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 2 }}>
        <AppHeader />
        <MenuPage />
      </Box>
    </ThemeProvider>
  );
}
