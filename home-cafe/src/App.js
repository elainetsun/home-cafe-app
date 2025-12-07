import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import theme from "./theme";
import { MenuPage } from "./components/MenuPage";
import { AppHeader } from "./components/AppHeader";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box sx={{ p: 2 }}>
          <AppHeader />
          <MenuPage />
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
