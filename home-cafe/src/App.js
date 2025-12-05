import { AppContent } from "./components/AppContent";
import { AppHeader } from "./components/AppHeader";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader />
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
