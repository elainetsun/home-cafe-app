import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";
import { MenuPage } from "./components/MenuPage";
import { AppHeader } from "./components/AppHeader";
import { OrderForm } from "./components/OrderForm";
import { PendingOrdersList } from "./components/PendingOrdersList";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box sx={{ p: 2 }}>
          <AppHeader />
          <Routes>
            <Route path="*" element={<MenuPage />} />
            <Route path="/order/:id" element={<OrderForm />} />
            <Route path="/pendingOrders" element={<PendingOrdersList />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
